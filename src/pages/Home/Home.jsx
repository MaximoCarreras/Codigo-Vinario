import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import TrustBar from '../../components/TrustBar/TrustBar';
import CategoryBanners from '../../components/CategoryBanners/CategoryBanners';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
import LocalServices from '../../components/LocalServices/LocalServices'; // <-- NUEVO
import Community from '../../components/Community/Community';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustBar />
      
      <ProductCarousel 
        titulo="Combos X6 y X12" 
        etiquetaCodigo="{ cajas_cerradas }" 
      />

      <CategoryBanners />

      {/* BLOQUE NUEVO: Le da el quiebre de contenido premium que buscabas */}
      <LocalServices /> 

      <ProductCarousel 
        titulo="Botellones y Magnum" 
        etiquetaCodigo="< grandes_formatos >" 
      />

      <Community />
      <Footer />
    </div>
  );
};

export default Home;