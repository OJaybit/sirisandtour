'use client';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="relative h-full w-full grid sm:grid-cols-[25%_75%]">

        {/* LEFT SIDE (desktop only) */}
        <div className="relative z-30 flex flex-col px-12 pt-40 bg-white hidden sm:flex">
          <p className="text-[16px] tracking-[0.55em] text-[#0A7BBE] mb-6">
            WELCOME TO
          </p>
          <h1 className="text-[72px] leading-[1.05] font-bold tracking-[-0.02em] text-[#1F4E79]">
            SIRISAND <br /> TOUR
          </h1>
          <p className="mt-14 max-w-[620px] text-[#0A7BBE] leading-tight">
            Where Luxury Meets Tranquility and Every Moment Becomes a Cherished Memory
          </p>
        </div>

        {/* RIGHT SIDE / VIDEO */}
        <div className="relative h-full w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/hero-video.mp4"
          />

          {/* Desktop gradient */}
          <div className="absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-white/95 to-transparent z-20 hidden sm:block" />

          {/* MOBILE overlay text — NEW RESPONSIVENESS */}
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 z-20 text-center sm:hidden">
            <p className="text-[14px] tracking-[0.55em] text-[#0A7BBE] mb-2">
              WELCOME TO
            </p>

            <h1 className="text-[32px] sm:text-[40px] font-bold leading-snug text-[#1F4E79]">
              SIRISAND <br /> TOUR
            </h1>

            {/* CENTERED tagline, adjusts to screen */}
            <p className="mt-4 text-[#0A7BBE] text-base sm:text-lg leading-relaxed max-w-full">
              Where Luxury Meets Tranquility and Every Moment Becomes a Cherished Memory
            </p>
          </div>

          {/*
          COMMENTED OLD MOBILE RESPONSIVENESS
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6 z-20 text-center sm:hidden">
            <p className="text-[14px] tracking-[0.55em] text-[#0A7BBE] mb-2">
              WELCOME TO
            </p>
            <h1 className="text-[36px] sm:text-[40px] font-bold leading-snug text-[#1F4E79]">
              SIRISAND <br /> TOUR
            </h1>
            <p className="mt-4 max-w-xs sm:max-w-sm text-[#0A7BBE] text-base leading-relaxed">
              Where Luxury Meets Tranquility and Every Moment <br /> Becomes a Cherished Memory
            </p>
          </div>
          */}
        </div>
      </div>
    </motion.section>
  );
}
