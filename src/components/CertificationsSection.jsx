import React, { useState } from 'react';
import { ShieldCheck, Eye, X } from 'lucide-react';
import { getCertificates } from '../utils/adminStore';

export default function CertificationsSection() {
  const certs = getCertificates();
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="page-section quality-section" id="certifications">
      <div className="page-inner">
        {/* Section Header */}
        <div className="section-head text-center-head">
          <span className="section-label">Quality &amp; Compliance</span>
          <h2>Tested, Certified &amp; Compliant for Worldwide Export</h2>
          <p>
            Every consignment is processed and packed under stringent food safety conditions. We adhere strictly to international export regulations, guaranteed by leading government and global authorities.
          </p>
        </div>

        {/* Accredited Certifications 6-Card Grid */}
        <div className="certs-grid">
          {certs.map((c) => (
            <div
              key={c.id}
              className="cert-card"
              onClick={() => setSelectedCert(c)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedCert(c); }}
              title={`Click to view ${c.name} details`}
            >
              {/* Logo Box */}
              <div className="cert-card__logo-wrap">
                <img
                  src={c.logo}
                  alt={c.name}
                  loading="lazy"
                  className="cert-card__logo"
                />
              </div>

              {/* Authority Code Badge */}
              <span className="cert-card__code">
                {c.code || 'GOVT APPROVED'}
              </span>

              {/* Title & Description */}
              <h3 className="cert-card__title">{c.name}</h3>
              <p className="cert-card__desc">{c.tag}</p>

              {/* View Action Link */}
              <div className="cert-card__action">
                <Eye size={15} />
                <span>View Accreditation</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Lightbox */}
      {selectedCert && (
        <div 
          className="cert-lightbox-overlay"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="cert-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="cert-lightbox-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={22} style={{ color: 'var(--gold-color)' }} />
                <div>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-light)', fontSize: '1.2rem' }}>
                    {selectedCert.name}
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-color)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {selectedCert.code}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => setSelectedCert(null)}
                className="close-lightbox-btn"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Box */}
            <div className="cert-lightbox-body">
              <img 
                src={selectedCert.logo} 
                alt={selectedCert.name} 
                className="cert-lightbox-img"
              />
            </div>

            {/* Modal Footer */}
            <div className="cert-lightbox-footer">
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {selectedCert.tag || 'Official quality compliance and regulatory approval for international trade.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
