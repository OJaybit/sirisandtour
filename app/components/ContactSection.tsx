'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <section className="relative lg:h-screen bg-white overflow-hidden -mt-20">
      <div className="max-w-7xl mx-auto px-6 py-24 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ⭐ Star Shape Decoration (Top Right) */}
        <div className="absolute top-8 -right-10 w-36 h-36 opacity-30 pointer-events-none">
          <Image
            src="/starfish.png"
            alt="Star"
            fill
            className="object-contain"
          />
        </div>

        {/* 🎥 LEFT SIDE — VIDEO */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
          className=" rounded-2xl overflow-hidden lg:w-[600px] lg:h-[500px]"
        >
          {/* Video */}
          <video
            src="/video2.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[420px] object-cover"
          />

           {/* Decorative bottom-left image */}
          <div className="absolute -left-8 -mt-35 h-[300px] lg:w-[300px] lg:h-[400px] pointer-events-none opacity-30">
            <img
              src="/rebune.png"
              alt="Top left Decoration"
              className="w-full h-full object-contain"
            />
          </div>
          
        </motion.div>

        {/* RIGHT SIDE — CONTACT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <span className="text-[#0A7BBE] tracking-widest text-sm font-bold uppercase block mb-3">
            Sirisand tour
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Contact Us
          </h2>

          <p className="text-slate-600 text-lg mb-10 max-w-lg">
            Have questions or need assistance? Our team is always ready to help
            you plan the perfect stay. Reach out using any of the options below.
          </p>

          {/* 📞 Call */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0A7BBE] text-white rounded-xl p-6 mb-6 shadow-md"
          >
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-sm leading-relaxed">
              Speak directly with our support team for quick assistance at
              <strong> +1 234 567 890</strong>
            </p>
          </motion.div>

          {/* ✉️ Email */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0A7BBE] text-white rounded-xl p-6 shadow-md"
          >
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-sm leading-relaxed">
              Send your inquiries to
              <strong> contact@Sirisand.com</strong> and we’ll respond
              promptly.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
