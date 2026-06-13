import React from 'react';
import OurStory from '../../components/OurStory/OurStory';
import WhyUs from '../../components/WhyUs/WhyUs';
import Newsletter from '../../components/Newsletter/Newsletter';

// Páginas independientes reutilizando tus componentes
export function Origen() {
  return <div style={{ paddingTop: '80px' }}><OurStory /></div>;
}

export function Compromiso() {
  return <div style={{ paddingTop: '80px' }}><WhyUs /></div>;
}

export function Comunidad() {
  return <div style={{ paddingTop: '80px' }}><Newsletter /></div>;
}