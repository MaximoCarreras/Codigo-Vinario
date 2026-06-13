import React from 'react';
import './TrustBar.css';

export default function TrustBar() {
  const trustFeatures = [
    {
      id: '01',
      icon: 'local_shipping',
      title: 'ENVÍOS SEGUROS',
      desc: 'Logística especializada para que tus botellas lleguen intactas.'
    },
    {
      id: '02',
      icon: 'verified_user',
      title: 'TRANSACCIÓN PROTEGIDA',
      desc: 'Encriptación de datos y múltiples medios de pago.'
    },
    {
      id: '03',
      icon: 'wine_bar',
      title: 'GARANTÍA DE ORIGEN',
      desc: 'Trazabilidad directa desde las mejores bodegas a tu copa.'
    },
    {
      id: '04',
      icon: 'support_agent',
      title: 'SOPORTE SOMMELIER',
      desc: 'Asesoramiento personalizado para tu selección.'
    }
  ];

  return (
    <section className="cv-trustbar">
      <div className="cv-trustbar-container">
        {trustFeatures.map((feature) => (
          <div key={feature.id} className="cv-trust-item">
            <div className="cv-trust-header">
              <span className="cv-code-text">[{feature.id}]</span>
              <span className="material-symbols-outlined cv-trust-icon">{feature.icon}</span>
            </div>
            <h3 className="cv-trust-title">{feature.title}</h3>
            <p className="cv-trust-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}