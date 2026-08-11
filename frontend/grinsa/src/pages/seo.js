export function configurarSEO({
  titulo,
  descripcion,
  rutaCanonical,
  datosEstructurados = null,
}) {
  // ==========================================
  // TITLE
  // ==========================================
  document.title = titulo;

  // ==========================================
  // META DESCRIPTION
  // ==========================================
  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }

  metaDescription.setAttribute(
    "content",
    descripcion
  );

  // ==========================================
  // CANONICAL
  // ==========================================
  let canonical = document.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  const canonicalUrl = new URL(
    rutaCanonical,
    window.location.origin
  ).href;

  canonical.setAttribute(
    "href",
    canonicalUrl
  );

  // ==========================================
  // OPEN GRAPH
  // ==========================================
  const configurarMetaProperty = (
    propiedad,
    contenido
  ) => {
    let meta = document.querySelector(
      `meta[property="${propiedad}"]`
    );

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(
        "property",
        propiedad
      );

      document.head.appendChild(meta);
    }

    meta.setAttribute(
      "content",
      contenido
    );
  };

  configurarMetaProperty(
    "og:title",
    titulo
  );

  configurarMetaProperty(
    "og:description",
    descripcion
  );

  configurarMetaProperty(
    "og:url",
    canonicalUrl
  );

  configurarMetaProperty(
    "og:type",
    "website"
  );

  configurarMetaProperty(
    "og:site_name",
    "Grinsa Manufacturas"
  );

  // ==========================================
  // DATOS ESTRUCTURADOS JSON-LD
  // ==========================================
  const scriptExistente =
    document.getElementById(
      "grinsa-structured-data"
    );

  if (datosEstructurados) {
    let script =
      scriptExistente;

    if (!script) {
      script =
        document.createElement("script");

      script.type =
        "application/ld+json";

      script.id =
        "grinsa-structured-data";

      document.head.appendChild(
        script
      );
    }

    script.textContent =
      JSON.stringify(
        datosEstructurados
      );
  } else if (scriptExistente) {
    scriptExistente.remove();
  }
}