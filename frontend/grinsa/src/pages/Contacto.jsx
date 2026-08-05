import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Contacto.css";

const API_URL = (
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/+$/, "");

const formularioInicial = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  mensaje: "",
};

const estadoInicial = {
  tipo: "",
  mensaje: "",
};

function Contacto() {
  const [formulario, setFormulario] =
    useState(formularioInicial);

  const [aceptaPrivacidad, setAceptaPrivacidad] =
    useState(false);

  const [enviando, setEnviando] = useState(false);

  const [estadoEnvio, setEstadoEnvio] =
    useState(estadoInicial);

  useEffect(() => {
    document.title = "Grinsa Manufacturas | Contacto";
  }, []);

  const limpiarEstadoEnvio = () => {
    if (estadoEnvio.tipo) {
      setEstadoEnvio(estadoInicial);
    }
  };

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setFormulario((datosActuales) => ({
      ...datosActuales,
      [name]: value,
    }));

    limpiarEstadoEnvio();
  };

  const manejarPrivacidad = (evento) => {
    setAceptaPrivacidad(evento.target.checked);
    limpiarEstadoEnvio();
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    if (!aceptaPrivacidad || enviando) {
      return;
    }

    setEnviando(true);
    setEstadoEnvio(estadoInicial);

    try {
      const respuesta = await fetch(
        `${API_URL}/api/contacto/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: formulario.nombre.trim(),
            empresa: formulario.empresa.trim(),
            email: formulario.email.trim(),
            telefono: formulario.telefono.trim(),
            mensaje: formulario.mensaje.trim(),
            acepta_privacidad: aceptaPrivacidad,
          }),
        }
      );

      const datos = await respuesta
        .json()
        .catch(() => ({}));

      if (!respuesta.ok) {
        throw new Error(
          datos.error ||
            datos.mensaje ||
            "No fue posible enviar el mensaje."
        );
      }

      setEstadoEnvio({
        tipo: "exito",
        mensaje:
          datos.mensaje ||
          "Tu mensaje fue enviado correctamente.",
      });

      setFormulario(formularioInicial);
      setAceptaPrivacidad(false);
    } catch (error) {
      console.error(
        "Error al enviar el formulario de contacto:",
        error
      );

      setEstadoEnvio({
        tipo: "error",
        mensaje:
          error.message ||
          "No fue posible enviar tu mensaje. Intenta nuevamente.",
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="contacto-page">
      {/* =====================================
          ENCABEZADO
          ===================================== */}
      <section className="contacto-hero">
        <div className="container">
          <p className="contacto-subtitulo">
            Estamos para ayudarte
          </p>

          <h1 className="contacto-titulo">
            Contacto
          </h1>

          <p className="contacto-descripcion">
            Envíanos tus datos y cuéntanos cómo podemos
            ayudarte. Nuestro equipo se pondrá en contacto
            contigo.
          </p>
        </div>
      </section>

      {/* =====================================
          FORMULARIO, INFORMACIÓN Y MAPA
          ===================================== */}
      <section className="contacto-content-section">
        <div className="container">
          <div className="row g-4 g-xl-5 align-items-stretch">
            {/* =================================
                FORMULARIO
                ================================= */}
            <div className="col-12 col-lg-7">
              <div className="contacto-card contacto-form-card">
                <div className="contacto-card-header">
                  <h2>Envíanos un mensaje</h2>

                  <p>
                    Completa el siguiente formulario con tus
                    datos.
                  </p>
                </div>

                {estadoEnvio.tipo && (
                  <div
                    className={`alert contacto-alert ${
                      estadoEnvio.tipo === "exito"
                        ? "alert-success"
                        : "alert-danger"
                    }`}
                    role="alert"
                    aria-live="polite"
                  >
                    {estadoEnvio.mensaje}
                  </div>
                )}

                <form onSubmit={manejarEnvio}>
                  <div className="row g-4">
                    {/* Nombre */}
                    <div className="col-12 col-md-6">
                      <label
                        htmlFor="nombre"
                        className="form-label contacto-label"
                      >
                        Nombre
                      </label>

                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="form-control contacto-input"
                        placeholder="Escribe tu nombre"
                        value={formulario.nombre}
                        onChange={manejarCambio}
                        autoComplete="name"
                        maxLength={120}
                        disabled={enviando}
                        required
                      />
                    </div>

                    {/* Empresa */}
                    <div className="col-12 col-md-6">
                      <label
                        htmlFor="empresa"
                        className="form-label contacto-label"
                      >
                        Empresa
                      </label>

                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        className="form-control contacto-input"
                        placeholder="Nombre de tu empresa"
                        value={formulario.empresa}
                        onChange={manejarCambio}
                        autoComplete="organization"
                        maxLength={150}
                        disabled={enviando}
                      />
                    </div>

                    {/* Email */}
                    <div className="col-12 col-md-6">
                      <label
                        htmlFor="email"
                        className="form-label contacto-label"
                      >
                        Email
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control contacto-input"
                        placeholder="correo@empresa.com"
                        value={formulario.email}
                        onChange={manejarCambio}
                        autoComplete="email"
                        maxLength={254}
                        disabled={enviando}
                        required
                      />
                    </div>

                    {/* Teléfono */}
                    <div className="col-12 col-md-6">
                      <label
                        htmlFor="telefono"
                        className="form-label contacto-label"
                      >
                        Teléfono
                      </label>

                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        className="form-control contacto-input"
                        placeholder="81 1234 5678"
                        value={formulario.telefono}
                        onChange={manejarCambio}
                        autoComplete="tel"
                        inputMode="tel"
                        maxLength={25}
                        disabled={enviando}
                        required
                      />
                    </div>

                    {/* Mensaje */}
                    <div className="col-12">
                      <label
                        htmlFor="mensaje"
                        className="form-label contacto-label"
                      >
                        Mensaje
                      </label>

                      <textarea
                        id="mensaje"
                        name="mensaje"
                        className="form-control contacto-input contacto-textarea"
                        placeholder="Escribe tu mensaje"
                        value={formulario.mensaje}
                        onChange={manejarCambio}
                        rows={6}
                        maxLength={3000}
                        disabled={enviando}
                        required
                      />
                    </div>

                    {/* =================================
                        AVISO DE PRIVACIDAD
                        ================================= */}
                    <div className="col-12">
                      <div className="contacto-privacy-box">
                        <div className="form-check contacto-privacy-check">
                          <input
                            type="checkbox"
                            id="aceptaPrivacidad"
                            name="aceptaPrivacidad"
                            className="form-check-input contacto-checkbox"
                            checked={aceptaPrivacidad}
                            onChange={manejarPrivacidad}
                            disabled={enviando}
                            required
                          />

                          <label
                            htmlFor="aceptaPrivacidad"
                            className="form-check-label contacto-privacy-label"
                          >
                            He leído y acepto el tratamiento de
                            mis datos personales conforme al{" "}
                            <Link
                              to="/aviso-de-privacidad"
                              className="contacto-privacy-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Aviso de Privacidad
                            </Link>
                            .
                          </label>
                        </div>

                        <p className="contacto-privacy-help">
                          Tus datos serán enviados al personal
                          autorizado de Grinsa Manufacturas para
                          atender tu solicitud y ponerse en
                          contacto contigo.
                        </p>
                      </div>
                    </div>

                    {/* Botón */}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn contacto-submit-button"
                        disabled={enviando}
                        aria-busy={enviando}
                      >
                        {enviando
                          ? "Enviando..."
                          : "Enviar"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* =================================
                INFORMACIÓN Y MAPA
                ================================= */}
            <div className="col-12 col-lg-5">
              <aside className="contacto-card contacto-info-card">
                <div className="contacto-info-header">
                  <p className="contacto-info-eyebrow">
                    Información de contacto
                  </p>

                  <h2>Visítanos</h2>

                  <p>
                    Comunícate con nosotros o consulta nuestra
                    ubicación.
                  </p>
                </div>

                {/* Teléfono y WhatsApp */}
                <div className="contacto-info-block">
                  <span className="contacto-info-label">
                    Teléfono
                  </span>

                  <a
                    href="tel:+528148387696"
                    className="contacto-phone-link"
                  >
                    81 4838 7696
                  </a>

                  <span className="contacto-info-label">
                    WhatsApp
                  </span>

                  <a
                    href="https://wa.me/528136054006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacto-phone-link"
                  >
                    81 3605 4006
                  </a>
                </div>

                {/* Dirección */}
                <div className="contacto-info-block">
                  <span className="contacto-info-label">
                    Dirección
                  </span>

                  <address className="contacto-address">
                    66062, Cucharas 303 A,
                    <br />
                    Parque Industrial Escobedo,
                    <br />
                    Cdad. Gral. Escobedo, N.L.
                  </address>
                </div>

                {/* Mapa */}
                <div className="contacto-map-wrapper">
                  <iframe
                    className="contacto-map"
                    title="Ubicación de Grinsa Manufacturas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.705733462501!2d-100.35398828866555!3d25.813280477224968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662918023b06603%3A0x21992865193d5d46!2sCucharas%20303%2C%20Parque%20Industrial%20Escobedo%2C%2066062%20Cdad.%20Gral.%20Escobedo%2C%20N.L.!5e0!3m2!1ses!2smx!4v1785347398687!5m2!1ses!2smx"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Cucharas+303+A%2C+Parque+Industrial+Escobedo%2C+66062%2C+General+Escobedo%2C+Nuevo+Le%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contacto-map-link"
                >
                  Abrir ubicación en Google Maps
                </a>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contacto;