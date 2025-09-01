<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:45:31+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "es"
}
-->
# Ejecutar el código

## Configuración

Crea un entorno virtual

```sh
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

Intenta escribir un mensaje en el chat; deberías ver una respuesta (siempre y cuando estés ejecutando esto en un Codespace o hayas configurado un token de acceso).

## Configurar el token de acceso (si no estás ejecutando esto en un Codespace)

Consulta [Configurar PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.