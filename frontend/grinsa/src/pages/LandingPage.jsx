import {
  useEffect,
} from "react";

import {
  FaCogs,
  FaIndustry,
} from "react-icons/fa";

import {
  GiCrane,
} from "react-icons/gi";

import Nosotros from "./Nosotros";
import Calidad from "./Calidad";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";

import {
  configurarSEO,
} from "./seo";

import "./LandingPage.css";


const serviciosPrincipales = [
  {
    id: 1,

    titulo:
      "Procesos de Ingeniería",

    icono:
      FaCogs,

    descripcion: [
      "Asistencia y Diseño de Productos",
      "Diseño de Adimentos",
      "Diseño de Estructuras",
      "Ingeniería de fabricación y montaje",
    ],
  },

  {
    id: 2,

    titulo:
      "Servicios de Fabricación",

    icono:
      FaIndustry,

    descripcion: [
      "Corte Plasma CNC",
      "Oxicorte CNC",
      "Biselado",
      "Corte con sierra",
      "Taladrado",
      "Rolado",
      "Doblez",
      "Armado",
      "Soldadura",
      "Shotblast",
      "Pintura",
    ],
  },

  {
    id: 3,

    titulo:
      "Montaje",

    icono:
      GiCrane,

    descripcion: [
      "Planeación",
      "Pre-ensambles",
      "Entregas secuenciadas",
    ],
  },
];


const soluciones = [
  {
    id: 1,

    nombre:
      "Fabricación",

    imagen:
      "/img/fabricacion1.webp",

    alt:
      "Fabricación de componentes metálicos en una planta industrial",

    descripcion:
      "Transformamos el acero en estructuras y componentes de alta complejidad bajo los más estrictos estándares de calidad. Contamos con tecnología de vanguardia y personal altamente calificado para llevar a cabo procesos de corte, doblez, rolado y soldadura especializada, adaptándonos exactamente a los planos y especificaciones de cada cliente.",
  },

  {
    id: 2,

    nombre:
      "Superficies",

    imagen:
      "/img/superficies1.webp",

    alt:
      "Procesamiento y acabado de superficies metálicas",

    descripcion:
      "Garantizamos la durabilidad de nuestras piezas expuestas a ambientes industriales o de alta corrosión. Realizamos una preparación rigurosa de superficies mediante shot blast con perfil de anclaje y aplicamos sistemas de pintura y recubrimientos industriales de alto desempeño.",
  },

  {
    id: 3,

    nombre:
      "Embarque",

    imagen:
      "/img/embarque1.webp",

    alt:
      "Contenedores y operación de embarque industrial",

    descripcion:
      "Cuidamos cada pieza terminada para asegurar que llegue en perfectas condiciones a su destino final. Diseñamos empaque y soporte de carga a la medida de la pieza, coordinando la logística y el transporte terrestre especializado para maniobras pesadas o de sobredimensión.",
  },

  {
    id: 4,

    nombre:
      "Montaje",

    imagen:
      "/img/montaje1.webp",

    alt:
      "Montaje de estructuras industriales",

    descripcion:
      "Llevamos la ingeniería al sitio de trabajo. Nuestro equipo técnico realiza el ensamblaje y montaje final de las estructuras y equipos en la planta o proyecto del cliente, garantizando una instalación rápida, eficiente y cumpliendo rigurosamente con todas las normativas de seguridad industrial.",
  },
];


function LandingPage() {

  /* ==========================================
     SEO
     ========================================== */
  useEffect(() => {
    configurarSEO({
      titulo:
        "Grinsa Manufacturas | Soluciones de Fabricación Industrial",

      descripcion:
        "Conoce las soluciones de Grinsa Manufacturas en ingeniería, fabricación de acero, superficies, montaje, embarque, calidad y proyectos industriales en Nuevo León.",

      rutaCanonical:
        "/landingpage",
    });
  }, []);


  return (
    <main className="grinsa-landing-page">

      {/* =====================================
          INICIO / HERO
          ===================================== */}
      <section
        id="inicio"
        className="grinsa-landing-hero"
        aria-labelledby="landing-hero-title"
      >

        <img
          src="/img/inicio2.webp"
          alt="Trabajos de fabricación industrial realizados por Grinsa Manufacturas"
          className="grinsa-landing-hero-image"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          draggable="false"
        />


        <div
          className="grinsa-landing-hero-overlay"
          aria-hidden="true"
        />


        <div className="grinsa-landing-container grinsa-landing-hero-content">

          <div className="grinsa-landing-hero-copy">

            <div className="grinsa-landing-hero-brand">
              GRINSA MANUFACTURAS
            </div>


            <div className="grinsa-landing-hero-copy-row">

              <div
                className="grinsa-landing-hero-accent"
                aria-hidden="true"
              />


              <div className="grinsa-landing-hero-copy-body">

                <h1 id="landing-hero-title">
                  Somos una empresa líder en fabricaciones de acero con
                  más de 10 años innovando nuestros procesos y sistemas
                  de calidad. Nuestro compromiso es la satisfacción de
                  nuestros clientes.
                </h1>


                <p className="grinsa-landing-hero-description">
                  Ofrecemos soluciones de fabricación de alto valor,
                  alineando nuestros procesos para satisfacer las
                  necesidades específicas de nuestros clientes en cada
                  segmento del mercado.
                </p>


                <div className="grinsa-landing-hero-actions">

                  <a
                    href="#servicios"
                    className="grinsa-landing-button grinsa-landing-button-primary"
                  >
                    Conoce nuestros servicios
                  </a>


                  <a
                    href="#contacto"
                    className="grinsa-landing-button grinsa-landing-button-secondary"
                  >
                    Solicitar información
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          NOSOTROS
          ===================================== */}
      <section
        id="nosotros"
        className="grinsa-landing-embedded-section"
        aria-label="Nosotros"
      >

        <Nosotros
          embedded
        />

      </section>


      {/* =====================================
          SERVICIOS
          ===================================== */}
      <section
        id="servicios"
        className="grinsa-landing-services"
        aria-labelledby="landing-services-title"
      >

        <div className="grinsa-landing-container">


          {/* =================================
              ENCABEZADO
              ================================= */}
          <div className="grinsa-landing-section-heading">

            <p className="grinsa-landing-eyebrow grinsa-landing-eyebrow-dark">
              SERVICIOS
            </p>


            <h2 id="landing-services-title">
              Nuestros servicios
            </h2>


            <div
              className="grinsa-landing-title-line"
              aria-hidden="true"
            />

          </div>


          {/* =================================
              RESUMEN DE SERVICIOS
              ================================= */}
          <div className="grinsa-landing-service-grid">

            {serviciosPrincipales.map(
              (
                servicio
              ) => {

                const Icono =
                  servicio.icono;

                return (
                  <article
                    key={
                      servicio.id
                    }
                    className="grinsa-landing-service-card"
                  >

                    <div
                      className="grinsa-landing-service-icon"
                      aria-hidden="true"
                    >
                      <Icono />
                    </div>


                    <h3>
                      {
                        servicio.titulo
                      }
                    </h3>


                    <ul>

                      {servicio.descripcion.map(
                        (
                          elemento
                        ) => (
                          <li
                            key={
                              elemento
                            }
                          >
                            {
                              elemento
                            }
                          </li>
                        )
                      )}

                    </ul>

                  </article>
                );
              }
            )}

          </div>


          {/* =================================
              SOLUCIONES
              ================================= */}
          <div className="grinsa-landing-solutions-heading">

            <p className="grinsa-landing-eyebrow grinsa-landing-eyebrow-dark">
              SOLUCIONES
            </p>


            <h2>
              Soluciones integrales para cada etapa del proyecto
            </h2>


            <p>
              Ofrecemos un servicio integral de ingeniería y
              fabricación, garantizando la máxima calidad en cada
              etapa del proyecto, desde la materia prima hasta la
              instalación final en sitio.
            </p>

          </div>


          <div className="grinsa-landing-solutions-grid">

            {soluciones.map(
              (
                solucion,
                indice
              ) => (
                <article
                  key={
                    solucion.id
                  }
                  className="grinsa-landing-solution-card"
                >

                  <div className="grinsa-landing-solution-image-wrapper">

                    <img
                      src={
                        solucion.imagen
                      }
                      alt={
                        solucion.alt
                      }
                      className="grinsa-landing-solution-image"
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


                    <div
                      className="grinsa-landing-solution-overlay"
                      aria-hidden="true"
                    />

                  </div>


                  <div className="grinsa-landing-solution-body">

                    <h3>
                      {
                        solucion.nombre
                      }
                    </h3>


                    <div
                      className="grinsa-landing-card-line"
                      aria-hidden="true"
                    />


                    <p>
                      {
                        solucion.descripcion
                      }
                    </p>


                    <a
                      href="#contacto"
                      className="grinsa-landing-card-cta"
                    >
                      Solicitar información
                    </a>

                  </div>

                </article>
              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================
          CALIDAD
          ===================================== */}
      <section
        id="calidad"
        className="grinsa-landing-embedded-section"
        aria-label="Calidad"
      >

        <Calidad
          embedded
        />

      </section>


      {/* =====================================
          PROYECTOS
          ===================================== */}
      <section
        id="proyectos"
        className="grinsa-landing-embedded-section"
        aria-label="Proyectos"
      >

        <Proyectos
          embedded
        />

      </section>


      {/* =====================================
          CONTACTO
          ===================================== */}
      <section
        id="contacto"
        className="grinsa-landing-embedded-section"
        aria-label="Contacto"
      >

        <Contacto
          embedded
          landingMode
        />

      </section>

    </main>
  );
}


export default LandingPage;