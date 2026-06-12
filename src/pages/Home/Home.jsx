import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import LogoLoop from '../../components/ReactBits/LogoLoop';
import TiltedCard from '../../components/ReactBits/TiltedCard';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const bodegas = [
    { src: 'https://via.placeholder.com/150x50?text=PIXEL', alt: 'Pixel' },
    { src: 'https://via.placeholder.com/150x50?text=CHACHINGO', alt: 'Chachingo' },
    { src: 'https://via.placeholder.com/150x50?text=LAMADRID', alt: 'Lamadrid' },
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      
      {/* Sección de Bodegas (LogoLoop) */}
      <section style={{ padding: '40px 0', backgroundColor: '#f9f9f9' }}>
         <LogoLoop logos={bodegas} speed={60} />
      </section>

      {/* Sección Productos 3D */}
      <section style={{ display: 'flex', justifyContent: 'center', padding: '60px' }}>
         <TiltedCard 
           imageSrc="https://images.unsplash.com/photo-1584916201218-f4242ceb4809"
           captionText="Vino Premium Pixel"
         />
      </section>

      <Footer />
    </div>
  );
};

export default Home;