import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarNavegacion = () => {
    setMenuAbierto(false);
  };

  const alternarMenu = () => {
    setMenuAbierto((estadoActual) => !estadoActual);
  };

  const obtenerClaseEnlace = ({ isActive }) =>
    `nav-link grinsa-nav-link ${
      isActive ? "active grinsa-nav-link-active" : ""
    }`;

  return (
    <>
      {/* Franja decorativa superior */}
      <div className="header-top-line" />

      <header>
        <nav
          className="navbar navbar-expand-lg grinsa-navbar py-0"
          data-bs-theme="dark"
          aria-label="Navegación principal"
        >
          <div className="container-fluid px-3 px-md-4">
            {/* Logo */}
            <NavLink
              to="/"
              className="navbar-brand grinsa-brand p-0 m-0"
              aria-label="Ir al inicio de Grinsa Manufacturas"
              onClick={cerrarNavegacion}
            >
              <img
                src="/logoGrinsa.png"
                alt="Grinsa Manufacturas"
                className="grinsa-logo"
                draggable="false"
              />
            </NavLink>

            {/* Botón del menú móvil */}
            <button
              type="button"
              className="navbar-toggler grinsa-toggler ms-auto border-0 shadow-none"
              aria-label={
                menuAbierto
                  ? "Cerrar menú de navegación"
                  : "Abrir menú de navegación"
              }
              aria-expanded={menuAbierto}
              aria-controls="navegacion-principal"
              onClick={alternarMenu}
            >
              <span className="navbar-toggler-icon" />
            </button>

            {/* Navegación */}
            <div
              id="navegacion-principal"
              className={`collapse navbar-collapse grinsa-navbar-collapse ${
                menuAbierto ? "show" : ""
              }`}
            >
              <ul className="navbar-nav ms-auto mb-0 align-items-lg-stretch gap-lg-4">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    end
                    className={obtenerClaseEnlace}
                    onClick={cerrarNavegacion}
                  >
                    Inicio
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/nosotros"
                    className={obtenerClaseEnlace}
                    onClick={cerrarNavegacion}
                  >
                    Nosotros
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/soluciones"
                    className={obtenerClaseEnlace}
                    onClick={cerrarNavegacion}
                  >
                    Soluciones
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/industrias"
                    className={obtenerClaseEnlace}
                    onClick={cerrarNavegacion}
                  >
                    Industrias
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/calidad"
                    className={obtenerClaseEnlace}
                    onClick={cerrarNavegacion}
                  >
                    Calidad
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/proyectos"
                    className={obtenerClaseEnlace}
                    onClick={cerrarNavegacion}
                  >
                    Proyectos
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/contacto"
                    className={obtenerClaseEnlace}
                    onClick={cerrarNavegacion}
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;