import React from 'react';
import { useCart } from '../../context/CartContext';
import './Eventos.css';

export function Eventos() {
  const { addToCart } = useCart();

  const eventoSposato = {
    id: 'ticket-sposato-01',
    name: 'Entrada: Degustación Sposato Red Blend',
    price: 2500,
    category: 'tickets',
    image_url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stock: 20
  };

  return (
    <div className="cv-page-eventos" style={{ backgroundColor: '#f6f6f8', minHeight: '100vh', paddingTop: '140px', paddingBottom: '80px', color: '#111111' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        <div className="cv-section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="cv-code-text">/ agenda_cultural</span>
          <h1 className="cv-section-title">PRÓXIMAS <span className="cv-text-wine">EXPERIENCIAS</span></h1>
        </div>

        <div className="cv-event-card" style={{ display: 'flex', backgroundColor: '#ffffff', border: '1px solid #eaeaea', borderRadius: '8px', overflow: 'hidden', flexWrap: 'wrap', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <img src={eventoSposato.image_url} alt="Degustación Sposato" style={{ width: '100%', maxWidth: '450px', objectFit: 'cover' }} />
          
          <div style={{ padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
            <span className="cv-code-text" style={{ color: 'var(--color-wine)', marginBottom: '10px' }}>/ degustación</span>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#111111' }}>BODEGA SPOSATO FAMILY VINEYARDS</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px', color: '#555555', lineHeight: '1.8' }}>
              <li><span className="cv-code-symbol">_</span> <strong style={{color: '#111'}}>Fecha:</strong> 31.03.2026 | 20:00 hs</li>
              <li><span className="cv-code-symbol">_</span> <strong style={{color: '#111'}}>Incluye:</strong> Degustación guiada de Red Blend + Picada artesanal</li>
              <li><span className="cv-code-symbol">_</span> <strong style={{color: '#111'}}>Valor:</strong> $2.500 por persona</li>
            </ul>
            
            <button 
              className="cv-btn-secondary" 
              onClick={() => addToCart(eventoSposato, 1)}
              style={{ width: 'fit-content' }}
            >
              <span className="cv-code-symbol" style={{color: 'white'}}>[+]</span> RESERVAR ENTRADA
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}