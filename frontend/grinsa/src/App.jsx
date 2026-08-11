import {
  useEffect,
} from "react";

import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";


import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Soluciones from "./pages/Soluciones";
import Fabricacion from "./pages/Fabricacion";
import Superficies from "./pages/Superficies";
import Embarque from "./pages/Embarque";
import Montaje from "./pages/Montaje";
import Calidad from "./pages/Calidad";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import AvisoPrivacidad from "./pages/AvisoPrivacidad";


import {
  configurarSEO,
} from "./pages/seo";


import "./App.css";


// ==========================================
// SEO DE PÁGINAS INDIVIDUALES DE SERVICIOS
// ==========================================
const seoServicios = {

  "/soluciones/fabricacion": {
    titulo:
      "Fabricación de Acero y Estructuras | Grinsa Manufacturas",

    descripcion:
      "Servicio de fabricación industrial de Grinsa Manufacturas: corte, doblez, rolado, soldadura y fabricación de estructuras y componentes de acero.",

    rutaCanonical:
      "/soluciones/fabricacion",
  },


  "/soluciones/superficies": {
    titulo:
      "Preparación y Recubrimiento de Superficies | Grinsa Manufacturas",

    descripcion:
      "Preparación de superficies, shot blast y aplicación de recubrimientos industriales para proteger componentes metálicos y estructuras de acero.",

    rutaCanonical:
      "/soluciones/superficies",
  },


  "/soluciones/embarque": {
    titulo:
      "Embarque y Logística Industrial | Grinsa Manufacturas",

    descripcion:
      "Soluciones de embarque y logística para piezas industriales, con empaque, sujeción de carga y coordinación de transporte para componentes metálicos.",

    rutaCanonical:
      "/soluciones/embarque",
  },


  "/soluciones/montaje": {
    titulo:
      "Montaje de Estructuras Industriales | Grinsa Manufacturas",

    descripcion:
      "Servicio de montaje industrial de estructuras y equipos en sitio, con personal técnico y procesos orientados a una instalación segura y eficiente.",

    rutaCanonical:
      "/soluciones/montaje",
  },
};


function App() {

  const location =
    useLocation();


  // ==========================================
  // SEO PARA LAS 4 PÁGINAS DE SERVICIOS
  // ==========================================
  useEffect(() => {

    const configuracion =
      seoServicios[
        location.pathname
      ];


    if (!configuracion) {
      return undefined;
    }


    /*
      Se ejecuta en el siguiente frame para
      asegurarnos de que este SEO quede aplicado
      después de cualquier document.title antiguo
      que todavía exista dentro de las páginas
      individuales.
    */
    const frame =
      window.requestAnimationFrame(
        () => {
          configurarSEO(
            configuracion
          );
        }
      );


    return () => {
      window.cancelAnimationFrame(
        frame
      );
    };

  }, [
    location.pathname,
  ]);


  return (
    <div className="app">

      <Header />


      <Routes>

        {/* =====================================
            INICIO
            ===================================== */}
        <Route
          path="/"
          element={
            <Inicio />
          }
        />


        {/* =====================================
            NOSOTROS
            ===================================== */}
        <Route
          path="/nosotros"
          element={
            <Nosotros />
          }
        />


        {/* =====================================
            SOLUCIONES
            ===================================== */}
        <Route
          path="/soluciones"
          element={
            <Soluciones />
          }
        />


        {/* =====================================
            FABRICACIÓN
            ===================================== */}
        <Route
          path="/soluciones/fabricacion"
          element={
            <Fabricacion />
          }
        />


        {/* =====================================
            SUPERFICIES
            ===================================== */}
        <Route
          path="/soluciones/superficies"
          element={
            <Superficies />
          }
        />


        {/* =====================================
            EMBARQUE
            ===================================== */}
        <Route
          path="/soluciones/embarque"
          element={
            <Embarque />
          }
        />


        {/* =====================================
            MONTAJE
            ===================================== */}
        <Route
          path="/soluciones/montaje"
          element={
            <Montaje />
          }
        />


        {/* =====================================
            CALIDAD
            ===================================== */}
        <Route
          path="/calidad"
          element={
            <Calidad />
          }
        />


        {/* =====================================
            PROYECTOS
            ===================================== */}
        <Route
          path="/proyectos"
          element={
            <Proyectos />
          }
        />


        {/* =====================================
            CONTACTO
            ===================================== */}
        <Route
          path="/contacto"
          element={
            <Contacto />
          }
        />


        {/* =====================================
            AVISO DE PRIVACIDAD
            ===================================== */}
        <Route
          path="/aviso-de-privacidad"
          element={
            <AvisoPrivacidad />
          }
        />

      </Routes>


      <Footer />

    </div>
  );
}


export default App;