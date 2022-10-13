# Usando un editor de código

Esta lección cubre lo básico de usar [VSCode.dev](https://vscode.dev) un editor de código para la web de tal forma que puedas hacer cambios a tu código y contribuir a un proyecto sin instalar nada en tu computador.

<!----
TODO: add an optional image
![Using a code editor](../../sketchnotes/webdev101-vscode-dev.png)
> Sketchnote by [Author name](https://example.com)
---->

<!---
## Pre-Lecture Quiz
[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/3)
---->

## Objetivos de aprendizaje

En esta lección aprenderás cómo:

- Usar un editor de código en un proyecto de código
- Mantener el historial de cambios con un controlador de versiones
- Personalizar el editor para el desarrollo

### Prerrequisitos

Antes de comenzar, necesitarás crear una cuenta con [GitHub](https://github.com). Dirígete a [GitHub](https://github.com/) y crea una cuenta si no tienes una aún.

### Introducción

Un editor de código es una herramienta esencial para escribir programas y colaborar con proyectos de código existentes. Una vez entiendas lo básico de un editor y cómo hacer uso de sus características, serás capaz de aplicarlo cuando escribas código.

## Iniciando con VSCode.dev

[VSCode.dev](https://vscode.dev) en un editor de código en la web. No necesitas instalar nada para usarlo, es como abrir cualquier otro sitio web. Para iniciar el editor abre el siguiente link: [https://vscode.dev](https://vscode.dev). Si no has iniciado sesión en [GitHub](https://github.com/), sigue los pasos para iniciar sesión o crear una nueva cuenta e inicia sesión.

Una vez cargue, se debe ver similar a esta imagen:

![Default VSCode.dev](../images/default-vscode-dev.png)

Hay tres secciones principales, de derecha a izquierda:

1. La _barra de actividad_ la cual incluye alguno íconos, como la lupa 🔎, el engranaje ⚙️  y algunos más
1. La barra de actividad expandida la cual por defecto muestra _el explorador_, llamada _barra lateral_.
1. Y finalmente, el área de código a la derecha.

Haz click en cada ícono para mostrar diferentes menús. Una vez hecho, haz click en _el explorador_ para volver a donde comenzaste.

Cuando comienzas a crear código o modificar el existente, esto ocurrirá en la enorme parte de la derecha. También usarás esta área para visualizar el código existente, lo cual harás a continuación.


## Abriendo un repositorio de GitHub

La primer cosa que necesitarás es abrir un repositorio de GitHub. Existen multiples formas de abrir un repositorio. En esta sección verás dos formas distintas de abrir un repositorio de tal forma que puedas empezar a trabajar en los cambios.

### 1. Con el editor

Usa el propio editor para abrir un repositorio. Si vas a [VSCode.dev](https://vscode.dev) verás un botón _"Abrir repositorio remoto"_ :

![Abrir un repositorio remoto](../images/open-remote-repository.png)

También puedes usar la paleta de comandos. La paleta de comandos es una caja de entrada donde puedes escribir cualquier palabra que sea parte de un comando o una acción para encontrar el comando correcto y ejecutarlo. Usa el menú arriba a la izquierda, Selecciona _Vista_, y selecciona _Paleta de Comandos_, o usando el siguiente atajo de teclado: Ctrl-Shift-P (en MacOS debe ser Command-Shift-P).

![Palette Menu](../images/palette-menu.png)

Una vez que el menú se abra, escribe _open remote repository_, y selecciona la primer opción. Multiples repositorios de los cuales eres parte o que has abierto recientemente se mostrarán. También puedes usar toda la URL de GitHub para seleccionar uno. Usa la siguiente URL y pegala en la caja:

```
https://github.com/microsoft/Web-Dev-For-Beginners
```

✅ Si funcionó, verás todos los archivos del repositorio cargados en el editor.


### 2. Usando la URL

También puedes usar la URL para cargar un repositorio directamente. Por ejemplo, la URL completa de este respositorio es [https://github.com/microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners), pero puedes cambiar el dominio de GitHub con `VSCode.dev/github` y cargar el repositorio directamente. La URL resultante debería ser [https://vscode.dev/github/microsoft/Web-Dev-For-Beginners](https://vscode.dev/github/microsoft/Web-Dev-For-Beginners).


## Edición de archivos
Una vez que haz abierto el repositorio en el navegador/ vscode.dev, el siguiente paso debería ser actualizar o realizar cambios en el proyecto.

### 1. Crear un nuevo archivo

Tú puedes crear un archivo en una carpeta ya existente, o puedes crearlo en la carpeta raíz. Para crear un nuevo archivo, abre una carpeta en la cual quieres que se guarde el archivo y selecciona el ícono de _'New file ...'_ en la barra de actividad _(izquierda)_, ponle un nombre y presiona enter.

![Crear un nuevo archivo](../images/create-new-file.png)

### 2. Editar y guardar un archivo en el repositorio

Usar vscode.dev es útil cuando quieres hacer actualizaciones rápidas a tu proyecto sin tener que cargar ningún software localmente.
Para actualizar tu código, clickea en el ícono de 'el explorador' también ubicado en la barra de actividad, para ver los archivos y carpetas en el repositorio.
Selecciona un archivo para abrirlo en el área de código, haz tus cambios y guardalos.

![Editar un archivo](../images/edit-a-file.png)

Una vez hayas terminado de hacer tus cambios, selecciona el ícono _`control de fuente`_ el cual contiene todos los nuevos cambios que has hecho a tu repositorio.

Para ver los cambios que has hecho al proyecto, selecciona el(los) archivo(s) en la carpeta `Changes` ubicada en la barra de actividad expandida. Esto abrirá un 'Working Tree' para que visualmente veas los cambios hechos al archivo. En rojo se muestran las omisiones para el proyecto, mientras que en verde se muestran las adiciones.

![Ver cambios](../images/working-tree.png)

Si te encuentras satisfecho con los cambios hechos, pon el ratón sobre la carpeta `Changes` y clickea en el botón `+` para hacer 'stage' a los cambios. 'Stage' simplemente significa preparar tus cambios para enviarlos a GitHub.

Sin embargo, si no te sientes cómodo con algún cambio y deseas descartarlo, pon el ratón sobre la carpeta `Changes` y selecciona el ícono `undo`.

Entonces, escribe en un `commit message` _(Una descripción del cambio que haz hecho en el proyecto)_, clickea el `check icon` para hacer commit y push de tus cambios.

Una vez termines de trabajar en tu proyecto, selecciona el `hamburger menu icon` ubicado arriba a la izquierda para retornar al repositorio en github.com.

![Stage y commit cambios](../images/edit-vscode.dev.gif)

## Uso de extensiones
Instalar extensiones en VSCode te permite añadir nuevas características y personalizar las opciones de desarrollo en tu editor para mejorar tu flujo de trabajo en el desarrollo. Estas extensiones también te ayudan a añadir soporte a múltiples lenguajes de programación y son amenudo extensiones genéricas o extensiones basadas en un lenguaje.

Para buscar en la lista de todas las extensiones disponiblese, clickea en _`Extensions icon`_ en la barra de actividad y empieza a escribir el nombre de la extension en el campo de texto llamado _'Search Extensions in Marketplace'_.
Verás una lista de extensiones, cada una contiene **el nombre de la extension, el nombre de quien la publica, una descripción de una oración, número de descargas** y **una puntuación de estrellas**.

![Detalles de las extensiones](../images/extension-details.png)

También puedes ver todas las extensiones previamente instaladas expandiendo la _`carpeta de instalación`_ , extensiones populares usadas por la mayoría de los desarrolladores en la _`carpeta Popular`_ y extensiones recomendadas para ti o usuarios con el mismo entorno de trabajo o basadas en los archivos recientemente abiertos en la _`carpeta de recomendados`_ .

![Ver extensiones](../images/extensions.png)


### 1. Instalar extensiones
Para instalar una extensión, escribe el nombre de la extensión en el campo de búsqueda y clickea en ella para ver invormación adicional acerca de la extensión en el área de código una vez aparezca en la barra de actividad expandida.

Puedes clickear en el _blue install button_ o en la barra de actividad expandida para instalar o usar el botón de instalación que aparece en el área de código una vez hayas seleccionado la extensión para cargar información adicional.

![Instalar extensiones](../images/install-extension.gif)

### 2. Personalizar Extensiones
Después de instalar la extensión, podrías necesitar cambiar su comportamiento y personalizarlo en base a tus preferencias. Para hacerlo, selecciona el ícono de extensiones, y esta vez, tu extensión aparecerá en la _carpeta de instalación_, clickea en el _**ícono de engranaje**_ y dirigete hasta las _opciones de la extensión_

![Modifica las opciones de la extensión](../images/extension-settings.png)

### 3. Gestionando Extensiones
Después de instalar y usar tu extensión, vscode.dev ofrece opciones para manejar tu extensión basado en diferentes necesidades. Por ejemplo, tú puedes elegir:
- **Deshabilitar:**  _(Temporalmente deshabilitas una extensión cuando no la necesitas más pero no quieres desinstalarla completamente)_

    Selecciona la extensión instalada en la barra de actividad expandida > clickea el ícono de engranaje > selecciona 'Deshabilitar' o 'Deshabilitar (Workspace)' **O** abre la extensión en el área de código y clickea el botón azul de deshabilitar.

   
- **Desinstalar:** Selecciona la extensión instalada en la barra de actividad expandida > clickea el ícono de engranaje > selecciona 'Desinstalar' **O** Abre la extensión en el área de código y clickea en el botón azul de Desinstalar.



---

## Tarea
[Crea un sitio web de resumen usando vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)


<!----
## Post-Lecture Quiz
[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/4)
---->

## Reseña & Propio estudio

Lee más acerca de [VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) y alguna de sus otras características.
