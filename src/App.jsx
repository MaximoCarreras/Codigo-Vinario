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
import { Origen, Compromiso, Comunidad } from './pages/InfoPages/InfoPages';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="cv-main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/producto/:slug" element={<ProductDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Nuevas páginas independientes */}
          <Route path="/origen" element={<Origen />} />
          <Route path="/compromiso" element={<Compromiso />} />
          <Route path="/comunidad" element={<Comunidad />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <WhatsAppBubble />
      <Footer />
    </Router>
  );
}