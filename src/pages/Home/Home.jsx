import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import TrustBar from '../../components/TrustBar/TrustBar';
import CategoryBanners from '../../components/CategoryBanners/CategoryBanners';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
import Community from '../../components/Community/Community';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustBar />
      
      {/* Carrusel de Combos */}
      <ProductCarousel 
        titulo="Combos X6 y X12" 
        etiquetaCodigo="{ cajas_cerradas }" 
      />

      {/* Grilla de Categorías */}
      <CategoryBanners />

      {/* Segundo Carrusel (Botellones/Premium) */}
      <ProductCarousel 
        titulo="Botellones y Magnum" 
        etiquetaCodigo="< grandes_formatos >" 
      />

      {/* Comunidad y Cierre */}
      <Community />
      <Footer />
    </div>
  );
};

export default Home;