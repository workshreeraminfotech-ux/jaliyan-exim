import React from 'react';
import spicesImg from '../assets/products/Turmeric Powder.webp';
import cuminImg from '../assets/products/Cumin Seeds.webp';
import onionImg from '../assets/dehydrated/red_onion_powder.jpg';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function QuantumCategories({ onNavigate }) {
  const categories = [
    {
      id: 'spices',
      title: 'Spices & Seasonings',
      desc: 'Whole and ground spices, cumin, coriander, turmeric, chilli, fennel, and custom seasoning blends for food processing.',
      count: '38 products',
      image: spicesImg,
      pageId: 'products'
    },
    {
      id: 'agro',
      title: 'Agro Commodities',
      desc: 'Premium natural & hulled sesame seeds, groundnuts/peanuts, grains, and pulses sourced directly from certified farm belts.',
      count: '15 products',
      image: cuminImg,
      pageId: 'agro'
    },
    {
      id: 'dehydrated',
      title: 'Dehydrated Products',
      desc: 'White & red onion, garlic, ginger, vegetables and sun-dried fruits, dried to retain intense colour, aroma and flavor.',
      count: '14 products',
      image: onionImg,
      pageId: 'dehydrated'
    }
  ];

  return (
    <section className="page-section" id="products">
      <div className="page-inner">
        <div className="section-head">
          <span className="section-label">What we supply</span>
          <h2>Three certified ranges, built for global food trade</h2>
          <p>
            Every product is supplied against your written specification. Grades, cuts, purity, moisture, and packaging are confirmed per order, and a Certificate of Analysis accompanies each consignment.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="category-card"
              onClick={() => onNavigate && onNavigate(cat.pageId)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') onNavigate(cat.pageId); }}
            >
              <div className="category-card__media">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  width="800" 
                  height="800" 
                  loading="lazy" 
                />
              </div>
              <div className="category-card__body">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <span className="category-card__count">{cat.count} &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
