import React, { Children, lazy } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

export function Gallery() {
  const images = [
  {
    src: '/img/12x8/04_img.png',
    alt: 'Gallery 00',
    span: 'md:col-span-2 md:row-span-2',
    tint: 'hover:shadow-glow-coral'
  },
  {
    src: '/img/6x6/05_img.png',
    alt: 'Galler 01',
    span: 'md:col-span-1 md:row-span-1',
    tint: 'hover:shadow-glow-sunshine'
  },
  {
    src: '/img/6x6/04_img.png',
    alt: 'Gallery 02',
    span: 'md:col-span-1 md:row-span-1',
    tint: 'hover:shadow-glow-mint'
  },
  {
    src: '/img/8x12/01_img.png',
    alt: 'Gallery 03',
    span: 'md:col-span-1 md:row-span-2',
    tint: 'hover:shadow-glow-grape'
  },
  {
    src: '/img/6x6/03_img.png',
    alt: 'Gallery 04',
    span: 'md:col-span-1 md:row-span-1',
    tint: 'hover:shadow-glow-sky'
  },
  {
    src: '/img/12x8/00_img.png',
    alt: 'Gallery 05',
    span: 'md:col-span-2 md:row-span-1',
    tint: 'hover:shadow-glow-bubblegum'
  },
  {
    src: '/img/6x6/02_img.png',
    alt: 'Gallery 06',
    span: 'md:col-span-1 md:row-span-1',
    tint: 'hover:shadow-glow-sunshine'
  },
  {
    src: '/img/12x8/05_img.png',
    alt: 'Gallery 07',
    span: 'md:col-span-1 md:row-span-2',
    tint: 'hover:shadow-glow-coral'
  },
  {
    src: '/img/12x8/01_img.png',
    alt: 'Gallery 08',
    span: 'md:col-span-2 md:row-span-1',
    tint: 'hover:shadow-glow-mint'
  },
  {
    src: '/img/6x6/08_img.jpg',
    alt: 'Gallery 09',
    span: 'md:col-span-1 md:row-span-1',
    tint: 'hover:shadow-glow-grape'
  },
  {
    src: '/img/12x8/02_img.png',
    alt: 'Gallery 10',
    span: 'md:col-span-1 md:row-span-1',
    tint: 'hover:shadow-glow-sky'
  },
  {
    src: '/img/12x8/06_img.png',
    alt: 'Gallery 11',
    span: 'md:col-span-2 md:row-span-1',
    tint: 'hover:shadow-glow-bubblegum'
  }];

  return (
    <section
      id="gallery"
      className="py-28 md:py-36 bg-cream relative overflow-hidden">
      
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_10%,rgba(255,217,61,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_90%,rgba(78,205,196,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          kicker="Our Wall of Fun"
          title="Moments of joy"
          description="A glimpse into the everyday smiles, discoveries, and creative play that make Mobsie Kids feel like home."
          className="mb-16" />
        

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((image, index) =>
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
              once: true,
              margin: '-50px'
            }}
            transition={{
              delay: index % 6 * 0.08,
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            whileHover={{
              y: -4
            }}
            className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-soft transition-all duration-500 ${image.tint} ${image.span}`}>
            
              <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}