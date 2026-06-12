import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import './InstagramCarousel.css';

// Fotos de respaldo por si la base de datos aún no tiene publicaciones cargadas
const FALLBACK_POSTS = [
  { image_url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', post_url: '#' },
  { image_url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', post_url: '#' },
  { image_url: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', post_url: '#' },
  { image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', post_url: '#' }
];

export default function InstagramCarousel() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('instagram_posts')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        // Si hay datos, los usamos. Si no, usamos las fotos de respaldo.
        setPosts(data && data.length > 0 ? data : FALLBACK_POSTS);
      } catch (err) {
        console.error("Error cargando Instagram:", err);
        setPosts(FALLBACK_POSTS);
      }
    };
    fetchPosts();
  }, []);

  if (posts.length === 0) return null;

  // Truco matemático: Multiplicar fotos para el bucle infinito
  let repeatedPosts = [...posts];
  while (repeatedPosts.length < 10) {
    repeatedPosts = [...repeatedPosts, ...posts];
  }

  return (
    <section className="cv-insta-carousel">
      <div className="section-header">
        <span className="cv-code-detail">{'{ INSTAGRAM }'}</span>
        <h2>Momentos Código Vinario</h2>
      </div>

      <div className="cv-insta-marquee">
        <div className="cv-insta-track">
          {/* GRUPO 1 */}
          {repeatedPosts.map((post, idx) => (
            <a key={`orig-${idx}`} href={post.post_url} target="_blank" rel="noreferrer" className="cv-insta-item">
              <div className="cv-insta-img-container">
                <img src={post.image_url} alt="Código Vinario Instagram" className="cv-insta-main-img" loading="lazy" />
                <div className="cv-insta-overlay">
                  <img src="/logo.png" alt="Logo Código Vinario" className="cv-insta-overlay-logo" />
                </div>
              </div>
            </a>
          ))}
          
          {/* GRUPO 2 (Idéntico al Grupo 1, para el bucle perfecto) */}
          {repeatedPosts.map((post, idx) => (
            <a key={`clone-${idx}`} href={post.post_url} target="_blank" rel="noreferrer" className="cv-insta-item">
              <div className="cv-insta-img-container">
                <img src={post.image_url} alt="Código Vinario Instagram" className="cv-insta-main-img" loading="lazy" />
                <div className="cv-insta-overlay">
                  <img src="/logo.png" alt="Logo Código Vinario" className="cv-insta-overlay-logo" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}