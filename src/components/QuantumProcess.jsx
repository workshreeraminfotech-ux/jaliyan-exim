import React from 'react';

export default function QuantumProcess() {
  const steps = [
    {
      num: '01',
      title: 'Enquiry',
      desc: 'Share the commodities, volumes, target specification, packaging format, and destination discharge port.'
    },
    {
      num: '02',
      title: 'Quotation',
      desc: 'You receive competitive FOB / CIF pricing, commercial payment terms, and the exact specification sheet.'
    },
    {
      num: '03',
      title: 'Sample & approval',
      desc: 'Pre-shipment batch samples and laboratory parameters are dispatched via courier for your formal approval.'
    },
    {
      num: '04',
      title: 'Production',
      desc: 'Hygienic processing, grading, sortex cleaning, and packing under verified ISO/FSSAI conditions.'
    },
    {
      num: '05',
      title: 'Inspection & COA',
      desc: 'Comprehensive quality audit, moisture analysis, and Certificate of Analysis (COA) issued for the lot.'
    },
    {
      num: '06',
      title: 'Dispatch & Docs',
      desc: 'Container loaded, customs cleared at Kandla/Mundra/Nhava Sheva, and complete shipping document set released.'
    }
  ];

  return (
    <section className="page-section" id="process">
      <div className="page-inner">
        <div className="section-head">
          <span className="section-label">How an order runs</span>
          <h2>From enquiry to overseas delivery</h2>
        </div>

        <ol className="process-steps">
          {steps.map((step) => (
            <li key={step.num}>
              <span className="step-n">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
