import React from 'react';
import BlurText from '../ReactBits/BlurText';
import DecryptedText from '../ReactBits/DecryptedText';
import './Hero.css';

const Hero = () => {
  return (
    <section className="cv-hero">
      <div className="cv-hero-text">
        
        {/* El detalle técnico con efecto Matrix Binario */}
        <div className="cv-code-detail">
          <DecryptedText
            text="C:\> RUN_STORE"
            animateOn="view"
            speed={70}
            maxIterations={20}
            characters="01"
            encryptedClassName="encrypted-glitch"
          />
        </div>

        {/* El título con revelado cinematográfico */}
        <BlurText
          text="La experiencia del vino, decodificada."
          delay={120}
          animateBy="words"
          direction="top"
          className="cv-hero-title"
        />

        <p className="cv-hero-subtitle">
          Tu selección exclusiva de bodegas, cervezas y destilados con envíos a todo el país.
        </p>
        
        <button className="cv-btn-wine">VER SELECCIÓN</button>
      </div>

      <div className="cv-hero-image">
        <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Brindis Código Vinario" />
      </div>
    </section>
  );
};

export default Hero;