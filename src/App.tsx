import React from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { ExtraMurals } from './components/ExtraMurals';
import { OurValues } from './components/OurValuesPage';
import { Programs } from './components/Programs';
import { Branches } from './components/Branches';
import { DailyExperience } from './components/DailyExperience';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
export function App() {
  return (
  <div className="min-h-screen bg-cream font-sans text-ink selection:bg-sunshine selection:text-ink">
    <ScrollProgress />
    <Navbar />
    <main>
      <Hero />
      <About />
      <OurValues />
      <ExtraMurals />
      <Programs />
      <Branches />
      <DailyExperience />
      <Gallery />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </main>
    <Marquee />
    <Footer />
  </div>);

}