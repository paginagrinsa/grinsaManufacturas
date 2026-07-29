import { NavLink } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="grinsa-footer">
      {/* Contenido principal del footer */}
      <div className="footer-main container-fluid px-4 px-lg-5">
        <div className="row footer-row">
          {/* Logo e información de la empresa */}
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

          {/* Dirección y teléfono */}
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
                  href="https://www.google.com/maps/search/?api=1&query=De+La+Fundici%C3%B3n+333%2C+Parque+Industrial+Escobedo%2C+66062%2C+General+Escobedo%2C+Nuevo+Le%C3%B3n"
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
               
                  className="footer-phone-link"
                >
                   81 4838 7696
                </a>

                <p className="footer-contact-label footer-phone-label">
                  WhatsApp
                </p>

                <a
                  
                  className="footer-phone-link"
                >
                   81 3605 4006
                </a>
              </address>
            </div>
          </div>

          {/* Horarios */}
          <div className="col-12 col-md-3">
            <div className="footer-section text-center text-md-start">
              <h2 className="footer-title">
                Horarios de atención
              </h2>

              <div className="footer-schedule">
                <p className="footer-schedule-time">
                  9:00 a.m. - 6:00 p.m.
                </p>

                <p className="footer-schedule-days">
                  Lunes a viernes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="container-fluid px-4 px-lg-5">
          <p className="mb-0 text-center">
            © 2026 Grinsa Manufacturas. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;