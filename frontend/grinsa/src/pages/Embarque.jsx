import { useEffect } from "react";

import "./Embarques.css";

const imagenesFabricacion = [
  {
    id: 1,
    imagen:
      "/img/embarque1.webp",
    alt: "Embarque industrial realizado por Grinsa Manufacturas",
  },
  {
    id: 2,
    imagen:
      "/img/embarque2.webp",
    alt: "Carga industrial preparada para embarque",
  },
  {
    id: 3,
    imagen:
      "/img/embarque3.webp",
    alt: "Logística y transporte de piezas industriales",
  },
];

function Embarque() {
  useEffect(() => {
    document.title = "Grinsa Manufacturas | Embarques";
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
              Embarques
            </h1>

            <div
              className="fabricacion-introduccion-line"
              aria-hidden="true"
            />

            <p className="fabricacion-introduccion-description">
              <strong>
              Cuidamos cada pieza terminada para asegurar que llegue en perfectas condiciones a su destino final. Diseñamos empaque y soporte de carga a la medida de la pieza, coordinando la logística y el transporte terrestre especializado para maniobras pesadas o de sobredimensión.
              Etiquetado y Empaque según requerimientos
              sujeción de seguridad para transporte.
              Logística de piezas sobredimensionadas.
              Coordinación y puntualidad en tiempos de entrega.
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
        aria-label="Galería de embarques industriales"
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

export default Embarque;
