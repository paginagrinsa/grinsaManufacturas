import { Route, Routes } from "react-router-dom";

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

import "./App.css";

function App() {
  return (
    <div className="app">
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
          element={<Soluciones />}
        />

        <Route
          path="/soluciones/fabricacion"
          element={<Fabricacion />}
        />

        <Route
          path="/soluciones/superficies"
          element={<Superficies />}
        />

        <Route
          path="/soluciones/embarque"
          element={<Embarque />}
        />

        <Route
          path="/soluciones/montaje"
          element={<Montaje />}
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
          path="/aviso-de-privacidad"
          element={<AvisoPrivacidad />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;