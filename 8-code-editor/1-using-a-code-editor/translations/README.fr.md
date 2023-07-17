# Utilisation d'un éditeur de code

Cette leçon couvre les bases de l'utilisation de [VSCode.dev](https://vscode.dev), un éditeur de code pour le Web qui vous permet d'apporter des modifications à votre code et de contribuer à un projet sans installer quoi que ce soit sur votre ordinateur.

<!----
TODO : ajouter une image optionnelle
![Utilisation d'un éditeur de code](../../sketchnotes/webdev101-vscode-dev.png)
> Sketchnote par [Nom de l'auteur](https://example.com)
---->

<!---
## Quiz pré-lecture
[Quiz pré-lecture](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/3)
---->

## Objectifs d'apprentissage

Dans cette leçon, vous apprendrez à :

- Utiliser un éditeur de code dans un projet de code
- Suivre les modifications avec le contrôle de version
- Personnaliser l'éditeur pour le développement

### Prérequis

Avant de commencer, vous devez créer un compte sur [GitHub] (https://github.com). Rendez-vous sur [GtiHub](https://github.com/) et créez un compte si ce n'est pas déjà fait.

### Introduction

Un éditeur de code est un outil essentiel pour écrire des programmes et collaborer à des projets de codage existants. Une fois que vous aurez compris les bases d'un éditeur et que vous saurez comment utiliser ses fonctionnalités, vous serez en mesure de les appliquer lors de l'écriture de code.

## Démarrer avec VSCode.dev

[VSCode.dev] (https://vscode.dev) est un éditeur de code sur le Web. Vous n'avez pas besoin d'installer quoi que ce soit pour l'utiliser, comme pour ouvrir n'importe quel autre site Web. Pour commencer à utiliser l'éditeur, ouvrez le lien suivant : [https://vscode.dev](https://vscode.dev). Si vous n'êtes pas connecté à [GtiHub](https://github.com/), suivez les instructions pour vous connecter ou créez un nouveau compte, puis connectez-vous.

Une fois le site chargé, il devrait ressembler à cette image :

![VSCode.dev par défaut](../images/default-vscode-dev.png)

Il y a trois sections principales, en commençant par l'extrême gauche et en allant vers la droite :

1. La _barre d'activité_ qui comprend quelques icônes, comme la loupe 🔎, l'engrenage ⚙️ et quelques autres.
1. La barre d'acivité élargie qui s'affiche par défaut dans l'_Explorateur_, appelée _barre latérale_.
1. Et enfin, la zone de code à droite.

Cliquez sur chacune des icônes pour afficher un menu différent. Une fois que vous avez terminé, cliquez sur l'_Explorateur_ pour revenir à votre point de départ.

Lorsque vous commencez à créer du code ou à modifier du code existant, cela se passe dans la plus grande zone à droite. Vous utiliserez également cette zone pour visualiser le code existant, ce que vous ferez ensuite.


## Ouvrir un répertoire GitHub

La première chose dont vous aurez besoin est d'ouvrir un répertoire GitHub. Il existe plusieurs façons d'ouvrir un dépôt. Dans cette section, vous verrez deux façons différentes d'ouvrir un dépôt afin de pouvoir commencer à travailler sur les changements.

### 1. Avec l'éditeur

Utilisez l'éditeur lui-même pour ouvrir un répertoire distant. Si vous allez sur [VSCode.dev](https://vscode.dev), vous verrez un bouton _"Open Remote Repository"_ :

![Ouvrir un répertoire distant](../images/open-remote-repository.png)

Vous pouvez également utiliser la palette de commande. La palette de commande est une boîte de saisie dans laquelle vous pouvez taper n'importe quel mot faisant partie d'une commande ou d'une action pour trouver la bonne commande à exécuter. Utilisez le menu en haut à gauche, puis sélectionnez _Visualisation_, et ensuite choisissez _Palette de commande_, ou en utilisant le raccourci clavier suivant : Ctrl-Shift-P (sur MacOS, ce serait Command-Shift-P).

![Menu Palette](../images/palette-menu.png)

Une fois le menu ouvert, tapez _open remote repository_, puis sélectionnez la première option. Plusieurs dépôts dont vous faites partie ou que vous avez ouverts récemment s'afficheront. Vous pouvez également utiliser une URL GitHub complète pour en sélectionner un. Utilisez l'URL suivante et collez-la dans le champ :

```
https://github.com/microsoft/Web-Dev-For-Beginners
```

✅ Si vous réussissez, vous verrez tous les fichiers de ce répertoire chargés dans l'éditeur de texte.


### 2. Utilisation de l'URL

Vous pouvez également utiliser une URL directement pour charger un répertoire. Par exemple, l'URL complète du dépôt actuel est [https://github.com/microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners), mais vous pouvez remplacer le domaine GitHub par `VSCode.dev/github` et charger le répertoire directement. L'URL résultante serait [https://vscode.dev/github/microsoft/Web-Dev-For-Beginners](https://vscode.dev/github/microsoft/Web-Dev-For-Beginners).


## Modifier les fichiers
Une fois que vous avez ouvert le répertoire sur le navigateur/ vscode.dev, la prochaine étape serait d'effectuer des mises à jour ou des modifications du projet.

### 1. Créer un nouveau fichier

Vous pouvez soit créer un fichier dans un dossier existant, soit le créer dans le répertoire/dossier racine. Pour créer un nouveau fichier, ouvrez un emplacement/répertoire dans lequel vous souhaitez que le fichier soit enregistré et sélectionnez l'icône _'Nouveau fichier ...'_ dans la barre d'activité _(gauche)_, donnez-lui un nom et appuyez sur Entrée.

![Créer un nouveau fichier](../images/create-new-file.png)

### 2. Modifier et enregistrer un fichier sur le répertoire

L'utilisation de vscode.dev est utile lorsque vous souhaitez effectuer des mises à jour rapides de votre projet sans avoir à charger un logiciel localement.
Pour mettre à jour votre code, cliquez sur l'icône "Explorer", également située dans la barre d'activités, pour afficher les fichiers et les dossiers du répertoire.
Sélectionnez un fichier pour l'ouvrir dans la zone de code, effectuez vos modifications et enregistrez.

![Modifier un fichier](../images/edit-a-file.png)

Une fois que vous avez terminé la mise à jour de votre projet, sélectionnez l'icône _`source control`_ qui contient toutes les nouvelles modifications que vous avez apportées à votre répertoire.

Pour visualiser les modifications que vous avez apportées à votre projet, sélectionnez le(s) fichier(s) dans le dossier `Changes` dans la barre d'activité étendue. Cela ouvrira un "arbre de travail" pour vous permettre de voir visuellement les modifications que vous avez apportées au fichier. Le rouge indique une ommission dans le projet, tandis que le vert signifie un ajout.

![Voir les modifications](../images/working-tree.png)

Si vous êtes satisfait des changements que vous avez effectués, survolez le dossier `Changes` et cliquez sur le bouton `+` pour mettre en scène les changements. La mise en scène signifie simplement que vous préparez vos modifications pour les livrer sur GitHub.

Si toutefois vous n'êtes pas à l'aise avec certains changements et que vous voulez les abandonner, survolez le dossier "Changes" et sélectionnez l'icône "annuler".

Ensuite, tapez un `message de validation` _(Une description de la modification que vous avez apportée au projet)_, cliquez sur l'icône `check` pour valider et pousser vos modifications.

Une fois que vous avez terminé de travailler sur votre projet, sélectionnez l'icône de menu "hamburger" en haut à gauche pour revenir au répertoire sur github.com.

![Stage & commit changes](../images/edit-vscode.dev.gif)

## Utilisation des extensions
L'installation d'extensions sur VSCode vous permet d'ajouter de nouvelles fonctionnalités et des options d'environnement de développement personnalisé sur votre éditeur afin d'améliorer votre flux de travail de développement. Ces extensions vous aident également à ajouter le support de plusieurs langages de programmation et sont souvent soit des extensions génériques, soit des extensions basées sur le langage.

Pour parcourir la liste de toutes les extensions disponibles, cliquez sur l'icône _`Extensions`_ de la barre d'activités et commencez à taper le nom de l'extension dans le champ de texte intitulé _'Search Extensions in Marketplace'_.
Vous verrez une liste d'extensions, chacune contenant **le nom de l'extension, le nom de l'éditeur, une description d'une phrase, le nombre de téléchargements** et **un classement par étoiles**.

![Détails de l'extension](../images/extension-details.png)

Vous pouvez également voir toutes les extensions précédemment installées en développant le dossier _`Installed`_, les extensions populaires utilisées par la plupart des développeurs dans le dossier _`Popular`_ et les extensions recommandées pour vous par les utilisateurs du même espace de travail ou basées sur vos fichiers récemment ouverts dans le dossier _`recommended`_.

![Voir les extensions](../images/extensions.png)


### 1. Installer des extensions
Pour installer une extension, tapez le nom de l'extension dans le champ de recherche et cliquez dessus pour afficher des informations supplémentaires sur l'extension dans la zone de code une fois qu'elle apparaît dans la barre d'activités étendue.

Vous pouvez soit cliquer sur le _bouton d'installation bleu_ de la barre d'activité élargie pour l'installer, soit utiliser le bouton d'installation qui apparaît dans la zone de code une fois que vous avez sélectionné l'extension pour charger des informations supplémentaires.

![Installer les extensions](../images/install-extension.gif)

### 2. Personnaliser les extensions
Après avoir installé l'extension, vous pouvez avoir besoin de modifier son comportement et de la personnaliser en fonction de vos préférences. Pour ce faire, sélectionnez l'icône Extensions, et cette fois, votre extension apparaîtra dans le dossier _Installed_, cliquez sur l'icône _**Gear**_ et naviguez jusqu'à _Extensions Setting_.

![Modifier les paramètres de l'extension](../images/extension-settings.png)

### 3. Gérer les extensions
Après avoir installé et utilisé votre extension, vscode.dev offre des options pour gérer votre extension en fonction de différents besoins. Par exemple, vous pouvez choisir de :
- **Désactiver:** _(Vous désactivez temporairement une extension lorsque vous n'en avez plus besoin mais ne souhaitez pas la désinstaller complètement)_.

    Sélectionnez l'extension installée dans la barre d'activités étendue > cliquez sur l'icône en forme d'engrenage > sélectionnez "Désactiver" ou "Désactiver (espace de travail)". **OU** Ouvrez l'extension dans la zone de code et cliquez sur le bouton bleu Désactiver.

   
- **Désinstaller:** Sélectionnez l'extension installée dans la barre d'activité étendue > cliquez sur l'icône en forme d'engrenage > sélectionnez "Désinstaller" **OU** Ouvrez l'extension dans la zone de code et cliquez sur le bouton bleu de désinstallation.



---

## Travail à faire
[Créer un site web de CV en utilisant vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)


<!----
## Quiz post-conférence
[Quiz post-lecture](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/4)
---->

## Révision et étude personnelle

En savoir plus sur [VSCode.dev] (https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) et sur certaines de ses autres fonctionnalités.