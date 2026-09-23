import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const FEATURED_DEHYDRATED = [
  {
    id: 'dehydrated-white-onion-flakes',
    title: 'Dehydrated White Onion Flakes',
    image: '/dehydrated/onion_flakes.jpg',
    desc: 'Export quality dehydrated white onion flakes (kibbled) with high pungency and instant rehydration.'
  },
  {
    id: 'dehydrated-garlic-flakes',
    title: 'Dehydrated Garlic Flakes & Cloves',
    image: '/dehydrated/garlic_flakes.jpg',
    desc: 'Sortex cleaned dehydrated garlic flakes with robust garlicky punch and high allicin content.'
  },
  {
    id: 'dehydrated-red-onion-flakes',
    title: 'Dehydrated Red Onion Flakes',
    image: '/dehydrated/red_onion.jpg',
    desc: 'Vibrant pink-red onion flakes and minced cuts offering authentic aroma and natural taste.'
  },
  {
    id: 'dehydrated-tomato-powder-flakes',
    title: 'Dehydrated Tomato Flakes & Powder',
    image: '/dehydrated/tomato_powder.jpg',
    desc: 'Rich crimson lycopene-packed tomato flakes and powder for soups, seasonings, and culinary blends.'
  },
  {
    id: 'dehydrated-green-peas',
    title: 'Dehydrated Green Peas & Vegetables',
    image: '/dehydrated/mixed_veg.jpg',
    desc: 'Quick rehydrating green peas and dried vegetables preserving natural sweetness and crisp texture.'
  },
  {
    id: 'dehydrated-mango-slices',
    title: 'Dehydrated Mango Slices & Amchur',
    image: '/dehydrated/mango_fruits.jpg',
    desc: 'Premium sun-dried raw and ripe mango slices offering natural tangy taste and long shelf life.'
  }
];

export default function DehydratedShowcase({ onNavigate, onOpenQuote, onSelectProduct }) {
  return (
    <section 
      style={{ 
        background: '#FFFFFF', 
        padding: '72px 0 80px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)'
      }}
    >
      <div className="container">
        
        {/* Header Block */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 46px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(56, 189, 248, 0.12)',
            border: '1.5px solid rgba(56, 189, 248, 0.4)',
            padding: '6px 20px',
            borderRadius: '100px',
            fontSize: '13px',
            fontWeight: 800,
            color: '#0284C7',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            <Leaf size={14} color="#38BDF8" />
            <span>EXPORT SPECIALTY • MAHUVA (GUJARAT) DIRECT</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-h)',
            fontSize: 'clamp(28px, 4.2vw, 42px)',
            fontWeight: 900,
            color: 'var(--navy)',
            lineHeight: 1.2,
            margin: '0 0 14px'
          }}>
            Export Grade <span style={{ color: 'var(--gold)' }}>Dehydrated Fruits & Vegetables</span>
          </h2>

          <p style={{
            fontSize: '16px',
            color: '#57534E',
            lineHeight: 1.6,
            margin: '0 auto',
            maxWidth: '680px'
          }}>
            Processed in ISO 22000 & HACCP compliant dehydration facilities. Zero preservatives, natural color retention, and rapid rehydration for global food manufacturers, seasonings, and FMCG brands.
          </p>
        </div>

        {/* 6 Cards Grid - Matching Spices clean design */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '26px',
          marginBottom: '40px'
        }}>
          {FEATURED_DEHYDRATED.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (idx % 3) * 0.08 }}
              style={{
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(11, 34, 64, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                border: '1.5px solid var(--border)',
                background: '#FFFFFF',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              whileHover={{ y: -6, boxShadow: '0 16px 36px rgba(56, 189, 248, 0.25)', borderColor: 'var(--gold)' }}
            >
              {/* Product Image Box */}
              <div
                style={{
                  height: '230px',
                  background: 'radial-gradient(circle, #FFFFFF 50%, #F9F7F2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  position: 'relative',
                  cursor: 'pointer',
                  borderBottom: '1px solid #F0E8D9'
                }}
                onClick={() => onSelectProduct ? onSelectProduct(item) : null}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    maxWidth: '90%',
                    maxHeight: '90%',
                    objectFit: 'contain',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              {/* Product Info Body */}
              <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 
                  style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', marginBottom: '10px', lineHeight: 1.3, cursor: 'pointer' }}
                  onClick={() => onSelectProduct ? onSelectProduct(item) : null}
                >
                  {item.title}
                </h3>

                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.55, marginBottom: '22px', flex: 1, fontWeight: 500 }}>
                  {item.desc}
                </p>

                {/* Single Clean Action Button */}
                <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                  <button
                    onClick={() => onOpenQuote ? onOpenQuote(item.title) : (onNavigate && onNavigate('contact'))}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '11px 14px', fontSize: '13.5px', fontWeight: 700, justifyContent: 'center', borderRadius: '8px' }}
                  >
                    <span>Request Quote</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA Banner */}
        <div style={{
          textAlign: 'center',
          backgroundColor: '#F0F9FF',
          borderRadius: '20px',
          padding: '24px 30px',
          border: '1.5px dashed rgba(14, 165, 233, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '18px'
        }}>
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', margin: '0 0 4px' }}>
              Looking for Customized Granulation or Private Label Packaging?
            </h4>
            <p style={{ fontSize: '14px', color: '#64748B', margin: 0 }}>
              We supply kibbled flakes, minced, granules (24-40 mesh), and fine powders (80-100 mesh) in customized export bulk cartons.
            </p>
          </div>

          <button
            onClick={() => onNavigate ? onNavigate('dehydrated') : null}
            className="btn btn-primary"
            style={{ padding: '12px 28px', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Explore Full Dehydrated Catalogue</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
