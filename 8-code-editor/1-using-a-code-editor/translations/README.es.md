# Usando un editor de código

Esta lección cubre los conceptos básicos del uso de [VSCode.dev](https://vscode.dev) un editor de código para la web para que puedas realizar cambios en tu código y contribuir a un proyecto sin instalar nada en tu computadora.

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

En esta lección, aprenderás cómo:

- Usar un editor de código en un proyecto de código
- Realizar un seguimiento de los cambios con el control de versiones
- Personalizar el editor para el desarrollo

### Prerequisitos

Antes de comenzar, necesitarás crear una cuenta con [GitHub](https://github.com). Ve a [GitHub](https://github.com/) y crea una cuenta si aún no lo has hecho.

### Introducción

Un editor de código es una herramienta esencial para escribir programas y colaborar con proyectos de codificación existentes. Una vez que comprendas los conceptos básicos de un editor y cómo hacer uso de sus funciones, podrás aplicarlas al escribir código.

## Primeros pasos con VSCode.dev

[VSCode.dev](https://vscode.dev) es un editor de código en la web. No necesitas instalar nada para usarlo, al igual que abrir cualquier otro sitio web. Para comenzar con el editor, abre el siguiente enlace: [https://vscode.dev](https://vscode.dev). Si no has iniciado sesión en [GitHub](https://github.com/), sigue las indicaciones para iniciar sesión o crear una nueva cuenta y luego inicia sesión.

Una vez que cargue, debería verse similar a esta imagen:

![Default VSCode.dev](../../images/default-vscode-dev.png)

Hay tres secciones principales, comenzando desde el extremo izquierdo y moviéndose hacia la derecha:

1. La _activity bar_ que incluye algunos íconos, como la lupa 🔎, el engranaje ⚙️ y algunos otros
1. La barra de actividad expandida que por defecto es el _Explorer_, llamada _side bar_.
1. Y finalmente, el área de código a la derecha.

Haz clic en cada uno de los iconos para mostrar un menú diferente. Una vez hecho esto, haz clic en _Explorer_ para volver al punto de partida.

Cuando comiences a crear código o modifiques código existente, sucederá en el área más grande a la derecha. Usarás esta área para visualizar también el código existente, lo que harás a continuación.


## Abrir un repositorio de GitHub

Lo primero que necesitarás es abrir un repositorio de GitHub. Hay varias formas de abrir un repositorio. En esta sección, verás dos formas diferentes de abrir un repositorio para que puedas comenzar a trabajar en los cambios.

### 1. Con el editor

Utiliza el propio editor para abrir un repositorio remoto. Si vas a [VSCode.dev](https://vscode.dev) verás un botón _"Open Remote Repository"_:

![Open remote repository](../../images/open-remote-repository.png)

También puedes utilizar la paleta de comandos. La paleta de comandos es un cuadro de entrada donde puede escribir cualquier palabra que sea parte de un comando o una acción para encontrar el comando correcto para ejecutar. Usa el menú en la parte superior izquierda, luego seleccione _View_, y luego elige _Command Palette_, o usando el siguiente atajo de teclado: Ctrl-Shift-P (en MacOS sería Command-Shift-P).

![Palette Menu](../../images/palette-menu.png)

Una vez que se abra el menú, escribe _open remote repository_ y luego selecciona la primera opción. Se mostrarán varios repositorios de los que formas parte o que has abierto recientemente. También puedes usar una URL completa de GitHub para seleccionar uno. Usa la siguiente URL y pégala en el cuadro:

```
https://github.com/microsoft/Web-Dev-For-Beginners
```

✅ Si tienes éxito, verá todos los archivos de este repositorio cargados en el editor de texto.


### 2. Usando la dirección URL

También puedes usar una URL directamente para cargar un repositorio. Por ejemplo, la URL completa del repositorio actual es [https://github.com/microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners), pero puedes intercambiar el dominio de GitHub con `VSCode.dev/github` y cargar el repositorio directamente. La URL resultante sería [https://vscode.dev/github/microsoft/Web-Dev-For-Beginners](https://vscode.dev/github/microsoft/Web-Dev-For-Beginners).


## Editar archivos
Una vez que hayas abierto el repositorio en el navegador/ vscode.dev, el siguiente paso sería realizar actualizaciones o cambios en el proyecto.

### 1. Crear un nuevo archivo

Puede crear un archivo dentro de una carpeta existente o crearlo en el directorio/carpeta raíz. Para crear un nuevo archivo, abre una ubicación/directorio en el que desees guardar el archivo y selecciona el icono _'New file...'_ en la barra de actividad _(left)_, asígnale un nombre y presiona Intro.

![Create a new file](../../images/create-new-file.png)

### 2. Editar y guardar un archivo en el repositorio

El uso de vscode.dev es útil siempre que desees realizar actualizaciones rápidas de su proyecto sin tener que cargar ningún software localmente.
Para actualizar tu código, haz clic en el ícono 'Explorer', también ubicado en la barra de actividades para ver archivos y carpetas en el repositorio.
Selecciona un archivo para abrirlo en el área de código, realiza tus cambios y guárdalo.

![Edit a file](../../images/edit-a-file.png)

Una vez que hayas terminado de actualizar tu proyecto, selecciona el icono _`source control`_ que contiene todos los nuevos cambios que has realizado en tu repositorio.

Para ver los cambios que realizaste en tu proyecto, selecciona los archivos en la carpeta "Changes" en la barra de actividades expandida. Esto abrirá un 'Working Tree' para que puedas ver los cambios que realizaste en el archivo. El rojo muestra una omisión al proyecto, mientras que el verde significa una adición.

![View changes](../../images/working-tree.png)

Si estás satisfecho con los cambios que realizaste, coloca el cursor sobre la carpeta "Changes" y haz clic en el botón "+" para realizar los cambios. Staging simplemente significa preparar sus cambios para enviarlos a GitHub.

Si acaso no te sientes cómodo con algunos cambios y deseas descartarlos, coloca el cursor sobre la carpeta `Changes` y selecciona el icono `undo`.

Luego, escribe un `commit message` _(Una descripción del cambio que ha realizado en el proyecto)_, hagz clic en el `icono de verificación` para confirmar y enviar tus cambios.

Una vez que haya terminado de trabajar en su proyecto, seleccione el `icono de menú de hamburguesa` en la parte superior izquierda para volver al repositorio en github.com.

![Stage & commit changes](../../images/edit-vscode.dev.gif)

## Uso de extensiones
La instalación de extensiones en VSCode te permiten agregar nuevas funciones y opciones de entorno de desarrollo personalizadas en tu editor para mejorar su flujo de trabajo de desarrollo. Estas extensiones también lo ayudan a agregar soporte para múltiples lenguajes de programación y, a menudo, son extensiones genéricas o extensiones basadas en lenguaje.

Para navegar por la lista de todas las extensiones disponibles, haz clic en el _`Extensions incon`_ en la barra de actividades y comienza a escribir el nombre de la extensión en el campo de texto denominado _'Search Extensions in Marketplace'_.
Verás una lista de extensiones, cada una de las cuales contiene **el nombre de la extensión, el nombre del editor, una descripción de 1 oración, el número de descargas** y **una calificación de estrellas**.

![Extension details](../../images/extension-details.png)

También puedes ver todas las extensiones instaladas previamente expandiendo la _`Carpeta instalada`_, las extensiones populares utilizadas por la mayoría de los desarrolladores en la _`Carpeta popular`_ y las extensiones recomendadas para usted por los usuarios en el mismo espacio de trabajo o en función de los archivos que abriste recientemente en la _`carpeta recomendada`_ .

![View extensions](../../images/extensions.png)


### 1. Instalar extensiones
Para instalar una extensión, escribe el nombre de la extensión en el campo de búsqueda y haz clic en él para ver información adicional sobre la extensión en el área del código una vez que aparezca en la barra de actividad ampliada.

Puedes hacer clic en el _botón de instalación azul_ en la barra de actividad expandida para instalar o usar el botón de instalación que aparece en el área del código una vez que seleccionas la extensión para cargar información adicional.

![Install extensions](../../images/install-extension.gif)

### 2. Personalizar extensiones
Después de instalar la extensión, es posible que debas modificar su comportamiento y personalizarlo según tus preferencias. Para hacer esto, selecciona el ícono de Extensiones, y esta vez, su extensión aparecerá en la _Carpeta instalada_, haz clic en el _**Icono de engranaje**_ y navega hasta _Configuración de extensiones_ .

![Modify extension settings](../../images/extension-settings.png)

### 3. Administrar extensiones
Después de instalar y usar su extensión, vscode.dev ofrece opciones para administrar su extensión en función de diferentes necesidades. Por ejemplo, puede optar por:
- **Deshabilitar:**  _(Deshabilitas temporalmente una extensión cuando ya no la necesitas pero no quieres desinstalarla por completo)_

    Selecciona la extensión instalada en la barra de actividad ampliada > haz clic en el icono de engranaje > selecciona 'Desactivar' o 'Desactivar (área de trabajo)' **O** Abre la extensión en el área del código y haz clic en el botón azul Desactivar.

   
- **Desinstalar:** Selecciona la extensión instalada en la barra de actividad expandida > haz clic en el icono de engranaje > selecciona 'Desinstalar' **O** Abre la extensión en el área del código y haga clic en el botón azul Desinstalar.



---

## Asignación
[Cree un sitio web de currículum usando vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)


<!----
## Post-Lecture Quiz
[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/4)
---->

## Revisión y autoestudio

Leer más sobre [VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) y algunas de sus otras características.
