# AGENTS.md

## Descripción del Proyecto

Este es un repositorio de currículo educativo para enseñar fundamentos del desarrollo web a principiantes. El currículo es un curso comprensivo de 12 semanas desarrollado por Microsoft Cloud Advocates, que cuenta con 24 lecciones prácticas cubriendo JavaScript, CSS y HTML.

### Componentes Clave

- **Contenido Educativo**: 24 lecciones estructuradas organizadas en módulos basados en proyectos
- **Proyectos Prácticos**: Terrarium, Juego de Mecanografía, Extensión de Navegador, Juego Espacial, Aplicación Bancaria, Editor de Código y Asistente de Chat con IA
- **Cuestionarios Interactivos**: 48 cuestionarios con 3 preguntas cada uno (evaluaciones pre/post-lección)
- **Soporte Multilenguaje**: Traducciones automáticas para más de 50 idiomas mediante GitHub Actions
- **Tecnologías**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para proyectos de IA)

### Arquitectura

- Repositorio educativo con estructura basada en lecciones
- Cada carpeta de lección contiene README, ejemplos de código y soluciones
- Proyectos independientes en directorios separados (quiz-app, varios proyectos de lecciones)
- Sistema de traducción usando GitHub Actions (co-op-translator)
- Documentación servida via Docsify y disponible en formato PDF

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
npm run dev        # Iniciar servidor de desarrollo
npm run build      # Compilar para producción
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
# Sigue las instrucciones específicas del navegador para cargar extensiones
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

### Para Colaboradores de Contenido

1. **Haz fork** del repositorio a tu cuenta de GitHub
2. **Clona tu fork** localmente
3. **Crea una nueva rama** para tus cambios
4. Realiza cambios en el contenido de las lecciones o ejemplos de código
5. Prueba cualquier cambio de código en los directorios de proyecto relevantes
6. Envía pull requests siguiendo las pautas de contribución

### Para Estudiantes

1. Haz fork o clona el repositorio
2. Navega secuencialmente por los directorios de lecciones
3. Lee los archivos README de cada lección
4. Completa los cuestionarios previos en https://ff-quizzes.netlify.app/web/
5. Trabaja con los ejemplos de código en las carpetas de lecciones
6. Completa las tareas y desafíos
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
npm run build      # Verificar que la compilación sea exitosa
```

### Pruebas de Bank API

```bash
cd 7-bank-project/api
npm run lint       # Verificar problemas de estilo de código
node server.js     # Verificar que el servidor arranque sin errores
```

### Enfoque General para Pruebas

- Este es un repositorio educativo sin pruebas automatizadas exhaustivas
- Las pruebas manuales se enfocan en:
  - Ejecución de ejemplos de código sin errores
  - Funcionamiento correcto de enlaces en la documentación
  - Compilación exitosa de proyectos
  - Ejemplos que siguen las mejores prácticas

### Chequeos Previos a Envíos

- Ejecuta `npm run lint` en directorios con package.json
- Verifica que los enlaces de markdown sean válidos
- Prueba los ejemplos de código en navegador o Node.js
- Revisa que las traducciones mantengan la estructura correcta

## Guías de Estilo de Código

### JavaScript

- Usa sintaxis moderna ES6+
- Sigue configuraciones estándar ESLint proporcionadas en proyectos
- Usa nombres significativos para variables y funciones para claridad educativa
- Añade comentarios explicando conceptos para los estudiantes
- Formatea con Prettier donde esté configurado

### HTML/CSS

- Elementos HTML5 semánticos
- Principios de diseño responsivo
- Nomenclatura clara de clases
- Comentarios que expliquen técnicas CSS para estudiantes

### Python

- Lineamientos de estilo PEP 8
- Código claro y educativo
- Anotaciones de tipo cuando ayuden al aprendizaje

### Documentación Markdown

- Jerarquía clara de encabezados
- Bloques de código con especificación de lenguaje
- Enlaces a recursos adicionales
- Capturas y imágenes en directorios `images/`
- Texto alternativo en imágenes para accesibilidad

### Organización de Archivos

- Lecciones numeradas secuencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada proyecto tiene directorios `solution/` y a menudo `start/` o `your-work/`
- Imágenes almacenadas en carpetas `images/` específicas por lección
- Traducciones en estructura `translations/{código-idioma}/`

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
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generación de PDF de Documentación

```bash
npm install                    # Instalar docsify-to-pdf
npm run convert               # Generar PDF desde docs
```

### Documentación con Docsify

```bash
npm install -g docsify-cli    # Instalar Docsify globalmente
docsify serve                 # Servir en localhost:3000
```

### Construcciones Específicas por Proyecto

Cada directorio de proyecto puede tener su propio proceso de build:
- Proyectos Vue: `npm run build` crea bundles de producción
- Proyectos estáticos: Sin paso de construcción, se sirven archivos directamente

## Pautas para Pull Requests

### Formato del Título

Usa títulos claros y descriptivos indicando el área del cambio:
- `[Quiz-app] Añadir nuevo quiz para la lección X`
- `[Lesson-3] Corregir error tipográfico en proyecto terrarium`
- `[Translation] Añadir traducción al español para la lección 5`
- `[Docs] Actualizar instrucciones de configuración`

### Verificaciones Requeridas

Antes de enviar un PR:

1. **Calidad de Código**:
   - Ejecuta `npm run lint` en directorios de proyectos afectados
   - Corrige todos los errores y advertencias de linting

2. **Verificación de Build**:
   - Ejecuta `npm run build` si aplica
   - Asegura que no haya errores de compilación

3. **Validación de Enlaces**:
   - Prueba todos los enlaces markdown
   - Verifica que referencias a imágenes funcionen

4. **Revisión del Contenido**:
   - Revisa ortografía y gramática
   - Asegura que los ejemplos de código sean correctos y educativos
   - Verifica que las traducciones mantengan el significado original

### Requisitos de Contribución

- Aceptar el CLA de Microsoft (revisión automática en el primer PR)
- Seguir el [Código de Conducta de Código Abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consultar [CONTRIBUTING.md](./CONTRIBUTING.md) para directrices detalladas
- Referenciar números de issue en la descripción del PR si aplica

### Proceso de Revisión

- PR revisados por mantenedores y comunidad
- Se prioriza la claridad educativa
- Los ejemplos de código deben seguir las mejores prácticas actuales
- Traducciones revisadas para precisión y adecuación cultural

## Sistema de Traducción

### Traducción Automatizada

- Usa GitHub Actions con workflow co-op-translator
- Traduce automáticamente a más de 50 idiomas
- Archivos fuente en directorios principales
- Archivos traducidos en directorios `translations/{código-idioma}/`

### Agregar Mejoras Manuales a Traducciones

1. Ubica el archivo en `translations/{código-idioma}/`
2. Haz mejoras preservando la estructura
3. Asegura que los ejemplos de código sigan funcionando
4. Prueba cualquier contenido localizado de cuestionarios

### Metadatos de Traducción

Los archivos traducidos incluyen encabezado con metadatos:
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

**Quiz app no arranca**:
- Verifica la versión de Node.js (recomendada v14+)
- Elimina `node_modules` y `package-lock.json`, ejecuta `npm install` de nuevo
- Revisa conflictos de puertos (por defecto: Vite usa el puerto 5173)

**Servidor API no inicia**:
- Confirma que la versión de Node.js cumple el mínimo (node >=10)
- Revisa si el puerto ya está en uso
- Asegura que todas las dependencias estén instaladas con `npm install`

**Extensión de navegador no carga**:
- Verifica que manifest.json esté correctamente formateado
- Revisa la consola del navegador por errores
- Sigue las instrucciones específicas de instalación para el navegador

**Problemas con proyecto de chat en Python**:
- Asegura que el paquete OpenAI esté instalado: `pip install openai`
- Verifica que la variable de entorno GITHUB_TOKEN esté configurada
- Revisa permisos de acceso a GitHub Models

**Docsify no sirve la documentación**:
- Instala docsify-cli globalmente: `npm install -g docsify-cli`
- Ejecuta desde el directorio raíz del repositorio
- Confirma que existe `docs/_sidebar.md`

### Consejos para el Entorno de Desarrollo

- Usa VS Code con la extensión Live Server para proyectos HTML
- Instala extensiones ESLint y Prettier para formato consistente
- Usa las DevTools del navegador para depurar JavaScript
- Para proyectos Vue, instala la extensión de navegador Vue DevTools

### Consideraciones de Rendimiento

- Gran cantidad de archivos traducidos (más de 50 idiomas) hace que los clones completos sean grandes
- Usa clonación superficial si solo trabajas con contenido: `git clone --depth 1`
- Excluye traducciones de búsquedas cuando trabajes con contenido en inglés
- Los procesos de build pueden ser lentos en la primera ejecución (npm install, build con Vite)

## Consideraciones de Seguridad

### Variables de Entorno

- Las claves API nunca deberían ser comprometidas en el repositorio
- Usa archivos `.env` (ya en `.gitignore`)
- Documenta las variables de entorno requeridas en los README de proyectos

### Proyectos Python

- Usa entornos virtuales: `python -m venv venv`
- Mantén dependencias actualizadas
- Los tokens de GitHub deben tener permisos mínimos requeridos

### Acceso a GitHub Models

- Se requieren Personal Access Tokens (PAT) para GitHub Models
- Guarda los tokens como variables de entorno
- Nunca cometas tokens ni credenciales

## Notas Adicionales

### Público Objetivo

- Principiantes absolutos en desarrollo web
- Estudiantes y autodidactas
- Profesores usando el currículo en aulas
- Contenido diseñado para accesibilidad y desarrollo gradual de habilidades

### Filosofía Educativa

- Enfoque de aprendizaje basado en proyectos
- Revisiones frecuentes de conocimientos (cuestionarios)
- Ejercicios prácticos de codificación
- Ejemplos de aplicación en el mundo real
- Enfoque en fundamentos antes de frameworks

### Mantenimiento del Repositorio

- Comunidad activa de aprendices y colaboradores
- Actualizaciones regulares de dependencias y contenidos
- Monitoreo de issues y discusiones por mantenedores
- Actualizaciones de traducción automatizadas mediante GitHub Actions

### Recursos Relacionados

- [Módulos de Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos del Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para estudiantes
- Cursos adicionales: Currículos de IA generativa, Ciencia de Datos, ML, IoT disponibles

### Trabajo con Proyectos Específicos

Para instrucciones detalladas sobre proyectos individuales, consulta los archivos README en:
- `quiz-app/README.md` - aplicación de quiz en Vue 3
- `7-bank-project/README.md` - aplicación bancaria con autenticación
- `5-browser-extension/README.md` - desarrollo de extensión de navegador
- `6-space-game/README.md` - desarrollo de juego con canvas
- `9-chat-project/README.md` - proyecto asistente de chat con IA

### Estructura Monorepo

Aunque no es un monorepo tradicional, este repositorio contiene múltiples proyectos independientes:
- Cada lección es autocontenida
- Los proyectos no comparten dependencias
- Trabaja en proyectos individuales sin afectar otros
- Clona el repositorio completo para la experiencia completa del currículo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso legal**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda la traducción profesional humana. No nos hacemos responsables de malentendidos o interpretaciones erróneas que surjan del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->