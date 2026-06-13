import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);
  
  // Carrusel de imágenes de fondo
  const backgroundImages = [
    'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  ];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Efecto Matrix en Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = '01'.split('');
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Color vino sutil para la lluvia
      ctx.fillStyle = 'rgba(133, 18, 62, 0.3)'; 
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const matrixInterval = setInterval(draw, 33);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(matrixInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="cv-hero">
      {/* Carrusel de Fondo */}
      {backgroundImages.map((img, index) => (
        <div 
          key={index}
          className={`cv-hero-bg ${index === currentBg ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay Oscuro y Matrix */}
      <div className="cv-hero-overlay"></div>
      <canvas ref={canvasRef} className="cv-hero-matrix"></canvas>

      <div className="cv-hero-content">
        <div className="cv-hero-badge">
          <span className="cv-code-text cv-blinking-cursor">/ inicializando_sistema_</span>
        </div>

        <h1 className="cv-hero-title">
          LA BIBLIOTECA<br />
          <span className="cv-text-wine">PREMIUM</span> DE VINOS
        </h1>
        
        <p className="cv-hero-description">
          Los códigos del vino son una forma de comunicación. Decodificamos el terroir mendocino para llevar la máxima expresión vitivinícola directo a tu copa.
        </p>

        <div className="cv-hero-actions">
          <Link to="/tienda" className="cv-btn-primary">
            <span className="cv-code-symbol">[</span>
            EXPLORAR CAVA
            <span className="cv-code-symbol">]</span>
          </Link>
          <a href="/origen" className="cv-btn-secondary">
            DESCUBRIR ORIGEN
          </a>
        </div>
      </div>
    </section>
  );
}