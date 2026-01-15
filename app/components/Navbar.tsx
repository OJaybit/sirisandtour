'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  {
    name: 'TOURS',
    href: '/tours',
    dropdown: [
      'Cairo',
      'Luxor',
      'Hurghada',
      'Marsa Alam',
      'Sharm El Sheikh',
      'Aswan',
      'Siwa',
      'Fayoum',
    ],
  },
  { name: 'DESTINATIONS', href: '/destinations' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // **NEW**: track scroll direction to hide navbar
  const [hide, setHide] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Basic "scrolled" for background opacity
      setScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down after leaving Hero (assume hero ~600px)
      if (currentScrollY > 600 && currentScrollY > lastScrollY) {
        setHide(true);
      } else {
        setHide(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={false}
      animate={{ y: hide ? -120 : 0 }} // hide by moving up
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/10 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <div className="relative w-48 h-32 top-2 md:w-72 md:h-44 -my-6 md:-my-10">
             <Image 
               src="/logo.png" 
               alt="Sirisand Logo" 
               fill
               className="object-contain object-left"
               priority
             />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group -top-4"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link
                href={link.href}
                className={`text-sm font-bold tracking-widest transition-colors ${
                  scrolled ? 'text-white hover:text-[#0A7BBE]' : 'text-white hover:text-[#0A7BBE]'
                }`}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="inline w-4 h-4 ml-1" />}
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <AnimatePresence>
                  {hoveredLink === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      <div className="py-2">
                        {link.dropdown.map((city) => (
                          <Link
                            key={city}
                            href={`/tours/${city.toLowerCase().replace(/ /g, '-')}`}
                            className="block px-6 py-3 text-sm font-medium text-gray-600 hover:bg-cyan-50 hover:text-[#0A7BBE] transition-colors"
                          >
                            {city}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-colors group"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-gray-900 to-black z-40 md:hidden overflow-y-auto"
            >
              <div className="pt-32 px-8 pb-8">
                {navLinks.map((link, index) => (
                  <motion.div 
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-2xl font-bold text-white hover:text-cyan-400 transition-colors mb-3"
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-4 mt-3 space-y-2 border-l-2 border-cyan-500/30">
                        {link.dropdown.map(city => (
                          <Link 
                            key={city}
                            href={`/tours/${city.toLowerCase().replace(/ /g, '-')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-base text-gray-300 hover:text-cyan-400 font-medium transition-colors"
                          >
                            {city}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
