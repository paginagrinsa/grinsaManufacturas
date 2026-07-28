import { useEffect } from "react";

import "./Calidad.css";

const imagenPrincipal =
  "https://mecaluxmx.cdnwm.com/img/blog/control-de-calidad-beneficios.1.11.jpg?imwidth=1024&imdensity=1";

const certificaciones = [
  {
    id: 1,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwmf1Um0ehs4kqQ3DK2eknRkzQ5p1N7z8dQrNRcbj_Mqb2iw-ekLE9PhI&s=10",
    alt: "Procesos industriales certificados",
    
  },
  {
    id: 2,
    imagen:
      "https://minsamexico.com.mx/wp-content/uploads/2021/11/Certificado_Minsa-scaled.jpg",
    alt: "Maquinaria industrial bajo procesos de calidad",
    
  },
  {
    id: 3,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Tv_vX3Xiaq055FcZDqOD2NwKkM4wR3twPNZ0qDJYccdmHyhQlX39yZ1v&s=10",
    alt: "Personal verificando procesos de manufactura",
    
  },
  {
    id: 4,
    imagen:
      "https://pscmexico.mx/wp-content/uploads/2024/07/Certificado-791x1024.jpg",
    alt: "Control y supervisión de calidad industrial",
    
  },
];

const imagenSixSigma =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtT0nw5ZREPPYgWE_db96FaE_HHfqvOWMl8F60fpVZqZcomgJOaC6ad1w&s=10";

function Calidad() {
  useEffect(() => {
    document.title = "Grinsa Manufacturas | Calidad";
  }, []);

  return (
    <main className="calidad-page">
      {/* =====================================
          IMAGEN PRINCIPAL
          ===================================== */}
      <section
        className="calidad-hero"
        aria-labelledby="calidad-hero-title"
      >
        <img
          src={imagenPrincipal}
          alt="Procesos de calidad dentro de una planta industrial"
          className="calidad-hero-image"
          draggable="false"
          loading="eager"
          fetchPriority="high"
        />

        <div
          className="calidad-hero-overlay"
          aria-hidden="true"
        />

        <div className="calidad-hero-content">
          <h1
            id="calidad-hero-title"
            className="calidad-hero-title"
          >
            Calidad
          </h1>

          <div className="calidad-hero-line" />

          <p className="calidad-hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer malesuada, nisl vel tincidunt tincidunt, sapien
            libero malesuada enim, vitae tristique neque erat sed
            justo. Sed consequat, mauris sit amet tincidunt feugiat,
            arcu erat volutpat lorem.
          </p>
        </div>
      </section>

      {/* =====================================
          CERTIFICACIONES
          ===================================== */}
      <section
        className="calidad-certificaciones"
        aria-labelledby="calidad-certificaciones-title"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">
          <div className="calidad-section-heading">
            <h2
              id="calidad-certificaciones-title"
              className="calidad-section-title"
            >
              Certificaciones
            </h2>

            <div className="calidad-section-line" />
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4">
            {certificaciones.map((certificacion) => (
              <div
                key={certificacion.id}
                className="col"
              >
                <article className="card calidad-certificacion-card h-100">
                  <div className="calidad-certificacion-image-wrapper">
                    <img
                      src={certificacion.imagen}
                      alt={certificacion.alt}
                      className="card-img-top calidad-certificacion-image"
                      draggable="false"
                      loading="lazy"
                    />

                    <div className="calidad-certificacion-overlay">
                      <h3 className="calidad-certificacion-name">
                        {certificacion.nombre}
                      </h3>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <p className="calidad-certificaciones-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent dignissim, erat vel suscipit facilisis, tortor
            sapien porttitor libero, vitae scelerisque justo neque
            quis augue. Integer malesuada, nisl vel tincidunt
            tincidunt, sapien libero malesuada enim, vitae tristique
            neque erat sed justo. Sed consequat, mauris sit amet
            tincidunt feugiat, arcu erat volutpat lorem.
          </p>
        </div>
      </section>

      {/* =====================================
          NUESTRO COMPROMISO
          ===================================== */}
      <section
        className="calidad-compromiso"
        aria-labelledby="calidad-compromiso-title"
      >
        <div className="calidad-section-heading">
          <h2
            id="calidad-compromiso-title"
            className="calidad-section-title"
          >
            Nuestro compromiso
          </h2>

          <div className="calidad-section-line" />
        </div>

        <div className="calidad-compromiso-container">
          {/* Texto izquierdo */}
          <div className="calidad-compromiso-content">
           

            <div className="calidad-compromiso-line" />

            <p className="calidad-compromiso-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer malesuada, nisl vel tincidunt tincidunt, sapien
              libero malesuada enim, vitae tristique neque erat sed
              justo. Praesent dignissim, erat vel suscipit facilisis,
              tortor sapien porttitor libero.
            </p>

            <p className="calidad-compromiso-description">
              Sed consequat, mauris sit amet tincidunt feugiat, arcu
              erat volutpat lorem, vitae posuere justo lorem non massa.
              Donec feugiat, augue vitae malesuada tincidunt, justo
              lacus consectetur nisi, vel malesuada ligula lorem sit
              amet neque.
            </p>

            <p className="calidad-compromiso-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas sed erat vitae neque feugiat tincidunt. Donec
              quis magna vitae justo malesuada efficitur.
            </p>

            <p className="calidad-compromiso-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas sed erat vitae neque feugiat tincidunt. Donec
              quis magna vitae justo malesuada efficitur.
            </p>

            <p className="calidad-compromiso-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas sed erat vitae neque feugiat tincidunt. Donec
              quis magna vitae justo malesuada efficitur.
            </p>
          </div>

          {/* Imagen derecha */}
          <figure className="calidad-six-sigma-image-wrapper">
            <img
              src={imagenSixSigma}
              alt="Análisis de datos aplicado a la metodología Six Sigma"
              className="calidad-six-sigma-image"
              draggable="false"
              loading="lazy"
            />

            
          </figure>
        </div>
      </section>

      {/* =====================================
          EQUIPOS DE MEDICIÓN Y CONTROL
          ===================================== */}
      <section
        className="calidad-equipos"
        aria-labelledby="calidad-equipos-title"
      >
        <div className="calidad-equipos-container">
          <h2
            id="calidad-equipos-title"
            className="calidad-equipos-title"
          >
            Equipos de Medición y Control
          </h2>

          <div className="calidad-equipos-line" />

          <p className="calidad-equipos-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer malesuada, nisl vel tincidunt tincidunt, sapien
            libero malesuada enim, vitae tristique neque erat sed
            justo. Sed consequat, mauris sit amet tincidunt feugiat,
            arcu erat volutpat lorem, vitae posuere justo lorem non
            massa.
          </p>

          <p className="calidad-equipos-description">
            Praesent dignissim, erat vel suscipit facilisis, tortor
            sapien porttitor libero, vitae scelerisque justo neque
            quis augue. Donec feugiat, augue vitae malesuada
            tincidunt, justo lacus consectetur nisi, vel malesuada
            ligula lorem sit amet neque.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Calidad;