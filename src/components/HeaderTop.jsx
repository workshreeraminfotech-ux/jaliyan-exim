import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, MessageCircle, Sparkles } from 'lucide-react';

export default function HeaderTop() {
  return (
    <div className="header-top-wrapper">
      {/* ================= DESKTOP HEADER TOP (>= 769px) ================= */}
      <div className="header-top-desktop">
        <div className="container">
          <div className="header-top-inner">
            {/* Left: Location & Direct Phone */}
            <div className="header-top-left">
              <span className="top-item">
                <MapPin size={14} className="top-icon gold" />
                <span>Rajkot, Gujarat (India)</span>
              </span>
              <span className="top-divider">|</span>
              <a href="tel:+919726673414" className="top-item top-link">
                <Phone size={14} className="top-icon gold" />
                <span>+91 97266 73414</span>
              </a>
              <span className="top-divider">|</span>
              <a href="tel:+919033039649" className="top-item top-link">
                <Phone size={14} className="top-icon gold" />
                <span>+91 90330 39649</span>
              </a>
            </div>

            {/* Center: Glowing Trust Badge */}
            <div className="header-top-center">
              <div className="top-trust-badge">
                <span className="live-pulse-dot" />
                <span>🌍 <strong>Jaliyan Exim:</strong> Certified Indian Merchant Exporter</span>
              </div>
            </div>

            {/* Right: Email & Socials */}
            <div className="header-top-right">
              <a href="mailto:jaliyanexim2706@gmail.com" className="top-item top-link">
                <Mail size={14} className="top-icon gold" />
                <span>jaliyanexim2706@gmail.com</span>
              </a>

              <div className="top-socials">
                <a href="https://api.whatsapp.com/send?phone=919726673414&text=Hi%20Jaliyan%20Exim!%20I%20would%20like%20to%20enquire%20about%20your%20export%20commodities." target="_blank" rel="noopener noreferrer" className="social-pill whatsapp" title="Chat on WhatsApp">
                  <MessageCircle size={13} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61578547394678" target="_blank" rel="noopener noreferrer" className="social-pill" title="Facebook">
                  <Facebook size={13} />
                </a>
                <a href="https://www.instagram.com/jaliyan_exim/" target="_blank" rel="noopener noreferrer" className="social-pill" title="Instagram">
                  <Instagram size={13} />
                </a>
                <a href="https://www.linkedin.com/company/jaliyan-exim/" target="_blank" rel="noopener noreferrer" className="social-pill" title="LinkedIn">
                  <Linkedin size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE HEADER TOP (< 769px) ================= */}
      <div className="header-top-mobile">
        {/* Tier 1: Announcement Ticker */}
        <div className="header-mobile-ticker">
          <div className="ticker-badge">
            <span className="live-pulse-dot" />
            <span className="ticker-text">🌍 <strong>Jaliyan Exim:</strong> India to World — Trusted Export Partner 🇮🇳</span>
          </div>
        </div>

        {/* Tier 2: Instant Touch Action Chips */}
        <div className="header-mobile-actions">
          <a href="tel:+919726673414" className="mobile-action-chip primary" title="Call Sales">
            <Phone size={13} />
            <span>+91 97266 73414</span>
          </a>

          <a href="mailto:jaliyanexim2706@gmail.com" className="mobile-action-chip" title="Email Us">
            <Mail size={13} />
            <span>Email</span>
          </a>

          <a 
            href="https://api.whatsapp.com/send?phone=919726673414&text=Hi%20Jaliyan%20Exim!%20I%20would%20like%20to%20enquire%20about%20your%20export%20commodities." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-action-chip whatsapp"
            title="WhatsApp"
          >
            <MessageCircle size={13} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}


