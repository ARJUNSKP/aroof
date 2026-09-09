'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function ProductDescriptionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollY = -top;
      const scrollableHeight = height - window.innerHeight;

      // Calculate progress from 0 to 1 as the user scrolls through the 300vh container
      const progress = Math.max(0, Math.min(1, scrollY / scrollableHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use the placeholder image you provided
  const placeholderImage = "/Image (Architects in action).png";

  return (
    // 200vh provides enough scroll area for a smooth, subtle parallax
    <section ref={containerRef} className="relative w-full bg-[#F4F4F4]" style={{ height: '200vh' }}>

      {/* Sticky Inner Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden py-[100px] px-[43px] flex items-center justify-center">

        <div className="w-full max-w-[1440px] flex items-center justify-between">

          {/* Left Column (Scrolls UP as user scrolls down) */}
          {/* Subtle parallax: moves from 200px down to -200px up */}
          <div 
            className="relative h-screen w-[280px]"
            style={{ transform: `translateY(${250 - scrollProgress * 500}px)` }}
          >
            {/* Image 1 - High up (matches left blue roof) */}
            <div className="absolute top-[10%] left-0 w-full h-[323px] overflow-hidden bg-gray-200">
              <Image src={placeholderImage} alt="Roof" fill className="object-cover" />
            </div>
            {/* Image 2 - Very low (matches bottom left dark roof) */}
            <div className="absolute top-[85%] left-40 w-full h-[323px] overflow-hidden bg-gray-200">
              <Image src={placeholderImage} alt="Roof" fill className="object-cover" />
            </div>
          </div>

          {/* Center Static Content */}
          <div className="relative z-10 w-full max-w-[560px] flex flex-col items-center text-center px-8">
            <h2
              className="text-[44px] text-[#121212] md:text-[48px] leading-[1.1] mb-8 max-w-[450px]"
              style={{ fontFamily: 'var(--font-title)' }}
            >
              A-Roof Product Description
            </h2>
            <div className="text-[#555555] text-[16px] leading-relaxed">
              <p>
                <strong>A-Roof&apos;s sheet is ASA (Acrylonitrile Styrene Acrylate) coated PVC roofing sheet.</strong>{' '}
                The products are special 3 layer co-extruded pvc sheets. The top layer material is made with ASA anti-climate
                engineering resin, which is suitable for outdoor use. Even when exposed to ultra-violet radiation,
                dampness, heat, chillness and impact, the product retains the colour and other physical properties
                and has excellent anti-corrosive properties.
              </p>
            </div>
          </div>

          {/* Right Column (Scrolls DOWN as user scrolls down) */}
          {/* Subtle parallax: moves from -200px up to 200px down */}
          <div 
            className="relative h-screen w-[280px]"
            style={{ transform: `translateY(${-250 + scrollProgress * 500}px)` }}
          >
            {/* Image 1 - Starts lower, aligned with paragraph (matches right brown roof) */}
            <div className="absolute top-[35%] left-0 w-full h-[323px] overflow-hidden bg-gray-200">
              <Image src={placeholderImage} alt="Roof" fill className="object-cover" />
            </div>
            {/* Image 2 - Extremely low (matches bottom right blue roof) */}
            <div className="absolute top-[95%] -left-40 w-full h-[323px] overflow-hidden bg-gray-200">
              <Image src={placeholderImage} alt="Roof" fill className="object-cover" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
