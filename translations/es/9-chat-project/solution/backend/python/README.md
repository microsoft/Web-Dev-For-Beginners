<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2026-01-06T08:14:45+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "es"
}
-->
# Ejecutar código

## Configurar

Crear entorno virtual

```sh
python -m venv venv
source ./venv/bin/activate
```

## Instalar dependencias

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Ejecutar API

```sh
# Método 1: Ejecución directa
python api.py

# Método 2: Usando uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Probar API

Visita la documentación interactiva de la API en: `http://localhost:5000/docs`

## Ejecutar frontend

Asegúrate de estar en la carpeta frontend

Ubica *app.js*, cambia `BASE_URL` por el URL de tu backend

Ejecuta

```
npx http-server -p 8000
```

Intenta escribir un mensaje en el chat, deberías ver una respuesta (siempre que estés ejecutándolo en un Codespace o hayas configurado un token de acceso).

## Configurar token de acceso (si no ejecutas esto en un Codespace)

Consulta [Configurar PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento ha sido traducido utilizando el servicio de traducción por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la exactitud, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe ser considerado la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->