import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Soluciones.css";

const servicios = [
  {
    id: 1,
    nombre: "Fabricación",
    ruta: "/soluciones/fabricacion",
    imagen:
      "https://res.cloudinary.com/geurbdzo/image/upload/v1785437059/WhatsApp_Image_2026-07-30_at_12.31.52_x1ycmg.jpg",
    alt: "Fabricación de componentes metálicos en una planta industrial",
  },
  {
    id: 2,
    nombre: "Superficies",
    ruta: "/soluciones/superficies",
    imagen:
      "https://res.cloudinary.com/geurbdzo/image/upload/v1785452764/Captura_de_pantalla_2026-07-30_170302_uqiknz.png",
    alt: "Procesamiento y acabado de superficies metálicas",
  },
  {
    id: 3,
    nombre: "Embarque",
    ruta: "/soluciones/embarque",
    imagen:
      "https://res.cloudinary.com/geurbdzo/image/upload/v1785444207/WhatsApp_Image_2026-07-30_at_14.31.24_iqsamf.jpg",
    alt: "Contenedores y operación de embarque industrial",
  },
  {
    id: 4,
    nombre: "Montaje",
    ruta: "/soluciones/montaje",
    imagen:
      "https://res.cloudinary.com/geurbdzo/image/upload/v1785540406/Imagen1_kmlueh.jpg",
    alt: "Montaje de estructuras industriales",
  },
];

function Soluciones() {
  useEffect(() => {
    document.title = "Soluciones | Grinsa Manufacturas";
  }, []);

  return (
    <main className="soluciones-page">
      {/* =====================================
          SECCIÓN DE SOLUCIONES
          ===================================== */}
      <section
        className="soluciones-servicios"
        aria-labelledby="servicios-title"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">
          {/* =====================================
              ENCABEZADO
              ===================================== */}
          <div className="soluciones-heading">
            <h1
              id="servicios-title"
              className="soluciones-section-title"
            >
              Soluciones
            </h1>

            <div
              className="soluciones-section-line"
              aria-hidden="true"
            />

            <p className="soluciones-intro-text">
              <b>
                Ofrecemos un servicio integral de ingeniería y
                fabricación, garantizando la máxima calidad en cada
                etapa del proyecto, desde la materia prima hasta la
                instalación final en sitio.
              </b>
            </p>
          </div>

          {/* =====================================
              TARJETAS DE SERVICIOS

              Una tarjeta por fila en celulares.
              Dos tarjetas por fila desde tablets.
              ===================================== */}
          <div className="row row-cols-1 row-cols-md-2 g-4 g-xl-5 soluciones-grid">
            {servicios.map((servicio) => (
              <div
                key={servicio.id}
                className="col d-flex"
              >
                <Link
                  to={servicio.ruta}
                  className="solucion-card-link"
                  aria-label={`Conocer el servicio de ${servicio.nombre}`}
                >
                  <article className="card solucion-card h-100">
                    {/* Imagen */}
                    <div className="solucion-image-wrapper">
                      <img
                        src={servicio.imagen}
                        alt={servicio.alt}
                        className="card-img-top solucion-image"
                        loading="lazy"
                        draggable="false"
                      />

                      <div
                        className="solucion-image-overlay"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Título */}
                    <div className="card-body solucion-card-body">
                      <h2 className="card-title solucion-card-title">
                        {servicio.nombre}
                      </h2>

                      <div
                        className="solucion-card-line"
                        aria-hidden="true"
                      />
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Soluciones;