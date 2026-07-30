import { useEffect } from "react";

import "./Montaje.css";

const imagenPrincipal =
  "https://emingenieria.com.mx/wp-content/uploads/2025/04/Bodega-y-Almacen-METAL-2000.jpg";

const imagenMontaje =
  "https://emingenieria.com.mx/wp-content/uploads/2025/04/Bodega-y-Almacen-METAL-2000.jpg";

const bloquesMontaje = [
  {
    id: 1,
    titulo: "Lorem Ipsum",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 2,
    titulo: "Lorem Ipsum",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    titulo: "Lorem Ipsum",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eget magna fermentum tincidunt. Praesent commodo cursus magna.",
  },
  {
    id: 4,
    titulo: "Lorem Ipsum",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.",
  },
];

function Montaje() {
  useEffect(() => {
    document.title = "Montaje | Grinsa Manufacturas";
  }, []);

  return (
    <main className="montaje-page">
      {/* =====================================
          IMAGEN PRINCIPAL
          ===================================== */}
      <section
        className="montaje-hero"
        aria-labelledby="montaje-hero-title"
      >
        <img
          src={imagenPrincipal}
          alt="Estructura metálica instalada dentro de una nave industrial"
          className="montaje-hero-image"
          draggable="false"
          loading="eager"
          fetchPriority="high"
        />

        <div
          className="montaje-hero-overlay"
          aria-hidden="true"
        />

        <div className="montaje-hero-content">
          <h1
            id="montaje-hero-title"
            className="montaje-hero-title"
          >
            Montajes
          </h1>

          <div
            className="montaje-hero-line"
            aria-hidden="true"
          />

          <p className="montaje-hero-description">
            <strong>
              Llevamos la ingeniería al sitio de trabajo. Nuestro
              equipo técnico realiza el ensamblaje y montaje final de
              las estructuras y equipos en la planta o proyecto del
              cliente, garantizando una instalación rápida, eficiente
              y cumpliendo rigurosamente con todas las normativas de
              seguridad industrial. Contamos con personal calificado
              de maniobra e instalación, aplicamos protocolos de
              seguridad y realizamos la integración e interconexión
              en sitio.
            </strong>
          </p>
        </div>
      </section>

      {/* =====================================
          SECCIÓN DE MONTAJE

          Izquierda:
          Imagen de gran tamaño.

          Derecha:
          Cuatro cartas colocadas verticalmente.
          ===================================== */}
      <section
        className="montaje-servicios"
        aria-label="Información sobre servicios de montaje"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">
          <div className="montaje-servicios-grid">
            {/* =================================
                IMAGEN IZQUIERDA
                ================================= */}
            <figure className="montaje-image-wrapper">
              <img
                src={imagenMontaje}
                alt="Montaje de estructuras metálicas en un proyecto industrial"
                className="montaje-section-image"
                loading="lazy"
                draggable="false"
              />

              <div
                className="montaje-image-overlay"
                aria-hidden="true"
              />
            </figure>

            {/* =================================
                CUATRO CARTAS DERECHAS
                ================================= */}
            <div className="montaje-info-container">
              {bloquesMontaje.map((bloque) => (
                <article
                  key={bloque.id}
                  className="montaje-info-card"
                >
                  <h2 className="montaje-info-title">
                    {bloque.titulo}
                  </h2>

                  <div
                    className="montaje-info-line"
                    aria-hidden="true"
                  />

                  <p className="montaje-info-description">
                    {bloque.descripcion}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Montaje;