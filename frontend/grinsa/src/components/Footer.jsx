import { NavLink } from "react-router-dom";

import "./Footer.css";

function Footer({ landingMode = false }) {
  return (
    <footer className="grinsa-footer">
      {/* =====================================
          CONTENIDO PRINCIPAL DEL FOOTER
          ===================================== */}
      <div className="footer-main container-fluid px-4 px-lg-5">
        <div className="row footer-row g-4 g-xl-5">
          {/* =================================
              LOGO E INFORMACIÓN DE LA EMPRESA
              ================================= */}
          <div className="col-12 col-md-6 col-xl-3">
            <div className="footer-section text-center text-md-start">
              {landingMode ? (
                <a
                  href="/landingpage#inicio"
                  className="footer-logo-link"
                  aria-label="Ir al inicio de la Landing Page de Grinsa Manufacturas"
                >
                  <img
                    src="/logo.png"
                    alt="Logotipo de Grinsa Manufacturas"
                    className="footer-logo"
                    draggable="false"
                  />
                </a>
              ) : (
                <NavLink
                  to="/"
                  className="footer-logo-link"
                  aria-label="Ir al inicio de Grinsa Manufacturas"
                >
                  <img
                    src="/logo.png"
                    alt="Logotipo de Grinsa Manufacturas"
                    className="footer-logo"
                    draggable="false"
                  />
                </NavLink>
              )}

              <h2 className="footer-company-name">
                Grinsa Manufacturas
              </h2>

              <p className="footer-description">
                Soluciones de manufactura para las necesidades de
                nuestros clientes y de la industria.
              </p>
            </div>
          </div>

          {/* =================================
              CONTACTO
              ================================= */}
          <div className="col-12 col-md-6 col-xl-3">
            <div className="footer-section text-center text-md-start">
              <h2 className="footer-title">
                Contacto
              </h2>

              <address className="footer-address">
                <p className="footer-contact-label">
                  Dirección
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Cucharas+303+A%2C+Parque+Industrial+Escobedo%2C+66062%2C+General+Escobedo%2C+Nuevo+Le%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-link"
                >
                  Cucharas 303 A,
                  <br />
                  Parque Industrial Escobedo,
                  <br />
                  Cdad. Gral. Escobedo, N.L, 66062.
                </a>

                <p className="footer-contact-label footer-phone-label">
                  Teléfono
                </p>

                <a
                  href="tel:+528148387696"
                  className="footer-phone-link"
                  aria-label="Llamar al teléfono 81 4838 7696"
                >
                  81 4838 7696
                </a>

                <p className="footer-contact-label footer-phone-label">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/528136054006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-phone-link"
                  aria-label="Enviar mensaje por WhatsApp al 81 3605 4006"
                >
                  81 3605 4006
                </a>
              </address>
            </div>
          </div>

          {/* =================================
              UBICACIÓN / GOOGLE MAPS
              ================================= */}
          <div className="col-12 col-md-6 col-xl-3 footer-map-column">
            <div className="footer-section footer-location-section text-center text-md-start">
              <h2 className="footer-title">
                Ubicación
              </h2>

              <div className="footer-map-wrapper">
                <iframe
                  className="footer-map"
                  title="Ubicación de Grinsa Manufacturas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.705733462501!2d-100.35398828866555!3d25.813280477224968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662918023b06603%3A0x21992865193d5d46!2sCucharas%20303%2C%20Parque%20Industrial%20Escobedo%2C%2066062%20Cdad.%20Gral.%20Escobedo%2C%20N.L.!5e0!3m2!1ses!2smx!4v1785347398687!5m2!1ses!2smx"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Cucharas+303+A%2C+Parque+Industrial+Escobedo%2C+66062%2C+General+Escobedo%2C+Nuevo+Le%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-link"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>

          {/* =================================
              HORARIOS
              ================================= */}
          <div className="col-12 col-md-6 col-xl-3">
            <div className="footer-section text-center text-md-start">
              <h2 className="footer-title">
                Horarios de atención
              </h2>

              <div className="footer-schedule">
                <p className="footer-schedule-time">
                  8:00 a.m. - 6:00 p.m.
                </p>

                <p className="footer-schedule-days">
                  Lunes a viernes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================
          COPYRIGHT Y AVISO DE PRIVACIDAD
          ===================================== */}
      <div className="footer-bottom">
        <div className="container-fluid px-4 px-lg-5">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2026 Grinsa Manufacturas. Todos los derechos
              reservados.
            </p>

            {landingMode && (
              <a
                href="/landingpage#inicio"
                className="footer-privacy-link"
              >
                Inicio
              </a>
            )}

            <NavLink
              to={
                landingMode
                  ? "/aviso-de-privacidad?origen=landing"
                  : "/aviso-de-privacidad"
              }
              className={({ isActive }) =>
                `footer-privacy-link ${
                  isActive ? "footer-privacy-link-active" : ""
                }`
              }
              aria-label="Consultar el Aviso de Privacidad de Grinsa Manufacturas"
            >
              Aviso de Privacidad
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
