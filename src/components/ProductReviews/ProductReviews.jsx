import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import './ProductReviews.css';

export default function ProductReviews({ productSlug }) {
    const [reviews, setReviews] = useState([]);
    const [user, setUser] = useState(null);
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) setUser(session.user);
        });
        fetchReviews();
    }, [productSlug]);

    const fetchReviews = async () => {
        const { data, error } = await supabase
            .from('reviews')
            .select(`
                id, rating, comment, created_at, admin_reply,
                profiles:user_id (full_name, avatar_url)
            `)
            .eq('product_slug', productSlug)
            .order('created_at', { ascending: false });

        if (error) {
            console.error("Error trayendo reseñas:", error);
        } else if (data) {
            setReviews(data);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return toast.error("Tenés que iniciar sesión para comentar");
        if (!comment.trim()) return toast.error("El comentario no puede estar vacío");

        setLoading(true);
        const { error } = await supabase.from('reviews').insert([{
            product_slug: productSlug,
            user_id: user.id,
            rating,
            comment
        }]);

        setLoading(false);

        if (error) {
            console.error("Error guardando reseña:", error);
            toast.error("Hubo un error al publicar tu reseña.");
        } else {
            toast.success("Reseña publicada con éxito.");
            setComment('');
            setRating(5);
            fetchReviews();
        }
    };

    return (
        <div className="cv-reviews-container">
            <h3 className="cv-reviews-title">Opiniones de la Comunidad</h3>
            
            {/* FORMULARIO DE CARGA */}
            <div className="cv-review-form-card">
                {user ? (
                    <form onSubmit={handleSubmit}>
                        <h4>Dejá tu reseña</h4>
                        <div className="cv-star-selector">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    onClick={() => setRating(star)}
                                    width="32" 
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill={star <= rating ? '#85123e' : 'transparent'}
                                    stroke={star <= rating ? '#85123e' : '#ccc'}
                                    strokeWidth="1.5"
                                    style={{ cursor: 'pointer', transition: '0.2s', marginRight: '4px' }}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <textarea 
                            value={comment} 
                            onChange={(e) => setComment(e.target.value)} 
                            placeholder="¿Qué te pareció este producto? Tu opinión ayuda a otros clientes." 
                            rows="3"
                            className="cv-review-textarea"
                        />
                        <button type="submit" disabled={loading} className="cv-btn-submit">
                            {loading ? 'PUBLICANDO...' : 'PUBLICAR RESEÑA'}
                        </button>
                    </form>
                ) : (
                    <div className="cv-login-prompt">
                        <p>¿Ya probaste este producto? Compartí tu experiencia.</p>
                        <Link to="/mi-cuenta" className="cv-btn-outline">INICIAR SESIÓN PARA COMENTAR</Link>
                    </div>
                )}
            </div>

            {/* LISTA DE RESEÑAS */}
            <div className="cv-reviews-list">
                {reviews.length === 0 ? (
                    <p className="cv-no-reviews">Todavía no hay opiniones. ¡Sé el primero en comentar!</p>
                ) : (
                    reviews.map(rev => (
                        <div key={rev.id} className="cv-review-item">
                            <div className="cv-review-header">
                                <div className="cv-reviewer-info">
                                    <img 
                                        src={rev.profiles?.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${rev.profiles?.full_name || 'U'}&backgroundColor=85123e`} 
                                        alt="Avatar" 
                                        className="cv-reviewer-avatar"
                                    />
                                    <strong>{rev.profiles?.full_name || 'Usuario Anónimo'}</strong>
                                </div>
                                <div className="cv-review-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            width="18" 
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill={i < rev.rating ? '#85123e' : '#e2e8f0'}
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ marginRight: '2px' }}
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="cv-review-date">{new Date(rev.created_at).toLocaleDateString('es-AR')}</p>
                            <p className="cv-review-text">{rev.comment}</p>

                            {/* RESPUESTA DEL ADMIN (CÓDIGO VINARIO) */}
                            {rev.admin_reply && (
                                <div className="cv-admin-reply">
                                    <div className="cv-admin-header">
                                        <span className="material-symbols-outlined">storefront</span>
                                        <strong>Código Vinario</strong>
                                    </div>
                                    <p>{rev.admin_reply}</p>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}