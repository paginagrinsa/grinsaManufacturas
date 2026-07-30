import { useEffect } from "react";

import "./Embarques.css";

const imagenPrincipal =
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1920&auto=format&fit=crop";

const imagenTransportes =
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1920&auto=format&fit=crop";

function Embarque() {
  useEffect(() => {
    document.title = "Embarque | Grinsa Manufacturas";
  }, []);

  return (
    <main className="embarque-page">
      {/* =====================================
          IMAGEN PRINCIPAL
          ===================================== */}
      <section
        className="embarque-hero"
        aria-labelledby="embarque-hero-title"
      >
        <img
          src={imagenPrincipal}
          alt="Camión utilizado para el transporte de piezas industriales"
          className="embarque-hero-image"
          draggable="false"
          loading="eager"
          fetchPriority="high"
        />

        <div
          className="embarque-hero-overlay"
          aria-hidden="true"
        />

        <div className="embarque-hero-content">
          <h1
            id="embarque-hero-title"
            className="embarque-hero-title"
          >
            Embarques
          </h1>

          <div
            className="embarque-hero-line"
            aria-hidden="true"
          />

          <p className="embarque-hero-description">
            <strong>
              Cuidamos cada pieza terminada para asegurar que llegue
              en perfectas condiciones a su destino final. Diseñamos
              empaques y soportes de carga a la medida, coordinando la
              logística y el transporte terrestre especializado para
              maniobras pesadas o de sobredimensión. Contamos con
              procesos de etiquetado, sujeción de seguridad y
              coordinación puntual de los tiempos de entrega.
            </strong>
          </p>
        </div>
      </section>

      

      {/* =====================================
          SECCIÓN DE TRANSPORTE

          Izquierda: imagen.
          Derecha: dos bloques de información.
          ===================================== */}
      <section
        className="embarque-transporte"
        aria-label="Información sobre transporte y embarques"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">
          <div className="embarque-transporte-grid">
            {/* Imagen izquierda */}
            <figure className="embarque-transporte-image-wrapper">
              <img
                src={imagenTransportes}
                alt="Camión de transporte circulando por carretera"
                className="embarque-transporte-image"
                loading="lazy"
                draggable="false"
              />

              <div
                className="embarque-transporte-image-overlay"
                aria-hidden="true"
              />
            </figure>

            {/* Contenido derecho */}
            <div className="embarque-transporte-content">
              {/* Bloque superior */}
              <article className="embarque-info-panel">
                <h2 className="embarque-info-title">
                  Lorem Ipsum
                </h2>

                <div
                  className="embarque-info-line"
                  aria-hidden="true"
                />

                <p className="embarque-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat.
                </p>
              </article>

              {/* Bloque inferior */}
              <article className="embarque-info-panel">
                <h2 className="embarque-info-title">
                  Lorem Ipsum
                </h2>

                <div
                  className="embarque-info-line"
                  aria-hidden="true"
                />

                <p className="embarque-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non
                  proident.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Embarque;