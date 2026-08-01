import { useEffect } from "react";

import "./Embarques.css";

const imagenesFabricacion = [
  {
    id: 1,
    imagen:
      "https://res.cloudinary.com/geurbdzo/image/upload/v1785540406/Imagen1_kmlueh.jpg",
    alt: "Foto 1",
  },
  {
    id: 2,
    imagen:
      "https://res.cloudinary.com/geurbdzo/image/upload/v1785540406/Imagen2_ebkwqd.jpg",
    alt: "Foto 2",
  },
  {
    id: 3,
    imagen:
      "https://emingenieria.com.mx/wp-content/uploads/2025/04/Bodega-y-Almacen-METAL-2000.jpg",
    alt: "Foto 3",
  },
];

function Montaje() {
  useEffect(() => {
    document.title = "Fabricación | Grinsa Manufacturas";
  }, []);

  return (
    <main className="fabricacion-page">
      {/* =====================================
          INTRODUCCIÓN
          ===================================== */}
      <section
        className="fabricacion-introduccion"
        aria-labelledby="fabricacion-introduccion-title"
      >
        <div className="container">
          <div className="fabricacion-introduccion-content">
            <h1
              id="fabricacion-introduccion-title"
              className="fabricacion-introduccion-title"
            >
              Montajes
            </h1>

            <div
              className="fabricacion-introduccion-line"
              aria-hidden="true"
            />

            <p className="fabricacion-introduccion-description">
              <strong>
              Llevamos la ingeniería  al sitio de trabajo. Nuestro equipo técnico realiza el ensamblaje y montaje final de las estructuras y equipos en la planta o proyecto del cliente, garantizando una instalación rápida, eficiente y cumpliendo rigurosamente con todas las normativas de seguridad industrial.
              Personal calificado de maniobra e instalación 
              Cumplimiento estricto de protocolos de seguridad
              Integración e interconexión en sitio.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          GALERÍA DE FOTOGRAFÍAS

          Las tres imágenes aparecen en una
          misma fila desde los 768px.
          ===================================== */}
      <section
        className="fabricacion-galeria"
        aria-label="Galería de procesos de fabricación"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">
          <div className="row row-cols-1 row-cols-md-3 g-4 fabricacion-galeria-grid">
            {imagenesFabricacion.map((imagen) => (
              <div
                key={imagen.id}
                className="col d-flex"
              >
                <figure className="fabricacion-foto-wrapper">
                  <img
                    src={imagen.imagen}
                    alt={imagen.alt}
                    className="fabricacion-foto"
                    loading="lazy"
                    draggable="false"
                  />

                  <div
                    className="fabricacion-foto-overlay"
                    aria-hidden="true"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Montaje;