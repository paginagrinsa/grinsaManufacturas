import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./Inicio.css";

const diapositivas = [
  {
    id: 1,
    imagen:
      "https://plus.unsplash.com/premium_photo-1682141563888-e64fd5b66e4d?q=85&w=2000&auto=format&fit=crop",
    alt: "Maquinaria y procesos industriales",
  },
  {
    id: 2,
    imagen:
      "https://images.unsplash.com/photo-1721622045835-51a5447f281c?q=85&w=2000&auto=format&fit=crop",
    alt: "Instalaciones industriales",
  },
  {
    id: 3,
    imagen:
      "https://plus.unsplash.com/premium_photo-1723759401659-7984c69b1b18?q=85&w=2000&auto=format&fit=crop",
    alt: "Proceso de manufactura industrial",
  },
  {
    id: 4,
    imagen:
      "https://images.unsplash.com/photo-1609627016501-b862497c7294?q=85&w=2000&auto=format&fit=crop",
    alt: "Equipo utilizado en manufactura",
  },
];

const servicios = [
  {
    id: 1,
    titulo: "Procesos de Ingeniería",
    imagen:
      "https://www.boberry-mach.com/wp-content/uploads/2025/07/Medium-Gears.webp",
    alt: "Ingeniero trabajando en procesos de diseño industrial",
    descripcion: [
      "Asistencia de diseño de producto",
      "Ingeniería y diseño de recipientes a presión con código ASME",
      "Diseño de aditamentos y herramientas",
      "Detallado de estructuras metálicas",
      "Ingeniería de fabricación y montaje",
      "Programación CNC",
    ],
  },
  {
    id: 2,
    titulo: "Servicios de Fabricación",
    imagen:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=85&w=1200&auto=format&fit=crop",
    alt: "Procesos de fabricación dentro de una planta industrial",
    descripcion: [
      "Corte Plasma HD",
      "Oxicorte CNC",
      "Biselado",
      "Corte con sierra y guillotina",
      "Punzonado y taladrado",
      "Rolado",
      "Doblez",
      "Enderezado",
    ],
  },
  {
    id: 3,
    titulo: "Maquinados de Precisión",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ85R7tNiOMpkBfNHXS0c2pPRunMsjpdBb5tfrpq2jyjWOKLqIPhqpQGdM&s=10",
    alt: "Maquinaria industrial para trabajos de precisión",
    descripcion: [
      "Pre-maquinado",
      "Maquinado semi-final",
      "Maquinado de acabado final",
    ],
  },
  {
    id: 4,
    titulo: "Montaje",
    imagen:
      "https://www.estructurasmetalicascolombia.com/images/montaje_estructuras/construccion/montaje_de_diferentes_tipos_de_estructuras_metalicas_en_bogota_colombia.jpg",
    alt: "Montaje de estructuras y maquinaria industrial",
    descripcion: [
      "Planeación",
      "Pre-ensambles",
      "Entregas secuenciadas",
      "Administración de proyectos",
    ],
  },
];

function Inicio() {
  const [diapositivaActual, setDiapositivaActual] = useState(0);
  const [carruselPausado, setCarruselPausado] = useState(false);

  useEffect(() => {
    document.title = "Grinsa Manufacturas";
  }, []);

  useEffect(() => {
    if (carruselPausado) {
      return undefined;
    }

    const intervalo = window.setInterval(() => {
      setDiapositivaActual((indiceActual) =>
        indiceActual === diapositivas.length - 1
          ? 0
          : indiceActual + 1
      );
    }, 5000);

    return () => {
      window.clearInterval(intervalo);
    };
  }, [carruselPausado]);

  const mostrarDiapositivaAnterior = () => {
    setDiapositivaActual((indiceActual) =>
      indiceActual === 0
        ? diapositivas.length - 1
        : indiceActual - 1
    );
  };

  const mostrarDiapositivaSiguiente = () => {
    setDiapositivaActual((indiceActual) =>
      indiceActual === diapositivas.length - 1
        ? 0
        : indiceActual + 1
    );
  };

  const seleccionarDiapositiva = (indice) => {
    setDiapositivaActual(indice);
  };

  return (
    <main className="inicio-page">
      {/* Carrusel principal */}
      <section
        className="inicio-carousel"
        aria-roledescription="carrusel"
        aria-label="Galería principal de Grinsa Manufacturas"
        onMouseEnter={() => setCarruselPausado(true)}
        onMouseLeave={() => setCarruselPausado(false)}
      >
        <div className="inicio-carousel-slides">
          {diapositivas.map((diapositiva, indice) => (
            <article
              key={diapositiva.id}
              className={`inicio-carousel-slide ${
                indice === diapositivaActual
                  ? "inicio-carousel-slide-active"
                  : ""
              }`}
              aria-hidden={indice !== diapositivaActual}
            >
              <img
                src={diapositiva.imagen}
                alt={diapositiva.alt}
                className="inicio-carousel-image"
                draggable="false"
                loading={indice === 0 ? "eager" : "lazy"}
                fetchPriority={indice === 0 ? "high" : "auto"}
              />
            </article>
          ))}
        </div>

        <button
          type="button"
          className="
            inicio-carousel-control
            inicio-carousel-control-left
          "
          aria-label="Mostrar imagen anterior"
          onClick={mostrarDiapositivaAnterior}
        >
          <FiChevronLeft aria-hidden="true" />
        </button>

        <button
          type="button"
          className="
            inicio-carousel-control
            inicio-carousel-control-right
          "
          aria-label="Mostrar imagen siguiente"
          onClick={mostrarDiapositivaSiguiente}
        >
          <FiChevronRight aria-hidden="true" />
        </button>

        <div
          className="inicio-carousel-indicators"
          aria-label="Seleccionar imagen"
        >
          {diapositivas.map((diapositiva, indice) => (
            <button
              key={diapositiva.id}
              type="button"
              className={`inicio-carousel-indicator ${
                indice === diapositivaActual
                  ? "inicio-carousel-indicator-active"
                  : ""
              }`}
              aria-label={`Mostrar imagen ${indice + 1}`}
              aria-current={
                indice === diapositivaActual
                  ? "true"
                  : undefined
              }
              onClick={() => seleccionarDiapositiva(indice)}
            />
          ))}
        </div>
      </section>

      {/* Acerca de Grinsa */}
      <section
        className="inicio-about"
        aria-labelledby="inicio-about-title"
      >
        <div className="inicio-about-container">
          <h2
            id="inicio-about-title"
            className="inicio-about-title"
          >
            Acerca de Grinsa
          </h2>

          <div className="inicio-about-line" />

          <p className="inicio-about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer malesuada, nisl vel tincidunt tincidunt, sapien
            libero malesuada enim, vitae tristique neque erat sed
            justo. Sed consequat, mauris sit amet tincidunt feugiat,
            arcu erat volutpat lorem, vitae posuere justo lorem non
            massa. Praesent dignissim, erat vel suscipit facilisis,
            tortor sapien porttitor libero, vitae scelerisque justo
            neque quis augue.
          </p>
        </div>
      </section>

      {/* Servicios y soluciones */}
      <section
        className="inicio-services"
        aria-labelledby="inicio-services-title"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">
          <div className="inicio-services-heading">
            <p className="inicio-services-eyebrow">
              Nuestros servicios
            </p>

            <h2
              id="inicio-services-title"
              className="inicio-services-title"
            >
              Fabricación y Soluciones de Maquinado
            </h2>

            <div className="inicio-services-line" />

            <p className="inicio-services-intro">
              Ofrecemos soluciones industriales integrales para
              diferentes etapas de ingeniería, fabricación, maquinado
              y montaje.
            </p>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
            {servicios.map((servicio) => (
              <div
                key={servicio.id}
                className="col"
              >
                <article className="card inicio-service-card h-100">
                  <div className="inicio-service-image-wrapper">
                    <img
                      src={servicio.imagen}
                      alt={servicio.alt}
                      className="card-img-top inicio-service-image"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>

                  <div className="card-body inicio-service-body">
                    <h3 className="card-title inicio-service-title">
                      {servicio.titulo}
                    </h3>

                    <ul className="inicio-service-list">
                      {servicio.descripcion.map((elemento) => (
                        <li key={elemento}>
                          {elemento}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto y equipos de maquinado */}
      <section
        className="inicio-dual-cta"
        aria-label="Contacto y capacidades de maquinado"
      >
        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* Columna de contacto */}
            <div className="col-12 col-lg-6 d-flex">
              <article className="inicio-cta-panel inicio-cta-contact">
                <div className="inicio-cta-content">
                  <p className="inicio-cta-eyebrow">
                    Estamos para ayudarte
                  </p>

                  <h2 className="inicio-cta-title">
                    Contacto
                  </h2>

                  <div className="inicio-cta-line" />

                  <p className="inicio-cta-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Integer malesuada, nisl vel tincidunt
                    tincidunt, sapien libero malesuada enim, vitae
                    tristique neque erat sed justo.
                  </p>

                  <NavLink
                    to="/contacto"
                    className="
                      inicio-cta-button
                      inicio-cta-button-light
                    "
                  >
                    Contactar a Grinsa
                    <FiArrowRight aria-hidden="true" />
                  </NavLink>
                </div>
              </article>
            </div>

            {/* Columna de equipos */}
            <div className="col-12 col-lg-6 d-flex">
              <article className="inicio-cta-panel inicio-cta-machining">
                <div className="inicio-cta-content">
                  <p className="inicio-cta-eyebrow">
                    Tecnología y precisión
                  </p>

                  <h2 className="inicio-cta-title">
                    Equipos de Maquinado
                  </h2>

                  <div className="inicio-cta-line" />

                  <p className="inicio-cta-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Praesent dignissim, erat vel suscipit
                    facilisis, tortor sapien porttitor libero, vitae
                    scelerisque justo neque quis augue.
                  </p>

                  <NavLink
                    to="/soluciones"
                    className="
                      inicio-cta-button
                      inicio-cta-button-outline
                    "
                  >
                    Capacidades de Maquinado
                    <FiArrowRight aria-hidden="true" />
                  </NavLink>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Inicio;