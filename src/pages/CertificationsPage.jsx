import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  FileCheck, 
  TestTube, 
  Package, 
  Ship, 
  Sparkles, 
  ArrowRight,
  Download,
  AlertCircle,
  FileSpreadsheet
} from 'lucide-react';
import CertificationsSection from '../components/CertificationsSection';
import CtaBanner from '../components/CtaBanner';

export default function CertificationsPage({ onNavigate, onOpenQuote }) {
  const qualitySteps = [
    {
      num: '01',
      title: 'Origin & Farm-Gate Sourcing',
      desc: 'Selected harvest directly from verified farming belts across Gujarat & India. Rigorous incoming physical inspection of seed size, aroma, and maturity.',
      icon: Sparkles
    },
    {
      num: '02',
      title: 'Sortex Cleaning & Optical Grading',
      desc: 'Multi-stage processing through pre-cleaners, destoners, and precision laser Sortex machinery achieving up to 99.9% commercial purity.',
      icon: CheckCircle2
    },
    {
      num: '03',
      title: 'NABL Certified Lab Analysis',
      desc: 'Stringent testing for Aflatoxin (B1, B2, G1, G2), pesticide residues, heavy metals, moisture content, and microbiology (Salmonella & E. Coli negative).',
      icon: TestTube
    },
    {
      num: '04',
      title: 'Food-Grade Export Packaging',
      desc: 'Hygienically packed in multi-ply paper bags, vacuum pouches, or food-grade PP woven bags with polyethylene liners, sealed for sea-freight durability.',
      icon: Package
    },
    {
      num: '05',
      title: 'Pre-Shipment & Port Inspection',
      desc: 'Phytosanitary treatment, container fumigation, moisture-trapping silica gel installation, and optional inspection by third parties (SGS / GeoChem).',
      icon: Ship
    }
  ];

  const parameters = [
    { param: 'Purity Level', standard: '99.0% – 99.9% Sortex Cleaned', note: 'Machine cleaned & Sortex graded' },
    { param: 'Aflatoxin (B1+B2+G1+G2)', standard: '< 4 ppb / < 10 ppb / < 15 ppb', note: 'Strict compliance with EU, US FDA & Gulf norms' },
    { param: 'Moisture Content', standard: '< 10% (Spices) / < 6% (Dehydrated)', note: 'Ensures prolonged shelf-life without fungal growth' },
    { param: 'Salmonella & E. Coli', standard: 'Absent in 25g', note: 'Microbiologically verified batch-to-batch' },
    { param: 'Pesticide Residue', standard: 'Below European & USDA MRL limits', note: 'GC-MS / LC-MS tested at NABL facilities' },
    { param: 'Heavy Metals (Pb, Cd, As)', standard: 'Well below international limits', note: 'Zero adulteration guarantee' },
  ];

  return (
    <div className="certifications-page" style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* 1. Page Hero Banner */}
      <section style={{
        position: 'relative',
        color: '#FFFFFF',
        padding: '80px 0 70px',
        overflow: 'hidden',
        backgroundColor: '#0F172A'
      }}>
        {/* Background Image — Cargo & Quality Control */}
        <img 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80" 
          alt="Quality & Compliance Jaliyan Exim" 
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0
          }}
        />
        {/* Deep Slate/Navy Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.95) 100%)',
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            initial={{ opacity: 0, y: 25 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(217, 119, 6, 0.2)',
              border: '1px solid rgba(217, 119, 6, 0.4)',
              color: '#FBBF24',
              fontSize: '12px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              padding: '6px 20px',
              borderRadius: '100px',
              marginBottom: '20px',
            }}>
              <ShieldCheck size={16} /> Global Food Safety &amp; Export Compliance
            </span>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '18px',
              color: '#FFFFFF',
              letterSpacing: '-0.5px'
            }}>
              Tested, Certified &amp; Compliant for Worldwide Export
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: 'rgba(255, 255, 255, 0.82)',
              lineHeight: 1.65,
              marginBottom: '30px',
              maxWidth: '720px',
              margin: '0 auto 30px'
            }}>
              Every shipment processed and exported by Jaliyan Exim complies with the stringent quality standards of APEDA, Spices Board, FSSAI, and IEC (Directorate General of Foreign Trade). We guarantee comprehensive batch traceability and certified Certificate of Analysis (COA).
            </p>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                type="button"
                className="btn btn-primary"
                onClick={() => onOpenQuote && onOpenQuote('Quality Compliance / Certificate of Analysis (COA)')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.95rem'
                }}
              >
                <span>Request Lab Certificate (COA)</span>
                <ArrowRight size={18} />
              </button>

              <button 
                type="button"
                className="btn"
                onClick={() => onNavigate && onNavigate('products')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <span>View Export Ranges</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Certifications Showcase Grid */}
      <CertificationsSection bgColor="#FFFFFF" />

      {/* 3. 5-Stage Quality Assurance Workflow */}
      <section style={{ padding: '70px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 50px' }}>
          <span style={{
            color: 'var(--primary-color, #C5A880)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '12px',
            fontWeight: 800,
            display: 'block',
            marginBottom: '8px'
          }}>
            Rigorous Protocols
          </span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            color: '#0F172A',
            fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
            fontWeight: 800,
            marginBottom: '16px'
          }}>
            Our 5-Stage Quality Assurance Workflow
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
            From Gujarat farm gates to global discharge ports, every stage is audited to eliminate contamination, preserve natural aroma, and comply with international food laws.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {qualitySteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '30px 26px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '20px',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#F1F5F9',
                  lineHeight: 1
                }}>
                  {step.num}
                </div>

                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(197, 168, 128, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                  color: 'var(--primary-color, #B48B57)'
                }}>
                  <Icon size={24} />
                </div>

                <h3 style={{
                  fontSize: '1.18rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '10px'
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  color: '#64748B',
                  lineHeight: 1.65,
                  margin: 0
                }}>
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Laboratory Analysis Parameters Benchmark Table */}
      <section style={{ 
        backgroundColor: '#FFFFFF', 
        borderTop: '1px solid #E2E8F0', 
        borderBottom: '1px solid #E2E8F0',
        padding: '70px 20px'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <span style={{
              color: 'var(--primary-color, #C5A880)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '12px',
              fontWeight: 800,
              display: 'block',
              marginBottom: '8px'
            }}>
              Lab Standards
            </span>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.3rem)',
              color: '#0F172A',
              fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
              fontWeight: 800,
              marginBottom: '14px'
            }}>
              Export Compliance &amp; Testing Benchmarks
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6 }}>
              We test all products in government-recognized NABL labs. Samples and test parameters can be tailored to meet your destination country’s exact port customs specifications.
            </p>
          </div>

          <div style={{ 
            overflowX: 'auto', 
            borderRadius: '10px', 
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                  <th style={{ padding: '16px 20px', fontSize: '0.88rem', fontWeight: 800, color: '#334155', textTransform: 'uppercase' }}>Testing Parameter</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.88rem', fontWeight: 800, color: '#334155', textTransform: 'uppercase' }}>Jaliyan Exim Benchmark</th>
                  <th style={{ padding: '16px 20px', fontSize: '0.88rem', fontWeight: 800, color: '#334155', textTransform: 'uppercase' }}>Compliance Note</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((row, idx) => (
                  <tr 
                    key={row.param} 
                    style={{ 
                      backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#FAFAFA',
                      borderBottom: '1px solid #E2E8F0'
                    }}
                  >
                    <td style={{ padding: '14px 20px', fontWeight: 700, color: '#0F172A', fontSize: '0.92rem' }}>
                      {row.param}
                    </td>
                    <td style={{ padding: '14px 20px', color: '#166534', fontWeight: 600, fontSize: '0.92rem' }}>
                      <span style={{ 
                        backgroundColor: '#DCFCE7', 
                        padding: '4px 10px', 
                        borderRadius: '6px', 
                        display: 'inline-block' 
                      }}>
                        {row.standard}
                      </span>
                    </td>
                    <td style={{ padding: '14px 20px', color: '#64748B', fontSize: '0.88rem' }}>
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Custom COA & Inspection Assistance Banner */}
      <div style={{ maxWidth: '1100px', margin: '60px auto 0', padding: '0 20px' }}>
        <div style={{
          backgroundColor: '#0F172A',
          borderRadius: '16px',
          padding: '45px 40px',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.3)'
        }}>
          <div style={{ maxWidth: '620px' }}>
            <span style={{
              color: '#FBBF24',
              fontSize: '12px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              display: 'block',
              marginBottom: '8px'
            }}>
              Buyer Assurance
            </span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '10px', color: '#FFFFFF' }}>
              Need a Batch-Specific Certificate of Analysis (COA)?
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '0.96rem', lineHeight: 1.6, margin: 0 }}>
              We provide full documentation for every shipment: Phytosanitary Certificate, Certificate of Origin, NABL Lab Reports, and SGS/GeoChem Pre-Shipment Inspection on demand.
            </p>
          </div>

          <button 
            type="button"
            className="btn btn-primary"
            onClick={() => onOpenQuote && onOpenQuote('Batch COA / Third Party Inspection Inquiry')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 30px',
              fontWeight: 700,
              fontSize: '0.95rem',
              whiteSpace: 'nowrap'
            }}
          >
            <span>Request Documentation</span>
            <FileSpreadsheet size={18} />
          </button>
        </div>
      </div>

      {/* 6. Contact CTA */}
      <div style={{ marginTop: '50px' }}>
        <CtaBanner onOpenQuote={onOpenQuote} onNavigate={onNavigate} />
      </div>

    </div>
  );
}
