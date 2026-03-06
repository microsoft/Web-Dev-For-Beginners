# AGENTS.md

## Aperçu du projet

Il s'agit d'un référentiel de programme éducatif pour enseigner les fondamentaux du développement web aux débutants. Le programme est un cours complet de 12 semaines développé par Microsoft Cloud Advocates, comprenant 24 leçons pratiques couvrant JavaScript, CSS et HTML.

### Composants clés

- **Contenu éducatif** : 24 leçons structurées organisées en modules basés sur des projets
- **Projets pratiques** : Terrarium, Jeu de dactylographie, Extension de navigateur, Jeu spatial, Application bancaire, Éditeur de code et Assistant de chat IA
- **Quiz interactifs** : 48 quiz avec 3 questions chacun (évaluations avant/après leçon)
- **Support multilingue** : Traductions automatisées pour plus de 50 langues via GitHub Actions
- **Technologies** : HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pour les projets IA)

### Architecture

- Référentiel éducatif structuré par leçon
- Chaque dossier de leçon contient README, exemples de code et solutions
- Projets autonomes dans des répertoires séparés (quiz-app, divers projets de leçons)
- Système de traduction utilisant GitHub Actions (co-op-translator)
- Documentation servie via Docsify et disponible en PDF

## Commandes d'installation

Ce référentiel est principalement destiné à la consommation de contenu éducatif. Pour travailler sur des projets spécifiques :

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
npm run build      # Compiler pour la production
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
# Suivez les instructions spécifiques au navigateur pour le chargement de l'extension
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

## Flux de développement

### Pour les contributeurs de contenu

1. **Forkez le référentiel** sur votre compte GitHub
2. **Clonez votre fork** localement
3. **Créez une nouvelle branche** pour vos modifications
4. Modifiez le contenu des leçons ou les exemples de code
5. Testez les modifications de code dans les répertoires de projets concernés
6. Soumettez des pull requests en suivant les directives de contribution

### Pour les apprenants

1. Forkez ou clonez le référentiel
2. Naviguez dans les répertoires des leçons dans l’ordre
3. Lisez les fichiers README de chaque leçon
4. Complétez les quiz pré-lesson sur https://ff-quizzes.netlify.app/web/
5. Travaillez sur les exemples de code dans les dossiers des leçons
6. Terminez les devoirs et les défis
7. Passez les quiz post-lesson

### Développement en direct

- **Documentation** : Exécutez `docsify serve` à la racine (port 3000)
- **Application Quiz** : Exécutez `npm run dev` dans le répertoire quiz-app
- **Projets** : Utilisez l’extension Live Server de VS Code pour les projets HTML
- **Projets API** : Exécutez `npm start` dans les répertoires API respectifs

## Instructions de test

### Test de l'application Quiz

```bash
cd quiz-app
npm run lint       # Vérifier les problèmes de style de code
npm run build      # Vérifier la réussite de la compilation
```

### Test de l'API bancaire

```bash
cd 7-bank-project/api
npm run lint       # Vérifier les problèmes de style de code
node server.js     # Vérifier que le serveur démarre sans erreurs
```

### Approche générale des tests

- Il s'agit d'un référentiel éducatif sans tests automatisés complets
- Les tests manuels se concentrent sur :
  - Exécution des exemples de code sans erreurs
  - Fonctionnement correct des liens dans la documentation
  - Bon déroulement des builds des projets
  - Respect des bonnes pratiques dans les exemples

### Vérifications avant soumission

- Exécutez `npm run lint` dans les dossiers contenant package.json
- Vérifiez la validité des liens markdown
- Testez les exemples de code dans le navigateur ou Node.js
- Vérifiez que les traductions conservent la structure correcte

## Directives de style de code

### JavaScript

- Utilisez la syntaxe moderne ES6+
- Respectez les configurations ESLint standard fournies dans les projets
- Utilisez des noms de variables et fonctions significatifs pour la clarté pédagogique
- Ajoutez des commentaires expliquant les concepts pour les apprenants
- Formatez avec Prettier là où configuré

### HTML/CSS

- Éléments HTML5 sémantiques
- Principes de design responsive
- Conventions claires de nommage des classes
- Commentaires expliquant les techniques CSS pour les apprenants

### Python

- Respect des directives de style PEP 8
- Exemples de code clairs et pédagogiques
- Indications de types lorsque cela aide à l’apprentissage

### Documentation Markdown

- Hiérarchie claire des titres
- Blocs de code avec spécification du langage
- Liens vers des ressources supplémentaires
- Captures d’écran et images dans les dossiers `images/`
- Texte alternatif pour les images pour l’accessibilité

### Organisation des fichiers

- Leçons numérotées séquentiellement (1-getting-started-lessons, 2-js-basics, etc.)
- Chaque projet dispose de répertoires `solution/` et souvent `start/` ou `your-work/`
- Images stockées dans des dossiers `images/` spécifiques à chaque leçon
- Traductions dans la structure `translations/{code-langue}/`

## Compilation et déploiement

### Déploiement de l'application Quiz (Azure Static Web Apps)

L’application quiz-app est configurée pour le déploiement Azure Static Web Apps :

```bash
cd quiz-app
npm run build      # Crée le dossier dist/
# Déploie via le workflow GitHub Actions lors d'un push sur main
```

Configuration Azure Static Web Apps :
- **Emplacement de l’application** : `/quiz-app`
- **Emplacement de sortie** : `dist`
- **Workflow** : `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Génération PDF de la documentation

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

Chaque répertoire de projet peut avoir un processus de build propre :
- Projets Vue : `npm run build` crée des bundles de production
- Projets statiques : Pas d’étape de build, fichiers servis directement

## Directives pour les Pull Requests

### Format des titres

Utilisez des titres clairs et descriptifs indiquant la zone de changement :
- `[Quiz-app] Ajouter un nouveau quiz pour la leçon X`
- `[Lesson-3] Corriger une faute de frappe dans le projet terrarium`
- `[Translation] Ajouter la traduction espagnole pour la leçon 5`
- `[Docs] Mettre à jour les instructions d’installation`

### Vérifications requises

Avant de soumettre une PR :

1. **Qualité du code** :
   - Exécutez `npm run lint` dans les répertoires de projets concernés
   - Corrigez toutes les erreurs et avertissements de lint

2. **Vérification du build** :
   - Exécutez `npm run build` si applicable
   - Assurez-vous qu'aucune erreur de build ne survient

3. **Validation des liens** :
   - Testez tous les liens markdown
   - Vérifiez que les références aux images fonctionnent

4. **Relecture du contenu** :
   - Corrigez l’orthographe et la grammaire
   - Assurez-vous que les exemples de code sont corrects et pédagogiques
   - Vérifiez que les traductions conservent le sens original

### Exigences de contribution

- Accepter le CLA Microsoft (vérification automatisée lors de la première PR)
- Respecter le [Code de Conduite Open Source Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Voir [CONTRIBUTING.md](./CONTRIBUTING.md) pour les directives détaillées
- Référencer les numéros d’issues dans la description de la PR si applicable

### Processus de revue

- PRs examinées par les mainteneurs et la communauté
- Priorité donnée à la clarté pédagogique
- Les exemples de code doivent suivre les meilleures pratiques actuelles
- Les traductions sont vérifiées pour leur exactitude et pertinence culturelle

## Système de traduction

### Traduction automatisée

- Utilise GitHub Actions avec le workflow co-op-translator
- Traduction automatique vers plus de 50 langues
- Fichiers source dans les répertoires principaux
- Fichiers traduits dans `translations/{code-langue}/`

### Ajout d’améliorations manuelles de traduction

1. Localisez le fichier dans `translations/{code-langue}/`
2. Apportez des améliorations tout en conservant la structure
3. Assurez-vous que les exemples de code restent fonctionnels
4. Testez tout contenu de quiz localisé

### Métadonnées de traduction

Les fichiers traduits contiennent un en-tête de métadonnées :
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

**L’application Quiz ne démarre pas** :
- Vérifiez la version de Node.js (v14+ recommandé)
- Supprimez `node_modules` et `package-lock.json`, lancez `npm install` de nouveau
- Vérifiez les conflits de port (par défaut : Vite utilise le port 5173)

**Le serveur API ne démarre pas** :
- Vérifiez que la version de Node.js est suffisante (node >=10)
- Vérifiez si le port est déjà utilisé
- Assurez-vous que toutes les dépendances sont installées avec `npm install`

**L’extension de navigateur ne se charge pas** :
- Vérifiez que manifest.json est bien formaté
- Contrôlez la console du navigateur pour les erreurs
- Suivez les instructions spécifiques au navigateur pour l’installation d’extensions

**Problèmes avec le projet de chat Python** :
- Assurez-vous que le package OpenAI est installé : `pip install openai`
- Vérifiez que la variable d’environnement GITHUB_TOKEN est définie
- Vérifiez les permissions d’accès aux modèles GitHub

**Docsify ne sert pas la documentation** :
- Installez docsify-cli globalement : `npm install -g docsify-cli`
- Lancez depuis le répertoire racine du référentiel
- Vérifiez que `docs/_sidebar.md` existe

### Conseils pour l’environnement de développement

- Utilisez VS Code avec l’extension Live Server pour les projets HTML
- Installez les extensions ESLint et Prettier pour un formatage cohérent
- Utilisez les outils de développement du navigateur pour déboguer JavaScript
- Pour les projets Vue, installez l’extension Vue DevTools du navigateur

### Considérations de performance

- Le grand nombre de fichiers traduits (plus de 50 langues) fait que les clones complets sont volumineux
- Utilisez un clone superficiel si vous travaillez uniquement sur le contenu : `git clone --depth 1`
- Excluez les traductions des recherches lorsque vous travaillez sur le contenu anglais
- Les processus de build peuvent être lents au premier lancement (npm install, build Vite)

## Considérations de sécurité

### Variables d’environnement

- Les clés API ne doivent jamais être commises dans le référentiel
- Utilisez les fichiers `.env` (déjà inclus dans `.gitignore`)
- Documentez les variables d’environnement requises dans les README des projets

### Projets Python

- Utilisez des environnements virtuels : `python -m venv venv`
- Maintenez les dépendances à jour
- Les tokens GitHub doivent avoir des permissions minimales requises

### Accès aux modèles GitHub

- Les jetons d’accès personnel (PAT) sont nécessaires pour les modèles GitHub
- Les jetons doivent être stockés comme variables d’environnement
- Ne jamais commettre de jetons ou de credentials

## Notes supplémentaires

### Public cible

- Débutants complets en développement web
- Étudiants et autodidactes
- Enseignants utilisant le programme en classe
- Contenu conçu pour l’accessibilité et l’acquisition progressive des compétences

### Philosophie éducative

- Approche d’apprentissage basée sur les projets
- Vérifications fréquentes des connaissances (quiz)
- Exercices de codage pratiques
- Exemples d’applications réelles
- Accent sur les fondamentaux avant les frameworks

### Maintenance du référentiel

- Communauté active d’apprenants et de contributeurs
- Mises à jour régulières des dépendances et du contenu
- Suivi des issues et discussions par les mainteneurs
- Mises à jour des traductions automatisées via GitHub Actions

### Ressources associées

- [Modules Microsoft Learn](https://docs.microsoft.com/learn/)
- [Ressources Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recommandé pour les apprenants
- Cours additionnels : IA générative, Data Science, ML, IoT disponibles

### Travail avec des projets spécifiques

Pour des instructions détaillées sur les projets individuels, consultez les fichiers README dans :
- `quiz-app/README.md` - Application quiz Vue 3
- `7-bank-project/README.md` - Application bancaire avec authentification
- `5-browser-extension/README.md` - Développement d’extension de navigateur
- `6-space-game/README.md` - Développement de jeu Canvas
- `9-chat-project/README.md` - Projet d’assistant de chat IA

### Structure Monorepo

Bien que ce ne soit pas un monorepo traditionnel, ce référentiel contient plusieurs projets indépendants :
- Chaque leçon est autonome
- Les projets ne partagent pas leurs dépendances
- Travaillez sur des projets individuels sans affecter les autres
- Clonez l’ensemble du repo pour une expérience complète du programme

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :  
Ce document a été traduit à l’aide du service de traduction automatisée [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d’assurer l’exactitude, veuillez noter que les traductions automatiques peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d’origine doit être considéré comme la source faisant foi. Pour les informations sensibles, il est recommandé de recourir à une traduction professionnelle humaine. Nous n’assumons aucune responsabilité en cas de malentendus ou d’interprétations erronées résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->