import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import WhatsAppBubble from './components/WhatsAppBubble/WhatsAppBubble';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import NotFound from './pages/NotFound/NotFound';

// Importamos TODAS las vistas secundarias desde InfoPages
import { Origen, Compromiso, Comunidad, Eventos, Bodegas } from './pages/InfoPages/InfoPages';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="cv-main-content">
        <Routes>
          {/* Flujo de E-commerce */}
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/producto/:slug" element={<ProductDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Páginas Informativas y de Marca */}
          <Route path="/origen" element={<Origen />} />
          <Route path="/bodegas" element={<Bodegas />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/compromiso" element={<Compromiso />} />
          <Route path="/comunidad" element={<Comunidad />} />
          
          {/* Futuro panel de usuario (Placeholder por ahora) */}
          <Route path="/mi-cuenta" element={<div style={{padding: '150px 5%', textAlign: 'center', color: 'white', minHeight: '60vh'}}><h1 style={{fontFamily: 'monospace', color: '#85123e'}}>_INICIALIZANDO PORTAL DE USUARIO</h1><p>Próximamente: Integración con Supabase</p></div>} />

          {/* Manejo de Errores */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <WhatsAppBubble />
      <Footer />
    </Router>
  );
}