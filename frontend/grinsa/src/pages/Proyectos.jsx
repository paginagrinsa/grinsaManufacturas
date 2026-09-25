import {
  useEffect,
} from "react";

import {
  configurarSEO,
} from "./seo";

import "./Proyectos.css";


const proyectos = [
  {
    id: 1,

    imagen:
      "/img/proyectos1.webp",

    alt:
      "Fabricación de una estructura metálica industrial",
  },

  {
    id: 2,

    imagen:
      "/img/proyectos2.webp",

    alt:
      "Maquinaria CNC dentro de una planta industrial",
  },

  {
    id: 3,

    imagen:
      "/img/proyectos3.webp",

    alt:
      "Montaje de una línea de producción industrial",
  },

  {
    id: 4,

    imagen:
      "/img/proyectos4.webp",

    alt:
      "Manufactura de componentes metálicos",
  },

  {
    id: 5,

    imagen:
      "/img/proyectos5.webp",

    alt:
      "Automatización de procesos dentro de una fábrica",
  },

  {
    id: 6,

    imagen:
      "/img/proyectos6.webp",

    alt:
      "Construcción de plataforma metálica industrial",
  },
];


function Proyectos() {

  // ==========================================
  // SEO
  // ==========================================
  useEffect(() => {
    configurarSEO({
      titulo:
        "Proyectos de Fabricación Industrial | Grinsa Manufacturas",

      descripcion:
        "Conoce proyectos realizados por Grinsa Manufacturas en fabricación de estructuras, componentes metálicos, maquinados y montaje industrial.",

      rutaCanonical:
        "/proyectos",
    });
  }, []);


  return (
    <main className="proyectos-page">

      {/* =====================================
          GALERÍA DE PROYECTOS
          ===================================== */}
      <section
        className="proyectos-gallery"
        aria-labelledby="proyectos-gallery-title"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">

          <div className="proyectos-gallery-heading">

            <h1
              id="proyectos-gallery-title"
              className="proyectos-gallery-title"
            >
              Proyectos realizados
            </h1>

            <div
              className="proyectos-gallery-line"
              aria-hidden="true"
            />

          </div>


          <div className="row row-cols-1 row-cols-md-2 g-4 g-xl-5 proyectos-grid">

            {proyectos.map(
              (
                proyecto,
                indice
              ) => (
                <div
                  key={
                    proyecto.id
                  }
                  className="col d-flex"
                >
                  <figure className="proyectos-card">

                    <img
                      src={
                        proyecto.imagen
                      }
                      alt={
                        proyecto.alt
                      }
                      className="proyectos-card-image"
                      loading={
                        indice < 2
                          ? "eager"
                          : "lazy"
                      }
                      fetchPriority={
                        indice === 0
                          ? "high"
                          : "auto"
                      }
                      decoding="async"
                      draggable="false"
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


export default Proyectos;