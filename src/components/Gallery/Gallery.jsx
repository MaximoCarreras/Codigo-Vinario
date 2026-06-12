import React from 'react';
import './Gallery.css';

// Imágenes de prueba de alta calidad para que veas el diseño funcionando
const GALLERY_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", alt: "Cata de vinos" },
  { id: 2, src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", alt: "Brindis" },
  { id: 3, src: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", alt: "Viñedos" },
  { id: 4, src: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", alt: "Botella premium" },
  { id: 5, src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", alt: "Copas de vino" },
  { id: 6, src: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", alt: "Barricas" },
];

export default function Gallery() {
  return (
    <section className="cv-gallery-section" id="galeria">
      <div className="cv-gallery-container">
        
        <div className="section-header">
          <span className="cv-code-detail">{'{ GALERÍA }'}</span>
          <h2>Momentos Compartidos</h2>
        </div>

        <div className="cv-gallery-grid">
          {GALLERY_IMAGES.map((img) => (
            <div className="cv-gallery-item" key={img.id}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              
              {/* Capa que aparece al pasar el mouse */}
              <div className="cv-gallery-overlay">
                <span className="material-symbols-outlined">favorite</span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}