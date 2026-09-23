import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, FileText, ChevronLeft, ChevronRight, Globe2, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import heroShip from '../assets/hero/hero-ship.jpg';
import heroSpices from '../assets/hero/hero-spices.jpg';
import heroFruits from '../assets/hero/hero-fruits.jpg';
import heroPowders from '../assets/hero/hero-powders.jpg';

const SLIDES = [
  {
    id: 'ship',
    image: heroShip,
    badgeIcon: Globe2,
    badgeText: 'Global Maritime Agro Exports',
    badgeColor: '#38BDF8',
    titleMain: 'Global Agro Logistics &',
    titleHighlight: 'Worldwide Shipping',
    description: 'Delivering certified Indian agro commodities, whole spices, and dehydrated foods across all major global ports with reliable CIF & FOB shipping excellence.',
    primaryBtnText: 'Request CIF Price Quote',
    primaryTarget: 'contact',
    secondaryBtnText: 'Explore Agro Products',
    secondaryTarget: 'agro',
    tag: 'Port Logistics'
  },
  {
    id: 'spices',
    image: heroSpices,
    badgeIcon: Sparkles,
    badgeText: 'Authentic Indian Spice Belts',
    badgeColor: '#F59E0B',
    titleMain: 'Premium Whole & Ground',
    titleHighlight: 'Indian Spices',
    description: 'Direct farm sourcing from Gujarat and prime agricultural regions. 100% unadulterated whole spices, ground powders, and culinary blends with certified laboratory purity.',
    primaryBtnText: 'Explore Spice Catalog',
    primaryTarget: 'spices',
    secondaryBtnText: 'Request Spice Quote',
    secondaryTarget: 'contact',
    tag: 'Pure Spices'
  },
  {
    id: 'fruits',
    image: heroFruits,
    badgeIcon: ShieldCheck,
    badgeText: '100% Natural & Nutrient-Rich',
    badgeColor: '#10B981',
    titleMain: 'Finest Export Quality',
    titleHighlight: 'Dehydrated Fruits',
    description: 'Naturally preserved sun-dried mango slices, pineapples, apples, and fruit harvests preserving intense natural flavor, color, aroma, and extended shelf life for world markets.',
    primaryBtnText: 'View Dehydrated Fruits',
    primaryTarget: 'dehydrated',
    secondaryBtnText: 'Get Fruit Specs',
    secondaryTarget: 'contact',
    tag: 'Dried Fruits'
  },
  {
    id: 'powders',
    image: heroPowders,
    badgeIcon: Sparkles,
    badgeText: 'Advanced Processing & Purity',
    badgeColor: '#FB923C',
    titleMain: 'High-Grade Dehydrated',
    titleHighlight: 'Agro & Food Powders',
    description: 'Finest dehydrated onion, garlic, ginger, and tomato powders manufactured under stringent ISO/FSSAI safety standards for food manufacturers and spice blenders worldwide.',
    primaryBtnText: 'Explore Food Powders',
    primaryTarget: 'dehydrated',
    secondaryBtnText: 'Download Powder Specs',
    secondaryTarget: 'contact',
    tag: 'Food Powders'
  }
];

const AUTO_PLAY_INTERVAL = 5000;

export default function HeroBannerSlider({ onOpenQuote, onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goToSlide = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartXRef.current = 0;
    touchEndXRef.current = 0;
  };

  const currentSlide = SLIDES[currentIndex];
  const BadgeIcon = currentSlide.badgeIcon;

  return (
    <section 
      className="hero-slider-wrapper"
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero Product Banner Slider"
      style={{
        position: 'relative',
        minHeight: '620px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#050912',
        marginTop: 0,
        clear: 'both',
        padding: '90px 0 96px',
        userSelect: 'none'
      }}
    >
      {/* Background Images with smooth, crisp crossfade transition (no blur or dark dip) */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 1, 
          overflow: 'hidden' 
        }}
      >
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{ 
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 2 : 1
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
              }}
            >
              <img 
                src={slide.image} 
                alt={slide.titleHighlight}
                loading={idx === 0 ? 'eager' : 'lazy'}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'brightness(1.02) contrast(1.04)'
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Balanced Gradient Overlays: Keeps images bright, colorful & visible while maintaining readability */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(90deg, rgba(6, 14, 28, 0.72) 0%, rgba(6, 14, 28, 0.42) 48%, rgba(6, 14, 28, 0.12) 100%)', 
          zIndex: 2 
        }}
      />
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(180deg, rgba(6, 14, 28, 0.28) 0%, transparent 40%, rgba(6, 14, 28, 0.38) 100%)', 
          zIndex: 2 
        }}
      />

      {/* Left Navigation Arrow Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hero-arrow-btn hero-arrow-left"
        style={{
          position: 'absolute',
          left: 'clamp(10px, 2.5vw, 32px)',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: 'clamp(42px, 5vw, 54px)',
          height: 'clamp(42px, 5vw, 54px)',
          borderRadius: '50%',
          background: 'rgba(7, 16, 32, 0.65)',
          border: '1px solid rgba(255, 255, 255, 0.28)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          outline: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(14, 165, 233, 0.9)';
          e.currentTarget.style.borderColor = '#38BDF8';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(7, 16, 32, 0.65)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.45)';
        }}
      >
        <ChevronLeft size={26} strokeWidth={2.4} />
      </button>

      {/* Right Navigation Arrow Button */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hero-arrow-btn hero-arrow-right"
        style={{
          position: 'absolute',
          right: 'clamp(10px, 2.5vw, 32px)',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          width: 'clamp(42px, 5vw, 54px)',
          height: 'clamp(42px, 5vw, 54px)',
          borderRadius: '50%',
          background: 'rgba(7, 16, 32, 0.65)',
          border: '1px solid rgba(255, 255, 255, 0.28)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(0,0,0,0.45)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          outline: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(14, 165, 233, 0.9)';
          e.currentTarget.style.borderColor = '#38BDF8';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 189, 248, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(7, 16, 32, 0.65)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)';
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.45)';
        }}
      >
        <ChevronRight size={26} strokeWidth={2.4} />
      </button>

      {/* Main Slide Content Container */}
      <div 
        className="container hero-slider-container" 
        style={{ 
          position: 'relative', 
          zIndex: 5,
          paddingLeft: 'clamp(54px, 6vw, 84px)',
          paddingRight: 'clamp(54px, 6vw, 84px)'
        }}
      >
        <div style={{ maxWidth: '840px' }}>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              {/* Top Tagline Badge */}
              <div style={{ marginBottom: '18px' }}>
                <span 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    background: 'rgba(7, 16, 32, 0.85)', 
                    border: `1px solid ${currentSlide.badgeColor}66`, 
                    backdropFilter: 'blur(12px)', 
                    padding: '6px 16px', 
                    borderRadius: '100px', 
                    fontSize: '13px', 
                    fontWeight: 700, 
                    color: currentSlide.badgeColor,
                    boxShadow: '0 4px 18px rgba(0,0,0,0.35)'
                  }}
                >
                  <BadgeIcon size={15} color={currentSlide.badgeColor} />
                  <span>{currentSlide.badgeText}</span>
                  <span 
                    style={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      background: currentSlide.badgeColor, 
                      display: 'inline-block', 
                      boxShadow: `0 0 8px ${currentSlide.badgeColor}` 
                    }}
                  />
                </span>
              </div>

              {/* Main Hero Heading */}
              <h1 
                style={{ 
                  fontFamily: 'var(--font-h, Outfit, sans-serif)', 
                  fontSize: 'clamp(30px, 5vw, 52px)', 
                  fontWeight: 900, 
                  color: '#ffffff', 
                  lineHeight: 1.14, 
                  marginBottom: '18px', 
                  letterSpacing: '-0.5px',
                  textShadow: '0 4px 28px rgba(0,0,0,0.7)' 
                }}
              >
                {currentSlide.titleMain} <br />
                <span 
                  style={{ 
                    background: 'linear-gradient(135deg, #FFFFFF 10%, #BAE6FD 50%, #38BDF8 100%)', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent' 
                  }}
                >
                  {currentSlide.titleHighlight}
                </span>
              </h1>

              {/* Subtitle / Paragraph */}
              <p 
                style={{ 
                  fontFamily: 'var(--font-b, Inter, sans-serif)', 
                  fontSize: 'clamp(15px, 2vw, 17px)', 
                  color: 'rgba(255, 255, 255, 0.92)', 
                  lineHeight: 1.62, 
                  marginBottom: '28px', 
                  maxWidth: '700px', 
                  textShadow: '0 2px 12px rgba(0,0,0,0.55)' 
                }}
              >
                {currentSlide.description}
              </p>

              {/* CTA Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-primary" 
                  onClick={() => {
                    if (currentSlide.primaryTarget === 'contact') {
                      onOpenQuote ? onOpenQuote() : onNavigate('contact');
                    } else {
                      onNavigate ? onNavigate(currentSlide.primaryTarget) : null;
                    }
                  }}
                  style={{ 
                    padding: '14px 30px', 
                    fontSize: '15px', 
                    fontWeight: 700,
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    boxShadow: '0 8px 24px rgba(14, 165, 233, 0.4)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span>{currentSlide.primaryBtnText}</span>
                  <ArrowRight size={18} />
                </button>

                <button 
                  className="btn-outline" 
                  onClick={() => {
                    if (currentSlide.secondaryTarget === 'contact') {
                      onOpenQuote ? onOpenQuote() : onNavigate('contact');
                    } else {
                      onNavigate ? onNavigate(currentSlide.secondaryTarget) : null;
                    }
                  }}
                  style={{ 
                    color: '#ffffff', 
                    borderColor: 'rgba(255,255,255,0.4)', 
                    background: 'rgba(255,255,255,0.1)', 
                    backdropFilter: 'blur(10px)',
                    padding: '13px 26px', 
                    fontSize: '15px', 
                    fontWeight: 600, 
                    borderRadius: '8px',
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <FileText size={16} color="var(--gold, #F59E0B)" />
                  <span>{currentSlide.secondaryBtnText}</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Slide Indicators & Thumbnails Bar */}
      <div 
        style={{
          position: 'absolute',
          bottom: '22px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(7, 16, 32, 0.72)',
          padding: '8px 18px',
          borderRadius: '100px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}
      >
        {SLIDES.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.tag}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: isActive ? 'rgba(56, 189, 248, 0.25)' : 'transparent',
                border: isActive ? '1px solid #38BDF8' : '1px solid transparent',
                borderRadius: '100px',
                padding: isActive ? '4px 12px' : '4px 8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                color: isActive ? '#BAE6FD' : 'rgba(255, 255, 255, 0.65)',
                fontSize: '12px',
                fontWeight: isActive ? 700 : 500
              }}
            >
              <span 
                style={{
                  width: isActive ? '18px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: isActive ? '#38BDF8' : 'rgba(255, 255, 255, 0.45)',
                  display: 'inline-block',
                  transition: 'all 0.3s ease'
                }}
              />
              <span className="hero-indicator-label" style={{ display: isActive ? 'inline' : 'none' }}>
                {slide.tag}
              </span>
            </button>
          );
        })}
      </div>

      {/* Progress Line on Bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'rgba(255, 255, 255, 0.1)',
          zIndex: 10
        }}
      >
        <motion.div
          key={currentIndex + (isPaused ? '-paused' : '-running')}
          initial={{ width: '0%' }}
          animate={{ width: isPaused ? '0%' : '100%' }}
          transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: 'linear' }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #38BDF8, #F59E0B)'
          }}
        />
      </div>
    </section>
  );
}
