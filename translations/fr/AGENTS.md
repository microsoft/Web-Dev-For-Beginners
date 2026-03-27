# AGENTS.md

## Vue d'ensemble du projet

Il s'agit d'un référentiel de programme éducatif pour enseigner les fondamentaux du développement web aux débutants. Le programme est un cours complet de 12 semaines développé par Microsoft Cloud Advocates, comprenant 24 leçons pratiques couvrant JavaScript, CSS et HTML.

### Composants clés

- **Contenu éducatif** : 24 leçons structurées organisées en modules basés sur des projets
- **Projets pratiques** : Terrarium, Jeu de frappe, Extension de navigateur, Jeu spatial, Application bancaire, Éditeur de code et Assistant de chat IA
- **Quiz interactifs** : 48 quiz avec 3 questions chacun (évaluations pré/post-lesson)
- **Support multilingue** : Traductions automatisées pour plus de 50 langues via GitHub Actions
- **Technologies** : HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pour les projets IA)

### Architecture

- Référentiel éducatif avec structure basée sur les leçons
- Chaque dossier de leçon contient un README, des exemples de code, et des solutions
- Projets autonomes dans des répertoires séparés (quiz-app, divers projets de leçon)
- Système de traduction utilisant GitHub Actions (co-op-translator)
- Documentation servie via Docsify et disponible en PDF

## Commandes d'installation

Ce référentiel est principalement destiné à la consommation de contenu éducatif. Pour travailler avec des projets spécifiques :

### Installation du référentiel principal

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Installation de l'application Quiz (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Démarrer le serveur de développement
npm run build      # Construire pour la production
npm run lint       # Exécuter ESLint
```

### API du projet bancaire (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Démarrer le serveur API
npm run lint       # Exécuter ESLint
npm run format     # Formater avec Prettier
```

### Projets d'extension de navigateur

```bash
cd 5-browser-extension/solution
npm install
# Suivez les instructions spécifiques au navigateur pour le chargement des extensions
```

### Projets de jeu spatial

```bash
cd 6-space-game/solution
npm install
# Ouvrez index.html dans le navigateur ou utilisez Live Server
```

### Projet de chat (backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Définir la variable d'environnement GITHUB_TOKEN
python api.py
```

## Flux de développement

### Pour les contributeurs de contenu

1. **Forkez le référentiel** sur votre compte GitHub
2. **Clonez votre fork** localement
3. **Créez une nouvelle branche** pour vos modifications
4. Effectuez des changements dans le contenu des leçons ou les exemples de code
5. Testez toute modification de code dans les répertoires de projets concernés
6. Soumettez des pull requests en suivant les directives de contribution

### Pour les apprenants

1. Forkez ou clonez le référentiel
2. Naviguez séquentiellement dans les répertoires des leçons
3. Lisez les fichiers README de chaque leçon
4. Complétez les quiz pré-lesson sur https://ff-quizzes.netlify.app/web/
5. Travaillez les exemples de code dans les dossiers de leçon
6. Réalisez les devoirs et défis
7. Passez les quiz post-lesson

### Développement en direct

- **Documentation** : Lancez `docsify serve` à la racine (port 3000)
- **Application Quiz** : Lancez `npm run dev` dans le répertoire quiz-app
- **Projets** : Utilisez l'extension VS Code Live Server pour les projets HTML
- **Projets API** : Lancez `npm start` dans les répertoires API correspondants

## Instructions de test

### Tests de l'application Quiz

```bash
cd quiz-app
npm run lint       # Vérifier les problèmes de style de code
npm run build      # Vérifier que la compilation réussit
```

### Tests de l'API bancaire

```bash
cd 7-bank-project/api
npm run lint       # Vérifier les problèmes de style de code
node server.js     # Vérifier que le serveur démarre sans erreurs
```

### Approche générale des tests

- Ce référentiel éducatif ne dispose pas de tests automatisés complets
- Les tests manuels portent sur :
  - L'exécution des exemples de code sans erreurs
  - Le bon fonctionnement des liens dans la documentation
  - Le succès des compilations des projets
  - Le respect des bonnes pratiques dans les exemples

### Vérifications avant soumission

- Lancez `npm run lint` dans les répertoires contenant package.json
- Vérifiez la validité des liens markdown
- Testez les exemples de code dans le navigateur ou Node.js
- Vérifiez que les traductions conservent la bonne structure

## Guide de style de code

### JavaScript

- Utilisez la syntaxe moderne ES6+
- Suivez les configurations ESLint standard fournies dans les projets
- Utilisez des noms de variables et de fonctions significatifs pour la clarté pédagogique
- Ajoutez des commentaires expliquant les concepts pour les apprenants
- Formatez avec Prettier lorsqu'il est configuré

### HTML/CSS

- Éléments HTML5 sémantiques
- Principes de design responsive
- Conventions claires de nommage de classes
- Commentaires expliquant les techniques CSS pour les apprenants

### Python

- Respect des directives de style PEP 8
- Exemples de code clairs et pédagogiques
- Indications de type là où c'est utile pour l'apprentissage

### Documentation Markdown

- Hiérarchie claire des titres
- Blocs de code avec spécification du langage
- Liens vers des ressources additionnelles
- Captures d'écran et images dans les dossiers `images/`
- Texte alternatif pour les images pour l'accessibilité

### Organisation des fichiers

- Leçons numérotées séquentiellement (1-getting-started-lessons, 2-js-basics, etc.)
- Chaque projet possède des répertoires `solution/` et souvent `start/` ou `your-work/`
- Images stockées dans des dossiers `images/` spécifiques à chaque leçon
- Traductions dans la structure `translations/{language-code}/`

## Compilation et déploiement

### Déploiement de l'application Quiz (Azure Static Web Apps)

L'application quiz-app est configurée pour le déploiement sur Azure Static Web Apps :

```bash
cd quiz-app
npm run build      # Crée le dossier dist/
# Déploie via le workflow GitHub Actions lors d'une poussée sur main
```

Configuration Azure Static Web Apps :
- **Emplacement de l'application** : `/quiz-app`
- **Emplacement de sortie** : `dist`
- **Workflow** : `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Génération de PDF de la documentation

```bash
npm install                    # Installer docsify-to-pdf
npm run convert               # Générer un PDF à partir de docs
```

### Documentation Docsify

```bash
npm install -g docsify-cli    # Installer Docsify globalement
docsify serve                 # Servir sur localhost:3000
```

### Builds spécifiques aux projets

Chaque répertoire de projet peut avoir son propre processus de build :
- Projets Vue : `npm run build` crée des bundles de production
- Projets statiques : pas d'étape de build, les fichiers sont servis directement

## Directives pour les pull requests

### Format du titre

Utilisez des titres clairs et descriptifs indiquant la zone de changement :
- `[Quiz-app] Ajouter un nouveau quiz pour la leçon X`
- `[Lesson-3] Correction de faute dans le projet terrarium`
- `[Translation] Ajouter la traduction espagnole pour la leçon 5`
- `[Docs] Mise à jour des instructions d'installation`

### Vérifications requises

Avant de soumettre une PR :

1. **Qualité du code** :
   - Exécutez `npm run lint` dans les répertoires de projet affectés
   - Corrigez toutes les erreurs et avertissements de linting

2. **Vérification de la build** :
   - Exécutez `npm run build` si applicable
   - Assurez-vous qu'il n'y ait pas d'erreurs de build

3. **Validation des liens** :
   - Testez tous les liens markdown
   - Vérifiez le fonctionnement des références d'images

4. **Relecture du contenu** :
   - Corrigez l'orthographe et la grammaire
   - Assurez-vous que les exemples de code sont corrects et pédagogiques
   - Vérifiez que les traductions conservent leur sens original

### Exigences de contribution

- Acceptez la CLA Microsoft (vérification automatique lors de la première PR)
- Suivez le [Code de conduite Open Source Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consultez [CONTRIBUTING.md](./CONTRIBUTING.md) pour les directives détaillées
- Mentionnez les numéros d’issues dans la description de la PR le cas échéant

### Processus de revue

- Les PR sont examinées par les mainteneurs et la communauté
- La clarté pédagogique est priorisée
- Les exemples de code doivent suivre les meilleures pratiques actuelles
- Les traductions sont revues pour précision et adéquation culturelle

## Système de traduction

### Traduction automatisée

- Utilise GitHub Actions avec le workflow co-op-translator
- Traduit automatiquement en plus de 50 langues
- Fichiers sources dans les répertoires principaux
- Fichiers traduits dans les répertoires `translations/{language-code}/`

### Ajout d'améliorations manuelles de traduction

1. Localisez le fichier dans `translations/{language-code}/`
2. Apportez des améliorations tout en préservant la structure
3. Assurez-vous que les exemples de code restent fonctionnels
4. Testez tout contenu localisé de quiz

### Métadonnées de traduction

Les fichiers traduits incluent un en-tête de métadonnées :
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

## Débogage et dépannage

### Problèmes courants

**L'application quiz ne démarre pas** :
- Vérifiez la version de Node.js (v14+ recommandée)
- Supprimez `node_modules` et `package-lock.json`, relancez `npm install`
- Vérifiez s'il y a des conflits de ports (par défaut : Vite utilise le port 5173)

**Le serveur API ne démarre pas** :
- Vérifiez que la version de Node.js est suffisante (node >=10)
- Vérifiez si le port est déjà utilisé
- Assurez-vous que toutes les dépendances sont installées avec `npm install`

**L'extension de navigateur ne se charge pas** :
- Vérifiez que manifest.json est bien formaté
- Consultez la console du navigateur pour les erreurs
- Suivez les instructions d'installation spécifiques au navigateur

**Problèmes avec le projet chat Python** :
- Assurez-vous que le package OpenAI est installé : `pip install openai`
- Vérifiez que la variable d'environnement GITHUB_TOKEN est définie
- Contrôlez les permissions d'accès aux modèles GitHub

**Docsify ne sert pas la documentation** :
- Installez docsify-cli globalement : `npm install -g docsify-cli`
- Lancez depuis le répertoire racine du référentiel
- Vérifiez que `docs/_sidebar.md` existe

### Conseils pour l'environnement de développement

- Utilisez VS Code avec l'extension Live Server pour les projets HTML
- Installez les extensions ESLint et Prettier pour un formatage cohérent
- Utilisez les DevTools du navigateur pour déboguer JavaScript
- Pour les projets Vue, installez l'extension Vue DevTools pour navigateur

### Considérations de performance

- Le grand nombre de fichiers traduits (50+ langues) rend les clones complets volumineux
- Utilisez un clone superficiel si vous travaillez seulement sur le contenu : `git clone --depth 1`
- Excluez les traductions des recherches lors du travail sur le contenu anglais
- Les processus de build peuvent être lents au premier lancement (npm install, build Vite)

## Considérations de sécurité

### Variables d'environnement

- Les clés API ne doivent jamais être commitées dans le référentiel
- Utilisez les fichiers `.env` (déjà dans `.gitignore`)
- Documentez les variables d'environnement requises dans les README des projets

### Projets Python

- Utilisez des environnements virtuels : `python -m venv venv`
- Maintenez les dépendances à jour
- Les tokens GitHub doivent avoir les permissions minimales requises

### Accès aux modèles GitHub

- Les Personal Access Tokens (PAT) sont nécessaires pour les modèles GitHub
- Les tokens doivent être stockés en variables d'environnement
- Ne commitez jamais de tokens ou de credentials

## Notes supplémentaires

### Public cible

- Débutants complets en développement web
- Étudiants et auto-apprenants
- Enseignants utilisant le programme en classe
- Le contenu est conçu pour l'accessibilité et la montée en compétences progressive

### Philosophie éducative

- Approche d'apprentissage par projet
- Vérifications fréquentes des connaissances (quiz)
- Exercices de codage pratiques
- Exemples d'applications réelles
- Accent sur les fondamentaux avant les frameworks

### Maintenance du référentiel

- Communauté active d'apprenants et de contributeurs
- Mises à jour régulières des dépendances et du contenu
- Suivi des issues et discussions par les mainteneurs
- Mises à jour des traductions automatisées via GitHub Actions

### Ressources associées

- [Modules Microsoft Learn](https://docs.microsoft.com/learn/)
- [Ressources Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recommandé pour les apprenants
- Cours supplémentaires : IA générative, Data Science, ML, cursus IoT disponibles

### Travailler avec des projets spécifiques

Pour des instructions détaillées sur les projets individuels, consultez les fichiers README dans :
- `quiz-app/README.md` - Application quiz Vue 3
- `7-bank-project/README.md` - Application bancaire avec authentification
- `5-browser-extension/README.md` - Développement d'extension de navigateur
- `6-space-game/README.md` - Développement de jeu sur Canvas
- `9-chat-project/README.md` - Projet d'assistant de chat IA

### Structure du monorepo

Bien que ce ne soit pas un monorepo traditionnel, ce référentiel contient plusieurs projets indépendants :
- Chaque leçon est autonome
- Les projets ne partagent pas leurs dépendances
- Travaillez sur des projets individuels sans impacter les autres
- Clonez le référentiel complet pour une expérience complète du programme

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction IA [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatiques peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant foi. Pour les informations critiques, une traduction professionnelle humaine est recommandée. Nous ne sommes pas responsables des malentendus ou mauvaises interprétations résultant de l'utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->