# AGENTS.md

## Aperçu du projet

Il s'agit d'un référentiel de programme éducatif pour enseigner les bases du développement web aux débutants. Le programme est un cours complet de 12 semaines développé par Microsoft Cloud Advocates, comprenant 24 leçons pratiques couvrant JavaScript, CSS et HTML.

### Composants clés

- **Contenu éducatif** : 24 leçons structurées organisées en modules basés sur des projets
- **Projets pratiques** : Terrarium, Jeu de frappe, Extension de navigateur, Jeu spatial, Application bancaire, Éditeur de code et Assistant de chat AI
- **Quiz interactifs** : 48 quiz avec 3 questions chacun (évaluations pré/post-leçon)
- **Support multilingue** : Traductions automatiques en 50+ langues via GitHub Actions
- **Technologies** : HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pour les projets AI)

### Architecture

- Référentiel éducatif structuré par leçons
- Chaque dossier de leçon contient README, exemples de code et solutions
- Projets autonomes dans des répertoires distincts (quiz-app, divers projets de leçons)
- Système de traduction utilisant GitHub Actions (co-op-translator)
- Documentation servie via Docsify et disponible en PDF

## Commandes d'installation

Ce référentiel est principalement destiné à la consommation de contenu éducatif. Pour travailler avec des projets spécifiques :

### Installation principale du référentiel

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Installation de l'app Quiz (Vue 3 + Vite)

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

### Projets d’extension de navigateur

```bash
cd 5-browser-extension/solution
npm install
# Suivre les instructions spécifiques au navigateur pour le chargement des extensions
```

### Projets de jeu spatial

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

## Workflow de développement

### Pour les contributeurs de contenu

1. **Forkez le référentiel** dans votre compte GitHub
2. **Clonez votre fork** localement
3. **Créez une nouvelle branche** pour vos modifications
4. Modifiez le contenu des leçons ou les exemples de code
5. Testez toute modification de code dans les répertoires des projets concernés
6. Soumettez des pull requests en suivant les directives de contribution

### Pour les apprenants

1. Forkez ou clonez le référentiel
2. Naviguez séquentiellement dans les dossiers de leçons
3. Lisez les fichiers README de chaque leçon
4. Complétez les quiz pré-leçon sur https://ff-quizzes.netlify.app/web/
5. Travaillez sur les exemples de code dans les dossiers des leçons
6. Complétez les devoirs et défis
7. Passez les quiz post-leçon

### Développement en direct

- **Documentation** : Lancez `docsify serve` à la racine (port 3000)
- **Quiz App** : Lancez `npm run dev` dans le répertoire quiz-app
- **Projets** : Utilisez l’extension Live Server de VS Code pour les projets HTML
- **Projets API** : Lancez `npm start` dans les répertoires API concernés

## Instructions de test

### Tests de l'app Quiz

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

### Approche générale de test

- Il s'agit d'un référentiel éducatif sans tests automatisés complets
- Les tests manuels se concentrent sur :
  - L'exécution sans erreur des exemples de code
  - Le bon fonctionnement des liens dans la documentation
  - La réussite des compilations des projets
  - La conformité des exemples aux bonnes pratiques

### Vérifications avant soumission

- Lancez `npm run lint` dans les répertoires contenant un package.json
- Vérifiez que les liens markdown sont valides
- Testez les exemples de code dans un navigateur ou Node.js
- Assurez-vous que les traductions maintiennent la structure correcte

## Guide de style de code

### JavaScript

- Utilisez la syntaxe moderne ES6+
- Suivez les configurations ESLint standard fournies dans les projets
- Utilisez des noms de variables et fonctions significatifs pour la clarté pédagogique
- Ajoutez des commentaires expliquant les concepts pour les apprenants
- Formatez avec Prettier lorsque configuré

### HTML/CSS

- Éléments HTML5 sémantiques
- Principes de design responsive
- Conventions claires de nommage de classes
- Commentaires expliquant les techniques CSS pour les apprenants

### Python

- Directives de style PEP 8
- Exemples de code clairs et éducatifs
- Indications de type utiles à l’apprentissage

### Documentation Markdown

- Hiérarchie claire des titres
- Blocs de code avec spécification de langage
- Liens vers des ressources supplémentaires
- Captures d’écran et images dans les dossiers `images/`
- Texte alternatif pour les images pour l’accessibilité

### Organisation des fichiers

- Leçons numérotées séquentiellement (1-getting-started-lessons, 2-js-basics, etc.)
- Chaque projet possède les dossiers `solution/` et souvent `start/` ou `your-work/`
- Images stockées dans les dossiers `images/` spécifiques à chaque leçon
- Traductions dans la structure `translations/{language-code}/`

## Compilation et déploiement

### Déploiement de l'app Quiz (Azure Static Web Apps)

L'application quiz-app est configurée pour le déploiement sur Azure Static Web Apps :

```bash
cd quiz-app
npm run build      # Crée le dossier dist/
# Déploie via le workflow GitHub Actions lors d'un push sur main
```

Configuration Azure Static Web Apps :
- **Emplacement de l’app** : `/quiz-app`
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

### Compilations spécifiques aux projets

Chaque répertoire de projet peut avoir son propre processus de build :
- Projets Vue : `npm run build` crée les bundles de production
- Projets statiques : Pas d'étape de build, fichiers servis directement

## Directives pour les pull requests

### Format des titres

Utilisez des titres clairs et descriptifs indiquant le domaine de changement :
- `[Quiz-app] Ajouter un nouveau quiz pour la leçon X`
- `[Lesson-3] Correction de faute dans le projet terrarium`
- `[Translation] Ajouter la traduction espagnole pour la leçon 5`
- `[Docs] Mise à jour des instructions d’installation`

### Contrôles requis

Avant de soumettre une PR :

1. **Qualité du code** :
   - Lancez `npm run lint` dans les répertoires de projets concernés
   - Corrigez toutes les erreurs et avertissements de lint

2. **Vérification du build** :
   - Lancez `npm run build` si applicable
   - Assurez-vous qu’aucune erreur de build n’apparaît

3. **Validation des liens** :
   - Testez tous les liens markdown
   - Vérifiez que les références aux images fonctionnent

4. **Revue du contenu** :
   - Relisez pour orthographe et grammaire
   - Assurez-vous que les exemples de code sont corrects et pédagogiques
   - Vérifiez que les traductions conservent le sens original

### Exigences de contribution

- Acceptation de la CLA Microsoft (vérification automatique lors de la première PR)
- Respect du [Code de conduite open source Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Voir [CONTRIBUTING.md](./CONTRIBUTING.md) pour les directives détaillées
- Mentionnez les numéros de tickets dans la description des PR si applicable

### Processus de revue

- PRs examinées par les mainteneurs et la communauté
- Priorité à la clarté pédagogique
- Les exemples de code doivent suivre les meilleures pratiques actuelles
- Les traductions sont revues pour précision et adaptation culturelle

## Système de traduction

### Traduction automatisée

- Utilise GitHub Actions avec workflow co-op-translator
- Traduction automatique en 50+ langues
- Fichiers sources dans les répertoires principaux
- Fichiers traduits dans `translations/{language-code}/`

### Ajout d’améliorations manuelles

1. Localisez le fichier dans `translations/{language-code}/`
2. Apportez des améliorations en préservant la structure
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

## Débogage et résolution de problèmes

### Problèmes courants

**L'application quiz ne démarre pas** :
- Vérifiez la version Node.js (v14+ recommandée)
- Supprimez `node_modules` et `package-lock.json`, exécutez `npm install` à nouveau
- Vérifiez les conflits de port (par défaut : Vite utilise le port 5173)

**Le serveur API ne démarre pas** :
- Vérifiez que la version de Node.js est suffisante (node >=10)
- Contrôlez si le port est déjà utilisé
- Assurez-vous que toutes les dépendances sont installées avec `npm install`

**L’extension de navigateur ne charge pas** :
- Vérifiez que manifest.json est bien formaté
- Contrôlez la console du navigateur pour les erreurs
- Suivez les instructions spécifiques au navigateur pour l'installation des extensions

**Problèmes du projet chat Python** :
- Assurez-vous que le package OpenAI est installé : `pip install openai`
- Vérifiez que la variable d’environnement GITHUB_TOKEN est définie
- Contrôlez les permissions d’accès aux GitHub Models

**Docsify ne sert pas la documentation** :
- Installez docsify-cli globalement : `npm install -g docsify-cli`
- Lancez depuis le répertoire racine du référentiel
- Vérifiez que `docs/_sidebar.md` existe

### Conseils pour l’environnement de développement

- Utilisez VS Code avec l’extension Live Server pour les projets HTML
- Installez les extensions ESLint et Prettier pour un formatage cohérent
- Utilisez les DevTools du navigateur pour le débogage JavaScript
- Pour les projets Vue, installez l’extension Vue DevTools dans le navigateur

### Considérations de performance

- Le grand nombre de fichiers traduits (50+ langues) rend les clones complets volumineux
- Utilisez un clonage superficiel si vous ne travaillez que sur le contenu : `git clone --depth 1`
- Excluez les traductions des recherches lorsque vous travaillez sur le contenu anglais
- Les processus de build peuvent être lents au premier lancement (npm install, build Vite)

## Considérations de sécurité

### Variables d’environnement

- Les clés API ne doivent jamais être commitées dans le référentiel
- Utilisez des fichiers `.env` (déjà dans `.gitignore`)
- Documentez les variables d’environnement requises dans les README des projets

### Projets Python

- Utilisez des environnements virtuels : `python -m venv venv`
- Gardez les dépendances à jour
- Les tokens GitHub doivent avoir les permissions minimales requises

### Accès aux GitHub Models

- Tokens d’accès personnel (PAT) requis pour GitHub Models
- Les tokens doivent être stockés en variables d’environnement
- Ne jamais commiter les tokens ou identifiants

## Notes supplémentaires

### Public cible

- Débutants complets en développement web
- Étudiants et autodidactes
- Enseignants utilisant le programme en salle de classe
- Contenu conçu pour l’accessibilité et le développement progressif des compétences

### Philosophie éducative

- Approche d’apprentissage par projets
- Vérifications fréquentes des connaissances (quiz)
- Exercices de codage pratiques
- Exemples d’applications réelles
- Accent sur les fondamentaux avant les frameworks

### Maintenance du référentiel

- Communauté active d’apprenants et de contributeurs
- Mises à jour régulières des dépendances et du contenu
- Suivi des issues et discussions par les mainteneurs
- Mises à jour de traduction automatisées via GitHub Actions

### Ressources associées

- [Modules Microsoft Learn](https://docs.microsoft.com/learn/)
- [Ressources Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recommandé pour les apprenants
- Cours additionnels : Generative AI, Data Science, ML, IoT disponibles

### Travail avec des projets spécifiques

Pour des instructions détaillées sur des projets individuels, référez-vous aux fichiers README dans :
- `quiz-app/README.md` - Application de quiz Vue 3
- `7-bank-project/README.md` - Application bancaire avec authentification
- `5-browser-extension/README.md` - Développement d’extensions de navigateur
- `6-space-game/README.md` - Développement de jeu basé sur Canvas
- `9-chat-project/README.md` - Projet assistant de chat AI

### Structure du monorepo

Bien qu’il ne s’agisse pas d’un monorepo traditionnel, ce référentiel contient plusieurs projets indépendants :
- Chaque leçon est autonome
- Les projets ne partagent pas leurs dépendances
- Travaillez sur chaque projet sans affecter les autres
- Clonez le référentiel complet pour l’expérience complète du programme

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avis de non-responsabilité** :  
Ce document a été traduit à l’aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforçons d’assurer l’exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d’origine doit être considéré comme la source faisant foi. Pour les informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous ne saurions être tenus responsables des malentendus ou des erreurs d’interprétation résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->