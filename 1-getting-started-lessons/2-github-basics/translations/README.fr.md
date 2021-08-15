# Introduction à GitHub

Cette leçon couvre les principes de base de GitHub, une plateforme permettant d’héberger et de gérer les modifications apportées à votre code.

![Intro to GitHub](/sketchnotes/webdev101-github.png)
> Sketchnote par [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz préalable
[Quiz préalable](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/3?loc=fr)

## Introduction

Dans cette leçon, nous allons couvrir :

- suivre le travail que vous faites sur votre machine
- travailler sur des projets avec d’autres personnes
- comment contribuer aux logiciels open source

### Prérequis

Avant de commencer, vous devrez vérifier si Git est installé. Dans le type de terminal : 
`git --version`

Si Git n’est pas installé, [télécharger Git](https://git-scm.com/downloads). Ensuite, configurez votre profil Git local dans le terminal:
* `git config --global user.name " votre-nom"`
* `git config --global user.email " your-email"`

Pour vérifier si Git est déjà configuré, vous pouvez taper :
`git config --list`

Vous aurez également besoin d’un compte GitHub, d’un éditeur de code (comme Visual Studio Code), et vous devrez ouvrir votre terminal (ou : invite de commandes).

Accédez à [github.com](https://github.com/) et créez un compte si vous ne l’avez pas déjà fait, ou connectez-vous et remplissez votre profil. 

✅ GitHub n’est pas le seul référentiel de code au monde; il y en a d’autres, mais GitHub est le plus connu

### Préparation

Vous aurez besoin à la fois d’un dossier avec un projet de code sur votre ordinateur local (ordinateur portable ou PC) et d’un référentiel public sur GitHub, qui servira d’exemple pour contribuer aux projets d’autres personnes.  

---

## Gestion du code

Supposons que vous ayez un dossier localement avec un projet de code et que vous souhaitiez commencer à suivre votre progression à l’aide de git - le système de contrôle de version. Certaines personnes comparent l’utilisation de git à l’écriture d’une lettre d’amour à votre futur moi. En lisant vos messages de validation des jours, des semaines ou des mois plus tard, vous pourrez vous rappeler pourquoi vous avez pris une décision, ou " annuler " une modification - c’est-à-dire lorsque vous écrivez de bons " messages de validation ".

### Tâche : créer un référentiel et valider le code

1. **Créer un référentiel sur GitHub**. Sur GitHub.com, dans l’onglet Référentiels ou dans la barre de navigation en haut à droite, recherchez le bouton **nouveau référentiel**.

   1. Donnez un nom à votre référentiel (dossier)
   1. Sélectionnez **créer un référentiel**.

1. **Accédez à votre dossier de travail**. Dans votre terminal, basculez vers le dossier (également connu sous le nom de répertoire) que vous souhaitez démarrer le suivi. Tapez :

   ```bash
   cd [nom de votre dossier]
   ```

1. **Initialiser un dépôt git**. Dans votre type de projet :

   ```bash
   git init
   ```

1. **Vérifier l’état**. Pour vérifier l’état de votre type de référentiel :

   ```bash
   git status
   ```

   la sortie peut ressembler à ceci :

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   En règle générale, une commande `git status` vous indique des choses comme quels fichiers sont prêts à être _enregistrés_ dans le référentiel ou contient des modifications que vous voudrez peut-être conserver.

1. **Ajouter tous les fichiers pour le suivi**
   Cela s’appelle aussi fichiers intermédiaires/ ajout de fichiers à la zone de transit.

   ```bash
   git add .
   ```

   L’argument `git add` plus `.` indique que tous vos fichiers &changes pour le suivi. 

1. **Ajouter les fichiers sélectionnés pour le suivi**

  ```bash
   git add [nom du fichier ou du dossier]
   ```

   Cela nous aide à ajouter uniquement les fichiers sélectionnés à la zone de transit lorsque nous ne voulons pas valider tous les fichiers à la fois.

1. **Défaire la scène de tous les fichiers**

   ```bash
   git reset
   ```

   Cette commande nous aide à défaire tous les fichiers à la fois.

1. **Défaire un fichier particulier**

   ```bash
   git reset [nom du fichier ou du dossier]
   ```

   Cette commande nous aide à défaire un fichier particulier à la fois que nous ne voulons pas inclure pour le prochain commit.

1. **Persistance de votre travail**. À ce stade, vous avez ajouté les fichiers à un soi-disant _staging area_. Un endroit où Git suit vos fichiers. Pour rendre la modification permanente, vous devez _valider_ les fichiers. Pour ce faire, vous créez un _commit_ avec la commande `git commit`. Un _commit_ représente un point d’enregistrement dans l’historique de votre référentiel. Tapez ce qui suit pour créer un _commit_ :

   ```bash
   git commit -m " premier commit "
   ```

   Cela valide tous vos fichiers, en ajoutant le message " premier commit ". Pour les futurs messages de validation, vous voudrez être plus descriptif dans votre description pour indiquer le type de modification que vous avez apportée.

1. **Connectez votre référentiel Git local avec GitHub**. Un référentiel Git est bon sur votre machine, mais à un moment donné, vous voulez avoir une sauvegarde de vos fichiers quelque part et également inviter d’autres personnes à travailler avec vous sur votre dépôt. GitHub est un excellent endroit pour le faire. N’oubliez pas que nous avons déjà créé un référentiel sur GitHub, donc la seule chose que nous devons faire est de connecter notre référentiel Git local à GitHub. La commande `git remote add` fera exactement cela. Tapez la commande suivante :

   > Remarque, avant de taper la commande, accédez à votre page de référentiel GitHub pour trouver l’URL du référentiel. Vous l’utiliserez dans la commande ci-dessous. Remplacez `repository_name` par votre URL GitHub.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Cela crée un _remote_, ou une connexion, nommé " origin " pointant vers le référentiel GitHub que vous avez créé précédemment.

1. **Envoyer des fichiers locaux à GitHub**. Jusqu’à présent, vous avez créé une _connexion_ entre le référentiel local et le référentiel GitHub. Envoyons ces fichiers à GitHub avec la commande suivante `git push`, comme suit: 

   ```bash
   git push -u origin main
   ```

   Cela envoie vos commits dans votre branche "main" à GitHub..

1. **Pour ajouter d’autres modifications**. Si vous souhaitez continuer à apporter des modifications et à les pousser vers GitHub, il vous suffit d’utiliser les trois commandes suivantes:

   ```bash
   git add .
   git commit -m " tapez votre message de validation ici "
   git push
   ```

   > Conseil, vous pouvez également adopter un fichier `.gitignore` pour empêcher les fichiers que vous ne souhaitez pas suivre d’apparaître sur GitHub - comme ce fichier de notes que vous stockez dans le même dossier mais n’a pas sa place sur un référentiel public. Vous pouvez trouver des modèles pour les fichiers `.gitignore` dans [.gitignore templates](https://github.com/github/gitignore).

#### Valider les messages

Une grande ligne d’objet de commit Git complète la phrase suivante:
S’il est appliqué, ce commit le sera

Pour le sujet, utilisez l’impératif, présent: "changement" pas "changé" ni "changements". 
Comme dans le sujet, dans le corps (facultatif) utilisez également l’impératif, le présent. Le corps doit inclure la motivation du changement et contraster cela avec le comportement précédent. Vous expliquez le `pourquoi`, pas le `comment`.

✅ Prenez quelques minutes pour surfer sur GitHub. Pouvez-vous trouver un très bon message d’engagement? Pouvez-vous en trouver un vraiment minime? Quelles informations pensez-vous être les plus importantes et les plus utiles à transmettre dans un message de validation ?

### Tâche : Collaborer

La principale raison de mettre des choses sur GitHub était de permettre de collaborer avec d’autres développeurs.

## Travailler sur des projets avec d’autres

Dans votre référentiel, accédez à `Insights > Community ` pour voir comment votre projet se compare aux normes communautaires recommandées.

   Voici quelques éléments qui peuvent améliorer votre référentiel GitHub :
   - **Description**. Avez-vous ajouté une description pour votre projet ?
   - **README**. Avez-vous ajouté un fichier README ? GitHub fournit des conseils pour l’écriture d’un [README](https://docs.github.com/articles/about-readmes/).
   - **Guide de contribution**. Votre projet a-t-il des [directives de contribution](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/), 
   - **Code de conduite**. Un [Code de conduite](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/), 
   - **Licence**. Peut-être plus important encore, une [licence](https://docs.github.com/articles/adding-a-license-to-a-repository/) ?


Toutes ces ressources profiteront à l’intégration des nouveaux membres de l’équipe. Et ce sont généralement le genre de choses que les nouveaux contributeurs regardent avant même de regarder votre code, pour savoir si votre projet est le bon endroit pour qu’ils passent leur temps.

✅ fichiers README, bien qu’ils prennent du temps à préparer, sont souvent négligés par les mainteneurs occupés. Pouvez-vous trouver un exemple particulièrement descriptif? Remarque: il y a quelques [outils pour aider à créer de bons README](https://www.makeareadme.com/) que vous voudrez peut-être essayer.

### Tâche : fusionner du code

Les documents contributeurs aident les gens à contribuer au projet. Il explique les types de contributions que vous recherchez et comment le processus fonctionne. Les contributeurs devront passer par une série d’étapes pour pouvoir contribuer à votre référentiel sur GitHub :


1. **Forker votre repo** Vous voudrez probablement que les gens _fork_ votre projet. La duplication signifie la création d’un réplica de votre référentiel sur leur profil GitHub.
1. **Cloner**. De là, ils cloneront le projet sur leur ordinateur local. 
1. **Créer une branche**. Vous voudrez leur demander de créer une _branche_ pour leur travail. 
1. **Concentrez leur changement sur un seul domaine**. Demandez aux contributeurs de concentrer leurs contributions sur une chose à la fois - de cette façon, les chances que vous puissiez _fusionner_ dans leur travail sont plus élevées. Imaginez qu’ils écrivent un correctif de bogue, ajoutent une nouvelle fonctionnalité et mettent à jour plusieurs tests - que se passe-t-il si vous le souhaitez ou si vous ne pouvez implémenter que 2 modifications sur 3 ou 1 sur 3?

✅ Imaginez une situation où les branches sont particulièrement essentielles à l’écriture et à l’expédition d’un bon code. À quels cas d’utilisation pouvez-vous penser ?

> Remarque, soyez le changement que vous voulez voir dans le monde et créez également des branches pour votre propre travail. Tous les commits que vous faites seront effectués sur la branche que vous avez actuellement "extraite". Utilisez `git status` pour voir de quelle branche il s’agit.

Passons en revue un flux de travail de contributeur. Supposons que le contributeur a déjà _forked_ et _cloné_ le référentiel afin qu’il ait un référentiel Git prêt à être travaillé, sur sa machine locale :

1. **Créer une branche**. Utilisez la commande `git branch` pour créer une branche qui contiendra les modifications qu’ils veulent contribuer:

   ```bash
   git branch [nom_branche]
   ```

1. **Passer à la branche de travail**. Basculez vers la branche spécifiée et mettez à jour le répertoire de travail avec `git checkout`:

   ```bash
   git checkout [nom_branche]
   ```

1. **Travailler**. À ce stade, vous souhaitez ajouter vos modifications. N’oubliez pas d’en parler à Git avec les commandes suivantes:

   ```bash
   git add .
   git commit -m " mes modifications "
   ```

   Assurez-vous de donner à votre engagement une bonne réputation, pour votre bien ainsi que pour le mainteneur du repo que vous aidez.

1. **Combinez votre travail avec la branche `main`**. À un moment donné, vous avez fini de travailler et vous voulez combiner votre travail avec celui de la branche `main`. La branche `main`" a peut-être changé entre-temps, alors assurez-vous de la mettre à jour au plus tard avec les commandes suivantes:

   ```bash
   git checkout principal
   git pull
   ```

   À ce stade, vous voulez vous assurer que tous les _conflits_, les situations où Git ne peut pas facilement _combiner_ les modifications se produisent dans votre branche de travail. Par conséquent, exécutez les commandes suivantes :

   ```bash
   git checkout [branch_name]
   git merge main
   ```

   Cela apportera tous les changements de `main` dans votre branche et j’espère que vous pourrez simplement continuer. Sinon, VS Code vous dira où Git est _confus_ et vous modifiez simplement les fichiers affectés pour dire quel contenu est le plus précis.

1. **Envoyez votre travail à GitHub**. L’envoi de votre travail à GitHub signifie deux choses. Pousser votre succursale à votre dépôt, puis ouvrir un PR, Pull Request.

   ```bash
   git push --set-upstream origin [nom_branche]
   ```

   La commande ci-dessus crée la branche sur votre référentiel duppliqué.

1. **Ouvrez une PR**. Ensuite, vous souhaitez ouvrir une PR. Pour ce faire, accédez au référentiel forké sur GitHub. Vous verrez une indication sur GitHub où il vous demande si vous souhaitez créer une nouvelle PR, vous cliquez dessus et vous êtes emmené vers une interface où vous pouvez changer le titre du message de validation, lui donner une description plus appropriée. Maintenant, le mainteneur du repo que vous avez forké verra ce PR et _croisons les doigts_ qu’il apprécieront et _fusionnera_ votre PR. Vous êtes maintenant un contributeur, yay :)

1. **Nettoyer**. Il est considéré comme une bonne pratique de _clean up_ après avoir fusionné avec succès un PR. Vous voulez nettoyer à la fois votre branche locale et la branche que vous avez poussée vers GitHub. Commençons par le supprimer localement avec la commande suivante: 

   ```bash
   git branch -d [nom_branche]
   ```

   Assurez-vous d’accéder à la page GitHub pour le référentiel duppliqué suivant et supprimez la branche distante que vous venez d’y pousser.

`Pull request` semble être un terme stupide parce que vous voulez vraiment pousser vos modifications au projet. Mais le responsable (propriétaire du projet) ou l’équipe principale doit prendre en compte vos modifications avant de la fusionner avec la branche " principale " du projet, vous demandez donc vraiment une décision de modification à un responsable.  

Une pull request est l’endroit idéal pour comparer et discuter des différences introduites sur une branche avec des révisions, des commentaires, des tests intégrés, etc. Une bonne pull request suit à peu près les mêmes règles qu’un message de validation. Vous pouvez ajouter une référence à un problème dans le suivi des problèmes, lorsque votre travail, par exemple, résout un problème. Cela se fait à l’aide d’un `#` suivi du numéro de votre problème. Par exemple `#97`.

🤞croisons les doigts pour que toutes les vérifications réussissent et que le ou les propriétaires du projet fusionnent vos modifications dans le projet🤞

Mettez à jour votre branche de travail locale actuelle avec tous les nouveaux commits de la branche distante correspondante sur GitHub :

`git pull`

## Comment contribuer à l’open source

Tout d’abord, trouvons un référentiel (ou **repo**) sur GitHub qui vous intéresse et auquel vous souhaitez apporter une modification. Vous voudrez copier son contenu sur votre machine.

✅ Un bon moyen de trouver des repos " conviviaux pour les débutants " est de [rechercher par la balise 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Copy a repo locally](../images/clone_repo.png)

Il existe plusieurs façons de copier du code. Une façon consiste à " cloner " le contenu du référentiel, en utilisant HTTPS, SSH ou en utilisant l’interface de ligne de commande GitHub CLI (Interface de ligne de commande). 

Ouvrez votre terminal et clonez le référentiel comme suit:
`git clone https://github.com/ProjectURL`

Pour travailler sur le projet, basculez vers le dossier de droite :
`cd ProjectURL`

Vous pouvez également ouvrir l’ensemble du projet à l’aide de [Codespaces](https://github.com/features/codespaces), de l’éditeur de code intégré / environnement de développement cloud de GitHub ou de [GitHub Desktop](https://desktop.github.com/).

Enfin, vous pouvez télécharger le code dans un dossier compressé. 

### Quelques choses plus intéressantes sur GitHub

Vous pouvez mettre en vedette, regarder et / ou " fork " n’importe quel référentiel public sur GitHub. Vous pouvez trouver vos référentiels étoilés dans le menu déroulant en haut à droite. C’est comme le bookmarking, mais pour le code. 

Les projets ont un suivi des problèmes, principalement sur GitHub dans l’onglet " Problèmes ", sauf indication contraire, où les gens discutent des problèmes liés au projet. Et l’onglet Pull Requests est l’endroit où les gens discutent et examinent les modifications en cours.

Les projets peuvent également avoir des discussions dans des forums, des listes de diffusion ou des canaux de chat tels que Slack, Discord ou IRC.

✅ Jetez un coup d’œil à votre nouveau référentiel GitHub et essayez quelques éléments, comme la modification des paramètres, l’ajout d’informations à votre référentiel et la création d’un projet (comme un tableau Kanban). Il y a beaucoup de choses que vous pouvez faire!

---

## 🚀 Challenge

Associez-vous à un ami pour travailler sur le code de l’autre. Créez un projet en collaboration, bifurquez du code, créez des branches et fusionnez les modifications.

## Quiz de validation des connaissances
[Quiz de validation des connaissances](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/4?loc=fr)

## Examen & Auto-apprentissage

En savoir plus sur [contribuer à un logiciel open source](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution). 

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Pratique, pratique, pratique. GitHub a d’excellents chemins d’apprentissage disponibles via [lab.github.com](https://lab.github.com/):

- [Première semaine sur GitHub](https://lab.github.com/githubtraining/first-week-on-github)

Vous trouverez également des laboratoires plus avancés. 

## Affectation

Complétez [la première semaine dans le laboratoire de formation GitHub](https://lab.github.com/githubtraining/first-week-on-github)
