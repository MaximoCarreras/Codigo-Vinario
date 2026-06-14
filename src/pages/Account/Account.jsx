// src/pages/Account/Account.jsx
import React, { useState } from 'react';
import { useDux } from "../../hooks/useDux";

export default function Account() {
  const [emailBusqueda, setEmailBusqueda] = useState('');
  const [buscando, setBuscando] = useState(false);
  
  // Usamos el puente universal filtrando por el cliente
  const { data: pedidos, loading } = useDux(buscando ? "pedidos" : null, { cliente: emailBusqueda });

  const handleBuscar = (e) => {
    e.preventDefault();
    if (emailBusqueda) setBuscando(true);
  };

  return (
    <div className="cv-page-shop" style={{ padding: '50px' }}>
      <h1 className="cv-section-title">MI <span className="cv-text-wine">CUENTA</span></h1>
      
      <div style={{ maxWidth: '400px', margin: '30px 0' }}>
        <form onSubmit={handleBuscar} style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="email" 
            placeholder="Tu email de compra..." 
            value={emailBusqueda}
            onChange={(e) => { setEmailBusqueda(e.target.value); setBuscando(false); }}
            style={{ padding: '10px', flex: 1, background: '#111', color: '#fff', border: '1px solid #333' }}
          />
          <button type="submit" className="cv-btn-secondary">Buscar Pedidos</button>
        </form>
      </div>

      {loading && buscando && <div className="cv-code-text cv-blinking-cursor">/ decodificando_historial...</div>}

      {buscando && !loading && (
        <div className="cv-products-grid">
          {pedidos.length === 0 ? (
            <p className="cv-code-text">/ no_se_registran_movimientos</p>
          ) : (
            pedidos.map((pedido) => (
              <div key={pedido.id} className="cv-product-card" style={{ padding: '20px' }}>
                <h3 className="cv-product-name">Orden #{pedido.numero}</h3>
                <p className="cv-code-text">Fecha: {pedido.fecha}</p>
                <p className="cv-code-text">Estado: {pedido.estado}</p>
                <p className="cv-product-price">${pedido.total}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}