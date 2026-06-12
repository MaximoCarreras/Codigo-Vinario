import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import LogoLoop from '../../components/ReactBits/LogoLoop';
import Categories from '../../components/Categories/Categories';
import BestSellers from '../../components/BestSellers/BestSellers';
import Community from '../../components/Community/Community';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  // Estos son los logos de las bodegas para el carrusel
  const bodegas = [
    { src: 'https://placehold.co/150x50/000000/FFF?text=PIXEL', alt: 'Pixel' },
    { src: 'https://placehold.co/150x50/000000/FFF?text=CHACHINGO', alt: 'Chachingo' },
    { src: 'https://placehold.co/150x50/000000/FFF?text=LAMADRID', alt: 'Lamadrid' },
  ];

  return (
    <div className="home-container">
      {/* 1. Navegación */}
      <Navbar />

      {/* 2. Portada Principal */}
      <Hero />
      
      {/* 3. Cinta de Bodegas (Separador visual) */}
      <section style={{ padding: '40px 0', backgroundColor: '#fdfdfd', borderBottom: '1px solid #eaeaea' }}>
         <LogoLoop logos={bodegas} speed={40} />
      </section>

      {/* 4. Categorías de Bebidas */}
      <Categories />

      {/* 5. Los Más Vendidos (Productos) */}
      <BestSellers />

      {/* 6. Redes y Contacto */}
      <Community />

      {/* 7. Pie de página */}
      <Footer />
    </div>
  );
};

export default Home;