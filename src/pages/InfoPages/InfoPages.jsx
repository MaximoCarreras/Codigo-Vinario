import React from 'react';
import OurStory from '../../components/OurStory/OurStory';
import WhyUs from '../../components/WhyUs/WhyUs';
import Newsletter from '../../components/Newsletter/Newsletter';

// Envolvemos en un contenedor negro puro
const PageWrapper = ({ children }) => (
  <div style={{ backgroundColor: 'var(--color-black)', minHeight: '100vh', paddingTop: '80px' }}>
    {children}
  </div>
);

export function Origen() {
  return <PageWrapper><OurStory /></PageWrapper>;
}

export function Compromiso() {
  return <PageWrapper><WhyUs /></PageWrapper>;
}

export function Comunidad() {
  return <PageWrapper><Newsletter /></PageWrapper>;
}