import React from 'react';
import './TrustBar.css';

export default function TrustBar() {
  const trustFeatures = [
    {
      icon: 'local_shipping',
      title: 'Envíos a todo el país',
      desc: 'Logística segura y garantizada.'
    },
    {
      icon: 'credit_card',
      title: 'Pagos Seguros',
      desc: '3 cuotas sin interés.'
    },
    {
      icon: 'wine_bar',
      title: 'Selección Experta',
      desc: 'Curaduría premium de bodegas.'
    },
    {
      icon: 'support_agent',
      title: 'Asesoramiento',
      desc: 'Trato directo y personal.'
    }
  ];

  return (
    <section className="cv-trustbar">
      <div className="cv-trustbar-container">
        {trustFeatures.map((feature, index) => (
          <div className="cv-trustbar-item" key={index}>
            <span className="material-symbols-outlined cv-trustbar-icon">
              {feature.icon}
            </span>
            <div className="cv-trustbar-text">
              <h4 className="cv-trustbar-title">{feature.title}</h4>
              <p className="cv-trustbar-desc">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}