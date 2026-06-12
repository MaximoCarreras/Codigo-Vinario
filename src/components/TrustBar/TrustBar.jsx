import React from 'react';
import './TrustBar.css';

const TrustBar = () => {
  return (
    <div className="cv-trustbar">
      <div className="trust-item">
        <span className="trust-icon">👍</span>
        <p>98% vuelve por más</p>
      </div>
      <div className="trust-item">
        <span className="trust-icon">⭐</span>
        <p>Calificación 5 estrellas</p>
      </div>
      <div className="trust-item">
        <span className="trust-icon">📦</span>
        <p>Envíos a todo el país</p>
      </div>
      <div className="trust-item">
        <span className="trust-icon">🍷</span>
        <p>Selección exclusiva</p>
      </div>
    </div>
  );
};

export default TrustBar;