'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LatestVideos() {
  const [activeIndex, setActiveIndex] = useState(2);

  const videos = [
    { id: 1, type: 'image', src: '/3173f1c134b51f409b131e605f3a0c27e740e046.jpg' },
    { id: 2, type: 'image', src: '/1440bfea4500dd63bcda34fb9b9df54a8d571a02.jpg' },
    { id: 3, type: 'video', src: '/1823537_Village_Houses_1280x720.mp4' },
    { id: 4, type: 'image', src: '/24f016ffcc32b1a9760b844a9d31612cfaaf5d58 (1).jpg' },
    { id: 5, type: 'image', src: '/7d0e1d9bbbaad2186f1485899740f1e243754093.jpg' },
  ];

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [videos.length]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section 
      className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center py-16 md:py-[100px] overflow-hidden" 
      style={{ backgroundColor: '#116AB1' }}
    >
      
      {/* Header */}
      <div className="flex flex-col items-center justify-center px-4 mb-16 w-full mx-auto max-w-[776px]">
        <h2 
          className="text-white text-4xl md:text-[56px] leading-[1.1] mb-6 text-center"
          style={{ fontFamily: 'var(--font-title)' }}
        >
          Our Latest Videos
        </h2>
        <p 
          className="text-white/80 text-center text-[16px] leading-relaxed"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its...
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full h-[400px] md:h-[450px] flex justify-center items-center">
        {videos.map((video, idx) => {
          const diff = (idx - activeIndex + videos.length) % videos.length;
          
          let styles = '';
          let isCenter = false;

          // Determine styles based on position relative to active index
          if (diff === 0) {
            // Center
            styles = 'translate-x-0 scale-100 z-30 opacity-100 shadow-2xl';
            isCenter = true;
          } else if (diff === 1) {
            // Right
            styles = 'translate-x-[90%] md:translate-x-[110%] scale-[0.8] z-20 opacity-70 hidden sm:block';
          } else if (diff === videos.length - 1) {
            // Left
            styles = '-translate-x-[90%] md:-translate-x-[110%] scale-[0.8] z-20 opacity-70 hidden sm:block';
          } else if (diff === 2) {
            // Far Right
            styles = 'translate-x-[180%] md:translate-x-[200%] scale-[0.6] z-10 opacity-40 hidden md:block';
          } else if (diff === videos.length - 2) {
            // Far Left
            styles = '-translate-x-[180%] md:-translate-x-[200%] scale-[0.6] z-10 opacity-40 hidden md:block';
          }

          return (
            <div 
              key={video.id}
              onClick={() => setActiveIndex(idx)}
              className={`absolute top-0 left-1/2 -ml-[160px] md:-ml-[184px] w-[320px] h-[440px] md:w-[368px] md:h-[504px] bg-black overflow-hidden transition-all duration-700 ease-in-out cursor-pointer ${styles}`}
            >
              {video.type === 'video' ? (
                <video 
                  src={video.src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image src={video.src} alt={`Media ${video.id}`} fill className="object-cover" />
              )}
              
              {/* Overlay for non-center items */}
              {!isCenter && (diff === 1 || diff === videos.length - 1) && (
                <div className="absolute inset-0 bg-[#116AB1]/40 mix-blend-multiply transition-opacity duration-700"></div>
              )}
              {!isCenter && (diff === 2 || diff === videos.length - 2) && (
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-700"></div>
              )}

              {/* Navigation Arrows for Left and Right */}
              {diff === videos.length - 1 && (
                <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-700">
                  <div 
                    onClick={handlePrev}
                    className="w-12 h-12 border border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                  </div>
                </div>
              )}
              {diff === 1 && (
                <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-700">
                  <div 
                    onClick={handleNext}
                    className="w-12 h-12 border border-white flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              )}

              {/* Center Play Button */}
              {isCenter && (
                <div className="absolute top-6 right-6 hover:scale-105 transition-transform opacity-100 duration-700">
                  <svg width="48" height="34" viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="34" rx="8" fill="#FF0000"/>
                    <path d="M31 17L20.5 23.0622L20.5 10.9378L31 17Z" fill="white"/>
                  </svg>
                </div>
              )}

            </div>
          );
        })}

        {/* Global Pagination Indicators (5px below the center image) */}
        <div className="absolute top-[445px] md:top-[509px] left-1/2 -translate-x-1/2 w-[320px] md:w-[368px] flex justify-center gap-2 px-6 z-40">
          {videos.map((_, i) => (
            <div 
              key={i} 
              className={`flex-1 h-[2px] transition-colors duration-500 ${activeIndex === i ? 'bg-white' : 'bg-white/30'}`}
            ></div>
          ))}
        </div>
      </div>

    </section>
  );
}
