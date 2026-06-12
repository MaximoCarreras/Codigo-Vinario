import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; 
import Bodegas from './pages/Bodegas/Bodegas'; /* <-- NUEVO: Importamos la página */
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bodegas" element={<Bodegas />} /> /* <-- NUEVO: Creamos la ruta */
    </Routes>
  );
}

export default App;