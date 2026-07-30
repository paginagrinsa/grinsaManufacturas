import { useEffect } from "react";

import "./Fabricacion.css";

const imagenPrincipal =
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop";

const serviciosFabricacion = [
  {
    id: 1,
    titulo: "Lorem Ipsum",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eget magna fermentum tincidunt.",
    imagen:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop",
    alt: "Foto 1",
  },
  {
    id: 2,
    titulo: "Lorem Ipsum",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eget magna fermentum tincidunt.",
    imagen:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop",
    alt: "Foto 2",
  },
  {
    id: 3,
    titulo: "Lorem Ipsum",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eget magna fermentum tincidunt.",
    imagen:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop",
    alt: "Foto 3",
  },
  {
    id: 4,
    titulo: "Lorem Ipsum",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eget magna fermentum tincidunt.",
    imagen:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop",
    alt: "Foto 4",
  },
  {
    id: 5,
    titulo: "Lorem Ipsum",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eget magna fermentum tincidunt.",
    imagen:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop",
    alt: "Foto 5",
  },
  {
    id: 6,
    titulo: "Lorem Ipsum",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eget magna fermentum tincidunt.",
    imagen:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop",
    alt: "Foto 6",
  },
];

function Fabricacion() {
  useEffect(() => {
    document.title = "Fabricación | Grinsa Manufacturas";
  }, []);

  return (
    <main className="fabricacion-page">
      {/* =====================================
          IMAGEN PRINCIPAL
          ===================================== */}
      <section
        className="fabricacion-hero"
        aria-labelledby="fabricacion-hero-title"
      >
        <img
          src={imagenPrincipal}
          alt="Procesos de fabricación industrial en acero"
          className="fabricacion-hero-image"
          draggable="false"
          loading="eager"
          fetchPriority="high"
        />

        <div
          className="fabricacion-hero-overlay"
          aria-hidden="true"
        />

        <div className="fabricacion-hero-content">
          <h1
            id="fabricacion-hero-title"
            className="fabricacion-hero-title"
          >
            Fabricación
          </h1>

          <div
            className="fabricacion-hero-line"
            aria-hidden="true"
          />

          <p className="fabricacion-hero-description">
            <strong>
              Transformamos el acero en estructuras y componentes de
              alta complejidad bajo los más estrictos estándares de
              calidad. Contamos con tecnología de vanguardia y
              personal altamente calificado para llevar a cabo
              procesos de corte, doblez, rolado y soldadura
              especializada, adaptándonos exactamente a los planos y
              especificaciones de cada cliente.
            </strong>
          </p>
        </div>
      </section>

      {/* =====================================
          INTRODUCCIÓN
          ===================================== */}
      <section
        className="fabricacion-introduccion"
        aria-labelledby="fabricacion-introduccion-title"
      >
        <div className="container">
          <div className="fabricacion-introduccion-content">
            <h2
              id="fabricacion-introduccion-title"
              className="fabricacion-introduccion-title"
            >
              Lorem Ipsum
            </h2>

            <div
              className="fabricacion-introduccion-line"
              aria-hidden="true"
            />

            <p className="fabricacion-introduccion-description">
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
          TARJETAS
          ===================================== */}
      <section
        className="fabricacion-servicios"
        aria-label="Servicios de fabricación"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 fabricacion-grid">
            {serviciosFabricacion.map((servicio) => (
              <div
                key={servicio.id}
                className="col d-flex"
              >
                <article className="card fabricacion-card h-100">
                  <div className="fabricacion-card-image-wrapper">
                    <img
                      src={servicio.imagen}
                      alt={servicio.alt}
                      className="card-img-top fabricacion-card-image"
                      loading="lazy"
                      draggable="false"
                    />

                    <div
                      className="fabricacion-card-overlay"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="card-body fabricacion-card-body">
                    <h3 className="card-title fabricacion-card-title">
                      {servicio.titulo}
                    </h3>

                    <div
                      className="fabricacion-card-line"
                      aria-hidden="true"
                    />

                    <p className="card-text fabricacion-card-description">
                      {servicio.descripcion}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Fabricacion;