import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import './Newsletter.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');

    try {
      if (supabase) {
        const { error } = await supabase
          .from('newsletter_subscribers')
          .upsert({ email }, { onConflict: 'email' });
        if (error) throw error;
      } else {
        const res = await fetch(`${API_URL}/api/newsletter`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
        if (!res.ok) throw new Error('API error');
      }
      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      setStatus('error');
    }
  };

  return (
    <section className="cv-newsletter-section" id="newsletter">
      <div className="cv-newsletter-container">

        {/* Título estandarizado */}
        <div className="section-header">
          <span className="cv-code-detail">{'{ CLUB_VINARIO }'}</span>
          <h2>Unite a nuestra comunidad</h2>
        </div>

        <p className="cv-newsletter-subtitle">
          Recibí un 10% OFF en tu primera compra y enterate antes de nuestras catas exclusivas.
        </p>

        <form className="cv-newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Ingresá tu email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="cv-newsletter-input"
            required
          />
          <button
            type="submit"
            className="cv-newsletter-btn"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'ENVIANDO...' : 'SUSCRIBIRME'}
          </button>
        </form>

        {/* Mensajes sin emojis, estilo profesional */}
        {status === 'success' && (
          <p className="cv-newsletter-message cv-newsletter-message--success">
            ¡Te suscribiste con éxito! Revisá tu bandeja de entrada para ver el cupón.
          </p>
        )}
        {status === 'error' && (
          <p className="cv-newsletter-message cv-newsletter-message--error">
            Ocurrió un error al procesar tu solicitud. Por favor, intentá nuevamente.
          </p>
        )}

        <p className="cv-newsletter-disclaimer">
          Cero spam. Podés cancelar tu suscripción cuando quieras.
        </p>
      </div>
    </section>
  );
}