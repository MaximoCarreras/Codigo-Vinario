import React from 'react';
import Hero from '../../components/Hero/Hero';
import TrustBar from '../../components/TrustBar/TrustBar';
import BestSellers from '../../components/BestSellers/BestSellers';

export default function Home() {
  return (
    <div className="cv-page-home">
      <Hero />
      <TrustBar />
      <BestSellers />
    </div>
  );
}