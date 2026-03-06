# AGENTS.md

## Descripción del Proyecto

Este es un repositorio de currículo educativo para enseñar los fundamentos del desarrollo web a principiantes. El currículo es un curso integral de 12 semanas desarrollado por Microsoft Cloud Advocates, que incluye 24 lecciones prácticas que abarcan JavaScript, CSS y HTML.

### Componentes Clave

- **Contenido Educativo**: 24 lecciones estructuradas organizadas en módulos basados en proyectos
- **Proyectos Prácticos**: Terrarium, Juego de Escritura, Extensión de Navegador, Juego Espacial, App Bancaria, Editor de Código y Asistente de Chat AI
- **Cuestionarios Interactivos**: 48 cuestionarios con 3 preguntas cada uno (evaluaciones pre/post-lección)
- **Soporte Multilenguaje**: Traducciones automatizadas para más de 50 idiomas mediante GitHub Actions
- **Tecnologías**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para proyectos AI)

### Arquitectura

- Repositorio educativo con estructura basada en lecciones
- Cada carpeta de lección contiene README, ejemplos de código y soluciones
- Proyectos independientes en directorios separados (quiz-app, varios proyectos de lecciones)
- Sistema de traducción usando GitHub Actions (co-op-translator)
- Documentación servida vía Docsify y disponible como PDF

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

### Proyectos de Extensiones de Navegador

```bash
cd 5-browser-extension/solution
npm install
# Siga las instrucciones específicas del navegador para cargar extensiones
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

1. **Haz un fork del repositorio** en tu cuenta de GitHub
2. **Clona tu fork** localmente
3. **Crea una nueva rama** para tus cambios
4. Realiza cambios en contenido de lecciones o ejemplos de código
5. Prueba cualquier cambio de código en directorios de proyectos relevantes
6. Envía pull requests siguiendo las directrices de contribución

### Para Estudiantes

1. Haz fork o clona el repositorio
2. Navega por los directorios de lecciones secuencialmente
3. Lee los archivos README de cada lección
4. Completa los cuestionarios pre-lección en https://ff-quizzes.netlify.app/web/
5. Trabaja con los ejemplos de código en las carpetas de lecciones
6. Completa asignaciones y desafíos
7. Realiza los cuestionarios post-lección

### Desarrollo en Vivo

- **Documentación**: Ejecuta `docsify serve` en la raíz (puerto 3000)
- **Quiz App**: Ejecuta `npm run dev` en el directorio quiz-app
- **Proyectos**: Usa la extensión Live Server de VS Code para proyectos HTML
- **Proyectos API**: Ejecuta `npm start` en los directorios API respectivos

## Instrucciones de Pruebas

### Pruebas del Quiz App

```bash
cd quiz-app
npm run lint       # Verificar problemas de estilo de código
npm run build      # Verificar que la compilación tenga éxito
```

### Pruebas del API Bancaria

```bash
cd 7-bank-project/api
npm run lint       # Verificar problemas de estilo de código
node server.js     # Verificar que el servidor inicie sin errores
```

### Enfoque General de Pruebas

- Este es un repositorio educativo sin pruebas automatizadas completas
- Las pruebas manuales se enfocan en:
  - Ejecución de ejemplos de código sin errores
  - Que los enlaces en la documentación funcionen correctamente
  - Que las compilaciones de proyectos se completen con éxito
  - Que los ejemplos sigan buenas prácticas

### Verificaciones Pre-envío

- Ejecutar `npm run lint` en directorios con package.json
- Verificar que los enlaces markdown sean válidos
- Probar los ejemplos de código en navegador o Node.js
- Comprobar que las traducciones mantienen la estructura adecuada

## Guías de Estilo de Código

### JavaScript

- Utilizar sintaxis moderna ES6+
- Seguir configuraciones estándar de ESLint proporcionadas en los proyectos
- Usar nombres significativos para variables y funciones para mayor claridad educativa
- Añadir comentarios explicativos sobre conceptos para los estudiantes
- Formatear con Prettier donde esté configurado

### HTML/CSS

- Elementos semánticos HTML5
- Principios de diseño responsivo
- Convenciones claras para nombres de clases
- Comentarios explicando técnicas CSS para aprendizaje

### Python

- Guía de estilo PEP 8
- Ejemplos de código claros y educativos
- Uso de hints de tipos donde sea útil para el aprendizaje

### Documentación Markdown

- Jerarquía clara de encabezados
- Bloques de código con especificación de lenguaje
- Enlaces a recursos adicionales
- Capturas de pantalla e imágenes en directorios `images/`
- Texto alternativo para imágenes por accesibilidad

### Organización de Archivos

- Lecciones numeradas secuencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada proyecto tiene directorios `solution/` y normalmente `start/` o `your-work/`
- Imágenes almacenadas en carpetas `images/` específicas de las lecciones
- Traducciones en estructura `translations/{language-code}/`

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
- **Flujo de trabajo**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

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

Cada directorio de proyecto puede tener su propio proceso de construcción:
- Proyectos Vue: `npm run build` crea paquetes para producción
- Proyectos estáticos: Sin paso de construcción, servir archivos directamente

## Guías para Pull Requests

### Formato de Título

Usar títulos claros y descriptivos indicando el área de cambio:
- `[Quiz-app] Añadir nuevo cuestionario para la lección X`
- `[Lesson-3] Corregir error tipográfico en proyecto terrarium`
- `[Translation] Añadir traducción al español para la lección 5`
- `[Docs] Actualizar instrucciones de configuración`

### Verificaciones Requeridas

Antes de enviar un PR:

1. **Calidad del código**:
   - Ejecutar `npm run lint` en los directorios de proyecto afectados
   - Corregir todos los errores y advertencias de lint

2. **Verificación de compilación**:
   - Ejecutar `npm run build` si aplica
   - Asegurar que no haya errores de compilación

3. **Validación de enlaces**:
   - Probar todos los enlaces markdown
   - Verificar que las referencias a imágenes funcionen

4. **Revisión de contenido**:
   - Revisar ortografía y gramática
   - Confirmar que los ejemplos de código sean correctos y educativos
   - Verificar que las traducciones mantengan el significado original

### Requisitos de Contribución

- Aceptar el CLA de Microsoft (verificación automática en primer PR)
- Seguir el [Código de Conducta de Código Abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consultar [CONTRIBUTING.md](./CONTRIBUTING.md) para directrices detalladas
- Referenciar números de issue en la descripción del PR si aplica

### Proceso de Revisión

- Los PRs son revisados por mantenedores y comunidad
- Se prioriza la claridad educativa
- Los ejemplos de código deben seguir las mejores prácticas actuales
- Las traducciones se revisan para precisión y adecuación cultural

## Sistema de Traducción

### Traducción Automática

- Utiliza GitHub Actions con flujo de trabajo co-op-translator
- Traduce automáticamente a más de 50 idiomas
- Archivos fuente en directorios principales
- Archivos traducidos en directorios `translations/{language-code}/`

### Agregar Mejoras Manuales de Traducción

1. Localizar archivo en `translations/{language-code}/`
2. Hacer mejoras preservando la estructura
3. Asegurar que los ejemplos de código sigan funcionando
4. Probar cualquier contenido de quiz localizado

### Metadatos de Traducción

Los archivos traducidos incluyen cabecera de metadatos:
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

**La aplicación de quiz no inicia**:
- Verificar versión de Node.js (recomendado v14+)
- Eliminar `node_modules` y `package-lock.json`, luego ejecutar `npm install`
- Comprobar conflictos de puerto (por defecto: Vite usa puerto 5173)

**El servidor API no inicia**:
- Verificar que la versión de Node.js cumple el mínimo (node >=10)
- Revisar si el puerto ya está en uso
- Asegurar que todas las dependencias están instaladas con `npm install`

**La extensión del navegador no carga**:
- Verificar que manifest.json está correctamente formado
- Revisar la consola del navegador para errores
- Seguir las instrucciones específicas para instalación de extensiones en el navegador

**Problemas con el proyecto de chat en Python**:
- Asegurar que el paquete OpenAI está instalado: `pip install openai`
- Verificar que la variable de entorno GITHUB_TOKEN está configurada
- Comprobar permisos de acceso a GitHub Models

**Docsify no sirve la documentación**:
- Instalar docsify-cli globalmente: `npm install -g docsify-cli`
- Ejecutar desde el directorio raíz del repositorio
- Comprobar que `docs/_sidebar.md` existe

### Consejos para el Entorno de Desarrollo

- Usar VS Code con extensión Live Server para proyectos HTML
- Instalar extensiones ESLint y Prettier para formato consistente
- Usar DevTools del navegador para depurar JavaScript
- Para proyectos Vue, instalar extensión de navegador Vue DevTools

### Consideraciones de Rendimiento

- Gran número de archivos traducidos (más de 50 idiomas) implica clones completos grandes
- Usar clonación superficial si solo se trabaja con contenido: `git clone --depth 1`
- Excluir traducciones de búsquedas cuando se trabaje en contenido en inglés
- Los procesos de construcción pueden ser lentos en la primera ejecución (npm install, compilación Vite)

## Consideraciones de Seguridad

### Variables de Entorno

- Las claves API nunca deben ser comprometidas en el repositorio
- Usar archivos `.env` (ya en `.gitignore`)
- Documentar variables de entorno requeridas en los READMEs de proyectos

### Proyectos en Python

- Usar entornos virtuales: `python -m venv venv`
- Mantener las dependencias actualizadas
- Los tokens de GitHub deben tener permisos mínimos necesarios

### Acceso a GitHub Models

- Se requieren Tokens de Acceso Personal (PAT) para GitHub Models
- Los tokens deben almacenarse como variables de entorno
- Nunca comprometer tokens o credenciales

## Notas Adicionales

### Público Objetivo

- Principiantes completos en desarrollo web
- Estudiantes y autoaprendices
- Profesores que usan el currículo en aulas
- Contenido diseñado para accesibilidad y construcción gradual de habilidades

### Filosofía Educativa

- Enfoque de aprendizaje basado en proyectos
- Controles frecuentes de conocimiento (cuestionarios)
- Ejercicios prácticos de codificación
- Ejemplos de aplicación en el mundo real
- Enfoque en fundamentos antes que frameworks

### Mantenimiento del Repositorio

- Comunidad activa de aprendices y colaboradores
- Actualizaciones regulares de dependencias y contenido
- Issues y discusiones monitoreadas por mantenedores
- Actualizaciones de traducción automatizadas vía GitHub Actions

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para estudiantes
- Cursos adicionales: IA Generativa, Ciencia de Datos, ML, currículos IoT disponibles

### Trabajar con Proyectos Específicos

Para instrucciones detalladas sobre proyectos individuales, consultar los archivos README en:
- `quiz-app/README.md` - Aplicación de cuestionarios con Vue 3
- `7-bank-project/README.md` - Aplicación bancaria con autenticación
- `5-browser-extension/README.md` - Desarrollo de extensión de navegador
- `6-space-game/README.md` - Desarrollo de juego con Canvas
- `9-chat-project/README.md` - Proyecto asistente de chat AI

### Estructura Monorepo

Aunque no es un monorepo tradicional, este repositorio contiene múltiples proyectos independientes:
- Cada lección es autónoma
- Los proyectos no comparten dependencias
- Se puede trabajar en proyectos individuales sin afectar a otros
- Clonar el repo completo para la experiencia completa del currículo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas derivados del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->