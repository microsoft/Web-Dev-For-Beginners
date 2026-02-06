## Conceptos básicos de GIT para principiantes en desarrollo web 👶

## ¿Qué es `Git`?
1. Git es un sistema de control de versiones distribuido.
2. Todo el código y su historial están disponibles en la computadora de cada desarrollador, lo que facilita la creación de ramas y la fusión de cambios.
3. Se utiliza como Sistema de Control de Versiones (VCS) para rastrear cambios en archivos de computadora.

* Control de versiones distribuido  
* Coordina el trabajo entre varios desarrolladores  
* Quién hizo qué cambios y cuándo  
* Revertir cambios en cualquier momento  
* Repositorios locales y remotos  

## CONCEPTOS DE GIT
* Mantiene un historial de cambios en el código  
* Toma "instantáneas" de tus archivos  
* Tú decides cuándo tomar una instantánea haciendo un "commit"  
* Puedes visitar cualquier instantánea en cualquier momento  
* Puedes preparar archivos antes de hacer un commit  

### Diferencia entre Git y GitHub

| Git | GitHub |
| ------- | ----------- |
| Git es un software | GitHub es un servicio en la nube |
| Git se instala localmente en el sistema | GitHub está alojado en la web |
| Es una herramienta de línea de comandos | Es una interfaz gráfica |
| Git es mantenido por Linux | GitHub es mantenido por Microsoft |
| Se centra en el control de versiones y el intercambio de código | Se centra en el alojamiento centralizado de código fuente |
| Git tiene licencia de código abierto | GitHub incluye un nivel gratuito y uno de pago |
| Git fue lanzado en 2005 | GitHub fue lanzado en 2008 |

## Instalación de GIT
* Linux (Debian)  
    `$sudo apt-get install git`  
* Linux (Fedora)  
    `$sudo yum install git`  
* [Descargar](http://git-scm.com/download/mac) para Mac  
* [Descargar](http://git-scm.com/download/win) para Windows  

### Pasos del proceso de instalación:  
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>  
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>  
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>  
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>  
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>  
6. Luego continúa con Siguiente > Siguiente > Siguiente > <b>Instalar</b>  
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>  

### Después de la instalación, necesitamos configurar Git usando Git Bash  
1. `git config --global user.name 'TuNombre'`  
2. `git config --global user.email 'TuCorreo'`  
___  

## Comandos de Git  
___  

### Obtener y crear proyectos  

| Comando | Descripción |
| ------- | ----------- |
| `git init` | Inicializar un repositorio Git local |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Crear una copia local de un repositorio remoto |

### Instantáneas básicas  

| Comando | Descripción |
| ------- | ----------- |
| `git status` | Verificar el estado |
| `git add [file-name.txt]` | Agregar un archivo al área de preparación |
| `git add -A` | Agregar todos los archivos nuevos y modificados al área de preparación |
| `git commit -m "[commit message]"` | Confirmar cambios |
| `git rm -r [file-name.txt]` | Eliminar un archivo (o carpeta) |
| `git push` | Subir al repositorio remoto |
| `git pull` | Descargar los últimos cambios del repositorio remoto |

### Ramas y fusión  

| Comando | Descripción |
| ------- | ----------- |
| `git branch` | Listar ramas (el asterisco indica la rama actual) |
| `git branch -a` | Listar todas las ramas (locales y remotas) |
| `git branch [branch name]` | Crear una nueva rama |
| `git branch -D [branch name]` | Eliminar una rama |
| `git push origin --delete [branch name]` | Eliminar una rama remota |
| `git checkout -b [branch name]` | Crear una nueva rama y cambiar a ella |
| `git checkout -b [branch name] origin/[branch name]` | Clonar una rama remota y cambiar a ella |
| `git branch -m [old branch name] [new branch name]` | Renombrar una rama local |
| `git checkout [branch name]` | Cambiar a una rama |
| `git checkout -` | Cambiar a la última rama seleccionada |
| `git checkout -- [file-name.txt]` | Descartar cambios en un archivo |
| `git merge [branch name]` | Fusionar una rama con la rama activa |
| `git merge [source branch] [target branch]` | Fusionar una rama con una rama objetivo |
| `git stash` | Guardar cambios en un directorio de trabajo sucio |
| `git stash clear` | Eliminar todas las entradas guardadas |

### Compartir y actualizar proyectos  

| Comando | Descripción |
| ------- | ----------- |
| `git push origin [branch name]` | Subir una rama a tu repositorio remoto |
| `git push -u origin [branch name]` | Subir cambios al repositorio remoto (y recordar la rama) |
| `git push` | Subir cambios al repositorio remoto (rama recordada) |
| `git push origin --delete [branch name]` | Eliminar una rama remota |
| `git pull` | Actualizar el repositorio local al último commit |
| `git pull origin [branch name]` | Descargar cambios del repositorio remoto |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Agregar un repositorio remoto |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Configurar la rama de origen de un repositorio a SSH |

### Inspección y comparación  

| Comando | Descripción |
| ------- | ----------- |
| `git log` | Ver cambios |
| `git log --summary` | Ver cambios (detallado) |
| `git log --oneline` | Ver cambios (breve) |
| `git diff [source branch] [target branch]` | Previsualizar cambios antes de fusionar |

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.