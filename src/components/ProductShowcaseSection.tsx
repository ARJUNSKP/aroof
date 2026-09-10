'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ProductShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollY = -top;
      const scrollableHeight = height - window.innerHeight;
      
      // Calculate progress from 0 to 1 as user scrolls
      const progress = Math.max(0, Math.min(1, scrollY / scrollableHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slides = [
    { title: "Tile UPVC Sheet", image: "/2c6eb5940c6e4f3355a99dc1dfe2595b427d7514.png" },
    { title: "Trafford Upvc Sheet", image: "/1 (3) 1.png" },
    { title: "Roma Upvc Sheet", image: "/2945844b1b9d59667a7b1531247c87ec3f27cc1f.png" }, // Added third product
  ];

  // We have 3 slides, so active index is based on thirds
  const activeIndex = scrollProgress < 0.33 ? 0 : scrollProgress < 0.66 ? 1 : 2;

  return (
    // 400vh allows enough vertical scroll distance to smoothly transition through 3 slides
    <section ref={containerRef} className="relative w-full bg-black" style={{ height: '400vh' }}>
      
      {/* Sticky Inner Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-black text-white">
        
        {/* Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-none">
          {/* Lamp Image */}
          <div className="w-[300px] h-[150px] relative">
            <Image 
              src="/eade6487ebe08d5f127a563531e1bec0f245865b.png" 
              alt="Lamp" 
              fill 
              className="object-contain object-top" 
            />
          </div>
          {/* Light Cone */}
          <div className="w-[800px] h-[800px] bg-white opacity-[0.03] -mt-10" style={{
            clipPath: 'polygon(45% 0, 55% 0, 100% 100%, 0% 100%)',
            background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)'
          }}></div>
        </div>

        {/* Top Left Navigation */}
        <div className="absolute top-[200px] md:top-[150px] left-5 md:left-[60px] z-30 flex flex-col sm:flex-row gap-4 sm:gap-8 text-[14px] font-semibold text-gray-400">
          <div className={`relative pb-2 transition-colors duration-300 w-fit ${activeIndex === 0 ? 'text-white' : ''}`}>
            Tile Upvc Sheet
            <div className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${activeIndex === 0 ? 'w-full' : 'w-0'}`}></div>
          </div>
          <div className={`relative pb-2 transition-colors duration-300 w-fit ${activeIndex === 1 ? 'text-white' : ''}`}>
            Trafford Upvc Sheet
            <div className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${activeIndex === 1 ? 'w-full' : 'w-0'}`}></div>
          </div>
          <div className={`relative pb-2 transition-colors duration-300 w-fit ${activeIndex === 2 ? 'text-white' : ''}`}>
            Roma Upvc Sheet
            <div className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${activeIndex === 2 ? 'w-full' : 'w-0'}`}></div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[40px] z-30">
          <div className="w-[50px] h-[50px] rounded-full border border-white/20 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </div>
        </div>
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-[40px] z-30">
          <div className="w-[50px] h-[50px] rounded-full border border-white/20 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>

        {/* Fixed Massive Circular Wireframe */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <div className="w-[70vh] h-[70vh] rounded-full border border-white/10"></div>
        </div>

        {/* Fixed Large Overlay Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none w-full text-center">
          <h2 
            className="text-[8vw] font-thin tracking-wider text-white mix-blend-overlay transition-opacity duration-300"
            style={{ fontFamily: '"Avenir Next", sans-serif' }}
          >
            {slides[activeIndex].title}
          </h2>
        </div>

        {/* Horizontal Scrolling Track */}
        {/* We have 3 slides, so track width is 300vw. We translate from 0 to -200vw. */}
        <div 
          className="flex h-full w-[300vw]"
          style={{ transform: `translateX(-${scrollProgress * 200}vw)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-screen h-full flex items-center justify-center relative">
              
              {/* Product Image ONLY */}
              <div className="w-[600px] h-[400px] relative z-10 transition-transform duration-700 ease-out hover:scale-105">
                <Image src={slide.image} alt={slide.title} fill className="object-contain" />
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
