'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const trendingItems = [
  { id: 1, title: "Nubian Village", image: "/images/trending/nubian.webp" },
  { id: 2, title: "Marsa Alam Diving", image: "/images/trending/marsa-alam.webp" },
  { id: 3, title: "Khan el-Khalili", image: "/images/trending/khan.webp" },
  { id: 4, title: "Sanctuary of Abu Simbel", image: "/images/trending/abu-simbel.webp" },
  { id: 5, title: "Royal Tombs of Luxor", image: "/images/trending/luxor-tombs.webp" },
  { id: 6, title: "The White Desert", image: "/images/trending/white-desert.webp" },
  { id: 7, title: "Siwa Salt Lakes", image: "/images/trending/siwa-salt.webp" },
  { id: 8, title: "Sunset at Philae", image: "/images/trending/philae.webp" },
  { id: 9, title: "Wadi Al-Hitan", image: "/images/trending/whale-valley.webp" },
  { id: 10, title: "Grand Egyptian Museum", image: "/images/trending/gem.webp" },
  { id: 11, title: "Sunrise Balloon", image: "/images/trending/balloon.webp" },
  { id: 12, title: "Mount Sinai Hike", image: "/images/trending/sinai.webp" },
];

/* STAGGER ONLY */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const imageFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Destinations() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Decorative starfish */}
        <div className="absolute top-40 right-20 w-64 h-64 opacity-25 -z-10 pointer-events-none">
          <Image
            src="/starfish.png"
            alt="Decoration"
            fill
            className="object-contain"
          />
        </div>

        {/* Header — simple fade */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#0A7BBE] text-xs tracking-[0.3em] font-semibold uppercase block mb-3">
            The Sirisand Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Signature Journeys
          </h2>
        </motion.div>

        {/* Cards — stagger only */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {trendingItems.map((item) => (
              <motion.div
                key={item.id}
                variants={card}
                className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <motion.div
                  variants={imageFade}
                  className="relative h-[320px]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="bg-[#0A7BBE] py-4 text-center">
                  <h3 className="text-white font-semibold">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
