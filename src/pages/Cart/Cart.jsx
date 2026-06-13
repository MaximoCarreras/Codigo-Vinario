import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { cart, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cv-page-cart cv-empty-cart">
        <span className="cv-code-text">/ status: 0_items</span>
        <h2>TU CAVA ESTÁ VACÍA</h2>
        <Link to="/tienda" className="cv-btn-primary" style={{marginTop: '20px'}}>EXPLORAR ETIQUETAS</Link>
      </div>
    );
  }

  return (
    <div className="cv-page-cart">
      <div className="cv-cart-container">
        
        <div className="cv-cart-header">
          <h1 className="cv-section-title">REVISIÓN DE <span className="cv-text-wine">CÓDIGO</span></h1>
          <button onClick={clearCart} className="cv-btn-clear">
            <span className="cv-code-symbol">[x]</span> VACIAR
          </button>
        </div>

        <div className="cv-cart-content">
          <div className="cv-cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cv-cart-item">
                <img src={item.image_url} alt={item.name} className="cv-cart-item-img" />
                
                <div className="cv-cart-item-info">
                  <Link to={`/producto/${item.id}`} className="cv-cart-item-name">{item.name}</Link>
                  <span className="cv-cart-item-price">${item.price.toLocaleString('es-AR')}</span>
                </div>

                <div className="cv-cart-item-actions">
                  <div className="cv-quantity-selector cv-small-qty">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} disabled={item.quantity >= item.stock}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="cv-cart-item-remove">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cv-cart-summary">
            <span className="cv-code-text">/ resumen_operacion</span>
            <div className="cv-summary-row">
              <span>Subtotal:</span>
              <span>${cartTotal.toLocaleString('es-AR')}</span>
            </div>
            <div className="cv-summary-row">
              <span>Envío:</span>
              <span>A calcular</span>
            </div>
            <div className="cv-summary-total">
              <span>TOTAL:</span>
              <span>${cartTotal.toLocaleString('es-AR')}</span>
            </div>
            
            <button className="cv-btn-primary cv-checkout-btn">
              <span className="cv-code-symbol">{'>'}</span> INICIAR CHECKOUT
            </button>
            <Link to="/tienda" className="cv-btn-secondary" style={{display: 'block', textAlign: 'center', marginTop: '15px'}}>
              SEGUIR COMPRANDO
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}