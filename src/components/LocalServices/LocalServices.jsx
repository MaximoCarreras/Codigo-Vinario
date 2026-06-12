import React from 'react';
import './LocalServices.css';

const LocalServices = () => {
  return (
    <section className="cv-local-services">
      {/* Encabezado del bloque */}
      <div className="services-header">
        <span className="cv-code-detail">C:\&gt; RUN LOCAL_FUNCTIONS</span>
        <h2>Mucho más que una Cava</h2>
        <p>Decodificamos la gastronomía y el vino a través de experiencias en nuestro local y en movimiento.</p>
      </div>

      {/* Grilla Principal Asimétrica */}
      <div className="services-grid">
        
        {/* Bloque 1: Degustaciones (Grande) */}
        <div className="service-card card-large bg-dark">
          <div className="card-image-bg img-catas"></div>
          <div className="card-overlay"></div>
          <div className="card-content">
            <span className="card-tech-tag">// TASTING_ROOM</span>
            <h3>Catas &amp; Degustaciones</h3>
            <p>Encuentros guiados para descubrir etiquetas exclusivas, joyitas de autor y maridajes diseñados al detalle en nuestro espacio físico.</p>
            <button className="cv-btn-link">RESERVAR LUGAR &gt;_</button>
          </div>
        </div>

        {/* Bloque 2: Aceites y Boutique */}
        <div className="service-card card-small bg-light">
          <div className="card-content-pure">
            <span className="card-tech-tag">/* boutique_gourmet */</span>
            <h3>Aceites de Oliva Premium</h3>
            <p>Seleccionamos los mejores aceites de oliva extra virgen de la región (especialmente la joya local, el varietal Arauco) y delicatessen para elevar cualquier picada.</p>
            <button className="cv-btn-wine-sm">VER BOUTIQUE</button>
          </div>
        </div>

        {/* Bloque 3: Eventos In & Out */}
        <div className="service-card card-small bg-wine">
          <div className="card-content-pure">
            <span className="card-tech-tag">&#123; events_manager &#125;</span>
            <h3>Eventos In &amp; Out</h3>
            <p>Llevamos la experiencia de Código Vinario a donde estés. Diseñamos barras de vino y logística gastronómica para eventos corporativos y privados, tanto dentro como fuera de nuestro local.</p>
            <button className="cv-btn-white-sm">COTIZAR EVENTO</button>
          </div>
        </div>

        {/* Bloque 4: Food Truck (Grande) */}
        <div className="service-card card-large bg-dark">
          <div className="card-image-bg img-truck"></div>
          <div className="card-overlay"></div>
          <div className="card-content">
            <span className="card-tech-tag">&gt;_ UNIT_FOODTRUCK</span>
            <h3>Gastronomía sobre Ruedas</h3>
            <p>Nuestro food truck oficial está listo para encender motores. Maridajes al paso, cocina urbana de alto nivel y la mejor selección de copas listas para festivales, ferias o tu evento privado.</p>
            <button className="cv-btn-link">TRACKING_TRUCK &gt;_</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocalServices;