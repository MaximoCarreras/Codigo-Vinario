import React from 'react';
import { useDux } from "../../hooks/duxHooks";

export default function Facturas() {
  // Nota: Si en Dux el módulo se llama distinto (ej: "comprobantes"), cámbialo aquí.
  const { data: facturas, loading } = useDux("facturas");

  if (loading) return <div className="cv-shop-loading">/ buscando_comprobantes...</div>;

  return (
    <div className="cv-page-shop" style={{ padding: '50px' }}>
      <h1 className="cv-section-title">MIS <span className="cv-text-wine">FACTURAS</span></h1>
      
      <div className="cv-products-grid" style={{ marginTop: '30px' }}>
        {facturas.length === 0 ? (
          <p className="cv-code-text">/ no_se_encontraron_facturas</p>
        ) : (
          facturas.map((factura) => (
            <div key={factura.id} className="cv-product-card" style={{ padding: '20px' }}>
              <h3 className="cv-product-name">Factura #{factura.numero}</h3>
              <p className="cv-code-text">Fecha: {factura.fecha}</p>
              <p className="cv-code-text">Total: ${factura.total}</p>
              <button 
                className="cv-btn-secondary" 
                style={{ marginTop: '10px' }}
                onClick={() => alert("Función de descarga en desarrollo")}
              >
                DESCARGAR PDF
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}