import React from 'react';
import Hero from '../../components/Hero/Hero';
import TrustBar from '../../components/TrustBar/TrustBar';
import BestSellers from '../../components/BestSellers/BestSellers';
import Newsletter from '../../components/Newsletter/Newsletter';

export default function Home() {
  return (
    <div className="cv-page-home">
      
      {/* Portada Principal */}
      <Hero />

      {/* Barra de Confianza */}
      <TrustBar />

      {/* Catálogo Destacado (Acá entran los vinos) */}
      <BestSellers />

      {/* Cierre con captura de leads */}
      <Newsletter />

    </div>
  );
}