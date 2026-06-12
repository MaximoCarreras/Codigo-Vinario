import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import LogoLoop from '../../components/ReactBits/LogoLoop';
import TiltedCard from '../../components/ReactBits/TiltedCard';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const bodegas = [
    { src: 'https://placehold.co/150x50/000000/FFF?text=PIXEL', alt: 'Pixel' },
    { src: 'https://placehold.co/150x50/000000/FFF?text=CHACHINGO', alt: 'Chachingo' },
    { src: 'https://placehold.co/150x50/000000/FFF?text=LAMADRID', alt: 'Lamadrid' },
  ];

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      
      {/* Sección Bodegas - Altura controlada */}
      <section style={{ padding: '60px 0', backgroundColor: '#fdfdfd' }}>
         <LogoLoop logos={bodegas} speed={40} />
      </section>

      {/* Sección Producto 3D - Tamaño controlado */}
      <section style={{ padding: '80px 20px', display: 'flex', justifyContent: 'center' }}>
         <TiltedCard 
           imageSrc="https://images.unsplash.com/photo-1584916201218-f4242ceb4809"
           captionText="Vino Premium Pixel"
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