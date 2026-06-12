import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="cv-hero">
      <div className="cv-hero-text">
        <span className="cv-code-detail">C:\&gt; RUN_STORE</span>
        <h2>Comprar Vinos Online en Argentina</h2>
        <p>Tu selección exclusiva de bodegas, cervezas y destilados con envíos a todo el país.</p>
        <button className="cv-btn-wine">VER BODEGAS</button>
      </div>
      <div className="cv-hero-image">
        {/* Reemplaza esta ruta con una imagen tuya, por ejemplo, los vinos Pixel */}
        <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Brindis con vino Código Vinario" />
      </div>
    </section>
  );
};

export default Hero;