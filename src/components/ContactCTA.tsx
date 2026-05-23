import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
export function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-28 md:py-36 bg-grape-deep relative overflow-hidden">
      
      {/* Dreamy blurred blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-sunshine rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-coral rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-cream rounded-[2.5rem] p-8 md:p-16 shadow-[0_40px_80px_-20px_rgba(167,139,250,0.6)] max-w-5xl mx-auto border border-white/20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy & Direct Contact */}
            <div>
              <h2 className="font-display font-medium text-5xl md:text-6xl text-ink leading-[1.1] tracking-tight mb-6">
                Let's start your child's adventure ✨
              </h2>
              <p className="text-ink-soft text-xl font-medium mb-10">
                We're currently accepting enrollments for the upcoming term.
                Reach out to schedule a tour or ask any questions!
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+27123456789"
                  className="flex items-center gap-4 group bg-white p-4 rounded-2xl shadow-sm hover:shadow-soft transition-all">
                  
                  <div className="w-12 h-12 rounded-xl bg-sky/10 text-sky-deep flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-ink-soft font-bold uppercase tracking-wider mb-0.5">
                      Call Us
                    </p>
                    <p className="font-display font-medium text-ink text-xl">
                      012 345 6789
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Quick Form */}
            <div className="bg-white p-8 rounded-3xl shadow-soft border border-ink/5">
              <h3 className="font-display font-medium text-3xl text-ink mb-6">
                Send an Inquiry
              </h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="name"
                    className="block font-medium text-ink-soft text-sm mb-2">
                    
                    Parent's Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-5 py-3.5 rounded-xl border border-ink/10 focus:outline-none focus:ring-2 focus:ring-coral/20 focus:border-coral bg-cream/50 font-medium text-ink transition-all"
                    placeholder="Jane Sebola" />
                  
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-medium text-ink-soft text-sm mb-2">
                    
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-5 py-3.5 rounded-xl border border-ink/10 focus:outline-none focus:ring-2 focus:ring-coral/20 focus:border-coral bg-cream/50 font-medium text-ink transition-all"
                    placeholder="082 123 4567" />
                  
                </div>
                <div>
                  <label htmlFor="branch" className="block font-medium text-ink-soft text-sm mb-2">
                    Preferred Branch
                  </label>
                  <select id="branch" className="w-full px-5 py-3.5 rounded-xl border border-ink/10 focus:outline-none focus:ring-2 focus:ring-coral/20 focus:border-coral bg-cream/50 font-medium text-ink transition-all appearance-none">
                    <option value="">Select a branch...</option>
                    <option value="Soshanguve">Soshanguve</option>
                    <option value="Soshanguve02">Soshanguve 2</option>
                    <option value="mamelodi">Mamelodi</option>
                    <option value="CosmoCity">Cosmo City</option>
                    <option value="SkyCity">Sky City</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-coral text-white font-display font-medium text-xl py-4 rounded-xl transition-all shadow-glow-coral hover:scale-[1.02] hover:brightness-110 mt-2">
                  
                  Request Info
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>);

}