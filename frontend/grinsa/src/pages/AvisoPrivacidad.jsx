

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

      {/* =====================================
          CONTENIDO DEL AVISO
          ===================================== */}
      <section className="privacidad-content">
        <div className="container">
          <div className="privacidad-layout">
            {/* =================================
                ÍNDICE
                ================================= */}
            <aside
              className="privacidad-index"
              aria-label="Contenido del aviso de privacidad"
            >
              <h2>Contenido</h2>

              <nav>
                <a href="#responsable">
                  1. Responsable
                </a>

                <a href="#datos">
                  2. Datos recopilados
                </a>

                <a href="#finalidades">
                  3. Finalidades
                </a>

                <a href="#correo">
                  4. Envío por correo
                </a>

                <a href="#transferencias">
                  5. Transferencias
                </a>

                <a href="#conservacion">
                  6. Conservación
                </a>

                <a href="#limitar">
                  7. Limitar el tratamiento
                </a>

                <a href="#arco">
                  8. Derechos ARCO
                </a>

                <a href="#revocacion">
                  9. Revocación
                </a>

                <a href="#seguridad">
                  10. Seguridad
                </a>

                <a href="#cambios">
                  11. Cambios al aviso
                </a>
              </nav>
            </aside>

            {/* =================================
                TEXTO DEL AVISO
                ================================= */}
            <div className="privacidad-document">
              {/* Responsable */}
              <article
                id="responsable"
                className="privacidad-section"
              >
                <span className="privacidad-section-number">
                  01
                </span>

                <h2>Identidad y domicilio del responsable</h2>

                <div className="privacidad-section-line" />

                <p>
                  <strong>Grinsa Manufacturas</strong>, en adelante
                  “el Responsable”, es responsable del tratamiento,
                  protección y uso de los datos personales recabados
                  mediante el formulario de contacto disponible en
                  este sitio web.
                </p>

                <div className="privacidad-address-card">
                  <strong>Domicilio del Responsable</strong>

                  <address>
                    Cucharas 303 A,
                    <br />
                    Parque Industrial Escobedo,
                    <br />
                    C.P. 66062,
                    <br />
                    Ciudad General Escobedo, Nuevo León, México.
                  </address>

                  <p>
                    <strong>Teléfono:</strong>{" "}
                    <a href="tel:+528148387696">
                      81 4838 7696
                    </a>
                  </p>
                </div>
              </article>

              {/* Datos personales */}
              <article
                id="datos"
                className="privacidad-section"
              >
                <span className="privacidad-section-number">
                  02
                </span>

                <h2>Datos personales que recopilamos</h2>

                <div className="privacidad-section-line" />

                <p>
                  Cuando una persona utiliza el formulario de
                  contacto, podremos recopilar las siguientes
                  categorías de información:
                </p>

                <ul className="privacidad-list">
                  <li>Nombre de la persona interesada.</li>
                  <li>Nombre de la empresa, cuando se proporcione.</li>
                  <li>Dirección de correo electrónico.</li>
                  <li>Número telefónico.</li>
                  <li>
                    Información incluida voluntariamente dentro del
                    campo de mensaje.
                  </li>
                
                </ul>

                
              </article>

              {/* Finalidades */}
              <article
                id="finalidades"
                className="privacidad-section"
              >
                <span className="privacidad-section-number">
                  03
                </span>

                <h2>Finalidades del tratamiento</h2>

                <div className="privacidad-section-line" />

                <p>
                  Los datos personales serán utilizados para las
                  siguientes finalidades primarias y necesarias:
                </p>

                <ul className="privacidad-list">
                  <li>
                    Recibir y procesar solicitudes enviadas mediante
                    el formulario de contacto.
                  </li>

                  <li>
                    Enviar la información proporcionada a una cuenta
                    de correo electrónico autorizada de Grinsa
                    Manufacturas.
                  </li>

                  <li>
                    Identificar y contactar a clientes potenciales.
                  </li>

                  <li>
                    Dar seguimiento a solicitudes de información,
                    cotización o colaboración.
                  </li>

                  <li>
                    Comunicarse por correo electrónico, llamada
                    telefónica o WhatsApp cuando resulte necesario
                    para atender la solicitud.
                  </li>


                </ul>

                <p>
                  Los datos recabados mediante este formulario no
                  serán utilizados para finalidades publicitarias
                  distintas de la atención y seguimiento de la
                  solicitud, salvo que posteriormente se obtenga el
                  consentimiento correspondiente.
                </p>
              </article>

              {/* Envío por correo */}
              <article
                id="correo"
                className="privacidad-section"
              >
                <span className="privacidad-section-number">
                  04
                </span>

                <h2>Envío y recepción de la información por correo</h2>

                <div className="privacidad-section-line" />

                <p>
                  La información capturada en el formulario podrá ser
                  procesada por el servidor del sitio web y enviada
                  por correo electrónico a las cuentas autorizadas
                  por Grinsa Manufacturas para que su personal pueda
                  revisar la solicitud y ponerse en contacto con la
                  persona interesada.
                </p>

                <p>
                  Como resultado de este proceso, los datos podrán
                  permanecer temporalmente almacenados en el servidor,
                  en registros técnicos de seguridad y en la bandeja
                  de correo electrónico del Responsable.
                </p>
              </article>

              {/* Transferencias */}
              <article
                id="transferencias"
                className="privacidad-section"
              >
                <span className="privacidad-section-number">
                  05
                </span>

                <h2>Proveedores y transferencias de datos</h2>

                <div className="privacidad-section-line" />

                <p>
                  El Responsable podrá utilizar proveedores
                  tecnológicos que presten servicios de alojamiento,
                  infraestructura, seguridad, transmisión y entrega de
                  correo electrónico. Dichos proveedores tratarán la
                  información por cuenta del Responsable y únicamente
                  para permitir la operación del formulario y de los
                  servicios relacionados.
                </p>

                <p>
                  Grinsa Manufacturas no venderá, rentará ni
                  comercializará los datos personales proporcionados
                  mediante el formulario.
                </p>

                <p>
                  No se realizarán transferencias a terceros ajenos a
                  las finalidades señaladas, salvo cuando sean
                  necesarias para cumplir una obligación legal, una
                  orden emitida por autoridad competente o para la
                  defensa de derechos del Responsable.
                </p>
              </article>

              {/* Conservación */}
              <article
                id="conservacion"
                className="privacidad-section"
              >
                <span className="privacidad-section-number">
                  06
                </span>

                <h2>Periodo de conservación</h2>

                <div className="privacidad-section-line" />

                <p>
                  Los datos serán conservados durante el tiempo
                  necesario para atender la solicitud, mantener el
                  seguimiento comercial correspondiente y cumplir las
                  obligaciones legales o contractuales relacionadas.
                </p>

                <p>
                  Cuando la información deje de ser necesaria, será
                  eliminada, suprimida o sometida a un periodo de
                  bloqueo, según corresponda y de acuerdo con las
                  obligaciones aplicables.
                </p>
              </article>

              {/* Limitación */}
              <article
                id="limitar"
                className="privacidad-section"
              >
                <span className="privacidad-section-number">
                  07
                </span>

                <h2>
                  Medios para limitar el uso o divulgación
                </h2>

                <div className="privacidad-section-line" />

                <p>
                  La persona titular puede solicitar que Grinsa
                  Manufacturas limite el uso o divulgación de sus
                  datos personales mediante cualquiera de los
                  siguientes medios:
                </p>

                <ul className="privacidad-list">
                  <li>
                    Presentando una solicitud escrita en el domicilio
                    del Responsable.
                  </li>

                  <li>
                    Utilizando el formulario de contacto e indicando
                    al inicio del mensaje la frase:
                    <strong>
                      {" "}“Solicitud de limitación de datos
                      personales”.
                    </strong>
                  </li>

                  <li>
                    Comunicándose al teléfono indicado en este aviso
                    para solicitar orientación sobre el procedimiento.
                  </li>
                </ul>
              </article>

              {/* ARCO */}
              <article
                id="arco"
                className="privacidad-section"
              >
                <span className="privacidad-section-number">
                  08
                </span>

                <h2>Derechos ARCO</h2>

                <div className="privacidad-section-line" />

                <p>
                  La persona titular o su representante legal puede
                  ejercer en cualquier momento los derechos de:
                </p>

                <div className="privacidad-arco-grid">
                  <div className="privacidad-arco-card">
                    <strong>Acceso</strong>

                    <p>
                      Conocer qué datos personales conserva el
                      Responsable y cómo son utilizados.
                    </p>
                  </div>

                  <div className="privacidad-arco-card">
                    <strong>Rectificación</strong>

                    <p>
                      Solicitar la corrección de datos inexactos,
                      incompletos o desactualizados.
                    </p>
                  </div>

                  <div className="privacidad-arco-card">
                    <strong>Cancelación</strong>

                    <p>
                      Solicitar que los datos sean eliminados cuando
                      ya no resulten necesarios.
                    </p>
                  </div>

                  <div className="privacidad-arco-card">
                    <strong>Oposición</strong>

                    <p>
                      Solicitar que cese el tratamiento por una causa
                      legítima.
                    </p>
                  </div>
                </div>

                <h3>Presentación de la solicitud</h3>

                <p>
                  La solicitud podrá presentarse físicamente en el
                  domicilio del Responsable o mediante el formulario
                  de contacto, escribiendo al inicio del mensaje:
                  <strong> “Solicitud de derechos ARCO”.</strong>
                </p>

                <p>
                  La solicitud deberá contener, como mínimo:
                </p>

                <ol className="privacidad-number-list">
                  <li>
                    Nombre de la persona titular y un medio para
                    recibir notificaciones.
                  </li>

                  <li>
                    Documentos que permitan acreditar su identidad o,
                    en su caso, la representación legal.
                  </li>

                  <li>
                    Descripción clara de los datos personales sobre
                    los que desea ejercer el derecho.
                  </li>

                  <li>
                    Indicación del derecho que desea ejercer y la
                    acción solicitada.
                  </li>

                  <li>
                    Cualquier documento o elemento que facilite la
                    localización de los datos.
                  </li>
                </ol>

                <p>
                  Cuando se solicite una rectificación, deberán
                  indicarse las modificaciones requeridas y
                  acompañarse la documentación que sustente la
                  solicitud.
                </p>

                <p>
                  El Responsable comunicará la determinación adoptada
                  dentro del plazo legal aplicable y, cuando resulte
                  procedente, hará efectivo el derecho solicitado
                  dentro del plazo correspondiente.
                </p>

                <Link
                  to="/contacto"
                  className="privacidad-contact-button"
                >
                  Ir al formulario de contacto
                </Link>
              </article>

              {/* Revocación */}
              <article
                id="revocacion"
                className="privacidad-section"
              >
                <span className="privacidad-section-number">
                  09
                </span>

                <h2>Revocación del consentimiento</h2>

                <div className="privacidad-section-line" />

                <p>
                  La persona titular podrá revocar su consentimiento
                  para el tratamiento de sus datos personales
                  utilizando los mismos medios establecidos para el
                  ejercicio de los derechos ARCO.
                </p>

                <p>
                  La revocación no tendrá efectos retroactivos ni
                  impedirá que el Responsable conserve la información
                  que deba mantener para cumplir obligaciones legales,
                  contractuales o atender responsabilidades derivadas
                  del tratamiento.
                </p>
              </article>

              {/* Seguridad */}
              <article
                id="seguridad"
                className="privacidad-section"
              >
                <span className="privacidad-section-number">
                  10
                </span>

                <h2>Medidas de seguridad</h2>

                <div className="privacidad-section-line" />

                <p>
                  Grinsa Manufacturas procurará mantener medidas
                  administrativas, técnicas y físicas razonables para
                  proteger los datos personales contra daño, pérdida,
                  alteración, destrucción, acceso, divulgación o
                  tratamiento no autorizado.
                </p>

                <p>
                  El acceso a los mensajes enviados mediante el
                  formulario deberá limitarse al personal autorizado
                  que requiera la información para atender las
                  solicitudes recibidas.
                </p>
              </article>

              {/* Cambios */}
              <article
                id="cambios"
                className="privacidad-section"
              >
                <span className="privacidad-section-number">
                  11
                </span>

                <h2>Cambios al aviso de privacidad</h2>

                <div className="privacidad-section-line" />

                <p>
                  Grinsa Manufacturas podrá actualizar este aviso para
                  reflejar cambios en sus prácticas, servicios,
                  procesos internos, proveedores tecnológicos o
                  disposiciones legales aplicables.
                </p>

                <p>
                  Las modificaciones serán publicadas en esta misma
                  página. La fecha de actualización mostrada en la
                  parte superior permitirá identificar la versión más
                  reciente.
                </p>
              </article>

              {/* Consentimiento */}
              <article className="privacidad-consent">
                <h2>Consentimiento</h2>

                <p>
                  Al marcar la casilla correspondiente y enviar el
                  formulario de contacto, la persona usuaria reconoce
                  que ha leído este aviso y autoriza el tratamiento de
                  sus datos para las finalidades aquí descritas.
                </p>
              </article>

              <div className="privacidad-back">
                <Link to="/contacto">
                  ← Regresar a contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AvisoPrivacidad;


