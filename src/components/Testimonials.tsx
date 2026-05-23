import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
export function Testimonials() {
  const testimonials = [
  {
    quote:
    "Enrolling my daughter at Mobsie Kids was the best decision. The teachers are incredibly warm, and I've seen such a huge leap in her confidence!",
    author: 'Thandiwe M.',
    role: 'Parent, Mamelodi',
    color: 'bg-coral/20 text-coral-deep',
    rotate: '-rotate-1'
  },
  {
    quote:
    'As a working mom, knowing my son is in a safe, clean, and educational environment gives me total peace of mind. The facilities are world-class.',
    author: 'Lerato K.',
    role: 'Parent, Soshanguve',
    color: 'bg-mint/20 text-mint-deep',
    rotate: 'rotate-1'
  },
  {
    quote:
    'The school readiness program is fantastic. My son transitioned to Grade 1 so smoothly, already knowing his basics. Thank you to the amazing staff!',
    author: 'Sipho N.',
    role: 'Parent, Atteridgeville',
    color: 'bg-sunshine/30 text-sunshine-deep',
    rotate: '-rotate-1'
  }];

  return (
    <section className="py-28 md:py-36 bg-sky/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          kicker="Family Voices"
          title="Loved by parents"
          className="mb-16" />
        

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) =>
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
            className={`bg-white rounded-3xl p-8 shadow-soft relative ${testimonial.rotate} hover:rotate-0 hover:-translate-y-1 transition-all duration-300 border border-ink/5`}>
            
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) =>
              <svg
                key={i}
                viewBox="0 0 24 24"
                className="w-5 h-5 text-sunshine fill-current">
                
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
              )}
              </div>

              <p className="text-ink-soft font-medium text-lg leading-relaxed mb-8 text-center">
                "{testimonial.quote}"
              </p>

              <div className="flex flex-col items-center gap-4 mt-auto">
                <div
                className={`w-14 h-14 rounded-full ${testimonial.color} flex items-center justify-center overflow-hidden`}>
                
                  <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full pt-3 opacity-80">
                  
                    <circle cx="50" cy="40" r="20" fill="currentColor" />
                    <path d="M 20 100 Q 50 70 80 100" fill="currentColor" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-display font-medium text-ink text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-xs font-bold text-ink-soft/60 uppercase tracking-wider">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}