import React from 'react';
import { useDux } from "../../hooks/useDux";

export default function Pedidos() {
  // Aquí ocurre la magia: le decimos "traeme el módulo 'pedidos'"
  const { data: pedidos, loading } = useDux("pedidos");

  if (loading) return <div className="cv-shop-loading">/ consultando_historial...</div>;

  return (
    <div className="cv-page-shop" style={{ padding: '50px' }}>
      <h1 className="cv-section-title">MIS <span className="cv-text-wine">PEDIDOS</span></h1>
      
      <div className="cv-products-grid" style={{ marginTop: '30px' }}>
        {pedidos.length === 0 ? (
          <p className="cv-code-text">/ no_se_encontraron_pedidos</p>
        ) : (
          pedidos.map((pedido) => (
            <div key={pedido.id} className="cv-product-card" style={{ padding: '20px' }}>
              <h3 className="cv-product-name">Pedido #{pedido.numero}</h3>
              <p className="cv-code-text">Fecha: {pedido.fecha}</p>
              <p className="cv-code-text">Estado: {pedido.estado}</p>
              <p className="cv-product-price">${pedido.total}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}