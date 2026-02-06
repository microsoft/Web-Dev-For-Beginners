# Aplicação de Quiz

Estes quizzes são os quizzes pré e pós-aula para o currículo de ciência de dados em https://aka.ms/webdev-beginners

## Adicionar um conjunto de quizzes traduzido

Adicione uma tradução de quiz criando estruturas de quizzes correspondentes nas pastas `assets/translations`. Os quizzes originais estão em `assets/translations/en`. Os quizzes estão divididos em vários grupos. Certifique-se de alinhar a numeração com a seção correta do quiz. Existem 40 quizzes no total neste currículo, começando a contagem em 0.

  
<details>
<summary>Aqui está o formato de um ficheiro de tradução:</summary>

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

Depois de editar as traduções, edite o ficheiro index.js na pasta de tradução para importar todos os ficheiros seguindo as convenções em `en`.

Edite o ficheiro `index.js` em `assets/translations` para importar os novos ficheiros traduzidos. 

Por exemplo, se o seu JSON de tradução estiver em `ex.json`, use 'ex' como a chave de localização e insira-o conforme mostrado abaixo para o importar:

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

## Executar a aplicação de Quiz localmente

### Pré-requisitos

- Uma conta no GitHub
- [Node.js e Git](https://nodejs.org/)

### Instalar & Configurar

1. Crie um repositório a partir deste [template](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Clone o seu novo repositório e navegue até à pasta quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Instale os pacotes npm e dependências

   ```bash
   npm install
   ```

### Construir a aplicação

1. Para construir a solução, execute:

   ```bash
   npm run build
   ```

### Iniciar a aplicação

1. Para executar a solução, execute:

    ```bash
    npm run dev
    ```

### [Opcional] Linting

1. Para garantir que o código está formatado corretamente, execute:

    ```bash
    npm run lint
    ```

## Desplegar a aplicação de Quiz no Azure 

### Pré-requisitos
- Uma subscrição do Azure. Registe-se gratuitamente [aqui](https://aka.ms/azure-free).

    _Estimativa de custo para desplegar esta aplicação de quiz: GRATUITO_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Depois de iniciar sessão no Azure através do link acima, selecione uma subscrição e um grupo de recursos, e então:

- Detalhes da aplicação web estática: Forneça um nome e selecione um plano de alojamento
- Login no GitHub: Defina a sua fonte de deployment como GitHub, depois inicie sessão e preencha os campos necessários no formulário:
    - *Organização* – Escolha a sua organização.
    - *Repositório* – Selecione o repositório do currículo Web Dev for Beginners. 
    - *Ramo* - Selecione um ramo (main) 
- Presets de construção: O Azure Static Web Apps usa um algoritmo de deteção para identificar o framework usado na sua aplicação. 
    - *Localização da aplicação* - ./quiz-app
    - *Localização da API* -
    - *Localização de saída* - dist
- Deployment: Clique em 'Review + Create', depois 'Create'

    Uma vez desplegado, um ficheiro de workflow será criado no diretório *.github* do seu repositório. Este ficheiro de workflow contém instruções sobre eventos que irão desencadear um novo deployment da aplicação no Azure, por exemplo, _um **push** no ramo **main**_, etc.

    <details>
    <summary>Exemplo de ficheiro de workflow</summary>
    Aqui está um exemplo de como o ficheiro de workflow do GitHub Actions pode parecer:
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

- Pós-Deployment: Após o deployment estar concluído, clique em 'Go to Deployment' e depois 'View app in browser'.

Depois de o seu GitHub Action (workflow) ser executado com sucesso, atualize a página ao vivo para visualizar a sua aplicação.

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.