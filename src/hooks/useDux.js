// src/hooks/useDux.js
import { useState, useEffect } from 'react';

export function useDux(modulo) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!modulo) return;
    setLoading(true);
    fetch(`/api/dux/${modulo}`)
      .then(res => res.json())
      .then(json => {
        setData(json.results || []);
        setLoading(false);
      });
  }, [modulo]);

  return { data, loading };
}