import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BookOpen, Apple, Users } from 'lucide-react';
import { Cloud, Sun } from './ui/Decorations';
export function Hero() {
  const trustIndicators = [
  {
    icon: <MapPin size={18} />,
    text: '4 Branches',
    color: 'text-mint'
  },
  {
    icon: <Users size={18} />,
    text: 'Qualified Educators',
    color: 'text-bubblegum'
  },
  {
    icon: <Apple size={18} />,
    text: 'Nutrition Program',
    color: 'text-sunshine'
  },
  {
    icon: <BookOpen size={18} />,
    text: 'Ages 1–6',
    color: 'text-sky'
  }];

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden min-h-screen flex items-center bg-cream">
      
      {/* Soft Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,217,61,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(78,205,196,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,107,0.08)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="bg-white/80 backdrop-blur-md text-ink border border-ink/5 shadow-soft text-sm font-medium font-display tracking-wide uppercase px-5 py-2 rounded-full mb-8 flex items-center gap-2">
              
              <span className="text-coral">✨</span> Mobsie Kids Preschool
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="font-display font-medium text-5xl md:text-8xl lg:text-[7.5rem] text-ink leading-[0.95] tracking-tighter mb-8">
              
              Where every kid begins something{' '}
              <span className="text-coral relative whitespace-nowrap inline-block">
                extraordinary
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-coral/40"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none">
                  
                  <path
                    d="M0 15 Q 25 5, 50 15 T 100 15"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none" />
                  
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="text-xl md:text-2xl text-ink-soft mb-12 max-w-xl font-medium leading-relaxed">
              
              A warm, safe, and joyful play school bringing world-class early
              learning to the heart of our communities.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
              
              <a
                href="#contact"
                className="bg-coral text-white px-8 py-4 rounded-full font-display font-medium text-xl transition-all shadow-glow-coral hover:scale-105 hover:shadow-[0_20px_50px_-12px_rgba(255,107,107,0.6)] text-center">
                
                Book a Visit
              </a>
              <a
                href="#programs"
                className="bg-white text-ink px-8 py-4 rounded-full font-display font-medium text-xl transition-all shadow-soft hover:bg-cream-deep text-center">
                
                Explore Programs
              </a>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">
              
              {/* Overlapping Avatars */}
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {[
                  {
                    bg: 'bg-coral',
                    face: 'M 3 5 Q 5 7 7 5'
                  },
                  {
                    bg: 'bg-mint',
                    face: 'M 3 6 Q 5 6 7 6'
                  },
                  {
                    bg: 'bg-sunshine',
                    face: 'M 3 5 Q 5 8 7 5'
                  },
                  {
                    bg: 'bg-sky',
                    face: 'M 3 5 Q 5 7 7 5'
                  }].
                  map((avatar, i) =>
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full ${avatar.bg} border-2 border-white shadow-sm flex items-center justify-center`}>
                    
                      <svg viewBox="0 0 10 10" className="w-5 h-5 text-ink/80">
                        <circle cx="3" cy="3" r="0.8" fill="currentColor" />
                        <circle cx="7" cy="3" r="0.8" fill="currentColor" />
                        <path
                        d={avatar.face}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeLinecap="round" />
                      
                      </svg>
                    </div>
                  )}
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-cream-deep shadow-sm flex items-center justify-center text-xs font-bold text-ink">
                    +2k
                  </div>
                </div>
                <div className="ml-4 flex flex-col">
                  <div className="flex gap-1 text-sunshine">
                    {[1, 2, 3, 4, 5].map((i) =>
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20">
                      
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm font-medium text-ink-soft">
                    Trusted by happy families
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Free-Floating Illustrated Scene */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="lg:col-span-5 relative h-[500px] w-full flex items-center justify-center">
            
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              {/* Rainbow */}
              <svg
                className="absolute top-10 w-full h-full opacity-90"
                viewBox="0 0 200 100">
                
                <path
                  d="M 20 100 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="8"
                  strokeLinecap="round" />
                
                <path
                  d="M 35 100 A 65 65 0 0 1 165 100"
                  fill="none"
                  stroke="#FFD93D"
                  strokeWidth="8"
                  strokeLinecap="round" />
                
                <path
                  d="M 50 100 A 50 50 0 0 1 150 100"
                  fill="none"
                  stroke="#4ECDC4"
                  strokeWidth="8"
                  strokeLinecap="round" />
                
              </svg>

              {/* Sun */}
              <div className="absolute top-0 right-10">
                <Sun
                  color="text-sunshine"
                  className="w-24 h-24 drop-shadow-sm" />
                
              </div>

              {/* Clouds */}
              <Cloud
                color="text-white"
                className="absolute top-20 left-0 w-32 h-20 drop-shadow-sm" />
              
              <Cloud
                color="text-white/80"
                className="absolute top-10 right-20 w-24 h-16 drop-shadow-sm" />
              

              {/* Kids Blobs */}
              <motion.div
                animate={{
                  y: [0, -8, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute bottom-10 left-1/4">
                
                <div className="w-20 h-24 bg-coral rounded-[40px] shadow-glow-coral relative overflow-hidden">
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-2 border-b-2 border-white rounded-full"></div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -12, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
                className="absolute bottom-16 right-1/4">
                
                <div className="w-16 h-20 bg-mint rounded-[40px] shadow-glow-mint relative overflow-hidden">
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute top-9 left-1/2 -translate-x-1/2 w-3 h-3 border-b-2 border-white rounded-full"></div>
                </div>
              </motion.div>

              {/* Floating Toys */}
              <motion.div
                animate={{
                  rotate: 360,
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute bottom-5 right-10 w-12 h-12 bg-bubblegum rounded-xl shadow-glow-bubblegum flex items-center justify-center font-display font-bold text-white text-xl">
                
                A
              </motion.div>
              <motion.div
                animate={{
                  rotate: -360,
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute bottom-20 left-5 w-10 h-10 bg-sunshine rounded-full shadow-glow-sunshine">
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-elevated border border-ink/5 flex items-center gap-4 z-20">
              
              <div className="w-12 h-12 bg-sunshine/20 text-sunshine-deep rounded-full flex items-center justify-center font-display font-bold text-2xl">
                24
              </div>
              <div>
                <p className="text-xs text-ink-soft font-bold uppercase tracking-wider">
                  Now Enrolling
                </p>
                <p className="font-display font-medium text-ink text-lg">
                  For 2026 Intake
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}