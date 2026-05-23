import React from 'react';
import { motion } from 'framer-motion';
export function Marquee() {
  const items = [
  {
    text: '🌟 Now enrolling for 2026'
  },
  {
    text: '🎨 Creative arts daily'
  },
  {
    text: '🍎 Fresh meals on-site'
  },
  {
    text: '📚 School readiness program'
  },
  {
    text: '💚 Ages 1 - 10'
  }];

  // Duplicate items to create seamless loop
  const duplicatedItems = [...items, ...items, ...items];
  return (
    <div className="w-full overflow-hidden bg-cream py-6 border-y border-ink/5 flex items-center">
      <motion.div
        animate={{
          x: [0, -1035]
        }} // Approximate width of one set of items
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 20
        }}
        className="flex whitespace-nowrap gap-6 pl-6">
        
        {duplicatedItems.map((item, index) =>
        <div
          key={index}
          className="bg-white px-5 py-2 rounded-full shadow-sm border border-ink/5 text-ink font-medium text-sm flex items-center">
          
            {item.text}
          </div>
        )}
      </motion.div>
    </div>);

}