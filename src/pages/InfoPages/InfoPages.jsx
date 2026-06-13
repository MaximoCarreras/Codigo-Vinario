import React from 'react';
import OurStory from '../../components/OurStory/OurStory';
import WhyUs from '../../components/WhyUs/WhyUs';
import Newsletter from '../../components/Newsletter/Newsletter';
import { Eventos } from './Eventos'; // Importamos Eventos acá para exportar todo junto

const PageWrapper = ({ children }) => (
  <div style={{ backgroundColor: 'var(--color-black)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '60px' }}>
    {children}
  </div>
);

// 1. ORIGEN EXTENDIDO (Boceto de información de la empresa)
export function Origen() {
  return (
    <PageWrapper>
      <OurStory />
      {/* Sección adicional simulando historia y visión */}
      <div style={{ maxWidth: '1000px', margin: '60px auto', padding: '0 5%', color: '#ccc', lineHeight: '1.8' }}>
        <h3 style={{ color: 'var(--color-wine)', fontFamily: 'var(--font-code)', marginBottom: '20px' }}>/ log_del_sistema: año 1</h3>
        <p style={{ marginBottom: '30px' }}>
          Lo que comenzó como una pasión familiar por descubrir los matices de nuestra tierra, rápidamente se convirtió en un puente entre los pequeños productores y los amantes del buen vino. En Código Vinario no solo vendemos botellas; decodificamos el trabajo de meses en la viña para entregarlo en su máxima expresión.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '50px' }}>
          <div style={{ padding: '30px', border: '1px solid #222', backgroundColor: '#0a0a0a' }}>
            <h4 style={{ color: 'white', marginBottom: '15px' }}>NUESTRA MISIÓN</h4>
            <p style={{ fontSize: '0.9rem' }}>Democratizar el acceso a etiquetas premium, asegurando trazabilidad perfecta desde la bodega hasta la mesa de nuestros clientes locales e internacionales.</p>
          </div>
          <div style={{ padding: '30px', border: '1px solid #222', backgroundColor: '#0a0a0a' }}>
            <h4 style={{ color: 'white', marginBottom: '15px' }}>NUESTRA VISIÓN</h4>
            <p style={{ fontSize: '0.9rem' }}>Convertirnos en la terminal de referencia mundial para la exportación y distribución del terroir mendocino, fusionando tradición con tecnología.</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// 2. NUEVA VISTA: BODEGAS (Boceto del catálogo de partners)
export function Bodegas() {
  // Lista simulada de bodegas partners
  const bodegas = ['Sposato Family Vineyards', 'Catena Zapata', 'Chachingo Craft Beer', 'El Enemigo', 'Zuccardi', 'Rutini Wines'];
  
  return (
    <PageWrapper>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="cv-code-text" style={{ color: 'var(--color-wine)' }}>/ nuestros_partners</span>
          <h1 style={{ fontSize: '3rem', color: 'white', marginTop: '10px' }}>BODEGAS <span style={{ color: 'var(--color-wine)' }}>ALIADAS</span></h1>
          <p style={{ color: '#888', marginTop: '15px', maxWidth: '600px', margin: '15px auto' }}>Trabajamos de la mano con los productores más respetados de la región para garantizar la autenticidad de cada etiqueta en nuestra cava.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          {bodegas.map((nombre, i) => (
            <div key={i} style={{ backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a', padding: '40px 20px', textAlign: 'center', borderRadius: '4px', transition: 'all 0.3s' }} className="cv-bodega-card">
              <span className="cv-code-text" style={{ opacity: 0.3, fontSize: '2rem' }}>0{i+1}</span>
              <h3 style={{ color: 'white', marginTop: '15px', fontSize: '1.2rem', letterSpacing: '1px' }}>{nombre}</h3>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

export function Compromiso() {
  return <PageWrapper><WhyUs /></PageWrapper>;
}

export function Comunidad() {
  return <PageWrapper><Newsletter /></PageWrapper>;
}

// Re-exportamos Eventos desde acá para mantener App.jsx limpio
export { Eventos };