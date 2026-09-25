import {
  useEffect,
} from "react";

import "./Superficies.css";


const imagenesFabricacion = [
  {
    id: 1,

    imagen:
      "/img/superficies1.webp",

    alt:
      "Preparación y recubrimiento de superficie industrial",
  },

  {
    id: 2,

    imagen:
      "/img/superficies2.webp",

    alt:
      "Aplicación de pintura industrial sobre estructura metálica",
  },

  {
    id: 3,

    imagen:
      "/img/superficies3.webp",

    alt:
      "Proceso de tratamiento de superficies realizado por Grinsa Manufacturas",
  },
];


function Superficies() {
  useEffect(() => {
    document.title =
      "Grinsa Manufacturas | Superficies";
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
                Garantizamos la durabilidad de nuestras piezas expuestas a
                ambientes industriales o de alta corrosión. Realizamos una
                preparación rigurosa de superficies mediante shot blast con
                perfil de anclaje y aplicamos sistemas de pintura y
                recubrimientos industriales de alto desempeño. Limpieza y
                preparación de superficie (shotblast). Aplicación de
                primarios, epóxicos y poliuretanos industriales. Control de
                espesores y pruebas de adherencia.
              </strong>
            </p>

          </div>
        </div>
      </section>


      {/* =====================================
          GALERÍA
          ===================================== */}
      <section
        className="fabricacion-galeria"
        aria-label="Galería de preparación y recubrimiento de superficies"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">

          <div className="row row-cols-1 row-cols-md-3 g-4 fabricacion-galeria-grid">

            {imagenesFabricacion.map(
              (
                imagen,
                indice
              ) => (
                <div
                  key={
                    imagen.id
                  }
                  className="col d-flex"
                >
                  <figure className="fabricacion-foto-wrapper">

                    <img
                      src={
                        imagen.imagen
                      }
                      alt={
                        imagen.alt
                      }
                      className="fabricacion-foto"
                      loading="eager"
                      fetchPriority={
                        indice === 0
                          ? "high"
                          : "auto"
                      }
                      decoding="async"
                      draggable="false"
                    />

                    <div
                      className="fabricacion-foto-overlay"
                      aria-hidden="true"
                    />

                  </figure>
                </div>
              )
            )}

          </div>
        </div>
      </section>

    </main>
  );
}


export default Superficies;