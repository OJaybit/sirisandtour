'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  // Text stagger container
  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Text item animation
  const textItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Image animation (FADE ONLY)
  const imageFade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white mt-1 overflow-hidden relative">
      {/* STARFISH IMAGE TOP-RIGHT */}
      <div className="absolute bg-transparent -top-12 -right-17 w-32 h-32 lg:w-48 lg:h-48 pointer-events-none opacity-10">
        <img
          src="/starfish.png"
          alt="Top left Decoration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="grid lg:grid-cols-[220px_460px_1fr] min-h-[600px]">
        
        {/* LEFT BLUE STRIP */}
        <div className="hidden lg:flex items-center justify-center bg-[#0A7BBE]" />

        {/* Decorative rotated image */}
        <div className="absolute bg-transparent rotate-90 -left-75 mt-10 h-[300px] lg:w-[700px] lg:h-[600px] pointer-events-none opacity-5 hidden lg:block">
          <img
            src="/rebune.png"
            alt="Top left Decoration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* IMAGE — FADE-IN, HIDDEN ON MOBILE */}
        <motion.div
          variants={imageFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative overflow-visible -ml-3 w-[380px] hidden lg:block"
        >
          <Image
            src="/about-image.webp"
            alt="SIRISAND TOUR"
            fill
            className="object-contain translate-y-11 -translate-x-25"
            priority
          />
        </motion.div>

        {/* TEXT — STAGGERED SCROLL ANIMATION */}
        <div className="flex items-center mt-10 px-6 sm:px-10 lg:px-20">
          <motion.div
            className="max-w-xl lg:max-w-lg w-full mx-auto text-center lg:text-left items-center lg:items-start flex flex-col"
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={textItem}
              className="text-[13px] tracking-[0.35em] text-[#0A7BBE] mb-4"
            >
              SIRISAND TOUR
            </motion.p>

            <motion.h2
              variants={textItem}
              className="text-[36px] sm:text-[42px] lg:text-[56px] font-bold text-[#2C1E1E] mb-6 sm:mb-8"
            >
              ABOUT US
            </motion.h2>

            <motion.p
              variants={textItem}
              className="text-gray-600 leading-[1.7] mb-6"
            >
              Welcome to a sanctuary of relaxation and elegance, where every
              detail is designed to create unforgettable experiences.
            </motion.p>

            <motion.p
              variants={textItem}
              className="text-gray-600 leading-[1.7] mb-10"
            >
              Whether you seek luxurious comfort, eco-friendly living, or a
              family-friendly escape, we offer a refined experience tailored
              to every guest.
            </motion.p>

            <motion.button
              variants={textItem}
              className="px-7 py-3 rounded-full bg-[#0A7BBE] text-white text-sm hover:opacity-90 transition"
            >
              @sirisandtour
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
