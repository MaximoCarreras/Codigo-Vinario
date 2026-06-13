import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import './Cart.css';

export default function Cart() {
  const cartContext = useCart();
  const { t } = useLanguage();
  
  if (!cartContext || !cartContext.cart) {
    return <div className="cv-page-cart"><span className="cv-code-text">/ cargando_datos...</span></div>;
  }

  const { cart, cartTotal, removeFromCart, updateQuantity, clearCart } = cartContext;

  if (cart.length === 0) {
    return (
      <div className="cv-page-cart">
        <div className="cv-empty-cart">
          <span className="material-symbols-outlined cv-empty-icon">production_quantity_limits</span>
          <span className="cv-code-text" style={{marginTop: '20px'}}>/ status: 0_items</span>
          <h2>TU CAVA ESTÁ VACÍA</h2>
          <p style={{color: '#888', marginBottom: '30px'}}>Aún no has seleccionado ninguna etiqueta.</p>
          <Link to="/tienda" className="cv-btn-primary">EXPLORAR CATÁLOGO</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cv-page-cart">
      <div className="cv-cart-container">
        
        <div className="cv-cart-header">
          <h1 className="cv-section-title">TU <span className="cv-text-wine">CARRITO</span></h1>
          <button onClick={clearCart} className="cv-btn-clear">
            Vaciar carrito
          </button>
        </div>

        {/* Estructura estilo Huellitas: Izquierda (Items) | Derecha (Resumen) */}
        <div className="cv-cart-layout">
          
          <div className="cv-cart-items-list">
            {cart.map((item) => (
              <div key={item.id} className="cv-cart-card">
                <div className="cv-cart-card-img">
                  <img src={item.image_url} alt={item.name} />
                </div>
                
                <div className="cv-cart-card-info">
                  <Link to={`/producto/${item.id}`} className="cv-cart-card-title">{item.name}</Link>
                  <span className="cv-cart-card-cat">{`// ${item.category}`}</span>
                  <span className="cv-cart-card-unit-price">${item.price.toLocaleString('es-AR')}</span>
                </div>

                <div className="cv-cart-card-controls">
                  <div className="cv-qty-box">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} disabled={item.quantity >= item.stock}>+</button>
                  </div>
                </div>

                <div className="cv-cart-card-total">
                  <span className="cv-price-total">${(item.price * item.quantity).toLocaleString('es-AR')}</span>
                  <button onClick={() => removeFromCart(item.id)} className="cv-btn-remove-item">
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cv-cart-summary-sidebar">
            <div className="cv-summary-box">
              <h2 className="cv-summary-title">Resumen</h2>
              
              <div className="cv-summary-line">
                <span>Subtotal</span>
                <span>${cartTotal.toLocaleString('es-AR')}</span>
              </div>
              <div className="cv-summary-line">
                <span>Envío</span>
                <span>A calcular</span>
              </div>
              
              <div className="cv-summary-total-line">
                <span>Total</span>
                <span className="cv-text-wine">${cartTotal.toLocaleString('es-AR')}</span>
              </div>
              
              <Link to="/checkout" className="cv-btn-checkout">
                IR A PAGAR
              </Link>
              
              <div className="cv-summary-footer">
                <Link to="/tienda" className="cv-link-continue">
                  <span className="cv-code-symbol">_</span> Seguir comprando
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}