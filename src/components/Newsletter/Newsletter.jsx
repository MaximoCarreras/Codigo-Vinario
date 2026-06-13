import React, { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    // Simulamos la carga (acá a futuro conectamos Supabase o Resend)
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="cv-newsletter cv-binary-bg" id="newsletter">
      <div className="cv-newsletter-content">
        
        <div className="cv-newsletter-header">
          <span className="cv-code-text cv-blinking-cursor">/ decodificando_novedades</span>
          <h2>ÚNETE AL <span className="cv-text-wine">CÓDIGO</span></h2>
          <p>
            Recibí accesos anticipados a degustaciones exclusivas, nuevas etiquetas y notas de cata directamente en tu bandeja de entrada.
          </p>
        </div>

        <form className="cv-newsletter-form" onSubmit={handleSubmit}>
          <div className="cv-input-wrapper">
            <span className="cv-input-prefix">{'>'}</span>
            <input 
              type="email" 
              placeholder="ingresa_tu_email@aqui.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'success'}
              required
            />
          </div>
          <button 
            type="submit" 
            className="cv-btn-primary cv-submit-btn"
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'idle' && 'SUSCRIBIRSE'}
            {status === 'loading' && 'PROCESANDO...'}
            {status === 'success' && 'SISTEMA_ACTUALIZADO'}
          </button>
        </form>

      </div>
    </section>
  );
}