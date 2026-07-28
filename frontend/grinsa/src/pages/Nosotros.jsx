import { useEffect } from "react";

import "./Nosotros.css";

const imagenPrincipal =
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=85&w=1400&auto=format&fit=crop";

const imagenManufactura =
  "https://www.prudentialuniforms.com/nitropack_static/jjYSMADVCpuzFVVoriolAeVlcnbfKRtu/assets/images/optimized/rev-012a67a/www.prudentialuniforms.com/wp-content/uploads/2015/02/Industrial-Construction-Workers-Wearing-High-Visibility-Jackets-on-the-Job-1024x683.png";

const principios = [
  {
    id: 1,
    titulo: "Misión",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDkEF_jclLmGbCyEWgJaB8b8ctjx25IJ4fBV1SVkG9H_VcQX2_qdExJ2-&s=10",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim, erat vel suscipit facilisis, tortor sapien porttitor libero.",
  },
  {
    id: 2,
    titulo: "Visión",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0kgNVVbzkHAG2y5IyS4qNj5O5DsLt-D0rB1rmmJdOxAVGc3JH2FJ5S8&s=10",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada, nisl vel tincidunt tincidunt, sapien libero malesuada.",
  },
  {
    id: 3,
    titulo: "Valores",
    imagen:
      "https://www.pegaduro.com.mx/img/Pegaduro-Blog/Blog_282.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, mauris sit amet tincidunt feugiat, arcu erat volutpat.",
  },
];

function Nosotros() {
  useEffect(() => {
    document.title = "Grinsa Manufacturas | Nosotros";
  }, []);

  return (
    <main className="nosotros-page">
      {/* =====================================
          IMAGEN PRINCIPAL
          ===================================== */}
      <section
        className="nosotros-hero"
        aria-labelledby="nosotros-hero-title"
      >
        <img
          src={imagenPrincipal}
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
          <h1
            id="nosotros-hero-title"
            className="nosotros-hero-title"
          >
            Sobre nosotros
          </h1>

          <div className="nosotros-hero-line" />

          <p className="nosotros-hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer malesuada, nisl vel tincidunt tincidunt, sapien
            libero malesuada enim, vitae tristique neque erat sed
            justo. Sed consequat, mauris sit amet tincidunt feugiat,
            arcu erat volutpat lorem, vitae posuere justo lorem non
            massa.
          </p>
        </div>
      </section>

      {/* =====================================
          INFORMACIÓN DE LA EMPRESA
          ===================================== */}
      <section
        className="nosotros-info"
        aria-label="Información sobre Grinsa Manufacturas"
      >
        <div className="nosotros-info-container">
          {/* Texto izquierdo */}
          <div className="nosotros-info-content">
            <div className="nosotros-info-line" />

            <p className="nosotros-info-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent dignissim, erat vel suscipit facilisis, tortor
              sapien porttitor libero, vitae scelerisque justo neque
              quis augue. Integer malesuada, nisl vel tincidunt
              tincidunt, sapien libero malesuada enim, vitae tristique
              neque erat sed justo.
            </p>

            <p className="nosotros-info-description">
              Sed consequat, mauris sit amet tincidunt feugiat, arcu
              erat volutpat lorem, vitae posuere justo lorem non massa.
              Donec feugiat, augue vitae malesuada tincidunt, justo
              lacus consectetur nisi, vel malesuada ligula lorem sit
              amet neque.
            </p>

            <p className="nosotros-info-description">
              Sed consequat, mauris sit amet tincidunt feugiat, arcu
              erat volutpat lorem, vitae posuere justo lorem non massa.
              Donec feugiat, augue vitae malesuada tincidunt, justo
              lacus consectetur nisi, vel malesuada ligula lorem sit
              amet neque.
            </p>

            <p className="nosotros-info-description">
              Sed consequat, mauris sit amet tincidunt feugiat, arcu
              erat volutpat lorem, vitae posuere justo lorem non massa.
              Donec feugiat, augue vitae malesuada tincidunt, justo
              lacus consectetur nisi, vel malesuada ligula lorem sit
              amet neque.
            </p>
          </div>

          {/* Imagen derecha */}
          <figure className="nosotros-info-image-wrapper">
            <img
              src={imagenManufactura}
              alt="Trabajadores dentro de una planta de manufactura"
              className="nosotros-info-image"
              draggable="false"
              loading="lazy"
            />
          </figure>
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
            {principios.map((principio) => (
              <div
                key={principio.id}
                className="col"
              >
                <article
                  className="
                    card
                    nosotros-principio-card
                    h-100
                    border-0
                    text-white
                  "
                  style={{
                    backgroundImage: `url("${principio.imagen}")`,
                  }}
                >
                  <div
                    className="
                      card-body
                      nosotros-principio-body
                      d-flex
                      flex-column
                      justify-content-end
                    "
                  >
                    <div className="nosotros-principio-content">
                      <h2 className="card-title nosotros-principio-title">
                        {principio.titulo}
                      </h2>

                      <div className="nosotros-principio-line" />

                      <p className="card-text nosotros-principio-description">
                        {principio.descripcion}
                      </p>
                    </div>
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

export default Nosotros;