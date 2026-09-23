import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Eye, Sparkles, Filter, CheckCircle2, Leaf } from 'lucide-react';
import { getDehydratedProducts, getCategories } from '../utils/adminStore';

export default function DehydratedPage({ onSelectProduct, onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState(getCategories('dehydrated'));

  const productsList = getDehydratedProducts();

  useEffect(() => {
    const handleSync = () => {
      setCategories(getCategories('dehydrated'));
    };
    window.addEventListener('trishu_store_sync', handleSync);
    window.addEventListener('trishu_store_updated', handleSync);
    return () => {
      window.removeEventListener('trishu_store_sync', handleSync);
      window.removeEventListener('trishu_store_updated', handleSync);
    };
  }, []);

  // Helper to match category cleanly
  const isMatchCategory = (product, cat) => {
    if (!cat || cat === 'All') return true;
    if (product.category === cat || product.cat === cat) return true;
    if (Array.isArray(product.categories) && product.categories.includes(cat)) return true;
    if (cat === 'Dehydrated Powders') {
      const t = (product.title || '').toLowerCase();
      const id = (product.id || '').toLowerCase();
      return t.includes('powder') || id.includes('powder');
    }
    return false;
  };

  // Filter logic
  const filteredProducts = useMemo(() => {
    return productsList.filter(product => {
      const matchesCategory = isMatchCategory(product, activeTab);
      const matchesSearch = searchTerm.trim() === '' || 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (product.desc && product.desc.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchTerm, productsList]);

  // Counts for tabs
  const categoryCounts = useMemo(() => {
    const counts = { All: productsList.length };
    categories.forEach(cat => {
      if (cat !== 'All') {
        counts[cat] = productsList.filter(p => isMatchCategory(p, cat)).length;
      }
    });
    return counts;
  }, [productsList, categories]);

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', paddingBottom: '100px' }}>
      
      {/* Dynamic Hero Section — Dehydrated Produce Themed Overlay */}
      <section style={{
        position: 'relative',
        color: '#FFFFFF',
        padding: '75px 0 65px',
        overflow: 'hidden',
        backgroundColor: '#1E293B'
      }}>
        {/* Background Image — Modern Dehydration Facility / Produce */}
        <img 
          src="/dehydrated/dehydrated_banner.jpg" 
          alt="Dehydrated Fruits & Vegetables Facility" 
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 35%',
            zIndex: 0
          }}
        />
        {/* Warm Slate Navy Dark Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.94) 100%)',
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1.5px solid var(--gold)',
              color: 'var(--gold)',
              fontSize: '12px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              padding: '6px 20px',
              borderRadius: '100px',
              marginBottom: '20px',
              backdropFilter: 'blur(6px)'
            }}>
              <Leaf size={14} style={{ color: 'var(--gold)' }} />
              100% Natural Dehydrated Foods • {productsList.length} Export Commodities
            </span>

            <h1 style={{
              fontFamily: 'var(--font-h, Outfit, sans-serif)',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: '20px',
              letterSpacing: '-0.5px',
              color: '#FFFFFF'
            }}>
              Explore Our Complete <br />
              <span style={{ color: 'var(--gold)' }}>Dehydrated Fruits & Vegetables Catalogue</span>
            </h1>

            <p style={{
              fontSize: '17px',
              color: 'rgba(255, 255, 255, 0.92)',
              lineHeight: 1.6,
              maxWidth: '780px',
              margin: '0 auto 36px',
              fontWeight: 500
            }}>
              Direct sourcing from Mahuva (Gujarat) & India's top dehydration centers. Supplying dehydrated white & red onions, garlic flakes & powder, dried tomatoes, green peas, ginger, and dried tropical fruits with maximum nutritional retention.
            </p>

            {/* Quick Stats Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              fontSize: '14px',
              color: '#FFFFFF',
              fontWeight: 700
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.1)', padding: '8px 18px', borderRadius: '100px', border: '1px solid rgba(14, 165, 233, 0.4)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--gold)' }} />
                <span>Mahuva (Gujarat) Direct Origin</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.1)', padding: '8px 18px', borderRadius: '100px', border: '1px solid rgba(14, 165, 233, 0.4)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--gold)' }} />
                <span>100% Pure, Zero Preservatives & Non-GMO</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.1)', padding: '8px 18px', borderRadius: '100px', border: '1px solid rgba(14, 165, 233, 0.4)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--gold)' }} />
                <span>Export Moisture &lt; 6.0% | Long Shelf Life</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Catalog Content */}
      <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        
        {/* Search & Category Filter Controls */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          padding: '24px',
          boxShadow: '0 20px 50px rgba(11, 34, 64, 0.08)',
          border: '1.5px solid var(--border)',
          marginBottom: '40px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {/* Search Input Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#FFFDF7',
              border: '1.5px solid var(--border)',
              borderRadius: '16px',
              padding: '12px 20px'
            }}>
              <Search size={20} style={{ color: 'var(--gold)', flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search dehydrated foods (e.g. White Onion Flakes, Garlic Powder, Tomato Flakes, Green Peas, Mango Slices...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  width: '100%',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: 'var(--navy)'
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  style={{
                    border: 'none',
                    background: 'var(--gold-pale)',
                    color: 'var(--gold-deep)',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: '6px', marginRight: '6px' }}>
                <Filter size={14} style={{ color: 'var(--gold)' }} /> Categories:
              </span>
              {categories.map((cat) => {
                const isActive = activeTab === cat;
                const count = categoryCounts[cat] || 0;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '100px',
                      fontSize: '13.5px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      border: isActive ? '1.5px solid var(--gold)' : '1.5px solid var(--border)',
                      background: isActive ? 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : 'var(--navy)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.25s ease',
                      boxShadow: isActive ? '0 4px 14px rgba(56, 189, 248, 0.35)' : 'none'
                    }}
                  >
                    <span>{cat}</span>
                    <span style={{
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'var(--gold-pale)',
                      color: isActive ? '#FFFFFF' : 'var(--gold-deep)',
                      fontSize: '11px',
                      padding: '2px 8px',
                      borderRadius: '100px',
                      fontWeight: 800
                    }}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Counter Info */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '28px',
          padding: '0 4px'
        }}>
          <p style={{ fontSize: '14.5px', color: 'var(--gray)', fontWeight: 600 }}>
            Showing <strong style={{ color: 'var(--navy)' }}>{filteredProducts.length}</strong> of <strong style={{ color: 'var(--navy)' }}>{productsList.length}</strong> dehydrated commodities
            {activeTab !== 'All' && <span> in <strong>{activeTab}</strong></span>}
          </p>

          {(searchTerm || activeTab !== 'All') && (
            <button
              onClick={() => { setActiveTab('All'); setSearchTerm(''); }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--gold-deep)',
                fontSize: '13px',
                fontWeight: 800,
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '28px'
          }}
        >
          <AnimatePresence>
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id || idx}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: (idx % 6) * 0.05 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1.5px solid var(--border)',
                  boxShadow: '0 8px 30px rgba(11, 34, 64, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer'
                }}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(14, 165, 233, 0.18)', borderColor: 'var(--gold)' }}
                onClick={() => onSelectProduct ? onSelectProduct(product) : null}
              >
                {/* Product Image */}
                <div style={{
                  position: 'relative',
                  height: '240px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  borderBottom: '1px solid var(--border)'
                }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />

                  {/* Category Pill */}
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'var(--gold-pale)',
                    color: 'var(--gold-deep)',
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '100px',
                    border: '1px solid var(--gold-light)'
                  }}>
                    {product.category || product.cat}
                  </span>
                </div>

                {/* Body Content — Clean Product Name & Description */}
                <div style={{
                  padding: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-h, Outfit, sans-serif)',
                    fontSize: '19px',
                    fontWeight: 800,
                    color: 'var(--navy)',
                    marginBottom: '10px',
                    lineHeight: 1.3
                  }}>
                    {product.title}
                  </h3>

                  <p style={{
                    fontSize: '13.5px',
                    color: 'var(--gray)',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                    flex: 1,
                    fontWeight: 500
                  }}>
                    {product.desc || product.description}
                  </p>

                  {/* Single Clean Action Button */}
                  <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenQuote) onOpenQuote(product.title);
                      }}
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        padding: '11px 16px',
                        fontSize: '13.5px',
                        justifyContent: 'center'
                      }}
                    >
                      <span>Request Quote</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '70px 20px',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1.5px dashed var(--border)',
            marginTop: '20px'
          }}>
            <Leaf size={44} style={{ color: '#CBD5E1', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--navy)', marginBottom: '8px' }}>
              No dehydrated products match "{searchTerm}"
            </h3>
            <p style={{ color: 'var(--gray)', fontSize: '14.5px', marginBottom: '20px' }}>
              Try searching with another keyword like "onion", "garlic", "tomato", "mango", or reset the filter.
            </p>
            <button
              onClick={() => { setActiveTab('All'); setSearchTerm(''); }}
              className="btn btn-primary"
              style={{ padding: '10px 24px', fontSize: '14px' }}
            >
              Show All Dehydrated Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
