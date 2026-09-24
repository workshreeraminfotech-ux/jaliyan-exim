import React from 'react';
import QuantumHero from '../components/QuantumHero';
import CapabilityStrip from '../components/CapabilityStrip';
import QuantumCategories from '../components/QuantumCategories';
import QuantumWhy from '../components/QuantumWhy';
import QuantumAbout from '../components/QuantumAbout';
import CertificationsSection from '../components/CertificationsSection';
import QuantumContact from '../components/QuantumContact';

export default function Home({ onSelectProduct, onNavigate, onOpenQuote }) {
  return (
    <div className="home-page">
      {/* 1. Hero with Video & Quantum Indus Format */}
      <QuantumHero onOpenQuote={() => onOpenQuote()} onNavigate={onNavigate} />

      {/* 2. Capability Metric Strip */}
      <CapabilityStrip />

      {/* 3. What We Supply - Category Grid */}
      <QuantumCategories onNavigate={onNavigate} />

      {/* 4. Why Buyers Work With Us (4-Value Grid) */}
      <QuantumWhy />

      {/* 5. About Us & 3 Pillars */}
      <QuantumAbout />

      {/* 6. Certifications & Quality Compliance Hub */}
      <CertificationsSection />

      {/* 7. Direct RFQ & Office Contact */}
      <QuantumContact />
    </div>
  );
}
