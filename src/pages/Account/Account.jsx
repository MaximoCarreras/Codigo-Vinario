import React, { useState } from 'react';
import { useDux } from "../../hooks/duxHooks";
import './Account.css';

export default function Account() {
  const [email, setEmail] = useState('');
  const [buscando, setBuscando] = useState(false);
  const { data: pedidos, loading } = useDux(buscando ? "pedidos" : null, { cliente: email });

  const handleBuscar = (e) => {
    e.preventDefault();
    if (email) setBuscando(true);
  };

  return (
    <div className="cv-page-account">
      <div className="cv-account-container">
        
        <div className="cv-account-card">
          <h1 className="cv-account-title">MI <span className="cv-text-wine">CAVA</span> PRIVADA</h1>
          <p className="cv-account-subtitle">Ingresá tu correo para rastrear tus etiquetas y conocer el estado de tus envíos.</p>

          <form onSubmit={handleBuscar} className="cv-account-form">
            <input 
              type="email" 
              required 
              placeholder="ejemplo@correo.com" 
              className="cv-account-input"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setBuscando(false); }}
            />
            <button type="submit" className="cv-account-btn">
              {loading ? 'RASTREANDO...' : 'BUSCAR PEDIDOS'}
            </button>
          </form>
        </div>

        {/* Resultados */}
        {buscando && !loading && (
          <div className="cv-account-results">
            {pedidos.length === 0 ? (
              <div className="cv-account-empty">
                <span className="material-symbols-outlined">search_off</span>
                <p>No registramos pedidos asociados a este correo electrónico.</p>
              </div>
            ) : (
              <div className="cv-orders-grid">
                {pedidos.map(p => (
                  <div key={p.id} className="cv-order-card">
                    <div className="cv-order-header">
                      <span className="cv-order-number">Orden #{p.numero}</span>
                      <span className="cv-order-status">{p.estado}</span>
                    </div>
                    <div className="cv-order-body">
                      <p>Fecha de emisión: {p.fecha}</p>
                      <p className="cv-order-total">${p.total.toLocaleString('es-AR')}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}