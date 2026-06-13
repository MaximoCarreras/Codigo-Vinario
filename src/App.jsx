import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* --- COMPONENTES GLOBALES --- */
import ScrollToTop from './components/ScrollToTop';
import WhatsAppBubble from './components/WhatsAppBubble/WhatsAppBubble';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

/* --- PÁGINAS --- */
import Home from './pages/Home/Home';

/* --- VISTAS TEMPORALES (Las cambiaremos cuando armemos estas páginas) --- */
const Shop = () => <div style={{ padding: '120px 5%', minHeight: '60vh' }}><span className="cv-code-text">/catalogo_general</span><h1>Catálogo de Etiquetas</h1></div>;
const ProductDetail = () => <div style={{ padding: '120px 5%', minHeight: '60vh' }}><span className="cv-code-text">/detalle_producto</span><h1>Especificación Técnica</h1></div>;

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
        </Routes>
      </main>

      <WhatsAppBubble />
      
      <Footer />
    </Router>
  );
}