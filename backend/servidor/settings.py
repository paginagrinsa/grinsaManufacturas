import os
from pathlib import Path

from dotenv import load_dotenv


BASE_DIR = Path(__file__).resolve().parent.parent

# Cargar variables locales desde backend/.env
load_dotenv(BASE_DIR / ".env")


def obtener_lista_variable(nombre, valor_predeterminado=""):
    """
    Convierte una variable separada por comas en una lista.

    Ejemplo:
    localhost,127.0.0.1
    """
    valor = os.getenv(nombre, valor_predeterminado)

    return [
        elemento.strip()
        for elemento in valor.split(",")
        if elemento.strip()
    ]


SECRET_KEY = os.getenv(
    "DJANGO_SECRET_KEY",
    "django-insecure-clave-solamente-para-desarrollo-local",
)

DEBUG = os.getenv("DEBUG", "True").lower() == "true"

ALLOWED_HOSTS = obtener_lista_variable(
    "ALLOWED_HOSTS",
    "localhost,127.0.0.1",
)

# Render proporciona automáticamente este dominio
render_hostname = os.getenv("RENDER_EXTERNAL_HOSTNAME")

if (
    render_hostname
    and render_hostname not in ALLOWED_HOSTS
):
    ALLOWED_HOSTS.append(render_hostname)

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    # Aplicaciones externas
    "corsheaders",

    # Aplicaciones del proyecto
    "contacto_api",
]


MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",

    # Debe colocarse antes de CommonMiddleware
    "corsheaders.middleware.CorsMiddleware",

    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]


ROOT_URLCONF = "servidor.urls"


TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]


WSGI_APPLICATION = "servidor.wsgi.application"


DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}


AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": (
            "django.contrib.auth.password_validation."
            "UserAttributeSimilarityValidator"
        ),
    },
    {
        "NAME": (
            "django.contrib.auth.password_validation."
            "MinimumLengthValidator"
        ),
    },
    {
        "NAME": (
            "django.contrib.auth.password_validation."
            "CommonPasswordValidator"
        ),
    },
    {
        "NAME": (
            "django.contrib.auth.password_validation."
            "NumericPasswordValidator"
        ),
    },
]


LANGUAGE_CODE = "es-mx"

TIME_ZONE = "America/Monterrey"

USE_I18N = True

USE_TZ = True


STATIC_URL = "static/"

STATIC_ROOT = BASE_DIR / "staticfiles"

STORAGES = {
    "default": {
        "BACKEND": (
            "django.core.files.storage.FileSystemStorage"
        ),
    },
    "staticfiles": {
        "BACKEND": (
            "whitenoise.storage."
            "CompressedManifestStaticFilesStorage"
        ),
    },
}


DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"


# ==========================================
# CONFIGURACIÓN DE CORS
# ==========================================

CORS_ALLOWED_ORIGINS = obtener_lista_variable(
    "CORS_ALLOWED_ORIGINS",
    (
        "http://localhost:5173,"
        "http://127.0.0.1:5173"
    ),
)

CORS_ALLOW_CREDENTIALS = False


CSRF_TRUSTED_ORIGINS = obtener_lista_variable(
    "CSRF_TRUSTED_ORIGINS",
    "",
)


# Render utiliza un proxy HTTPS
SECURE_PROXY_SSL_HEADER = (
    "HTTP_X_FORWARDED_PROTO",
    "https",
)


# ==========================================
# CONFIGURACIÓN DE BREVO
# ==========================================

BREVO_API_KEY = os.getenv("BREVO_API_KEY", "")

BREVO_SENDER_EMAIL = os.getenv(
    "BREVO_SENDER_EMAIL",
    "",
)

BREVO_SENDER_NAME = os.getenv(
    "BREVO_SENDER_NAME",
    "Grinsa Manufacturas",
)

CONTACT_RECEIVER_EMAIL = os.getenv(
    "CONTACT_RECEIVER_EMAIL",
    "",
)