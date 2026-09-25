import { useEffect } from "react";

import "./Fabricacion.css";

const imagenesFabricacion = [
  {
    id: 1,
    imagen:
      "/img/fabricacion1.webp",
    alt: "Proceso de fabricación industrial realizado por Grinsa Manufacturas",
  },
  {
    id: 2,
    imagen:
      "/img/fabricacion2.webp",
    alt: "Componentes metálicos fabricados por Grinsa Manufacturas",
  },
  {
    id: 3,
    imagen:
      "/img/fabricacion3.webp",
    alt: "Trabajo de manufactura y transformación de acero",
  },
];

function Fabricacion() {
  useEffect(() => {
    document.title = "Grinsa Manufacturas | Fabricación";
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
              Fabricación
            </h1>

            <div
              className="fabricacion-introduccion-line"
              aria-hidden="true"
            />

            <p className="fabricacion-introduccion-description">
              <strong>
                Transformamos el acero en estructuras y componentes de
                alta complejidad bajo los más estrictos estándares de
                calidad. Contamos con tecnología de vanguardia y
                personal altamente calificado para llevar a cabo
                procesos de corte, doblez, rolado y soldadura
                especializada, adaptándonos exactamente a los planos y
                especificaciones de cada cliente.
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

export default Fabricacion;
