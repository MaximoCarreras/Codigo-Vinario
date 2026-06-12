import React from 'react';
import { useCart } from '../../context/CartContext';
import './GiftKit.css';

export default function GiftKit() {
  const { addToCart } = useCart();

  const kitProduct = {
    id: 'estuche-degustacion-premium',
    name: 'Estuche Degustación Premium',
    price: 45000,
    image_url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stock: 15
  };

  return (
    <section className="cv-giftkit" id="kit-regalo">
      <div className="cv-giftkit__container">

        {/* Izquierda — Imagen con insignia */}
        <div className="cv-giftkit__image-wrapper">
          <img src={kitProduct.image_url} alt="Estuche Degustación Código Vinario" loading="lazy" />
          <span className="cv-giftkit__badge">Edición Limitada</span>
        </div>

        {/* Derecha — Detalles del producto */}
        <div className="cv-giftkit__content">
          <span className="cv-code-detail">{'{ REGALO_IDEAL }'}</span>
          <h2 className="cv-giftkit__title">
            La experiencia de cata definitiva
          </h2>

          {/* Lista de ítems incluidos */}
          <ul className="cv-giftkit__items">
            <li>
              <span className="material-symbols-outlined">done</span>
              2 Botellas Reserva de selección exclusiva
            </li>
            <li>
              <span className="material-symbols-outlined">done</span>
              Estuche de madera de roble grabado
            </li>
            <li>
              <span className="material-symbols-outlined">done</span>
              Sacacorchos profesional de dos tiempos
            </li>
            <li>
              <span className="material-symbols-outlined">done</span>
              Guía de cata y recomendaciones de maridaje
            </li>
          </ul>

          <p className="cv-giftkit__price">$ 45.000</p>

          <button
            onClick={() => addToCart(kitProduct)}
            className="cv-giftkit__btn"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </section>
  );
}