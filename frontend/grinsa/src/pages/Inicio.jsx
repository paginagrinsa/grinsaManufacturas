import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import {
  FaCogs,
  FaIndustry,
} from "react-icons/fa";

import { GiCrane } from "react-icons/gi";

import "./Inicio.css";

const diapositivas = [
  {
    id: 1,
    imagen:
      "https://res.cloudinary.com/geurbdzo/image/upload/v1785272557/WhatsApp_Image_2026-07-28_at_14.59.00_2_qmehaz.jpg",
    alt: "Foto 1",
  },
  {
    id: 2,
    imagen:
      "https://res.cloudinary.com/geurbdzo/image/upload/v1785278631/WhatsApp_Image_2026-07-28_at_16.25.49_f741qr.jpg",
    alt: "Foto 2",
  },
  {
    id: 3,
    imagen:
      "https://res.cloudinary.com/geurbdzo/image/upload/v1785278631/WhatsApp_Image_2026-07-28_at_16.29.34_zjv3jv.jpg",
    alt: "Foto 3",
  },
];

const servicios = [
  {
    id: 1,
    titulo: "Procesos de Ingeniería",
    icono: FaCogs,
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
    icono: FaIndustry,
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
    titulo: "Montaje",
    icono: GiCrane,
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
      {/* =====================================
          CARRUSEL PRINCIPAL
          ===================================== */}
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

      {/* =====================================
          ACERCA DE GRINSA
          ===================================== */}
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
            Somos una empresa líder en fabricaciones de acero con más
            de 10 años innovando nuestros procesos y sistemas de
            calidad. Nuestro compromiso es la satisfacción de nuestros
            clientes.
          </p>
        </div>
      </section>

      {/* =====================================
          SERVICIOS
          ===================================== */}
      <section
        className="inicio-services"
        aria-labelledby="inicio-services-title"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">
          <div className="inicio-services-heading">
            <h2
              id="inicio-services-title"
              className="inicio-services-title"
            >
              Nuestros servicios
            </h2>

            <div className="inicio-services-line" />
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            {servicios.map((servicio) => {
              const IconoServicio = servicio.icono;

              return (
                <div
                  key={servicio.id}
                  className="col"
                >
                  <article className="card inicio-service-card h-100">
                    {/* Icono circular estilo Durosa */}
                    <div className="inicio-service-icon-area">
                      <div
                        className="inicio-service-icon-circle"
                        aria-hidden="true"
                      >
                        <IconoServicio className="inicio-service-icon" />
                      </div>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================
          CONTACTO A TODO EL ANCHO
          ===================================== */}
      <section
        className="inicio-contact-cta"
        aria-labelledby="inicio-contact-title"
      >
        <article className="inicio-cta-panel inicio-cta-contact">
          <div className="inicio-cta-content">
            <p className="inicio-cta-eyebrow">
              Estamos para ayudarte
            </p>

            <h2
              id="inicio-contact-title"
              className="inicio-cta-title"
            >
              Contacto
            </h2>

            <div className="inicio-cta-line" />

            <p className="inicio-cta-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer malesuada, nisl vel tincidunt tincidunt, sapien
              libero malesuada enim, vitae tristique neque erat sed
              justo.
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
      </section>
    </main>
  );
}

export default Inicio;