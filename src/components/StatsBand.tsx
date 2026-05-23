import React from 'react';
import { motion } from 'framer-motion';
export function StatsBand() {
  const stats = [
  {
    label: 'Locations',
    value: '4',
    color: 'bg-coral/10 text-coral'
  },
  {
    label: 'Happy Kids',
    value: '200+',
    color: 'bg-mint/10 text-mint-deep'
  },
  {
    label: 'Educators',
    value: '15+',
    color: 'bg-sunshine/20 text-sunshine-deep'
  },
  {
    label: 'Years Strong',
    value: '6',
    color: 'bg-sky/10 text-sky-deep'
  }];

  return (
    <section className="py-12 bg-cream relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) =>
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
            className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-soft border border-ink/5 hover:-translate-y-1 transition-transform">
            
              <div
              className={`text-4xl md:text-5xl font-display font-medium mb-2 ${stat.color.split(' ')[1]}`}>
              
                {stat.value}
              </div>
              <div className="text-ink-soft font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}