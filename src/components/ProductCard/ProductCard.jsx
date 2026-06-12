import React from 'react';
import './ProductCard.css';

const ProductCard = ({ producto }) => {
  return (
    <div className="cv-premium-card">
      {/* Etiqueta de descuento estilo La Barrica */}
      {producto.descuento && (
        <span className="cv-badge-discount">{producto.descuento} OFF</span>
      )}
      
      <div className="cv-card-image-wrapper">
        <img src={producto.img} alt={producto.nombre} className="cv-card-image" />
      </div>

      <div className="cv-card-details">
        {/* Detalle técnico sutil de la marca */}
        <span className="cv-bodega-tech">C:\ {producto.bodega}</span>
        
        <h3 className="cv-product-title">{producto.nombre}</h3>
        
        <div className="cv-price-container">
          <span className="cv-price-old">{producto.precioOriginal}</span>
          <span className="cv-price-current">{producto.precioFinal}</span>
        </div>
        
        <p className="cv-transfer-text">Abonando con Transferencia</p>
        
        {/* El botón aparece con fuerza, estilo La Barrica */}
        <button className="cv-btn-add">AÑADIR AL CARRITO</button>
      </div>
    </div>
  );
};

export default ProductCard;