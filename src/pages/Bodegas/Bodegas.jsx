import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Bodegas.css';

const Bodegas = () => {
  // Lista temporal para el diseño (luego reemplazarás con los logos reales)
  const topVentas = [
    { id: 1, nombre: "Lamadrid" },
    { id: 2, nombre: "Viña Las Perdices" },
    { id: 3, nombre: "Viña Alta" },
    { id: 4, nombre: "Santa Julia" },
    { id: 5, nombre: "Durigutti" },
    { id: 6, nombre: "Budeguer" },
    { id: 7, nombre: "Jorge Rubio" },
    { id: 8, nombre: "Staphyle" }
  ];

  const bodegasA = [
    { id: 10, nombre: "Altar Uco" },
    { id: 11, nombre: "Altos Las Hormigas" },
    { id: 12, nombre: "Anaia" },
    { id: 13, nombre: "Atamisque" },
    { id: 14, nombre: "Azul" }
  ];

  return (
    <div className="cv-page-container">
      <Navbar />
      
      <main className="cv-bodegas-main">
        {/* Separador Top Ventas */}
        <div className="cv-separator">
          <h2>// TOP VENTAS</h2>
        </div>

        {/* Grilla Top Ventas */}
        <div className="cv-bodegas-grid">
          {topVentas.map((bodega) => (
            <div className="bodega-card" key={bodega.id}>
              {/* Acá irá la etiqueta <img src={bodega.logo} /> cuando tengas las fotos */}
              <div className="logo-placeholder">{bodega.nombre}</div>
            </div>
          ))}
        </div>

        {/* Separador Letra A */}
        <div className="cv-separator">
          <h2>{'{ A }'}</h2>
        </div>

        {/* Grilla Letra A */}
        <div className="cv-bodegas-grid">
          {bodegasA.map((bodega) => (
            <div className="bodega-card" key={bodega.id}>
              <div className="logo-placeholder">{bodega.nombre}</div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bodegas;