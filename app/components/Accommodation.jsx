'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Accommodation() {
  // Stagger container
  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  // Text / card item
  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Image fade ONLY
  const imageFade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-auto w-full bg-white py-24 overflow-hidden">

      {/* Decorative top-right starfish */}
      <div className="absolute bg-transparent -top-9 -right-20 -mt-5 w-32 h-32 lg:w-65 lg:h-48 pointer-events-none opacity-20">
        <img
          src="/starfish.png"
          alt="Top left Decoration"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-12 items-start">

          {/* LEFT IMAGE — FADE ONLY */}
          <motion.div
            variants={imageFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative w-full h-[520px] lg:w-[700px] lg:h-600px]"
          >
            <Image
              src="/room.webp"
              alt="Luxury accommodation"
              fill
                sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* RIGHT FEATURE CARDS */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col mt-10 gap-10 z-10"
          >
            {/* CARD 1 */}
            <motion.div variants={item} className="bg-[#0A7BBE] text-white p-8">
              <div className="mb-4 text-white/80">🛏️</div>
              <h3 className="text-xl font-semibold mb-3">Deluxe Rooms</h3>
              <p className="leading-relaxed text-white/90">
                Experience cozy sophistication with modern interiors,
                plush bedding, and serene garden views. Perfect for solo
                travelers or couples seeking comfort and style.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div variants={item} className="bg-[#0A7BBE] text-white p-8">
              <div className="mb-4 text-white/80">🌊</div>
              <h3 className="text-xl font-semibold mb-3">Ocean View Suites</h3>
              <p className="leading-relaxed text-white/90">
                Wake up to stunning panoramic views of the sea from
                your private balcony. These suites offer added space
                and luxury, ideal for families or small groups.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM TEXT */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-start z-10"
        >
          <motion.div variants={item}>
            <p className="text-sm tracking-[0.35em] text-[#0A7BBE] mb-3">
              Sirisandtour
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2C1E1E]">
              Stay in Comfort
            </h2>
          </motion.div>

          <motion.p
            variants={item}
            className="text-gray-600 leading-relaxed max-w-full"
          >
            Indulge in the ultimate relaxation with our diverse selection
            of accommodations, designed to cater to every traveler’s needs.
            Choose from elegant rooms, spacious suites, or private villas,
            each thoughtfully crafted to provide the perfect retreat.
          </motion.p>

          {/* Decorative bottom-left image */}
          <div className="absolute bg-transparent -left-30 mt-30 h-[300px] lg:w-[700px] lg:h-[400px] pointer-events-none opacity-20">
            <img
              src="/rebune.png"
              alt="Top left Decoration"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
