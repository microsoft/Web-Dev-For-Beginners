# SDAW_6464

Repositorio de práctica de control de versiones (Git + GitHub) y servidor Node.js mínimo.

## ✨ Objetivos
- Comprender un VCS distribuido y diferenciar trabajo local vs remoto.
- Usar ramas para funcionalidades independientes.
- Integrar mediante Pull Requests y resolver conflictos.
- Documentar el proceso de desarrollo.

## 📁 Estructura del proyecto
```
/SDAW_6464
├── index.html
├── script.js
├── package.json
├── server.js
└── README.md
```

## ▶️ Cómo levantar el servidor en local
1) Instala dependencias:
```bash
npm install
```
2) Ejecuta el servidor:
```bash
npm start
# Abre http://localhost:3000
```

## 🧩 Comandos Git y Node.js utilizados
### Node.js
- `npm init -y` inicialización (ya incluido).
- `npm install express` dependencias.
- `npm start` arrancar servidor.

### Git
```bash
# 1) Inicialización y configuración local
git init
git config user.name "Tu Nombre"
git config user.email "tu-email@ejemplo.com"
git config --list

# 2) Primer commit
git add .
git commit -m "chore: initial commit (estructura base)"

# 3) Crear repo remoto y enlazar (reemplaza <usuario> y utiliza SSH o HTTPS)
git branch -M main
git remote add origin git@github.com:<usuario>/SDAW_XXXX.git
# o: git remote add origin https://github.com/<usuario>/SDAW_XXXX.git
git push -u origin main

# 4) Trabajo en ramas (ejemplo)
git checkout -b feat/estructura-proyecto
git add .
git commit -m "feat: añadir estructura base de app web"
git push -u origin feat/estructura-proyecto

# 5) Seguimiento y restauración
git status
git log --oneline --decorate --graph --all
git diff
git restore <fichero>               # deshacer cambios no indexados
git restore --staged <fichero>      # sacar del área de staging
git revert <hash>                   # crear commit que revierte otro
```

## 🌿 Ramas simultáneas (para la práctica)
Desde `main` crea dos ramas **con los identificadores facilitados por el docente**:

```bash
# Rama 1
git checkout main
git pull --rebase origin main
git checkout -b rama1_nombreApellido1Estudiante

# Rama 2
git checkout main
git pull --rebase origin main
git checkout -b rama2_nombreApellido1Estudiante
```

### 📄 Ediciones solicitadas del README

En **rama 1**, añade:
```md

## Información técnica añadida desde rama 1
En esta sección se describen los principales comandos de Git utilizados durante la práctica:
- git init: (Inicializa un repositorio Git en el directorio actual, creando la carpeta oculta `.git`.)
- git add: (Añade archivos al área de staging. Ej: `git add archivo.txt` o `git add .` para todos los cambios.)
- git commit: (Crea un commit con los cambios en el área de staging. Ej: `git commit -m "mensaje"`.)
- git branch: (Lista o maneja ramas. Ej: `git branch` (listar), `git branch nombre` (crear).)
- git merge: (Fusiona otra rama dentro de la rama actual. Ej: `git merge rama-feature`.)
- git push: (Envía commits locales al repositorio remoto. Ej: `git push origin main`.)
```

Luego:
```bash
git add README.md
git commit -m "docs(rama1): explicar comandos básicos de Git"
git push -u origin rama1_nombreApellido1Estudiante
```

En **rama 2**, pega el **log de Git en una línea** (formato adecuado):
```bash
git log --oneline > log_oneline.txt
```
Copia el contenido en el README bajo:
```md
## Información técnica añadida desde rama 2
(1370e7a docs(rama1): a├▒adir descripciones de comandos de Git
eaab78a chore: inicializar proyecto SDAW_6464 (estructura base))
```
Y sube los cambios:
```bash
git add README.md log_oneline.txt
git commit -m "docs(rama2): añadir historial en una línea"
git push -u origin rama2_nombreApellido1Estudiante
```

## 🔀 Pull Requests (integración)
1. En GitHub, abre un **Pull Request** para cada rama contra `main` (NO elimines las ramas).
2. Si hay conflictos, resuélvelos manteniendo **todo el contenido de todas las ramas**.
3. Realiza el merge (puedes usar *Squash & merge* para un historial más limpio).

## ✅ Sincronización final
```bash
git fetch origin
git checkout main
git pull --rebase origin main
git branch -a         # verifica ramas locales y remotas
git log --oneline --decorate --graph --all
```

## 📝 Conclusiones personales (edita esta sección)
- Qué aprendí sobre Git y PRs:
- Dificultades y cómo las resolví:
- Buenas prácticas que aplicaría en futuros proyectos:

## 🔧 Notas
- Archivo `.gitignore` incluye `node_modules/` y otros temporales.
- Puedes usar https://readme.so/ para pulir este README (sube su contenido y agrega secciones).


## Información técnica añadida desde rama 3

En esta rama incluyo una breve reflexión personal sobre lo aprendido en la tarea previa y el historial del repositorio.

**Reflexión personal**  
En la tarea anterior he aprendido a trabajar con Git y GitHub usando ramas, commits y pull requests. También he entendido mejor cómo resolver conflictos en el README y mantener el repositorio actualizado tanto en local como en remoto.

**Salida del comando `git log --oneline --graph --all`**

```text
1370e7a docs(rama1): a├▒adir descripciones de comandos de Git
eaab78a chore: inicializar proyecto SDAW_6464 (estructura base)

---

```
## Información técnica añadida desde rama 4

Se incluye información para conectar un repositorio local con GitLab.

Pasos realizados:

1. Crear un proyecto vacío y público en GitLab con el nombre `SDAW_XXXX` (sin README).
2. Copiar la URL del repositorio remoto (HTTPS o SSH).
3. En el proyecto local ya inicializado con Git:
   - Comprobar remotos existentes con:
     ```bash
     git remote -v
     ```
   - Añadir el nuevo remoto para GitLab sin borrar el de GitHub:
     ```bash
     git remote add gitlab https://gitlab.com/Josue09/sdaw_6464.git
     ```
4. Verificar que ahora existen dos remotos (origin = GitHub, gitlab = GitLab):
   ```bash
   git remote -v






---


## Información técnica añadida desde rama 3

En esta rama incluyo una breve reflexión personal sobre lo aprendido en la tarea previa y el historial del repositorio.

**Reflexión personal**  
En la tarea anterior he aprendido a trabajar con Git y GitHub usando ramas, commits y pull requests. También he entendido mejor cómo resolver conflictos y mantener el repositorio actualizado sin perder información.

**Salida del comando `git log --oneline --graph --all`**
```text
1370e7a docs(rama1): añadir descripciones de comandos de Git
eaab78a chore: inicializar proyecto SDAW_6464 (estructura base)


© STUDENT_NAME
