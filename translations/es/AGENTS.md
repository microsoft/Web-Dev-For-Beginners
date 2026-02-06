# AGENTS.md

## Descripción del Proyecto

Este es un repositorio de currículo educativo para enseñar los fundamentos del desarrollo web a principiantes. El currículo es un curso integral de 12 semanas desarrollado por Microsoft Cloud Advocates, que cuenta con 24 lecciones prácticas sobre JavaScript, CSS y HTML.

### Componentes Clave

- **Contenido Educativo**: 24 lecciones estructuradas organizadas en módulos basados en proyectos
- **Proyectos Prácticos**: Terrarium, Juego de mecanografía, Extensión de navegador, Juego espacial, Aplicación bancaria, Editor de código y Asistente de chat AI
- **Cuestionarios Interactivos**: 48 cuestionarios con 3 preguntas cada uno (evaluaciones pre y post lección)
- **Soporte Multilenguaje**: Traducciones automáticas a más de 50 idiomas mediante GitHub Actions
- **Tecnologías**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para proyectos de IA)

### Arquitectura

- Repositorio educativo con estructura basada en lecciones
- Cada carpeta de lección contiene README, ejemplos de código y soluciones
- Proyectos independientes en directorios separados (quiz-app, varios proyectos de lecciones)
- Sistema de traducción usando GitHub Actions (co-op-translator)
- Documentación servida vía Docsify y disponible como PDF

## Comandos de Configuración

Este repositorio es principalmente para el consumo de contenido educativo. Para trabajar con proyectos específicos:

### Configuración Principal del Repositorio

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Configuración de Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Iniciar el servidor de desarrollo
npm run build      # Construir para producción
npm run lint       # Ejecutar ESLint
```

### API del Proyecto Bancario (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Iniciar servidor API
npm run lint       # Ejecutar ESLint
npm run format     # Formatear con Prettier
```

### Proyectos de Extensión de Navegador

```bash
cd 5-browser-extension/solution
npm install
# Siga las instrucciones específicas del navegador para cargar extensiones
```

### Proyectos del Juego Espacial

```bash
cd 6-space-game/solution
npm install
# Abrir index.html en el navegador o usar Live Server
```

### Proyecto de Chat (Backend en Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Establecer la variable de entorno GITHUB_TOKEN
python api.py
```

## Flujo de Trabajo para Desarrollo

### Para Contribuidores de Contenido

1. **Haz un fork del repositorio** a tu cuenta de GitHub
2. **Clona tu fork** localmente
3. **Crea una nueva rama** para tus cambios
4. Realiza cambios en el contenido de las lecciones o ejemplos de código
5. Prueba cualquier cambio de código en los directorios de proyectos relevantes
6. Envía pull requests siguiendo las pautas de contribución

### Para Estudiantes

1. Haz fork o clona el repositorio
2. Navega por los directorios de lecciones secuencialmente
3. Lee los archivos README de cada lección
4. Completa los cuestionarios pre-lección en https://ff-quizzes.netlify.app/web/
5. Trabaja con los ejemplos de código dentro de las carpetas de lecciones
6. Completa tareas y desafíos
7. Realiza los cuestionarios post-lección

### Desarrollo en Vivo

- **Documentación**: Ejecuta `docsify serve` en la raíz (puerto 3000)
- **Quiz App**: Ejecuta `npm run dev` en el directorio quiz-app
- **Proyectos**: Usa la extensión Live Server de VS Code para proyectos HTML
- **Proyectos API**: Ejecuta `npm start` en los directorios API correspondientes

## Instrucciones de Pruebas

### Pruebas para Quiz App

```bash
cd quiz-app
npm run lint       # Verificar problemas de estilo de código
npm run build      # Verificar que la compilación sea exitosa
```

### Pruebas para Bank API

```bash
cd 7-bank-project/api
npm run lint       # Comprobar problemas de estilo de código
node server.js     # Verificar que el servidor se inicie sin errores
```

### Enfoque General de Pruebas

- Este es un repositorio educativo sin pruebas automatizadas exhaustivas
- Las pruebas manuales se enfocan en:
  - Que los ejemplos de código se ejecuten sin errores
  - Que los enlaces en la documentación funcionen correctamente
  - Que la construcción de proyectos finalice exitosamente
  - Que los ejemplos sigan buenas prácticas

### Verificaciones Previas a la Presentación

- Ejecuta `npm run lint` en directorios con package.json
- Verifica que los enlaces en markdown sean válidos
- Prueba los ejemplos de código en navegador o Node.js
- Revisa que las traducciones mantengan la estructura correcta

## Guías de Estilo de Código

### JavaScript

- Usa sintaxis moderna ES6+
- Sigue la configuración estándar de ESLint provista en los proyectos
- Usa nombres significativos para variables y funciones para claridad educativa
- Agrega comentarios explicando conceptos para los estudiantes
- Formatea usando Prettier donde esté configurado

### HTML/CSS

- Elementos semánticos HTML5
- Principios de diseño responsivo
- Convenciones claras para nombres de clases
- Comentarios que expliquen técnicas CSS para los estudiantes

### Python

- Guías de estilo PEP 8
- Ejemplos de código claros y educativos
- Indicaciones de tipo donde sean útiles para el aprendizaje

### Documentación Markdown

- Jerarquía clara de encabezados
- Bloques de código con especificación de lenguaje
- Enlaces a recursos adicionales
- Capturas de pantalla e imágenes en directorios `images/`
- Texto alternativo para imágenes para accesibilidad

### Organización de Archivos

- Lecciones numeradas secuencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada proyecto tiene directorios `solution/` y a menudo `start/` o `your-work/`
- Imágenes almacenadas en carpetas `images/` específicas por lección
- Traducciones en estructura `translations/{código-idioma}/`

## Construcción y Despliegue

### Despliegue de Quiz App (Azure Static Web Apps)

El quiz-app está configurado para despliegue en Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Crea la carpeta dist/
# Despliega mediante un flujo de trabajo de GitHub Actions al hacer push en main
```

Configuración de Azure Static Web Apps:
- **Ubicación de la app**: `/quiz-app`
- **Ubicación de salida**: `dist`
- **Flujo de trabajo**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generación de PDF de Documentación

```bash
npm install                    # Instalar docsify-to-pdf
npm run convert               # Generar PDF desde docs
```

### Documentación Docsify

```bash
npm install -g docsify-cli    # Instalar Docsify globalmente
docsify serve                 # Servir en localhost:3000
```

### Construcciones Específicas de Proyectos

Cada directorio de proyecto puede tener su propio proceso de construcción:
- Proyectos Vue: `npm run build` crea los bundles de producción
- Proyectos estáticos: No requieren paso de construcción, servir archivos directamente

## Guías para Pull Requests

### Formato del Título

Usa títulos claros y descriptivos que indiquen el área de cambio:
- `[Quiz-app] Añadir nuevo cuestionario para la lección X`
- `[Lesson-3] Corregir error tipográfico en proyecto terrarium`
- `[Translation] Añadir traducción al español para la lección 5`
- `[Docs] Actualizar instrucciones de configuración`

### Verificaciones Requeridas

Antes de enviar un PR:

1. **Calidad de Código**:
   - Ejecuta `npm run lint` en los directorios del proyecto afectado
   - Corrige todos los errores y advertencias de linting

2. **Verificación de Construcción**:
   - Ejecuta `npm run build` si aplica
   - Asegúrate de que no haya errores en la construcción

3. **Validación de Enlaces**:
   - Prueba todos los enlaces en markdown
   - Verifica que las referencias a imágenes funcionen

4. **Revisión de Contenido**:
   - Revisa ortografía y gramática
   - Asegura que los ejemplos de código sean correctos y educativos
   - Verifica que las traducciones mantengan el significado original

### Requisitos de Contribución

- Aceptar el CLA de Microsoft (verificación automática en el primer PR)
- Seguir el [Código de Conducta de Código Abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para pautas detalladas
- Referenciar números de issues en la descripción del PR si aplica

### Proceso de Revisión

- PRs revisados por mantenedores y comunidad
- Se prioriza la claridad educativa
- Los ejemplos de código deben seguir las mejores prácticas actuales
- Las traducciones se revisan para precisión y adecuación cultural

## Sistema de Traducción

### Traducción Automática

- Usa GitHub Actions con el flujo de trabajo co-op-translator
- Traduce automáticamente a más de 50 idiomas
- Archivos fuente en directorios principales
- Archivos traducidos en `translations/{código-idioma}/`

### Añadir Mejoras Manuales de Traducción

1. Ubica el archivo en `translations/{código-idioma}/`
2. Haz mejoras preservando la estructura
3. Asegura que los ejemplos de código continúen funcionando
4. Prueba cualquier contenido de cuestionarios localizado

### Metadatos de Traducción

Los archivos traducidos incluyen encabezado de metadatos:
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
- Verifica la versión de Node.js (recomendada v14+)
- Borra `node_modules` y `package-lock.json`, ejecuta `npm install` de nuevo
- Revisa conflictos de puerto (por defecto: Vite usa puerto 5173)

**El servidor API no arranca**:
- Verifica que la versión de Node.js sea mínima (node >=10)
- Comprueba si el puerto ya está en uso
- Asegúrate que todas las dependencias estén instaladas con `npm install`

**La extensión del navegador no carga**:
- Verifica que `manifest.json` esté formateado correctamente
- Revisa la consola del navegador para errores
- Sigue las instrucciones específicas del navegador para instalar extensiones

**Problemas en el proyecto de chat en Python**:
- Asegura que el paquete OpenAI está instalado: `pip install openai`
- Verifica que la variable de entorno GITHUB_TOKEN esté configurada
- Confirma permisos de acceso a GitHub Models

**Docsify no sirve la documentación**:
- Instala docsify-cli globalmente: `npm install -g docsify-cli`
- Ejecuta desde el directorio raíz del repositorio
- Verifica que `docs/_sidebar.md` exista

### Consejos para el Entorno de Desarrollo

- Usa VS Code con extensión Live Server para proyectos HTML
- Instala extensiones ESLint y Prettier para formato consistente
- Usa DevTools del navegador para depurar JavaScript
- Para proyectos Vue, instala la extensión Vue DevTools para navegador

### Consideraciones de Rendimiento

- Gran número de archivos traducidos (50+ idiomas) hace que los clones completos sean grandes
- Usa clonación superficial si trabajas solo en contenido: `git clone --depth 1`
- Excluye las traducciones de búsquedas al trabajar en contenido en inglés
- Los procesos de construcción pueden ser lentos en la primera ejecución (npm install, compilación Vite)

## Consideraciones de Seguridad

### Variables de Entorno

- Las claves API nunca deben ser confirmadas en el repositorio
- Usa archivos `.env` (ya incluidos en `.gitignore`)
- Documenta las variables de entorno requeridas en los README de los proyectos

### Proyectos Python

- Usa entornos virtuales: `python -m venv venv`
- Mantén las dependencias actualizadas
- Los tokens de GitHub deben tener permisos mínimos requeridos

### Acceso a GitHub Models

- Se requieren Tokens de Acceso Personal (PAT) para GitHub Models
- Los tokens deben almacenarse como variables de entorno
- Nunca confirmar tokens o credenciales

## Notas Adicionales

### Público Objetivo

- Principiantes completos en desarrollo web
- Estudiantes y autodidactas
- Profesores que usan el currículo en aulas
- Contenido diseñado para accesibilidad y desarrollo gradual de habilidades

### Filosofía Educativa

- Enfoque de aprendizaje basado en proyectos
- Verificaciones frecuentes de conocimiento (cuestionarios)
- Ejercicios prácticos de codificación
- Ejemplos de aplicación en escenarios reales
- Enfoque en fundamentos antes de frameworks

### Mantenimiento del Repositorio

- Comunidad activa de estudiantes y contribuidores
- Actualizaciones regulares de dependencias y contenido
- Issues y discusiones monitoreados por mantenedores
- Actualizaciones de traducción automatizadas vía GitHub Actions

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para estudiantes
- Cursos adicionales: IA generativa, Ciencia de datos, ML, currículos de IoT disponibles

### Trabajando con Proyectos Específicos

Para instrucciones detalladas sobre proyectos individuales, consulta los archivos README en:
- `quiz-app/README.md` - Aplicación de cuestionarios Vue 3
- `7-bank-project/README.md` - Aplicación bancaria con autenticación
- `5-browser-extension/README.md` - Desarrollo de extensión para navegador
- `6-space-game/README.md` - Desarrollo de juego basado en canvas
- `9-chat-project/README.md` - Proyecto asistente de chat AI

### Estructura Monorepo

Aunque no es un monorepo tradicional, este repositorio contiene múltiples proyectos independientes:
- Cada lección es autocontenida
- Los proyectos no comparten dependencias
- Trabaja en proyectos individuales sin afectar otros
- Clona el repositorio completo para experiencia del currículo completo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por la precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda la traducción profesional realizada por humanos. No nos hacemos responsables de ningún malentendido o interpretación errónea que surja del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->