import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import LogoLoop from '../../components/ReactBits/LogoLoop';
import TiltedCard from '../../components/ReactBits/TiltedCard';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  const bodegas = [
    { src: 'https://placehold.co/150x50/000000/FFF?text=PIXEL', alt: 'Pixel' },
    { src: 'https://placehold.co/150x50/000000/FFF?text=CHACHINGO', alt: 'Chachingo' },
    { src: 'https://placehold.co/150x50/000000/FFF?text=LAMADRID', alt: 'Lamadrid' },
  ];

  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      
      {/* Sección Bodegas */}
      <section className="section-padding section-light">
         <LogoLoop logos={bodegas} speed={40} />
      </section>

      {/* Grilla de Categorías (Estructura profesional) */}
      <section className="section-padding">
        <h2 className="section-title">Nuestras Selecciones</h2>
        <div className="categories-grid">
            <div className="category-card"><h3>VINOS</h3></div>
            <div className="category-card"><h3>DESTILADOS</h3></div>
            <div className="category-card"><h3>CERVEZAS</h3></div>
        </div>
      </section>

      {/* Sección Producto Destacado 3D */}
      <section className="section-padding section-dark">
         <TiltedCard 
           imageSrc="https://images.unsplash.com/photo-1584916201218-f4242ceb4809"
           captionText="Vino Premium - Código Vinario"
           containerHeight="450px"
           containerWidth="320px"
           imageHeight="450px"
           imageWidth="320px"
         />
      </section>

      <Footer />
    </div>
  );
};

export default Home;