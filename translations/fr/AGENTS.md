# AGENTS.md

## Aperçu du projet

Ceci est un dépôt de programme éducatif pour l'enseignement des fondamentaux du développement web aux débutants. Le programme est un cours complet de 12 semaines développé par les Cloud Advocates de Microsoft, comprenant 24 leçons pratiques couvrant JavaScript, CSS et HTML.

### Composants clés

- **Contenu éducatif** : 24 leçons structurées organisées en modules basés sur des projets
- **Projets pratiques** : Terrarium, Jeu de frappe, Extension de navigateur, Jeu spatial, Application bancaire, Éditeur de code et Assistant de chat AI
- **Quiz interactifs** : 48 quiz avec 3 questions chacun (évaluations pré/post-lesson)
- **Support multilingue** : Traductions automatiques pour plus de 50 langues via GitHub Actions
- **Technologies** : HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pour les projets AI)

### Architecture

- Dépôt éducatif avec structure basée sur les leçons
- Chaque dossier de leçon contient README, exemples de code et solutions
- Projets autonomes dans des répertoires séparés (quiz-app, divers projets de leçons)
- Système de traduction utilisant GitHub Actions (co-op-translator)
- Documentation servie via Docsify et disponible en PDF

## Commandes d'installation

Ce dépôt est principalement destiné à la consommation de contenu éducatif. Pour travailler avec des projets spécifiques :

### Installation du dépôt principal

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Installation de Quiz App (Vue 3 + Vite)

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

### Projets d'extensions de navigateur

```bash
cd 5-browser-extension/solution
npm install
# Suivez les instructions spécifiques au navigateur pour le chargement de l'extension
```

### Projets de jeux spatiaux

```bash
cd 6-space-game/solution
npm install
# Ouvrez index.html dans le navigateur ou utilisez Live Server
```

### Projet de chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Définir la variable d'environnement GITHUB_TOKEN
python api.py
```

## Flux de développement

### Pour les contributeurs de contenu

1. **Forkez le dépôt** sur votre compte GitHub
2. **Clonez votre fork** localement
3. **Créez une nouvelle branche** pour vos modifications
4. Modifiez le contenu des leçons ou les exemples de code
5. Testez toutes les modifications de code dans les répertoires de projets concernés
6. Soumettez des pull requests en suivant les consignes de contribution

### Pour les apprenants

1. Forker ou cloner le dépôt
2. Naviguer dans les répertoires des leçons dans l'ordre
3. Lire les fichiers README de chaque leçon
4. Compléter les quiz pré-lesson sur https://ff-quizzes.netlify.app/web/
5. Travailler les exemples de code dans les dossiers des leçons
6. Réaliser les devoirs et challenges
7. Passer les quiz post-lesson

### Développement en direct

- **Documentation** : Lancez `docsify serve` à la racine (port 3000)
- **Quiz App** : Lancez `npm run dev` dans le répertoire quiz-app
- **Projets** : Utilisez l’extension Live Server de VS Code pour les projets HTML
- **Projets API** : Lancez `npm start` dans les répertoires API respectifs

## Instructions de test

### Test de Quiz App

```bash
cd quiz-app
npm run lint       # Vérifier les problèmes de style de code
npm run build      # Vérifier que la compilation réussit
```

### Test de l'API Bank

```bash
cd 7-bank-project/api
npm run lint       # Vérifiez les problèmes de style de code
node server.js     # Vérifiez que le serveur démarre sans erreurs
```

### Approche générale des tests

- Il s'agit d'un dépôt éducatif sans tests automatisés complets
- Les tests manuels se concentrent sur :
  - Exécution sans erreurs des exemples de code
  - Fonctionnement correct des liens dans la documentation
  - Construction réussie des projets
  - Respect des meilleures pratiques dans les exemples

### Vérifications avant soumission

- Lancez `npm run lint` dans les répertoires contenant un package.json
- Vérifiez la validité des liens markdown
- Testez les exemples de code dans le navigateur ou Node.js
- Contrôlez que les traductions maintiennent la structure

## Directives de style de code

### JavaScript

- Utiliser la syntaxe moderne ES6+
- Suivre les configurations ESLint standard fournies dans les projets
- Employer des noms de variables et fonctions significatifs pour la clarté éducative
- Ajouter des commentaires expliquant les concepts pour les apprenants
- Formater avec Prettier lorsque configuré

### HTML/CSS

- Éléments HTML5 sémantiques
- Principes de design responsive
- Conventions claires de nommage des classes
- Commentaires expliquant les techniques CSS pour les apprenants

### Python

- Respect des guidelines PEP 8
- Exemples de code clairs et éducatifs
- Annotations de type lorsque utiles pour l'apprentissage

### Documentation Markdown

- Hiérarchie claire des titres
- Blocs de code avec spécification du langage
- Liens vers des ressources supplémentaires
- Captures d'écran et images dans les dossiers `images/`
- Texte alternatif pour les images pour l’accessibilité

### Organisation des fichiers

- Leçons numérotées séquentiellement (1-getting-started-lessons, 2-js-basics, etc.)
- Chaque projet a des dossiers `solution/` et souvent `start/` ou `your-work/`
- Images stockées dans les dossiers `images/` spécifiques aux leçons
- Traductions sous la structure `translations/{language-code}/`

## Compilation et déploiement

### Déploiement de Quiz App (Azure Static Web Apps)

L’application quiz-app est configurée pour le déploiement Azure Static Web Apps :

```bash
cd quiz-app
npm run build      # Crée le dossier dist/
# Déploie via le workflow GitHub Actions lors d'une poussée vers main
```

Configuration Azure Static Web Apps :
- **Emplacement de l’application** : `/quiz-app`
- **Emplacement de sortie** : `dist`
- **Workflow** : `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Génération de la documentation PDF

```bash
npm install                    # Installer docsify-to-pdf
npm run convert               # Générer un PDF à partir de docs
```

### Documentation Docsify

```bash
npm install -g docsify-cli    # Installer Docsify globalement
docsify serve                 # Servir sur localhost:3000
```

### Compilations spécifiques aux projets

Chaque répertoire de projet peut avoir son propre processus de compilation :
- Projets Vue : `npm run build` crée les bundles de production
- Projets statiques : pas d’étape de build, fichiers servis directement

## Directives pour les pull requests

### Format du titre

Utilisez des titres clairs et descriptifs indiquant la zone modifiée :
- `[Quiz-app] Ajout d’un nouveau quiz pour la leçon X`
- `[Lesson-3] Correction de faute dans le projet terrarium`
- `[Translation] Ajout de la traduction espagnole pour la leçon 5`
- `[Docs] Mise à jour des instructions d’installation`

### Vérifications requises

Avant de soumettre une PR :

1. **Qualité du Code** :
   - Lancez `npm run lint` dans les répertoires concernés
   - Corrigez toutes les erreurs et avertissements de lint

2. **Vérification de la compilation** :
   - Lancez `npm run build` si applicable
   - Assurez-vous qu’aucune erreur de build n’apparaît

3. **Validation des liens** :
   - Testez tous les liens markdown
   - Vérifiez que les références d’images fonctionnent

4. **Relecture du contenu** :
   - Corrigez l’orthographe et la grammaire
   - Assurez-vous que les exemples de code sont corrects et pédagogiques
   - Contrôlez que les traductions conservent le sens original

### Conditions de contribution

- Acceptez le CLA Microsoft (vérification automatisée à la première PR)
- Respectez le [Code de conduite Open Source Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consultez [CONTRIBUTING.md](./CONTRIBUTING.md) pour les règles détaillées
- Mentionnez les numéros d’issues dans la description de la PR si applicable

### Processus de revue

- PRs revues par les mainteneurs et la communauté
- Priorité à la clarté pédagogique
- Exemples de code doivent suivre les meilleures pratiques actuelles
- Traductions vérifiées pour précision et adéquation culturelle

## Système de traduction

### Traduction automatisée

- Utilisation de GitHub Actions avec workflow co-op-translator
- Traduction automatique en plus de 50 langues
- Fichiers source dans les répertoires principaux
- Fichiers traduits dans les dossiers `translations/{language-code}/`

### Ajout d’améliorations manuelles de traduction

1. Localisez le fichier dans `translations/{language-code}/`
2. Améliorez le contenu en préservant la structure
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

**L’application quiz ne démarre pas** :
- Vérifiez la version de Node.js (v14+ recommandée)
- Supprimez `node_modules` et `package-lock.json`, relancez `npm install`
- Vérifiez les conflits de ports (par défaut Vite utilise le port 5173)

**Le serveur API ne démarre pas** :
- Vérifiez que la version de Node.js est suffisante (node >=10)
- Vérifiez si le port est déjà utilisé
- Assurez-vous que toutes les dépendances sont installées avec `npm install`

**L’extension navigateur ne se charge pas** :
- Vérifiez que manifest.json est bien formaté
- Consultez la console du navigateur pour les erreurs
- Suivez les instructions spécifiques au navigateur pour l’installation de l’extension

**Problèmes avec le projet chat Python** :
- Assurez-vous que le package OpenAI est installé : `pip install openai`
- Vérifiez que la variable d’environnement GITHUB_TOKEN est bien définie
- Contrôlez les permissions d’accès aux GitHub Models

**Docsify ne sert pas la documentation** :
- Installez docsify-cli globalement : `npm install -g docsify-cli`
- Lancez depuis le répertoire racine du dépôt
- Vérifiez que `docs/_sidebar.md` existe

### Conseils pour l’environnement de développement

- Utilisez VS Code avec l’extension Live Server pour les projets HTML
- Installez les extensions ESLint et Prettier pour un formatage cohérent
- Utilisez les DevTools du navigateur pour déboguer JavaScript
- Pour les projets Vue, installez l’extension navigateur Vue DevTools

### Considérations de performance

- Le grand nombre de fichiers traduits (50+ langues) rend le clonage complet volumineux
- Utilisez un clone shallow si vous travaillez uniquement sur le contenu : `git clone --depth 1`
- Excluez les traductions des recherches lorsque vous travaillez sur le contenu anglais
- Les processus de build peuvent être lents au premier lancement (npm install, build Vite)

## Considérations de sécurité

### Variables d’environnement

- Les clés API ne doivent jamais être commises dans le dépôt
- Utilisez des fichiers `.env` (déjà dans `.gitignore`)
- Documentez les variables d’environnement requises dans les README des projets

### Projets Python

- Utilisez des environnements virtuels : `python -m venv venv`
- Gardez les dépendances à jour
- Les tokens GitHub doivent avoir les permissions minimales nécessaires

### Accès aux GitHub Models

- Les Personal Access Tokens (PAT) sont requis pour GitHub Models
- Les tokens doivent être stockés en variables d’environnement
- Ne jamais commettre les tokens ou informations d’identification

## Notes additionnelles

### Public cible

- Débutants complets en développement web
- Étudiants et auto-apprenants
- Enseignants utilisant le programme en classe
- Contenu conçu pour être accessible et progressif

### Philosophie éducative

- Approche d’apprentissage par projet
- Vérifications fréquentes des connaissances (quiz)
- Exercices pratiques de codage
- Exemples d’application réelle
- Focalisation sur les fondamentaux avant les frameworks

### Maintenance du dépôt

- Communauté active d’apprenants et contributeurs
- Mises à jour régulières des dépendances et du contenu
- Suivi des issues et discussions par les mainteneurs
- Mises à jour des traductions automatisées via GitHub Actions

### Ressources associées

- [Modules Microsoft Learn](https://docs.microsoft.com/learn/)
- [Ressources Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recommandé pour les apprenants
- Cours additionnels : AI générative, Data Science, ML, IoT disponibles

### Travailler avec des projets spécifiques

Pour des instructions détaillées sur les projets individuels, consultez les fichiers README dans :
- `quiz-app/README.md` - Application quiz Vue 3
- `7-bank-project/README.md` - Application bancaire avec authentification
- `5-browser-extension/README.md` - Développement d’extension navigateur
- `6-space-game/README.md` - Développement de jeu basé sur Canvas
- `9-chat-project/README.md` - Projet assistant de chat AI

### Structure monorepo

Bien que ce ne soit pas un monorepo traditionnel, ce dépôt contient plusieurs projets indépendants :
- Chaque leçon est autonome
- Les projets ne partagent pas leurs dépendances
- Travaillez sur des projets individuels sans impacter les autres
- Clonez le dépôt complet pour l’expérience complète du programme

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :  
Ce document a été traduit à l’aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d’assurer l’exactitude, veuillez noter que les traductions automatiques peuvent contenir des erreurs ou des imprécisions. Le document original dans sa langue d’origine doit être considéré comme la source faisant autorité. Pour les informations essentielles, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous ne pouvons être tenus responsables des malentendus ou des erreurs d’interprétation résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->