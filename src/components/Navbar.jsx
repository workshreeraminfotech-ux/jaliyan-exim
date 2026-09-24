import React, { useState, useEffect, useRef } from 'react';
import logoImg from '../assets/logo.webp';
import { Menu, X, ChevronDown, Sparkles, Leaf, Sprout, ArrowRight } from 'lucide-react';

export default function Navbar({ activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (pageId) => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    if (pageId.startsWith('#')) {
      const el = document.querySelector(pageId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen(prev => !prev);
  };

  const handleScrollToQuote = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const isCategoryActive = ['products', 'spices', 'dehydrated', 'agro'].includes(activePage);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo - 100% visible, sharp & bold on white header */}
        <a 
          href="/" 
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          aria-label="Jaliyan Exim Home"
        >
          <img 
            src={logoImg} 
            alt="Jaliyan Exim - India to World" 
            className="logo-img" 
            width="100" 
            height="80" 
          />
        </a>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="menu-toggle" 
          id="menu-toggle-btn" 
          aria-label="Toggle menu" 
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          {mobileMenuOpen ? (
            <X size={26} color="#0f172a" />
          ) : (
            <Menu size={26} color="#0f172a" />
          )}
        </button>

        {/* Header Menu */}
        <div className={`header-menu ${mobileMenuOpen ? 'open' : ''}`} id="header-menu-dropdown">
          <nav className="nav" aria-label="Main Navigation">
            {/* 1. Home */}
            <a 
              href="#home" 
              className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              Home
            </a>

            {/* 2. Category Dropdown: Click to toggle and stays open */}
            <div 
              className="nav-dropdown"
              ref={dropdownRef}
            >
              <button 
                type="button"
                className={`nav-link nav-dropdown-trigger ${isCategoryActive || dropdownOpen ? 'active' : ''}`}
                onClick={handleDropdownToggle}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>Categories</span>
                <ChevronDown 
                  size={15} 
                  className={`chevron-icon ${dropdownOpen ? 'rotated' : ''}`} 
                />
              </button>

              {/* Desktop Dropdown Menu */}
              {dropdownOpen && (
                <div 
                  className="nav-dropdown-menu"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* 1. Spices & Seasonings */}
                  <a 
                    href="#spices" 
                    className={`nav-dropdown-item ${activePage === 'products' || activePage === 'spices' ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('products');
                    }}
                  >
                    <div className="dropdown-item-icon">
                      <Sparkles size={18} />
                    </div>
                    <div className="dropdown-item-text">
                      <span className="dropdown-item-title">Spices &amp; Seasonings</span>
                      <span className="dropdown-item-desc">Whole &amp; ground certified spices</span>
                    </div>
                  </a>

                  {/* 2. Dehydrated Products */}
                  <a 
                    href="#dehydrated" 
                    className={`nav-dropdown-item ${activePage === 'dehydrated' ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('dehydrated');
                    }}
                  >
                    <div className="dropdown-item-icon">
                      <Leaf size={18} />
                    </div>
                    <div className="dropdown-item-text">
                      <span className="dropdown-item-title">Dehydrated Products</span>
                      <span className="dropdown-item-desc">Onion, garlic, vegetables &amp; fruit powders</span>
                    </div>
                  </a>

                  {/* 3. Agro Commodities */}
                  <a 
                    href="#agro" 
                    className={`nav-dropdown-item ${activePage === 'agro' ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('agro');
                    }}
                  >
                    <div className="dropdown-item-icon">
                      <Sprout size={18} />
                    </div>
                    <div className="dropdown-item-text">
                      <span className="dropdown-item-title">Agro Commodities</span>
                      <span className="dropdown-item-desc">Sesame seeds, peanuts, grains &amp; pulses</span>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* 3. Quality & Compliance */}
            <a 
              href="#certifications" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#certifications');
              }}
            >
              Quality &amp; Compliance
            </a>

            {/* 4. Contact */}
            <a 
              href="#contact" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
            >
              Contact
            </a>
          </nav>

          {/* Request a Quote Button - Scrolls directly to Enquiry form */}
          <button 
            type="button"
            className="btn btn-primary nav-quote-btn"
            onClick={handleScrollToQuote}
            aria-label="Request a Quote"
          >
            <span>Request a Quote</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
