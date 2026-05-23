import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Sun, Cloud, Sparkle } from './ui/Decorations';
export function DailyExperience() {
  const curriculum = [
  {
    time: 'Number Sense',
    title: 'Numeracy and sequence',
    color: 'bg-sunshine',
    svg:
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-white">
      
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  },

  {
    time: 'Motor Coordination Skills',
    title: 'Gross and fine motor skills',
    color: 'bg-coral',
    svg:
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-white">
      
        <path d="M7 2v11a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2" />
        <path d="M3 8v7a4 4 0 0 0 4 4h2" />
        <path d="M17 2v6a3 3 0 0 0 3 3h1" />
        <path d="M14 13v9" />
    </svg>
  },

  {
    time: 'Stereognosis',
    title: 'Tactile Object Recognition',
    color: 'bg-mint',
    svg:
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-white">
      
        <path d="M12 2c-3 0-5 2-5 5v3c0 2.5-2 3.5-2 6 0 3 2.5 6 7 6s7-3 7-6c0-2.5-2-3.5-2-6V7c0-3-2-5-5-5z" />
        <circle cx="12" cy="14" r="2" />
    </svg>
  },

  {
    time: 'Literacy',
    title: 'Reading & Writing Skills',
    color: 'bg-grape',
    svg:
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-white">
      
        <path d="M4 19.5V6a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0 0 4h14" />
        <path d="M8 6h8" />
        <path d="M8 10h6" />
    </svg>
  },

  {
    time: 'e-Learning',
    title: 'Digital Learning',
    color: 'bg-sky',
    svg:
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-white">
      
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 16v5" />
    </svg>
  },

  {
    time: 'Hearing',
    title: 'Auditory perception and memory skills',
    color: 'bg-bubblegum',
    svg:
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-white">
      
        <path d="M3 11a9 9 0 1 1 9 9" />
        <path d="M3 11c0 3 2 5 5 5" />
        <circle cx="11" cy="11" r="1" fill="currentColor" />
    </svg>
  }
];

  return (
    <section className="py-28 md:py-36 bg-paper relative overflow-hidden" id='extramurals'>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Timeline */}
          <div>
            <SectionHeading
              kicker="Beyond Learning"
              title="Curriculum and Year planner"
              description="At Mobsie, we believe the foundation years are crucial to a child’s development. We focus on giving children a healthy balance between learning and play."
              align="left"
              className="mb-12" />
            

            <div className="relative pl-10 space-y-8">
              {/* Thinner Wavy Line */}
              <svg
                className="absolute top-0 left-[21px] w-2 h-full text-ink/20"
                preserveAspectRatio="none">
                
                <path
                  d="M 1 0 Q 4 20, 1 40 T 1 80 T 1 120 T 1 160 T 1 200 T 1 240 T 1 280 T 1 320 T 1 360 T 1 400 T 1 440 T 1 480 T 1 520 T 1 560 T 1 600 T 1 640 T 1 680 T 1 720 T 1 760 T 1 800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6 6" />
                
              </svg>

              {curriculum.map((item, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="relative">
                
                  {/* Modern Timeline Node */}
                  <div
                  className={`absolute -left-[48px] w-12 h-12 rounded-full flex items-center justify-center shadow-sm ring-4 ring-white ${item.color} z-10`}>
                  
                    {item.svg}
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-ink/5 hover:-translate-y-1 transition-transform">
                    <span className="text-ink-soft font-medium text-sm mb-2 inline-block">
                      {item.time}
                    </span>
                    <h4 className="font-display font-medium text-2xl text-ink">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right: Modern Animated Scene */}
          <div className="relative h-[600px] flex items-center justify-center hidden lg:flex">
            <div className="w-full h-full bg-sky/10 rounded-3xl relative overflow-hidden flex items-end justify-center pb-10">
              <Sun
                color="text-sunshine"
                className="absolute top-10 right-10 w-24 h-24 opacity-80" />
              
              <Cloud
                color="text-white"
                className="absolute top-20 left-10 w-32 h-20 drop-shadow-sm" />
              
              <Sparkle
                color="text-coral"
                className="absolute top-40 right-40 w-8 h-8 opacity-60" />
              

              {/* Refined Playground Illustration */}
              <div className="relative w-full h-64">
                {/* Grass */}
                <div className="absolute bottom-0 w-full h-20 bg-leaf/80"></div>

                {/* Tree */}
                <div className="absolute bottom-10 left-20">
                  <div className="w-6 h-32 bg-ink/80 mx-auto rounded-full"></div>
                  <div className="w-28 h-28 bg-mint/90 rounded-full absolute -top-16 -left-11 shadow-sm"></div>
                </div>

                {/* Swing */}
                <div className="absolute bottom-20 right-20 w-32 h-32">
                  <path
                    d="M 10 32 L 10 0 M 22 32 L 22 0"
                    stroke="#2D2A26"
                    strokeWidth="2"
                    strokeOpacity="0.5" />
                  
                  <rect
                    x="0"
                    y="32"
                    width="32"
                    height="6"
                    fill="#FF6B6B"
                    rx="3" />
                  
                  <path
                    d="M 0 0 L 32 0"
                    stroke="#2D2A26"
                    strokeWidth="4"
                    strokeOpacity="0.8"
                    strokeLinecap="round" />
                  
                </div>

                {/* Ball */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: 360
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="absolute bottom-24 left-1/2 w-10 h-10 bg-sunshine rounded-full shadow-sm">
                  
                  <path
                    d="M 0 5 Q 5 0 10 5"
                    fill="none"
                    stroke="#2D2A26"
                    strokeWidth="1.5"
                    strokeOpacity="0.2" />
                  
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}