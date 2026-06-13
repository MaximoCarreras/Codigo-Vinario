import React from 'react';
import Hero from '../../components/Hero/Hero';

// Los componentes comentados aún no existen en el directorio src/components/
// import SpecialOffer from '../../components/SpecialOffer/SpecialOffer';
// import TrustBar from '../../components/TrustBar/TrustBar';
// import WhyUs from '../../components/WhyUs/WhyUs';
// import OurStory from '../../components/OurStory/OurStory';
// import Testimonials from '../../components/Testimonials/Testimonials';
// import Newsletter from '../../components/Newsletter/Newsletter';

export default function Home() {
  return (
    <div className="cv-page-home">
      
      {/* Portada Principal */}
      <Hero />

      <div style={{ padding: '50px 10%', textAlign: 'center', background: '#fdfdfd' }}>
          <p style={{fontFamily: 'monospace', color: '#85123e'}}>_Construyendo catálogo...</p>
      </div>

    </div>
  );
}