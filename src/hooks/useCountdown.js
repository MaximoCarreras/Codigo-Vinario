import { useState, useEffect } from 'react';

/**
 * Hook para temporizador en tiempo real.
 * Calcula el tiempo restante hasta una fecha objetivo y se actualiza cada segundo.
 * Ideal para ofertas por tiempo limitado en Código Vinario.
 * * @param {number} daysFromNow - Días restantes para que termine la cuenta regresiva.
 * @returns {{ days, hours, minutes, seconds, isExpired }}
 */
export function useCountdown(daysFromNow = 3) {
  // Calculamos la fecha objetivo solo una vez al montar el componente
  const [targetDate] = useState(() => {
    const target = new Date();
    target.setDate(target.getDate() + daysFromNow);
    target.setHours(23, 59, 59, 0); // Termina al final del día
    return target.getTime();
  });

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    // Se actualiza cada segundo y se limpia al desmontar
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

/**
 * Función pura para calcular los componentes de tiempo restante.
 * Devuelve valores en cero si la cuenta regresiva expiró.
 */
function calculateTimeLeft(targetDate) {
  const now = Date.now();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isExpired: false,
  };
}