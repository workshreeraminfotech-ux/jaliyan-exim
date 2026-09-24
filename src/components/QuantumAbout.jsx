import React from 'react';
import { Target, Eye, ShieldCheck, Compass } from 'lucide-react';
import visionMissionImg from '../assets/vision-mission.jpg';

export default function QuantumAbout() {
  return (
    <section className="page-section" id="about">
      <div className="page-inner">
        <div className="section-head">
          <span className="section-label">About us</span>
          <h2>A trusted exporter of agro commodities &amp; ingredients from India</h2>
          <p>
            Jaliyan Exim supplies premium quality agro commodities, unadulterated spices, and dehydrated ingredients from Gujarat, India to discerning global markets. We operate with strict adherence to purity, international food safety, and customer satisfaction, ensuring safe and timely maritime delivery.
          </p>
          <p>
            Backed by direct farm-level aggregation networks and strategic proximity to India's premier export ports (Mundra, Kandla &amp; Pipavav), we build enduring commercial relationships and foster mutual growth worldwide.
          </p>
        </div>

        <div className="vision-mission-layout">
          {/* Medium-sized Matching Image */}
          <div className="vision-mission-media-col">
            <div className="vision-mission-frame">
              <img
                src={visionMissionImg}
                alt="Jaliyan Exim Vision and Mission - Exporting Excellence"
                className="vision-mission-img"
                loading="lazy"
              />
              <div className="vision-mission-overlay-badge">
                <Compass size={18} className="vision-badge-icon" />
                <span>Global Maritime Logistics • Gujarat Export Ports</span>
              </div>
            </div>
          </div>

          {/* Vision, Mission, Values Pillar Cards */}
          <div className="pillars-layout-stacked">
            <div className="pillar-box">
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <Target size={20} />
                </div>
                <h3>Our mission</h3>
              </div>
              <p>
                To deliver superior quality Indian commodities with uncompromising reliability, transparent market pricing, and punctual vessel dispatches.
              </p>
            </div>

            <div className="pillar-box">
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <Eye size={20} />
                </div>
                <h3>Our vision</h3>
              </div>
              <p>
                To stand as India's most dependable merchant exporter, globally recognized for trust, certified purity, and ethical trade partnerships.
              </p>
            </div>

            <div className="pillar-box">
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <ShieldCheck size={20} />
                </div>
                <h3>Our values</h3>
              </div>
              <p>
                Purity at source, strict adherence to written contracts, customer dedication, and unwavering food safety compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
