import React from 'react';
import './Testimonials.css';

const COMPROMISOS = [
  {
    id: 1,
    icon: 'verified',
    title: 'Curaduría Experta',
    text: 'Elegimos cada etiqueta personalmente. Trabajamos directo con las bodegas para garantizar la autenticidad y correcta conservación de cada botella que llega a tu copa.'
  },
  {
    id: 2,
    icon: 'location_on',
    title: 'Raíces Mendocinas',
    text: 'Ubicados en la capital del vino. Llevamos la esencia de nuestra tierra, los mejores terroirs y las ediciones más exclusivas directamente hacia todo el país.'
  },
  {
    id: 3,
    icon: 'support_agent',
    title: 'Asesoramiento Personal',
    text: 'Te acompañamos en tu elección. Nuestro equipo te asesora de forma directa para encontrar el vino ideal para tu evento, regalo o cena especial.'
  }
];

export default function Testimonials() {
  return (
    <section className="cv-testimonials-section" id="compromiso">
      <div className="cv-testimonials-container">

        {/* Título estandarizado */}
        <div className="section-header">
          <span className="cv-code-detail">{'{ NUESTRO_COMPROMISO }'}</span>
          <h2>Nuestra Garantía</h2>
        </div>

        <div className="cv-testimonials-grid">
          {COMPROMISOS.map((item) => (
            <div key={item.id} className="cv-testimonials-card">
              <span className="material-symbols-outlined cv-testimonials-icon">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p className="cv-testimonials-text">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="cv-testimonials-footer">
          <p>Disfrutá de la experiencia <b>Código Vinario</b></p>
        </div>
      </div>
    </section>
  );
}