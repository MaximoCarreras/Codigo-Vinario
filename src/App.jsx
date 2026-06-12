import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'; 
import Bodegas from './pages/Bodegas/Bodegas';
import CategoryPage from './pages/CategoryPage/CategoryPage'; /* <-- NUEVO */
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bodegas" element={<Bodegas />} />
      <Route path="/categoria" element={<CategoryPage />} /> /* <-- NUEVO */
    </Routes>
  );
}

export default App;