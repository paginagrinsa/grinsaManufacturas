import { useEffect } from "react";

import "./Proyectos.css";

const proyectos = [
  {
    id: 1,
    imagen:
      "https://res.cloudinary.com/tv0z5dnl/image/upload/v1786119251/Imagen2_pieeo8_s654mg.png",
    alt: "Fabricación de una estructura metálica industrial",
  },
  {
    id: 2,
    imagen:
      "https://res.cloudinary.com/tv0z5dnl/image/upload/v1786119250/Imagen3_l9rgkf_wfozhc.png",
    alt: "Maquinaria CNC dentro de una planta industrial",
  },
  {
    id: 3,
    imagen:
      "https://res.cloudinary.com/tv0z5dnl/image/upload/v1786119253/Imagen1_kexxns_iqubov.png",
    alt: "Montaje de una línea de producción industrial",
  },
  {
    id: 4,
    imagen:
      "https://res.cloudinary.com/tv0z5dnl/image/upload/v1786119250/Imagen4_hukyfs_guaffx.png",
    alt: "Manufactura de componentes metálicos",
  },
  {
    id: 5,
    imagen:
      "https://res.cloudinary.com/tv0z5dnl/image/upload/v1786119253/WhatsApp_Image_2026-07-30_at_14.30.49_zjumzj_uvcnf9.jpg",
    alt: "Automatización de procesos dentro de una fábrica",
  },
  {
    id: 6,
    imagen:
      "https://res.cloudinary.com/tv0z5dnl/image/upload/v1786119250/Imagen6_rgnzok_befrjg.png",
    alt: "Construcción de plataforma metálica industrial",
  },
];

function Proyectos() {
  useEffect(() => {
    document.title = "Grinsa Manufacturas | Proyectos";
  }, []);

  return (
    <main className="proyectos-page">
      {/* =====================================
          GALERÍA DE PROYECTOS
          ===================================== */}
      <section
        className="proyectos-gallery"
        aria-labelledby="proyectos-gallery-title"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">
          {/* Encabezado */}
          <div className="proyectos-gallery-heading">
            <h1
              id="proyectos-gallery-title"
              className="proyectos-gallery-title"
            >
              Proyectos realizados
            </h1>

            <div
              className="proyectos-gallery-line"
              aria-hidden="true"
            />
          </div>

          {/* Una imagen por fila en celulares.
              Dos imágenes por fila desde tablets. */}
          <div className="row row-cols-1 row-cols-md-2 g-4 g-xl-5 proyectos-grid">
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.id}
                className="col d-flex"
              >
                <figure className="proyectos-card">
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.alt}
                    className="proyectos-card-image"
                    loading="lazy"
                    draggable="false"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Proyectos;