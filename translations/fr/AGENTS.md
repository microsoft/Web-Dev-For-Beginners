# AGENTS.md

## Aperçu du projet

Ce dépôt est un programme éducatif conçu pour enseigner les bases du développement web aux débutants. Le programme est un cours complet de 12 semaines développé par les Cloud Advocates de Microsoft, comprenant 24 leçons pratiques couvrant JavaScript, CSS et HTML.

### Principaux éléments

- **Contenu éducatif** : 24 leçons structurées organisées en modules basés sur des projets
- **Projets pratiques** : Terrarium, Jeu de dactylographie, Extension de navigateur, Jeu spatial, Application bancaire, Éditeur de code et Assistant de chat IA
- **Quiz interactifs** : 48 quiz avec 3 questions chacun (évaluations avant/après les leçons)
- **Support multilingue** : Traductions automatiques dans plus de 50 langues via GitHub Actions
- **Technologies** : HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pour les projets IA)

### Architecture

- Dépôt éducatif avec une structure basée sur les leçons
- Chaque dossier de leçon contient un README, des exemples de code et des solutions
- Projets autonomes dans des répertoires séparés (quiz-app, divers projets de leçons)
- Système de traduction utilisant GitHub Actions (co-op-translator)
- Documentation servie via Docsify et disponible en PDF

## Commandes d'installation

Ce dépôt est principalement destiné à la consommation de contenu éducatif. Pour travailler sur des projets spécifiques :

### Installation du dépôt principal

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Installation de l'application Quiz (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API du projet bancaire (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Projets d'extension de navigateur

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Projets de jeu spatial

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Projet de chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Flux de travail de développement

### Pour les contributeurs de contenu

1. **Forkez le dépôt** sur votre compte GitHub
2. **Clonez votre fork** localement
3. **Créez une nouvelle branche** pour vos modifications
4. Apportez des modifications au contenu des leçons ou aux exemples de code
5. Testez les modifications de code dans les répertoires de projets pertinents
6. Soumettez des pull requests en suivant les directives de contribution

### Pour les apprenants

1. Forkez ou clonez le dépôt
2. Naviguez dans les répertoires des leçons de manière séquentielle
3. Lisez les fichiers README de chaque leçon
4. Complétez les quiz avant la leçon sur https://ff-quizzes.netlify.app/web/
5. Travaillez sur les exemples de code dans les dossiers des leçons
6. Réalisez les devoirs et les défis
7. Passez les quiz après la leçon

### Développement en direct

- **Documentation** : Exécutez `docsify serve` à la racine (port 3000)
- **Application Quiz** : Exécutez `npm run dev` dans le répertoire quiz-app
- **Projets** : Utilisez l'extension Live Server de VS Code pour les projets HTML
- **Projets API** : Exécutez `npm start` dans les répertoires API respectifs

## Instructions de test

### Test de l'application Quiz

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Test de l'API bancaire

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Approche générale de test

- Ce dépôt éducatif ne contient pas de tests automatisés complets
- Les tests manuels se concentrent sur :
  - L'exécution des exemples de code sans erreurs
  - La vérification des liens dans la documentation
  - La réussite des builds des projets
  - Le respect des bonnes pratiques dans les exemples

### Vérifications avant soumission

- Exécutez `npm run lint` dans les répertoires contenant un package.json
- Vérifiez que les liens Markdown sont valides
- Testez les exemples de code dans un navigateur ou avec Node.js
- Assurez-vous que les traductions conservent une structure correcte

## Directives de style de code

### JavaScript

- Utilisez la syntaxe moderne ES6+
- Suivez les configurations standard ESLint fournies dans les projets
- Utilisez des noms de variables et de fonctions significatifs pour une clarté éducative
- Ajoutez des commentaires expliquant les concepts pour les apprenants
- Formatez avec Prettier là où configuré

### HTML/CSS

- Éléments HTML5 sémantiques
- Principes de design responsive
- Conventions claires de nommage des classes
- Commentaires expliquant les techniques CSS pour les apprenants

### Python

- Directives de style PEP 8
- Exemples de code clairs et éducatifs
- Indications de type utiles pour l'apprentissage

### Documentation Markdown

- Hiérarchie claire des titres
- Blocs de code avec spécification de langage
- Liens vers des ressources supplémentaires
- Captures d'écran et images dans les répertoires `images/`
- Texte alternatif pour les images pour l'accessibilité

### Organisation des fichiers

- Leçons numérotées séquentiellement (1-getting-started-lessons, 2-js-basics, etc.)
- Chaque projet contient des répertoires `solution/` et souvent `start/` ou `your-work/`
- Images stockées dans des dossiers spécifiques aux leçons `images/`
- Traductions dans la structure `translations/{language-code}/`

## Construction et déploiement

### Déploiement de l'application Quiz (Azure Static Web Apps)

L'application quiz-app est configurée pour un déploiement sur Azure Static Web Apps :

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Configuration Azure Static Web Apps :
- **Emplacement de l'application** : `/quiz-app`
- **Emplacement de sortie** : `dist`
- **Workflow** : `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Génération de PDF pour la documentation

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Documentation Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Constructions spécifiques aux projets

Chaque répertoire de projet peut avoir son propre processus de construction :
- Projets Vue : `npm run build` crée des bundles de production
- Projets statiques : Pas de processus de construction, servez les fichiers directement

## Directives pour les pull requests

### Format du titre

Utilisez des titres clairs et descriptifs indiquant la zone de modification :
- `[Quiz-app] Ajout d'un nouveau quiz pour la leçon X`
- `[Lesson-3] Correction d'une faute de frappe dans le projet terrarium`
- `[Translation] Ajout de la traduction espagnole pour la leçon 5`
- `[Docs] Mise à jour des instructions d'installation`

### Vérifications requises

Avant de soumettre une PR :

1. **Qualité du code** :
   - Exécutez `npm run lint` dans les répertoires de projet concernés
   - Corrigez toutes les erreurs et avertissements de linting

2. **Vérification de la construction** :
   - Exécutez `npm run build` si applicable
   - Assurez-vous qu'il n'y a pas d'erreurs de construction

3. **Validation des liens** :
   - Testez tous les liens Markdown
   - Vérifiez que les références aux images fonctionnent

4. **Revue du contenu** :
   - Relisez pour vérifier l'orthographe et la grammaire
   - Assurez-vous que les exemples de code sont corrects et éducatifs
   - Vérifiez que les traductions conservent le sens original

### Exigences de contribution

- Acceptez le CLA de Microsoft (vérification automatisée lors de la première PR)
- Suivez le [Code de conduite Open Source de Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consultez [CONTRIBUTING.md](./CONTRIBUTING.md) pour des directives détaillées
- Référencez les numéros de problème dans la description de la PR si applicable

### Processus de revue

- Les PR sont examinées par les mainteneurs et la communauté
- La clarté éducative est priorisée
- Les exemples de code doivent suivre les meilleures pratiques actuelles
- Les traductions sont examinées pour leur exactitude et leur pertinence culturelle

## Système de traduction

### Traduction automatisée

- Utilise GitHub Actions avec le workflow co-op-translator
- Traduit automatiquement dans plus de 50 langues
- Fichiers source dans les répertoires principaux
- Fichiers traduits dans les répertoires `translations/{language-code}/`

### Ajout d'améliorations manuelles aux traductions

1. Localisez le fichier dans `translations/{language-code}/`
2. Apportez des améliorations tout en préservant la structure
3. Assurez-vous que les exemples de code restent fonctionnels
4. Testez tout contenu de quiz localisé

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

**L'application Quiz ne démarre pas** :
- Vérifiez la version de Node.js (v14+ recommandé)
- Supprimez `node_modules` et `package-lock.json`, puis exécutez `npm install` à nouveau
- Vérifiez les conflits de port (par défaut : Vite utilise le port 5173)

**Le serveur API ne démarre pas** :
- Vérifiez que la version de Node.js répond aux exigences minimales (node >=10)
- Vérifiez si le port est déjà utilisé
- Assurez-vous que toutes les dépendances sont installées avec `npm install`

**L'extension de navigateur ne se charge pas** :
- Vérifiez que le fichier manifest.json est correctement formaté
- Consultez la console du navigateur pour les erreurs
- Suivez les instructions spécifiques au navigateur pour l'installation de l'extension

**Problèmes avec le projet de chat Python** :
- Assurez-vous que le package OpenAI est installé : `pip install openai`
- Vérifiez que la variable d'environnement GITHUB_TOKEN est définie
- Vérifiez les permissions d'accès aux modèles GitHub

**Docsify ne sert pas les docs** :
- Installez docsify-cli globalement : `npm install -g docsify-cli`
- Exécutez depuis le répertoire racine du dépôt
- Vérifiez que `docs/_sidebar.md` existe

### Conseils pour l'environnement de développement

- Utilisez VS Code avec l'extension Live Server pour les projets HTML
- Installez les extensions ESLint et Prettier pour un formatage cohérent
- Utilisez les outils de développement du navigateur pour déboguer JavaScript
- Pour les projets Vue, installez l'extension Vue DevTools pour navigateur

### Considérations de performance

- Le grand nombre de fichiers traduits (50+ langues) signifie que les clones complets sont volumineux
- Utilisez un clone superficiel si vous travaillez uniquement sur le contenu : `git clone --depth 1`
- Excluez les traductions des recherches lorsque vous travaillez sur le contenu en anglais
- Les processus de construction peuvent être lents lors de la première exécution (npm install, Vite build)

## Considérations de sécurité

### Variables d'environnement

- Les clés API ne doivent jamais être ajoutées au dépôt
- Utilisez des fichiers `.env` (déjà dans `.gitignore`)
- Documentez les variables d'environnement requises dans les README des projets

### Projets Python

- Utilisez des environnements virtuels : `python -m venv venv`
- Maintenez les dépendances à jour
- Les tokens GitHub doivent avoir les permissions minimales requises

### Accès aux modèles GitHub

- Des tokens d'accès personnel (PAT) sont nécessaires pour les modèles GitHub
- Les tokens doivent être stockés comme variables d'environnement
- Ne jamais ajouter de tokens ou de credentials au dépôt

## Notes supplémentaires

### Public cible

- Débutants complets en développement web
- Étudiants et autodidactes
- Enseignants utilisant le programme en classe
- Le contenu est conçu pour l'accessibilité et une montée en compétences progressive

### Philosophie éducative

- Approche d'apprentissage basée sur les projets
- Vérifications fréquentes des connaissances (quiz)
- Exercices de codage pratiques
- Exemples d'application dans le monde réel
- Focus sur les fondamentaux avant les frameworks

### Maintenance du dépôt

- Communauté active d'apprenants et de contributeurs
- Mises à jour régulières des dépendances et du contenu
- Les problèmes et discussions sont surveillés par les mainteneurs
- Les mises à jour des traductions sont automatisées via GitHub Actions

### Ressources associées

- [Modules Microsoft Learn](https://docs.microsoft.com/learn/)
- [Ressources Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recommandé pour les apprenants
- Cours supplémentaires : IA générative, Data Science, ML, IoT disponibles

### Travailler avec des projets spécifiques

Pour des instructions détaillées sur les projets individuels, consultez les fichiers README dans :
- `quiz-app/README.md` - Application de quiz Vue 3
- `7-bank-project/README.md` - Application bancaire avec authentification
- `5-browser-extension/README.md` - Développement d'extensions de navigateur
- `6-space-game/README.md` - Développement de jeux basés sur Canvas
- `9-chat-project/README.md` - Projet d'assistant de chat IA

### Structure du monorepo

Bien que ce ne soit pas un monorepo traditionnel, ce dépôt contient plusieurs projets indépendants :
- Chaque leçon est autonome
- Les projets ne partagent pas de dépendances
- Travaillez sur des projets individuels sans affecter les autres
- Clonez l'intégralité du dépôt pour une expérience complète du programme éducatif

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.