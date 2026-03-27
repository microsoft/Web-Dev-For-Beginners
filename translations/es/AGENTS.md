# AGENTS.md

## Descripción del Proyecto

Este es un repositorio curricular educativo para enseñar los fundamentos del desarrollo web a principiantes. El plan de estudios es un curso completo de 12 semanas desarrollado por Microsoft Cloud Advocates, que incluye 24 lecciones prácticas sobre JavaScript, CSS y HTML.

### Componentes Clave

- **Contenido Educativo**: 24 lecciones estructuradas organizadas en módulos basados en proyectos
- **Proyectos Prácticos**: Terrario, Juego de mecanografía, Extensión de navegador, Juego espacial, Aplicación bancaria, Editor de código y Asistente de chat con IA
- **Cuestionarios Interactivos**: 48 cuestionarios con 3 preguntas cada uno (evaluaciones pre/post lección)
- **Soporte Multilingüe**: Traducciones automatizadas en más de 50 idiomas mediante GitHub Actions
- **Tecnologías**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para proyectos de IA)

### Arquitectura

- Repositorio educativo con estructura basada en lecciones
- Cada carpeta de lección contiene README, ejemplos de código y soluciones
- Proyectos independientes en directorios separados (quiz-app, varios proyectos de lecciones)
- Sistema de traducción usando GitHub Actions (co-op-translator)
- Documentación servida mediante Docsify y disponible en PDF

## Comandos de Configuración

Este repositorio es principalmente para consumir contenido educativo. Para trabajar con proyectos específicos:

### Configuración Principal del Repositorio

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Configuración de la Aplicación de Cuestionarios (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Iniciar servidor de desarrollo
npm run build      # Compilar para producción
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

### Para Contribuyentes de Contenido

1. **Haz fork del repositorio** a tu cuenta de GitHub
2. **Clona tu fork** localmente
3. **Crea una rama nueva** para tus cambios
4. Realiza cambios en el contenido de las lecciones o ejemplos de código
5. Prueba los cambios de código en los directorios de proyectos correspondientes
6. Envía pull requests siguiendo las pautas de contribución

### Para Estudiantes

1. Haz fork o clona el repositorio
2. Navega por los directorios de las lecciones en orden secuencial
3. Lee los archivos README de cada lección
4. Completa los cuestionarios previos en https://ff-quizzes.netlify.app/web/
5. Trabaja con los ejemplos de código en las carpetas de las lecciones
6. Completa las tareas y desafíos
7. Realiza los cuestionarios posteriores a las lecciones

### Desarrollo en Vivo

- **Documentación**: Ejecuta `docsify serve` en la raíz (puerto 3000)
- **Aplicación de Cuestionarios**: Ejecuta `npm run dev` en el directorio quiz-app
- **Proyectos**: Usa la extensión Live Server de VS Code para proyectos HTML
- **Proyectos API**: Ejecuta `npm start` en los directorios API correspondientes

## Instrucciones para Pruebas

### Pruebas de la Aplicación de Cuestionarios

```bash
cd quiz-app
npm run lint       # Verificar problemas de estilo de código
npm run build      # Verificar que la compilación sea exitosa
```

### Pruebas API Bancaria

```bash
cd 7-bank-project/api
npm run lint       # Comprobar problemas de estilo de código
node server.js     # Verificar que el servidor arranque sin errores
```

### Enfoque General para Pruebas

- Este es un repositorio educativo sin pruebas automatizadas exhaustivas
- Las pruebas manuales se enfocan en:
  - Los ejemplos de código funcionan sin errores
  - Los enlaces en la documentación funcionan correctamente
  - Las compilaciones de proyectos terminan sin errores
  - Los ejemplos siguen las mejores prácticas

### Revisiones Previas a la Envío

- Ejecutar `npm run lint` en los directorios con package.json
- Verificar que los enlaces markdown sean válidos
- Probar ejemplos de código en navegador o Node.js
- Comprobar que las traducciones mantengan la estructura adecuada

## Pautas de Estilo de Código

### JavaScript

- Usar sintaxis moderna ES6+
- Seguir configuraciones estándar de ESLint proporcionadas en los proyectos
- Usar nombres significativos en variables y funciones para claridad educativa
- Añadir comentarios explicativos para los conceptos
- Formatear con Prettier donde esté configurado

### HTML/CSS

- Elementos semánticos HTML5
- Principios de diseño responsivo
- Convenciones claras para nombres de clases
- Comentarios que expliquen técnicas CSS para estudiantes

### Python

- Guías de estilo PEP 8
- Ejemplos de código claros y educativos
- Anotaciones de tipos cuando sean útiles para el aprendizaje

### Documentación en Markdown

- Jerarquía clara en encabezados
- Bloques de código con especificación de lenguaje
- Enlaces a recursos adicionales
- Capturas de pantalla e imágenes en `images/` directorios
- Texto alternativo en imágenes para accesibilidad

### Organización de Archivos

- Lecciones numeradas secuencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada proyecto tiene carpetas `solution/` y a menudo `start/` o `your-work/`
- Imágenes almacenadas en carpetas `images/` específicas de la lección
- Traducciones en estructura `translations/{language-code}/`

## Construcción y Despliegue

### Despliegue de la Aplicación de Cuestionarios (Azure Static Web Apps)

La aplicación quiz-app está configurada para despliegue en Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Crea la carpeta dist/
# Despliega mediante el flujo de trabajo de GitHub Actions al hacer push a main
```

Configuración de Azure Static Web Apps:
- **Ubicación de la app**: `/quiz-app`
- **Ubicación de salida**: `dist`
- **Flujo de trabajo**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generación de PDF de la Documentación

```bash
npm install                    # Instalar docsify-to-pdf
npm run convert               # Generar PDF desde docs
```

### Documentación con Docsify

```bash
npm install -g docsify-cli    # Instalar Docsify globalmente
docsify serve                 # Servir en localhost:3000
```

### Construcciones Específicas de Proyectos

Cada directorio de proyecto puede tener su propio proceso de construcción:
- Proyectos Vue: `npm run build` crea paquetes para producción
- Proyectos estáticos: No tienen paso de construcción, se sirven archivos directamente

## Pautas para Pull Requests

### Formato de Título

Usar títulos claros y descriptivos que indiquen el área de cambio:
- `[Quiz-app] Añadir nuevo cuestionario para la lección X`
- `[Lesson-3] Corregir error tipográfico en proyecto terrario`
- `[Translation] Añadir traducción al español para la lección 5`
- `[Docs] Actualizar instrucciones de configuración`

### Requisitos para Revisiones

Antes de enviar un PR:

1. **Calidad del Código**:
   - Ejecutar `npm run lint` en los directorios afectados de proyectos
   - Corregir todos los errores y advertencias de linting

2. **Verificación de Construcción**:
   - Ejecutar `npm run build` si aplica
   - Asegurar que no haya errores de construcción

3. **Validación de Enlaces**:
   - Probar todos los enlaces markdown
   - Verificar que las referencias de imágenes funcionen

4. **Revisión de Contenido**:
   - Revisar ortografía y gramática
   - Asegurar que los ejemplos de código sean correctos y educativos
   - Verificar que las traducciones mantengan el significado original

### Requisitos para Contribuciones

- Aceptar el CLA de Microsoft (verificación automática en el primer PR)
- Seguir el [Código de Conducta de Código Abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consultar [CONTRIBUTING.md](./CONTRIBUTING.md) para pautas detalladas
- Referenciar números de issues en la descripción del PR si aplica

### Proceso de Revisión

- Los PR son revisados por mantenedores y comunidad
- Se prioriza la claridad educativa
- Los ejemplos de código deben seguir buenas prácticas actuales
- Las traducciones se revisan por precisión y adecuación cultural

## Sistema de Traducción

### Traducción Automatizada

- Usa GitHub Actions con el flujo de trabajo co-op-translator
- Traduce automáticamente a más de 50 idiomas
- Archivos fuente en directorios principales
- Archivos traducidos en `translations/{language-code}/`

### Añadiendo Mejoras en Traducción Manual

1. Ubica el archivo en `translations/{language-code}/`
2. Realiza mejoras preservando la estructura
3. Asegúrate que los ejemplos de código funcionen correctamente
4. Prueba contenido localizado de cuestionarios si aplica

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

**La aplicación de cuestionarios no inicia**:
- Verificar la versión de Node.js (recomendado v14+)
- Borrar `node_modules` y `package-lock.json`, ejecutar `npm install` nuevamente
- Comprobar conflictos en el puerto (por defecto: Vite usa puerto 5173)

**El servidor API no inicia**:
- Verificar que la versión de Node.js sea al menos (node >=10)
- Revisar si el puerto ya está en uso
- Asegurarse de que todas las dependencias estén instaladas con `npm install`

**La extensión de navegador no carga**:
- Verificar que manifest.json esté correctamente formateado
- Revisar consola del navegador por errores
- Seguir instrucciones específicas para instalación de extensiones según navegador

**Problemas con el proyecto chat en Python**:
- Asegurar que el paquete OpenAI esté instalado: `pip install openai`
- Verificar que la variable de entorno GITHUB_TOKEN esté configurada
- Comprobar permisos de acceso a GitHub Models

**Docsify no sirve la documentación**:
- Instalar docsify-cli globalmente: `npm install -g docsify-cli`
- Ejecutar desde el directorio raíz del repositorio
- Comprobar que `docs/_sidebar.md` exista

### Consejos para el Entorno de Desarrollo

- Usar VS Code con extensión Live Server para proyectos HTML
- Instalar extensiones ESLint y Prettier para formato consistente
- Usar herramientas de desarrollador del navegador para depurar JavaScript
- Para proyectos Vue, instalar extensión Vue DevTools para navegador

### Consideraciones de Rendimiento

- Gran número de archivos traducidos (50+ idiomas) hace que los clones completos sean pesados
- Usar clonación superficial si solo se trabaja con contenido: `git clone --depth 1`
- Excluir traducciones de búsquedas cuando se trabaja en contenido en inglés
- Procesos de construcción pueden ser lentos en ejecución inicial (npm install, construcción Vite)

## Consideraciones de Seguridad

### Variables de Entorno

- Las claves API nunca deben incluirse en el repositorio
- Usar archivos `.env` (ya incluidos en `.gitignore`)
- Documentar las variables de entorno requeridas en los README de los proyectos

### Proyectos en Python

- Usar entornos virtuales: `python -m venv venv`
- Mantener dependencias actualizadas
- Los tokens de GitHub deben tener permisos mínimos necesarios

### Acceso a GitHub Models

- Se requieren Tokens de Acceso Personal (PAT) para GitHub Models
- Los tokens se deben guardar como variables de entorno
- Nunca se deben subir tokens ni credenciales al repositorio

## Notas Adicionales

### Público Objetivo

- Principiantes completos en desarrollo web
- Estudiantes y autoaprendices
- Profesores usando el plan de estudios en aulas
- Contenido diseñado para accesibilidad y construcción gradual de habilidades

### Filosofía Educativa

- Enfoque basado en aprendizaje por proyectos
- Evaluaciones frecuentes de conocimiento (cuestionarios)
- Ejercicios prácticos de codificación
- Ejemplos aplicados del mundo real
- Enfoque en fundamentos antes que en frameworks

### Mantenimiento del Repositorio

- Comunidad activa de aprendices y colaboradores
- Actualizaciones regulares de dependencias y contenido
- Issues y discusiones monitoreadas por mantenedores
- Actualizaciones de traducción automatizadas con GitHub Actions

### Recursos Relacionados

- [Módulos de Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos de Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para estudiantes
- Cursos adicionales: IA generativa, Ciencia de Datos, ML, IoT disponibles

### Trabajando con Proyectos Específicos

Para instrucciones detalladas sobre proyectos individuales, consulte los archivos README en:
- `quiz-app/README.md` - Aplicación de cuestionarios en Vue 3
- `7-bank-project/README.md` - Aplicación bancaria con autenticación
- `5-browser-extension/README.md` - Desarrollo de extensión de navegador
- `6-space-game/README.md` - Desarrollo de juego con Canvas
- `9-chat-project/README.md` - Proyecto asistente de chat con IA

### Estructura Monorepo

Aunque no es un monorepo tradicional, este repositorio contiene múltiples proyectos independientes:
- Cada lección es autónoma
- Los proyectos no comparten dependencias
- Se puede trabajar en proyectos individuales sin afectar otros
- Clonar el repositorio completo para la experiencia completa del plan de estudios

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso legal**:  
Este documento ha sido traducido utilizando el servicio de traducción AI [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de ningún malentendido o mala interpretación derivada del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->