import React from 'react';
import { motion } from 'framer-motion';
export const Star = ({ color = 'text-sunshine', className = '' }) =>
<motion.svg
  animate={{
    y: [0, -10, 0],
    rotate: [0, 5, 0]
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut'
  }}
  className={`w-10 h-10 ${color} ${className}`}
  viewBox="0 0 24 24"
  fill="currentColor">
  
    <path
    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round" />
  
  </motion.svg>;

export const Sparkle = ({ color = 'text-coral', className = '' }) =>
<motion.svg
  animate={{
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut'
  }}
  className={`w-8 h-8 ${color} ${className}`}
  viewBox="0 0 24 24"
  fill="currentColor">
  
    <path d="M12 2C12 2 12 10 20 12C12 14 12 22 12 22C12 22 12 14 4 12C12 10 12 2 12 2Z" />
  </motion.svg>;

export const Cloud = ({ color = 'text-white', className = '' }) =>
<motion.svg
  animate={{
    x: [0, 15, 0]
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: 'easeInOut'
  }}
  className={`w-20 h-12 ${color} ${className}`}
  viewBox="0 0 24 24"
  fill="currentColor">
  
    <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1325 20.176 10.2048 17.8593 10.0176C17.4093 7.17293 14.9404 5 12 5C9.37466 5 7.15175 6.80434 6.3516 9.21319C3.94632 9.49326 2 11.5202 2 14C2 16.7614 4.23858 19 7 19H17.5Z" />
  </motion.svg>;

export const Sun = ({ color = 'text-sunshine', className = '' }) =>
<motion.svg
  animate={{
    rotate: 360
  }}
  transition={{
    duration: 30,
    repeat: Infinity,
    ease: 'linear'
  }}
  className={`w-16 h-16 ${color} ${className}`}
  viewBox="0 0 24 24"
  fill="currentColor">
  
    <circle cx="12" cy="12" r="5" />
    <path
    d="M12 2L12 5M12 19L12 22M2 12L5 12M19 12L22 12M4.92893 4.92893L7.05025 7.05025M16.9497 16.9497L19.0711 19.0711M4.92893 19.0711L7.05025 16.9497M16.9497 7.05025L19.0711 4.92893"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round" />
  
  </motion.svg>;

export const Squiggle = ({ color = 'text-mint', className = '' }) =>
<motion.svg
  className={`w-24 h-6 ${color} ${className}`}
  viewBox="0 0 100 20"
  fill="none">
  
    <path
    d="M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round" />
  
  </motion.svg>;