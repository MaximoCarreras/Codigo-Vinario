import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import './Cart.css';

export default function Cart() {
  const cartContext = useCart();
  const { t } = useLanguage();
  
  // Protección contra pantallas blancas (Crash Fix)
  if (!cartContext || !cartContext.cart) {
    return <div className="cv-page-cart"><span className="cv-code-text">/ cargando_datos...</span></div>;
  }

  const { cart, cartTotal, removeFromCart, updateQuantity, clearCart } = cartContext;

  if (cart.length === 0) {
    return (
      <div className="cv-page-cart cv-empty-cart">
        <h2>{t.carrito_vacio}</h2>
        <Link to="/tienda" className="cv-btn-primary" style={{ marginTop: '20px' }}>
          {t.seguir_comprando}
        </Link>
      </div>
    );
  }

  return (
    <div className="cv-page-cart">
      <div className="cv-cart-container">
        
        <div className="cv-cart-header">
          <h1 className="cv-section-title">TU <span className="cv-text-wine">CARRITO</span></h1>
          <button onClick={clearCart} className="cv-btn-clear">Vaciar carrito</button>
        </div>

        <div className="cv-cart-content">
          <div className="cv-cart-items-container">
            {cart.map((item) => (
              <div key={item.id} className="cv-cart-card">
                <img src={item.image_url} alt={item.name} className="cv-cart-card-img" />
                <div className="cv-cart-card-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toLocaleString('es-AR')}</p>
                </div>
                <div className="cv-cart-card-actions">
                  <div className="cv-qty-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <span className="cv-cart-card-total">${(item.price * item.quantity).toLocaleString('es-AR')}</span>
                  <button onClick={() => removeFromCart(item.id)} className="cv-cart-remove-icon">✕</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cv-cart-summary-card">
            <h3>{t.resumen}</h3>
            <div className="cv-summary-line">
              <span>{t.subtotal}</span>
              <span>${cartTotal.toLocaleString('es-AR')}</span>
            </div>
            <div className="cv-summary-line">
              <span>{t.envio}</span>
              <span>{t.a_coordinar}</span>
            </div>
            <div className="cv-summary-line cv-total-line">
              <span>{t.total}</span>
              <span>${cartTotal.toLocaleString('es-AR')}</span>
            </div>
            
            <Link to="/checkout" className="cv-btn-primary cv-checkout-btn">
              <span className="cv-code-symbol">{'>'}</span> IR A PAGAR
            </Link>
            <Link to="/tienda" className="cv-link-continue">— {t.seguir_comprando}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}