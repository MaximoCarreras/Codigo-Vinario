import React from 'react';
import './BestSellers.css';

const BestSellers = () => {
  // Lista temporal de productos para ver el diseño
  const productos = [
    { id: 1, nombre: "Vino Pixel Malbec", precio: "$6.500", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { id: 2, nombre: "Vino Pixel Blend de Tintas", precio: "$7.200", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { id: 3, nombre: "Cerveza Chachingo IPA", precio: "$2.800", img: "https://images.unsplash.com/photo-1614316311859-07fb1e0b5220?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { id: 4, nombre: "Fernet Branca 750ml", precio: "$8.500", img: "https://images.unsplash.com/photo-1614316311859-07fb1e0b5220?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" } // Podés cambiar las URLs por fotos reales luego
  ];

  return (
    <section className="cv-bestsellers">
      <div className="section-header">
        <span className="cv-code-detail">{'{ DESTACADOS }'}</span>
        <h2>Los más elegidos</h2>
      </div>

      <div className="products-grid">
        {productos.map(producto => (
          <div className="product-card" key={producto.id}>
            <div className="product-image">
              <img src={producto.img} alt={producto.nombre} />
            </div>
            <div className="product-info">
              <h3>{producto.nombre}</h3>
              <p className="price">{producto.precio}</p>
              <button className="add-to-cart-btn">AGREGAR</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;