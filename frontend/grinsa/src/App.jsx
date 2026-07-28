import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Calidad from "./pages/Calidad";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";

function Pagina({
  titulo,
  descripcion,
  tituloDocumento,
}) {
  useEffect(() => {
    document.title = tituloDocumento;
  }, [tituloDocumento]);

  return (
    <main
      className="flex-grow-1"
      style={{
        minHeight: "calc(100vh - 101px)",
        padding: "55px 24px",
        backgroundColor: "#f4f4f4",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          margin: "0 0 20px",
          color: "#0b2232",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: "700",
        }}
      >
        {titulo}
      </h1>

      {descripcion && (
        <p
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            color: "#555555",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          {descripcion}
        </p>
      )}
    </main>
  );
}

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Inicio />}
        />

        <Route
          path="/nosotros"
          element={<Nosotros />}
        />

        <Route
          path="/soluciones"
          element={
            <Pagina
              titulo="Soluciones"
              descripcion="Conoce las soluciones de manufactura que ofrecemos para nuestros clientes."
              tituloDocumento="Grinsa Manufacturas | Soluciones"
            />
          }
        />

        <Route
          path="/industrias"
          element={
            <Pagina
              titulo="Industrias"
              descripcion="Trabajamos con diferentes sectores industriales y procesos de manufactura."
              tituloDocumento="Grinsa Manufacturas | Industrias"
            />
          }
        />

        <Route
          path="/calidad"
          element={<Calidad />}
        />

        <Route
          path="/proyectos"
          element={<Proyectos />}
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />

        <Route
          path="*"
          element={
            <Pagina
              titulo="Página no encontrada"
              descripcion="La página que intentas visitar no existe."
              tituloDocumento="Grinsa Manufacturas | Página no encontrada"
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;