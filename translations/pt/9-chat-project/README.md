<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "002304ffe0059e55b33e2ee5283788ad",
  "translation_date": "2025-09-01T15:27:52+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "pt"
}
-->
# Projeto de Chat

Este projeto de chat mostra como criar um Assistente de Chat utilizando os Modelos do GitHub.

Aqui está como o projeto finalizado se parece:

<div>
  <img src="./assets/screenshot.png" alt="Aplicação de Chat" width="600">
</div>

Para contextualizar, criar assistentes de chat utilizando IA generativa é uma ótima forma de começar a aprender sobre IA. O que vais aprender é como integrar IA generativa numa aplicação web ao longo desta lição. Vamos começar.

## Conectar à IA generativa

Para o backend, estamos a usar os Modelos do GitHub. É um excelente serviço que permite usar IA gratuitamente. Vai ao playground e obtém o código que corresponde à linguagem de backend escolhida. Aqui está como se parece no [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground)

<div>
  <img src="./assets/playground.png" alt="GitHub Models AI Playground" with="600">
</div>

Como mencionado, seleciona o separador "Code" e o runtime escolhido.

<div>
  <img src="./assets/playground-choice.png" alt="Escolha no playground" with="600">
</div>

### Usar Python

Neste caso, selecionamos Python, o que significa que escolhemos este código:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# To authenticate with the model you will need to generate a personal access token (PAT) in your GitHub settings. 
# Create your PAT token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
client = OpenAI(
    base_url="https://models.github.ai/inference",
    api_key=os.environ["GITHUB_TOKEN"],
)

response = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": "",
        },
        {
            "role": "user",
            "content": "What is the capital of France?",
        }
    ],
    model="openai/gpt-4o-mini",
    temperature=1,
    max_tokens=4096,
    top_p=1
)

print(response.choices[0].message.content)
```

Vamos limpar este código um pouco para que seja reutilizável:

```python
def call_llm(prompt: str, system_message: str):
    response = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": system_message,
            },
            {
                "role": "user",
                "content": prompt,
            }
        ],
        model="openai/gpt-4o-mini",
        temperature=1,
        max_tokens=4096,
        top_p=1
    )

    return response.choices[0].message.content
```

Com esta função `call_llm`, agora podemos passar um prompt e um prompt de sistema, e a função retorna o resultado.

### Personalizar o Assistente de IA

Se quiseres personalizar o assistente de IA, podes especificar como queres que ele se comporte preenchendo o prompt de sistema desta forma:

```python
call_llm("Tell me about you", "You're Albert Einstein, you only know of things in the time you were alive")
```

## Expor via uma API Web

Ótimo, já temos a parte de IA concluída. Vamos ver como podemos integrá-la numa API Web. Para a API Web, escolhemos usar Flask, mas qualquer framework web deve funcionar. Vamos ver o código:

### Usar Python

```python
# api.py
from flask import Flask, request, jsonify
from llm import call_llm
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # *   example.com

@app.route("/", methods=["GET"])
def index():
    return "Welcome to this API. Call POST /hello with 'message': 'my message' as JSON payload"


@app.route("/hello", methods=["POST"])
def hello():
    # get message from request body  { "message": "do this taks for me" }
    data = request.get_json()
    message = data.get("message", "")

    response = call_llm(message, "You are a helpful assistant.")
    return jsonify({
        "response": response
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
```

Aqui, criamos uma API Flask e definimos uma rota padrão "/" e "/chat". Esta última é destinada a ser usada pelo frontend para enviar perguntas.

Para integrar o *llm.py*, aqui está o que precisamos fazer:

- Importar a função `call_llm`:

   ```python
   from llm import call_llm
   from flask import Flask, request
   ```

- Chamá-la na rota "/chat":

   ```python
   @app.route("/hello", methods=["POST"])
   def hello():
      # get message from request body  { "message": "do this taks for me" }
      data = request.get_json()
      message = data.get("message", "")

      response = call_llm(message, "You are a helpful assistant.")
      return jsonify({
         "response": response
      })
   ```

   Aqui analisamos a solicitação recebida para obter a propriedade `message` do corpo JSON. Depois disso, chamamos o LLM com esta chamada:

   ```python
   response = call_llm(message, "You are a helpful assistant")

   # return the response as JSON
   return jsonify({
      "response": response 
   })
   ```

Ótimo, agora fizemos o que era necessário.

## Configurar Cors

Devemos mencionar que configuramos algo como CORS, partilha de recursos entre origens. Isto significa que, como o nosso backend e frontend vão correr em portas diferentes, precisamos permitir que o frontend aceda ao backend.

### Usar Python

Há um trecho de código em *api.py* que configura isto:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # *   example.com
```

Neste momento, está configurado para permitir "*" que são todas as origens, e isso é um pouco inseguro. Devemos restringir isto quando formos para produção.

## Executar o projeto

Para executar o projeto, precisas iniciar primeiro o backend e depois o frontend.

### Usar Python

Ok, então temos *llm.py* e *api.py*. Como podemos fazer isto funcionar com um backend? Bem, há duas coisas que precisamos fazer:

- Instalar dependências:

   ```sh
   cd backend
   python -m venv venv
   source ./venv/bin/activate

   pip install openai flask flask-cors openai
   ```

- Iniciar a API:

   ```sh
   python api.py
   ```

   Se estiveres a usar Codespaces, precisas ir a Ports na parte inferior do editor, clicar com o botão direito e selecionar "Port Visibility" e escolher "Public".

### Trabalhar num frontend

Agora que temos uma API a funcionar, vamos criar um frontend para isto. Um frontend mínimo que iremos melhorar passo a passo. Na pasta *frontend*, cria o seguinte:

```text
backend/
frontend/
index.html
app.js
styles.css
```

Vamos começar com **index.html**:

```html
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <form>
        <textarea id="messages"></textarea>
        <input id="input" type="text" />
        <button type="submit" id="sendBtn">Send</button>  
      </form>  
      <script src="app.js" />
    </body>
</html>    
```

O acima é o mínimo absoluto necessário para suportar uma janela de chat, pois consiste num textarea onde as mensagens serão renderizadas, um campo de entrada para digitar a mensagem e um botão para enviar a mensagem ao backend. Vamos ver o JavaScript a seguir em *app.js*.

**app.js**

```js
// app.js

(function(){
  // 1. set up elements  
  const messages = document.getElementById("messages");
  const form = document.getElementById("form");
  const input = document.getElementById("input");

  const BASE_URL = "change this";
  const API_ENDPOINT = `${BASE_URL}/hello`;

  // 2. create a function that talks to our backend
  async function callApi(text) {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });
    let json = await response.json();
    return json.response;
  }

  // 3. add response to our textarea
  function appendMessage(text, role) {
    const el = document.createElement("div");
    el.className = `message ${role}`;
    el.innerHTML = text;
    messages.appendChild(el);
  }

  // 4. listen to submit events
  form.addEventListener("submit", async(e) => {
    e.preventDefault();
   // someone clicked the button in the form
   
   // get input
   const text = input.value.trim();

   appendMessage(text, "user")

   // reset it
   input.value = '';

   const reply = await callApi(text);

   // add to messages
   appendMessage(reply, "assistant");

  })
})();
```

Vamos analisar o código por secção:

- 1) Aqui obtemos uma referência a todos os elementos que iremos usar mais tarde no código.
- 2) Nesta secção, criamos uma função que utiliza o método `fetch` embutido para chamar o nosso backend.
- 3) `appendMessage` ajuda a adicionar respostas, bem como o que tu, como utilizador, digitas.
- 4) Aqui ouvimos o evento de envio e acabamos por ler o campo de entrada, colocar a mensagem do utilizador no textarea, chamar a API e renderizar a resposta no textarea.

Vamos ver o estilo a seguir. Aqui podes ser criativo e fazer com que pareça como quiseres, mas aqui estão algumas sugestões:

**styles.css**

```
.message {
    background: #222;
    box-shadow: 0 0 0 10px orange;
    padding: 10px:
    margin: 5px;
}

.message.user {
    background: blue;
}

.message.assistant {
    background: grey;
} 
```

Com estas três classes, vais estilizar as mensagens de forma diferente dependendo de onde vêm, do assistente ou de ti como utilizador. Se quiseres inspiração, consulta a pasta `solution/frontend/styles.css`.

### Alterar Base Url

Há uma coisa que não configurámos aqui, que foi o `BASE_URL`. Isto não é conhecido até o backend ser iniciado. Para configurá-lo:

- Se executares a API localmente, deve ser algo como `http://localhost:5000`.
- Se executares em Codespaces, deve ser algo como "[name]app.github.dev".

## Tarefa

Cria a tua própria pasta *project* com conteúdo como este:

```text
project/
  frontend/
    index.html
    app.js
    styles.css
  backend/
    ...
```

Copia o conteúdo do que foi instruído acima, mas sente-te à vontade para personalizar como quiseres.

## Solução

[Solução](./solution/README.md)

## Bónus

Experimenta alterar a personalidade do assistente de IA.

### Para Python

Quando chamas `call_llm` em *api.py*, podes alterar o segundo argumento para o que quiseres, por exemplo:

```python
call_llm(message, "You are Captain Picard")
```

### Frontend

Altera também o CSS e o texto como preferires, fazendo mudanças em *index.html* e *styles.css*.

## Resumo

Ótimo, aprendeste do zero como criar um assistente pessoal utilizando IA. Fizemos isso usando os Modelos do GitHub, um backend em Python e um frontend em HTML, CSS e JavaScript.

## Configurar com Codespaces

- Navega para: [Web Dev For Beginners repo](https://github.com/microsoft/Web-Dev-For-Beginners)
- Cria a partir de um template (certifica-te de que estás autenticado no GitHub) no canto superior direito:

    ![Criar a partir de template](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.pt.png)

- Uma vez no teu repositório, cria um Codespace:

    ![Criar codespace](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.pt.png)

    Isto deve iniciar um ambiente com o qual podes trabalhar agora.

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, é importante ter em conta que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.