import React from 'react';
import { motion } from 'framer-motion';
interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}
export function SectionHeading({
  kicker,
  title,
  description,
  align = 'center',
  className = ''
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} ${className}`}>
      
      <motion.span
        initial={{
          opacity: 0,
          y: 10
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        className="bg-white/80 backdrop-blur-md text-ink font-semibold tracking-wider uppercase text-sm mb-6 px-5 py-2 rounded-full shadow-soft border border-ink/5">
        
        {kicker}
      </motion.span>
      <motion.h2
        initial={{
          opacity: 0,
          y: 10
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          delay: 0.1
        }}
        className="font-display font-semibold text-5xl md:text-6xl text-ink leading-tight mb-6 tracking-tight">
        
        {title}
      </motion.h2>
      {description &&
      <motion.p
        initial={{
          opacity: 0,
          y: 10
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          delay: 0.2
        }}
        className="text-ink-soft text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
        
          {description}
        </motion.p>
      }
    </div>);

}