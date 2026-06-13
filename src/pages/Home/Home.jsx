import React from 'react';
import Hero from '../../components/Hero/Hero';
import TrustBar from '../../components/TrustBar/TrustBar';
import BestSellers from '../../components/BestSellers/BestSellers';
import OurStory from '../../components/OurStory/OurStory';
import WhyUs from '../../components/WhyUs/WhyUs';
import Newsletter from '../../components/Newsletter/Newsletter';

export default function Home() {
  return (
    <div className="cv-page-home">
      
      {/* Portada Principal */}
      <Hero />

      {/* Barra de Confianza Logística */}
      <TrustBar />

      {/* Catálogo Destacado */}
      <BestSellers />

      {/* Pilares de la Marca */}
      <WhyUs />

      {/* Historia de la Vinoteca */}
      <OurStory />

      {/* Cierre con captura de leads */}
      <Newsletter />

    </div>
  );
}