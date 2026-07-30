import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [submenuSolucionesAbierto, setSubmenuSolucionesAbierto] =
    useState(false);

  const cerrarNavegacion = () => {
    setMenuAbierto(false);
    setSubmenuSolucionesAbierto(false);
  };

  const alternarMenu = () => {
    setMenuAbierto((estadoActual) => {
      const nuevoEstado = !estadoActual;

      if (!nuevoEstado) {
        setSubmenuSolucionesAbierto(false);
      }

      return nuevoEstado;
    });
  };

  const alternarSubmenuSoluciones = () => {
    setSubmenuSolucionesAbierto((estadoActual) => !estadoActual);
  };

  const obtenerClaseEnlace = ({ isActive }) =>
    `nav-link grinsa-nav-link ${
      isActive ? "active grinsa-nav-link-active" : ""
    }`;

  const obtenerClaseEnlaceSoluciones = ({ isActive }) =>
    `nav-link grinsa-nav-link ${
      isActive ? "active grinsa-nav-link-active" : ""
    }`;

  return (
    <>
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

            {/* Botón de navegación móvil */}
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

                {/* Dropdown de soluciones */}
                <li
                  className={`nav-item grinsa-dropdown ${
                    submenuSolucionesAbierto
                      ? "grinsa-dropdown-open"
                      : ""
                  }`}
                  onKeyDown={(evento) => {
                    if (evento.key === "Escape") {
                      setSubmenuSolucionesAbierto(false);
                    }
                  }}
                >
                  <div className="grinsa-dropdown-trigger">
                    <NavLink
                      to="/soluciones"
                      className={obtenerClaseEnlaceSoluciones}
                      onClick={cerrarNavegacion}
                    >
                      Soluciones
                    </NavLink>

                    <button
                      type="button"
                      className="grinsa-dropdown-toggle"
                      aria-label={
                        submenuSolucionesAbierto
                          ? "Cerrar opciones de soluciones"
                          : "Mostrar opciones de soluciones"
                      }
                      aria-expanded={submenuSolucionesAbierto}
                      aria-controls="submenu-soluciones"
                      onClick={alternarSubmenuSoluciones}
                    >
                      <span
                        className="grinsa-dropdown-arrow"
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  <ul
                    id="submenu-soluciones"
                    className="grinsa-dropdown-menu"
                    aria-label="Servicios de Grinsa Manufacturas"
                  >
                    <li>
                      <NavLink
                        to="/soluciones/fabricacion"
                        className="grinsa-dropdown-item"
                        onClick={cerrarNavegacion}
                      >
                        Fabricación
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/soluciones/superficies"
                        className="grinsa-dropdown-item"
                        onClick={cerrarNavegacion}
                      >
                        Superficies
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/soluciones/embarque"
                        className="grinsa-dropdown-item"
                        onClick={cerrarNavegacion}
                      >
                        Embarque
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/soluciones/montaje"
                        className="grinsa-dropdown-item"
                        onClick={cerrarNavegacion}
                      >
                        Montaje
                      </NavLink>
                    </li>
                  </ul>
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