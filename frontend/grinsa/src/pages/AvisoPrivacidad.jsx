

import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./AvisoPrivacidad.css";

function AvisoPrivacidad() {
  useEffect(() => {
    document.title =
      "Aviso de Privacidad | Grinsa Manufacturas";

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <main className="privacidad-page">
      {/* =====================================
          ENCABEZADO
          ===================================== */}
      <section
        className="privacidad-hero"
        aria-labelledby="privacidad-title"
      >
        <div className="container">
          <div className="privacidad-hero-content">
            
            <h1
              id="privacidad-title"
              className="privacidad-title"
            >
              Aviso de Privacidad
            </h1>

            <div
              className="privacidad-title-line"
              aria-hidden="true"
            />

          </div>
        </div>
      </section>

      
    </main>
  );
}

export default AvisoPrivacidad;


