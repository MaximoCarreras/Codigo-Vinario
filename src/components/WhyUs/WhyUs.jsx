import React from 'react';
import './WhyUs.css';

export default function WhyUs() {
  const pillars = [
    {
      number: '01',
      title: 'SELECCIÓN DE AUTOR',
      desc: 'No vendemos botellas, curamos experiencias. Cada etiqueta en nuestro catálogo fue probada y aprobada por especialistas.'
    },
    {
      number: '10',
      title: 'CULTURA & EVENTOS',
      desc: 'Más allá de la tienda, somos un punto de encuentro. Organizamos degustaciones exclusivas y conectamos a la comunidad con las bodegas.'
    },
    {
      number: '11',
      title: 'ALCANCE GLOBAL',
      desc: 'Nuestra logística nos permite que turistas de todo el mundo y clientes locales reciban su selección en condiciones óptimas.'
    }
  ];

  return (
    <section className="cv-whyus" id="compromiso">
      <div className="cv-whyus-container">
        
        <div className="cv-whyus-header">
          <span className="cv-code-text">/ logica_del_sistema</span>
          <h2 className="cv-section-title">POR QUÉ EL <span className="cv-text-wine">CÓDIGO</span></h2>
        </div>

        <div className="cv-whyus-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="cv-whyus-card">
              <div className="cv-whyus-number">{pillar.number}</div>
              <h3 className="cv-whyus-card-title">
                <span className="cv-code-symbol">_</span>
                {pillar.title}
              </h3>
              <p className="cv-whyus-card-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}