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

          <h1>Premium Agro Commodities &amp; Food Ingredients, Exported from India</h1>

          <p className="site-hero__lede">
            Spices, dehydrated vegetables, sun-dried fruits, sesame seeds, grains, and industrial ingredients &mdash; supplied to food manufacturers, processors, and private-label brands worldwide with certified purity and laboratory COA.
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
