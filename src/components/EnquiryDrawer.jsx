import React, { useState, useEffect } from 'react';
import { X, Trash2, Send, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { getEnquiryCart, removeFromEnquiryCart, clearEnquiryCart, getWhatsAppEnquiryUrl } from '../utils/enquiryCart';

export default function EnquiryDrawer({ isOpen, onClose, onOpenQuote }) {
  const [cart, setCart] = useState(getEnquiryCart());

  useEffect(() => {
    const handleCartUpdate = (e) => {
      setCart(e.detail || getEnquiryCart());
    };
    window.addEventListener('jaliyan_cart_updated', handleCartUpdate);
    return () => {
      window.removeEventListener('jaliyan_cart_updated', handleCartUpdate);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCart(getEnquiryCart());
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleWhatsAppSubmit = () => {
    const url = getWhatsAppEnquiryUrl(cart);
    window.open(url, '_blank');
  };

  const handleEmailSubmit = () => {
    onClose();
    if (onOpenQuote) {
      const names = cart.map(i => i.name).join(', ');
      onOpenQuote(names);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay backdrop */}
      <div 
        className="cart-drawer-overlay active" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Drawer */}
      <aside 
        className="cart-drawer active" 
        role="dialog" 
        aria-label="Enquiry List"
      >
        {/* Header */}
        <div className="cart-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} style={{ color: 'var(--gold-color)' }} />
            <h3 style={{ margin: 0, fontFamily: 'var(--font-heading)', fontSize: '1.25rem', letterSpacing: '0.5px' }}>
              Your Enquiry List
            </h3>
            <span style={{ 
              background: 'var(--gold-color)', 
              color: '#0f151f', 
              fontSize: '0.75rem', 
              fontWeight: 800, 
              padding: '2px 8px', 
              borderRadius: '12px' 
            }}>
              {cart.length}
            </span>
          </div>

          <button 
            className="close-cart" 
            onClick={onClose} 
            aria-label="Close enquiry list"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="empty-cart-message">
              <ShoppingBag size={48} style={{ color: 'var(--gold-color)', opacity: 0.35, marginBottom: '16px' }} />
              <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '8px', fontWeight: 600 }}>
                Your enquiry list is empty
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Browse our agro, spices & dehydrated catalog and add the items you need a formal CIF/FOB quote for.
              </p>
            </div>
          ) : (
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item-row">
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="cart-item-thumb" 
                    />
                  )}
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <span className="cart-item-cat">{item.category}</span>
                    <span className="cart-item-qty">Qty: {item.quantity || '1x20ft FCL'}</span>
                  </div>
                  <button 
                    onClick={() => removeFromEnquiryCart(item.id)} 
                    className="cart-item-remove"
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {cart.length} {cart.length === 1 ? 'product' : 'products'} selected
              </span>
              <button 
                onClick={clearEnquiryCart}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--text-muted)', 
                  fontSize: '0.78rem', 
                  textDecoration: 'underline', 
                  cursor: 'pointer' 
                }}
              >
                Clear all
              </button>
            </div>

            <p className="cart-footer-note">
              Specifications, moisture &amp; COA confirmed with each consignment.
            </p>

            <div className="rfq-actions">
              <button 
                className="rfq-action-btn rfq-whatsapp-btn" 
                onClick={handleWhatsAppSubmit}
              >
                <MessageCircle size={18} />
                <span>Send via WhatsApp</span>
              </button>

              <button 
                className="rfq-action-btn rfq-email-btn" 
                onClick={handleEmailSubmit}
              >
                <Send size={16} />
                <span>Request Email Quote</span>
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
