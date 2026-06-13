import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

export default function Checkout() {
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  // Opciones seleccionables
  const [deliveryMethod, setDeliveryMethod] = useState('store'); // 'store' o 'home'
  const [paymentMethod, setPaymentMethod] = useState('mercadopago'); // 'mercadopago' o 'cash'

  if (cart.length === 0) {
    navigate('/tienda');
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert(`Simulación: Pagando con ${paymentMethod} | Envío: ${deliveryMethod}`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="cv-page-checkout">
      <div className="cv-checkout-container">
        
        <div className="cv-checkout-header">
          <h1 className="cv-section-title">FINALIZAR <span className="cv-text-wine">COMPRA</span></h1>
          <div className="cv-checkout-steps">
            <span className="step done"><span className="material-symbols-outlined">check_circle</span> Carrito</span>
            <span className="step active"><span className="step-number">2</span> Datos y Envío</span>
            <span className="step"><span className="step-number">3</span> Pago</span>
          </div>
        </div>

        <div className="cv-checkout-grid">
          
          {/* Columna Izquierda: Formularios interactivos */}
          <div className="cv-checkout-left">
            <form id="checkout-form" onSubmit={handleSubmit} className="cv-form-wrapper">
              
              {/* Sección 1: Datos */}
              <div className="cv-checkout-box">
                <h2 className="cv-box-title">Tus datos de contacto</h2>
                <div className="cv-form-row">
                  <div className="cv-input-group">
                    <label>Nombre completo *</label>
                    <input type="text" required placeholder="Ej: Juan Pérez" />
                  </div>
                  <div className="cv-input-group">
                    <label>Teléfono *</label>
                    <input type="tel" required placeholder="+54 9 261..." />
                  </div>
                </div>
                <div className="cv-input-group" style={{marginTop: '15px'}}>
                  <label>Email *</label>
                  <input type="email" required placeholder="correo@ejemplo.com" />
                </div>
              </div>

              {/* Sección 2: Entrega */}
              <div className="cv-checkout-box">
                <h2 className="cv-box-title">Entrega</h2>
                <div className="cv-options-grid">
                  <div 
                    className={`cv-option-card ${deliveryMethod === 'store' ? 'selected' : ''}`}
                    onClick={() => setDeliveryMethod('store')}
                  >
                    <span className="material-symbols-outlined">storefront</span>
                    <strong>Retiro en sucursal</strong>
                    <small>Sin costo adicional</small>
                  </div>
                  <div 
                    className={`cv-option-card ${deliveryMethod === 'home' ? 'selected' : ''}`}
                    onClick={() => setDeliveryMethod('home')}
                  >
                    <span className="material-symbols-outlined">local_shipping</span>
                    <strong>Envío a domicilio</strong>
                    <small>Zonas disponibles</small>
                  </div>
                </div>
                
                {/* Opciones Dinámicas de Entrega ANIDADAS CORRECTAMENTE */}
                {deliveryMethod === 'home' && (
                  <div className="cv-conditional-form">
                    <div className="cv-input-group">
                      <label>Dirección de entrega *</label>
                      <input type="text" required placeholder="Calle y número, Piso/Depto" />
                    </div>
                  </div>
                )}

                {deliveryMethod === 'store' && (
                  <div className="cv-store-pickup-info">
                    <div className="cv-store-address">
                      <span className="material-symbols-outlined">location_on</span>
                      <div>
                        <strong>Código Vinario - Wine Stop</strong>
                        <p>Av. Colón y Perú, Mendoza, Argentina</p>
                        <small>Horarios: Lunes a Sábados de 10:00 a 20:30 hs.</small>
                      </div>
                    </div>
                    
                    <div className="cv-map-container">
                      {/* Mapa de Google con ubicación exacta y Modo Oscuro */}
                      <iframe 
  title="Ubicación Código Vinario"
  src="https://maps.google.com/maps?q=Av.%20Col%C3%B3n%20y%20Per%C3%BA,%20Mendoza,%20Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed" 
  width="100%" 
  height="250" 
  style={{border: 0}} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
                    </div>
                  </div>
                )}
              </div>

              {/* Sección 3: Pago */}
              <div className="cv-checkout-box">
                <h2 className="cv-box-title">Método de pago</h2>
                <div className="cv-options-grid">
                  <div 
                    className={`cv-option-card ${paymentMethod === 'mercadopago' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('mercadopago')}
                  >
                    <span className="material-symbols-outlined">credit_card</span>
                    <strong>Mercado Pago</strong>
                    <small>Tarjetas / Transferencia</small>
                  </div>
                  <div 
                    className={`cv-option-card ${paymentMethod === 'cash' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('cash')}
                  >
                    <span className="material-symbols-outlined">payments</span>
                    <strong>Efectivo en local</strong>
                    <small>Pagás al retirar</small>
                  </div>
                </div>
              </div>

              {/* Botón de Pago */}
              <button 
                type="submit" 
                className="cv-btn-pay-action"
                disabled={loading}
              >
                {loading ? 'PROCESANDO...' : (paymentMethod === 'mercadopago' ? 'Ir a pagar con Mercado Pago' : 'Confirmar Reserva')}
              </button>

            </form>
          </div>

          {/* Columna Derecha: Resumen del Pedido */}
          <div className="cv-checkout-right">
            <div className="cv-order-summary">
              <h2 className="cv-box-title">Resumen del pedido</h2>
              
              <div className="cv-summary-items">
                {cart.map(item => (
                  <div key={item.id} className="cv-summary-item">
                    <img src={item.image_url} alt={item.name} />
                    <div className="cv-item-details">
                      <strong>{item.name}</strong>
                      <span>x{item.quantity}</span>
                    </div>
                    <div className="cv-item-price">
                      ${(item.price * item.quantity).toLocaleString('es-AR')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="cv-summary-totals">
                <div className="cv-totals-row">
                  <span>Subtotal</span>
                  <strong>${cartTotal.toLocaleString('es-AR')}</strong>
                </div>
                <div className="cv-totals-row">
                  <span>Envío</span>
                  <strong>{deliveryMethod === 'store' ? 'Gratis' : 'A calcular'}</strong>
                </div>
                <div className="cv-totals-row cv-final-total">
                  <span>Total</span>
                  <span className="cv-text-wine">${cartTotal.toLocaleString('es-AR')}</span>
                </div>
              </div>

              <div className="cv-secure-badge">
                <span className="material-symbols-outlined">lock</span>
                <small>Pago procesado de forma segura.</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}