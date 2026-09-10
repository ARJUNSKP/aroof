'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LatestArticles() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const articles = [
    {
      id: 1,
      category: 'Blog',
      date: 'June 15, 2026',
      title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its...',
      image: '/article_1.jpg',
      link: '#',
    },
    {
      id: 2,
      category: 'Blog',
      date: 'June 15, 2026',
      title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its...',
      image: '/article_2.jpg',
      link: '#',
    },
    {
      id: 3,
      category: 'Blog',
      date: 'June 15, 2026',
      title: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its...',
      image: '/article_3.jpg',
      link: '#',
    }
  ];

  return (
    <section className="relative z-10 w-full bg-white py-16 md:py-[100px] px-5 md:px-[43px]" style={{backgroundColor:"white"}}>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl text-black"
          style={{ fontFamily: 'var(--font-title)' }}
        >
          The Latest Articles
        </h2>
        <p 
          className="max-w-md text-gray-600 text-sm md:text-base leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Articles Grid */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div 
            key={article.id} 
            className={`group cursor-pointer flex flex-col transition-all duration-[1000ms] ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
            style={{ transitionDelay: `${index * 250}ms` }}
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] md:aspect-square mb-6 overflow-hidden bg-gray-100">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="w-24 h-24 rounded-full border border-white/50 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center text-white text-sm tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span>View</span>
                    <span>All</span>
                 </div>
              </div>
            </div>

            {/* Meta */}
            <div className="flex items-center text-gray-500 text-sm mb-3 font-medium">
              <span>{article.category}</span>
              <span className="mx-3 text-gray-300">|</span>
              <span>{article.date}</span>
            </div>

            {/* Title */}
            <h3 
              className="text-lg md:text-xl font-medium text-black mb-4 line-clamp-3 leading-snug"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {article.title}
            </h3>

            {/* Link */}
            <Link 
              href={article.link} 
              className="mt-auto text-[#0066cc] font-semibold text-sm hover:underline decoration-2 underline-offset-4"
            >
              View More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
