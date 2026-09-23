import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function HeaderTop() {
  return (
    <div 
      className="header-top-section" 
      style={{ 
        background: 'var(--navy-dark)', 
        color: '#ffffff', 
        padding: '8px 0', 
        fontSize: '13px', 
        borderBottom: '1px solid rgba(255,255,255,0.1)' 
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.92)', fontWeight: 500 }}>
              <MapPin size={14} style={{ color: 'var(--gold)', flexShrink: 0 }} />
              <span>Rajkot, Gujarat (India)</span>
            </span>
            <a href="tel:+919726673414" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.92)', textDecoration: 'none', fontWeight: 600 }}>
              <Phone size={14} style={{ color: 'var(--gold)' }} />
              +91 97266 73414
            </a>
            <a href="tel:+919033039649" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.92)', textDecoration: 'none', fontWeight: 600 }}>
              <Phone size={14} style={{ color: 'var(--gold)' }} />
              +91 90330 39649
            </a>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="mailto:jaliyanexim2706@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.92)', textDecoration: 'none', fontWeight: 600 }}>
              <Mail size={14} style={{ color: 'var(--gold)' }} />
              jaliyanexim2706@gmail.com
            </a>
            <div className="header-top-socials d-none-mobile" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '6px', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '14px' }}>
              <a href="https://www.facebook.com/profile.php?id=61578547394678" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.85)', transition: 'color 0.2s' }} aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="https://www.instagram.com/jaliyan_exim/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.85)', transition: 'color 0.2s' }} aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="https://www.linkedin.com/company/jaliyan-exim/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.85)', transition: 'color 0.2s' }} aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


