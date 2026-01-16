'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  const textContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageFade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* ⭐ STARFISH — ALWAYS VISIBLE */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:-top-12 lg:-right-16 
                      w-24 h-24 sm:w-28 sm:h-28 lg:w-48 lg:h-48 
                      opacity-30 pointer-events-none z-0">
        <Image
          src="/starfish.png"
          alt="Decoration"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative grid lg:grid-cols-[220px_460px_1fr] min-h-[600px] z-10">

        {/* LEFT BLUE STRIP (LG ONLY) */}
        <div className="hidden lg:flex bg-[#0A7BBE]" />

        {/* ROTATED DECOR (LG ONLY) */}
        <div className="absolute hidden lg:block rotate-90 -left-72 top-32 
                        w-[700px] h-[600px] opacity-5 pointer-events-none">
          <Image
            src="/rebune.png"
            alt="Decoration"
            fill
            className="object-contain"
          />
        </div>

        {/* IMAGE (LG ONLY) */}
        <motion.div
          variants={imageFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative hidden lg:block w-[380px]"
        >
          <Image
            src="/about-image.webp"
            alt="SIRISAND TOUR"
            fill
            className="object-contain translate-y-10 -translate-x-24"
            priority
          />
        </motion.div>

        {/* TEXT CONTENT */}
        <div className="flex items-center justify-center px-6 sm:px-10 lg:px-20 py-24 lg:-ml-50 lg:py-0">
          <motion.div
            className="max-w-xl w-full text-center lg:text-left flex flex-col items-center lg:items-start"
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={textItem}
              className="text-[12px] tracking-[0.35em] text-[#0A7BBE] mb-4"
            >
              SIRISAND TOUR
            </motion.p>

            <motion.h2
              variants={textItem}
              className="text-[34px] sm:text-[42px] lg:text-[56px] font-bold text-[#2C1E1E] mb-6"
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
