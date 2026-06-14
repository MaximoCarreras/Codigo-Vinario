// src/hooks/useDux.js
import { useState, useEffect } from 'react';

export function useDux(modulo, params = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Convertimos los params a string para la URL
    const queryString = new URLSearchParams(params).toString();
    
    fetch(`/api/dux/${modulo}?${queryString}`)
      .then(res => res.json())
      .then(json => {
        setData(json.results || json || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [modulo, JSON.stringify(params)]); // Se actualiza si el módulo o los parámetros cambian

  return { data, loading };
}