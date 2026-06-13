import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

export default function Checkout() {
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Si entra al checkout sin nada, lo mandamos a la tienda
  if (cart.length === 0) {
    navigate('/tienda');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Acá a futuro conectamos con tu carpeta `server/checkout.js` para generar la preferencia de MercadoPago
    setTimeout(() => {
      alert("Simulación: Redirigiendo a MercadoPago...");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="cv-page-checkout">
      <div className="cv-checkout-container">
        
        <div className="cv-checkout-header">
          <span className="cv-code-text cv-blinking-cursor">/ encriptando_datos_de_envio</span>
          <h1 className="cv-section-title">FINALIZAR <span className="cv-text-wine">COMPRA</span></h1>
        </div>

        <div className="cv-checkout-grid">
          
          {/* Formulario de Datos */}
          <div className="cv-checkout-form-section">
            <h2 className="cv-checkout-subtitle">_DATOS DEL RECEPTOR</h2>
            <form onSubmit={handleSubmit} className="cv-form">
              
              <div className="cv-form-row">
                <div className="cv-input-group">
                  <label>Nombre Completo</label>
                  <input type="text" required placeholder="Ej: Juan Pérez" />
                </div>
                <div className="cv-input-group">
                  <label>DNI / Pasaporte</label>
                  <input type="text" required placeholder="Documento de identidad" />
                </div>
              </div>

              <div className="cv-form-row">
                <div className="cv-input-group">
                  <label>Email</label>
                  <input type="email" required placeholder="correo@ejemplo.com" />
                </div>
                <div className="cv-input-group">
                  <label>Teléfono (WhatsApp)</label>
                  <input type="tel" required placeholder="+54 9 261..." />
                </div>
              </div>

              <h2 className="cv-checkout-subtitle" style={{marginTop: '40px'}}>_COORDENADAS DE ENTREGA</h2>
              
              <div className="cv-input-group">
                <label>Dirección (Calle y Número)</label>
                <input type="text" required placeholder="Ej: Av. San Martín 1234" />
              </div>

              <div className="cv-form-row">
                <div className="cv-input-group">
                  <label>Ciudad / Provincia</label>
                  <input type="text" required placeholder="Ej: Mendoza, Capital" />
                </div>
                <div className="cv-input-group">
                  <label>Código Postal</label>
                  <input type="text" required placeholder="Ej: 5500" />
                </div>
              </div>

              <button 
                type="submit" 
                className="cv-btn-primary cv-pay-btn"
                disabled={loading}
              >
                {loading ? 'CONECTANDO CON PASARELA...' : 'PAGAR CON MERCADOPAGO'}
              </button>
            </form>
          </div>

          {/* Resumen Fijo (Ticket) */}
          <div className="cv-checkout-summary">
            <div className="cv-ticket">
              <div className="cv-ticket-header">
                <span className="cv-code-text">=== TICKET_0101 ===</span>
              </div>
              
              <div className="cv-ticket-items">
                {cart.map(item => (
                  <div key={item.id} className="cv-ticket-item">
                    <span>{item.quantity}x {item.name}</span>
                    <span>${(item.price * item.quantity).toLocaleString('es-AR')}</span>
                  </div>
                ))}
              </div>

              <div className="cv-ticket-totals">
                <div className="cv-ticket-row">
                  <span>SUBTOTAL</span>
                  <span>${cartTotal.toLocaleString('es-AR')}</span>
                </div>
                <div className="cv-ticket-row">
                  <span>ENVÍO</span>
                  <span>A acordar</span>
                </div>
                <div className="cv-ticket-row cv-ticket-final">
                  <span>TOTAL FINAL</span>
                  <span>${cartTotal.toLocaleString('es-AR')}</span>
                </div>
              </div>
              
              <div className="cv-ticket-footer">
                <Link to="/carrito" className="cv-back-cart-link">{'< MODIFICAR CARRITO'}</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}