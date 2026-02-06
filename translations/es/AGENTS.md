# AGENTS.md

## Descripción del Proyecto

Este es un repositorio educativo para enseñar fundamentos de desarrollo web a principiantes. El currículo es un curso integral de 12 semanas desarrollado por Microsoft Cloud Advocates, que incluye 24 lecciones prácticas sobre JavaScript, CSS y HTML.

### Componentes Clave

- **Contenido Educativo**: 24 lecciones estructuradas organizadas en módulos basados en proyectos
- **Proyectos Prácticos**: Terrarium, Juego de mecanografía, Extensión de navegador, Juego espacial, Aplicación bancaria, Editor de código y Asistente de chat AI
- **Cuestionarios Interactivos**: 48 cuestionarios con 3 preguntas cada uno (evaluaciones antes/después de las lecciones)
- **Soporte Multilenguaje**: Traducciones automáticas para más de 50 idiomas mediante GitHub Actions
- **Tecnologías**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para proyectos AI)

### Arquitectura

- Repositorio educativo con estructura basada en lecciones
- Cada carpeta de lección contiene README, ejemplos de código y soluciones
- Proyectos independientes en directorios separados (quiz-app, varios proyectos de lecciones)
- Sistema de traducción usando GitHub Actions (co-op-translator)
- Documentación servida vía Docsify y disponible en PDF

## Comandos de Configuración

Este repositorio es principalmente para consumir contenido educativo. Para trabajar con proyectos específicos:

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
# Abre index.html en el navegador o usa Live Server
```

### Proyecto de Chat (Backend en Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Establecer la variable de entorno GITHUB_TOKEN
python api.py
```

## Flujo de Trabajo de Desarrollo

### Para Contribuidores de Contenido

1. **Haz fork del repositorio** a tu cuenta de GitHub
2. **Clona tu fork** localmente
3. **Crea una nueva rama** para tus cambios
4. Realiza cambios en el contenido de las lecciones o ejemplos de código
5. Prueba cualquier cambio de código en los directorios de proyecto correspondientes
6. Envía pull requests siguiendo las directrices de contribución

### Para Estudiantes

1. Haz fork o clona el repositorio
2. Navega por los directorios de lecciones secuencialmente
3. Lee los archivos README de cada lección
4. Completa los cuestionarios previos en https://ff-quizzes.netlify.app/web/
5. Trabaja con los ejemplos de código en las carpetas de las lecciones
6. Cumple con tareas y desafíos
7. Realiza los cuestionarios posteriores a las lecciones

### Desarrollo en Vivo

- **Documentación**: Ejecuta `docsify serve` en la raíz (puerto 3000)
- **Quiz App**: Ejecuta `npm run dev` dentro del directorio quiz-app
- **Proyectos**: Usa la extensión Live Server de VS Code para proyectos HTML
- **Proyectos API**: Ejecuta `npm start` en los directorios API respectivos

## Instrucciones de Prueba

### Pruebas de Quiz App

```bash
cd quiz-app
npm run lint       # Verificar problemas de estilo de código
npm run build      # Verificar que la compilación sea exitosa
```

### Pruebas de API Bancaria

```bash
cd 7-bank-project/api
npm run lint       # Verificar problemas de estilo de código
node server.js     # Verificar que el servidor inicie sin errores
```

### Enfoque General de Pruebas

- Este es un repositorio educativo sin pruebas automatizadas exhaustivas
- Pruebas manuales enfocadas en:
  - Ejecución sin errores de los ejemplos de código
  - Funcionamiento correcto de enlaces en la documentación
  - Construcción exitosa de los proyectos
  - Ejemplos que siguen buenas prácticas

### Verificaciones Previas al Envío

- Ejecuta `npm run lint` en directorios con package.json
- Verifica que los enlaces markdown sean válidos
- Prueba los ejemplos de código en navegador o Node.js
- Asegura que las traducciones mantienen la estructura adecuada

## Guías de Estilo de Código

### JavaScript

- Usa sintaxis moderna ES6+
- Sigue configuraciones estándar de ESLint providas en los proyectos
- Usa nombres significativos para variables y funciones para claridad educativa
- Añade comentarios que expliquen conceptos para los estudiantes
- Formatea con Prettier donde esté configurado

### HTML/CSS

- Elementos semánticos HTML5
- Principios de diseño responsivo
- Convenciones claras para nombres de clases
- Comentarios que expliquen técnicas CSS para estudiantes

### Python

- Guías de estilo PEP 8
- Ejemplos claros y educativos
- Usar anotaciones de tipo donde ayuden en el aprendizaje

### Documentación Markdown

- Jerarquía clara de encabezados
- Bloques de código con especificación de lenguaje
- Enlaces a recursos adicionales
- Capturas de pantalla e imágenes en directorios `images/`
- Texto alternativo para imágenes para accesibilidad

### Organización de Archivos

- Lecciones numeradas secuencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada proyecto tiene directorios `solution/` y frecuentemente `start/` o `your-work/`
- Imágenes almacenadas en carpetas `images/` específicas de cada lección
- Traducciones en estructura `translations/{código-idioma}/`

## Construcción y Despliegue

### Despliegue de Quiz App (Azure Static Web Apps)

La quiz-app está configurada para despliegue en Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Crea la carpeta dist/
# Despliega mediante el flujo de trabajo de GitHub Actions al hacer push a main
```

Configuración de Azure Static Web Apps:
- **Ubicación de la app**: `/quiz-app`
- **Ubicación de salida**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generación PDF de Documentación

```bash
npm install                    # Instalar docsify-to-pdf
npm run convert               # Generar PDF a partir de docs
```

### Documentación con Docsify

```bash
npm install -g docsify-cli    # Instalar Docsify globalmente
docsify serve                 # Servir en localhost:3000
```

### Construcciones específicas por proyecto

Cada directorio de proyecto puede tener su propio proceso de construcción:
- Proyectos Vue: `npm run build` crea bundles de producción
- Proyectos estáticos: no hay paso de construcción, sirven archivos directamente

## Directrices para Pull Requests

### Formato del Título

Usa títulos claros y descriptivos que indiquen el área del cambio:
- `[Quiz-app] Añadir nuevo cuestionario para la lección X`
- `[Lesson-3] Corregir error tipográfico en proyecto terrarium`
- `[Translation] Añadir traducción al español para lección 5`
- `[Docs] Actualizar instrucciones de configuración`

### Comprobaciones Requeridas

Antes de enviar un PR:

1. **Calidad de Código**:
   - Ejecuta `npm run lint` en directorios de proyectos afectados
   - Corrige todos errores y advertencias de linting

2. **Verificación de Construcción**:
   - Ejecuta `npm run build` si aplica
   - Asegura que no haya errores en la construcción

3. **Validación de Enlaces**:
   - Prueba todos los enlaces markdown
   - Verifica referencias a imágenes

4. **Revisión de Contenido**:
   - Revisa ortografía y gramática
   - Asegura que los ejemplos de código sean correctos y educativos
   - Verifica que traducciones mantengan el significado original

### Requisitos para Contribuir

- Aceptar el CLA de Microsoft (verificación automática en el primer PR)
- Seguir el [Código de Conducta de Código Abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para directrices detalladas
- Referenciar números de issues en la descripción del PR si aplica

### Proceso de Revisión

- PRs son revisados por mantenedores y la comunidad
- Se prioriza claridad educativa
- Los ejemplos de código deben seguir las mejores prácticas actuales
- Las traducciones se revisan por precisión y adecuación cultural

## Sistema de Traducción

### Traducción Automatizada

- Usa GitHub Actions con workflow co-op-translator
- Traduce automáticamente a más de 50 idiomas
- Archivos fuente en directorios principales
- Archivos traducidos en directorios `translations/{código-idioma}/`

### Añadir Mejoras Manuales de Traducción

1. Localiza el archivo en `translations/{código-idioma}/`
2. Realiza mejoras preservando la estructura
3. Asegura que los ejemplos de código sigan funcionando
4. Prueba cualquier contenido localizado en los cuestionarios

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

## Depuración y Solución de Problemas

### Problemas Comunes

**La aplicación del cuestionario no inicia**:
- Verificar versión de Node.js (se recomienda v14+)
- Eliminar `node_modules` y `package-lock.json`, ejecutar `npm install` nuevamente
- Comprobar conflictos de puerto (por defecto: Vite usa puerto 5173)

**El servidor API no inicia**:
- Verificar que la versión de Node.js cumpla el mínimo (node >=10)
- Verificar si el puerto ya está en uso
- Asegurar que todas las dependencias estén instaladas con `npm install`

**La extensión del navegador no carga**:
- Verificar que `manifest.json` esté correctamente formateado
- Revisar la consola del navegador para errores
- Seguir instrucciones específicas de instalación para la extensión en el navegador

**Problemas con el proyecto de chat en Python**:
- Asegurarse de tener instalado el paquete OpenAI: `pip install openai`
- Verificar que la variable de entorno GITHUB_TOKEN esté configurada
- Comprobar permisos de acceso a modelos GitHub

**Docsify no sirve la documentación**:
- Instalar docsify-cli globalmente: `npm install -g docsify-cli`
- Ejecutar desde el directorio raíz del repositorio
- Verificar que `docs/_sidebar.md` exista

### Consejos para el Entorno de Desarrollo

- Usar VS Code con la extensión Live Server para proyectos HTML
- Instalar extensiones ESLint y Prettier para formateo consistente
- Usar DevTools del navegador para depurar JavaScript
- Para proyectos Vue, instalar la extensión Vue DevTools en el navegador

### Consideraciones de Rendimiento

- Gran número de archivos traducidos (más de 50 idiomas) implica clones completos grandes
- Usar clonación superficial si solo se trabaja con contenido: `git clone --depth 1`
- Excluir traducciones de búsquedas cuando se trabaja en contenido en inglés
- Los procesos de construcción pueden ser lentos en la primera ejecución (npm install, construcción Vite)

## Consideraciones de Seguridad

### Variables de Entorno

- Las claves API nunca deben subirse al repositorio
- Usar archivos `.env` (ya incluidos en `.gitignore`)
- Documentar variables de entorno requeridas en los README de proyectos

### Proyectos en Python

- Usar entornos virtuales: `python -m venv venv`
- Mantener dependencias actualizadas
- Los tokens de GitHub deben tener permisos mínimos necesarios

### Acceso a Modelos de GitHub

- Se requieren Tokens de Acceso Personal (PAT) para modelos de GitHub
- Los tokens deben guardarse como variables de entorno
- Nunca subir tokens o credenciales al repositorio

## Notas Adicionales

### Audiencia Objetivo

- Principiantes completos en desarrollo web
- Estudiantes y autodidactas
- Profesores que usan el currículo en aulas
- Contenido diseñado para accesibilidad y construcción gradual de habilidades

### Filosofía Educativa

- Enfoque basado en proyectos
- Controles frecuentes de conocimiento (cuestionarios)
- Ejercicios prácticos de codificación
- Ejemplos de aplicación en el mundo real
- Enfasis en fundamentos antes que en frameworks

### Mantenimiento del Repositorio

- Comunidad activa de estudiantes y colaboradores
- Actualizaciones regulares de dependencias y contenido
- Issues y discusiones monitorizadas por mantenedores
- Actualizaciones automáticas de traducción vía GitHub Actions

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos del Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para estudiantes
- Cursos adicionales: IA generativa, Ciencia de datos, ML, currículos IoT disponibles

### Trabajo con Proyectos Específicos

Para instrucciones detalladas sobre proyectos individuales, consulte los archivos README en:
- `quiz-app/README.md` - Aplicación de cuestionarios Vue 3
- `7-bank-project/README.md` - Aplicación bancaria con autenticación
- `5-browser-extension/README.md` - Desarrollo de extensiones de navegador
- `6-space-game/README.md` - Desarrollo de juego con canvas
- `9-chat-project/README.md` - Proyecto asistente de chat AI

### Estructura Monorepo

Aunque no es un monorepo tradicional, este repositorio contiene múltiples proyectos independientes:
- Cada lección es autónoma
- Los proyectos no comparten dependencias
- Se puede trabajar en proyectos individuales sin afectar a otros
- Clonar el repositorio completo para la experiencia de currículo completa

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso legal**:
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos responsabilizamos por malentendidos o interpretaciones erróneas derivadas del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->