export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* LOGO */}
      <div className="absolute top-10 left-12 z-40">
        <p className="text-sm font-semibold text-gray-800">
          {/* logo */}
        </p>
        <p className="text-sm text-[#3FA7A1]">
          @sirisandtour
        </p>
      </div>

      <div className="relative grid grid-cols-[25%_75%] h-full">

        {/* LEFT SIDE */}
        <div className="relative z-30 flex flex-col px-12 pt-40 bg-white">
          <p className="text-[18px] tracking-[0.55em] text-[#3FA7A1] mb-6">
            WELCOME TO
          </p>

          <h1 className="text-[72px] leading-[1.05] font-bold tracking-[-0.02em]
text-[#1F4E79]">
           SIRISAND <br /> TOUR
          </h1>

          <p className="mt-14 max-w-[620px] text-[#3FA7A1] leading-tight">
            Where Luxury Meets Tranquility and Every Moment
            Becomes a Cherished Memory
          </p>
        </div>

        {/* RIGHT SIDE (VIDEO) */}
        <div className="relative h-full w-full">

          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/hero-video.mp4"
          />

          <div className="absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-white/95 to-transparent z-20" />
        </div>

      </div>
    </section>
  );
}
