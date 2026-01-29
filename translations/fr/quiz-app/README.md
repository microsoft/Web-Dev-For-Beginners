# Application de quiz

Ces quiz sont les quiz avant et après les cours du programme de science des données disponible sur https://aka.ms/webdev-beginners

## Ajouter un ensemble de quiz traduit

Ajoutez une traduction de quiz en créant des structures de quiz correspondantes dans les dossiers `assets/translations`. Les quiz originaux se trouvent dans `assets/translations/en`. Les quiz sont divisés en plusieurs groupes. Assurez-vous d'aligner la numérotation avec la section de quiz appropriée. Il y a un total de 40 quiz dans ce programme, avec une numérotation commençant à 0.

  
<details>
<summary>Voici la structure d'un fichier de traduction :</summary>

```
[
    {
        "title": "A title",
        "complete": "A complete button title",
        "error": "An error message upon selecting the wrong answer",
        "quizzes": [
            {
                "id": 1,
                "title": "Title",
                "quiz": [
                    {
                        "questionText": "The question asked",
                        "answerOptions": [
                            {
                                "answerText": "Option 1 title",
                                "isCorrect": true
                            },
                            {
                                "answerText": "Option 2 title",
                                "isCorrect": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```
</details>

Après avoir modifié les traductions, éditez le fichier index.js dans le dossier de traduction pour importer tous les fichiers en suivant les conventions de `en`.

Modifiez le fichier `index.js` dans `assets/translations` pour importer les nouveaux fichiers traduits.

Par exemple, si votre fichier JSON de traduction est `ex.json`, utilisez 'ex' comme clé de localisation, puis ajoutez-le comme indiqué ci-dessous pour l'importer :

<details>
<summary>index.js</summary>

```
import ex from "./ex.json";

// if 'ex' is localization key then enter it like so in `messages` to expose it 

const messages = {
  ex: ex[0],
};

export default messages;
```

</details>

## Exécuter l'application de quiz localement

### Prérequis

- Un compte GitHub
- [Node.js et Git](https://nodejs.org/)

### Installation et configuration

1. Créez un dépôt à partir de ce [modèle](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Clonez votre nouveau dépôt et accédez au dossier quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Installez les packages npm et les dépendances

   ```bash
   npm install
   ```

### Construire l'application

1. Pour construire la solution, exécutez :

   ```bash
   npm run build
   ```

### Démarrer l'application

1. Pour exécuter la solution, exécutez :

    ```bash
    npm run dev
    ```

### [Optionnel] Linting

1. Pour vérifier que le code est correctement linté, exécutez :

    ```bash
    npm run lint
    ```

## Déployer l'application de quiz sur Azure 

### Prérequis
- Un abonnement Azure. Inscrivez-vous gratuitement [ici](https://aka.ms/azure-free).

    _Estimation du coût pour déployer cette application de quiz : GRATUIT_

[![Déployer sur Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Une fois connecté à Azure via le lien ci-dessus, sélectionnez un abonnement et un groupe de ressources, puis :

- Détails de l'application web statique : Fournissez un nom et sélectionnez un plan d'hébergement
- Connexion GitHub : Définissez votre source de déploiement comme GitHub, puis connectez-vous et remplissez les champs requis du formulaire :
    - *Organisation* – Choisissez votre organisation.
    - *Dépôt* – Sélectionnez le dépôt du programme Web Dev for Beginners. 
    - *Branche* - Sélectionnez une branche (main) 
- Préréglages de construction : Azure Static Web Apps utilise un algorithme de détection pour identifier le framework utilisé dans votre application. 
    - *Emplacement de l'application* - ./quiz-app
    - *Emplacement de l'API* -
    - *Emplacement de sortie* - dist
- Déploiement : Cliquez sur 'Review + Create', puis sur 'Create'

    Une fois déployé, un fichier de workflow sera créé dans le répertoire *.github* de votre dépôt. Ce fichier de workflow contient les instructions des événements qui déclencheront un nouveau déploiement de l'application sur Azure, par exemple, _un **push** sur la branche **main**_, etc.

    <details>
    <summary>Exemple de fichier de workflow</summary>
    Voici un exemple de ce à quoi pourrait ressembler le fichier de workflow GitHub Actions :
    name: Azure Static Web Apps CI/CD

    ```
    on:
    push:
        branches:
        - main
    pull_request:
        types: [opened, synchronize, reopened, closed]
        branches:
        - main

    jobs:
    build_and_deploy_job:
        runs-on: ubuntu-latest
        name: Build and Deploy Job
        steps:
        - uses: actions/checkout@v2
        - name: Build And Deploy
            id: builddeploy
            uses: Azure/static-web-apps-deploy@v1
            with:
            azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
            repo_token: ${{ secrets.GITHUB_TOKEN }}
            action: "upload"
            app_location: "quiz-app" # App source code path
            api_location: ""API source code path optional
            output_location: "dist" #Built app content directory - optional
    ```

    </details>

- Post-déploiement : Une fois le déploiement terminé, cliquez sur 'Go to Deployment', puis sur 'View app in browser'.

Une fois que votre action GitHub (workflow) est exécutée avec succès, actualisez la page en direct pour voir votre application.

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.