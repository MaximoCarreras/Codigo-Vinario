import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Aquí abajo luego agregaremos el TrustBar (barra de confianza) y los Productos Destacados */}
    </div>
  );
};

export default Home;