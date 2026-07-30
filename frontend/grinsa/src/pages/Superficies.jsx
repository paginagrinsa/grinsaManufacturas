import { useEffect } from "react";

import "./Superficies.css";

const imagenPrincipal =
  "https://www.igesur.com/wp-content/uploads/2023/10/como-preparar-superficies-metalicas-para-pintar.jpg";

const imagenPrimeraSeccion =
  "https://www.igesur.com/wp-content/uploads/2023/10/como-preparar-superficies-metalicas-para-pintar.jpg";

function Superficies() {
  useEffect(() => {
    document.title = "Superficies | Grinsa Manufacturas";
  }, []);

  return (
    <main className="superficies-page">
      {/* =====================================
          IMAGEN PRINCIPAL
          ===================================== */}
      <section
        className="superficies-hero"
        aria-labelledby="superficies-hero-title"
      >
        <img
          src={imagenPrincipal}
          alt="Preparación y aplicación de recubrimientos sobre superficies metálicas"
          className="superficies-hero-image"
          draggable="false"
          loading="eager"
          fetchPriority="high"
        />

        <div
          className="superficies-hero-overlay"
          aria-hidden="true"
        />

        <div className="superficies-hero-content">
          <h1
            id="superficies-hero-title"
            className="superficies-hero-title"
          >
            Superficies
          </h1>

          <div
            className="superficies-hero-line"
            aria-hidden="true"
          />

          <p className="superficies-hero-description">
            <strong>
              Garantizamos la durabilidad de nuestras piezas expuestas
              a ambientes industriales o de alta corrosión. Realizamos
              una preparación rigurosa de superficies mediante shot
              blast con perfil de anclaje y aplicamos sistemas de
              pintura y recubrimientos industriales de alto desempeño.
              Contamos con procesos de limpieza, aplicación de
              primarios, epóxicos y poliuretanos, además de control de
              espesores y pruebas de adherencia.
            </strong>
          </p>
        </div>
      </section>

      {/* =====================================
          INTRODUCCIÓN

          Esta sección se encuentra entre la
          imagen principal y la primera sección.
          ===================================== */}
      <section
        className="superficies-introduccion"
        aria-labelledby="superficies-introduccion-title"
      >
        <div className="container">
          <div className="superficies-introduccion-content">
            <h2
              id="superficies-introduccion-title"
              className="superficies-introduccion-title"
            >
              Lorem Ipsum
            </h2>

            <div
              className="superficies-introduccion-line"
              aria-hidden="true"
            />

            <p className="superficies-introduccion-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          PRIMERA SECCIÓN DIVIDIDA

          Texto a la izquierda.
          Imagen a la derecha.
          ===================================== */}
      <section
        className="superficies-seccion superficies-seccion-clara"
        aria-labelledby="superficies-seccion-uno-title"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">
          <div className="row align-items-center g-4 g-lg-5 superficies-fila">
            <div className="col-12 col-lg-6">
              <div className="superficies-texto">
                <h2
                  id="superficies-seccion-uno-title"
                  className="superficies-seccion-title"
                >
                  Lorem Ipsum
                </h2>

                <div
                  className="superficies-seccion-line"
                  aria-hidden="true"
                />

                <p className="superficies-seccion-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <figure className="superficies-image-wrapper">
                <img
                  src={imagenPrimeraSeccion}
                  alt="Trabajador preparando una superficie metálica"
                  className="superficies-section-image"
                  loading="lazy"
                  draggable="false"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          SEGUNDA SECCIÓN DIVIDIDA

          Ahora ambos lados contienen
          título y párrafo.
          ===================================== */}
      <section
        className="superficies-seccion superficies-seccion-gris"
        aria-label="Información adicional sobre superficies"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">
          <div className="row align-items-stretch g-4 g-lg-5 superficies-fila">
            {/* Texto de la izquierda */}
            <div className="col-12 col-lg-6 d-flex">
              <article className="superficies-text-panel">
                <h2 className="superficies-seccion-title">
                  Lorem Ipsum
                </h2>

                <div
                  className="superficies-seccion-line"
                  aria-hidden="true"
                />

                <p className="superficies-seccion-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Praesent commodo cursus magna, vel scelerisque
                  nisl consectetur et. Donec ullamcorper nulla non
                  metus auctor fringilla. Vestibulum id ligula porta
                  felis euismod semper. Integer posuere erat a ante
                  venenatis dapibus posuere velit aliquet.
                </p>
              </article>
            </div>

            {/* Texto de la derecha */}
            <div className="col-12 col-lg-6 d-flex">
              <article className="superficies-text-panel">
                <h2 className="superficies-seccion-title">
                  Lorem Ipsum
                </h2>

                <div
                  className="superficies-seccion-line"
                  aria-hidden="true"
                />

                <p className="superficies-seccion-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed posuere consectetur est at lobortis. Nulla
                  vitae elit libero, a pharetra augue. Cras mattis
                  consectetur purus sit amet fermentum. Maecenas
                  faucibus mollis interdum. Donec id elit non mi porta
                  gravida at eget metus.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Superficies;