import React from 'react';
import Hero from '../../components/Hero/Hero';
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer';
import TrustBar from '../../components/TrustBar/TrustBar';
import WhyUs from '../../components/WhyUs/WhyUs';
import OurStory from '../../components/OurStory/OurStory';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';

export default function Home() {
  return (
    <div className="cv-page-home">
      {/* Barra de anuncios superior (opcional, podés ponerla acá o en el Navbar) */}
      <SpecialOffer />

      {/* Portada Principal */}
      <Hero />

      {/* Barra de Confianza debajo del Hero */}
      <TrustBar />

      {/* Acá en el futuro agregaremos los componentes de:
        - <Categories /> (Navegación por tipo de bebida)
        - <BestSellers /> (Carrusel de vinos destacados usando useProducts)
      */}

      {/* Por qué elegir Código Vinario */}
      <WhyUs />

      {/* Historia de la marca */}
      <OurStory />

      {/* Compromiso y Garantía */}
      <Testimonials />

      {/* Cierre con captura de leads (Mailing) */}
      <Newsletter />
    </div>
  );
}