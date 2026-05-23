import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Star, Cloud, Sparkle } from './ui/Decorations';
export function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-10 relative border-t border-white/10">
      {/* Refined Happy Footer Signature */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-3 bg-white px-6 py-2.5 rounded-full shadow-soft border border-ink/5">
        <Star color="text-sunshine" className="w-5 h-5" />
        <Cloud color="text-sky" className="w-5 h-5" />
        <Sparkle color="text-coral" className="w-5 h-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/Mobise-Kids-Revised-Logo.png"
              alt="Mobsie Kids Logo"
              className="h-12 object-contain mb-6 bg-white p-1.5 rounded-xl" />
            
            <p className="text-cream/70 text-base font-medium leading-relaxed mb-6">
              The Private Play School With A Difference. Providing premium early
              childhood education to communities across Pretoria.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sky text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-glow-sky">
                
                <Facebook size={18} fill="currentColor" stroke="none" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-bubblegum text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-glow-bubblegum">
                
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sunshine text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-glow-sunshine">
                
                <Twitter size={18} fill="currentColor" stroke="none" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-medium text-xl mb-6 text-sunshine">
              Quick Links
            </h4>
            <ul className="space-y-3 font-medium text-base">
              <li>
                <a
                  href="#home"
                  className="text-cream/80 hover:text-white transition-colors">
                  
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-cream/80 hover:text-white transition-colors">
                  
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-cream/80 hover:text-white transition-colors">
                  
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-cream/80 hover:text-white transition-colors">
                  
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-cream/80 hover:text-white transition-colors">
                  
                  Enrollment
                </a>
              </li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-display font-medium text-xl mb-6 text-mint">
              Our Branches
            </h4>
            <ul className="space-y-3 font-medium text-base">
              <li>
                <a href="#branches" className="text-cream/80 hover:text-white transition-colors">
                  Soshanguve
                </a>
              </li>
              <li>
                <a href="#branches" className="text-cream/80 hover:text-white transition-colors">
                  Soshanguve 2
                </a>
              </li>
              <li>
                <a href="#branches" className="text-cream/80 hover:text-white transition-colors">
                  Mamelodi
                </a>
              </li>
              <li>
                <a href="#branches" className="text-cream/80 hover:text-white transition-colors">
                  Cosmo City
                </a>
              </li>
              <li>
                <a href="#branches" className="text-cream/80 hover:text-white transition-colors">
                  Sky City
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-medium text-xl mb-6 text-bubblegum">
              Contact Us
            </h4>
            <ul className="space-y-3 font-medium text-base text-cream/80">
              <li>012 345 6789</li>
              <li>info@mobsiekids.co.za</li>
              <li className="pt-4">
                <a href="#contact" className="inline-block bg-coral text-white font-display font-medium px-6 py-2.5 rounded-full shadow-glow-coral hover:scale-105 transition-transform">
                  Book a Visit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-medium text-sm text-cream/50">
          <p>
            &copy; {new Date().getFullYear()} Mobsie Kids Preschools. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>);

}