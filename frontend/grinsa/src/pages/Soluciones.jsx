import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Soluciones.css";

const servicios = [
  {
    id: 1,
    nombre: "Fabricación",
    ruta: "/soluciones/fabricacion",
    imagen:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
    alt: "Fabricación de componentes metálicos en una planta industrial",
  },
  {
    id: 2,
    nombre: "Superficies",
    ruta: "/soluciones/superficies",
    imagen:
      "https://www.igesur.com/wp-content/uploads/2023/10/como-preparar-superficies-metalicas-para-pintar.jpg",
    alt: "Procesamiento y acabado de superficies metálicas",
  },
  {
    id: 3,
    nombre: "Embarque",
    ruta: "/soluciones/embarque",
    imagen:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Contenedores y operación de embarque industrial",
  },
  {
    id: 4,
    nombre: "Montaje",
    ruta: "/soluciones/montaje",
    imagen:
      "https://emingenieria.com.mx/wp-content/uploads/2025/04/Bodega-y-Almacen-METAL-2000.jpg",
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