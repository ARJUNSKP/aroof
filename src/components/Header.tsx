import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent text-white py-[14px] px-[43px]" style={{padding:"14px 43px 14px 43px"}}>
      <div className="w-full flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-4">
          <div className="w-[50px] h-[50px] bg-[#0E70B8] flex items-center justify-center">
            {/* Custom Star Logo from screenshot */}
            <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div className="flex flex-col -mt-1">
            <div className="text-[28px] font-bold leading-none tracking-tight">a.roof</div>
            <div className="text-[10px] font-semibold tracking-wider mt-1">uPVC Roofing sheets</div>
          </div>
        </div>

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

