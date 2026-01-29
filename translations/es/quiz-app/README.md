# Aplicación de cuestionarios

Estos cuestionarios son los cuestionarios previos y posteriores a las clases del plan de estudios de ciencia de datos en https://aka.ms/webdev-beginners

## Agregar un conjunto de cuestionarios traducidos

Agrega una traducción de cuestionarios creando estructuras de cuestionarios correspondientes en las carpetas `assets/translations`. Los cuestionarios originales están en `assets/translations/en`. Los cuestionarios están divididos en varios grupos. Asegúrate de alinear la numeración con la sección de cuestionarios adecuada. Hay un total de 40 cuestionarios en este plan de estudios, comenzando desde el número 0.

  
<details>
<summary>Así es la estructura de un archivo de traducción:</summary>

```
[
    {
        "title": "A title",
        "complete": "A complete button title",
        "error": "An error message upon selecting the wrong answer",
        "quizzes": [
            {
                "id": 1,
                "title": "Title",
                "quiz": [
                    {
                        "questionText": "The question asked",
                        "answerOptions": [
                            {
                                "answerText": "Option 1 title",
                                "isCorrect": true
                            },
                            {
                                "answerText": "Option 2 title",
                                "isCorrect": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```
</details>

Después de editar las traducciones, edita el archivo index.js en la carpeta de traducción para importar todos los archivos siguiendo las convenciones en `en`.

Edita el archivo `index.js` en `assets/translations` para importar los nuevos archivos traducidos. 

Por ejemplo, si tu archivo JSON de traducción es `ex.json`, usa 'ex' como clave de localización y luego ingrésalo como se muestra a continuación para importarlo:

<details>
<summary>index.js</summary>

```
import ex from "./ex.json";

// if 'ex' is localization key then enter it like so in `messages` to expose it 

const messages = {
  ex: ex[0],
};

export default messages;
```

</details>

## Ejecutar la aplicación de cuestionarios localmente

### Requisitos previos

- Una cuenta de GitHub
- [Node.js y Git](https://nodejs.org/)

### Instalación y configuración

1. Crea un repositorio a partir de esta [plantilla](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Clona tu nuevo repositorio y navega a la carpeta quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Instala los paquetes y dependencias de npm

   ```bash
   npm install
   ```

### Construir la aplicación

1. Para construir la solución, ejecuta:

   ```bash
   npm run build
   ```

### Iniciar la aplicación

1. Para ejecutar la solución, ejecuta:

    ```bash
    npm run dev
    ```

### [Opcional] Linter

1. Para asegurarte de que el código está correctamente lintado, ejecuta:

    ```bash
    npm run lint
    ```

## Desplegar la aplicación de cuestionarios en Azure 

### Requisitos previos
- Una suscripción a Azure. Regístrate gratis [aquí](https://aka.ms/azure-free).

    _Estimación de costos para desplegar esta aplicación de cuestionarios: GRATIS_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Una vez que hayas iniciado sesión en Azure a través del enlace anterior, selecciona una suscripción y un grupo de recursos, luego:

- Detalles de la aplicación web estática: Proporciona un nombre y selecciona un plan de alojamiento.
- Inicio de sesión en GitHub: Configura tu fuente de despliegue como GitHub, luego inicia sesión y completa los campos requeridos en el formulario:
    - *Organización* – Elige tu organización.
    - *Repositorio* – Selecciona el repositorio del plan de estudios Web Dev for Beginners. 
    - *Rama* - Selecciona una rama (main) 
- Presets de construcción: Azure Static Web Apps utiliza un algoritmo de detección para identificar el framework utilizado en tu aplicación. 
    - *Ubicación de la aplicación* - ./quiz-app
    - *Ubicación de la API* -
    - *Ubicación de salida* - dist
- Despliegue: Haz clic en 'Review + Create', luego 'Create'.

    Una vez desplegado, se creará un archivo de flujo de trabajo en el directorio *.github* de tu repositorio. Este archivo de flujo de trabajo contiene instrucciones sobre los eventos que activarán un nuevo despliegue de la aplicación en Azure, por ejemplo, _un **push** en la rama **main**, etc.

    <details>
    <summary>Ejemplo de archivo de flujo de trabajo</summary>
    Aquí tienes un ejemplo de cómo podría verse el archivo de flujo de trabajo de GitHub Actions:
    name: Azure Static Web Apps CI/CD

    ```
    on:
    push:
        branches:
        - main
    pull_request:
        types: [opened, synchronize, reopened, closed]
        branches:
        - main

    jobs:
    build_and_deploy_job:
        runs-on: ubuntu-latest
        name: Build and Deploy Job
        steps:
        - uses: actions/checkout@v2
        - name: Build And Deploy
            id: builddeploy
            uses: Azure/static-web-apps-deploy@v1
            with:
            azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
            repo_token: ${{ secrets.GITHUB_TOKEN }}
            action: "upload"
            app_location: "quiz-app" # App source code path
            api_location: ""API source code path optional
            output_location: "dist" #Built app content directory - optional
    ```

    </details>

- Post-despliegue: Después de que el despliegue esté completo, haz clic en 'Go to Deployment' y luego en 'View app in browser'.

Una vez que tu acción de GitHub (flujo de trabajo) se ejecute correctamente, actualiza la página en vivo para ver tu aplicación.

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.