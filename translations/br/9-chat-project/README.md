<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cf15ff7770c5a484349383bb27d1131f",
  "translation_date": "2025-08-29T01:25:36+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "br"
}
-->
# Projeto de Chat

Este projeto de chat mostra como criar um Assistente de Chat usando os Modelos do GitHub.

Aqui está como o projeto finalizado se parece:

<div>
  <img src="./assets/screenshot.png" alt="Aplicativo de Chat" width="600">
</div>

Um pouco de contexto: construir assistentes de chat usando IA generativa é uma ótima maneira de começar a aprender sobre IA. O que você aprenderá nesta lição é como integrar IA generativa em um aplicativo web. Vamos começar.

## Conectando-se à IA generativa

Para o backend, estamos usando os Modelos do GitHub. É um ótimo serviço que permite usar IA gratuitamente. Acesse o playground e copie o código correspondente à linguagem de backend escolhida. Aqui está como ele se parece no [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground)

<div>
  <img src="./assets/playground.png" alt="GitHub Models AI Playground" width="600">
</div>

Como mencionado, selecione a aba "Code" e o runtime escolhido.

<div>
  <img src="./assets/playground-choice.png" alt="Escolha no playground" width="600">
</div>

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

Vamos limpar este código um pouco para torná-lo reutilizável:

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

Se você quiser personalizar o assistente de IA, pode especificar como deseja que ele se comporte preenchendo o prompt de sistema assim:

```python
call_llm("Tell me about you", "You're Albert Einstein, you only know of things in the time you were alive")
```

## Exponha via uma API Web

Ótimo, já concluímos a parte de IA. Agora vamos ver como podemos integrá-la em uma API Web. Para a API Web, escolhemos usar Flask, mas qualquer framework web deve funcionar. Vamos ver o código:

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

Aqui, criamos uma API Flask e definimos uma rota padrão "/" e "/chat". Esta última é destinada ao uso pelo frontend para enviar perguntas.

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

   Aqui, analisamos a solicitação recebida para recuperar a propriedade `message` do corpo JSON. Em seguida, chamamos o LLM com esta chamada:

   ```python
   response = call_llm(message, "You are a helpful assistant")

   # return the response as JSON
   return jsonify({
      "response": response 
   })
   ```

Ótimo, agora fizemos o que era necessário.

### Configurar Cors

Devemos mencionar que configuramos algo como CORS, compartilhamento de recursos entre origens. Isso significa que, como nosso backend e frontend rodarão em portas diferentes, precisamos permitir que o frontend chame o backend. Há um trecho de código em *api.py* que configura isso:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # *   example.com
```

Atualmente, está configurado para permitir "*" (todas as origens), o que é um pouco inseguro. Devemos restringi-lo quando formos para produção.

## Execute seu projeto

Ok, temos *llm.py* e *api.py*. Como podemos fazer isso funcionar com um backend? Bem, há duas coisas que precisamos fazer:

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

   Se você estiver usando Codespaces, vá para "Ports" na parte inferior do editor, clique com o botão direito sobre ele, selecione "Port Visibility" e escolha "Public".

### Trabalhar em um frontend

Agora que temos uma API funcionando, vamos criar um frontend para isso. Um frontend mínimo que iremos melhorar gradualmente. Na pasta *frontend*, crie o seguinte:

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

O código acima é o mínimo necessário para suportar uma janela de chat, consistindo em uma área de texto onde as mensagens serão exibidas, um campo de entrada para digitar a mensagem e um botão para enviar sua mensagem ao backend. Vamos olhar o JavaScript em seguida, no arquivo *app.js*.

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

Vamos analisar o código por seção:

- 1) Aqui obtemos uma referência a todos os elementos que usaremos mais tarde no código.
- 2) Nesta seção, criamos uma função que usa o método embutido `fetch` para chamar nosso backend.
- 3) `appendMessage` ajuda a adicionar respostas, bem como o que você, como usuário, digita.
- 4) Aqui ouvimos o evento de envio, lemos o campo de entrada, colocamos a mensagem do usuário na área de texto, chamamos a API e renderizamos a resposta na área de texto.

Agora vamos olhar o estilo. Aqui você pode ser criativo e fazer com que pareça como quiser, mas aqui estão algumas sugestões:

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

Com essas três classes, você estilizará as mensagens de forma diferente dependendo de onde elas vêm: do assistente ou de você como usuário. Se quiser se inspirar, confira a pasta `solution/frontend/styles.css`.

### Alterar Base Url

Há uma coisa que não configuramos: `BASE_URL`. Isso não é conhecido até que seu backend seja iniciado. Para configurá-lo:

- Se você executar a API localmente, deve ser algo como `http://localhost:5000`.
- Se estiver rodando em Codespaces, deve ser algo como "[name]app.github.dev".

## Tarefa

Crie sua própria pasta *project* com o conteúdo assim:

```text
project/
  frontend/
    index.html
    app.js
    styles.css
  backend/
    api.py
    llm.py
```

Copie o conteúdo do que foi instruído acima, mas sinta-se à vontade para personalizar como preferir.

## Solução

[Solução](./solution/README.md)

## Bônus

Tente mudar a personalidade do assistente de IA. Quando você chamar `call_llm` em *api.py*, pode alterar o segundo argumento para o que quiser, por exemplo:

```python
call_llm(message, "You are Captain Picard")
```

Altere também o CSS e o texto como preferir, fazendo mudanças em *index.html* e *styles.css*.

## Resumo

Ótimo, você aprendeu do zero como criar um assistente pessoal usando IA. Fizemos isso usando os Modelos do GitHub, um backend em Python e um frontend em HTML, CSS e JavaScript.

## Configuração com Codespaces

- Navegue até: [Repositório Web Dev For Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)
- Crie a partir de um template (certifique-se de estar logado no GitHub) no canto superior direito:

    ![Criar a partir de um template](../../../translated_images/template.67ad477109d29a2b04599a83c964c87fcde041256d4f04d3589cbb00c696f76c.br.png)

- Uma vez no seu repositório, crie um Codespace:

    ![Criar codespace](../../../translated_images/codespace.bcecbdf5d2747d3d17da67a78ad911c8853d68102e34748ec372cde1e9236e1d.br.png)

    Isso deve iniciar um ambiente com o qual você pode trabalhar agora.

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte oficial. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.