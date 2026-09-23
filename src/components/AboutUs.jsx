import React from 'react';
import { ArrowRight, Award, Globe2, Truck, CheckCircle2, Building2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import aboutUsImg from '../assets/about us.webp';

export default function AboutUs() {
  return (
    <section className="about-section py-50" id="about" style={{ backgroundColor: '#FFFFFF', padding: '54px 0' }}>
      <div className="container">
        <div className="about-grid-wrapper">
          
          {/* Photo Column (Left on Laptop, Appears right after Intro on Phone) */}
          <motion.div
            className="about-image-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', width: '100%' }}
          >
            {/* Floating Experience Badge */}
            <div style={{
              position: 'absolute',
              top: '-18px',
              left: '18px',
              background: 'linear-gradient(135deg, #0F2548 0%, #1A3A6B 100%)',
              color: '#FFFFFF',
              padding: '14px 22px',
              borderRadius: '18px',
              boxShadow: '0 16px 36px rgba(56, 189, 248, 0.25)',
              border: '2px solid #38BDF8',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backdropFilter: 'blur(8px)',
              maxWidth: 'calc(100% - 36px)'
            }}>
              <span style={{ fontSize: '32px', fontWeight: 900, fontFamily: 'var(--font-h, Outfit, sans-serif)', color: '#7DD3FC', lineHeight: 1 }}>
                <AnimatedCounter end={10} suffix="+" />
              </span>
              <span style={{ fontSize: '12.5px', fontWeight: 800, lineHeight: 1.3, color: '#F0F9FF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Years of Corporate<br />Export Excellence
              </span>
            </div>

            {/* Main About Us Photo Frame */}
            <div style={{
              position: 'relative',
              borderRadius: '26px',
              overflow: 'hidden',
              border: '2px solid var(--border)',
              boxShadow: '0 18px 40px rgba(14, 165, 233, 0.1)',
              backgroundColor: '#F8FAFC',
              marginTop: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              width: '100%'
            }}>
              <img
                src={aboutUsImg}
                alt="About Jaliyan Exim Corporate & Facility"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '460px',
                  objectFit: 'contain',
                  borderRadius: '18px',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
              />
            </div>
          </motion.div>

          {/* Content Column (Right on Laptop, Flow on Phone) */}
          <motion.div
            className="about-content-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Intro Lead Block */}
            <div className="about-intro-lead-block">
              <span className="eyebrow" style={{ marginBottom: '14px' }}>
                Jaliyan Exim • PREMIER INDIAN MERCHANT EXPORTER
              </span>

              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 38px)', fontWeight: 900, color: 'var(--navy)', lineHeight: 1.2, margin: '12px 0 16px', fontFamily: 'var(--font-h, Outfit, sans-serif)' }}>
                Delivering Trust, <span style={{ color: 'var(--gold)' }}>Exporting Excellence</span>
              </h2>

              <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65, marginBottom: '20px', fontWeight: 500 }}>
                <strong>Jaliyan Exim</strong> is a premier Indian merchant exporter based in <strong>Gujarat, India</strong>, specializing in the global export of three core pillars: <strong>Indian Spices & Seasonings, Agro Commodities (Rice, Wheat, Pulses & Grains),</strong> and <strong>Dehydrated Fruits & Vegetables (Onion Flakes, Garlic, Tomato & Dry Fruits)</strong>. We bridge Indian farmers and processors with international buyers through end-to-end direct sourcing, rigorous Sortex quality inspection, and seamless sea container export logistics.
              </p>
            </div>

            {/* Mobile Injected Photo Slot (Visible only on phone) */}
            <div className="about-mobile-photo-placement" />



            <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: 1.6, marginBottom: '24px' }}>
              As a merchant exporter, we connect India's finest manufacturers and producers with global markets. Our clients benefit from competitive pricing, consolidated multi-product shipments, transparent documentation, and reliable on-time delivery across all product categories.
            </p>



            {/* Action CTA */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="#products-section" className="btn btn-primary" style={{ padding: '13px 32px', fontSize: '14.5px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>Explore Products</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
