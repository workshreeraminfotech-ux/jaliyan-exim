import React, { useState } from 'react';
import { MapPin, Mail, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { addEnquiry } from '../utils/adminStore';

export default function QuantumContact({ initialProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    message: initialProduct ? `Inquiring for: ${initialProduct}` : ''
  });

  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      setStatus({ state: 'error', msg: 'Please fill in all required fields.' });
      return;
    }

    try {
      addEnquiry({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone || 'N/A',
        product: formData.message || 'General Commodity Enquiry',
        destinationPort: formData.country || 'Global Destination Port',
        notes: `Enquiry from Website RFQ Form. Destination: ${formData.country}`,
        source: 'Jaliyan Exim RFQ Form'
      });

      setStatus({ 
        state: 'success', 
        msg: 'Thank you! Your quotation request has been received. Our export desk will contact you within 4-6 business hours.' 
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      setStatus({ state: 'error', msg: 'Something went wrong. Please reach us directly via WhatsApp.' });
    }
  };

  return (
    <section className="page-section contact-section" id="contact">
      <div className="page-inner">
        <div className="contact-grid">
          {/* Left Column: Contact info */}
          <div className="contact-info">
            <span className="section-label">Request a quote</span>
            <h2>Tell us what you need</h2>
            <p className="contact-desc">
              Send us the agro commodities, volume (MT / FCL), target packaging format, and destination discharge port. We will respond promptly with formal CIF/FOB pricing, product specifications, and pre-shipment sample details.
            </p>

            <div className="contact-methods">
              <div className="method-item">
                <div className="method-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Head Office (India)</h4>
                  <p>Rajkot, Gujarat 360001, India &bull; Serving worldwide through Mundra &amp; Kandla Sea Ports</p>
                </div>
              </div>

              <div className="method-item">
                <div className="method-icon-wrap">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:jaliyanexim2706@gmail.com" className="contact-link">
                      jaliyanexim2706@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="method-item">
                <div className="method-icon-wrap">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Direct Export Desk (Call / Mobile)</h4>
                  <p style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <a href="tel:+919726673414" className="contact-link">
                      +91 97266 73414
                    </a>
                    <a href="tel:+919033039649" className="contact-link">
                      +91 90330 39649
                    </a>
                  </p>
                </div>
              </div>

              <div className="method-item">
                <div className="method-icon-wrap">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4>Instant WhatsApp RFQ</h4>
                  <p style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <a 
                      href="https://wa.me/919726673414?text=Hello%20Jaliyan%20Exim%2C%20I%20would%20like%20to%20request%20an%20export%20quotation." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-link"
                    >
                      WhatsApp 1: +91 97266 73414 &rarr;
                    </a>
                    <a 
                      href="https://wa.me/919033039649?text=Hello%20Jaliyan%20Exim%2C%20I%20would%20like%20to%20request%20an%20export%20quotation." 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-link"
                    >
                      WhatsApp 2: +91 90330 39649 &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct RFQ Form */}
          <div className="contact-form-container">
            <h3>Enquiry form</h3>
            <form id="rfq-direct-form" className="rfq-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="form-name">Contact person *</label>
                <input 
                  type="text" 
                  id="form-name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Your full name" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-email">Company email *</label>
                <input 
                  type="email" 
                  id="form-email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="buyer@company.com" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-company">Company name *</label>
                <input 
                  type="text" 
                  id="form-company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                  required 
                  placeholder="Import / Processing company name" 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="form-country">Destination Port / Country</label>
                  <input 
                    type="text" 
                    id="form-country" 
                    name="country" 
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. Jebel Ali, Rotterdam, Felixstowe" 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-phone">Phone / WhatsApp</label>
                  <input 
                    type="text" 
                    id="form-phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+Country code & number" 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="form-message">Requirement specification</label>
                <textarea 
                  id="form-message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Products required (e.g. Cumin Seeds 99.5% Purity, 20 MT, 25kg PP bags, CIF rate)"
                />
              </div>

              <button type="submit" className="submit-btn" id="rfq-submit-btn">
                <span>Send enquiry</span>
                <Send size={16} />
              </button>

              {status.msg && (
                <p 
                  className={`form-status ${status.state}`} 
                  role="status"
                >
                  {status.state === 'success' && <CheckCircle2 size={16} />}
                  <span>{status.msg}</span>
                </p>
              )}

              <p className="form-note">
                We strictly use your commercial details only to respond to this export enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
