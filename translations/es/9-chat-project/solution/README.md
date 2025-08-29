<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T17:07:46+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "es"
}
-->
# Ejecutar el código

## Configuración

Crear un entorno virtual

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## Instalar dependencias

```sh
pip install openai flask flask-cors 
```

## Ejecutar la API

```sh
python api.py
```

## Ejecutar el frontend

Asegúrate de estar en la carpeta del frontend.

Ubica *app.js* y cambia `BASE_URL` a la URL de tu backend.

Ejecuta el frontend

```
npx http-server -p 8000
```

Intenta escribir un mensaje en el chat; deberías ver una respuesta (siempre que estés ejecutando esto en un Codespace o hayas configurado un token de acceso).

## Configurar el token de acceso (si no estás ejecutando esto en un Codespace)

Consulta [Configurar PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.