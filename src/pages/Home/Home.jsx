import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
// Importamos los nuevos componentes
import TiltedCard from '../../components/ReactBits/TiltedCard';
import InfiniteMenu from '../../components/ReactBits/InfiniteMenu';

const Home = () => {
  // Lista de tus bodegas para el menú 3D
  const bodegas = [
    { image: 'url_a_tu_logo_pixel.png', title: 'PIXEL', description: 'Vinos de vanguardia', link: '/categoria/pixel' },
    { image: 'url_a_tu_logo_chachingo.png', title: 'CHACHINGO', description: 'Cervecería artesanal', link: '/categoria/cervezas' }
  ];

  return (
    <div>
      <Navbar />
      <Hero />

      {/* SECCIÓN BODEGAS 3D - Reemplaza tu anterior sección */}
      <section style={{ height: '500px', backgroundColor: '#000' }}>
        <InfiniteMenu items={bodegas} scale={1.0} />
      </section>

      {/* SECCIÓN PRODUCTOS DESTACADOS CON EFECTO TILTED */}
      <section style={{ padding: '50px 5%' }}>
        <TiltedCard 
           imageSrc="https://images.unsplash.com/photo-1584916201218-f4242ceb4809"
           captionText="Vino Pixel Malbec"
           containerHeight="400px"
           imageHeight="350px"
           imageWidth="250px"
           rotateAmplitude={10}
        />
      </section>
    </div>
  );
};