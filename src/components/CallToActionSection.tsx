import Image from 'next/image';

export default function CallToActionSection() {
  return (
    <section className="relative z-10 w-full flex items-center justify-center py-[120px] md:py-[180px] overflow-hidden min-h-[500px]">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/8362b4a4c96b5da59afdf25f6b9ab56b9e25de7f.png" 
          alt="Roofing construction" 
          fill 
          className="object-cover object-center"
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 49.52%, #000000 100%)' }}
      ></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-[766px] mx-auto mt-20">
        <h2 
          className="text-white text-[32px] md:text-[42px] leading-[1.2] mb-6"
          style={{ fontFamily: 'var(--font-title)' }}
        >
          High-Quality Roofing,<br className="hidden md:block" />Delivered With Precision
        </h2>
        
        <p 
          className="text-white/90 text-[16px] leading-relaxed mb-10"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Talk To Our Specialists And Get A Clear<br className="hidden md:block" />Project Plan Within 24 Hours
        </p>

        <button className="bg-[#126AB1] hover:bg-[#0f5a96] transition-colors text-white font-medium text-[16px] py-4 px-8">
          Speak With an Expert
        </button>
      </div>

    </section>
  );
}
