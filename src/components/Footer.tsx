'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white pt-20 pb-8 px-6 md:px-16 lg:px-24 relative z-20">
      
      {/* Top Section: Newsletter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-16 border-b border-white/10 gap-8">
        <h3 className="text-2xl md:text-3xl text-gray-200 max-w-lg leading-snug" style={{ fontFamily: 'var(--font-title)' }}>
          Subscribe to our newsletter for updates and special offers.
        </h3>
        <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto items-end sm:items-center">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="bg-transparent border-b border-white/40 pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-white w-full sm:w-[350px]"
            style={{ fontFamily: 'var(--font-body)' }}
          />
          <button className="border border-white hover:bg-white hover:text-black transition-colors px-8 py-3 text-sm font-semibold shrink-0" style={{ fontFamily: 'var(--font-body)' }}>
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Middle Section: Links and Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/10">
        
        {/* Col 1: Brand & Contact */}
        <div className="flex flex-col gap-6 text-[13px] text-gray-400 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
          
          <Link href="/" className="relative w-[150px] h-[50px] block">
            <Image 
              src="/logo (3) 1.png" 
              alt="A-Roof Logo" 
              fill 
              className="object-contain object-left" 
            />
          </Link>
          
          <a href="mailto:reservations@aroof07@gmail.com" className="hover:text-white transition-colors mt-2">
            reservations@aroof07@gmail.com
          </a>
          <p>
            Thamarakkandom Road. Kumily<br />
            P.O, Thekkady 685509
          </p>
          <p>+91 6238600546</p>
          
          <button className="border border-white hover:bg-white hover:text-black transition-colors px-6 py-[10px] text-white font-medium w-fit mt-2">
            Enquire Now
          </button>
        </div>

        {/* Col 2: Links 1 */}
        <div className="flex flex-col gap-6 text-gray-300 text-[20px]" style={{ fontFamily: 'var(--font-title)' }}>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link href="/comparison" className="hover:text-white transition-colors">Comparison</Link>
          <Link href="/blogs" className="hover:text-white transition-colors">Blogs</Link>
          <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
        </div>

        {/* Col 3: Links 2 */}
        <div className="flex flex-col gap-6 text-gray-300 text-[20px]" style={{ fontFamily: 'var(--font-title)' }}>
          <Link href="/trafford" className="hover:text-white transition-colors">Trafford Upvc Sheet</Link>
          <Link href="/tile" className="hover:text-white transition-colors">Tile Upvc Sheet</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>

        {/* Col 4: Image & Back to Top */}
        <div className="flex flex-col justify-between items-start lg:items-end h-full">
          <div className="relative overflow-hidden" style={{ width: '271px', height: '192px' }}>
            <Image 
              src="/39918802124ea037b9498cb8e2063cdbfdd6598d.jpg" 
              alt="Roofing House" 
              fill 
              className="object-cover"
            />
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group lg:mt-auto lg:mr-8"
          >
            <div className="w-[38px] h-[38px] rounded-full border border-gray-500 group-hover:border-white flex items-center justify-center transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </div>
            <span className="text-[11px]" style={{ fontFamily: 'var(--font-body)' }}>Back to Top</span>
          </button>
        </div>

      </div>

      {/* Bottom Section: Copyright & Socials */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[12px] text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>
        <p>© Copyright 2026 | All Rights Reserved</p>
        <div className="flex gap-6 mt-4 md:mt-0 text-white">
          <a href="#" className="hover:text-gray-300 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"></path></svg>
          </a>
        </div>
      </div>
      
    </footer>
  );
}
