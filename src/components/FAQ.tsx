import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ChevronDown } from 'lucide-react';
import { Sparkle } from './ui/Decorations';
export function FAQ() {
  const faqs = [
  {
    question: 'What age groups do you cater for?',
    answer:
    'We welcome children from 12 months up to 6 years old (Grade R). Our programs are specifically tailored to meet the developmental needs of each age group.',
    color: 'bg-coral'
  },
  {
    question: 'What are your operating hours?',
    answer:
    'Our standard operating hours are from 06:30 to 17:30, Monday to Friday. We also offer half-day options and aftercare services for working parents.',
    color: 'bg-mint'
  },
  {
    question: 'Are meals provided?',
    answer:
    'Yes, we provide a nutritious, balanced breakfast, lunch, and two snacks daily. All meals are prepared fresh on-site.',
    color: 'bg-sunshine'
  },
  {
    question: 'How do you ensure the safety of the children?',
    answer:
    'Safety is our top priority. Our premises are secure with controlled access, CCTV monitoring, and all our staff are trained in First Aid and CPR.',
    color: 'bg-sky'
  },
  {
    question: 'What is the enrollment process?',
    answer:
    "You can start by booking a visit or filling out our online inquiry form. We'll then invite you for a tour, after which you can complete the registration forms.",
    color: 'bg-grape'
  }];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-28 md:py-36 bg-cream relative">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          kicker="Common Questions"
          title="Everything you need to know"
          className="mb-12" />
        

        <div className="space-y-4">
          {faqs.map((faq, index) =>
          <motion.div
            key={index}
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
              delay: index * 0.1,
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="bg-white rounded-2xl border border-ink/5 shadow-sm hover:shadow-soft transition-shadow overflow-hidden">
            
              <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors">
              
                <div className="flex items-center gap-4">
                  <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-medium text-white shrink-0 ${faq.color}`}>
                  
                    ?
                  </div>
                  <span className="font-display font-medium text-xl text-ink pr-4">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                className={`text-ink-soft transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                size={20}
                strokeWidth={2} />
              
              </button>

              <AnimatePresence>
                {openIndex === index &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{
                  duration: 0.3
                }}>
                
                    <div className="px-6 pb-6 pt-2 pl-16 text-ink-soft font-medium text-lg leading-relaxed relative">
                      <Sparkle
                    color="text-sunshine"
                    className="absolute top-2 right-6 w-5 h-5 opacity-50" />
                  
                      {faq.answer}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}