import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./AvisoPrivacidad.css";

function AvisoPrivacidad() {
  useEffect(() => {
    document.title =
      "Grinsa Manufacturas | Aviso de Privacidad";

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
            <p className="privacidad-eyebrow">
              Protección de datos personales
            </p>

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

            <p className="privacidad-intro">
              En Grinsa Manufacturas reconocemos la importancia
              de proteger la información personal de nuestros
              clientes, prospectos y usuarios. En este documento
              explicamos qué datos podemos recabar, para qué los
              utilizamos y los derechos que puede ejercer respecto
              de ellos.
            </p>

            <p className="privacidad-update">
              Última actualización: 7 de agosto de 2026
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          CONTENIDO
          ===================================== */}
      <section className="privacidad-content">
        <div className="privacidad-layout">
          {/* =====================================
              ÍNDICE
              ===================================== */}
          <aside
            className="privacidad-index"
            aria-label="Índice del aviso de privacidad"
          >
            <h2>Contenido</h2>

            <nav>
              <a href="#responsable">
                1. Responsable
              </a>

              <a href="#datos-personales">
                2. Datos personales
              </a>

              <a href="#finalidades">
                3. Finalidades
              </a>

              <a href="#datos-sensibles">
                4. Datos sensibles
              </a>

              <a href="#proveedores">
                5. Proveedores
              </a>

              <a href="#transferencias">
                6. Transferencias
              </a>

              <a href="#informacion-tecnica">
                7. Información técnica
              </a>

              <a href="#cookies">
                8. Cookies
              </a>

              <a href="#limitacion">
                9. Limitación
              </a>

              <a href="#derechos-arco">
                10. Derechos ARCO
              </a>

              <a href="#revocacion">
                11. Revocación
              </a>

              <a href="#conservacion">
                12. Conservación
              </a>

              <a href="#seguridad">
                13. Seguridad
              </a>

              <a href="#modificaciones">
                14. Modificaciones
              </a>

              <a href="#contacto">
                15. Contacto
              </a>
            </nav>
          </aside>

          {/* =====================================
              DOCUMENTO
              ===================================== */}
          <article className="privacidad-document">
            {/* =====================================
                1. RESPONSABLE
                ===================================== */}
            <section
              id="responsable"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 01
              </span>

              <h2>
                Identidad y domicilio del responsable
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                En cumplimiento de la legislación aplicable en
                materia de protección de datos personales,{" "}
                <strong>
                  Grupo Interiores S.A. de C.V.
                </strong>
                , comercialmente conocido como{" "}
                <strong>Grinsa Manufacturas</strong>, es
                responsable del tratamiento, uso y protección
                de los datos personales recabados a través del
                sitio web{" "}
                <strong>grinsamanufacturas.mx</strong> y de los
                medios de contacto relacionados con el mismo.
              </p>

              <div className="privacidad-address-card">
                <strong>
                  Datos del responsable
                </strong>

                <address>
                  Grupo Interiores S.A. de C.V.
                  <br />
                  Grinsa Manufacturas
                  <br />
                  Ángel Martínez Villarreal #637 B
                  <br />
                  Col. Chepevera
                  <br />
                  C.P. 64030
                  <br />
                  Monterrey, Nuevo León, México
                </address>

                <p>
                  Correo electrónico:{" "}
                  <a href="mailto:ee@grinsa.mx">
                    ee@grinsa.mx
                  </a>
                </p>
              </div>
            </section>

            {/* =====================================
                2. DATOS PERSONALES
                ===================================== */}
            <section
              id="datos-personales"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 02
              </span>

              <h2>
                Datos personales que recabamos
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                A través del formulario de contacto disponible
                en nuestro sitio web, Grinsa Manufacturas podrá
                recabar los siguientes datos personales:
              </p>

              <ul className="privacidad-list">
                <li>Nombre.</li>
                <li>
                  Nombre de la empresa u organización.
                </li>
                <li>Correo electrónico.</li>
                <li>Número telefónico.</li>
                <li>
                  Información proporcionada voluntariamente por
                  el usuario en el campo de mensaje.
                </li>
              </ul>

              <p>
                Asimismo, durante comunicaciones posteriores
                relacionadas con una solicitud de información,
                cotización, proyecto o prestación de servicios,
                el titular podrá proporcionar voluntariamente
                otros datos necesarios para atender su
                solicitud.
              </p>
            </section>

            {/* =====================================
                3. FINALIDADES
                ===================================== */}
            <section
              id="finalidades"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 03
              </span>

              <h2>
                Finalidades del tratamiento
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                Los datos personales recabados serán utilizados
                para las siguientes finalidades primarias:
              </p>

              <ul className="privacidad-list">
                <li>
                  Recibir y responder mensajes enviados mediante
                  el formulario de contacto.
                </li>

                <li>
                  Atender solicitudes de información relacionadas
                  con los productos o servicios de Grinsa
                  Manufacturas.
                </li>

                <li>
                  Establecer comunicación con clientes y
                  potenciales clientes.
                </li>

                <li>
                  Elaborar, enviar y dar seguimiento a
                  cotizaciones, propuestas o solicitudes
                  comerciales.
                </li>

                <li>
                  Dar seguimiento a requerimientos relacionados
                  con proyectos, productos o servicios.
                </li>

                <li>
                  Gestionar, cuando corresponda, la contratación
                  y prestación de productos o servicios
                  solicitados.
                </li>

                <li>
                  Mantener comunicación relacionada con
                  relaciones comerciales existentes.
                </li>

                <li>
                  Atender dudas, aclaraciones, solicitudes de
                  servicio o comunicaciones posteriores.
                </li>

                <li>
                  Cumplir obligaciones legales o contractuales
                  derivadas de una relación comercial.
                </li>
              </ul>

              <p>
                Los datos personales no serán utilizados para
                finalidades incompatibles con las señaladas en
                este Aviso de Privacidad sin informar
                previamente al titular y, cuando resulte
                necesario conforme a la legislación aplicable,
                obtener su consentimiento.
              </p>
            </section>

            {/* =====================================
                4. DATOS SENSIBLES
                ===================================== */}
            <section
              id="datos-sensibles"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 04
              </span>

              <h2>
                Datos personales sensibles
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                Grinsa Manufacturas no requiere ni solicita
                intencionalmente datos personales sensibles para
                atender las solicitudes realizadas mediante el
                formulario de contacto del sitio web.
              </p>

              <div className="privacidad-warning">
                <strong>
                  Información importante
                </strong>

                <p>
                  Se solicita a los usuarios abstenerse de
                  proporcionar a través del formulario
                  información relacionada con su estado de
                  salud, origen racial o étnico, creencias
                  religiosas, opiniones políticas, información
                  genética, preferencias sexuales u otros datos
                  considerados sensibles conforme a la
                  legislación aplicable.
                </p>
              </div>
            </section>

            {/* =====================================
                5. PROVEEDORES
                ===================================== */}
            <section
              id="proveedores"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 05
              </span>

              <h2>
                Proveedores tecnológicos
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                Para permitir el funcionamiento del sitio web y
                atender las solicitudes realizadas por los
                usuarios, Grinsa Manufacturas podrá utilizar
                servicios proporcionados por terceros que actúen
                como proveedores tecnológicos o encargados del
                tratamiento de información.
              </p>

              <p>
                Entre dichos servicios puede encontrarse{" "}
                <strong>Brevo</strong>, utilizado para facilitar
                el procesamiento y envío de comunicaciones
                electrónicas relacionadas con el formulario de
                contacto.
              </p>

              <p>
                Asimismo, Grinsa Manufacturas podrá utilizar
                servicios de alojamiento web, infraestructura
                tecnológica, entrega de contenido, seguridad y
                otros servicios necesarios para la operación del
                sitio.
              </p>

              <p>
                Estos proveedores podrán procesar determinados
                datos personales únicamente en la medida
                necesaria para proporcionar sus servicios y
                conforme a las finalidades establecidas por
                Grinsa Manufacturas.
              </p>

              <p>
                Algunos de estos proveedores pueden utilizar
                infraestructura tecnológica ubicada fuera de
                México.
              </p>
            </section>

            {/* =====================================
                6. TRANSFERENCIAS
                ===================================== */}
            <section
              id="transferencias"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 06
              </span>

              <h2>
                Transferencias de datos personales
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                <strong>
                  Grinsa Manufacturas no vende, renta ni
                  comercializa los datos personales de los
                  usuarios.
                </strong>
              </p>

              <p>
                Los datos personales podrán ser comunicados a
                terceros cuando resulte necesario para cumplir
                obligaciones legales, contractuales,
                requerimientos de autoridades competentes o
                cualquiera de los supuestos permitidos por la
                legislación aplicable.
              </p>

              <p>
                Cuando una transferencia de datos personales
                requiera el consentimiento del titular conforme
                a la legislación aplicable, dicho consentimiento
                será solicitado previamente.
              </p>

              <p>
                El tratamiento realizado por proveedores
                tecnológicos que actúen por cuenta de Grinsa
                Manufacturas como encargados del tratamiento se
                sujetará a las disposiciones legales y
                contractuales correspondientes.
              </p>
            </section>

            {/* =====================================
                7. INFORMACIÓN TÉCNICA
                ===================================== */}
            <section
              id="informacion-tecnica"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 07
              </span>

              <h2>
                Información técnica generada durante la navegación
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                Durante el acceso y navegación en el sitio web,
                los proveedores de infraestructura tecnológica
                utilizados para su operación pueden procesar
                determinada información técnica necesaria para
                permitir la conexión, mantener la seguridad y
                diagnosticar errores.
              </p>

              <p>
                Dependiendo de la configuración tecnológica del
                sitio, esta información puede incluir:
              </p>

              <ul className="privacidad-list">
                <li>Dirección IP.</li>
                <li>Tipo de navegador utilizado.</li>
                <li>Tipo de dispositivo.</li>
                <li>Sistema operativo.</li>
                <li>Fecha y hora de acceso.</li>
                <li>
                  Información técnica relacionada con las
                  solicitudes realizadas al servidor.
                </li>
                <li>
                  Ubicación o región aproximada derivada de
                  información técnica, cuando corresponda.
                </li>
              </ul>

              <p>
                Esta información podrá utilizarse para mantener
                la disponibilidad y seguridad del sitio web,
                detectar errores técnicos y prevenir usos
                abusivos o fraudulentos.
              </p>

              <p>
                En caso de que Grinsa Manufacturas implemente
                posteriormente nuevas herramientas de analítica,
                publicidad, medición o seguimiento que impliquen
                tratamientos adicionales de datos personales,
                este Aviso de Privacidad será actualizado según
                corresponda.
              </p>
            </section>

            {/* =====================================
                8. COOKIES
                ===================================== */}
            <section
              id="cookies"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 08
              </span>

              <h2>
                Cookies y tecnologías similares
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                El sitio web podrá utilizar tecnologías
                estrictamente necesarias para su funcionamiento
                o aquellas implementadas por los proveedores
                tecnológicos requeridos para proporcionar sus
                servicios.
              </p>

              <p>
                En caso de que posteriormente se incorporen
                herramientas adicionales de medición, análisis o
                publicidad, tales como{" "}
                <strong>
                  Google Analytics, Google Ads, Google Tag
                  Manager, Meta Pixel
                </strong>{" "}
                u otras tecnologías similares, Grinsa
                Manufacturas actualizará el presente Aviso de
                Privacidad y, cuando resulte necesario conforme
                a la legislación aplicable, implementará
                mecanismos adicionales para informar a los
                usuarios y gestionar sus preferencias.
              </p>
            </section>

            {/* =====================================
                9. LIMITACIÓN
                ===================================== */}
            <section
              id="limitacion"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 09
              </span>

              <h2>
                Limitación del uso o divulgación
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                El titular podrá solicitar en cualquier momento
                la limitación del uso o divulgación de sus datos
                personales.
              </p>

              <p>
                Para ello deberá enviar una solicitud al correo
                electrónico{" "}
                <a
                  className="privacidad-inline-link"
                  href="mailto:ee@grinsa.mx"
                >
                  ee@grinsa.mx
                </a>
                .
              </p>

              <p>
                La solicitud deberá contener:
              </p>

              <ul className="privacidad-list">
                <li>Nombre del titular.</li>

                <li>
                  Medio para recibir comunicaciones o
                  notificaciones.
                </li>

                <li>
                  Descripción de los datos personales
                  relacionados con la solicitud.
                </li>

                <li>
                  Descripción clara de la limitación solicitada.
                </li>
              </ul>

              <p>
                Grinsa Manufacturas analizará la solicitud y
                comunicará al titular la determinación
                correspondiente conforme a la legislación
                aplicable.
              </p>
            </section>

            {/* =====================================
                10. DERECHOS ARCO
                ===================================== */}
            <section
              id="derechos-arco"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 10
              </span>

              <h2>
                Derechos ARCO
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                El titular de los datos personales tiene derecho
                a ejercer sus derechos de{" "}
                <strong>
                  Acceso, Rectificación, Cancelación y Oposición
                </strong>
                , conocidos como derechos ARCO.
              </p>

              <div className="privacidad-arco-grid">
                <div className="privacidad-arco-card">
                  <strong>Acceso</strong>

                  <p>
                    Permite conocer qué datos personales posee
                    Grinsa Manufacturas y las condiciones
                    generales de su tratamiento.
                  </p>
                </div>

                <div className="privacidad-arco-card">
                  <strong>Rectificación</strong>

                  <p>
                    Permite solicitar la corrección o
                    actualización de datos cuando sean
                    inexactos, incompletos o estén
                    desactualizados.
                  </p>
                </div>

                <div className="privacidad-arco-card">
                  <strong>Cancelación</strong>

                  <p>
                    Permite solicitar la eliminación de datos
                    personales cuando resulte procedente
                    conforme a la legislación aplicable.
                  </p>
                </div>

                <div className="privacidad-arco-card">
                  <strong>Oposición</strong>

                  <p>
                    Permite solicitar el cese de determinados
                    tratamientos de datos personales en los
                    casos previstos por la legislación.
                  </p>
                </div>
              </div>

              <h3>
                ¿Cómo ejercer sus derechos ARCO?
              </h3>

              <p>
                Para ejercer cualquiera de estos derechos, el
                titular deberá enviar una solicitud al correo
                electrónico{" "}
                <a
                  className="privacidad-inline-link"
                  href="mailto:ee@grinsa.mx"
                >
                  ee@grinsa.mx
                </a>
                .
              </p>

              <p>
                La solicitud deberá contener:
              </p>

              <ol className="privacidad-number-list">
                <li>
                  Nombre del titular y domicilio o cualquier
                  otro medio para recibir notificaciones.
                </li>

                <li>
                  Documentación necesaria para acreditar la
                  identidad del titular o, en su caso, la
                  identidad y personalidad de su representante.
                </li>

                <li>
                  Descripción clara y precisa de los datos
                  personales respecto de los cuales pretende
                  ejercer alguno de los derechos ARCO, salvo
                  cuando se trate del derecho de acceso.
                </li>

                <li>
                  Descripción del derecho ARCO que desea ejercer
                  o de la solicitud concreta.
                </li>

                <li>
                  Cualquier elemento o documento que facilite la
                  localización de los datos personales.
                </li>
              </ol>

              <p>
                Cuando se solicite la rectificación de datos
                personales, deberán señalarse adicionalmente las
                modificaciones solicitadas y proporcionarse,
                cuando corresponda, los documentos que sustenten
                la petición.
              </p>

              <p>
                Grinsa Manufacturas comunicará al titular la
                determinación adoptada en un plazo máximo de{" "}
                <strong>20 días hábiles</strong>, contado a
                partir de la recepción de la solicitud.
              </p>

              <p>
                En caso de resultar procedente, la solicitud se
                hará efectiva dentro de los{" "}
                <strong>15 días hábiles siguientes</strong> a
                la fecha en que se comunique la respuesta.
              </p>

              <p>
                Los plazos anteriores podrán ser ampliados una
                sola vez por un periodo igual cuando las
                circunstancias del caso así lo justifiquen.
              </p>

              <p>
                El ejercicio de los derechos ARCO será gratuito,
                sin perjuicio de los costos de reproducción,
                copias o envío que legalmente puedan resultar
                aplicables.
              </p>

              <a
                href="mailto:ee@grinsa.mx?subject=Solicitud%20de%20Derechos%20ARCO"
                className="privacidad-contact-button"
              >
                Solicitar ejercicio de derechos ARCO
              </a>
            </section>

            {/* =====================================
                11. REVOCACIÓN
                ===================================== */}
            <section
              id="revocacion"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 11
              </span>

              <h2>
                Revocación del consentimiento
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                Cuando el tratamiento de datos personales
                dependa del consentimiento del titular, éste
                podrá solicitar su revocación en cualquier
                momento, sin efectos retroactivos.
              </p>

              <p>
                Para solicitar la revocación deberá enviar un
                correo electrónico a{" "}
                <a
                  className="privacidad-inline-link"
                  href="mailto:ee@grinsa.mx"
                >
                  ee@grinsa.mx
                </a>{" "}
                indicando:
              </p>

              <ul className="privacidad-list">
                <li>Nombre del titular.</li>

                <li>
                  Medio para recibir la respuesta correspondiente.
                </li>

                <li>
                  Información necesaria para acreditar su
                  identidad.
                </li>

                <li>
                  Descripción clara de los tratamientos respecto
                  de los cuales desea revocar su consentimiento.
                </li>
              </ul>

              <p>
                La revocación no será aplicable cuando el
                tratamiento deba continuar como consecuencia de
                una obligación legal, contractual o cualquiera
                de las excepciones previstas por la legislación
                aplicable.
              </p>
            </section>

            {/* =====================================
                12. CONSERVACIÓN
                ===================================== */}
            <section
              id="conservacion"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 12
              </span>

              <h2>
                Conservación de los datos personales
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                Los datos personales serán conservados
                únicamente durante el tiempo necesario para
                cumplir las finalidades señaladas en este Aviso
                de Privacidad y durante los periodos adicionales
                que resulten necesarios para cumplir
                obligaciones legales, contractuales o
                administrativas.
              </p>

              <p>
                Una vez que los datos dejen de ser necesarios y
                concluyan los periodos legales de conservación
                correspondientes, se procederá a su eliminación,
                bloqueo o supresión conforme resulte aplicable.
              </p>
            </section>

            {/* =====================================
                13. SEGURIDAD
                ===================================== */}
            <section
              id="seguridad"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 13
              </span>

              <h2>
                Seguridad y confidencialidad
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                Grinsa Manufacturas adoptará medidas
                administrativas, técnicas y físicas razonables
                para proteger los datos personales contra daño,
                pérdida, alteración, destrucción, acceso, uso o
                tratamiento no autorizado.
              </p>

              <p>
                Asimismo, las personas que intervengan en el
                tratamiento de los datos personales deberán
                mantener su confidencialidad conforme a las
                disposiciones legales aplicables.
              </p>

              <div className="privacidad-warning">
                <strong>
                  Seguridad en Internet
                </strong>

                <p>
                  Ningún sistema de transmisión o almacenamiento
                  de información mediante Internet puede
                  garantizar seguridad absoluta. Grinsa
                  Manufacturas mantendrá medidas de protección
                  razonables acordes con la naturaleza de la
                  información tratada y los servicios
                  tecnológicos utilizados.
                </p>
              </div>
            </section>

            {/* =====================================
                14. MODIFICACIONES
                ===================================== */}
            <section
              id="modificaciones"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 14
              </span>

              <h2>
                Modificaciones al Aviso de Privacidad
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                Grinsa Manufacturas podrá modificar o actualizar
                el presente Aviso de Privacidad como consecuencia
                de:
              </p>

              <ul className="privacidad-list">
                <li>
                  Cambios en la legislación aplicable.
                </li>

                <li>
                  Modificaciones en los productos o servicios
                  ofrecidos.
                </li>

                <li>
                  Incorporación de nuevas funcionalidades al
                  sitio web.
                </li>

                <li>
                  Cambios en los proveedores tecnológicos
                  utilizados.
                </li>

                <li>
                  Cambios en las finalidades o características
                  del tratamiento de datos personales.
                </li>

                <li>
                  Cambios en las prácticas internas de
                  protección de datos.
                </li>
              </ul>

              <p>
                Las modificaciones al presente Aviso de
                Privacidad estarán disponibles en:
              </p>

              <p>
                <strong>grinsamanufacturas.mx</strong>
              </p>

              <p>
                Se recomienda a los usuarios consultar
                periódicamente esta sección para conocer la
                versión vigente.
              </p>
            </section>

            {/* =====================================
                15. CONTACTO
                ===================================== */}
            <section
              id="contacto"
              className="privacidad-section"
            >
              <span className="privacidad-section-number">
                SECCIÓN 15
              </span>

              <h2>
                Contacto
              </h2>

              <div
                className="privacidad-section-line"
                aria-hidden="true"
              />

              <p>
                Para cualquier pregunta, aclaración o solicitud
                relacionada con este Aviso de Privacidad o con
                el tratamiento de sus datos personales, puede
                comunicarse mediante los siguientes medios:
              </p>

              <div className="privacidad-address-card">
                <strong>
                  Grinsa Manufacturas
                </strong>

                <address>
                  Grupo Interiores S.A. de C.V.
                  <br />
                  Ángel Martínez Villarreal #637 B
                  <br />
                  Col. Chepevera
                  <br />
                  C.P. 64030
                  <br />
                  Monterrey, Nuevo León, México
                </address>

                <p>
                  Correo electrónico:{" "}
                  <a href="mailto:ee@grinsa.mx">
                    ee@grinsa.mx
                  </a>
                </p>

                <p>
                  Sitio web:{" "}
                  <a
                    href="https://grinsamanufacturas.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    grinsamanufacturas.mx
                  </a>
                </p>
              </div>

              <a
                href="mailto:ee@grinsa.mx"
                className="privacidad-contact-button"
              >
                Contactar a Grinsa Manufacturas
              </a>
            </section>

            {/* =====================================
                BLOQUE FINAL
                ===================================== */}
            <section
              className="privacidad-consent"
              aria-labelledby="privacidad-consent-title"
            >
              <h2 id="privacidad-consent-title">
                Protección de su información
              </h2>

              <p>
                Al proporcionar información mediante los medios
                de contacto de Grinsa Manufacturas, los datos
                personales serán tratados conforme a las
                finalidades y condiciones establecidas en este
                Aviso de Privacidad. Cuando alguna operación
                requiera consentimiento adicional conforme a la
                legislación aplicable, éste será solicitado de
                manera correspondiente.
              </p>
            </section>

            {/* =====================================
                REGRESAR
                ===================================== */}
            <div className="privacidad-back">
              <Link to="/">
                ← Regresar al inicio
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default AvisoPrivacidad;