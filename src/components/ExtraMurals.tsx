import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import {
  Shield,
  GraduationCap,
  Puzzle,
  HeartHandshake,
  BookOpenCheck,
  Users
} from 'lucide-react';

export function ExtraMurals() {
const extramurals = [
  {
    icon: <Puzzle size={40} />,
    title: 'Junior Chess',
    description: 'Builds strategic thinking, focus, and problem-solving through guided chess play.',
    color: 'bg-coral/10',
    textColor: 'text-coral',
    shadow: 'shadow-glow-coral',
    span: 'lg:col-span-2 lg:row-span-2'
  },
  {
    icon: <HeartHandshake size={28} />,
    title: 'Baby Yoga',
    description: 'Gentle movement that supports flexibility, awareness, and early relaxation.',
    color: 'bg-grape/10',
    textColor: 'text-grape-deep',
    shadow: 'shadow-glow-grape',
    span: 'lg:col-span-1 lg:row-span-1'
  },
  {
    icon: <Shield size={28} />,
    title: 'Swimming',
    description: 'Develops water confidence, coordination, and essential safety skills.',
    color: 'bg-mint/10',
    textColor: 'text-mint-deep',
    shadow: 'shadow-glow-mint',
    span: 'lg:col-span-1 lg:row-span-1'
  },
  {
    icon: <Users size={28} />,
    title: 'Mini Sports',
    description: 'Encourages teamwork, coordination, and active physical development.',
    color: 'bg-sunshine/15',
    textColor: 'text-sunshine-deep',
    shadow: 'shadow-glow-sunshine',
    span: 'lg:col-span-1 lg:row-span-1'
  },
  {
    icon: <BookOpenCheck size={28} />,
    title: 'Gardening',
    description: 'Teaches patience, responsibility, and connection with nature.',
    color: 'bg-sky/10',
    textColor: 'text-sky-deep',
    shadow: 'shadow-glow-sky',
    span: 'lg:col-span-1 lg:row-span-1'
  }
];

  return (
    <section className="py-28 md:py-36 bg-cream relative overflow-hidden">
      {/* Soft Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(78,205,196,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(255,107,107,0.05)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          kicker="The Mobsie Difference"
          title="Curriculum and Year planner"
          description="At Mobsie, we believe that the foundation years are crucial to a child’s development. We therefore strive to provide children with a healthy balance between learning and play."
          className="mb-16" />
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {extramurals.map((extramural, index) =>
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
            className={`${extramural.color} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:${extramural.shadow} group flex flex-col justify-between ${extramural.span}`}>
            
              <div
              className={`${extramural.textColor} mb-6 transition-transform duration-300 group-hover:scale-110 origin-left`}>
              
                {extramural.icon}
              </div>
              <div>
                <h3
                className={`font-display font-medium ${extramural.span.includes('row-span-2') ? 'text-4xl mb-4' : 'text-2xl mb-2'} text-ink`}>
                
                  {extramural.title}
                </h3>
                <p
                className={`text-ink-soft font-medium ${extramural.span.includes('row-span-2') ? 'text-xl' : 'text-base'} leading-relaxed`}>
                
                  {extramural.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}