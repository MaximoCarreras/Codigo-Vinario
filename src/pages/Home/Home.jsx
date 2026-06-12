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
    <div className="home-container">
      <Navbar />
      <Hero />
      
      <section style={{ padding: '40px 0', backgroundColor: '#f9f9f9', minHeight: '100px' }}>
         <LogoLoop logos={bodegas} speed={60} />
      </section>

      <section style={{ display: 'flex', justifyContent: 'center', padding: '60px', minHeight: '400px' }}>
         <TiltedCard 
           imageSrc="https://images.unsplash.com/photo-1584916201218-f4242ceb4809"
           captionText="Vino Premium Pixel"
           containerHeight="400px"
           containerWidth="300px"
         />
      </section>

      <Footer />
    </div>
  );
};

export default Home;