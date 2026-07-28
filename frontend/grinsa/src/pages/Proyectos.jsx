import { useEffect } from "react";

import "./Proyectos.css";

const proyectos = [
  {
    id: 1,
    titulo: "Lorem ipsum lorem ipsum",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOGEVVHR-X70y8VmY2UyHfPDlPNx_NSS5VVvcygGwWgCoyv8_KMnOw84&s=10",
    alt: "Fabricación de una estructura metálica industrial",
  },
  {
    id: 2,
    titulo: "Lorem ipsum lorem ipsum",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4VsR__ZFhA3jWB2p0Nzisz6WKFIkUdIG-sgw4JgZiHMMgWRCkxA2iMvc&s=10",
    alt: "Maquinaria CNC dentro de una planta industrial",
  },
  {
    id: 3,
    titulo: "Lorem ipsum lorem ipsum",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxsuniO5hJD2YgY2LMJ437utW92IjqBygORwYkWNH76nB0S_tKmozS8M&s=10",
    alt: "Montaje de una línea de producción industrial",
  },
  {
    id: 4,
    titulo: "Lorem ipsum lorem ipsum",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7K3wo5Smyk4gmSSD3dcW3iFLL98URWlvM6pXuHWIw_D37oPqOUCwh6aQ&s=10",
    alt: "Manufactura de componentes metálicos",
  },
  {
    id: 5,
    titulo: "Lorem ipsum lorem ipsum",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGfgVRyjNRhHQRJAtiLrr0xwzJ4Vif8-VuvWrYztaqLfZLcgAOnwrCUG8&s=10",
    alt: "Automatización de procesos dentro de una fábrica",
  },
  {
    id: 6,
    titulo: "Lorem ipsum lorem ipsum",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRt2cEk6SyqzXOSi1NGzp1NObkgstDSIuXAEesKLWINp9U6vkptkRljE4&s=10",
    alt: "Construcción de plataforma metálica industrial",
  },
  
];

function Proyectos() {
  useEffect(() => {
    document.title = "Grinsa Manufacturas | Proyectos";
  }, []);

  return (
    <main className="proyectos-page">
      {/* Imagen principal */}
   

      {/* Galería de proyectos */}
      <section
        className="proyectos-gallery"
        aria-labelledby="proyectos-gallery-title"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">
          <div className="proyectos-gallery-heading">
            <h2
              id="proyectos-gallery-title"
              className="proyectos-gallery-title"
            >
              Proyectos realizados
            </h2>

            <div className="proyectos-gallery-line" />

            <p className="proyectos-gallery-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent dignissim, erat vel suscipit facilisis, tortor
              sapien porttitor libero, vitae scelerisque justo neque
              quis augue.
            </p>
          </div>

          {/* Dos columnas y cinco filas */}
          <div className="row row-cols-1 row-cols-md-2 g-4 g-xl-5">
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.id}
                className="col"
              >
                <article className="card proyectos-card h-100">
                  <div className="proyectos-card-image-wrapper">
                    <img
                      src={proyecto.imagen}
                      alt={proyecto.alt}
                      className="card-img-top proyectos-card-image"
                      loading="lazy"
                      draggable="false"
                    />

                    <div
                      className="proyectos-card-overlay"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="card-body proyectos-card-body">
                    <span className="proyectos-card-number">
                      Proyecto {String(proyecto.id).padStart(2, "0")}
                    </span>

                    <h3 className="card-title proyectos-card-title">
                      {proyecto.titulo}
                    </h3>

                    <div className="proyectos-card-line" />
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

export default Proyectos;