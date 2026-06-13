import React from 'react';
import { useCart } from '../../context/CartContext';
import './Eventos.css';

export function Eventos() {
  const { addToCart } = useCart();

  // Mockup basado en el historial real de la vinoteca
  const eventoSposato = {
    id: 'ticket-sposato-01',
    name: 'Entrada: Degustación Sposato Red Blend',
    price: 2500,
    category: 'tickets',
    image_url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stock: 20
  };

  return (
    <div className="cv-page-eventos" style={{ backgroundColor: 'var(--color-black)', minHeight: '100vh', paddingTop: '100px', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        <div className="cv-section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="cv-code-text">/ agenda_cultural</span>
          <h1 className="cv-section-title">PRÓXIMAS <span className="cv-text-wine">EXPERIENCIAS</span></h1>
        </div>

        <div className="cv-event-card" style={{ display: 'flex', backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '8px', overflow: 'hidden', flexWrap: 'wrap' }}>
          <img src={eventoSposato.image_url} alt="Degustación Sposato" style={{ width: '100%', maxWidth: '400px', objectFit: 'cover' }} />
          
          <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
            <span className="cv-code-text" style={{ color: 'var(--color-wine)', marginBottom: '10px' }}>/ degustación</span>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>BODEGA SPOSATO FAMILY VINEYARDS</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: '#aaa', lineHeight: '1.8' }}>
              <li><span className="cv-code-symbol">_</span> <strong>Fecha:</strong> 31.03.2026 | 20:00 hs</li>
              <li><span className="cv-code-symbol">_</span> <strong>Incluye:</strong> Degustación guiada de Red Blend + Picada artesanal</li>
              <li><span className="cv-code-symbol">_</span> <strong>Valor:</strong> $2.500 por persona</li>
            </ul>
            
            <button 
              className="cv-btn-primary" 
              onClick={() => addToCart(eventoSposato, 1)}
              style={{ width: 'fit-content' }}
            >
              <span className="cv-code-symbol">[+]</span> RESERVAR ENTRADA
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}