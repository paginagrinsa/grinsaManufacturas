import { NavLink } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="grinsa-footer">
      {/* =====================================
          CONTENIDO PRINCIPAL DEL FOOTER
          ===================================== */}
      <div className="footer-main container-fluid px-4 px-lg-5">
        <div className="row footer-row">
          {/* =================================
              LOGO E INFORMACIÓN DE LA EMPRESA
              ================================= */}
          <div className="col-12 col-md-4">
            <div className="footer-section text-center text-md-start">
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
              DIRECCIÓN, TELÉFONO Y WHATSAPP
              ================================= */}
          <div className="col-12 col-md-5">
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
                  66062, Cucharas 303 A,
                  <br />
                  Parque Industrial Escobedo,
                  <br />
                  Cdad. Gral. Escobedo, N.L.
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
              HORARIOS
              ================================= */}
          <div className="col-12 col-md-3">
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

            <NavLink
              to="/aviso-de-privacidad"
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