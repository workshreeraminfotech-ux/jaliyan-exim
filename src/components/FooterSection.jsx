import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle, ChevronRight, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.webp';

export default function FooterSection({ onNavigate }) {
  return (
    <footer className="footer-redesign-section">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col-brand">
            <div 
              className="footer-logo-wrap" 
              onClick={() => { if (onNavigate) onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <img src={logoImg} alt="Jaliyan Exim" />
            </div>
            <p className="footer-bio-text">
              Jaliyan Exim is a premier Indian merchant exporter of Premium Spices, Agro Commodities, and Dehydrated Fruits & Vegetables. Delivering trust, exporting excellence globally.
            </p>
            <div className="footer-social-row">
              <a href="https://www.facebook.com/profile.php?id=61578547394678" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/jaliyan_exim/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://www.linkedin.com/company/jaliyan-exim/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Home
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('about'); }}>
                  <ChevronRight size={14} className="link-arrow" /> About Us
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('products'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Spices Catalog
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('agro'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Agro Commodities
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('dehydrated'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Dehydrated Products
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contact'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="footer-col">
            <h3>Product Categories</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('products'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Whole & Ground Spices
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('agro'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Rice, Wheat & Grains
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('agro'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Pulses & Oilseeds
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('dehydrated'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Dehydrated Onion & Garlic
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('dehydrated'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Dehydrated Fruits & Veg
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>Rajkot, Gujarat, India</span>
              </div>
              <a href="tel:+919726673414" className="footer-contact-item item-link">
                <Phone size={18} className="contact-icon" />
                <span>+91 97266 73414</span>
              </a>
              <a href="tel:+919033039649" className="footer-contact-item item-link">
                <Phone size={18} className="contact-icon" />
                <span>+91 90330 39649</span>
              </a>
              <a href="mailto:jaliyanexim2706@gmail.com" className="footer-contact-item item-link">
                <Mail size={18} className="contact-icon" />
                <span>jaliyanexim2706@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Jaliyan Exim. All Rights Reserved.</p>
          <div className="footer-bottom-right">
            <span>
              Developed by{' '}
              <a 
                href="https://www.matrixtechx.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--gold)', fontWeight: 800, textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                MatrixTechX
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}


