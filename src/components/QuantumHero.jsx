import React from 'react';
import heroVideo from '../assets/hero-bg.mp4';
import heroPoster from '../assets/hero-poster.webp';
import { ArrowRight, FileText, ShieldCheck, MapPin } from 'lucide-react';

export default function QuantumHero({ onOpenQuote, onNavigate }) {
  return (
    <section className="site-hero" id="hero">
      <div className="site-hero__media">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata" 
          poster={heroPoster} 
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="site-hero__scrim"></div>

      <div className="site-hero__inner">
        <div className="site-hero__copy">
          <p className="hero-eyebrow">
            <span className="division-dot" aria-hidden="true"></span>
            Rajkot, Gujarat &middot; India
          </p>

          <h1>Leading Indian Exporter of Spices, Basmati Rice &amp; Dehydrated Products</h1>

          <p className="site-hero__lede">
            Pure whole spices, ground powders, 1121 steam Basmati rice, bold Kabuli chickpeas, and dehydrated onion &amp; garlic &mdash; supplied to global food manufacturers and importers with certified purity, NABL laboratory COA, and complete export compliance.
          </p>

          <div className="hero-actions">
            <button 
              className="btn btn-primary" 
              onClick={() => {
                const el = document.getElementById('products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else if (onNavigate) onNavigate('products');
              }}
            >
              <span>Explore Products</span>
              <ArrowRight size={18} />
            </button>

            <button 
              className="btn btn-ghost" 
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else if (onOpenQuote) onOpenQuote();
              }}
            >
              <span>Request a Quote</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
