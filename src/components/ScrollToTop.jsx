import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // 1. Forzar el scroll de la ventana principal
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

        // 2. Forzar el HTML y el Body (prevención de bloqueos de estilos)
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // 3. Forzar el contenedor raíz de React
        const rootElement = document.getElementById('root');
        if (rootElement) {
            rootElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
    }, [pathname]);

    return null;
}