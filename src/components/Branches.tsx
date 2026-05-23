import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';
export function Branches() {
  const branches = [
  {
    name: 'Soshanguve',
    address: '7347/5 Umkhangele Street, Soshanguve East, Thorntree view, 0164',
    phone: '012 757 1858',
    color: 'bg-mint/10',
    iconColor: 'text-mint-deep',
    roof: '#FF8FAB'
  },
  {
    name: 'Soshanguve 2',
    address: 'No 7347/2 Umkhangele Street, Soshanguve East, Thorntree View, 0164',
    phone: '010 448 3015',
    color: 'bg-coral/10',
    iconColor: 'text-coral',
    roof: '#FFD93D'
  },
  {
    name: 'Mamelodi',
    address: '3476 Ingoyi-ngoyi Street, Mamelodi East, Gem Valley',
    phone: '012 770 1231',
    color: 'bg-sky/10',
    iconColor: 'text-sky-deep',
    roof: '#FF6B6B'
  },
  {
    name: 'Cosmo City',
    address: '32 Nepal Street, Stand No 9723, Cosmo City, Johannesburg, 2096',
    phone: '010 448 3014',
    color: 'bg-sunshine/20',
    iconColor: 'text-sunshine-deep',
    roof: '#4ECDC4'
  },{
    name: 'Sky City',
    address: 'Alberton (Watervalspruit), No 2928, Cnr. Codlett and Umoya Street, Extension 18',
    phone: '010 448 3334',
    color: 'bg-coral/10',
    iconColor: 'text-coral',
    roof: '#FFD93D'
  }];

  const SchoolSVG = ({ roof }: {roof: string;}) =>
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
      {/* Building Base */}
      <rect
      x="20"
      y="40"
      width="60"
      height="50"
      fill="#FFF"
      stroke="#2D2A26"
      strokeWidth="2"
      rx="4" />
    
      {/* Roof */}
      <path
      d="M 10 40 L 50 10 L 90 40 Z"
      fill={roof}
      stroke="#2D2A26"
      strokeWidth="2"
      strokeLinejoin="round" />
    
      {/* Door */}
      <rect
      x="40"
      y="60"
      width="20"
      height="30"
      fill="#FFF"
      stroke="#2D2A26"
      strokeWidth="2"
      rx="2" />
    
      <circle cx="55" cy="75" r="1.5" fill="#2D2A26" />
      {/* Windows */}
      <rect
      x="25"
      y="50"
      width="10"
      height="10"
      fill="#FFF"
      stroke="#2D2A26"
      strokeWidth="2"
      rx="2" />
    
      <rect
      x="65"
      y="50"
      width="10"
      height="10"
      fill="#FFF"
      stroke="#2D2A26"
      strokeWidth="2"
      rx="2" />
    
      {/* Flag */}
      <path
      d="M 50 10 L 50 0 M 50 0 L 65 5 L 50 10"
      fill="#FF6B6B"
      stroke="#2D2A26"
      strokeWidth="2"
      strokeLinejoin="round" />
    
    </svg>;

  return (
    <section
      id="branches"
      className="py-28 md:py-36 bg-cream relative overflow-hidden">
      
      {/* Subtle Map Path Decor */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]"
        preserveAspectRatio="none">
        
        <path
          d="M 0 100 Q 200 50, 400 200 T 800 100 T 1200 300"
          fill="none"
          stroke="#2D2A26"
          strokeWidth="4"
          strokeDasharray="10 10" />
        
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          kicker="Our Locations"
          title="Find a branch near you"
          description="We currently have three lovely campuses in Pretoria (2 Branches in Soshanguve and 1 Mamelodi), 2 in Johannesburg in Cosmo City (Randburg) and another one in Sky-City (Alberton). We are expanding to Atteridgeville, Soweto and Thembisa."
          className="mb-16" />
        

        <div className="grid md:grid-cols-2 gap-6">
          {branches.map((branch, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="bg-white rounded-3xl p-6 flex flex-col sm:flex-row gap-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-ink/5 group">
            
              <div
              className={`w-full sm:w-40 h-40 rounded-2xl overflow-hidden shrink-0 ${branch.color} flex items-center justify-center p-6 relative`}>
              
                <motion.div
                animate={{
                  y: [0, -3, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.2
                }}
                className="w-full h-full">
                
                  <SchoolSVG roof={branch.roof} />
                </motion.div>
                {/* Modern Map Pin */}
                <motion.div
                animate={{
                  y: [0, -6, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className={`absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm ${branch.iconColor}`}>
                
                  <MapPin size={16} fill="currentColor" />
                </motion.div>
              </div>

              <div className="flex flex-col justify-center py-2">
                <h3 className="font-display font-medium text-2xl text-ink mb-4">
                  {branch.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-ink-soft font-medium">
                    <div
                    className={`bg-cream p-1.5 rounded-lg shrink-0 mt-0.5 ${branch.iconColor}`}>
                    
                      <MapPin size={16} />
                    </div>
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-ink-soft font-medium">
                    <div
                    className={`bg-cream p-1.5 rounded-lg shrink-0 ${branch.iconColor}`}>
                    
                      <Phone size={16} />
                    </div>
                    <span>{branch.phone}</span>
                  </div>
                </div>

                <a
                href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink bg-cream hover:bg-cream-deep px-5 py-2.5 rounded-full transition-colors mt-auto w-fit">
                
                  <span>Get Directions</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}