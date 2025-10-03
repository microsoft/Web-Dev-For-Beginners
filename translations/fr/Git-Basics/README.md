<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:44:16+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "fr"
}
-->
## Les bases de GIT pour les débutants en développement web 👶

## Qu'est-ce que `Git` ?
1. Git est un système de contrôle de version distribué.  
2. L'ensemble du code et de l'historique est disponible sur l'ordinateur de chaque développeur, ce qui facilite la création de branches et les fusions.  
3. Il est utilisé comme système de contrôle de version (VCS) pour suivre les modifications des fichiers informatiques.  

* Contrôle de version distribué  
* Coordonne le travail entre plusieurs développeurs  
* Qui a fait quelles modifications et quand  
* Revenir en arrière à tout moment  
* Dépôts locaux et distants  

## CONCEPTS DE GIT  
* Suivi de l'historique du code  
* Prend des "instantanés" de vos fichiers  
* Vous décidez quand prendre un instantané en effectuant un "commit"  
* Vous pouvez consulter n'importe quel instantané à tout moment  
* Vous pouvez préparer les fichiers avant de les valider  

### Différence entre Git et GitHub  

| Git | GitHub |  
| ------- | ----------- |  
| Git est un logiciel | GitHub est un service cloud |  
| Git est installé localement sur le système | GitHub est hébergé sur le web |  
| C'est un outil en ligne de commande | C'est une interface graphique |  
| Git est maintenu par Linux | GitHub est maintenu par Microsoft |  
| Il est axé sur le contrôle de version et le partage de code | Il est axé sur l'hébergement centralisé de code source |  
| Git est sous licence open-source | GitHub propose un niveau gratuit et un niveau payant |  
| Git a été lancé en 2005 | GitHub a été lancé en 2008 |  

## Installation de GIT  
* Linux (Debian)  
    `$sudo apt-get install git`  
* Linux (Fedora)  
    `$sudo yum install git`  
* [Télécharger](http://git-scm.com/download/mac) pour Mac  
* [Télécharger](http://git-scm.com/download/win) pour Windows  

### Étapes du processus d'installation :  
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>  
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>  
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>  
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>  
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>  
6. Ensuite, continuez en cliquant sur Suivant > Suivant > Suivant > <b>Installer</b>  
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>  

### Après l'installation, nous devons configurer Git en utilisant Git Bash  
1. `git config --global user.name 'VotreNom'`  
2. `git config --global user.email 'VotreEmail'`  
___  

## Commandes Git  
___  

### Obtenir et créer des projets  

| Commande | Description |  
| ------- | ----------- |  
| `git init` | Initialiser un dépôt Git local |  
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Créer une copie locale d'un dépôt distant |  

### Instantanés de base  

| Commande | Description |  
| ------- | ----------- |  
| `git status` | Vérifier le statut |  
| `git add [file-name.txt]` | Ajouter un fichier à la zone de staging |  
| `git add -A` | Ajouter tous les fichiers nouveaux et modifiés à la zone de staging |  
| `git commit -m "[commit message]"` | Valider les modifications |  
| `git rm -r [file-name.txt]` | Supprimer un fichier (ou dossier) |  
| `git push` | Envoyer vers le dépôt distant |  
| `git pull` | Récupérer les dernières modifications du dépôt distant |  

### Branches et fusions  

| Commande | Description |  
| ------- | ----------- |  
| `git branch` | Lister les branches (l'astérisque indique la branche actuelle) |  
| `git branch -a` | Lister toutes les branches (locales et distantes) |  
| `git branch [branch name]` | Créer une nouvelle branche |  
| `git branch -D [branch name]` | Supprimer une branche |  
| `git push origin --delete [branch name]` | Supprimer une branche distante |  
| `git checkout -b [branch name]` | Créer une nouvelle branche et y basculer |  
| `git checkout -b [branch name] origin/[branch name]` | Cloner une branche distante et y basculer |  
| `git branch -m [old branch name] [new branch name]` | Renommer une branche locale |  
| `git checkout [branch name]` | Basculer vers une branche |  
| `git checkout -` | Basculer vers la dernière branche consultée |  
| `git checkout -- [file-name.txt]` | Annuler les modifications d'un fichier |  
| `git merge [branch name]` | Fusionner une branche dans la branche active |  
| `git merge [source branch] [target branch]` | Fusionner une branche dans une branche cible |  
| `git stash` | Mettre de côté les modifications dans un répertoire de travail sale |  
| `git stash clear` | Supprimer toutes les entrées mises de côté |  

### Partage et mise à jour des projets  

| Commande | Description |  
| ------- | ----------- |  
| `git push origin [branch name]` | Envoyer une branche vers votre dépôt distant |  
| `git push -u origin [branch name]` | Envoyer les modifications vers le dépôt distant (et mémoriser la branche) |  
| `git push` | Envoyer les modifications vers le dépôt distant (branche mémorisée) |  
| `git push origin --delete [branch name]` | Supprimer une branche distante |  
| `git pull` | Mettre à jour le dépôt local avec le dernier commit |  
| `git pull origin [branch name]` | Récupérer les modifications du dépôt distant |  
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Ajouter un dépôt distant |  
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Définir la branche d'origine d'un dépôt sur SSH |  

### Inspection et comparaison  

| Commande | Description |  
| ------- | ----------- |  
| `git log` | Voir les modifications |  
| `git log --summary` | Voir les modifications (détaillées) |  
| `git log --oneline` | Voir les modifications (brièvement) |  
| `git diff [source branch] [target branch]` | Prévisualiser les modifications avant de fusionner |  

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.