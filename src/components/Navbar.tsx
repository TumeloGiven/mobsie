import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Branches',
    href: '#branches'
  },
  {
    name: 'Extra Murals',
    href: '#extramurals'
  },
  {
    name: 'Gallery',
    href: '#gallery'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/70 backdrop-blur-xl border-b border-ink/5 shadow-soft py-3' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 z-50 relative">
          <img
            src="/Mobise-Kids-Revised-Logo.png"
            alt="Mobsie Kids Logo"
            className="h-12 object-contain" />
          
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-ink-soft hover:text-ink font-display font-medium text-lg transition-colors relative group">
            
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-coral rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          )}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+27123456789"
            className="flex items-center gap-2 text-ink-soft hover:text-ink transition-colors text-base font-medium font-display">
            
            <Phone size={18} className="text-coral" />
            <span>012 345 6789</span>
          </a>
          <a
            href="#contact"
            className="bg-coral text-white px-7 py-2.5 rounded-full font-display font-medium text-lg transition-all shadow-glow-coral hover:scale-105 hover:shadow-[0_20px_50px_-12px_rgba(255,107,107,0.6)]">
            Get In Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 relative text-ink p-2 bg-white/50 rounded-full backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          className="absolute top-full left-4 right-4 mt-2 bg-white/90 backdrop-blur-xl shadow-elevated rounded-3xl border border-ink/5 p-6 flex flex-col gap-4 md:hidden">
          
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-ink font-display text-xl font-medium py-3 border-b border-ink/5">
            
                {link.name}
              </a>
          )}
            <div className="flex flex-col gap-4 mt-4">
              <a
              href="tel:+27123456789"
              className="flex items-center gap-3 text-ink font-medium font-display text-lg py-2">
              
                <div className="bg-coral/10 text-coral p-2 rounded-full">
                  <Phone size={20} />
                </div>
                <span>012 345 6789</span>
              </a>
              <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-coral text-white text-center py-4 rounded-2xl font-display font-medium text-xl shadow-glow-coral">
              
                Enroll Now
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}