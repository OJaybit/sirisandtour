import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full bg-white overflow-hidden relative">
      {/* STARFISH IMAGE TOP-RIGHT */}
      <div className="absolute -top-4 -right-8 w-32 h-32 lg:w-48 lg:h-48 opacity-30 pointer-events-none">
        <Image
          src="/starfish.png"
          alt="Starfish"
          fill
          className="object-contain"
        />
      </div>

      <div className="grid lg:grid-cols-[220px_460px_1fr] min-h-[600px]">
        
        {/* lefthand BLUE STRIP */}
        <div className="hidden items-center lg:block justify-center bg-[#0A7BBE]" />
     
      <div className="absolute bg-transparent rotate-90 -left-50 mt-20 w-[108%] h-[300px] lg:w-[500px] lg:h-[500px] pointer-events-none opacity-10">

  <img
    src="/rebune.png" 
    alt="Top left Decoration"
    className="w-full h-full object-contain"
  />
</div>
        {/* IMAGE — OVERLAPS TOP & BLUE STRIP */}
        <div className="relative overflow-visible">
          <div className="relative h-[100%] translate-y-2 -translate-x-16">
            <Image
              src="/about-image.webp"
              alt="SIRISAND TOUR"
              fill
              className="object-cover shadow-lg"
              priority
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="flex items-center px-6 lg:px-20">
          <div className="max-w-xl -ml-20">
            <p className="text-[13px] tracking-[0.35em] text-[#0A7BBE] mb-4">
              SIRISAND TOUR
            </p>

            <h2 className="text-[42px] sm:text-[48px] lg:text-[56px] font-bold text-[#2C1E1E] mb-8">
              ABOUT US
            </h2>

            <p className="text-gray-600 leading-[1.7] mb-6">
              Welcome to a sanctuary of relaxation and elegance, where every
              detail is designed to create unforgettable experiences.
            </p>

            <p className="text-gray-600 leading-[1.7] mb-10">
              Whether you seek luxurious comfort, eco-friendly living, or a
              family-friendly escape, we offer a refined experience tailored
              to every guest.
            </p>

            <button className="px-7 py-3 rounded-full bg-[#0A7BBE] text-white text-sm hover:opacity-90 transition">
              @sirisandtour
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
