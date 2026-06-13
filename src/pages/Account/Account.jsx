import React, { useState } from 'react';
import './Account.css';

export default function Account() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="cv-page-account cv-binary-bg">
      <div className="cv-account-container">
        
        <div className="cv-account-box">
          <div className="cv-account-header">
            <span className="cv-code-text cv-blinking-cursor">
              {isLogin ? '/ autenticación_requerida' : '/ nuevo_registro'}
            </span>
            <h1 className="cv-account-title">
              {isLogin ? 'ACCESO A LA ' : 'UNIRSE A LA '} 
              <span className="cv-text-wine">CAVA</span>
            </h1>
          </div>

          <form className="cv-account-form" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="cv-input-group">
                <label>Nombre y Apellido</label>
                <input type="text" placeholder="Ej: Juan Pérez" required />
              </div>
            )}
            
            <div className="cv-input-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="correo@ejemplo.com" required />
            </div>
            
            <div className="cv-input-group">
              <label>Contraseña</label>
              <input type="password" placeholder="••••••••" required />
            </div>

            <button type="submit" className="cv-btn-primary cv-account-submit">
              <span className="cv-code-symbol">{'>'}</span>
              {isLogin ? 'INICIAR SESIÓN' : 'CREAR CUENTA'}
            </button>
          </form>

          <div className="cv-account-footer">
            <p>
              {isLogin ? '¿No tienes el código de acceso?' : '¿Ya eres miembro?'}
              <button 
                className="cv-account-toggle-btn" 
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Regístrate aquí' : 'Inicia sesión'}
              </button>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}