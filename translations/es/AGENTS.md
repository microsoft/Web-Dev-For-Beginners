# AGENTS.md

## Descripción del Proyecto

Este es un repositorio curricular educativo para enseñar fundamentos de desarrollo web a principiantes. El currículo es un curso integral de 12 semanas desarrollado por Microsoft Cloud Advocates, que incluye 24 lecciones prácticas que cubren JavaScript, CSS y HTML.

### Componentes Clave

- **Contenido Educativo**: 24 lecciones estructuradas organizadas en módulos basados en proyectos  
- **Proyectos Prácticos**: Terrarium, Juego de Escritura, Extensión de Navegador, Juego Espacial, Aplicación Bancaria, Editor de Código y Asistente de Chat AI  
- **Cuestionarios Interactivos**: 48 cuestionarios con 3 preguntas cada uno (evaluaciones pre/post-lección)  
- **Soporte Multilenguaje**: Traducciones automáticas a más de 50 idiomas mediante GitHub Actions  
- **Tecnologías**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para proyectos de IA)

### Arquitectura

- Repositorio educativo con estructura basada en lecciones  
- Cada carpeta de lección contiene README, ejemplos de código y soluciones  
- Proyectos independientes en directorios separados (quiz-app, varios proyectos de lección)  
- Sistema de traducción usando GitHub Actions (co-op-translator)  
- Documentación servida vía Docsify y disponible en PDF

## Comandos de Configuración

Este repositorio es principalmente para consumo de contenido educativo. Para trabajar con proyectos específicos:

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
npm start          # Iniciar el servidor API
npm run lint       # Ejecutar ESLint
npm run format     # Formatear con Prettier
```

### Proyectos de Extensión de Navegador

```bash
cd 5-browser-extension/solution
npm install
# Siga las instrucciones específicas del navegador para cargar la extensión
```

### Proyectos de Juego Espacial

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
5. Prueba cualquier cambio de código en los directorios de proyectos relevantes  
6. Envía pull requests siguiendo las directrices de contribución  

### Para Estudiantes

1. Haz fork o clona el repositorio  
2. Navega secuencialmente por los directorios de las lecciones  
3. Lee los archivos README de cada lección  
4. Completa los cuestionarios previos en https://ff-quizzes.netlify.app/web/  
5. Trabaja con los ejemplos de código en las carpetas de lección  
6. Realiza tareas y desafíos  
7. Realiza los cuestionarios posteriores a la lección  

### Desarrollo en Vivo

- **Documentación**: Ejecuta `docsify serve` en la raíz (puerto 3000)  
- **Quiz App**: Ejecuta `npm run dev` en el directorio quiz-app  
- **Proyectos**: Usa la extensión Live Server de VS Code para proyectos HTML  
- **Proyectos API**: Ejecuta `npm start` en los directorios API respectivos

## Instrucciones de Pruebas

### Pruebas de Quiz App

```bash
cd quiz-app
npm run lint       # Verificar problemas de estilo de código
npm run build      # Verificar que la compilación tenga éxito
```

### Pruebas de la API Bancaria

```bash
cd 7-bank-project/api
npm run lint       # Verificar problemas de estilo de código
node server.js     # Verificar que el servidor se inicie sin errores
```

### Enfoque General de Pruebas

- Este es un repositorio educativo sin pruebas automatizadas exhaustivas  
- Las pruebas manuales se centran en:  
  - Ejecución sin errores de ejemplos de código  
  - Funcionamiento correcto de enlaces en la documentación  
  - Correcto armado de proyectos  
  - Los ejemplos siguen buenas prácticas  

### Verificaciones Previas a Enviar PR

- Ejecuta `npm run lint` en directorios con package.json  
- Verifica que los enlaces markdown sean válidos  
- Prueba ejemplos de código en navegador o Node.js  
- Comprueba que las traducciones mantienen la estructura correcta

## Guías de Estilo de Código

### JavaScript

- Usar sintaxis moderna ES6+  
- Seguir las configuraciones estándar de ESLint proporcionadas en los proyectos  
- Usar nombres significativos para variables y funciones para claridad educativa  
- Agregar comentarios explicativos para los conceptos  
- Formatear con Prettier donde esté configurado

### HTML/CSS

- Elementos semánticos HTML5  
- Principios de diseño responsive  
- Convenciones claras para nombres de clases  
- Comentarios que expliquen técnicas CSS para estudiantes

### Python

- Directrices de estilo PEP 8  
- Ejemplos de código claros y educativos  
- Anotaciones de tipo donde sean útiles para el aprendizaje

### Documentación Markdown

- Jerarquía clara de encabezados  
- Bloques de código con especificación de lenguaje  
- Enlaces a recursos adicionales  
- Capturas y imágenes en directorios `images/`  
- Texto alternativo para imágenes accesibles

### Organización de Archivos

- Lecciones numeradas secuencialmente (1-getting-started-lessons, 2-js-basics, etc.)  
- Cada proyecto tiene directorios `solution/` y a menudo `start/` o `your-work/`  
- Imágenes almacenadas en carpetas `images/` específicas por lección  
- Traducciones en estructura `translations/{language-code}/`

## Construcción y Despliegue

### Despliegue de Quiz App (Azure Static Web Apps)

La quiz-app está configurada para despliegue en Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Crea la carpeta dist/
# Despliega a través del flujo de trabajo de GitHub Actions al hacer push en main
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
- Proyectos Vue: `npm run build` crea paquetes de producción  
- Proyectos estáticos: sin paso de construcción, sirven archivos directamente

## Guías para Pull Requests

### Formato del Título

Usa títulos claros y descriptivos indicando el área de cambio:  
- `[Quiz-app] Agrega nuevo cuestionario para la lección X`  
- `[Lesson-3] Corrige errata en proyecto terrarium`  
- `[Translation] Añade traducción al español para lección 5`  
- `[Docs] Actualiza instrucciones de configuración`

### Verificaciones Requeridas

Antes de enviar un PR:

1. **Calidad de Código**:  
   - Ejecuta `npm run lint` en los directorios afectados  
   - Corrige todos los errores y advertencias de lint

2. **Verificación de Construcción**:  
   - Ejecuta `npm run build` si aplica  
   - Asegura que no haya errores de construcción

3. **Validación de Enlaces**:  
   - Prueba todos los enlaces markdown  
   - Verifica que las referencias de imágenes funcionen

4. **Revisión de Contenido**:  
   - Revisa ortografía y gramática  
   - Asegura que los ejemplos de código sean correctos y educativos  
   - Verifica que las traducciones mantengan el significado original

### Requisitos para Contribuir

- Aceptar la CLA de Microsoft (verificación automática en el primer PR)  
- Seguir el [Código de Conducta de Código Abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/)  
- Consultar [CONTRIBUTING.md](./CONTRIBUTING.md) para directrices detalladas  
- Referenciar números de issues en la descripción del PR si aplicable

### Proceso de Revisión

- PRs revisados por mantenedores y comunidad  
- Se prioriza la claridad educativa  
- Los ejemplos de código deben seguir mejores prácticas actuales  
- Traducciones revisadas para precisión y adecuación cultural

## Sistema de Traducción

### Traducción Automática

- Usa GitHub Actions con workflow co-op-translator  
- Traduce automáticamente a más de 50 idiomas  
- Archivos fuente en directorios principales  
- Archivos traducidos en directorios `translations/{language-code}/`

### Añadiendo Mejoras Manuales de Traducción

1. Localiza el archivo en `translations/{language-code}/`  
2. Realiza mejoras preservando la estructura  
3. Asegura que los ejemplos de código sigan funcionando  
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

**No inicia la app de quiz**:  
- Verifica la versión de Node.js (recomendado v14+)  
- Elimina `node_modules` y `package-lock.json`, ejecuta `npm install` nuevamente  
- Revisa conflictos de puerto (por defecto: Vite usa el puerto 5173)

**El servidor API no inicia**:  
- Verifica que la versión de Node.js sea mínima (node >=10)  
- Revisa si el puerto ya está en uso  
- Asegura que todas las dependencias estén instaladas con `npm install`

**La extensión de navegador no carga**:  
- Verifica que manifest.json esté bien formateado  
- Revisa en la consola del navegador por errores  
- Sigue las instrucciones específicas para instalación de extensiones en el navegador

**Problemas con proyecto de chat en Python**:  
- Asegura que el paquete OpenAI esté instalado: `pip install openai`  
- Verifica que la variable de entorno GITHUB_TOKEN esté configurada  
- Comprueba permisos de acceso a GitHub Models

**Docsify no sirve la documentación**:  
- Instala docsify-cli globalmente: `npm install -g docsify-cli`  
- Ejecuta desde el directorio raíz del repositorio  
- Verifica que `docs/_sidebar.md` exista

### Consejos para el Entorno de Desarrollo

- Usa VS Code con la extensión Live Server para proyectos HTML  
- Instala extensiones ESLint y Prettier para formato consistente  
- Utiliza DevTools en navegador para depurar JavaScript  
- Para proyectos Vue, instala extensión Vue DevTools para navegador

### Consideraciones de Rendimiento

- Gran número de archivos traducidos (50+ idiomas) implica clones completos grandes  
- Usa clonación superficial si solo trabajas con contenido: `git clone --depth 1`  
- Excluye traducciones de búsquedas cuando trabajes en contenido en inglés  
- Los procesos de construcción pueden ser lentos en la primera ejecución (npm install, construcción Vite)

## Consideraciones de Seguridad

### Variables de Entorno

- Las claves API nunca deben ser comprometidas en el repositorio  
- Usa archivos `.env` (ya incluidos en `.gitignore`)  
- Documenta las variables de entorno necesarias en los READMEs del proyecto

### Proyectos Python

- Usa entornos virtuales: `python -m venv venv`  
- Mantén las dependencias actualizadas  
- Los tokens de GitHub deben tener permisos mínimos requeridos

### Acceso a GitHub Models

- Se requieren Tokens de Acceso Personal (PAT) para GitHub Models  
- Los tokens deben ser almacenados como variables de entorno  
- Nunca comprometas tokens o credenciales

## Notas Adicionales

### Audiencia Objetivo

- Principiantes completos en desarrollo web  
- Estudiantes y autoaprendices  
- Docentes usando el currículo en aulas  
- Contenido diseñado para accesibilidad y desarrollo gradual de habilidades

### Filosofía Educativa

- Aprendizaje basado en proyectos  
- Revisiones frecuentes de conocimiento (cuestionarios)  
- Ejercicios prácticos de codificación  
- Ejemplos aplicados del mundo real  
- Enfoque en fundamentos antes que frameworks

### Mantenimiento del Repositorio

- Comunidad activa de aprendices y colaboradores  
- Actualizaciones regulares de dependencias y contenido  
- Issues y discusiones monitoreadas por mantenedores  
- Actualizaciones de traducción automatizadas vía GitHub Actions

### Recursos Relacionados

- [Microsoft Learn módulos](https://docs.microsoft.com/learn/)  
- [Recursos Student Hub](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para estudiantes  
- Cursos adicionales: AI generativa, ciencia de datos, ML, IoT disponibles

### Trabajando con Proyectos Específicos

Para instrucciones detalladas sobre proyectos individuales, consulta los archivos README en:  
- `quiz-app/README.md` - Aplicación de quiz en Vue 3  
- `7-bank-project/README.md` - Aplicación bancaria con autenticación  
- `5-browser-extension/README.md` - Desarrollo de extensión para navegador  
- `6-space-game/README.md` - Desarrollo de juego basado en canvas  
- `9-chat-project/README.md` - Proyecto asistente de chat AI

### Estructura del Monorepo

Aunque no es un monorepo tradicional, este repositorio contiene múltiples proyectos independientes:  
- Cada lección es autónoma  
- Los proyectos no comparten dependencias  
- Trabaja en proyectos individuales sin afectar otros  
- Clona todo el repositorio para obtener la experiencia completa del currículo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Descargo de responsabilidad**:
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda la traducción profesional humana. No nos hacemos responsables de cualquier malentendido o interpretación errónea derivada del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->