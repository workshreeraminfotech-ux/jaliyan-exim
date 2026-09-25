// Centralized Agro Commodities Database — Jaliyan Exim
// Premium Indian Agricultural Commodities for Global Export

import basmatiRiceImg from '../assets/agro/basmati_rice.jpg';
import goldenSellaImg from '../assets/agro/golden_sella_rice.jpg';
import kabuliChickpeasImg from '../assets/agro/kabuli_chickpeas.jpg';

export const AGRO_CATEGORIES = [
  'All',
  'Rice & Basmati',
  'Kabuli Chickpeas'
];

export const AGRO_PRODUCTS = [
  // --- RICE & BASMATI ---
  {
    id: '1121-basmati-rice',
    title: '1121 Steam Basmati Rice',
    category: 'Rice & Basmati',
    cat: 'Rice & Basmati',
    hsCode: 'HS 10063020',
    image: basmatiRiceImg,
    origin: 'Punjab & Haryana, India',
    packaging: '10kg / 25kg / 50kg Non-Woven / BOPP / Jute Bags',
    specs: 'Average Grain Length: 8.35mm+ | Moisture: < 12.5% | Purity: 95% | 100% Sortex Cleaned',
    description: 'World-renowned 1121 Steam Basmati Rice known for its extra-long slender grain, rich natural aroma, non-sticky texture, and exceptional elongation upon cooking.',
    desc: 'Extra long grain 1121 Steam Basmati rice with rich aroma and high elongation ratio.',
    isFeatured: true
  },
  {
    id: 'pusa-basmati-rice',
    title: 'Pusa Golden Sella Basmati Rice',
    category: 'Rice & Basmati',
    cat: 'Rice & Basmati',
    hsCode: 'HS 10063020',
    image: goldenSellaImg,
    origin: 'Northern Plains, India',
    packaging: '25kg / 50kg PP Bags / Custom Packaging',
    specs: 'Grain Length: 7.45mm+ | Moisture: < 12% | Broken: < 1% | Parboiled Golden Tone',
    description: 'Parboiled golden sella basmati rice with high nutritional retention, sturdy grain structure ideal for catering, biryanis, and international culinary hospitality.',
    desc: 'Golden sella parboiled basmati rice ideal for large-scale catering and authentic biryani.',
    isFeatured: true
  },
  {
    id: 'ir64-non-basmati-rice',
    title: 'IR-64 Raw / Parboiled Long Grain Rice',
    category: 'Rice & Basmati',
    cat: 'Rice & Basmati',
    hsCode: 'HS 10063090',
    image: basmatiRiceImg,
    origin: 'Andhra Pradesh & Gujarat, India',
    packaging: '25kg / 50kg PP Woven Bags / Break Bulk Vessel Loads',
    specs: 'Grain Length: 6.0mm+ | Broken: < 5% | Moisture: < 13% | 100% Silky Sortex',
    description: 'High-grade Indian long grain non-basmati rice widely exported across Africa, Middle East, and Southeast Asia for daily staple consumption.',
    desc: 'Sortex cleaned long grain IR-64 non-basmati rice with 5% broken ratio.',
    isFeatured: false
  },

  // --- KABULI CHICKPEAS ---
  {
    id: 'kabuli-chickpeas-bold',
    title: 'Kabuli Chickpeas - Jumbo Bold (42/44 & 58/60 Count)',
    category: 'Kabuli Chickpeas',
    cat: 'Kabuli Chickpeas',
    hsCode: 'HS 07132000',
    image: kabuliChickpeasImg,
    origin: 'Madhya Pradesh & Gujarat, India',
    packaging: '25kg / 50kg PP Bags / Multi-ply Paper Bags',
    specs: 'Counts: 42/44, 44/46, 58/60 Count (per oz) | Purity: 99.5% Sortex Cleaned | Moisture: < 10%',
    description: 'Export-grade jumbo bold Kabuli Chickpeas (Garbanzo Beans) machine destoned, optical laser Sortex cleaned, uniform cream white color, zero weevils.',
    desc: 'Jumbo bold sortex cleaned Kabuli chickpeas (Garbanzo beans) for canning and retail.',
    isFeatured: true
  },
  {
    id: 'kabuli-chickpeas-regular',
    title: 'Kabuli Chickpeas - Regular Size (75/80 Count)',
    category: 'Kabuli Chickpeas',
    cat: 'Kabuli Chickpeas',
    hsCode: 'HS 07132000',
    image: kabuliChickpeasImg,
    origin: 'Madhya Pradesh & Gujarat, India',
    packaging: '25kg / 50kg PP Woven Bags',
    specs: 'Counts: 75/80, 88/90 Count | Moisture: < 10% | Foreign Matter: < 0.2% | Non-GMO',
    description: 'Medium and regular count white Kabuli chickpeas with smooth texture and high protein content. Exported worldwide for hummus, falafel, packaging, and food distribution.',
    desc: 'Regular caliber export-ready Kabuli chickpeas tested and machine cleaned.',
    isFeatured: false
  }
];
