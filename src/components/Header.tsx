import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent text-white py-[14px] px-5 md:px-[43px]">
      <div className="w-full flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="relative w-[150px] h-[50px]">
          <Image 
            src="/logo (3) 1.png" 
            alt="A-Roof Logo" 
            fill 
            className="object-contain object-left" 
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-[40px] text-[15px] font-medium font-body tracking-wide">
          <Link href="#about" className="hover:opacity-80 transition-opacity flex items-center gap-1.5">
            About Us 
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none"><path d="M1 1.5L6 5.5L11 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <Link href="#products" className="hover:opacity-80 transition-opacity flex items-center gap-1.5">
            Our Products 
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none"><path d="M1 1.5L6 5.5L11 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <Link href="#installation" className="hover:opacity-80 transition-opacity">Installation</Link>
          <Link href="#comparison" className="hover:opacity-80 transition-opacity">Comparison</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center border border-white/50 backdrop-blur-sm bg-white/5 h-[42px] px-1">
          <Link href="#contact" className="hidden md:flex items-center h-full hover:bg-white/10 transition-colors font-medium text-[15px] px-4">
            Contact Us
          </Link>
          <div className="h-[20px] w-px bg-white/50 hidden md:block"></div>
          <button className="h-full px-4 hover:bg-white/10 transition-colors flex flex-col items-center justify-center gap-[5px]" aria-label="Menu">
             <div className="w-[22px] h-[1.5px] bg-white"></div>
             <div className="w-[22px] h-[1.5px] bg-white"></div>
             <div className="w-[22px] h-[1.5px] bg-white"></div>
          </button>
        </div>
      </div>
    </header>
  );
}

