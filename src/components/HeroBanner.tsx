'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadedCountState, setLoadedCountState] = useState(0);

  const frameCount = 240; // The number of frames we extracted from the GIF

  // Preload images
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format number to 3 digits, e.g., 001, 002
      const imgNumber = i.toString().padStart(3, '0');
      img.src = `/hero-frames/${imgNumber}.png`;
      img.onload = () => {
        loadedCount++;
        if (isMounted) {
          setLoadedCountState(loadedCount);
          if (loadedCount === frameCount) {
            setIsLoaded(true);
          }
        }
      };
      loadedImages.push(img);
    }
    if (isMounted) {
      setImages(loadedImages);
    }
    return () => { isMounted = false; };
  }, []);

  // Refs for smooth scrolling
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const rafId = useRef<number>(0);

  // Handle scroll and drawing
  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to window inner height/width for full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(Math.floor(currentProgress.current * (frameCount - 1)));
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Draw a specific frame
    function drawFrame(index: number) {
      if (!ctx || !canvas) return;
      const img = images[index];
      if (!img) return;

      // Calculate the scale to object-cover the image
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }

    // Smooth animation loop
    const updateFrame = () => {
      // Lerp (Linear Interpolation) to smooth out scroll movements
      currentProgress.current += (targetProgress.current - currentProgress.current) * 0.08;
      
      // Update state for the text overlay to sync with the smooth animation
      setScrollProgress(currentProgress.current);

      const frameIndex = Math.floor(currentProgress.current * (frameCount - 1));
      drawFrame(frameIndex);

      rafId.current = requestAnimationFrame(updateFrame);
    };

    // Scroll listener just updates the target
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollY = -top;
      // Subtract window height from total container height so progress is 1 when we reach the bottom of the container
      const maxScroll = height - window.innerHeight; 
      
      let progress = scrollY / maxScroll;
      progress = Math.max(0, Math.min(1, progress));
      
      targetProgress.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial draw and start loop
    handleScroll();
    rafId.current = requestAnimationFrame(updateFrame);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(rafId.current);
    };
  }, [isLoaded, images]);

  return (
    // The container height controls how much the user has to scroll to see all frames.
    // 400vh means the user has to scroll down 4 full screen heights to finish the animation.
    // While they scroll, the banner stays "sticky" on the screen.
    <div ref={containerRef} className="relative w-full" style={{ height: '400vh' }}>
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-black z-0">
        <canvas 
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        
        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
            <div className="relative flex items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 120 120" className="-rotate-90">
                {/* Background circle */}
                <circle cx="60" cy="60" r="50" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                {/* Progress circle */}
                <circle 
                  cx="60" 
                  cy="60" 
                  r="50" 
                  fill="transparent" 
                  stroke="white" 
                  strokeWidth="4" 
                  strokeDasharray={`${2 * Math.PI * 50}`}
                  strokeDashoffset={`${2 * Math.PI * 50 * (1 - loadedCountState / frameCount)}`}
                  className="transition-all duration-100 ease-out"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-white">
                <span className="text-xl font-bold tracking-wider" style={{ fontFamily: 'var(--font-title)' }}>
                  {Math.round((loadedCountState / frameCount) * 100)}%
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Dark gradient for text readability */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 z-10 pointer-events-none bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Text Overlay matching the reference image */}
        {/* Text slides up and fades in only when scroll is > 95% complete */}
        <div 
          className="absolute z-20 pointer-events-none transition-all duration-1000 ease-out left-5 md:left-11 bottom-10 md:bottom-[70px]"
          style={{ 
            opacity: scrollProgress > 0.95 ? 1 : 0,
            transform: `translateY(${scrollProgress > 0.95 ? '0' : '40px'})`,
          }}
        >
          <div className="max-w-4xl pr-5">
            <h1 className="text-4xl sm:text-5xl md:text-7xl text-white mb-4" style={{ fontFamily: 'var(--font-title)', fontWeight: 700 }}>
              Welcome to A-Roof<br />(ASA Coating)
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 pt-[18px]" style={{ fontFamily: 'var(--font-body)' }}>
              A-roof's sheet is asa (acrylonitrile styrene acrylate) coated pvc roofing sheet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
