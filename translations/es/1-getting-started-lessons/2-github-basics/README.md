<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05666cecb8983a72cf0ce1d18932b5b7",
  "translation_date": "2025-08-24T12:47:41+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "es"
}
-->
# Introducción a GitHub

Esta lección cubre los conceptos básicos de GitHub, una plataforma para alojar y gestionar cambios en tu código.

![Introducción a GitHub](../../../../sketchnotes/webdev101-github.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Cuestionario previo a la lección
[Cuestionario previo a la lección](https://ff-quizzes.netlify.app/web/quiz/3)

## Introducción

En esta lección, cubriremos:

- cómo rastrear el trabajo que haces en tu máquina
- cómo trabajar en proyectos con otros
- cómo contribuir al software de código abierto

### Prerrequisitos

Antes de comenzar, necesitas verificar si Git está instalado. En la terminal escribe: 
`git --version`

Si Git no está instalado, [descarga Git](https://git-scm.com/downloads). Luego, configura tu perfil local de Git en la terminal:
* `git config --global user.name "tu-nombre"`
* `git config --global user.email "tu-correo"`

Para verificar si Git ya está configurado, puedes escribir:
`git config --list`

También necesitarás una cuenta de GitHub, un editor de código (como Visual Studio Code) y abrir tu terminal (o símbolo del sistema).

Navega a [github.com](https://github.com/) y crea una cuenta si aún no lo has hecho, o inicia sesión y completa tu perfil. 

✅ GitHub no es el único repositorio de código en el mundo; hay otros, pero GitHub es el más conocido.

### Preparación

Necesitarás una carpeta con un proyecto de código en tu máquina local (laptop o PC) y un repositorio público en GitHub, que servirá como ejemplo de cómo contribuir a los proyectos de otros.  

---

## Gestión de código

Supongamos que tienes una carpeta local con un proyecto de código y quieres comenzar a rastrear tu progreso usando git, el sistema de control de versiones. Algunas personas comparan usar git con escribir una carta de amor a tu futuro yo. Al leer tus mensajes de confirmación días, semanas o meses después, podrás recordar por qué tomaste una decisión o "revertir" un cambio, siempre y cuando escribas buenos "mensajes de confirmación".

### Tarea: Crear un repositorio y confirmar código  

> Mira el video
> 
> [![Video sobre conceptos básicos de Git y GitHub](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **Crear un repositorio en GitHub**. En GitHub.com, en la pestaña de repositorios o desde la barra de navegación en la parte superior derecha, encuentra el botón **nuevo repositorio**.

   1. Dale un nombre a tu repositorio (carpeta).
   1. Selecciona **crear repositorio**.

1. **Navega a tu carpeta de trabajo**. En tu terminal, cambia a la carpeta (también conocida como directorio) que deseas comenzar a rastrear. Escribe:

   ```bash
   cd [name of your folder]
   ```

1. **Inicializa un repositorio de git**. En tu proyecto escribe:

   ```bash
   git init
   ```

1. **Verifica el estado**. Para verificar el estado de tu repositorio escribe:

   ```bash
   git status
   ```

   La salida puede verse algo así:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Normalmente, el comando `git status` te dice cosas como qué archivos están listos para ser _guardados_ en el repositorio o tienen cambios que podrías querer persistir.

1. **Agrega todos los archivos para rastrear**
   Esto también se llama preparar archivos/agregar archivos al área de preparación.

   ```bash
   git add .
   ```

   El argumento `git add` más `.` indica que todos tus archivos y cambios serán rastreados. 

1. **Agrega archivos seleccionados para rastrear**

   ```bash
   git add [file or folder name]
   ```

   Esto nos ayuda a agregar solo archivos seleccionados al área de preparación cuando no queremos confirmar todos los archivos de una vez.

1. **Quitar la preparación de todos los archivos**

   ```bash
   git reset
   ```

   Este comando nos ayuda a quitar la preparación de todos los archivos de una vez.

1. **Quitar la preparación de un archivo en particular**

   ```bash
   git reset [file or folder name]
   ```

   Este comando nos ayuda a quitar la preparación de solo un archivo en particular que no queremos incluir en la próxima confirmación.

1. **Persistir tu trabajo**. En este punto, has agregado los archivos a un área llamada _área de preparación_. Un lugar donde Git está rastreando tus archivos. Para hacer el cambio permanente necesitas _confirmar_ los archivos. Para hacerlo, crea una _confirmación_ con el comando `git commit`. Una _confirmación_ representa un punto de guardado en la historia de tu repositorio. Escribe lo siguiente para crear una _confirmación_:

   ```bash
   git commit -m "first commit"
   ```

   Esto confirma todos tus archivos, agregando el mensaje "primer commit". Para futuros mensajes de confirmación, querrás ser más descriptivo en tu descripción para transmitir qué tipo de cambio has realizado.

1. **Conecta tu repositorio local de Git con GitHub**. Un repositorio de Git es útil en tu máquina, pero en algún momento querrás tener una copia de seguridad de tus archivos en algún lugar y también invitar a otras personas a trabajar contigo en tu repositorio. Un gran lugar para hacerlo es GitHub. Recuerda que ya hemos creado un repositorio en GitHub, así que lo único que necesitamos hacer es conectar nuestro repositorio local de Git con GitHub. El comando `git remote add` hará justo eso. Escribe el siguiente comando:

   > Nota: antes de escribir el comando, ve a la página de tu repositorio en GitHub para encontrar la URL del repositorio. La usarás en el siguiente comando. Reemplaza ```https://github.com/username/repository_name.git``` con tu URL de GitHub.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Esto crea una _remota_, o conexión, llamada "origin" que apunta al repositorio de GitHub que creaste anteriormente.

1. **Enviar archivos locales a GitHub**. Hasta ahora has creado una _conexión_ entre el repositorio local y el repositorio de GitHub. Enviemos estos archivos a GitHub con el siguiente comando `git push`, de esta manera: 
   
   > Nota: el nombre de tu rama puede ser diferente por defecto de ```main```.

   ```bash
   git push -u origin main
   ```

   Esto envía tus confirmaciones en tu rama "main" a GitHub.

2. **Para agregar más cambios**. Si deseas continuar haciendo cambios y enviándolos a GitHub, solo necesitarás usar los siguientes tres comandos:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Consejo: También podrías querer adoptar un archivo `.gitignore` para evitar que los archivos que no deseas rastrear aparezcan en GitHub, como ese archivo de notas que guardas en la misma carpeta pero que no tiene lugar en un repositorio público. Puedes encontrar plantillas para archivos `.gitignore` en [.gitignore templates](https://github.com/github/gitignore).

#### Mensajes de confirmación

Un gran mensaje de confirmación de Git completa la siguiente oración:
Si se aplica, esta confirmación <tu línea de asunto aquí>

Para el asunto, usa el tiempo presente e imperativo: "cambiar" en lugar de "cambiado" ni "cambios". 
Al igual que en el asunto, en el cuerpo (opcional) también usa el tiempo presente e imperativo. El cuerpo debe incluir la motivación para el cambio y contrastarlo con el comportamiento anterior. Estás explicando el `por qué`, no el `cómo`.

✅ Tómate unos minutos para navegar por GitHub. ¿Puedes encontrar un mensaje de confirmación realmente bueno? ¿Puedes encontrar uno realmente mínimo? ¿Qué información crees que es la más importante y útil para transmitir en un mensaje de confirmación?

### Tarea: Colaborar

La razón principal para poner cosas en GitHub es hacer posible colaborar con otros desarrolladores.

## Trabajar en proyectos con otros

> Mira el video
>
> [![Video sobre conceptos básicos de Git y GitHub](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

En tu repositorio, navega a `Insights > Community` para ver cómo tu proyecto se compara con los estándares comunitarios recomendados.

   Aquí hay algunas cosas que pueden mejorar tu repositorio de GitHub:
   - **Descripción**. ¿Agregaste una descripción para tu proyecto?
   - **README**. ¿Agregaste un README? GitHub proporciona orientación para escribir un [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Guía de contribución**. ¿Tu proyecto tiene [guías de contribución](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)?
   - **Código de conducta**. ¿Un [Código de Conducta](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/)?
   - **Licencia**. Quizás lo más importante, una [licencia](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

Todos estos recursos beneficiarán la incorporación de nuevos miembros al equipo. Y típicamente son el tipo de cosas que los nuevos contribuyentes miran antes de siquiera mirar tu código, para averiguar si tu proyecto es el lugar adecuado para que dediquen su tiempo.

✅ Los archivos README, aunque toman tiempo para prepararse, a menudo son descuidados por los mantenedores ocupados. ¿Puedes encontrar un ejemplo de uno particularmente descriptivo? Nota: hay algunos [herramientas para ayudar a crear buenos READMEs](https://www.makeareadme.com/) que podrías querer probar.

### Tarea: Fusionar código

Los documentos de contribución ayudan a las personas a contribuir al proyecto. Explican qué tipos de contribuciones estás buscando y cómo funciona el proceso. Los contribuyentes necesitarán pasar por una serie de pasos para poder contribuir a tu repositorio en GitHub:

1. **Hacer un fork de tu repositorio**. Probablemente querrás que las personas _hagan un fork_ de tu proyecto. Hacer un fork significa crear una réplica de tu repositorio en su perfil de GitHub.
1. **Clonar**. Desde allí, clonarán el proyecto a su máquina local. 
1. **Crear una rama**. Querrás pedirles que creen una _rama_ para su trabajo. 
1. **Enfocar su cambio en un área**. Pide a los contribuyentes que concentren sus contribuciones en una sola cosa a la vez; de esa manera, las posibilidades de que puedas _fusionar_ su trabajo son mayores. Imagina que escriben una corrección de errores, agregan una nueva funcionalidad y actualizan varias pruebas; ¿qué pasa si quieres, o solo puedes implementar 2 de 3, o 1 de 3 cambios?

✅ Imagina una situación donde las ramas son particularmente críticas para escribir y enviar buen código. ¿Qué casos de uso puedes pensar?

> Nota: sé el cambio que quieres ver en el mundo y crea ramas para tu propio trabajo también. Cualquier confirmación que hagas se realizará en la rama en la que estés "revisado". Usa `git status` para ver en qué rama estás.

Pasemos por un flujo de trabajo de contribuyente. Supongamos que el contribuyente ya ha _hecho un fork_ y _clonado_ el repositorio, por lo que tiene un repositorio de Git listo para trabajar en su máquina local:

1. **Crear una rama**. Usa el comando `git branch` para crear una rama que contendrá los cambios que planean contribuir:

   ```bash
   git branch [branch-name]
   ```

1. **Cambiar a la rama de trabajo**. Cambia a la rama especificada y actualiza el directorio de trabajo con `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Hacer el trabajo**. En este punto, quieres agregar tus cambios. No olvides informarle a Git con los siguientes comandos:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Asegúrate de darle un buen nombre a tu confirmación, tanto para tu beneficio como para el mantenedor del repositorio al que estás ayudando.

1. **Combinar tu trabajo con la rama `main`**. En algún momento habrás terminado de trabajar y querrás combinar tu trabajo con el de la rama `main`. La rama `main` podría haber cambiado mientras tanto, así que asegúrate de actualizarla primero con los siguientes comandos:

   ```bash
   git switch main
   git pull
   ```

   En este punto, asegúrate de que cualquier _conflicto_, situaciones donde Git no puede fácilmente _combinar_ los cambios, ocurra en tu rama de trabajo. Por lo tanto, ejecuta los siguientes comandos:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Esto traerá todos los cambios de `main` a tu rama y, con suerte, podrás continuar. Si no, VS Code te indicará dónde Git está _confundido_ y solo tendrás que alterar los archivos afectados para indicar qué contenido es el más preciso.

1. **Enviar tu trabajo a GitHub**. Enviar tu trabajo a GitHub significa dos cosas: empujar tu rama a tu repositorio y luego abrir un PR (Pull Request).

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   El comando anterior crea la rama en tu repositorio bifurcado.

1. **Abrir un PR**. A continuación, querrás abrir un PR. Hazlo navegando al repositorio bifurcado en GitHub. Verás una indicación en GitHub donde te pregunta si deseas crear un nuevo PR; haz clic en eso y serás llevado a una interfaz donde puedes cambiar el título del mensaje de confirmación, darle una descripción más adecuada. Ahora el mantenedor del repositorio que bifurcaste verá este PR y _crucemos los dedos_ apreciará y _fusionará_ tu PR. Ahora eres un contribuyente, ¡yay! :)

1. **Limpiar**. Se considera una buena práctica _limpiar_ después de fusionar exitosamente un PR. Querrás limpiar tanto tu rama local como la rama que empujaste a GitHub. Primero eliminémosla localmente con el siguiente comando:

   ```bash
   git branch -d [branch-name]
   ```
Asegúrate de ir a la página de GitHub del repositorio bifurcado a continuación y eliminar la rama remota que acabas de subir.

`Pull request` parece un término un poco extraño porque en realidad quieres enviar tus cambios al proyecto. Pero el mantenedor (propietario del proyecto) o el equipo principal necesita considerar tus cambios antes de fusionarlos con la rama "principal" del proyecto, por lo que en realidad estás solicitando una decisión de cambio a un mantenedor.

Un pull request es el lugar donde se comparan y discuten las diferencias introducidas en una rama con revisiones, comentarios, pruebas integradas y más. Un buen pull request sigue aproximadamente las mismas reglas que un mensaje de commit. Puedes agregar una referencia a un problema en el rastreador de problemas, por ejemplo, cuando tu trabajo soluciona un problema. Esto se hace usando un `#` seguido del número de tu problema. Por ejemplo, `#97`.

🤞Crucemos los dedos para que todas las verificaciones pasen y el/los propietario(s) del proyecto fusionen tus cambios en el proyecto🤞

Actualiza tu rama de trabajo local actual con todos los nuevos commits de la rama remota correspondiente en GitHub:

`git pull`

## Cómo contribuir a código abierto

Primero, busquemos un repositorio (o **repo**) en GitHub que te interese y al que te gustaría contribuir con un cambio. Querrás copiar su contenido a tu máquina.

✅ Una buena forma de encontrar repositorios 'amigables para principiantes' es [buscar por la etiqueta 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Copiar un repositorio localmente](../../../../1-getting-started-lessons/2-github-basics/images/clone_repo.png)

Hay varias formas de copiar código. Una forma es "clonar" el contenido del repositorio, usando HTTPS, SSH o la CLI (Interfaz de Línea de Comandos) de GitHub.

Abre tu terminal y clona el repositorio de esta manera:  
`git clone https://github.com/ProjectURL`

Para trabajar en el proyecto, cambia al directorio correcto:  
`cd ProjectURL`

También puedes abrir el proyecto completo usando [Codespaces](https://github.com/features/codespaces), el editor de código integrado / entorno de desarrollo en la nube de GitHub, o [GitHub Desktop](https://desktop.github.com/).

Por último, puedes descargar el código en una carpeta comprimida.

### Algunas cosas interesantes sobre GitHub

Puedes marcar con estrella, observar y/o "bifurcar" cualquier repositorio público en GitHub. Puedes encontrar tus repositorios marcados con estrella en el menú desplegable de la esquina superior derecha. Es como guardar en favoritos, pero para código.

Los proyectos tienen un rastreador de problemas, generalmente en GitHub en la pestaña "Issues" a menos que se indique lo contrario, donde las personas discuten problemas relacionados con el proyecto. Y la pestaña de Pull Requests es donde las personas discuten y revisan los cambios que están en progreso.

Los proyectos también pueden tener discusiones en foros, listas de correo o canales de chat como Slack, Discord o IRC.

✅ Echa un vistazo a tu nuevo repositorio de GitHub y prueba algunas cosas, como editar configuraciones, agregar información a tu repositorio y crear un proyecto (como un tablero Kanban). ¡Hay mucho que puedes hacer!

---

## 🚀 Desafío

Trabaja en pareja con un amigo para trabajar en el código del otro. Crea un proyecto de manera colaborativa, bifurca código, crea ramas y fusiona cambios.

## Cuestionario posterior a la clase  
[Cuestionario posterior a la clase](https://ff-quizzes.netlify.app/web/quiz/4)

## Revisión y autoestudio

Lee más sobre [cómo contribuir a software de código abierto](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Hoja de referencia de Git](https://training.github.com/downloads/github-git-cheat-sheet/).

Practica, practica, practica. GitHub tiene excelentes rutas de aprendizaje disponibles en [skills.github.com](https://skills.github.com):

- [Primera semana en GitHub](https://skills.github.com/#first-week-on-github)

También encontrarás cursos más avanzados.

## Tarea

Completa [el curso de la Primera Semana en GitHub](https://skills.github.com/#first-week-on-github).

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.