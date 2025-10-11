<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ea65b75e488aa33a3cc5cb1c6c3f047a",
  "translation_date": "2025-10-03T13:35:19+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "fr"
}
-->
# Introduction à GitHub

Cette leçon couvre les bases de GitHub, une plateforme pour héberger et gérer les modifications de votre code.

![Intro à GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.fr.png)
> Sketchnote par [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz avant la leçon
[Quiz avant la leçon](https://ff-quizzes.netlify.app)

## Introduction

Dans cette leçon, nous aborderons :

- le suivi du travail effectué sur votre machine
- la collaboration sur des projets avec d'autres personnes
- comment contribuer à des logiciels open source

### Prérequis

Avant de commencer, vérifiez si Git est installé. Dans le terminal, tapez :  
`git --version`

Si Git n'est pas installé, [téléchargez Git](https://git-scm.com/downloads). Ensuite, configurez votre profil Git local dans le terminal :
* `git config --global user.name "votre-nom"`
* `git config --global user.email "votre-email"`

Pour vérifier si Git est déjà configuré, vous pouvez taper :  
`git config --list`

Vous aurez également besoin d'un compte GitHub, d'un éditeur de code (comme Visual Studio Code), et d'ouvrir votre terminal (ou : invite de commande).

Rendez-vous sur [github.com](https://github.com/) pour créer un compte si ce n'est pas déjà fait, ou connectez-vous et complétez votre profil.

✅ GitHub n'est pas le seul dépôt de code au monde ; il en existe d'autres, mais GitHub est le plus connu.

### Préparation

Vous aurez besoin d'un dossier contenant un projet de code sur votre machine locale (ordinateur portable ou PC), ainsi que d'un dépôt public sur GitHub, qui servira d'exemple pour apprendre à contribuer aux projets des autres.

---

## Gestion du code

Disons que vous avez un dossier localement avec un projet de code et que vous souhaitez commencer à suivre votre progression en utilisant git - le système de contrôle de version. Certains comparent l'utilisation de git à écrire une lettre d'amour à votre futur vous-même. En lisant vos messages de commit des jours, semaines ou mois plus tard, vous pourrez vous rappeler pourquoi vous avez pris une décision ou "revenir en arrière" sur une modification - à condition d'écrire de bons "messages de commit".

### Tâche : Créer un dépôt et enregistrer du code  

> Regardez la vidéo  
> 
> [![Vidéo sur les bases de Git et GitHub](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **Créer un dépôt sur GitHub**. Sur GitHub.com, dans l'onglet des dépôts ou depuis la barre de navigation en haut à droite, trouvez le bouton **nouveau dépôt**.

   1. Donnez un nom à votre dépôt (dossier).
   1. Sélectionnez **créer un dépôt**.

1. **Naviguer vers votre dossier de travail**. Dans votre terminal, passez au dossier (également appelé répertoire) que vous souhaitez commencer à suivre. Tapez :

   ```bash
   cd [name of your folder]
   ```

1. **Initialiser un dépôt git**. Dans votre projet, tapez :

   ```bash
   git init
   ```

1. **Vérifier le statut**. Pour vérifier le statut de votre dépôt, tapez :

   ```bash
   git status
   ```

   La sortie peut ressembler à ceci :

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   En général, une commande `git status` vous indique des informations comme les fichiers prêts à être _enregistrés_ dans le dépôt ou ceux qui ont des modifications que vous pourriez vouloir conserver.

1. **Ajouter tous les fichiers au suivi**  
   Cela s'appelle également mettre en scène les fichiers / ajouter des fichiers à la zone de staging.

   ```bash
   git add .
   ```

   L'argument `git add` suivi de `.` indique que tous vos fichiers et modifications sont prêts à être suivis.

1. **Ajouter des fichiers sélectionnés au suivi**

   ```bash
   git add [file or folder name]
   ```

   Cela permet d'ajouter uniquement des fichiers sélectionnés à la zone de staging lorsque vous ne souhaitez pas enregistrer tous les fichiers en une seule fois.

1. **Retirer tous les fichiers de la zone de staging**

   ```bash
   git reset
   ```

   Cette commande permet de retirer tous les fichiers de la zone de staging en une seule fois.

1. **Retirer un fichier particulier de la zone de staging**

   ```bash
   git reset [file or folder name]
   ```

   Cette commande permet de retirer uniquement un fichier particulier de la zone de staging que vous ne souhaitez pas inclure dans le prochain commit.

1. **Enregistrer votre travail**. À ce stade, vous avez ajouté les fichiers à une zone appelée _zone de staging_. Un endroit où Git suit vos fichiers. Pour rendre la modification permanente, vous devez _commiter_ les fichiers. Pour ce faire, vous créez un _commit_ avec la commande `git commit`. Un _commit_ représente un point de sauvegarde dans l'historique de votre dépôt. Tapez la commande suivante pour créer un _commit_ :

   ```bash
   git commit -m "first commit"
   ```

   Cela enregistre tous vos fichiers, en ajoutant le message "premier commit". Pour les futurs messages de commit, vous voudrez être plus descriptif dans votre description pour indiquer le type de modification que vous avez apportée.

1. **Connecter votre dépôt Git local à GitHub**. Un dépôt Git est utile sur votre machine, mais à un moment donné, vous voudrez sauvegarder vos fichiers quelque part et inviter d'autres personnes à travailler avec vous sur votre dépôt. Un excellent endroit pour cela est GitHub. Rappelez-vous que nous avons déjà créé un dépôt sur GitHub, donc la seule chose à faire est de connecter notre dépôt Git local à GitHub. La commande `git remote add` fera cela. Tapez la commande suivante :

   > Remarque : avant de taper la commande, allez sur la page de votre dépôt GitHub pour trouver l'URL du dépôt. Vous l'utiliserez dans la commande ci-dessous. Remplacez ```https://github.com/username/repository_name.git``` par votre URL GitHub.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Cela crée une _connexion distante_, appelée "origin", pointant vers le dépôt GitHub que vous avez créé précédemment.

1. **Envoyer les fichiers locaux à GitHub**. Jusqu'à présent, vous avez créé une _connexion_ entre le dépôt local et le dépôt GitHub. Envoyons ces fichiers à GitHub avec la commande suivante `git push`, comme suit :  
   
   > Remarque : le nom de votre branche par défaut peut être différent de ```main```.

   ```bash
   git push -u origin main
   ```

   Cela envoie vos commits dans votre branche "main" à GitHub. L'établissement de la branche `upstream` en incluant `-u` dans la commande crée un lien entre votre branche locale et la branche distante, ce qui vous permet d'utiliser simplement git push ou git pull sans spécifier le nom de la branche à l'avenir. Git utilisera automatiquement la branche upstream et vous n'aurez pas besoin de spécifier le nom de la branche explicitement dans les commandes futures.

2. **Ajouter d'autres modifications**. Si vous souhaitez continuer à apporter des modifications et les envoyer à GitHub, vous n'aurez besoin que des trois commandes suivantes :

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Conseil : Vous pourriez également adopter un fichier `.gitignore` pour empêcher les fichiers que vous ne souhaitez pas suivre d'apparaître sur GitHub - comme ce fichier de notes que vous stockez dans le même dossier mais qui n'a pas sa place dans un dépôt public. Vous pouvez trouver des modèles de fichiers `.gitignore` sur [.gitignore templates](https://github.com/github/gitignore).

#### Messages de commit

Un excellent sujet de message de commit complète la phrase suivante :  
Si appliqué, ce commit fera <votre sujet ici>

Pour le sujet, utilisez l'impératif au présent : "modifier" et non "modifié" ni "modifications".  
Comme pour le sujet, dans le corps (optionnel), utilisez également l'impératif au présent. Le corps doit inclure la motivation du changement et la comparer au comportement précédent. Vous expliquez le `pourquoi`, pas le `comment`.

✅ Prenez quelques minutes pour explorer GitHub. Pouvez-vous trouver un message de commit vraiment génial ? Pouvez-vous en trouver un très minimaliste ? Quelles informations pensez-vous être les plus importantes et utiles à transmettre dans un message de commit ?

### Tâche : Collaborer

La principale raison de mettre des choses sur GitHub est de rendre possible la collaboration avec d'autres développeurs.

## Travailler sur des projets avec d'autres

> Regardez la vidéo  
>
> [![Vidéo sur les bases de Git et GitHub](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Dans votre dépôt, naviguez vers `Insights > Community` pour voir comment votre projet se compare aux normes communautaires recommandées.

   Voici quelques éléments qui peuvent améliorer votre dépôt GitHub :
   - **Description**. Avez-vous ajouté une description pour votre projet ?
   - **README**. Avez-vous ajouté un README ? GitHub fournit des conseils pour rédiger un [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Guide de contribution**. Votre projet dispose-t-il de [directives de contribution](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon) ?
   - **Code de conduite**. Un [Code de conduite](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/) ?
   - **Licence**. Peut-être le plus important, une [licence](https://docs.github.com/articles/adding-a-license-to-a-repository/) ?

Tous ces éléments seront utiles pour intégrer de nouveaux membres dans l'équipe. Ce sont généralement les choses que les nouveaux contributeurs regardent avant même de consulter votre code, pour savoir si votre projet est le bon endroit où investir leur temps.

✅ Les fichiers README, bien qu'ils prennent du temps à préparer, sont souvent négligés par les mainteneurs occupés. Pouvez-vous trouver un exemple particulièrement descriptif ? Remarque : il existe des [outils pour créer de bons README](https://www.makeareadme.com/) que vous pourriez essayer.

### Tâche : Fusionner du code

Les documents de contribution aident les gens à contribuer au projet. Ils expliquent quels types de contributions vous recherchez et comment le processus fonctionne. Les contributeurs devront suivre une série d'étapes pour pouvoir contribuer à votre dépôt sur GitHub :

1. **Forker votre dépôt**. Vous voudrez probablement que les gens _forkent_ votre projet. Forker signifie créer une réplique de votre dépôt sur leur profil GitHub.
1. **Cloner**. À partir de là, ils cloneront le projet sur leur machine locale.
1. **Créer une branche**. Vous voudrez leur demander de créer une _branche_ pour leur travail.
1. **Concentrer leur modification sur une seule zone**. Demandez aux contributeurs de concentrer leurs contributions sur une seule chose à la fois - de cette façon, les chances que vous puissiez _fusionner_ leur travail sont plus élevées. Imaginez qu'ils corrigent un bug, ajoutent une nouvelle fonctionnalité et mettent à jour plusieurs tests - que faire si vous voulez, ou pouvez seulement implémenter 2 sur 3, ou 1 sur 3 modifications ?

✅ Imaginez une situation où les branches sont particulièrement critiques pour écrire et livrer du bon code. À quels cas d'utilisation pouvez-vous penser ?

> Remarque : soyez le changement que vous voulez voir dans le monde, et créez des branches pour votre propre travail également. Tous les commits que vous effectuez seront faits sur la branche sur laquelle vous êtes actuellement "checkout". Utilisez `git status` pour voir sur quelle branche vous êtes.

Passons en revue un workflow de contributeur. Supposons que le contributeur ait déjà _forké_ et _cloné_ le dépôt, de sorte qu'il dispose d'un dépôt Git prêt à être travaillé sur sa machine locale :

1. **Créer une branche**. Utilisez la commande `git branch` pour créer une branche qui contiendra les modifications qu'ils souhaitent contribuer :

   ```bash
   git branch [branch-name]
   ```

1. **Passer à la branche de travail**. Passez à la branche spécifiée et mettez à jour le répertoire de travail avec `git switch` :

   ```bash
   git switch [branch-name]
   ```

1. **Travailler**. À ce stade, vous voulez ajouter vos modifications. N'oubliez pas de les signaler à Git avec les commandes suivantes :

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Assurez-vous de donner un bon nom à votre commit, pour votre propre intérêt ainsi que pour le mainteneur du dépôt que vous aidez.

1. **Combiner votre travail avec la branche `main`**. À un moment donné, vous avez terminé votre travail et vous souhaitez le combiner avec celui de la branche `main`. La branche `main` peut avoir changé entre-temps, alors assurez-vous de la mettre à jour avec les commandes suivantes :

   ```bash
   git switch main
   git pull
   ```

   À ce stade, vous voulez vous assurer que tous les _conflits_, situations où Git ne peut pas facilement _combiner_ les modifications, se produisent dans votre branche de travail. Par conséquent, exécutez les commandes suivantes :

   ```bash
   git switch [branch_name]
   git merge main
   ```

   La commande `git merge main` intégrera toutes les modifications de `main` dans votre branche. Espérons que vous pourrez simplement continuer. Sinon, VS Code vous indiquera où Git est _confus_ et vous modifierez les fichiers concernés pour indiquer quel contenu est le plus précis.

   Pour passer à une autre branche, utilisez la commande moderne `git switch` :
   ```bash
   git switch [branch_name]


1. **Envoyer votre travail à GitHub**. Envoyer votre travail à GitHub signifie deux choses : pousser votre branche vers votre dépôt et ensuite ouvrir une PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   La commande ci-dessus crée la branche sur votre dépôt forké.
1. **Ouvrir une PR**. Ensuite, vous devez ouvrir une PR. Pour cela, naviguez vers le dépôt forké sur GitHub. Vous verrez une indication sur GitHub vous demandant si vous souhaitez créer une nouvelle PR. Cliquez dessus et vous serez dirigé vers une interface où vous pourrez modifier le titre du message de commit et fournir une description plus appropriée. Maintenant, le mainteneur du dépôt que vous avez forké verra cette PR et _croisons les doigts_ qu'il l'apprécie et _fusionne_ votre PR. Vous êtes maintenant un contributeur, yay :)

1. **Nettoyer**. Il est considéré comme une bonne pratique de _nettoyer_ après avoir réussi à fusionner une PR. Vous devez nettoyer à la fois votre branche locale et la branche que vous avez poussée sur GitHub. Tout d'abord, supprimons-la localement avec la commande suivante :

   ```bash
   git branch -d [branch-name]
   ```
  
   Assurez-vous ensuite de vous rendre sur la page GitHub du dépôt forké et de supprimer la branche distante que vous venez de pousser.

`Pull request` peut sembler être un terme étrange, car en réalité, vous souhaitez pousser vos modifications dans le projet. Mais le mainteneur (propriétaire du projet) ou l'équipe principale doit examiner vos modifications avant de les fusionner avec la branche "principale" du projet. Vous demandez donc réellement une décision de modification à un mainteneur.

Une pull request est l'endroit où comparer et discuter des différences introduites sur une branche avec des revues, des commentaires, des tests intégrés, et plus encore. Une bonne pull request suit à peu près les mêmes règles qu'un message de commit. Vous pouvez ajouter une référence à un problème dans le gestionnaire de problèmes, par exemple lorsque votre travail résout un problème. Cela se fait en utilisant un `#` suivi du numéro de votre problème. Par exemple `#97`.

🤞Croisons les doigts pour que tous les contrôles passent et que le(s) propriétaire(s) du projet fusionne(nt) vos modifications dans le projet🤞

Mettez à jour votre branche de travail locale actuelle avec tous les nouveaux commits de la branche distante correspondante sur GitHub :

`git pull`

## Comment contribuer à l'open source

Tout d'abord, trouvons un dépôt (ou **repo**) sur GitHub qui vous intéresse et auquel vous aimeriez apporter une modification. Vous voudrez copier son contenu sur votre machine.

✅ Une bonne façon de trouver des dépôts 'conviviaux pour les débutants' est de [rechercher par le tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Copier un dépôt localement](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.fr.png)

Il existe plusieurs façons de copier du code. Une méthode consiste à "cloner" le contenu du dépôt, en utilisant HTTPS, SSH ou l'interface en ligne de commande GitHub CLI.

Ouvrez votre terminal et clonez le dépôt comme suit :  
`git clone https://github.com/ProjectURL`

Pour travailler sur le projet, passez au bon dossier :  
`cd ProjectURL`

Vous pouvez également ouvrir l'intégralité du projet en utilisant [Codespaces](https://github.com/features/codespaces), l'éditeur de code intégré / environnement de développement cloud de GitHub, ou [GitHub Desktop](https://desktop.github.com/).

Enfin, vous pouvez télécharger le code dans un dossier compressé.

### Quelques informations intéressantes sur GitHub

Vous pouvez étoiler, surveiller et/ou "forker" tout dépôt public sur GitHub. Vous pouvez retrouver vos dépôts étoilés dans le menu déroulant en haut à droite. C'est comme ajouter un marque-page, mais pour du code.

Les projets disposent d'un gestionnaire de problèmes, généralement sur GitHub dans l'onglet "Issues", sauf indication contraire, où les gens discutent des problèmes liés au projet. Et l'onglet Pull Requests est l'endroit où les gens discutent et examinent les modifications en cours.

Les projets peuvent également avoir des discussions dans des forums, des listes de diffusion ou des canaux de chat comme Slack, Discord ou IRC.

✅ Explorez votre nouveau dépôt GitHub et essayez quelques fonctionnalités, comme modifier les paramètres, ajouter des informations à votre dépôt, et créer un projet (comme un tableau Kanban). Il y a beaucoup de choses à découvrir !

---

## 🚀 Défi 

Associez-vous à un ami pour travailler sur le code de chacun. Créez un projet collaboratif, forkez du code, créez des branches et fusionnez des modifications.

## Quiz post-lecture  
[Quiz post-lecture](https://ff-quizzes.netlify.app/web/en/)

## Révision & Auto-apprentissage  

Lisez davantage sur [comment contribuer à un logiciel open source](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Cheatsheet Git](https://training.github.com/downloads/github-git-cheat-sheet/).

Pratiquez, pratiquez, pratiquez. GitHub propose d'excellents parcours d'apprentissage via [skills.github.com](https://skills.github.com) :

- [Première semaine sur GitHub](https://skills.github.com/#first-week-on-github)

Vous y trouverez également des cours plus avancés.

## Devoir  

Complétez [le cours Première semaine sur GitHub](https://skills.github.com/#first-week-on-github)

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.