import { useEffect } from "react";

import "./Fabricacion.css";

const imagenesFabricacion = [
  {
    id: 1,
    imagen:
      "https://res.cloudinary.com/geurbdzo/image/upload/v1785437059/WhatsApp_Image_2026-07-30_at_12.32.16_cgdfqh.jpg",
    alt: "Proceso de fabricación industrial realizado por Grinsa Manufacturas",
  },
  {
    id: 2,
    imagen:
      "https://res.cloudinary.com/geurbdzo/image/upload/v1785437059/WhatsApp_Image_2026-07-30_at_12.31.52_x1ycmg.jpg",
    alt: "Componentes metálicos fabricados por Grinsa Manufacturas",
  },
  {
    id: 3,
    imagen:
      "https://res.cloudinary.com/geurbdzo/image/upload/v1785437059/WhatsApp_Image_2026-07-30_at_12.32.49_p77lzi.jpg",
    alt: "Trabajo de manufactura y transformación de acero",
  },
];

function Fabricacion() {
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