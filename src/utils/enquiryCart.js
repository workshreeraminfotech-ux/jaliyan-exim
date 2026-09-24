// Enquiry Cart State & Utilities for Jaliyan Exim
// Allows buyers to add export products to quotation basket & send via WhatsApp or Email

const CART_STORAGE_KEY = 'jaliyan_enquiry_cart';

export function getEnquiryCart() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error('Failed to parse enquiry cart:', e);
  }
  return [];
}

export function saveEnquiryCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('jaliyan_cart_updated', { detail: cart }));
  } catch (e) {
    console.error('Failed to save enquiry cart:', e);
  }
}

export function addToEnquiryCart(product, quantity = '1x20ft FCL') {
  if (!product || !product.id) return;
  const cart = getEnquiryCart();
  const existingIdx = cart.findIndex(item => item.id === product.id);
  
  if (existingIdx >= 0) {
    // Already in cart, update quantity or keep
    cart[existingIdx].quantity = quantity || cart[existingIdx].quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name || product.title || 'Export Product',
      category: product.category || product.cat || 'Agro Commodity',
      image: product.image || '',
      quantity: quantity || '1x20ft FCL',
      grade: product.grade || product.spec || 'Standard Export Grade'
    });
  }
  
  saveEnquiryCart(cart);
}

export function removeFromEnquiryCart(productId) {
  const cart = getEnquiryCart().filter(item => item.id !== productId);
  saveEnquiryCart(cart);
}

export function clearEnquiryCart() {
  saveEnquiryCart([]);
}

export function getWhatsAppEnquiryUrl(cart, companyInfo = {}) {
  const phone = '919726673414'; // Jaliyan Exim Official WhatsApp
  let text = `Hello Jaliyan Exim,\n\nI would like to request an official CIF/FOB export quotation for the following products:\n\n`;

  if (cart.length === 0) {
    text += `*General Product Enquiry*\n`;
  } else {
    cart.forEach((item, idx) => {
      text += `${idx + 1}. *${item.name}* (${item.category})\n   Quantity: ${item.quantity || '1 Container FCL'}\n\n`;
    });
  }

  if (companyInfo.company) {
    text += `Company: ${companyInfo.company}\n`;
  }
  if (companyInfo.country) {
    text += `Destination Port/Country: ${companyInfo.country}\n`;
  }
  if (companyInfo.name) {
    text += `Contact Person: ${companyInfo.name}\n`;
  }

  text += `\nPlease share price, specifications, and COA. Thank you!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
