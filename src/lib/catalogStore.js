import { supabase } from './supabaseClient';

// Utilizamos un Singleton (fetchPromise) para evitar que la aplicación 
// haga múltiples llamadas a la base de datos innecesariamente.
let fetchPromise = null;

export const getGlobalCatalog = () => {
    if (fetchPromise) return fetchPromise;

    fetchPromise = Promise.all([
        supabase.from('products').select('*'),
        supabase.from('categories').select('*')
    ]).then(([prodData, catData]) => {
        return { 
            products: prodData.data || [], 
            categories: catData.data || [] 
        };
    }).catch(error => {
        console.error("Error cargando el catálogo de Código Vinario:", error);
        fetchPromise = null; 
        return { products: [], categories: [] };
    });

    return fetchPromise;
};