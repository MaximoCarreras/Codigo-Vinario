import React from 'react';
import './WhyUs.css';

const VALUES = [
  {
    icon: 'wine_bar',
    title: 'Selección Exclusiva',
    desc: 'Catamos y evaluamos cada etiqueta para garantizar la máxima calidad y expresión en tu copa.',
  },
  {
    icon: 'verified',
    title: 'Origen Garantizado',
    desc: 'Trabajamos directo con las bodegas, asegurando la trazabilidad y la temperatura de estiba ideal.',
  },
  {
    icon: 'diamond',
    title: 'Experiencia Premium',
    desc: 'Desde el asesoramiento personalizado hasta el embalaje de alta seguridad para tus envíos.',
  },
];

export default function WhyUs() {
  return (
    <section className="cv-whyus-section">
      <div className="cv-whyus-container">

        {/* Título estandarizado */}
        <div className="section-header">
          <span className="cv-code-detail">{'{ LA_DIFERENCIA }'}</span>
          <h2>¿Por qué elegirnos?</h2>
        </div>

        <div className="cv-whyus-grid">
          {VALUES.map((val, i) => (
            <div className="cv-whyus-card" key={i}>
              <div className="cv-whyus-icon">
                <span className="material-symbols-outlined">{val.icon}</span>
              </div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}