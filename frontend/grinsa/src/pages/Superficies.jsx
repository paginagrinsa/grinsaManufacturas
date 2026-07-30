import { useEffect } from "react";

import "./Superficies.css";

const imagenesFabricacion = [
  {
    id: 1,
    imagen:
      "https://www.igesur.com/wp-content/uploads/2023/10/como-preparar-superficies-metalicas-para-pintar.jpg",
    alt: "Foto 1",
  },
  {
    id: 2,
    imagen:
      "https://www.igesur.com/wp-content/uploads/2023/10/como-preparar-superficies-metalicas-para-pintar.jpg",
    alt: "Foto 2",
  },
  {
    id: 3,
    imagen:
      "https://www.igesur.com/wp-content/uploads/2023/10/como-preparar-superficies-metalicas-para-pintar.jpg",
    alt: "Foto 3",
  },
];

function Superficies() {
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
              Superficies
            </h1>

            <div
              className="fabricacion-introduccion-line"
              aria-hidden="true"
            />

            <p className="fabricacion-introduccion-description">
              <strong>
              Garantizamos la durabilidad de nuestras piezas expuestas a ambientes industriales o de alta corrosión. Realizamos una preparación rigurosa de superficies mediante  shot blast  con perfil de anclaje  y aplicamos sistemas de pintura y recubrimientos industriales de alto desempeño.
              Limpieza y preparación de superficie (shotblast).
              Aplicación de primarios, epóxicos y poliuretanos industriales.
              Control de espesores y pruebas de adherencia.
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

export default Superficies;