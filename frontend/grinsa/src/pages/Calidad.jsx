import { useEffect } from "react";

import "./Calidad.css";

function Calidad() {
  useEffect(() => {
    document.title =
      "Sistema de Gestión de Calidad | Grinsa Manufacturas";
  }, []);

  return (
    <main className="calidad-page">
      {/* =====================================
          ENCABEZADO PRINCIPAL
          ===================================== */}
      <section
        className="calidad-encabezado"
        aria-labelledby="calidad-title"
      >
        <div className="container">
          <div className="calidad-encabezado-content">
            <h1
              id="calidad-title"
              className="calidad-encabezado-title"
            >
              Sistema de Gestión de Calidad
            </h1>

            <div
              className="calidad-encabezado-line"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* =====================================
          CONTENIDO DEL SISTEMA DE CALIDAD
          ===================================== */}
      <section
        className="calidad-sistema"
        aria-label="Procesos del Sistema de Gestión de Calidad"
      >
        <div className="container-fluid px-3 px-md-4 px-xl-5">
          <div className="calidad-grid">
            {/* =================================
                CHECKLIST DE PAILERÍA
                ================================= */}
            <article className="calidad-card calidad-card-principal">
              <header className="calidad-card-header">
                <h2 className="calidad-card-title">
                  Checklist calidad std. pailería
                </h2>
              </header>

              <div
                className="calidad-card-line"
                aria-hidden="true"
              />

              <ul className="calidad-lista">
                <li>
                  <strong>Habilitado</strong>

                  <ul className="calidad-sublista">
                    <li>
                      <strong>Corte:</strong> dimensiones, cuadratura,
                      conicidad y ovalamiento de barrenos, inspección
                      visual de muescas.
                    </li>

                    <li>
                      <strong>Barrenado:</strong> trazo, dimensiones y
                      rebabeo.
                    </li>

                    <li>
                      <strong>Rolado:</strong> dimensiones y
                      ovalamiento.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Armado:</strong> dimensiones, cuadratura,
                  paralelismo y camber.
                </li>

                <li>
                  <strong>Soldadura:</strong> inspección visual,
                  líquidos penetrantes, inspección de pandeamiento y
                  camber.
                </li>

                <li>
                  Llenado de registro dimensional, planos baloneados y
                  baloneo de soldadura.
                </li>

                <li>Perfil de anclaje sand blast.</li>

                <li>Inspección visual de primer y acabado.</li>

                <li>
                  Inspección de espesores de primer y acabado con
                  positector.
                </li>
              </ul>
            </article>

            {/* =================================
                CHECKLIST DE MAQUINADOS
                ================================= */}
            <article className="calidad-card calidad-card-principal">
              <header className="calidad-card-header">
                <h2 className="calidad-card-title">
                  Checklist calidad std. maquinados
                </h2>
              </header>

              <div
                className="calidad-card-line"
                aria-hidden="true"
              />

              <ul className="calidad-lista">
                <li>Dimensiones según plano.</li>

                <li>
                  Inspección visual de acabado y rebabeo.
                </li>

                <li>Llenado de registro dimensional.</li>

                <li>
                  Inspección de premaquinado previo a soldadura en
                  ensambles.
                </li>

                <li>
                  Inspección de dimensiones protegidas para tratamiento
                  térmico y rectificado.
                </li>
              </ul>
            </article>

            {/* =================================
                PROCEDIMIENTOS
                ================================= */}
            <article className="calidad-card">
              <header className="calidad-card-header">
                <h2 className="calidad-card-title">
                  Procedimientos
                </h2>
              </header>

              <div
                className="calidad-card-line"
                aria-hidden="true"
              />

              <ul className="calidad-lista">
                <li>
                  <strong>Preproducción</strong>

                  <ul className="calidad-sublista">
                    <li>PPAP / master producción y calidad.</li>

                    <li>Proceso de compras.</li>

                    <li>Proceso de recepción de material.</li>
                  </ul>
                </li>

                <li>Producción y mantenimiento.</li>
              </ul>
            </article>

            {/* =================================
                TRAZABILIDAD Y CERTIFICADOS
                ================================= */}
            <article className="calidad-card">
              <header className="calidad-card-header">
                <h2 className="calidad-card-title">
                  Trazabilidad y certificados
                </h2>
              </header>

              <div
                className="calidad-card-line"
                aria-hidden="true"
              />

              <ul className="calidad-lista">
                <li>Certificados de materia prima.</li>

                <li>Certificados de pintura.</li>

                <li>Certificados de tratamiento térmico.</li>

                <li>
                  Certificado de tarima y embalaje con calidad de
                  exportación.
                </li>

                <li>
                  <strong>Procesos</strong>

                  <ul className="calidad-sublista">
                    <li>
                      <strong>Soldadores:</strong> número de estampa.
                    </li>

                    <li>
                      <strong>Pintores:</strong> registro de preparación
                      y aplicación.
                    </li>
                  </ul>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Calidad;