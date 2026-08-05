import json
import logging
import re
from html import escape

import requests

from django.conf import settings
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST


logger = logging.getLogger(__name__)

BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email"


def obtener_texto(datos, campo, longitud_maxima):
    """
    Obtiene, limpia y limita un campo de texto.
    """
    valor = datos.get(campo, "")

    if not isinstance(valor, str):
        return ""

    valor = valor.replace("\x00", "").strip()

    return valor[:longitud_maxima]


def crear_respuesta_error(mensaje, estado=400):
    return JsonResponse(
        {
            "ok": False,
            "error": mensaje,
        },
        status=estado,
    )


def enviar_correo_brevo(payload, descripcion):
    """
    Envía un correo utilizando la API transaccional de Brevo.

    Devuelve:
    - True y la respuesta de Brevo cuando el envío fue aceptado.
    - False y los detalles del error cuando falla.
    """

    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": settings.BREVO_API_KEY,
    }

    try:
        respuesta = requests.post(
            BREVO_ENDPOINT,
            json=payload,
            headers=headers,
            timeout=20,
        )

    except requests.Timeout:
        logger.exception(
            "Brevo tardó demasiado en responder durante: %s",
            descripcion,
        )

        return False, {
            "tipo": "timeout",
            "detalle": "Brevo tardó demasiado en responder.",
        }

    except requests.RequestException as error:
        logger.exception(
            "Error de conexión con Brevo durante: %s",
            descripcion,
        )

        return False, {
            "tipo": "conexion",
            "detalle": str(error),
        }

    if not respuesta.ok:
        logger.error(
            (
                "Brevo rechazó el envío '%s'. "
                "Código HTTP: %s. Respuesta: %s"
            ),
            descripcion,
            respuesta.status_code,
            respuesta.text,
        )

        return False, {
            "tipo": "respuesta_brevo",
            "status": respuesta.status_code,
            "detalle": respuesta.text,
        }

    try:
        datos_respuesta = respuesta.json()
    except ValueError:
        datos_respuesta = {
            "respuesta": respuesta.text,
        }

    logger.info(
        "Correo aceptado por Brevo. Tipo: %s. Respuesta: %s",
        descripcion,
        datos_respuesta,
    )

    return True, datos_respuesta


def crear_html_administrador(
    nombre,
    empresa,
    email,
    telefono,
    mensaje,
):
    nombre_html = escape(nombre)
    empresa_html = escape(empresa or "No proporcionada")
    email_html = escape(email)
    telefono_html = escape(telefono)

    mensaje_html = escape(mensaje).replace(
        "\n",
        "<br>",
    )

    return f"""
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        >
      </head>

      <body
        style="
          margin: 0;
          padding: 30px 15px;
          background-color: #f4f6f7;
          font-family: Arial, Helvetica, sans-serif;
          color: #263746;
        "
      >
        <div
          style="
            max-width: 680px;
            margin: 0 auto;
            background-color: #ffffff;
            border-top: 6px solid #0b2232;
            border-radius: 6px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(11, 34, 50, 0.12);
          "
        >
          <div
            style="
              padding: 30px;
              background-color: #0b2232;
              color: #ffffff;
            "
          >
            <h1
              style="
                margin: 0 0 8px;
                font-size: 27px;
              "
            >
              Nuevo mensaje de contacto
            </h1>

            <p
              style="
                margin: 0;
                color: #dbe4e9;
                font-size: 15px;
              "
            >
              Sitio web de Grinsa Manufacturas
            </p>
          </div>

          <div style="padding: 30px;">
            <table
              style="
                width: 100%;
                border-collapse: collapse;
              "
            >
              <tr>
                <td
                  style="
                    width: 145px;
                    padding: 10px 0;
                    font-weight: bold;
                    color: #0b2232;
                    vertical-align: top;
                  "
                >
                  Nombre:
                </td>

                <td style="padding: 10px 0;">
                  {nombre_html}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                    color: #0b2232;
                    vertical-align: top;
                  "
                >
                  Empresa:
                </td>

                <td style="padding: 10px 0;">
                  {empresa_html}
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                    color: #0b2232;
                    vertical-align: top;
                  "
                >
                  Email:
                </td>

                <td style="padding: 10px 0;">
                  <a
                    href="mailto:{email_html}"
                    style="color: #163f59;"
                  >
                    {email_html}
                  </a>
                </td>
              </tr>

              <tr>
                <td
                  style="
                    padding: 10px 0;
                    font-weight: bold;
                    color: #0b2232;
                    vertical-align: top;
                  "
                >
                  Teléfono:
                </td>

                <td style="padding: 10px 0;">
                  {telefono_html}
                </td>
              </tr>
            </table>

            <div
              style="
                margin-top: 25px;
                padding-top: 25px;
                border-top: 1px solid #dce3e7;
              "
            >
              <h2
                style="
                  margin: 0 0 15px;
                  color: #0b2232;
                  font-size: 19px;
                "
              >
                Mensaje
              </h2>

              <div
                style="
                  padding: 18px;
                  background-color: #f5f7f8;
                  border-left: 4px solid #0b2232;
                  border-radius: 4px;
                  line-height: 1.7;
                "
              >
                {mensaje_html}
              </div>
            </div>

            <p
              style="
                margin: 30px 0 0;
                color: #657681;
                font-size: 13px;
                line-height: 1.6;
              "
            >
              Puedes responder directamente a este correo para
              comunicarte con la persona que envió el formulario.
            </p>
          </div>
        </div>
      </body>
    </html>
    """


def crear_html_confirmacion(nombre):
    nombre_html = escape(nombre)

    return f"""
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        >
      </head>

      <body
        style="
          margin: 0;
          padding: 30px 15px;
          background-color: #f4f6f7;
          font-family: Arial, Helvetica, sans-serif;
          color: #263746;
        "
      >
        <div
          style="
            max-width: 650px;
            margin: 0 auto;
            background-color: #ffffff;
            border-top: 6px solid #0b2232;
            border-radius: 6px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(11, 34, 50, 0.12);
          "
        >
          <div
            style="
              padding: 32px;
              background-color: #0b2232;
              color: #ffffff;
              text-align: center;
            "
          >
            <h1
              style="
                margin: 0;
                font-size: 28px;
                line-height: 1.3;
              "
            >
              Recibimos tu mensaje
            </h1>
          </div>

          <div style="padding: 35px 32px;">
            <p
              style="
                margin: 0 0 20px;
                color: #263746;
                font-size: 17px;
                line-height: 1.7;
              "
            >
              Hola <strong>{nombre_html}</strong>,
            </p>

            <p
              style="
                margin: 0 0 20px;
                color: #4d5e6b;
                font-size: 16px;
                line-height: 1.8;
              "
            >
              Gracias por comunicarte con Grinsa Manufacturas.
              Tus datos y tu mensaje fueron recibidos correctamente.
            </p>

            <div
              style="
                margin: 25px 0;
                padding: 22px;
                background-color: #f5f7f8;
                border-left: 4px solid #0b2232;
                border-radius: 4px;
              "
            >
              <p
                style="
                  margin: 0;
                  color: #334854;
                  font-size: 16px;
                  line-height: 1.7;
                "
              >
                Nuestro equipo revisará tu solicitud y se pondrá
                en contacto contigo lo antes posible.
              </p>
            </div>

            <p
              style="
                margin: 0 0 10px;
                color: #4d5e6b;
                font-size: 15px;
                line-height: 1.7;
              "
            >
              Atentamente,
            </p>

            <p
              style="
                margin: 0;
                color: #0b2232;
                font-size: 17px;
                font-weight: bold;
              "
            >
              Grinsa Manufacturas
            </p>

            <div
              style="
                margin-top: 30px;
                padding-top: 22px;
                border-top: 1px solid #dce3e7;
              "
            >
              <p
                style="
                  margin: 0;
                  color: #78858d;
                  font-size: 12px;
                  line-height: 1.6;
                "
              >
                Este correo fue enviado automáticamente porque
                utilizaste el formulario de contacto del sitio web
                de Grinsa Manufacturas.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
    """


@csrf_exempt
@require_POST
def enviar_contacto(request):
    """
    Recibe el formulario de contacto.

    Envía:
    1. Los datos a Grinsa Manufacturas.
    2. Una confirmación al correo ingresado por el usuario.
    """

    try:
        datos = json.loads(
            request.body.decode("utf-8")
        )
    except (json.JSONDecodeError, UnicodeDecodeError):
        return crear_respuesta_error(
            "La información enviada no tiene un formato válido."
        )

    if not isinstance(datos, dict):
        return crear_respuesta_error(
            "La información enviada no tiene un formato válido."
        )

    nombre = obtener_texto(
        datos,
        "nombre",
        120,
    )

    empresa = obtener_texto(
        datos,
        "empresa",
        150,
    )

    email = obtener_texto(
        datos,
        "email",
        254,
    )

    telefono = obtener_texto(
        datos,
        "telefono",
        25,
    )

    mensaje = obtener_texto(
        datos,
        "mensaje",
        3000,
    )

    acepta_privacidad = datos.get(
        "acepta_privacidad",
        False,
    )

    # ==========================================
    # VALIDACIONES
    # ==========================================

    if not nombre:
        return crear_respuesta_error(
            "El nombre es obligatorio."
        )

    if not email:
        return crear_respuesta_error(
            "El correo electrónico es obligatorio."
        )

    try:
        validate_email(email)
    except ValidationError:
        return crear_respuesta_error(
            "Ingresa un correo electrónico válido."
        )

    if not telefono:
        return crear_respuesta_error(
            "El teléfono es obligatorio."
        )

    telefono_valido = re.fullmatch(
        r"[0-9\s()+\-\.]{7,25}",
        telefono,
    )

    if not telefono_valido:
        return crear_respuesta_error(
            "Ingresa un número de teléfono válido."
        )

    if not mensaje:
        return crear_respuesta_error(
            "El mensaje es obligatorio."
        )

    if acepta_privacidad is not True:
        return crear_respuesta_error(
            "Debes aceptar el Aviso de Privacidad."
        )

    # ==========================================
    # VARIABLES DE BREVO
    # ==========================================

    variables_requeridas = {
        "BREVO_API_KEY": settings.BREVO_API_KEY,
        "BREVO_SENDER_EMAIL": settings.BREVO_SENDER_EMAIL,
        "CONTACT_RECEIVER_EMAIL": (
            settings.CONTACT_RECEIVER_EMAIL
        ),
    }

    variables_faltantes = [
        nombre_variable
        for nombre_variable, valor in variables_requeridas.items()
        if not valor
    ]

    if variables_faltantes:
        logger.error(
            "Faltan variables de Brevo: %s",
            ", ".join(variables_faltantes),
        )

        return crear_respuesta_error(
            (
                "El servicio de correo todavía no está "
                "configurado correctamente."
            ),
            estado=500,
        )

    nombre_asunto = nombre.replace(
        "\r",
        " ",
    ).replace(
        "\n",
        " ",
    )

    # ==========================================
    # CORREO PARA GRINSA
    # ==========================================

    contenido_admin_html = crear_html_administrador(
        nombre=nombre,
        empresa=empresa,
        email=email,
        telefono=telefono,
        mensaje=mensaje,
    )

    contenido_admin_texto = f"""
Nuevo mensaje de contacto - Grinsa Manufacturas

Nombre: {nombre}
Empresa: {empresa or "No proporcionada"}
Email: {email}
Teléfono: {telefono}

Mensaje:
{mensaje}
    """.strip()

    payload_administrador = {
        "sender": {
            "name": settings.BREVO_SENDER_NAME,
            "email": settings.BREVO_SENDER_EMAIL,
        },
        "to": [
            {
                "email": settings.CONTACT_RECEIVER_EMAIL,
                "name": "Grinsa Manufacturas",
            }
        ],
        "replyTo": {
            "email": email,
            "name": nombre,
        },
        "subject": (
            f"Nuevo contacto web de {nombre_asunto}"
        ),
        "htmlContent": contenido_admin_html,
        "textContent": contenido_admin_texto,
        "tags": [
            "contacto-web",
            "notificacion-administrador",
        ],
    }

    envio_administrador, resultado_administrador = (
        enviar_correo_brevo(
            payload=payload_administrador,
            descripcion="notificación para Grinsa",
        )
    )

    if not envio_administrador:
        logger.error(
            "No se enviaron los datos a Grinsa: %s",
            resultado_administrador,
        )

        return crear_respuesta_error(
            (
                "No fue posible enviar tu mensaje en este momento. "
                "Intenta nuevamente más tarde."
            ),
            estado=502,
        )

    # ==========================================
    # CORREO DE CONFIRMACIÓN PARA EL USUARIO
    # ==========================================

    contenido_confirmacion_html = (
        crear_html_confirmacion(nombre)
    )

    contenido_confirmacion_texto = f"""
Hola {nombre},

Gracias por comunicarte con Grinsa Manufacturas.

Tus datos y tu mensaje fueron recibidos correctamente.
Nuestro equipo revisará tu solicitud y se pondrá en contacto
contigo lo antes posible.

Atentamente,
Grinsa Manufacturas

Este es un correo automático enviado después de utilizar
nuestro formulario de contacto.
    """.strip()

    payload_confirmacion = {
        "sender": {
            "name": settings.BREVO_SENDER_NAME,
            "email": settings.BREVO_SENDER_EMAIL,
        },
        "to": [
            {
                # Este es el correo ingresado en el formulario.
                "email": email,
                "name": nombre,
            }
        ],
        "replyTo": {
            # Si el usuario responde, llegará a Grinsa.
            "email": settings.CONTACT_RECEIVER_EMAIL,
            "name": "Grinsa Manufacturas",
        },
        "subject": (
            "Recibimos tu mensaje | Grinsa Manufacturas"
        ),
        "htmlContent": contenido_confirmacion_html,
        "textContent": contenido_confirmacion_texto,
        "tags": [
            "contacto-web",
            "confirmacion-usuario",
        ],
    }

    envio_confirmacion, resultado_confirmacion = (
        enviar_correo_brevo(
            payload=payload_confirmacion,
            descripcion=(
                f"confirmación para el usuario {email}"
            ),
        )
    )

    if not envio_confirmacion:
        logger.error(
            (
                "Los datos llegaron a Grinsa, pero falló "
                "la confirmación para %s. Detalles: %s"
            ),
            email,
            resultado_confirmacion,
        )

        return JsonResponse(
            {
                "ok": True,
                "confirmacion_enviada": False,
                "mensaje": (
                    "Tus datos fueron enviados correctamente, "
                    "pero no pudimos enviar el correo de "
                    "confirmación. Nuestro equipo sí recibió "
                    "tu solicitud."
                ),
            },
            status=200,
        )

    return JsonResponse(
        {
            "ok": True,
            "confirmacion_enviada": True,
            "mensaje": (
                "Tu mensaje fue enviado correctamente. "
                "También enviamos una confirmación a tu correo."
            ),
        },
        status=200,
    )