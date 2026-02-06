# Aplicativo de Quiz

Esses quizzes são os quizzes pré e pós-aula para o currículo de ciência de dados disponível em https://aka.ms/webdev-beginners

## Adicionando um conjunto de quizzes traduzidos

Adicione uma tradução de quiz criando estruturas de quiz correspondentes nas pastas `assets/translations`. Os quizzes originais estão em `assets/translations/en`. Os quizzes estão divididos em vários grupos. Certifique-se de alinhar a numeração com a seção correta do quiz. Há um total de 40 quizzes neste currículo, começando a contagem em 0.

  
<details>
<summary>Aqui está o formato de um arquivo de tradução:</summary>

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

Após editar as traduções, edite o arquivo index.js na pasta de tradução para importar todos os arquivos seguindo as convenções em `en`.

Edite o arquivo `index.js` em `assets/translations` para importar os novos arquivos traduzidos. 

Por exemplo, se o seu JSON traduzido estiver em `ex.json`, use 'ex' como a chave de localização e insira-o conforme mostrado abaixo para importá-lo:

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

## Executar o Aplicativo de Quiz localmente

### Pré-requisitos

- Uma conta no GitHub
- [Node.js e Git](https://nodejs.org/)

### Instalação e Configuração

1. Crie um repositório a partir deste [template](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Clone o seu novo repositório e navegue até o diretório do quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Instale os pacotes npm e dependências

   ```bash
   npm install
   ```

### Construir o aplicativo

1. Para construir a solução, execute:

   ```bash
   npm run build
   ```

### Iniciar o Aplicativo

1. Para executar a solução, execute:

    ```bash
    npm run dev
    ```

### [Opcional] Linting

1. Para garantir que o código está formatado corretamente, execute:

    ```bash
    npm run lint
    ```

## Implantar o Aplicativo de Quiz no Azure 

### Pré-requisitos
- Uma assinatura do Azure. Inscreva-se gratuitamente [aqui](https://aka.ms/azure-free).

    _Estimativa de custo para implantar este aplicativo de quiz: GRATUITO_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Depois de fazer login no Azure pelo link acima, selecione uma assinatura e um grupo de recursos, então:

- Detalhes do Aplicativo Web Estático: Forneça um nome e selecione um plano de hospedagem
- Login no GitHub: Defina sua fonte de implantação como GitHub, faça login e preencha os campos obrigatórios no formulário:
    - *Organização* – Escolha sua organização.
    - *Repositório* – Selecione o repositório do currículo Web Dev for Beginners. 
    - *Branch* - Selecione uma branch (main) 
- Predefinições de Build: O Azure Static Web Apps usa um algoritmo de detecção para identificar o framework usado em sua aplicação. 
    - *Localização do aplicativo* - ./quiz-app
    - *Localização da API* -
    - *Localização de saída* - dist
- Implantação: Clique em 'Review + Create', depois em 'Create'

    Após a implantação, um arquivo de workflow será criado no diretório *.github* do seu repositório. Esse arquivo de workflow contém instruções sobre os eventos que irão acionar uma nova implantação do aplicativo no Azure, por exemplo, _um **push** na branch **main**_ etc.

    <details>
    <summary>Exemplo de Arquivo de Workflow</summary>
    Aqui está um exemplo de como o arquivo de workflow do GitHub Actions pode ser:

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

- Pós-Implantação: Após a conclusão da implantação, clique em 'Go to Deployment' e depois em 'View app in browser'.

Depois que sua GitHub Action (workflow) for executada com sucesso, atualize a página ao vivo para visualizar seu aplicativo.

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.