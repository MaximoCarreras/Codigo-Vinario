import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import TrustBar from '../../components/TrustBar/TrustBar';
import BestSellers from '../../components/BestSellers/BestSellers';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustBar />
      <BestSellers />
    </div>
  );
};

export default Home;