import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Heart } from 'lucide-react';
import { Sparkle, Cloud } from './ui/Decorations';
export function About() {
  return (
    <section
      id="about"
      className="py-28 md:py-36 bg-paper relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <SectionHeading
              kicker="Our Story"
              title="Built from love. Grown from community."
              align="left"
              className="mb-10" />
            

            <motion.div
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
                delay: 0.2,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="space-y-6 text-ink-soft text-xl font-medium leading-relaxed">
              
              <p>
                Mobsie Kids was born from a simple belief — that every child, no
                matter where they grow up, deserves a brilliant beginning. We
                opened our doors to bring premium early learning to townships
                and communities historically underserved by quality childcare.
              </p>
              <p>
                Rooted in the spirit of Ubuntu, we believe it truly takes a
                village to raise a child. That is why we proudly employ women
                from the very communities we serve — building a school where
                children thrive and neighbourhoods grow stronger together.
              </p>
            </motion.div>
          </div>

          {/* Right Content - SVG Village & Quote */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Village Illustration */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="relative w-full max-w-md aspect-square flex flex-col items-center justify-end overflow-hidden">
              
              {/* Soft Glow Behind */}
              <div className="absolute inset-0 bg-cream-deep/50 rounded-full blur-3xl scale-90"></div>

              <Cloud
                color="text-white"
                className="absolute top-10 left-10 w-24 h-16 drop-shadow-sm" />
              
              <svg
                className="absolute top-12 right-12 w-16 h-16 text-coral drop-shadow-sm"
                viewBox="0 0 24 24"
                fill="currentColor">
                
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>

              {/* Houses */}
              <div className="flex items-end gap-3 relative z-10 w-full justify-center pb-4">
                {/* House 1 */}
                <div className="relative w-20 h-24 bg-mint/20 rounded-t-2xl">
                  <div
                    className="absolute -top-10 -left-2 w-24 h-12 bg-coral/80 rounded-sm"
                    style={{
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                    }}>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-10 bg-white rounded-t-lg"></div>
                </div>
                {/* Tree */}
                <div className="relative w-16 h-32 flex flex-col items-center justify-end">
                  <div className="w-20 h-20 bg-leaf/80 rounded-full absolute top-4 z-10"></div>
                  <div className="w-4 h-16 bg-ink/20 rounded-full"></div>
                </div>
                {/* House 2 */}
                <div className="relative w-24 h-20 bg-sky/20 rounded-t-2xl">
                  <div
                    className="absolute -top-12 -left-2 w-28 h-14 bg-sunshine/80 rounded-sm"
                    style={{
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                    }}>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-10 bg-white rounded-t-lg"></div>
                </div>
              </div>

              {/* Stick Figures */}
              <div className="flex gap-4 mt-2 relative z-10">
                <div className="w-6 h-6 bg-coral rounded-full shadow-sm"></div>
                <div className="w-5 h-5 bg-sunshine rounded-full shadow-sm mt-1"></div>
                <div className="w-6 h-6 bg-grape rounded-full shadow-sm"></div>
              </div>
            </motion.div>

            {/* Quote Card */}
            <motion.div
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
                delay: 0.4,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="absolute -bottom-6 -left-4 md:-left-12 bg-bubblegum/10 backdrop-blur-xl p-8 rounded-3xl shadow-glow-bubblegum max-w-xs z-20 border border-bubblegum/20">
              
              <Sparkle
                color="text-bubblegum"
                className="absolute -top-3 -right-3 w-8 h-8" />
              
              <Heart
                className="text-bubblegum mb-4"
                size={24}
                fill="currentColor" />
              
              <p className="font-display font-medium text-ink text-xl leading-snug">
                "In early childhood you lay the foundation of successes. Teach
                them the right habits then and their future life is safe."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}