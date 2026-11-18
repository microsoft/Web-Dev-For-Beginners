# AGENTS.md

## Descripción general del proyecto

Este es un repositorio de currículo educativo para enseñar los fundamentos del desarrollo web a principiantes. El currículo es un curso integral de 12 semanas desarrollado por Microsoft Cloud Advocates, que incluye 24 lecciones prácticas sobre JavaScript, CSS y HTML.

### Componentes clave

- **Contenido educativo**: 24 lecciones estructuradas organizadas en módulos basados en proyectos
- **Proyectos prácticos**: Terrario, juego de mecanografía, extensión de navegador, juego espacial, aplicación bancaria, editor de código y asistente de chat con IA
- **Cuestionarios interactivos**: 48 cuestionarios con 3 preguntas cada uno (evaluaciones antes/después de la lección)
- **Soporte multilingüe**: Traducciones automáticas a más de 50 idiomas mediante GitHub Actions
- **Tecnologías**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para proyectos de IA)

### Arquitectura

- Repositorio educativo con estructura basada en lecciones
- Cada carpeta de lección contiene README, ejemplos de código y soluciones
- Proyectos independientes en directorios separados (quiz-app, varios proyectos de lecciones)
- Sistema de traducción usando GitHub Actions (co-op-translator)
- Documentación servida vía Docsify y disponible en PDF

## Comandos de configuración

Este repositorio está principalmente para el consumo de contenido educativo. Para trabajar con proyectos específicos:

### Configuración principal del repositorio

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Configuración de la aplicación de cuestionarios (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Iniciar servidor de desarrollo
npm run build      # Construir para producción
npm run lint       # Ejecutar ESLint
```

### API del proyecto bancario (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Iniciar servidor API
npm run lint       # Ejecutar ESLint
npm run format     # Formatear con Prettier
```

### Proyectos de extensiones de navegador

```bash
cd 5-browser-extension/solution
npm install
# Siga las instrucciones específicas del navegador para cargar extensiones
```

### Proyectos del juego espacial

```bash
cd 6-space-game/solution
npm install
# Abre index.html en el navegador o usa Live Server
```

### Proyecto de chat (Backend en Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Establecer la variable de entorno GITHUB_TOKEN
python api.py
```

## Flujo de trabajo de desarrollo

### Para colaboradores de contenido

1. **Haz un fork del repositorio** a tu cuenta de GitHub
2. **Clona tu fork** localmente
3. **Crea una nueva rama** para tus cambios
4. Realiza cambios en el contenido de las lecciones o en los ejemplos de código
5. Prueba cualquier cambio de código en los directorios de proyectos relevantes
6. Envía pull requests siguiendo las directrices de contribución

### Para estudiantes

1. Haz fork o clona el repositorio
2. Navega a los directorios de las lecciones de forma secuencial
3. Lee los archivos README de cada lección
4. Completa los cuestionarios previos en https://ff-quizzes.netlify.app/web/
5. Trabaja los ejemplos de código en las carpetas de las lecciones
6. Completa tareas y desafíos
7. Realiza los cuestionarios posteriores a la lección

### Desarrollo en vivo

- **Documentación**: Ejecuta `docsify serve` en la raíz (puerto 3000)
- **Aplicación de cuestionarios**: Ejecuta `npm run dev` en el directorio quiz-app
- **Proyectos**: Usa la extensión Live Server de VS Code para proyectos HTML
- **Proyectos API**: Ejecuta `npm start` en los directorios API respectivos

## Instrucciones de pruebas

### Pruebas de la aplicación de cuestionarios

```bash
cd quiz-app
npm run lint       # Verificar problemas de estilo de código
npm run build      # Verificar que la compilación sea exitosa
```

### Pruebas de la API bancaria

```bash
cd 7-bank-project/api
npm run lint       # Verificar problemas de estilo de código
node server.js     # Verificar que el servidor inicie sin errores
```

### Enfoque general de pruebas

- Este es un repositorio educativo sin pruebas automatizadas completas
- Las pruebas manuales se enfocan en:
  - Ejecución de ejemplos de código sin errores
  - Funcionalidad correcta de enlaces en la documentación
  - Construcción exitosa de proyectos
  - Ejemplos que siguen buenas prácticas

### Verificaciones antes de enviar

- Ejecuta `npm run lint` en directorios con package.json
- Verifica que los enlaces markdown sean válidos
- Prueba ejemplos de código en navegador o Node.js
- Comprueba que las traducciones mantienen la estructura correcta

## Directrices de estilo de código

### JavaScript

- Usar sintaxis moderna ES6+
- Seguir configuraciones estándar de ESLint proporcionadas en los proyectos
- Usar nombres de variables y funciones significativos para claridad educativa
- Añadir comentarios que expliquen conceptos para los estudiantes
- Formatear usando Prettier donde esté configurado

### HTML/CSS

- Elementos semánticos HTML5
- Principios de diseño responsivo
- Convenciones claras de nomenclatura de clases
- Comentarios que expliquen técnicas CSS para estudiantes

### Python

- Guías de estilo PEP 8
- Código claro y educativo
- Uso de anotaciones de tipo donde ayuden al aprendizaje

### Documentación Markdown

- Jerarquía clara de encabezados
- Bloques de código con especificación de lenguaje
- Enlaces a recursos adicionales
- Capturas de pantalla e imágenes en directorios `images/`
- Texto alternativo en imágenes para accesibilidad

### Organización de archivos

- Lecciones numeradas secuencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada proyecto tiene directorios `solution/` y a menudo `start/` o `your-work/`
- Imágenes guardadas en carpetas `images/` específicas de cada lección
- Traducciones en la estructura `translations/{language-code}/`

## Construcción y despliegue

### Despliegue de la aplicación de cuestionarios (Azure Static Web Apps)

La quiz-app está configurada para el despliegue en Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Crea la carpeta dist/
# Despliega mediante el flujo de trabajo de GitHub Actions al hacer push a main
```

Configuración de Azure Static Web Apps:
- **Ubicación de la aplicación**: `/quiz-app`
- **Ubicación de salida**: `dist`
- **Flujo de trabajo**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generación de PDF de documentación

```bash
npm install                    # Instalar docsify-to-pdf
npm run convert               # Generar PDF desde docs
```

### Documentación Docsify

```bash
npm install -g docsify-cli    # Instalar Docsify globalmente
docsify serve                 # Servir en localhost:3000
```

### Construcciones específicas de proyectos

Cada directorio de proyecto puede tener su propio proceso de construcción:
- Proyectos Vue: `npm run build` crea paquetes de producción
- Proyectos estáticos: No hay paso de construcción, servir archivos directamente

## Directrices para pull request

### Formato del título

Usa títulos claros y descriptivos que indiquen el área del cambio:
- `[Quiz-app] Añadir nuevo cuestionario para la lección X`
- `[Lesson-3] Corregir error tipográfico en proyecto terrarium`
- `[Translation] Añadir traducción al español para la lección 5`
- `[Docs] Actualizar instrucciones de configuración`

### Verificaciones requeridas

Antes de enviar un PR:

1. **Calidad del código**:
   - Ejecutar `npm run lint` en directorios afectados
   - Corregir todos los errores y advertencias

2. **Verificación de construcción**:
   - Ejecutar `npm run build` si aplica
   - Asegurar que no haya errores de construcción

3. **Validación de enlaces**:
   - Probar todos los enlaces markdown
   - Verificar que las imágenes se cargan correctamente

4. **Revisión de contenido**:
   - Corregir ortografía y gramática
   - Confirmar que ejemplos de código sean correctos y educativos
   - Verificar que las traducciones mantengan el significado original

### Requisitos de contribución

- Aceptar el CLA de Microsoft (verificación automática en el primer PR)
- Seguir el [Código de conducta de código abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consultar [CONTRIBUTING.md](./CONTRIBUTING.md) para pautas detalladas
- Referenciar números de issues en la descripción del PR si aplica

### Proceso de revisión

- PRs revisados por mantenedores y comunidad
- Prioridad a la claridad educativa
- Ejemplos de código deben seguir buenas prácticas actuales
- Traducciones revisadas por precisión y adecuación cultural

## Sistema de traducción

### Traducción automatizada

- Usa GitHub Actions con el flujo co-op-translator
- Traduce automáticamente a más de 50 idiomas
- Archivos fuente en directorios principales
- Archivos traducidos en `translations/{language-code}/`

### Añadir mejoras manuales a las traducciones

1. Localiza el archivo en `translations/{language-code}/`
2. Realiza mejoras preservando la estructura
3. Asegura que los ejemplos de código sigan funcionando
4. Prueba cualquier contenido localizado de cuestionarios

### Metadatos de traducción

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

## Depuración y solución de problemas

### Problemas comunes

**La aplicación de cuestionarios no inicia**:
- Verificar versión de Node.js (recomendado v14+)
- Borrar `node_modules` y `package-lock.json`, ejecutar `npm install` nuevamente
- Revisar conflictos de puerto (por defecto: Vite usa puerto 5173)

**El servidor API no arranca**:
- Verificar que la versión de Node.js cumple mínimo (node >=10)
- Comprobar si el puerto ya está en uso
- Asegurar que todas las dependencias están instaladas con `npm install`

**La extensión de navegador no carga**:
- Verificar que manifest.json está correctamente formateado
- Revisar la consola del navegador por errores
- Seguir instrucciones específicas del navegador para instalación de extensiones

**Problemas en proyecto de chat Python**:
- Asegurar que el paquete OpenAI esté instalado: `pip install openai`
- Verificar que la variable de entorno GITHUB_TOKEN esté configurada
- Revisar permisos de acceso de modelos de GitHub

**Docsify no sirve la documentación**:
- Instalar docsify-cli globalmente: `npm install -g docsify-cli`
- Ejecutar desde el directorio raíz del repositorio
- Verificar que `docs/_sidebar.md` exista

### Consejos para el entorno de desarrollo

- Usar VS Code con la extensión Live Server para proyectos HTML
- Instalar extensiones ESLint y Prettier para formato consistente
- Usar DevTools del navegador para depurar JavaScript
- Para proyectos Vue, instalar la extensión Vue DevTools

### Consideraciones de rendimiento

- El gran número de archivos traducidos (50+ idiomas) hace que los clones completos sean grandes
- Usar clonación superficial si solo se trabaja con contenido: `git clone --depth 1`
- Excluir traducciones de búsquedas cuando se trabaja con contenido en inglés
- Los procesos de construcción pueden ser lentos en la primera ejecución (npm install, compilación Vite)

## Consideraciones de seguridad

### Variables de entorno

- Las claves API nunca deben ser comprometidas en el repositorio
- Usar archivos `.env` (ya están en `.gitignore`)
- Documentar variables de entorno requeridas en los README de los proyectos

### Proyectos en Python

- Usar entornos virtuales: `python -m venv venv`
- Mantener dependencias actualizadas
- Tokens de GitHub deben tener permisos mínimos necesarios

### Acceso a modelos de GitHub

- Se requieren Tokens de Acceso Personal (PAT) para modelos de GitHub
- Los tokens deben guardarse como variables de entorno
- Nunca comprometer tokens o credenciales

## Notas adicionales

### Público objetivo

- Principiantes completos en desarrollo web
- Estudiantes y autodidactas
- Profesores usando el currículo en aulas
- Contenido diseñado para accesibilidad y construcción gradual de habilidades

### Filosofía educativa

- Enfoque de aprendizaje basado en proyectos
- Revisiones frecuentes de conocimiento (cuestionarios)
- Ejercicios prácticos de programación
- Ejemplos de aplicación en el mundo real
- Enfoque en fundamentos antes que frameworks

### Mantenimiento del repositorio

- Comunidad activa de aprendices y colaboradores
- Actualizaciones regulares de dependencias y contenido
- Issues y discusiones monitoreadas por mantenedores
- Actualización de traducciones automatizadas mediante GitHub Actions

### Recursos relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para estudiantes
- Cursos adicionales: Currículos de IA generativa, Ciencia de datos, ML, IoT disponibles

### Trabajar con proyectos específicos

Para instrucciones detalladas sobre proyectos individuales, consulta los archivos README en:
- `quiz-app/README.md` - Aplicación de cuestionarios en Vue 3
- `7-bank-project/README.md` - Aplicación bancaria con autenticación
- `5-browser-extension/README.md` - Desarrollo de extensiones para navegador
- `6-space-game/README.md` - Desarrollo de juego basado en Canvas
- `9-chat-project/README.md` - Proyecto de asistente de chat con IA

### Estructura de monorepositorio

Aunque no es un monorepo tradicional, este repositorio contiene múltiples proyectos independientes:
- Cada lección es autónoma
- Los proyectos no comparten dependencias
- Trabaja en proyectos individuales sin afectar otros
- Clona el repositorio completo para la experiencia completa del currículo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Descargo de responsabilidad**:
Este documento ha sido traducido utilizando el servicio de traducción por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por la precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o inexactitudes. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas derivadas del uso de esta traducción.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->