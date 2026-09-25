import React from 'react';
import spicesImg from '../assets/products/Turmeric Powder.webp';
import basmatiImg from '../assets/agro/basmati_rice.jpg';
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
      desc: 'Prime Indian 1121 & Sella Basmati rice, long-grain rice varieties, and Sortex-cleaned bold Kabuli chickpeas.',
      count: '5 products',
      image: basmatiImg,
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
          <span className="section-label">Export Product Portfolio</span>
          <h2>Certified Indian Spices, Basmati Rice &amp; Dehydrated Products</h2>
          <p>
            Direct farm procurement from Gujarat and key Indian agricultural belts. Machine cleaned, Sortex graded, lab tested, and exported worldwide with custom packaging and guaranteed batch traceability.
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
