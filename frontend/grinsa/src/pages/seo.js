const DOMINIO_PRINCIPAL =
  "https://www.grinsa.mx";


export function configurarSEO({
  titulo,
  descripcion,
  rutaCanonical,
  datosEstructurados = null,
  imagen = null,
}) {

  // ==========================================
  // TITLE
  // ==========================================
  document.title = titulo;


  // ==========================================
  // META DESCRIPTION
  // ==========================================
  let metaDescription =
    document.querySelector(
      'meta[name="description"]'
    );

  if (!metaDescription) {
    metaDescription =
      document.createElement("meta");

    metaDescription.setAttribute(
      "name",
      "description"
    );

    document.head.appendChild(
      metaDescription
    );
  }

  metaDescription.setAttribute(
    "content",
    descripcion
  );


  // ==========================================
  // ROBOTS
  // ==========================================
  let metaRobots =
    document.querySelector(
      'meta[name="robots"]'
    );

  if (!metaRobots) {
    metaRobots =
      document.createElement("meta");

    metaRobots.setAttribute(
      "name",
      "robots"
    );

    document.head.appendChild(
      metaRobots
    );
  }

  metaRobots.setAttribute(
    "content",
    "index, follow"
  );


  // ==========================================
  // CANONICAL
  // ==========================================
  let canonical =
    document.querySelector(
      'link[rel="canonical"]'
    );

  if (!canonical) {
    canonical =
      document.createElement("link");

    canonical.setAttribute(
      "rel",
      "canonical"
    );

    document.head.appendChild(
      canonical
    );
  }

  const canonicalUrl =
    new URL(
      rutaCanonical,
      DOMINIO_PRINCIPAL
    ).href;

  canonical.setAttribute(
    "href",
    canonicalUrl
  );


  // ==========================================
  // FUNCIÓN AUXILIAR OPEN GRAPH
  // ==========================================
  const configurarMetaProperty = (
    propiedad,
    contenido
  ) => {
    let meta =
      document.querySelector(
        `meta[property="${propiedad}"]`
      );

    if (!meta) {
      meta =
        document.createElement("meta");

      meta.setAttribute(
        "property",
        propiedad
      );

      document.head.appendChild(
        meta
      );
    }

    meta.setAttribute(
      "content",
      contenido
    );
  };


  // ==========================================
  // OPEN GRAPH
  // ==========================================
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

  configurarMetaProperty(
    "og:locale",
    "es_MX"
  );


  // ==========================================
  // OPEN GRAPH IMAGE
  // ==========================================
  if (imagen) {
    configurarMetaProperty(
      "og:image",
      imagen
    );
  } else {
    const metaImagenExistente =
      document.querySelector(
        'meta[property="og:image"]'
      );

    if (metaImagenExistente) {
      metaImagenExistente.remove();
    }
  }


  // ==========================================
  // TWITTER / SOCIAL CARDS
  // ==========================================
  const configurarMetaName = (
    nombre,
    contenido
  ) => {
    let meta =
      document.querySelector(
        `meta[name="${nombre}"]`
      );

    if (!meta) {
      meta =
        document.createElement("meta");

      meta.setAttribute(
        "name",
        nombre
      );

      document.head.appendChild(
        meta
      );
    }

    meta.setAttribute(
      "content",
      contenido
    );
  };


  configurarMetaName(
    "twitter:card",
    imagen
      ? "summary_large_image"
      : "summary"
  );

  configurarMetaName(
    "twitter:title",
    titulo
  );

  configurarMetaName(
    "twitter:description",
    descripcion
  );


  if (imagen) {
    configurarMetaName(
      "twitter:image",
      imagen
    );
  } else {
    const twitterImagenExistente =
      document.querySelector(
        'meta[name="twitter:image"]'
      );

    if (twitterImagenExistente) {
      twitterImagenExistente.remove();
    }
  }


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
        document.createElement(
          "script"
        );

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