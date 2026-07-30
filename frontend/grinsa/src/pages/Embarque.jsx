import { useEffect } from "react";

import "./Embarques.css";

const imagenesFabricacion = [
  {
    id: 1,
    imagen:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Foto 1",
  },
  {
    id: 2,
    imagen:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Foto 2",
  },
  {
    id: 3,
    imagen:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Foto 3",
  },
];

function Embarque() {
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

export default Embarque;