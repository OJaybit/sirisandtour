'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';

const tours = [
  {
    id: 'hurghada',
    city: 'Hurghada',
    tag: 'Red Sea Paradise',
    image: '/images/tours/hurghada.webp',
    rating: '4.9',
    details: 'Tawila Island, Orange Bay, Submarine & Safari',
    link: '#'
  },
  {
    id: 'fayoum',
    city: 'Fayoum',
    tag: 'Desert Oasis',
    image: '/images/tours/fayoum.webp',
    rating: '4.8',
    details: 'Tunis Village, Wadi El Rayan & Sandboarding',
    link: '#'
  },
  {
    id: 'marsa-alam',
    city: 'Marsa Alam',
    tag: 'Diving Haven',
    image: '/images/tours/marsa-alam.webp',
    rating: '5.0',
    details: 'Royal Sea Scope, Satayah Dolphin House & Safari',
    link: '#'
  },
  {
    id: 'cairo',
    city: 'Cairo',
    tag: 'Ancient History',
    image: '/images/tours/cairo.webp',
    rating: '5.0',
    details: 'Giza Pyramids, GEM Museum & Historic Mosques',
    link: '#'
  },
  {
    id: 'sharm',
    city: 'Sharm El-Sheikh',
    tag: 'Luxury Resort',
    image: '/images/tours/sharm.webp',
    rating: '4.9',
    details: 'Ras Mohamed, Tiran Island & Pirate Boat',
    link: '#'
  },
  {
    id: 'luxor',
    city: 'Luxor',
    tag: 'Open Air Museum',
    image: '/images/tours/luxor.webp',
    rating: '5.0',
    details: 'Valley of the Kings, Karnak & Hot Air Balloon',
    link: '#'
  },
  {
    id: 'siwa',
    city: 'Siwa',
    tag: 'Serene Escape',
    image: '/images/tours/siwa.webp',
    rating: '4.7',
    details: 'Salt Lakes, Shali Fortress & Safari',
    link: '#'
  },
  {
    id: 'aswan',
    city: 'Aswan',
    tag: 'Nubian Beauty',
    image: '/images/tours/aswan.webp',
    rating: '4.8',
    details: 'Philae Temple, High Dam & Felucca Ride',
    link: '#'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
    } 
  }
};

export default function TourGrid() {
  return (
    <section className="py-12 md:py-20 pb-16 md:pb-20 bg-linear-to-b from-slate-50 to-white" id="tours">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
        >
          <span className="text-[#0A7BBE] font-bold tracking-widest text-sm uppercase mb-3 block">
            Explore Our Tours
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            Choose Your <br />
            <span className="text-[#0A7BBE] bg-clip-text ">
              Perfect Adventure
            </span>
          </h2>
          <p className="text-slate-600 text-lg">
            From the deep blue of the Red Sea to the golden sands of the desert.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tours.map((tour) => (
            <motion.div 
              key={tour.id}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200 flex flex-col md:h-[420px]"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
        src={tour.image}
        alt={tour.city}
        fill
          sizes="(max-width: 768px) 100vw, 50vw"
        priority={tour.id === 'hurghada'}
        loading={tour.id === 'hurghada' ? 'eager' : 'lazy'}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-slate-900">{tour.rating}</span>
                </div>

                {/* Tag Badge */}
                <div className="absolute top-3 left-3 bg-[#0A7BBE] backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-semibold">{tour.tag}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#0A7BBE] transition-colors duration-300">
                  {tour.city}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed">
                  {tour.details}
                </p>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  <Link 
                    href={tour.link} 
                    className="flex-1 bg-[#0A7BBE] hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md"
                  >
                    <span className="md:hidden">Details</span>
                    <span className="hidden md:inline">View Details</span>
                  </Link>
                  <Link 
                    href={tour.link} 
                    className="flex-1 bg-white hover:bg-slate-50 border-2 border-[#0A7BBE] text-[#0A7BBE] text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-1 group/btn"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="mt-10 md:mt-16 text-center"
        >
          <Link href="/tours">
            <button className="px-10 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
              View All Tours
            </button>
          </Link>
        </motion.div> */}

      </div>
    </section>
  );
}