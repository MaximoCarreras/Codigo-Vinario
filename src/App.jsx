import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* --- COMPONENTES GLOBALES --- */
import ScrollToTop from './components/ScrollToTop';
import WhatsAppBubble from './components/WhatsAppBubble/WhatsAppBubble';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

/* --- PÁGINAS --- */
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';

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
        </Routes>
      </main>

      <WhatsAppBubble />
      <Footer />
    </Router>
  );
}