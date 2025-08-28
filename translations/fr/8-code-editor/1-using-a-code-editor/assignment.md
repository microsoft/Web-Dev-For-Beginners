<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2fcb983b8dbadadb1bc2e97f8c12dac5",
  "translation_date": "2025-08-23T23:35:41+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/assignment.md",
  "language_code": "fr"
}
-->
# Créer un site web de CV avec vscode.dev

_Quelle classe d'envoyer une URL à un recruteur qui demande votre CV ?_ 😎

<!----
TODO : ajouter une image optionnelle
![Utiliser un éditeur de code](../../../../sketchnotes/webdev101-vscode-dev.png)
> Sketchnote par [Nom de l'auteur](https://example.com)
---->

<!---
## Quiz avant la leçon
[Quiz avant la leçon](https://ff-quizzes.netlify.app/web/quiz/3)
---->

## Objectifs

Après cette tâche, vous apprendrez à :

- Créer un site web pour présenter votre CV

### Prérequis

1. Un compte GitHub. Rendez-vous sur [GitHub](https://github.com/) et créez un compte si ce n'est pas déjà fait.

## Étapes

**Étape 1 :** Créez un nouveau dépôt GitHub et donnez-lui le nom `my-resume`.

**Étape 2 :** Créez un fichier `index.html` dans votre dépôt. Nous ajouterons au moins un fichier directement sur github.com car vous ne pouvez pas ouvrir un dépôt vide sur vscode.dev.

Cliquez sur le lien `creating a new file`, tapez le nom `index.html` et sélectionnez le bouton `Commit new file`.

![Créer un nouveau fichier sur github.com](../../../../8-code-editor/images/new-file-github.com.png)

**Étape 3 :** Ouvrez [VSCode.dev](https://vscode.dev) et sélectionnez le bouton `Open Remote Repository`.

Copiez l'URL du dépôt que vous venez de créer pour votre site de CV et collez-la dans la boîte de saisie :

_Remplacez `your-username` par votre nom d'utilisateur GitHub._

```
https://github.com/your-username/my-resume
```

✅ Si tout fonctionne, vous verrez votre projet et le fichier index.html ouverts dans l'éditeur de texte sur le navigateur.

![Créer un nouveau fichier](../../../../8-code-editor/images/project-on-vscode.dev.png)

**Étape 4 :** Ouvrez le fichier `index.html`, collez le code ci-dessous dans votre zone de code et enregistrez.

<details>
    <summary><b>Code HTML responsable du contenu de votre site web de CV.</b></summary>
    
        <html>

            <head>
                <link href="style.css" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
                <title>Votre nom ici !</title>
            </head>
            <body>
                <header id="header">
                    <!-- En-tête du CV avec votre nom et titre -->
                    <h1>Votre nom ici !</h1>
                    <hr>
                    Votre rôle !
                    <hr>
                </header>
                <main>
                    <article id="mainLeft">
                        <section>
                            <h2>CONTACT</h2>
                            <!-- Informations de contact, y compris les réseaux sociaux -->
                            <p>
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <a href="mailto:username@domain.top-level domain">Écrivez votre email ici</a>
                            </p>
                            <p>
                                <i class="fab fa-github" aria-hidden="true"></i>
                                <a href="github.com/yourGitHubUsername">Écrivez votre nom d'utilisateur ici !</a>
                            </p>
                            <p>
                                <i class="fab fa-linkedin" aria-hidden="true"></i>
                                <a href="linkedin.com/yourLinkedInUsername">Écrivez votre nom d'utilisateur ici !</a>
                            </p>
                        </section>
                        <section>
                            <h2>COMPÉTENCES</h2>
                            <!-- Vos compétences -->
                            <ul>
                                <li>Compétence 1 !</li>
                                <li>Compétence 2 !</li>
                                <li>Compétence 3 !</li>
                                <li>Compétence 4 !</li>
                            </ul>
                        </section>
                        <section>
                            <h2>FORMATION</h2>
                            <!-- Votre formation -->
                            <h3>Écrivez votre cursus ici !</h3>
                            <p>
                                Écrivez votre établissement ici !
                            </p>
                            <p>
                                Date de début - Date de fin
                            </p>
                        </section>            
                    </article>
                    <article id="mainRight">
                        <section>
                            <h2>À PROPOS</h2>
                            <!-- À propos de vous -->
                            <p>Écrivez un résumé sur vous-même !</p>
                        </section>
                        <section>
                            <h2>EXPÉRIENCE PROFESSIONNELLE</h2>
                            <!-- Votre expérience professionnelle -->
                            <h3>Titre du poste</h3>
                            <p>
                                Nom de l'organisation ici | Mois de début – Mois de fin
                            </p>
                            <ul>
                                    <li>Tâche 1 - Écrivez ce que vous avez fait !</li>
                                    <li>Tâche 2 - Écrivez ce que vous avez fait !</li>
                                    <li>Écrivez les résultats/impacts de votre contribution</li>
                                    
                            </ul>
                            <h3>Titre du poste 2</h3>
                            <p>
                                Nom de l'organisation ici | Mois de début – Mois de fin
                            </p>
                            <ul>
                                    <li>Tâche 1 - Écrivez ce que vous avez fait !</li>
                                    <li>Tâche 2 - Écrivez ce que vous avez fait !</li>
                                    <li>Écrivez les résultats/impacts de votre contribution</li>
                                    
                            </ul>
                        </section>
                    </article>
                </main>
            </body>
        </html>
</details>

Ajoutez les détails de votre CV pour remplacer le _texte de remplacement_ dans le code HTML.

**Étape 5 :** Survolez le dossier My-Resume, cliquez sur l'icône `New File ...` et créez 2 nouveaux fichiers dans votre projet : `style.css` et `codeswing.json`.

**Étape 6 :** Ouvrez le fichier `style.css`, collez le code ci-dessous et enregistrez.

<details>
        <summary><b>Code CSS pour formater la mise en page du site.</b></summary>
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 16px;
                max-width: 960px;
                margin: auto;
            }
            h1 {
                font-size: 3em;
                letter-spacing: .6em;
                padding-top: 1em;
                padding-bottom: 1em;
            }

            h2 {
                font-size: 1.5em;
                padding-bottom: 1em;
            }

            h3 {
                font-size: 1em;
                padding-bottom: 1em;
            }
            main { 
                display: grid;
                grid-template-columns: 40% 60%;
                margin-top: 3em;
            }
            header {
                text-align: center;
                margin: auto 2em;
            }

            section {
                margin: auto 1em 4em 2em;
            }

            i {
                margin-right: .5em;
            }

            p {
                margin: .2em auto
            }

            hr {
                border: none;
                background-color: lightgray;
                height: 1px;
            }

            h1, h2, h3 {
                font-weight: 100;
                margin-bottom: 0;
            }
            #mainLeft {
                border-right: 1px solid lightgray;
            }
            
</details>

**Étape 6 :** Ouvrez le fichier `codeswing.json`, collez le code ci-dessous et enregistrez.

    {
    "scripts": [],
    "styles": []
    }

**Étape 7 :** Installez l'extension `Codeswing` pour visualiser le site web du CV dans la zone de code.

Cliquez sur l'icône _`Extensions`_ dans la barre d'activité et tapez Codeswing. Cliquez soit sur le _bouton bleu d'installation_ dans la barre d'activité étendue pour installer, soit sur le bouton d'installation qui apparaît dans la zone de code une fois que vous avez sélectionné l'extension pour charger des informations supplémentaires. Immédiatement après l'installation de l'extension, observez votre zone de code pour voir les changements dans votre projet 😃.

![Installer des extensions](../../../../8-code-editor/images/install-extension.gif)

Voici ce que vous verrez sur votre écran après avoir installé l'extension.

![Extension Codeswing en action](../../../../8-code-editor/images/after-codeswing-extension-pb.png)

Si vous êtes satisfait des modifications apportées, survolez le dossier `Changes` et cliquez sur le bouton `+` pour mettre en scène les modifications.

Tapez un message de commit _(Une description des modifications apportées au projet)_ et validez vos modifications en cliquant sur le `check`. Une fois que vous avez terminé de travailler sur votre projet, sélectionnez l'icône du menu hamburger en haut à gauche pour revenir au dépôt sur GitHub.

Félicitations 🎉 Vous venez de créer votre site web de CV avec vscode.dev en quelques étapes.

## 🚀 Défi

Ouvrez un dépôt distant sur lequel vous avez les permissions pour apporter des modifications et mettez à jour certains fichiers. Ensuite, essayez de créer une nouvelle branche avec vos modifications et faites une Pull Request.

<!----
## Quiz après la leçon
[Quiz après la leçon](https://ff-quizzes.netlify.app/web/quiz/4)
---->

## Révision & Auto-apprentissage

Lisez-en davantage sur [VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) et certaines de ses autres fonctionnalités.

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.