import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Shield, Sparkle, HeartHandshake, Users, Leaf } from 'lucide-react';

export function OurValues() {
  const values = [
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: 'Safe Environment',
      text: 'To provide a safe and stimulating environment for children.',
      color: 'bg-mint'
    },
    {
      icon: <Sparkle className="w-6 h-6 text-white" />,
      title: 'Improved Learning',
      text: 'To enforce an improved way of learning in our communities.',
      color: 'bg-sunshine'
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-white" />,
      title: 'Balanced Growth',
      text: 'To produce happy, well-balanced and intellectual children.',
      color: 'bg-grape'
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: 'Social Development',
      text: 'To develop social skills, creativity and self-confidence.',
      color: 'bg-coral'
    },
    {
      icon: <Leaf className="w-6 h-6 text-white" />,
      title: 'Healthy Environment',
      text: 'Keeping children safe and maintaining a healthy environment.',
      color: 'bg-sky'
    }
  ];

  return (
    <section className="py-28 md:py-36 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          kicker="Our Foundation"
          title="Our Values"
          description="Everything we do is guided by care, safety, and a deep commitment to early childhood development."
          align="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft border border-ink/5 hover:-translate-y-1 transition-transform"
            >
              {/* icon node */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color} shadow-sm mb-5`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-display text-ink mb-2">
                {item.title}
              </h3>

              <p className="text-ink-soft leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}