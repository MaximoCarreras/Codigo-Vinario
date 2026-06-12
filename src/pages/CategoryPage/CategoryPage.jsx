import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './CategoryPage.css';

const CategoryPage = () => {
  // useParams lee la palabra que está en la URL (ej: "destilados" o "malbec")
  const { idCategoria } = useParams();
  
  // Convertimos la palabra a mayúsculas. Si no hay palabra, dice "PRODUCTOS"
  const titulo = idCategoria ? idCategoria.toUpperCase() : "PRODUCTOS";

  // Lista temporal para ver el diseño
  const productos = [
    { id: 1, bodega: "PIXEL", nombre: "Vino Pixel Malbec 750ml", precioOriginal: "$7.500", precioFinal: "$6.500", img: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { id: 4, bodega: "CHACHINGO", nombre: "Cerveza Chachingo IPA", precioOriginal: "$3.200", precioFinal: "$2.800", img: "https://images.unsplash.com/photo-1614316311859-07fb1e0b5220?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" }
  ];

  return (
    <div className="cv-page-container">
      <Navbar />
      
      <main className="cv-category-main">
        {/* Banner de Categoría Dinámico */}
        <div className="cv-category-banner">
          <h1>{`{ ${titulo} }`}</h1>
        </div>

        <div className="cv-category-layout">
          {/* Columna Izquierda: Filtros */}
          <aside className="cv-sidebar-filtros">
            <h3>Filtrar productos</h3>
            
            {/* Si es destilados, podemos ocultar los varietales, pero por ahora lo dejamos fijo */}
            {idCategoria !== 'destilados' && (
              <div className="filtro-grupo">
                <h4>+ Varietales</h4>
              </div>
            )}
            <div className="filtro-grupo">
              <h4>+ Bodegas</h4>
            </div>
            <div className="filtro-grupo">
              <h4>+ Precio</h4>
            </div>
            
            <button className="btn-limpiar">Limpiar filtros</button>
          </aside>

          {/* Columna Derecha: Grilla de Productos */}
          <section className="cv-productos-section">
            <div className="cv-productos-header">
              <p>73 productos</p>
              <select className="cv-sort-select">
                <option>Orden predeterminado</option>
                <option>Menor precio</option>
                <option>Mayor precio</option>
              </select>
            </div>

            <div className="cv-productos-grid">
              {productos.map(prod => (
                <div className="cv-card" key={prod.id}>
                  <div className="cv-card-img">
                    <span className="badge-oferta">15% OFF</span>
                    <img src={prod.img} alt={prod.nombre} />
                  </div>
                  <div className="cv-card-info">
                    <p className="bodega-txt">{prod.bodega}</p>
                    <h3>{prod.nombre}</h3>
                    <p className="precio-tachado">{prod.precioOriginal}</p>
                    <p className="precio-final">{prod.precioFinal}</p>
                    <p className="transferencia-txt">Pagando con transferencia</p>
                    <div className="card-actions">
                      <input type="number" defaultValue="1" min="1" />
                      <button className="btn-añadir">AÑADIR</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;