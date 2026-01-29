# AGENTS.md

## Resumen del Proyecto

Este es un repositorio de currículo educativo diseñado para enseñar los fundamentos del desarrollo web a principiantes. El currículo es un curso completo de 12 semanas desarrollado por los Microsoft Cloud Advocates, que incluye 24 lecciones prácticas sobre JavaScript, CSS y HTML.

### Componentes Clave

- **Contenido Educativo**: 24 lecciones estructuradas organizadas en módulos basados en proyectos
- **Proyectos Prácticos**: Terrario, Juego de Escritura, Extensión de Navegador, Juego Espacial, Aplicación Bancaria, Editor de Código y Asistente de Chat con IA
- **Cuestionarios Interactivos**: 48 cuestionarios con 3 preguntas cada uno (evaluaciones antes y después de las lecciones)
- **Soporte Multilingüe**: Traducciones automáticas a más de 50 idiomas mediante GitHub Actions
- **Tecnologías**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para proyectos de IA)

### Arquitectura

- Repositorio educativo con estructura basada en lecciones
- Cada carpeta de lección contiene README, ejemplos de código y soluciones
- Proyectos independientes en directorios separados (quiz-app, varios proyectos de lecciones)
- Sistema de traducción utilizando GitHub Actions (co-op-translator)
- Documentación servida mediante Docsify y disponible en formato PDF

## Comandos de Configuración

Este repositorio está diseñado principalmente para el consumo de contenido educativo. Para trabajar con proyectos específicos:

### Configuración del Repositorio Principal

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Configuración de la Aplicación de Cuestionarios (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API del Proyecto Bancario (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Proyectos de Extensión de Navegador

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Proyectos del Juego Espacial

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Proyecto de Chat (Backend en Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Flujo de Trabajo de Desarrollo

### Para Contribuidores de Contenido

1. **Haz un fork del repositorio** en tu cuenta de GitHub
2. **Clona tu fork** localmente
3. **Crea una nueva rama** para tus cambios
4. Realiza cambios en el contenido de las lecciones o ejemplos de código
5. Prueba los cambios de código en los directorios de proyectos relevantes
6. Envía pull requests siguiendo las pautas de contribución

### Para Estudiantes

1. Haz un fork o clona el repositorio
2. Navega por los directorios de las lecciones en orden
3. Lee los archivos README de cada lección
4. Completa los cuestionarios previos a la lección en https://ff-quizzes.netlify.app/web/
5. Trabaja con los ejemplos de código en las carpetas de las lecciones
6. Completa las tareas y desafíos
7. Realiza los cuestionarios posteriores a la lección

### Desarrollo en Vivo

- **Documentación**: Ejecuta `docsify serve` en la raíz (puerto 3000)
- **Aplicación de Cuestionarios**: Ejecuta `npm run dev` en el directorio quiz-app
- **Proyectos**: Usa la extensión Live Server de VS Code para proyectos HTML
- **Proyectos API**: Ejecuta `npm start` en los directorios API correspondientes

## Instrucciones de Pruebas

### Pruebas de la Aplicación de Cuestionarios

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Pruebas de la API Bancaria

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Enfoque General de Pruebas

- Este es un repositorio educativo sin pruebas automatizadas completas
- Las pruebas manuales se centran en:
  - Ejecución de ejemplos de código sin errores
  - Funcionamiento correcto de los enlaces en la documentación
  - Construcción exitosa de los proyectos
  - Cumplimiento de las mejores prácticas en los ejemplos

### Verificaciones Antes de Enviar

- Ejecuta `npm run lint` en los directorios con package.json
- Verifica que los enlaces en markdown sean válidos
- Prueba los ejemplos de código en el navegador o Node.js
- Asegúrate de que las traducciones mantengan la estructura adecuada

## Pautas de Estilo de Código

### JavaScript

- Usa sintaxis moderna ES6+
- Sigue las configuraciones estándar de ESLint proporcionadas en los proyectos
- Usa nombres de variables y funciones significativos para mayor claridad educativa
- Agrega comentarios explicando conceptos para los estudiantes
- Formatea usando Prettier donde esté configurado

### HTML/CSS

- Elementos semánticos de HTML5
- Principios de diseño responsivo
- Convenciones claras para nombrar clases
- Comentarios explicando técnicas de CSS para los estudiantes

### Python

- Directrices de estilo PEP 8
- Ejemplos de código claros y educativos
- Indicaciones de tipo donde sean útiles para el aprendizaje

### Documentación en Markdown

- Jerarquía clara de encabezados
- Bloques de código con especificación de lenguaje
- Enlaces a recursos adicionales
- Capturas de pantalla e imágenes en directorios `images/`
- Texto alternativo para imágenes para accesibilidad

### Organización de Archivos

- Lecciones numeradas secuencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada proyecto tiene directorios `solution/` y, a menudo, `start/` o `your-work/`
- Imágenes almacenadas en carpetas `images/` específicas de cada lección
- Traducciones en la estructura `translations/{language-code}/`

## Construcción y Despliegue

### Despliegue de la Aplicación de Cuestionarios (Azure Static Web Apps)

La aplicación quiz-app está configurada para el despliegue en Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Configuración de Azure Static Web Apps:
- **Ubicación de la aplicación**: `/quiz-app`
- **Ubicación de salida**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generación de Documentación en PDF

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Documentación con Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Construcciones Específicas de Proyectos

Cada directorio de proyecto puede tener su propio proceso de construcción:
- Proyectos Vue: `npm run build` crea paquetes de producción
- Proyectos estáticos: Sin paso de construcción, sirve los archivos directamente

## Pautas para Pull Requests

### Formato del Título

Usa títulos claros y descriptivos que indiquen el área de cambio:
- `[Quiz-app] Añadir nuevo cuestionario para la lección X`
- `[Lesson-3] Corregir error tipográfico en el proyecto terrario`
- `[Translation] Añadir traducción al español para la lección 5`
- `[Docs] Actualizar instrucciones de configuración`

### Verificaciones Requeridas

Antes de enviar un PR:

1. **Calidad del Código**:
   - Ejecuta `npm run lint` en los directorios de proyectos afectados
   - Corrige todos los errores y advertencias de linting

2. **Verificación de Construcción**:
   - Ejecuta `npm run build` si aplica
   - Asegúrate de que no haya errores de construcción

3. **Validación de Enlaces**:
   - Prueba todos los enlaces en markdown
   - Verifica que las referencias a imágenes funcionen

4. **Revisión de Contenido**:
   - Revisa ortografía y gramática
   - Asegúrate de que los ejemplos de código sean correctos y educativos
   - Verifica que las traducciones mantengan el significado original

### Requisitos de Contribución

- Aceptar el Microsoft CLA (verificación automática en el primer PR)
- Seguir el [Código de Conducta de Código Abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consulta [CONTRIBUTING.md](./CONTRIBUTING.md) para pautas detalladas
- Referencia números de issues en la descripción del PR si aplica

### Proceso de Revisión

- Los PRs son revisados por mantenedores y la comunidad
- Se prioriza la claridad educativa
- Los ejemplos de código deben seguir las mejores prácticas actuales
- Las traducciones son revisadas para precisión y adecuación cultural

## Sistema de Traducción

### Traducción Automática

- Utiliza GitHub Actions con el workflow co-op-translator
- Traduce automáticamente a más de 50 idiomas
- Archivos fuente en directorios principales
- Archivos traducidos en `translations/{language-code}/`

### Añadir Mejoras Manuales a Traducciones

1. Localiza el archivo en `translations/{language-code}/`
2. Realiza mejoras manteniendo la estructura
3. Asegúrate de que los ejemplos de código sigan siendo funcionales
4. Prueba cualquier contenido de cuestionarios localizado

### Metadatos de Traducción

Los archivos traducidos incluyen un encabezado de metadatos:
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## Depuración y Resolución de Problemas

### Problemas Comunes

**La aplicación de cuestionarios no inicia**:
- Verifica la versión de Node.js (se recomienda v14+)
- Elimina `node_modules` y `package-lock.json`, ejecuta `npm install` nuevamente
- Verifica conflictos de puertos (por defecto: Vite usa el puerto 5173)

**El servidor API no inicia**:
- Verifica que la versión de Node.js cumpla con el mínimo (node >=10)
- Comprueba si el puerto ya está en uso
- Asegúrate de que todas las dependencias estén instaladas con `npm install`

**La extensión de navegador no se carga**:
- Verifica que manifest.json esté correctamente formateado
- Revisa la consola del navegador para errores
- Sigue las instrucciones específicas del navegador para instalar extensiones

**Problemas con el proyecto de chat en Python**:
- Asegúrate de que el paquete OpenAI esté instalado: `pip install openai`
- Verifica que la variable de entorno GITHUB_TOKEN esté configurada
- Revisa los permisos de acceso a GitHub Models

**Docsify no sirve la documentación**:
- Instala docsify-cli globalmente: `npm install -g docsify-cli`
- Ejecuta desde el directorio raíz del repositorio
- Verifica que `docs/_sidebar.md` exista

### Consejos para el Entorno de Desarrollo

- Usa VS Code con la extensión Live Server para proyectos HTML
- Instala las extensiones ESLint y Prettier para un formato consistente
- Usa las herramientas de desarrollo del navegador para depurar JavaScript
- Para proyectos Vue, instala la extensión Vue DevTools en el navegador

### Consideraciones de Rendimiento

- El gran número de archivos traducidos (más de 50 idiomas) hace que los clones completos sean grandes
- Usa un clon superficial si solo trabajas en contenido: `git clone --depth 1`
- Excluye las traducciones de las búsquedas cuando trabajes en contenido en inglés
- Los procesos de construcción pueden ser lentos en la primera ejecución (npm install, construcción con Vite)

## Consideraciones de Seguridad

### Variables de Entorno

- Las claves de API nunca deben ser comprometidas en el repositorio
- Usa archivos `.env` (ya incluidos en `.gitignore`)
- Documenta las variables de entorno requeridas en los archivos README de los proyectos

### Proyectos en Python

- Usa entornos virtuales: `python -m venv venv`
- Mantén las dependencias actualizadas
- Los tokens de GitHub deben tener permisos mínimos requeridos

### Acceso a GitHub Models

- Se requieren Tokens de Acceso Personal (PAT) para GitHub Models
- Los tokens deben almacenarse como variables de entorno
- Nunca comprometas tokens o credenciales

## Notas Adicionales

### Público Objetivo

- Principiantes completos en desarrollo web
- Estudiantes y autodidactas
- Profesores que usan el currículo en aulas
- El contenido está diseñado para accesibilidad y desarrollo gradual de habilidades

### Filosofía Educativa

- Enfoque de aprendizaje basado en proyectos
- Verificaciones frecuentes de conocimiento (cuestionarios)
- Ejercicios prácticos de codificación
- Ejemplos de aplicación en el mundo real
- Enfoque en fundamentos antes de frameworks

### Mantenimiento del Repositorio

- Comunidad activa de estudiantes y contribuyentes
- Actualizaciones regulares de dependencias y contenido
- Issues y discusiones monitoreados por mantenedores
- Actualizaciones de traducción automatizadas mediante GitHub Actions

### Recursos Relacionados

- [Módulos de Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos del Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para estudiantes
- Cursos adicionales: Generative AI, Ciencia de Datos, ML, currículos de IoT disponibles

### Trabajando con Proyectos Específicos

Para instrucciones detalladas sobre proyectos individuales, consulta los archivos README en:
- `quiz-app/README.md` - Aplicación de cuestionarios en Vue 3
- `7-bank-project/README.md` - Aplicación bancaria con autenticación
- `5-browser-extension/README.md` - Desarrollo de extensiones de navegador
- `6-space-game/README.md` - Desarrollo de juegos basados en Canvas
- `9-chat-project/README.md` - Proyecto de asistente de chat con IA

### Estructura Monorepo

Aunque no es un monorepo tradicional, este repositorio contiene múltiples proyectos independientes:
- Cada lección es autónoma
- Los proyectos no comparten dependencias
- Trabaja en proyectos individuales sin afectar a otros
- Clona el repositorio completo para la experiencia completa del currículo

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que surjan del uso de esta traducción.