import React from 'react';
import logoImg from '../assets/logo.webp';
import { Mail, Phone, MapPin, Globe, ExternalLink, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';

export default function FooterSection({ onNavigate, onOpenQuote }) {
  const handleNav = (pageId) => {
    const cleanId = typeof pageId === 'string' ? pageId.replace(/^#/, '').toLowerCase() : pageId;
    if (typeof pageId === 'string' && pageId.startsWith('#')) {
      const el = document.querySelector(pageId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (onNavigate) onNavigate(cleanId);
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo-wrapper">
            <img 
              src={logoImg} 
              alt="Jaliyan Exim" 
              className="footer-logo" 
              width="240" 
              height="60" 
              loading="lazy" 
            />
          </div>
          <p className="footer-tagline">
            Jaliyan Exim &mdash; Delivering Trust, Exporting Excellence Worldwide.
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '12px' }}>
            Premier merchant exporter from Gujarat, India. Supplying pure whole spices, ground culinary powders, dehydrated vegetables, and agro commodities worldwide.
          </p>

          {/* Official Social Links */}
          <div className="footer-social-links" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '18px' }}>
            <a 
              href="https://www.instagram.com/jaliyan_exim/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn"
              title="Follow Jaliyan Exim on Instagram"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a 
              href="https://www.linkedin.com/company/jaliyan-exim/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn"
              title="Connect with Jaliyan Exim on LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61593712983337" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn"
              title="Follow Jaliyan Exim on Facebook"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=919726673414&text=Hi%20Jaliyan%20Exim!%20I%20would%20like%20to%20enquire%20about%20your%20export%20commodities." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn whatsapp"
              title="Chat with Jaliyan Exim on WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Products */}
        <div className="footer-col">
          <h4>Export Ranges</h4>
          <a href="#spices" onClick={(e) => { e.preventDefault(); handleNav('products'); }}>Spices &amp; Seasonings</a>
          <a href="#agro" onClick={(e) => { e.preventDefault(); handleNav('agro'); }}>Agro Commodities</a>
          <a href="#dehydrated" onClick={(e) => { e.preventDefault(); handleNav('dehydrated'); }}>Dehydrated Products</a>
          <a href="#rice" onClick={(e) => { e.preventDefault(); handleNav('agro'); }}>Basmati Rice &amp; Chickpeas</a>
          <a href="#powders" onClick={(e) => { e.preventDefault(); handleNav('dehydrated'); }}>Food &amp; Spice Powders</a>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#products" onClick={(e) => { e.preventDefault(); handleNav('products'); }}>All Catalogues</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNav('about'); }}>About Jaliyan Exim</a>
          <a href="#certifications" onClick={(e) => { e.preventDefault(); handleNav('certifications'); }}>Quality &amp; Compliance</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('contact'); }}>Request a Quote (RFQ)</a>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>
            <strong>Head Office &bull; India</strong><br />
            Rajkot, Gujarat 360001, India<br />
            <span style={{ color: 'var(--gold-color)', fontSize: '0.8rem' }}>Mundra &amp; Kandla Port Gateway</span>
          </p>
          <p style={{ marginTop: '10px' }}>
            <a href="mailto:jaliyanexim2706@gmail.com" style={{ color: 'var(--text-light)' }}>
              jaliyanexim2706@gmail.com
            </a>
          </p>
          <p style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '6px' }}>
            <a href="tel:+919726673414" style={{ color: 'var(--gold-color)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              +91 97266 73414
            </a>
            <a href="tel:+919033039649" style={{ color: 'var(--gold-color)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              +91 90330 39649
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Jaliyan Exim. All rights reserved.</p>

          <div className="footer-developer">
            <span className="dev-label">Developed by</span>
            <a 
              href="https://www.matrixtechx.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="matrixtechx-btn"
              title="MatrixTechX — Digital & Web Solutions"
            >
              <span className="matrix-pulse"></span>
              <span>MatrixTechX</span>
              <ExternalLink size={12} className="matrix-arrow" />
            </a>
          </div>

          <p className="footer-certs">
            Specifications, laboratory testing, and Certificate of Analysis confirmed per order.
          </p>
        </div>
      </div>
    </footer>
  );
}
