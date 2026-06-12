import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; 
import Bodegas from './pages/Bodegas/Bodegas';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bodegas" element={<Bodegas />} />
      {/* Agregamos /:idCategoria para que sea una ruta dinámica */}
      <Route path="/categoria/:idCategoria" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;