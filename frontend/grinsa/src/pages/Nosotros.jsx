import { useEffect } from "react";

import { configurarSEO } from "./seo";

import "./Nosotros.css";


const imagenPrincipal =
  "https://www.cetys.mx/educon/wp-content/uploads/2021/08/safety-Image-scaled.jpg";


const imagenManufactura =
  "https://www.prudentialuniforms.com/nitropack_static/jjYSMADVCpuzFVVoriolAeVlcnbfKRtu/assets/images/optimized/rev-012a67a/www.prudentialuniforms.com/wp-content/uploads/2015/02/Industrial-Construction-Workers-Wearing-High-Visibility-Jackets-on-the-Job-1024x683.png";


const principios = [
  {
    id: 1,

    titulo: "Misión",

    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDkEF_jclLmGbCyEWgJaB8b8ctjx25IJ4fBV1SVkG9H_VcQX2_qdExJ2-&s=10",

    alt:
      "Trabajador realizando procesos de soldadura industrial",

    descripcion:
      "Fabricar piezas y componentes de acero de alta precisión con los mejores estándares de calidad, superando las expectativas de nuestros clientes a través de procesos eficientes, tecnología de vanguardia y un equipo humano altamente capacitado, impulsando así el desarrollo industrial y competitivo de nuestros aliados comerciales.",
  },

  {
    id: 2,

    titulo: "Visión",

    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0kgNVVbzkHAG2y5IyS4qNj5O5DsLt-D0rB1rmmJdOxAVGc3JH2FJ5S8&s=10",

    alt:
      "Trabajador industrial observando una planta de manufactura",

    descripcion:
      "Ser consolidados como una empresa líder en el sector de la manufactura y transformación del acero a nivel regional y nacional, reconocidos por nuestra innovación tecnológica, confiabilidad operativa, puntualidad en las entregas y por establecer relaciones comerciales sostenibles a largo plazo.",
  },

  {
    id: 3,

    titulo: "Valores",

    imagen:
      "https://www.pegaduro.com.mx/img/Pegaduro-Blog/Blog_282.jpg",

    alt:
      "Equipo de trabajadores dentro de una planta industrial",

    valores: [
      {
        id: 1,

        nombre:
          "Calidad y Precisión",

        descripcion:
          "Nos aseguramos de que cada pieza cumpla con las especificaciones, tolerancias y estándares requeridos por nuestros clientes.",
      },

      {
        id: 2,

        nombre:
          "Compromiso y Confiabilidad",

        descripcion:
          "Cumplimos lo que prometemos. Garantizamos tiempos de entrega puntuales y transparencia en cada proyecto.",
      },

      {
        id: 3,

        nombre:
          "Innovación Operativa",

        descripcion:
          "Buscamos continuamente optimizar nuestros procesos de manufactura mediante el uso eficiente de la tecnología y la mejora continua.",
      },

      {
        id: 4,

        nombre:
          "Seguridad",

        descripcion:
          "Priorizamos la integridad física y el bienestar de nuestro personal en el taller y en todas las áreas administrativas.",
      },

      {
        id: 5,

        nombre:
          "Trabajo en Equipo",

        descripcion:
          "Fomentamos la colaboración, la comunicación abierta y el respeto mutuo entre nuestro personal para alcanzar metas comunes.",
      },
    ],
  },
];


function Nosotros({ embedded = false }) {

  // ==========================================
  // SEO
  // ==========================================
  useEffect(() => {
    if (embedded) {
      return undefined;
    }

    configurarSEO({
      titulo:
        "Nosotros | Grinsa Manufacturas",

      descripcion:
        "Conoce Grinsa Manufacturas, empresa especializada en fabricación de piezas y componentes de acero con enfoque en calidad, precisión y entregas confiables.",

      rutaCanonical:
        "/nosotros",
    });
  }, [embedded]);


  const PageWrapper = embedded ? "div" : "main";
  const HeadingTag = embedded ? "h2" : "h1";


  return (
    <PageWrapper className="nosotros-page">
      {/* =====================================
          IMAGEN PRINCIPAL
          ===================================== */}
      <section
        className="nosotros-hero"
        aria-labelledby="nosotros-hero-title"
      >
        <img
          src={
            imagenPrincipal
          }
          alt="Equipo de trabajo dentro de una planta industrial"
          className="nosotros-hero-image"
          draggable="false"
          loading="eager"
          fetchPriority="high"
        />

        <div
          className="nosotros-hero-overlay"
          aria-hidden="true"
        />

        <div className="nosotros-hero-content">
          <HeadingTag
            id="nosotros-hero-title"
            className="nosotros-hero-title"
          >
            Sobre nosotros
          </HeadingTag>

          <div className="nosotros-hero-line" />

          <p className="nosotros-hero-description">
            <strong>
              En Grinsa Manufacturas nos
              especializamos en la
              fabricación de piezas y
              componentes de acero para
              el sector industrial. Nos
              enfocamos en ofrecer
              soluciones precisas y
              funcionales que se adaptan
              a las necesidades operativas
              de cada cliente. Contamos
              con la infraestructura y el
              equipo técnico necesario
              para asegurar procesos de
              manufactura eficientes.
              Nuestro principal compromiso
              es la calidad de nuestro
              trabajo, el cumplimiento de
              las especificaciones
              requeridas y la puntualidad
              en los tiempos de entrega.
              Buscamos construir relaciones
              de trabajo duraderas basadas
              en la confianza, la
              transparencia y el respaldo
              constante a la cadena de
              suministro de nuestros
              clientes.
            </strong>
          </p>
        </div>
      </section>


      {/* =====================================
          MISIÓN, VISIÓN Y VALORES
          ===================================== */}
      <section
        className="nosotros-principios"
        aria-label="Misión, visión y valores"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {principios.map(
              (
                principio
              ) => {
                const contieneValores =
                  Array.isArray(
                    principio.valores
                  ) &&
                  principio.valores
                    .length > 0;

                return (
                  <div
                    key={
                      principio.id
                    }
                    className="col"
                  >
                    <article
                      className={`
                        card
                        nosotros-principio-card
                        h-100
                        ${
                          contieneValores
                            ? "nosotros-principio-card-valores"
                            : ""
                        }
                      `}
                    >
                      <div className="nosotros-principio-image-wrapper">
                        <img
                          src={
                            principio.imagen
                          }
                          alt={
                            principio.alt
                          }
                          className="card-img-top nosotros-principio-image"
                          loading="lazy"
                          draggable="false"
                        />
                      </div>

                      <div
                        className={`
                          card-body
                          nosotros-principio-body
                          ${
                            contieneValores
                              ? "nosotros-principio-body-valores"
                              : ""
                          }
                        `}
                      >
                        <h2 className="card-title nosotros-principio-title">
                          {
                            principio.titulo
                          }
                        </h2>

                        <div className="nosotros-principio-line" />

                        {contieneValores ? (
                          <div className="nosotros-valores-list">
                            {principio.valores.map(
                              (
                                valor
                              ) => (
                                <p
                                  key={
                                    valor.id
                                  }
                                  className="nosotros-valor-item"
                                >
                                  <strong>
                                    {
                                      valor.nombre
                                    }
                                    :
                                  </strong>{" "}
                                  {
                                    valor.descripcion
                                  }
                                </p>
                              )
                            )}
                          </div>
                        ) : (
                          <p className="card-text nosotros-principio-description">
                            {
                              principio.descripcion
                            }
                          </p>
                        )}
                      </div>
                    </article>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}


export default Nosotros;
