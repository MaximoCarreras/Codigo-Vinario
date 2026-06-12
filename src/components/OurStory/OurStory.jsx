import React from 'react';
import './OurStory.css';

export default function OurStory() {
  return (
    <section className="cv-ourstory-section" id="nuestra-historia">
      <div className="cv-ourstory-container">

        <div className="cv-ourstory-card">
          <div className="cv-ourstory-content">
            <span className="cv-code-detail">{'{ NUESTRAS_RAÍCES }'}</span>
            
            <h2 className="cv-ourstory-title">El Origen del Código</h2>

            <div className="cv-ourstory-text">
              <p>
                <b>Código Vinario</b> nace en el corazón de Mendoza con una misión clara:
                decodificar el fascinante mundo de las bebidas para acercarlo a todos. Lo que comenzó
                como una pasión por nuestra tierra, evolucionó en una <b>curaduría premium</b>.
              </p>
              <p>
                Seleccionamos personalmente cada etiqueta, visitamos las bodegas y nos aseguramos
                de que cada botella que llegue a tu copa represente la verdadera identidad de nuestra
                región. Unimos el respeto por la tradición vitivinícola con una visión moderna y accesible.
              </p>
              <p className="cv-ourstory-thanks">
                <b>Gracias por descorchar esta historia con nosotros.</b>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}