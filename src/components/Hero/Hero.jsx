import React from 'react';
import { Link } from 'react-router-dom';
import BlurText from '../ReactBits/BlurText';
import DecryptedText from '../ReactBits/DecryptedText';
import './Hero.css';

const Hero = () => {
  return (
    <section className="cv-hero">
      {/* 1. Capa de fondo inmersivo (Foto con máscara de degradado) */}
      <div
        className="cv-hero__bg-image"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` }}
      ></div>

      {/* 2. Capa de contenido */}
      <div className="cv-hero__container">
        <div className="cv-hero__content">
          
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
            delay={50}
            animateBy="words"
            direction="top"
            className="cv-hero-title"
          />

          <p className="cv-hero-subtitle">
            Tu selección exclusiva de bodegas, cervezas y destilados con envíos a todo el país.
          </p>
          
          <div className="cv-hero-actions">
            <Link to="/productos" className="cv-btn-wine">VER SELECCIÓN</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;