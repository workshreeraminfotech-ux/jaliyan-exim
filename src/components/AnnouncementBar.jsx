import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="container">
        <div className="announcement-left">
          <span className="announcement-item">
            <MapPin size={14} color="var(--gold)" />
            <span>Rajkot, Gujarat (India)</span>
          </span>
          <a href="tel:+919726673414" className="announcement-item">
            <Phone size={14} color="var(--gold)" />
            <span>+91 97266 73414</span>
          </a>
          <a href="tel:+919033039649" className="announcement-item">
            <Phone size={14} color="var(--gold)" />
            <span>+91 90330 39649</span>
          </a>
          <a href="mailto:jaliyanexim2706@gmail.com" className="announcement-item">
            <Mail size={14} color="var(--gold)" />
            <span>jaliyanexim2706@gmail.com</span>
          </a>
        </div>

        <div className="announcement-center-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(237, 108, 27, 0.15)', border: '1px solid rgba(237, 108, 27, 0.4)', padding: '3px 12px', borderRadius: '100px', fontSize: '12px', color: 'var(--gold-light)', fontWeight: 600 }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 1.5s infinite' }}></span>
          <span>🌍 <strong>Jaliyan Exim:</strong> India to World — Trusted Export Partner 🇮🇳</span>
        </div>

        <div className="announcement-right">
          <span style={{ fontSize: '12px', opacity: 0.8, fontWeight: 600 }}>Follow Us:</span>
          <div className="social-links">
            <a href="https://www.instagram.com/jaliyan_exim/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
              <Instagram size={14} />
            </a>
            <a href="https://www.linkedin.com/company/jaliyan-exim/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <Linkedin size={14} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578547394678" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
              <Facebook size={14} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=919726673414&text=Hi%20Jaliyan%20Exim!%20I%20would%20like%20to%20enquire%20about%20your%20export%20commodities." target="_blank" rel="noopener noreferrer" className="social-icon" title="Business WhatsApp">
              <MessageCircle size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
