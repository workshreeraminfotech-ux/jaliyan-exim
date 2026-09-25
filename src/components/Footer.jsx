import React from 'react';
import { Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo.webp';

export default function Footer() {
  return (
    <footer className="footer" style={{ background: '#0B2240', color: '#fff', padding: '60px 0 20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div className="footer-brand">
            <div style={{ marginBottom: '20px' }}>
              <img src={logoImg} alt="Jaliyan Exim Logo" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', margin: '16px 0 20px', lineHeight: 1.6 }}>
              Jaliyan Exim is a premier Indian merchant exporter of Spices, Agro Commodities, and Dehydrated Fruits & Vegetables. India to World — Delivering trust, exporting excellence globally.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/jaliyan_exim/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                <Instagram size={15} />
              </a>
              <a href="https://www.linkedin.com/company/jaliyan-exim/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <Linkedin size={15} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61593712983337" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
                <Facebook size={15} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=919726673414&text=Hi%20Jaliyan%20Exim!" target="_blank" rel="noopener noreferrer" className="social-icon" title="Business WhatsApp">
                <MessageCircle size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><a href="#about" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>About Us</a></li>
              <li><a href="#products" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Spices</a></li>
              <li><a href="#agro" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Agro Commodities</a></li>
              <li><a href="#dehydrated" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Dehydrated Products</a></li>
              <li><a href="#contact" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Categories</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><a href="#products" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Whole & Ground Spices</a></li>
              <li><a href="#agro" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Rice & Basmati</a></li>
              <li><a href="#agro" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Wheat, Corn & Pulses</a></li>
              <li><a href="#dehydrated" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Dehydrated Onion & Garlic</a></li>
              <li><a href="#dehydrated" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Dehydrated Fruits & Veg</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Connect Desk</h4>
            <div className="footer-contact">
              <strong>Phone / WhatsApp:</strong> +91 97266 73414
            </div>
            <div className="footer-contact">
              <strong>Phone 2:</strong> +91 90330 39649
            </div>
            <div className="footer-contact">
              <strong>Email:</strong> jaliyanexim2706@gmail.com
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)' }}>
              <strong>Location:</strong> Rajkot, Gujarat (India)
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Jaliyan Exim. All Rights Reserved.</p>
          <p>
            Developed by{' '}
            <a 
              href="https://www.matrixtechx.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--gold)', fontWeight: 800, textDecoration: 'none' }}
              onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              MatrixTechX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
