<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T08:24:29+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "fr"
}
-->
***

# Utiliser un éditeur de code : Maîtriser [VSCode.dev](https://vscode.dev)

**Bienvenue !**  
Cette leçon vous guide des bases à l'utilisation avancée de [VSCode.dev](https://vscode.dev), un puissant éditeur de code basé sur le web. Vous apprendrez à éditer du code avec assurance, gérer des projets, suivre les modifications, installer des extensions et collaborer comme un pro—tout cela depuis votre navigateur, sans aucune installation requise.

***

## Objectifs d'apprentissage

À la fin de cette leçon, vous serez capable de :

- Utiliser efficacement un éditeur de code pour n'importe quel projet, où que vous soyez
- Suivre votre travail de manière fluide grâce au contrôle de version intégré
- Personnaliser et optimiser votre flux de développement avec des personnalisations et extensions de l'éditeur

***

## Prérequis

Pour commencer, **inscrivez-vous gratuitement sur [GitHub](https://github.com)**, ce qui vous permettra de gérer des dépôts de code et de collaborer à l'échelle mondiale. Si vous n'avez pas encore de compte, [créez-en un ici](https://github.com/).

***

## Pourquoi utiliser un éditeur de code basé sur le web ?

Un **éditeur de code** comme VSCode.dev est votre centre de commande pour écrire, éditer et gérer du code. Avec une interface intuitive, de nombreuses fonctionnalités et un accès immédiat via le navigateur, vous pouvez :

- Éditer des projets sur n'importe quel appareil
- Éviter les tracas liés aux installations
- Collaborer et contribuer instantanément

Une fois à l'aise avec VSCode.dev, vous serez prêt à relever des défis de codage depuis n'importe où, à tout moment.

***

## Premiers pas avec VSCode.dev

Accédez à **[VSCode.dev](https://vscode.dev)**—pas d'installation, pas de téléchargement. En vous connectant avec GitHub, vous débloquez un accès complet, y compris la synchronisation de vos paramètres, extensions et dépôts. Si demandé, connectez votre compte GitHub.

Après le chargement, votre espace de travail ressemblera à ceci :

![VSCode.dev par défaut](../images/default-vscode-dev trois sections principales de gauche à droite :
- **Barre d'activités :** Les icônes telles que 🔎 (Recherche), ⚙️ (Paramètres), fichiers, contrôle de source, etc.
- **Barre latérale :** Change de contexte selon l'icône sélectionnée dans la barre d'activités (par défaut *Explorateur* pour afficher les fichiers).
- **Zone d'édition/code :** La plus grande section à droite—où vous éditez et visualisez le code.

Cliquez sur les icônes pour explorer les fonctionnalités, mais revenez à l'_Explorateur_ pour garder votre place.

***

## Ouvrir un dépôt GitHub

### Méthode 1 : Depuis l'éditeur

1. Allez sur [VSCode.dev](https://vscode.dev). Cliquez sur **"Ouvrir un dépôt distant."**

   ![Ouvrir un dépôt distant](../../../../8-code-editor/images/open-remote-repository utilisez la _Palette de commandes_ (Ctrl-Shift-P, ou Cmd-Shift-P sur Mac).

   ![Menu de la palette](../images/palette-menu.pngouvrir un dépôt distant.”
   - Sélectionnez l'option.
   - Collez l'URL de votre dépôt GitHub (par ex., `https://github.com/microsoft/Web-Dev-For-Beginners`) et appuyez sur Entrée.

Si tout se passe bien, vous verrez le projet entier chargé et prêt à être édité !

***

### Méthode 2 : Instantanément via l'URL

Transformez n'importe quelle URL de dépôt GitHub pour l'ouvrir directement dans VSCode.dev en remplaçant `github.com` par `vscode.dev/github`.  
Exemple :

- GitHub : `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev : `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Cette fonctionnalité accélère l'accès rapide à n'importe quel projet.

***

## Éditer des fichiers dans votre projet

Une fois votre dépôt ouvert, vous pouvez :

### 1. **Créer un nouveau fichier**
- Dans la barre latérale *Explorateur*, naviguez vers le dossier souhaité ou utilisez la racine.
- Cliquez sur l'icône _‘Nouveau fichier ...’_.
- Nommez votre fichier, appuyez sur **Entrée**, et votre fichier apparaît instantanément.

![Créer un nouveau fichier](../images/create-new-file 2. **Éditer et enregistrer des fichiers**

- Cliquez sur un fichier dans l'*Explorateur* pour l'ouvrir dans la zone de code.
- Faites vos modifications selon vos besoins.
- VSCode.dev enregistre automatiquement vos modifications, mais vous pouvez appuyer sur Ctrl+S pour enregistrer manuellement.

![Éditer un fichier](../images/edit-a-file.png. **Suivre et valider les modifications avec le contrôle de version**

VSCode.dev intègre le contrôle de version **Git** !

- Cliquez sur l'icône _'Contrôle de source'_ pour voir toutes les modifications effectuées.
- Les fichiers dans le dossier `Changes` montrent les ajouts (en vert) et les suppressions (en rouge).  
  ![Voir les modifications](../images/working-tree.png modifications en cliquant sur le `+` à côté des fichiers pour les préparer à la validation.
- **Annulez** les modifications non souhaitées en cliquant sur l'icône d'annulation.
- Tapez un message clair de validation, puis cliquez sur la coche pour valider et pousser.

Pour revenir à votre dépôt sur GitHub, sélectionnez le menu hamburger en haut à gauche.

![Valider les modifications](../images/edit-vscode.dev avec des extensions

Les extensions vous permettent d'ajouter des langages, des thèmes, des débogueurs et des outils de productivité à VSCode.dev—rendant votre vie de développeur plus facile et plus agréable.

### Parcourir et gérer les extensions

- Cliquez sur l'**icône Extensions** dans la barre d'activités.
- Recherchez une extension dans la boîte _'Rechercher des extensions dans le Marketplace'_.

  ![Détails des extensions](../images/extension-details :
  - **Installées** : Toutes les extensions que vous avez ajoutées
  - **Populaires** : Les favoris de l'industrie
  - **Recommandées** : Adaptées à votre flux de travail

  ![Voir les extensions](

  

***

### 1. **Installer des extensions**

- Entrez le nom de l'extension dans la recherche, cliquez dessus, et consultez les détails dans l'éditeur.
- Appuyez sur le **bouton bleu Installer** dans la barre latérale _ou_ dans la zone principale de code.

  ![Installer des extensions](../images/install-extension 2. **Personnaliser les extensions**

- Trouvez votre extension installée.
- Cliquez sur l'**icône Engrenage** → sélectionnez _Paramètres de l'extension_ pour ajuster les comportements selon vos préférences.

  ![Modifier les paramètres de l'extension](../images/extension-settings 3. **Gérer les extensions**
Vous pouvez :

- **Désactiver :** Désactiver temporairement une extension tout en la gardant installée
- **Désinstaller :** La supprimer définitivement si elle n'est plus nécessaire

  Trouvez l'extension, appuyez sur l'icône Engrenage, et sélectionnez ‘Désactiver’ ou ‘Désinstaller,’ ou utilisez les boutons bleus dans la zone de code.

***

## Exercice

Mettez vos compétences à l'épreuve : [Créez un site web de CV en utilisant vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Exploration et auto-apprentissage supplémentaires

- Approfondissez avec [la documentation officielle de VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Explorez les fonctionnalités avancées de l'espace de travail, les raccourcis clavier et les paramètres.

***

**Vous êtes maintenant prêt à coder, créer et collaborer—de n'importe où, sur n'importe quel appareil, en utilisant VSCode.dev !**

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous ne sommes pas responsables des malentendus ou des interprétations erronées résultant de l'utilisation de cette traduction.