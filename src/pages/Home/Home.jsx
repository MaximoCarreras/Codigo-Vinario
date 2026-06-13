import React from 'react';
import Hero from '../../components/Hero/Hero';
import TrustBar from '../../components/TrustBar/TrustBar';
import Newsletter from '../../components/Newsletter/Newsletter';

export default function Home() {
  return (
    <div className="cv-page-home">
      
      {/* Portada Principal */}
      <Hero />

      {/* Barra de Confianza */}
      <TrustBar />

      <div style={{ padding: '80px 10%', textAlign: 'center', background: '#000' }}>
          <p style={{fontFamily: 'monospace', color: '#85123e'}} className="cv-blinking-cursor">_Construyendo catálogo...</p>
      </div>

      {/* Cierre con captura de leads */}
      <Newsletter />

    </div>
  );
}