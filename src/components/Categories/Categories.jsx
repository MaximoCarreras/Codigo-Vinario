import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const CATEGORIES = [
  { name: 'Vinos', slug: 'vinos', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Destilados', slug: 'destilados', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Cervezas', slug: 'cervezas', image: 'https://images.unsplash.com/photo-1614316311859-07fb1e0b5220?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
  { name: 'Combos', slug: 'combos', image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
];

export default function Categories() {
  return (
    <section className="cv-categories-section">
      <div className="section-header">
        <span className="cv-code-detail">{'{ COLECCIONES }'}</span>
        <h2>Encontrá tu bebida ideal</h2>
      </div>

      <div className="cv-categories-grid">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            to={`/categoria/${cat.slug}`}
            className="cv-category-card"
          >
            {/* Contenedor de la imagen */}
            <div className="cv-category-img-wrapper">
                <img src={cat.image} alt={cat.name} loading="lazy" />
            </div>

            {/* Textos inferiores */}
            <div className="cv-category-content">
                <h3>{cat.name}</h3>
                <span className="cv-explore-text">Explorar</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}