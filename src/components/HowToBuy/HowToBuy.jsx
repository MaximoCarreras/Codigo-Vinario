import React from 'react';
import './HowToBuy.css';

const STEPS = [
  { number: '01', icon: 'local_bar', title: 'Elegís tus bebidas', desc: 'Explorá nuestro catálogo de vinos y destilados.' },
  { number: '02', icon: 'credit_card', title: 'Pago seguro', desc: 'Aboná con tarjetas, transferencia o en 3 cuotas sin interés.' },
  { number: '03', icon: 'inventory_2', title: 'Embalaje protegido', desc: 'Preparamos tus botellas con máxima seguridad.' },
  { number: '04', icon: 'local_shipping', title: 'Envío a tu puerta', desc: 'Entregas en Mendoza y despachos a todo el país.' },
];

export default function HowToBuy() {
  return (
    <section className="cv-howtobuy-section">
      <div className="cv-howtobuy-container">
        
        {/* Título estandarizado */}
        <div className="section-header">
          <span className="cv-code-detail">{'{ COMO_COMPRAR }'}</span>
          <h2>Comprar es fácil</h2>
        </div>

        <div className="cv-howtobuy-steps">
          {STEPS.map((step, index) => (
            <div className="cv-howtobuy-step" key={step.number}>
              
              <div className="cv-howtobuy-icon-wrapper">
                <span className="material-symbols-outlined">{step.icon}</span>
              </div>
              
              <span className="cv-howtobuy-number">{step.number}</span>
              <h3 className="cv-howtobuy-step-title">{step.title}</h3>
              <p className="cv-howtobuy-step-desc">{step.desc}</p>

              {/* Flecha separadora (se oculta en celulares) */}
              {index < STEPS.length - 1 && (
                <span className="material-symbols-outlined cv-howtobuy-arrow">
                  arrow_forward_ios
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}