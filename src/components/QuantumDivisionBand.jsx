import React from 'react';
import { ArrowRight, Building2, Layers } from 'lucide-react';

export default function QuantumDivisionBand({ onOpenQuote }) {
  return (
    <section className="division-band" id="infrastructure" aria-labelledby="division-title">
      <div className="division-band__inner">
        <div className="division-band__copy">
          <p className="division-band__eyebrow">Also from Jaliyan Exim</p>
          <h2 id="division-title">
            Ceramic Tiles &amp; Sanitaryware &mdash; Morbi Export Hub
          </h2>
          <p>
            Vitrified porcelain tiles, wall &amp; floor ceramic collections, one-piece sanitary water closets, and art basins &mdash; manufactured in Morbi, Gujarat and supplied for worldwide containerized export by Jaliyan Exim.
          </p>
          <button 
            className="btn btn-division"
            onClick={() => onOpenQuote && onOpenQuote('Ceramic Tiles & Sanitaryware')}
          >
            <span>Request Infrastructure Catalogue</span>
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="division-band__features">
          <div className="division-badge-card">
            <span className="division-badge-num">100%</span>
            <span className="division-badge-text">Morbi First-Quality Grade</span>
          </div>
          <div className="division-badge-card">
            <span className="division-badge-num">FCL</span>
            <span className="division-badge-text">Direct Port Container Loading</span>
          </div>
          <div className="division-badge-card">
            <span className="division-badge-num">Export</span>
            <span className="division-badge-text">Fumigated Pallet Packaging</span>
          </div>
        </div>
      </div>
    </section>
  );
}
