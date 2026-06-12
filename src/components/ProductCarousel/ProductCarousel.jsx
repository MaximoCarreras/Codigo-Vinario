import React from 'react';
import './ProductCarousel.css';

const ProductCarousel = ({ titulo, etiquetaCodigo }) => {
  const productos = [
    { id: 1, nombre: "Combo 6 Vinos Pixel Malbec", precioOriginal: "$45.000", precioFinal: "$39.000", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { id: 2, nombre: "Mega Mix 12 Botellas Ahorro", precioOriginal: "$85.000", precioFinal: "$78.200", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { id: 3, nombre: "Caja 6 Chachingo IPA", precioOriginal: "$18.000", precioFinal: "$15.500", img: "https://images.unsplash.com/photo-1614316311859-07fb1e0b5220?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { id: 4, nombre: "Fernet Branca x6 unidades", precioOriginal: "$55.000", precioFinal: "$51.000", img: "https://images.unsplash.com/photo-1614316311859-07fb1e0b5220?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" }
  ];

  return (
    <section className="cv-product-carousel">
      <div className="carousel-header">
        <span className="cv-code-detail">{etiquetaCodigo}</span>
        <h2>{titulo}</h2>
        <a href="#ver-todos">Ver todos</a>
      </div>

      <div className="carousel-track">
        {productos.map(prod => (
          <div className="cv-card" key={prod.id}>
            <div className="cv-card-img">
              <span className="badge-oferta">15% OFF</span>
              <img src={prod.img} alt={prod.nombre} />
            </div>
            <div className="cv-card-info">
              <h3>{prod.nombre}</h3>
              <p className="precio-tachado">{prod.precioOriginal}</p>
              <p className="precio-final">{prod.precioFinal}</p>
              <p className="transferencia-txt">Pagando con transferencia</p>
              <div className="card-actions">
                <input type="number" defaultValue="1" min="1" />
                <button className="btn-añadir">AÑADIR</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCarousel;