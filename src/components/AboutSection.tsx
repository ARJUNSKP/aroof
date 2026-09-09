import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="w-full min-h-screen bg-white text-black py-[100px] px-[43px] relative z-10 flex flex-col justify-center">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-[29px] lg:gap-x-[74px]">

        {/* Left Column */}
        <div className="flex flex-col">
          <h2 className="text-[44px] md:text-[56px] leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-title)' }}>
            A-Roof (ASA Coating)
          </h2>

          <div className="text-[#555555] max-w-[560px] text-[16px] leading-relaxed space-y-6 mb-10">
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

          <div className="relative w-full mt-[30px] aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] overflow-hidden">
            <Image
              src="/Image (Architects in action).png"
              alt="Architects installing A-Roof"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column: Grid */}
        <div className="grid grid-cols-1 mt-[30px] md:grid-cols-2 border-t border-l border-[#E5E5E5]">

          {/* Top Left Cell */}
          <div className="border-r border-b border-[#E5E5E5] p-8 md:p-12 flex flex-col justify-center">
            <div className="text-[64px] font-bold leading-none mb-4 tracking-tight">15+</div>
            <p className="text-[#555555] text-[16px] leading-snug">
              Decades of reshaping the<br />standards of roofing design.
            </p>
          </div>

          {/* Top Right Cell */}
          <div className="border-r border-b border-[#E5E5E5] p-8 md:p-12 flex flex-col justify-center">
            <div className="text-[64px] font-bold leading-none mb-4 tracking-tight">20+</div>
            <p className="text-[#555555] text-[16px] leading-snug">
              Experts who have a deep<br />understanding of the field.
            </p>
          </div>

          {/* Bottom Left Cell */}
          <div className="border-r border-b border-[#E5E5E5] p-8 md:p-12 flex flex-col justify-center">
            <div className="text-[64px] font-bold leading-none mb-4 tracking-tight">84+</div>
            <p className="text-[#555555] text-[16px] leading-snug">
              Completed projects and<br />numerous satisfied clients.
            </p>
          </div>

          {/* Bottom Right Cell (Blue Box) */}
          <div className="bg-[#126AB1] text-white p-8 md:p-12 flex flex-col justify-between border-b border-r border-[#126AB1]">
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
