import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Clock, Users, ArrowRight } from 'lucide-react';
export function Programs() {
  const programs = [
  {
    note: 'Weekends inc',
    title: 'After Care Services',
    description:
    'At Mobsie we not only provide after care services for our students but also for members of the community. We provide homework help and lunch meal for children who are in primary school. We also offer a weekend service from 0:06-17:00.',
    gradient: 'from-mint/80 to-mint/20',
    shadow: 'shadow-glow-mint',
    textColor: 'text-mint-deep',
    illustration:
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          <circle cx="50" cy="50" r="30" fill="#FFF" />
          <circle cx="40" cy="45" r="3" fill="#2D2A26" />
          <circle cx="60" cy="45" r="3" fill="#2D2A26" />
          <path
        d="M 45 55 Q 50 62 55 55"
        fill="none"
        stroke="#2D2A26"
        strokeWidth="2.5"
        strokeLinecap="round" />
      
          <circle cx="50" cy="60" r="8" fill="#FF8FAB" />
          <path
        d="M 42 60 L 58 60"
        stroke="#2D2A26"
        strokeWidth="2.5"
        strokeLinecap="round" />
      
        </svg>

  },
  {
    note: '05:45-17:00',
    title: 'Operating Hours',
    description:
    'We are open 7 days a week! School hours are 05:45-17:00 and from 17:00 till late we are open for after care.',
    gradient: 'from-coral/80 to-coral/20',
    shadow: 'shadow-glow-coral',
    textColor: 'text-coral',
    illustration:
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          <rect x="20" y="50" width="30" height="30" rx="6" fill="#FFD93D" />
          <text
        x="35"
        y="72"
        fontFamily="Fredoka"
        fontSize="20"
        fontWeight="500"
        fill="#2D2A26"
        textAnchor="middle">
        
            A
          </text>
          <rect x="55" y="50" width="30" height="30" rx="6" fill="#4ECDC4" />
          <text
        x="70"
        y="72"
        fontFamily="Fredoka"
        fontSize="20"
        fontWeight="500"
        fill="#2D2A26"
        textAnchor="middle">
        
            B
          </text>
          <rect x="37" y="20" width="30" height="30" rx="6" fill="#A78BFA" />
          <text
        x="52"
        y="42"
        fontFamily="Fredoka"
        fontSize="20"
        fontWeight="500"
        fill="#2D2A26"
        textAnchor="middle">
        
            C
          </text>
        </svg>

  },
  {
    note: 'Safe Locations',
    title: 'Premises',
    description:
    'At Mobsie, safety comes first and we work hard to ensure the safety and well-being our children at all times. We have well equipped classrooms that are child friendly and have CCTVs all around to ensure that everyone is safe and secure.',
    gradient: 'from-sunshine/80 to-sunshine/20',
    shadow: 'shadow-glow-sunshine',
    textColor: 'text-sunshine-deep',
    illustration:
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          <path d="M 20 70 L 80 70 L 80 30 L 20 30 Z" fill="#FFF" />
          <path
        d="M 50 30 L 50 70"
        stroke="#2D2A26"
        strokeWidth="2"
        strokeOpacity="0.1" />
      
          <path
        d="M 30 40 L 40 40 M 30 50 L 40 50 M 60 40 L 70 40 M 60 50 L 70 50"
        stroke="#2D2A26"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeOpacity="0.5" />
      
          <path d="M 70 10 L 90 30 L 40 80 L 20 80 L 20 60 Z" fill="#FF8FAB" />
          <path
        d="M 20 60 L 40 80"
        stroke="#2D2A26"
        strokeWidth="2"
        strokeOpacity="0.2" />
      
        </svg>

  }];

  return (
    <section id="programs" className="py-28 md:py-36 bg-paper relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          kicker="Safe Care"
          title="A Safe Place to Learn & Grow"
          description="From structured after-care and flexible hours to safe, well-equipped facilities, we create a supportive space where children can thrive beyond the classroom."
          className="mb-16" />
        

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
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
            className={`bg-white rounded-3xl shadow-soft hover:${program.shadow} overflow-hidden flex flex-col h-full group hover:-translate-y-2 transition-all duration-500 border border-ink/5`}>
            
              {/* Illustration Header */}
              <div
              className={`relative h-64 bg-gradient-to-b ${program.gradient} p-8 flex items-center justify-center`}>
              
                <div className="w-36 h-36 transition-transform duration-700 group-hover:scale-110">
                  {program.illustration}
                </div>

                {/* Age Badge */}
                <div className="absolute bottom-4 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full font-medium text-sm text-ink shadow-sm flex items-center gap-2">
                  <div
                  className={`w-2 h-2 rounded-full ${program.textColor.replace('text-', 'bg-')}`}>
                </div>
                  {program.note}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-10 flex flex-col flex-grow">
                <h3 className="font-display font-medium text-3xl text-ink mb-4">
                  {program.title}
                </h3>
                <p className="text-ink-soft font-medium text-lg mb-8 flex-grow leading-relaxed">
                  {program.description}
                </p>
                <a
                href="#contact"
                className="flex items-center justify-between w-full bg-cream hover:bg-cream-deep px-6 py-4 rounded-2xl font-display font-medium text-ink transition-colors group/btn">
                
                  <span>Inquire Now</span>
                  <div className="group-hover/btn:translate-x-1 transition-transform">
                    <ArrowRight size={20} />
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}