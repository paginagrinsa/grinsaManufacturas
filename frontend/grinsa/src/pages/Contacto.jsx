import { useEffect, useState } from "react";

import "./Contacto.css";

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    document.title = "Grinsa Manufacturas | Contacto";
  }, []);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    setFormulario((datosActuales) => ({
      ...datosActuales,
      [name]: value,
    }));

    if (enviado) {
      setEnviado(false);
    }
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    console.log("Datos del formulario:", formulario);

    setEnviado(true);

    setFormulario({
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      mensaje: "",
    });
  };

  return (
    <main className="contacto-page">
      {/* Encabezado */}
      <section className="contacto-hero">
        <div className="container">
          <p className="contacto-subtitulo">
            Estamos para ayudarte
          </p>

          <h1 className="contacto-titulo">
            Contacto
          </h1>

          <p className="contacto-descripcion">
            Envíanos tus datos y cuéntanos cómo podemos ayudarte.
            Nuestro equipo se pondrá en contacto contigo.
          </p>
        </div>
      </section>

      {/* Formulario, datos de contacto y mapa */}
      <section className="contacto-content-section">
        <div className="container">
          <div className="row g-4 g-xl-5 align-items-stretch">
            {/* Formulario */}
            <div className="col-12 col-lg-7">
              <div className="contacto-card contacto-form-card">
                <div className="contacto-card-header">
                  <h2>
                    Envíanos un mensaje
                  </h2>

                  <p>
                    Completa el siguiente formulario con tus datos.
                  </p>
                </div>

                {enviado && (
                  <div
                    className="alert alert-success contacto-alert"
                    role="alert"
                  >
                    Tu información fue registrada correctamente.
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
                        rows="6"
                        required
                      />
                    </div>

                    {/* Botón */}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn contacto-submit-button"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>

                
              </div>
            </div>

            {/* Información y mapa */}
            <div className="col-12 col-lg-5">
              <aside className="contacto-card contacto-info-card">
                <div className="contacto-info-header">
                  <p className="contacto-info-eyebrow">
                    Información de contacto
                  </p>

                  <h2>
                    Visítanos
                  </h2>

                  <p>
                    Comunícate con nosotros o consulta nuestra ubicación.
                  </p>
                </div>

                {/* Teléfono */}
                <div className="contacto-info-block">
                  <span className="contacto-info-label">
                    Teléfono
                  </span>

                  <a
                    href="tel:+528181421520"
                    className="contacto-phone-link"
                  >
                    81 8142 1520
                  </a>
                </div>

                {/* Dirección */}
                <div className="contacto-info-block">
                  <span className="contacto-info-label">
                    Dirección
                  </span>

                  <address className="contacto-address">
                    66062, De La Fundición 333,
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
                    src="https://www.google.com/maps?q=De%20La%20Fundici%C3%B3n%20333%2C%20Parque%20Industrial%20Escobedo%2C%2066062%2C%20General%20Escobedo%2C%20Nuevo%20Le%C3%B3n&output=embed"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=De+La+Fundici%C3%B3n+333%2C+Parque+Industrial+Escobedo%2C+66062%2C+General+Escobedo%2C+Nuevo+Le%C3%B3n"
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