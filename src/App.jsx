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

// Importamos el nuevo componente de Mi Cuenta
import Account from './pages/Account/Account';

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
          
          {/* Panel de usuario Real (Login / Registro) */}
          <Route path="/mi-cuenta" element={<Account />} />

          {/* Manejo de Errores */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <WhatsAppBubble />
      <Footer />
    </Router>
  );
}