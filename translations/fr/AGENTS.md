# AGENTS.md

## Aperçu du projet

Il s'agit d'un référentiel de programme éducatif pour enseigner les bases du développement web aux débutants. Le programme est un cours complet de 12 semaines développé par les Microsoft Cloud Advocates, comprenant 24 leçons pratiques couvrant JavaScript, CSS et HTML.

### Composants clés

- **Contenu éducatif** : 24 leçons structurées organisées en modules basés sur des projets
- **Projets pratiques** : Terrarium, jeu de frappe, extension de navigateur, jeu spatial, application bancaire, éditeur de code et assistant de chat IA
- **Quiz interactifs** : 48 quiz avec 3 questions chacun (évaluations avant/après les leçons)
- **Support multilingue** : Traductions automatisées pour plus de 50 langues via GitHub Actions
- **Technologies** : HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (pour les projets IA)

### Architecture

- Référentiel éducatif avec structure basée sur les leçons
- Chaque dossier de leçon contient un README, des exemples de code et des solutions
- Projets autonomes dans des répertoires séparés (quiz-app, divers projets de leçon)
- Système de traduction utilisant GitHub Actions (co-op-translator)
- Documentation servie via Docsify et disponible en PDF

## Commandes d’installation

Ce référentiel est principalement destiné à la consommation de contenu éducatif. Pour travailler avec des projets spécifiques :

### Installation du référentiel principal

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Installation de l’application Quiz (Vue 3 + Vite)

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

### Projets d’extensions de navigateur

```bash
cd 5-browser-extension/solution
npm install
# Suivre les instructions de chargement des extensions spécifiques au navigateur
```

### Projets du jeu spatial

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
4. Modifiez le contenu des leçons ou les exemples de code
5. Testez les modifications de code dans les répertoires de projets concernés
6. Soumettez des pull requests en suivant les directives de contribution

### Pour les apprenants

1. Forkez ou clonez le référentiel
2. Parcourez les dossiers de leçon dans l’ordre
3. Lisez les fichiers README de chaque leçon
4. Complétez les quiz pré-lesson sur https://ff-quizzes.netlify.app/web/
5. Travaillez les exemples de code dans les dossiers de leçon
6. Réalisez les devoirs et défis
7. Passez les quiz post-lesson

### Développement en direct

- **Documentation** : Lancez `docsify serve` à la racine (port 3000)
- **Application Quiz** : Lancez `npm run dev` dans le répertoire quiz-app
- **Projets** : Utilisez l’extension Live Server de VS Code pour les projets HTML
- **Projets API** : Lancez `npm start` dans les répertoires API respectifs

## Instructions de test

### Test de l’application Quiz

```bash
cd quiz-app
npm run lint       # Vérifiez les problèmes de style de code
npm run build      # Vérifiez que la compilation réussit
```

### Test de l’API bancaire

```bash
cd 7-bank-project/api
npm run lint       # Vérifier les problèmes de style de code
node server.js     # Vérifier que le serveur démarre sans erreurs
```

### Approche générale de test

- Il s’agit d’un référentiel éducatif sans tests automatisés complets
- Les tests manuels portent sur :
  - Les exemples de code s’exécutent sans erreur
  - Les liens dans la documentation fonctionnent correctement
  - Les constructions des projets s’achèvent avec succès
  - Les exemples respectent les bonnes pratiques

### Vérifications avant soumission

- Lancez `npm run lint` dans les répertoires contenant package.json
- Vérifiez la validité des liens markdown
- Testez les exemples de code dans le navigateur ou Node.js
- Vérifiez que les traductions conservent la structure correcte

## Directives de style de code

### JavaScript

- Utilisez la syntaxe moderne ES6+
- Suivez les configurations ESLint standards fournies dans les projets
- Utilisez des noms de variables et fonctions significatifs pour la clarté pédagogique
- Ajoutez des commentaires expliquant les concepts pour les apprenants
- Formatez avec Prettier là où il est configuré

### HTML/CSS

- Éléments HTML5 sémantiques
- Principes de conception responsive
- Conventions claires de noms de classes
- Commentaires expliquant les techniques CSS pour les apprenants

### Python

- Directives de style PEP 8
- Exemples de code clairs et éducatifs
- Indications de types lorsque cela aide à l’apprentissage

### Documentation Markdown

- Hiérarchie claire des titres
- Blocs de code avec spécification de langue
- Liens vers des ressources supplémentaires
- Captures d’écran et images dans les dossiers `images/`
- Texte alternatif pour les images pour l’accessibilité

### Organisation des fichiers

- Leçons numérotées dans l’ordre (1-getting-started-lessons, 2-js-basics, etc.)
- Chaque projet possède des dossiers `solution/` et souvent `start/` ou `your-work/`
- Images stockées dans les dossiers `images/` spécifiques à chaque leçon
- Traductions dans la structure `translations/{code-langue}/`

## Construction et déploiement

### Déploiement de l’application Quiz (Azure Static Web Apps)

L’application quiz-app est configurée pour un déploiement sur Azure Static Web Apps :

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

Chaque répertoire de projet peut avoir son propre processus de build :
- Projets Vue : `npm run build` crée des bundles de production
- Projets statiques : pas d’étape de build, sert les fichiers directement

## Directives pour les pull requests

### Format des titres

Utilisez des titres clairs et descriptifs indiquant la zone de changement :
- `[Quiz-app] Ajouter un nouveau quiz pour la leçon X`
- `[Lesson-3] Corriger une faute dans le projet terrarium`
- `[Translation] Ajouter une traduction espagnole pour la leçon 5`
- `[Docs] Mettre à jour les instructions d’installation`

### Vérifications obligatoires

Avant de soumettre une PR :

1. **Qualité du code** :
   - Lancez `npm run lint` dans les répertoires des projets concernés
   - Corrigez toutes les erreurs et avertissements lint

2. **Vérification du build** :
   - Lancez `npm run build` si applicable
   - Assurez-vous qu’aucune erreur de build ne survient

3. **Validation des liens** :
   - Testez tous les liens markdown
   - Vérifiez les références d’images fonctionnelles

4. **Relecture de contenu** :
   - Vérifiez l’orthographe et la grammaire
   - Assurez-vous que les exemples de code sont corrects et pédagogiques
   - Vérifiez que les traductions respectent le sens original

### Exigences de contribution

- Accepter la CLA Microsoft (vérification automatisée à la première PR)
- Suivre le [Code de conduite open source de Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Voir [CONTRIBUTING.md](./CONTRIBUTING.md) pour les directives détaillées
- Référencer les numéros d’issues dans la description de PR si applicable

### Processus de revue

- PRs revues par les mainteneurs et la communauté
- La clarté pédagogique est priorisée
- Les exemples de code doivent suivre les meilleures pratiques actuelles
- Les traductions sont contrôlées pour la précision et l’adéquation culturelle

## Système de traduction

### Traduction automatisée

- Utilise GitHub Actions avec le workflow co-op-translator
- Traduit automatiquement vers plus de 50 langues
- Fichiers sources dans les répertoires principaux
- Fichiers traduits dans `translations/{code-langue}/`

### Ajout d’améliorations manuelles de traduction

1. Localisez le fichier dans `translations/{code-langue}/`
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

**L’application quiz ne démarre pas** :
- Vérifiez la version Node.js (v14+ recommandée)
- Supprimez `node_modules` et `package-lock.json`, relancez `npm install`
- Vérifiez les conflits de port (par défaut : Vite utilise le port 5173)

**Le serveur API ne démarre pas** :
- Vérifiez que la version Node.js est suffisante (node >=10)
- Vérifiez si le port est déjà utilisé
- Assurez-vous que toutes les dépendances sont installées avec `npm install`

**L’extension de navigateur ne se charge pas** :
- Vérifiez que manifest.json est bien formaté
- Consultez la console du navigateur pour les erreurs
- Suivez les instructions d’installation propres au navigateur

**Problèmes projet de chat Python** :
- Assurez-vous que le package OpenAI est installé : `pip install openai`
- Vérifiez que la variable d’environnement GITHUB_TOKEN est définie
- Contrôlez les permissions d’accès aux GitHub Models

**Docsify ne sert pas la documentation** :
- Installez docsify-cli globalement : `npm install -g docsify-cli`
- Exécutez depuis le répertoire racine du référentiel
- Vérifiez que `docs/_sidebar.md` existe

### Astuces pour l’environnement de développement

- Utilisez VS Code avec l’extension Live Server pour les projets HTML
- Installez les extensions ESLint et Prettier pour un formatage cohérent
- Utilisez les DevTools du navigateur pour déboguer JavaScript
- Pour les projets Vue, installez l’extension Vue DevTools du navigateur

### Considérations de performance

- Le grand nombre de fichiers traduits (50+ langues) fait que les clones complets sont volumineux
- Utilisez un clone peu profond si vous travaillez uniquement sur le contenu : `git clone --depth 1`
- Excluez les traductions des recherches quand vous travaillez sur le contenu anglais
- Les processus de build peuvent être lents lors du premier lancement (npm install, build Vite)

## Considérations de sécurité

### Variables d’environnement

- Les clés API ne doivent jamais être commises dans le référentiel
- Utilisez des fichiers `.env` (déjà dans `.gitignore`)
- Documentez les variables d’environnement requises dans les README des projets

### Projets Python

- Utilisez des environnements virtuels : `python -m venv venv`
- Gardez les dépendances à jour
- Les tokens GitHub doivent avoir les permissions minimales nécessaires

### Accès aux GitHub Models

- Les Personal Access Tokens (PAT) sont requis pour GitHub Models
- Les tokens doivent être stockés dans des variables d’environnement
- Ne jamais commettre de tokens ou d’identifiants

## Notes supplémentaires

### Public cible

- Débutants complets en développement web
- Étudiants et autodidactes
- Enseignants utilisant le programme en classe
- Le contenu est conçu pour l’accessibilité et la montée en compétences progressive

### Philosophie éducative

- Approche d’apprentissage par projets
- Contrôles fréquents des connaissances (quiz)
- Exercices pratiques de codage
- Exemples d’applications réelles
- Accent sur les fondamentaux avant les frameworks

### Maintenance du référentiel

- Communauté active d’apprenants et contributeurs
- Mises à jour régulières des dépendances et du contenu
- Suivi des problèmes et discussions par les mainteneurs
- Mises à jour des traductions automatisées via GitHub Actions

### Ressources connexes

- [Modules Microsoft Learn](https://docs.microsoft.com/learn/)
- [Ressources Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recommandé pour les apprenants
- Cours supplémentaires : IA générative, Science des données, ML, cursus IoT disponibles

### Travail avec des projets spécifiques

Pour les instructions détaillées sur les projets individuels, référez-vous aux fichiers README dans :
- `quiz-app/README.md` - Application quiz Vue 3
- `7-bank-project/README.md` - Application bancaire avec authentification
- `5-browser-extension/README.md` - Développement d’extension de navigateur
- `6-space-game/README.md` - Développement de jeu sur Canvas
- `9-chat-project/README.md` - Projet assistant de chat IA

### Structure Monorepo

Bien que ce ne soit pas un monorepo traditionnel, ce référentiel contient plusieurs projets indépendants :
- Chaque leçon est autonome
- Les projets ne partagent pas de dépendances
- Travaillez sur des projets individuels sans impact sur les autres
- Clonez tout le référentiel pour une expérience complète du programme scolaire

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :
Ce document a été traduit à l’aide du service de traduction automatisée [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d’assurer l’exactitude, veuillez noter que les traductions automatiques peuvent contenir des erreurs ou des imprécisions. Le document original dans sa langue d’origine doit être considéré comme la source faisant foi. Pour des informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou de mauvaises interprétations résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->