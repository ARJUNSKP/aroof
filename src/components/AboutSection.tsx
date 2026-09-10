'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const CountUpNumber = ({ target, suffix = '' }: { target: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000; // 2 seconds animation
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-[64px] font-bold leading-none mb-4 tracking-tight">
      {count}{suffix}
    </div>
  );
};

export default function AboutSection() {
  const [isGridVisible, setIsGridVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const [isContentVisible, setIsContentVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsGridVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (gridRef.current) {
      observer.observe(gridRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsContentVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full min-h-screen bg-white text-black py-16 md:py-[100px] px-5 md:px-[43px] relative z-10 flex flex-col justify-center">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-[29px] lg:gap-x-[74px]">

        {/* Left Column */}
        <div ref={contentRef} className="flex flex-col">
          <h2 className={`text-[44px] md:text-[56px] leading-[1.1] mb-6 transition-all duration-1000 ease-out ${isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ fontFamily: 'var(--font-title)' }}>
            A-Roof (ASA Coating)
          </h2>

          <div className={`text-[#555555] max-w-[560px] text-[16px] leading-relaxed space-y-6 mb-10 transition-all duration-1000 delay-[200ms] ease-out ${isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p>
              A-Roof is a innovative product by Aqua Star. (Ponnore Group). Keeping innovation at its
              core, the brand has successfully engraved a distinct space in the market within a very
              short span of time. It brings a new experience for those who want to venture into new
              technical products with a traditional look.
            </p>
            <p className='mt-[20px]'>
              A-Roof, offers you an aesthetic, efficient & high quality roofing sheets sheet.
            </p>
          </div>

          <div className={`relative w-full mt-[30px] aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] overflow-hidden transition-all duration-1000 delay-[400ms] ease-out ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Image
              src="/Image (Architects in action).png"
              alt="Architects installing A-Roof"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column: Grid */}
        <div ref={gridRef} className="relative grid grid-cols-1 mt-[30px] md:grid-cols-2">
          
          {/* Animated Outer Borders for the Grid */}
          <div className={`absolute top-0 left-0 h-[1px] bg-[#E5E5E5] transition-all duration-1000 ease-out origin-left ${isGridVisible ? 'w-full' : 'w-0'}`}></div>
          <div className={`absolute top-0 left-0 w-[1px] bg-[#E5E5E5] transition-all duration-1000 delay-[300ms] ease-out origin-top hidden md:block ${isGridVisible ? 'h-full' : 'h-0'}`}></div>

          {/* Top Left Cell */}
          <div className="relative p-8 md:p-12 flex flex-col justify-center">
            {/* Animated Cell Borders */}
            <div className={`absolute top-0 right-0 w-[1px] bg-[#E5E5E5] transition-all duration-1000 delay-[300ms] ease-out origin-top ${isGridVisible ? 'h-full' : 'h-0'}`}></div>
            <div className={`absolute bottom-0 left-0 h-[1px] bg-[#E5E5E5] transition-all duration-1000 delay-[600ms] ease-out origin-left ${isGridVisible ? 'w-full' : 'w-0'}`}></div>

            <CountUpNumber target={15} suffix="+" />
            <p className="text-[#555555] text-[16px] leading-snug">
              Decades of reshaping the<br />standards of roofing design.
            </p>
          </div>

          {/* Top Right Cell */}
          <div className="relative p-8 md:p-12 flex flex-col justify-center">
            {/* Animated Cell Borders */}
            <div className={`absolute top-0 right-0 w-[1px] bg-[#E5E5E5] transition-all duration-1000 delay-[300ms] ease-out origin-top ${isGridVisible ? 'h-full' : 'h-0'}`}></div>
            <div className={`absolute bottom-0 left-0 h-[1px] bg-[#E5E5E5] transition-all duration-1000 delay-[600ms] ease-out origin-left ${isGridVisible ? 'w-full' : 'w-0'}`}></div>

            <CountUpNumber target={20} suffix="+" />
            <p className="text-[#555555] text-[16px] leading-snug">
              Experts who have a deep<br />understanding of the field.
            </p>
          </div>

          {/* Bottom Left Cell */}
          <div className="relative p-8 md:p-12 flex flex-col justify-center">
            {/* Animated Cell Borders */}
            <div className={`absolute top-0 right-0 w-[1px] bg-[#E5E5E5] transition-all duration-1000 delay-[300ms] ease-out origin-top ${isGridVisible ? 'h-full' : 'h-0'}`}></div>
            <div className={`absolute bottom-0 left-0 h-[1px] bg-[#E5E5E5] transition-all duration-1000 delay-[600ms] ease-out origin-left ${isGridVisible ? 'w-full' : 'w-0'}`}></div>

            <CountUpNumber target={84} suffix="+" />
            <p className="text-[#555555] text-[16px] leading-snug">
              Completed projects and<br />numerous satisfied clients.
            </p>
          </div>

          {/* Bottom Right Cell (Blue Box) */}
          <div className={`relative bg-[#126AB1] text-white p-8 md:p-12 flex flex-col justify-between transition-opacity duration-1000 delay-[900ms] ${isGridVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-[18px] leading-snug font-medium mb-12">
              Design isn&apos;t just what we see — it&apos;s<br />how a space lives with you.
            </p>

            <a href="#about" className="inline-flex items-center gap-3 font-semibold text-[15px] hover:opacity-80 transition-opacity">
              <span className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center text-[10px]">
                <svg width="6" height="6" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5H9M9 5L5 1M9 5L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              About us
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
