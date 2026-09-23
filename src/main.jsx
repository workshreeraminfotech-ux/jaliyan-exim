import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// One-time reset: clear old product and category localStorage cache so dehydrated products load instantly
try {
  localStorage.removeItem('trishu_main_categories');
  localStorage.removeItem('jaliyan_main_categories');
  localStorage.removeItem('trishu_categories');
  localStorage.removeItem('trishu_products');
  localStorage.removeItem('jaliyan_dehydrated_products');
} catch (e) {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
