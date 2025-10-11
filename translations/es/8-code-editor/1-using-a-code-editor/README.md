<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T08:27:31+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "es"
}
-->
***

# Usando un Editor de Código: Dominando [VSCode.dev](https://vscode.dev)

**¡Bienvenido!**  
Esta lección te llevará desde lo básico hasta el uso avanzado de [VSCode.dev](https://vscode.dev), el potente editor de código basado en la web. Aprenderás a editar código con confianza, gestionar proyectos, rastrear cambios, instalar extensiones y colaborar como un profesional, todo desde tu navegador, sin necesidad de instalación.

***

## Objetivos de Aprendizaje

Al final de esta lección, serás capaz de:

- Usar eficientemente un editor de código en cualquier proyecto, en cualquier lugar
- Rastrear tu trabajo sin problemas con el control de versiones integrado
- Personalizar y optimizar tu flujo de trabajo de desarrollo con personalizaciones y extensiones del editor

***

## Prerrequisitos

Para comenzar, **regístrate para obtener una cuenta gratuita en [GitHub](https://github.com)**, lo que te permitirá gestionar repositorios de código y colaborar a nivel mundial. Si aún no tienes una cuenta, [créala aquí](https://github.com/).

***

## ¿Por qué usar un editor de código basado en la web?

Un **editor de código** como VSCode.dev es tu centro de comando para escribir, editar y gestionar código. Con una interfaz intuitiva, muchas funciones y acceso inmediato a través del navegador, puedes:

- Editar proyectos en cualquier dispositivo
- Evitar la molestia de instalaciones
- Colaborar y contribuir al instante

Una vez que te sientas cómodo con VSCode.dev, estarás preparado para abordar tareas de programación desde cualquier lugar y en cualquier momento.

***

## Comenzando con VSCode.dev

Navega a **[VSCode.dev](https://vscode.dev)**: sin instalaciones, sin descargas. Iniciar sesión con GitHub desbloquea acceso completo, incluyendo la sincronización de tus configuraciones, extensiones y repositorios. Si se te solicita, conecta tu cuenta de GitHub.

Después de cargar, tu espacio de trabajo se verá así:

![VSCode.dev por defecto](../images/default-vscode-dev tiene tres secciones principales de izquierda a derecha:
- **Barra de actividades:** Los íconos como 🔎 (Buscar), ⚙️ (Configuraciones), archivos, control de código fuente, etc.
- **Barra lateral:** Cambia de contexto según el ícono seleccionado en la barra de actividades (por defecto es *Explorador* para mostrar archivos).
- **Área de edición/código:** La sección más grande a la derecha, donde realmente editarás y verás el código.

Haz clic en los íconos para explorar las funciones, pero regresa al _Explorador_ para mantener tu lugar.

***

## Abrir un repositorio de GitHub

### Método 1: Desde el editor

1. Ve a [VSCode.dev](https://vscode.dev). Haz clic en **"Abrir repositorio remoto."**

   ![Abrir repositorio remoto](../../../../8-code-editor/images/open-remote-repository usa el _Command Palette_ (Ctrl-Shift-P, o Cmd-Shift-P en Mac).

   ![Menú de paleta](../images/palette-menu.pngabrir repositorio remoto.”
   - Selecciona la opción.
   - Pega la URL de tu repositorio de GitHub (por ejemplo, `https://github.com/microsoft/Web-Dev-For-Beginners`) y presiona Enter.

Si todo sale bien, verás el proyecto completo cargado y listo para editar.

***

### Método 2: Al instante vía URL

Transforma cualquier URL de repositorio de GitHub para abrir directamente en VSCode.dev reemplazando `github.com` con `vscode.dev/github`.  
Ejemplo:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Esta función acelera el acceso rápido a cualquier proyecto.

***

## Editar archivos en tu proyecto

Una vez que tu repositorio esté abierto, puedes:

### 1. **Crear un nuevo archivo**
- En la barra lateral *Explorador*, navega a la carpeta deseada o usa la raíz.
- Haz clic en el ícono _‘Nuevo archivo ...’_.
- Nombra tu archivo, presiona **Enter**, y tu archivo aparecerá al instante.

![Crear un nuevo archivo](../images/create-new-file 2. **Editar y guardar archivos**

- Haz clic en un archivo en el *Explorador* para abrirlo en el área de código.
- Realiza los cambios que necesites.
- VSCode.dev guarda automáticamente tus cambios, pero puedes presionar Ctrl+S para guardar manualmente.

![Editar un archivo](../images/edit-a-file.png. **Rastrear y confirmar cambios con control de versiones**

¡VSCode.dev tiene integrado el control de versiones **Git**!

- Haz clic en el ícono _'Control de código fuente'_ para ver todos los cambios realizados.
- Los archivos en la carpeta `Changes` muestran adiciones (verde) y eliminaciones (rojo).  
  ![Ver cambios](../images/working-tree.png cambios haciendo clic en el `+` junto a los archivos para prepararlos para confirmar.
- **Descartar** cambios no deseados haciendo clic en el ícono de deshacer.
- Escribe un mensaje claro de confirmación, luego haz clic en la marca de verificación para confirmar y enviar.

Para regresar a tu repositorio en GitHub, selecciona el menú hamburguesa en la parte superior izquierda.

![Preparar y confirmar cambios](../images/edit-vscode.dev con extensiones

Las extensiones te permiten agregar lenguajes, temas, depuradores y herramientas de productividad a VSCode.dev, haciendo tu vida de programación más fácil y divertida.

### Navegar y gestionar extensiones

- Haz clic en el **ícono de Extensiones** en la barra de actividades.
- Busca una extensión en el cuadro _'Buscar extensiones en el Marketplace'_.

  ![Detalles de la extensión](../images/extension-details:
  - **Instaladas**: Todas las extensiones que has agregado
  - **Populares**: Favoritas de la industria
  - **Recomendadas**: Adaptadas a tu flujo de trabajo

  ![Ver extensiones](

  

***

### 1. **Instalar extensiones**

- Ingresa el nombre de la extensión en la búsqueda, haz clic en ella y revisa los detalles en el editor.
- Presiona el **botón azul de Instalar** en la barra lateral _o_ en el área principal de código.

  ![Instalar extensiones](../images/install-extension 2. **Personalizar extensiones**

- Encuentra tu extensión instalada.
- Haz clic en el **ícono de engranaje** → selecciona _Configuraciones de la extensión_ para ajustar los comportamientos a tu gusto.

  ![Modificar configuraciones de la extensión](../images/extension-settings 3. **Gestionar extensiones**
Puedes:

- **Deshabilitar:** Apagar temporalmente una extensión mientras la mantienes instalada
- **Desinstalar:** Eliminarla permanentemente si ya no la necesitas

  Encuentra la extensión, presiona el ícono de engranaje y selecciona ‘Deshabilitar’ o ‘Desinstalar,’ o usa los botones azules en el área de código.

***

## Tarea

Pon a prueba tus habilidades: [Crea un sitio web de currículum usando vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Exploración adicional y autoestudio

- Profundiza con [la documentación oficial de VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Explora funciones avanzadas del espacio de trabajo, atajos de teclado y configuraciones.

***

**¡Ahora estás listo para programar, crear y colaborar desde cualquier lugar, en cualquier dispositivo, usando VSCode.dev!**

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.