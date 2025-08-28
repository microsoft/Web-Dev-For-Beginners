<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b667b7d601e2ee19acb5aa9d102dc9f3",
  "translation_date": "2025-08-24T13:27:38+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "pt"
}
-->
# Construir uma App Bancária Parte 2: Criar um Formulário de Login e Registo

## Questionário Pré-Aula

[Questionário pré-aula](https://ff-quizzes.netlify.app/web/quiz/43)

### Introdução

Em quase todas as aplicações web modernas, é possível criar uma conta para ter um espaço privado. Como múltiplos utilizadores podem aceder a uma aplicação web ao mesmo tempo, é necessário um mecanismo para armazenar os dados pessoais de cada utilizador separadamente e selecionar quais informações exibir. Não vamos abordar como gerir [identidade de utilizador de forma segura](https://en.wikipedia.org/wiki/Authentication), pois é um tópico extenso por si só, mas garantiremos que cada utilizador possa criar uma (ou mais) conta bancária na nossa aplicação.

Nesta parte, utilizaremos formulários HTML para adicionar login e registo à nossa aplicação web. Veremos como enviar os dados para uma API de servidor programaticamente e, por fim, como definir regras básicas de validação para os dados inseridos pelos utilizadores.

### Pré-requisitos

É necessário ter concluído a parte de [templates HTML e rotas](../1-template-route/README.md) da aplicação web para esta lição. Também é necessário instalar o [Node.js](https://nodejs.org) e [executar a API do servidor](../api/README.md) localmente para poder enviar dados e criar contas.

**Nota importante**  
Terás dois terminais a funcionar ao mesmo tempo, conforme listado abaixo:  
1. Para a aplicação bancária principal que construímos na lição de [templates HTML e rotas](../1-template-route/README.md)  
2. Para a [API do servidor da aplicação bancária](../api/README.md) que acabámos de configurar acima.  

É necessário que ambos os servidores estejam ativos para seguir o resto da lição. Eles estão a ouvir em portas diferentes (porta `3000` e porta `5000`), por isso tudo deve funcionar corretamente.

Podes testar se o servidor está a funcionar corretamente executando este comando num terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Formulário e controlos

O elemento `<form>` encapsula uma secção de um documento HTML onde o utilizador pode inserir e enviar dados através de controlos interativos. Existem vários tipos de controlos de interface de utilizador (UI) que podem ser usados dentro de um formulário, sendo os mais comuns os elementos `<input>` e `<button>`.

Existem muitos [tipos](https://developer.mozilla.org/docs/Web/HTML/Element/input) diferentes de `<input>`. Por exemplo, para criar um campo onde o utilizador pode inserir o seu nome de utilizador, podes usar:

```html
<input id="username" name="username" type="text">
```

O atributo `name` será usado como o nome da propriedade quando os dados do formulário forem enviados. O atributo `id` é usado para associar um `<label>` ao controlo do formulário.

> Consulta a lista completa de [tipos de `<input>`](https://developer.mozilla.org/docs/Web/HTML/Element/input) e [outros controlos de formulário](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) para teres uma ideia de todos os elementos de UI nativos que podes usar ao construir a tua interface.

✅ Nota que `<input>` é um [elemento vazio](https://developer.mozilla.org/docs/Glossary/Empty_element) no qual *não* deves adicionar uma tag de encerramento correspondente. No entanto, podes usar a notação de autoencerramento `<input/>`, mas não é obrigatório.

O elemento `<button>` dentro de um formulário é um pouco especial. Se não especificares o atributo `type`, ele automaticamente enviará os dados do formulário para o servidor quando pressionado. Aqui estão os valores possíveis para o atributo `type`:

- `submit`: O padrão dentro de um `<form>`, o botão aciona a ação de envio do formulário.
- `reset`: O botão redefine todos os controlos do formulário para os seus valores iniciais.
- `button`: Não atribui um comportamento padrão ao botão quando pressionado. Podes então atribuir ações personalizadas usando JavaScript.

### Tarefa

Vamos começar por adicionar um formulário ao template de `login`. Precisaremos de um campo para o *nome de utilizador* e um botão de *Login*.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input id="username" name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

Se olhares mais de perto, podes notar que também adicionámos um elemento `<label>` aqui. Os elementos `<label>` são usados para adicionar um nome aos controlos de UI, como o nosso campo de nome de utilizador. Os rótulos são importantes para a legibilidade dos formulários, mas também trazem benefícios adicionais:

- Ao associar um rótulo a um controlo de formulário, ajuda os utilizadores que utilizam tecnologias assistivas (como leitores de ecrã) a entender que dados devem fornecer.
- Podes clicar no rótulo para colocar diretamente o foco no controlo associado, facilitando o acesso em dispositivos com ecrã tátil.

> [Acessibilidade](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) na web é um tópico muito importante que muitas vezes é negligenciado. Graças aos [elementos HTML semânticos](https://developer.mozilla.org/docs/Learn/Accessibility/HTML), não é difícil criar conteúdo acessível se os utilizares corretamente. Podes [ler mais sobre acessibilidade](https://developer.mozilla.org/docs/Web/Accessibility) para evitar erros comuns e tornar-te um programador responsável.

Agora vamos adicionar um segundo formulário para o registo, logo abaixo do anterior:

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input id="user" name="user" type="text">
  <label for="currency">Currency</label>
  <input id="currency" name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input id="description" name="description" type="text">
  <label for="balance">Current balance</label>
  <input id="balance" name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

Usando o atributo `value`, podemos definir um valor padrão para um determinado campo.  
Repara também que o campo para `balance` tem o tipo `number`. Parece diferente dos outros campos? Experimenta interagir com ele.

✅ Consegues navegar e interagir com os formulários usando apenas o teclado? Como o farias?

## Enviar dados para o servidor

Agora que temos uma interface funcional, o próximo passo é enviar os dados para o servidor. Vamos fazer um teste rápido usando o nosso código atual: o que acontece se clicares no botão *Login* ou *Register*?

Notaste a mudança na secção de URL do navegador?

![Captura de ecrã mostrando a mudança no URL do navegador após clicar no botão Register](../../../../7-bank-project/2-forms/images/click-register.png)

A ação padrão de um `<form>` é enviar os dados do formulário para o URL atual do servidor usando o [método GET](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3), anexando os dados do formulário diretamente ao URL. No entanto, este método tem algumas limitações:

- Os dados enviados são muito limitados em tamanho (cerca de 2000 caracteres)
- Os dados são visíveis diretamente no URL (não é ideal para senhas)
- Não funciona com uploads de ficheiros

Por isso, podes alterá-lo para usar o [método POST](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5), que envia os dados do formulário para o servidor no corpo da requisição HTTP, sem as limitações anteriores.

> Embora o POST seja o método mais utilizado para enviar dados, [em alguns cenários específicos](https://www.w3.org/2001/tag/doc/whenToUseGet.html) é preferível usar o método GET, como ao implementar um campo de pesquisa.

### Tarefa

Adiciona as propriedades `action` e `method` ao formulário de registo:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Agora tenta registar uma nova conta com o teu nome. Após clicares no botão *Register*, deverás ver algo como isto:

![Janela do navegador no endereço localhost:5000/api/accounts, mostrando uma string JSON com os dados do utilizador](../../../../7-bank-project/2-forms/images/form-post.png)

Se tudo correr bem, o servidor deverá responder à tua requisição com uma resposta [JSON](https://www.json.org/json-en.html) contendo os dados da conta que foi criada.

✅ Tenta registar novamente com o mesmo nome. O que acontece?

## Enviar dados sem recarregar a página

Como provavelmente notaste, há um pequeno problema com a abordagem que acabámos de usar: ao enviar o formulário, saímos da nossa aplicação e o navegador redireciona para o URL do servidor. Estamos a tentar evitar todos os recarregamentos de página na nossa aplicação web, já que estamos a criar uma [Aplicação de Página Única (SPA)](https://en.wikipedia.org/wiki/Single-page_application).

Para enviar os dados do formulário para o servidor sem forçar um recarregamento da página, temos de usar código JavaScript. Em vez de colocar um URL na propriedade `action` de um elemento `<form>`, podes usar qualquer código JavaScript precedido pela string `javascript:` para realizar uma ação personalizada. Usar isto também significa que terás de implementar algumas tarefas que anteriormente eram feitas automaticamente pelo navegador:

- Recuperar os dados do formulário
- Converter e codificar os dados do formulário num formato adequado
- Criar a requisição HTTP e enviá-la para o servidor

### Tarefa

Substitui o `action` do formulário de registo por:

```html
<form id="registerForm" action="javascript:register()">
```

Abre o `app.js` e adiciona uma nova função chamada `register`:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Aqui recuperamos o elemento do formulário usando `getElementById()` e utilizamos o auxiliar [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) para extrair os valores dos controlos do formulário como um conjunto de pares chave/valor. Depois, convertemos os dados para um objeto regular usando [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) e, finalmente, serializamos os dados para [JSON](https://www.json.org/json-en.html), um formato comumente usado para troca de dados na web.

Os dados estão agora prontos para serem enviados ao servidor. Cria uma nova função chamada `createAccount`:

```js
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

O que esta função faz? Primeiro, repara na palavra-chave `async` aqui. Isto significa que a função contém código que será executado [**assincronamente**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Quando usada juntamente com a palavra-chave `await`, permite esperar que o código assíncrono seja executado - como esperar pela resposta do servidor aqui - antes de continuar.

Aqui está um vídeo rápido sobre o uso de `async/await`:

[![Async e Await para gerir promessas](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async e Await para gerir promessas")

> 🎥 Clica na imagem acima para um vídeo sobre async/await.

Utilizamos a API `fetch()` para enviar dados JSON ao servidor. Este método aceita 2 parâmetros:

- O URL do servidor, por isso colocamos `//localhost:5000/api/accounts` aqui.
- As configurações da requisição. É aqui que definimos o método como `POST` e fornecemos o `body` para a requisição. Como estamos a enviar dados JSON ao servidor, também precisamos definir o cabeçalho `Content-Type` como `application/json` para que o servidor saiba como interpretar o conteúdo.

Como o servidor responderá à requisição com JSON, podemos usar `await response.json()` para analisar o conteúdo JSON e retornar o objeto resultante. Nota que este método é assíncrono, por isso usamos a palavra-chave `await` aqui antes de retornar para garantir que quaisquer erros durante a análise também sejam capturados.

Agora adiciona algum código à função `register` para chamar `createAccount()`:

```js
const result = await createAccount(jsonData);
```

Como usamos a palavra-chave `await` aqui, precisamos adicionar a palavra-chave `async` antes da função register:

```js
async function register() {
```

Por fim, vamos adicionar alguns logs para verificar o resultado. A função final deve ficar assim:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occurred:', result.error);
  }

  console.log('Account created!', result);
}
```

Foi um pouco longo, mas chegámos lá! Se abrires as [ferramentas de desenvolvimento do navegador](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools) e tentares registar uma nova conta, não deverás ver nenhuma mudança na página web, mas uma mensagem aparecerá na consola confirmando que tudo está a funcionar.

![Captura de ecrã mostrando uma mensagem de log na consola do navegador](../../../../7-bank-project/2-forms/images/browser-console.png)

✅ Achas que os dados são enviados ao servidor de forma segura? E se alguém conseguir intercetar a requisição? Podes ler sobre [HTTPS](https://en.wikipedia.org/wiki/HTTPS) para saber mais sobre comunicação segura de dados.

## Validação de dados

Se tentares registar uma nova conta sem definir primeiro um nome de utilizador, podes ver que o servidor retorna um erro com o código de estado [400 (Bad Request)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).).

Antes de enviar dados para um servidor, é uma boa prática [validar os dados do formulário](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) previamente, sempre que possível, para garantir que envias uma requisição válida. Os controlos de formulário HTML5 fornecem validação integrada usando vários atributos:

- `required`: o campo precisa ser preenchido, caso contrário o formulário não pode ser enviado.
- `minlength` e `maxlength`: define o número mínimo e máximo de caracteres em campos de texto.
- `min` e `max`: define o valor mínimo e máximo de um campo numérico.
- `type`: define o tipo de dados esperado, como `number`, `email`, `file` ou [outros tipos integrados](https://developer.mozilla.org/docs/Web/HTML/Element/input). Este atributo também pode alterar a renderização visual do controlo do formulário.
- `pattern`: permite definir um padrão de [expressão regular](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) para testar se os dados inseridos são válidos ou não.
> Dica: pode personalizar o aspeto dos seus controlos de formulário dependendo se são válidos ou não, utilizando as pseudo-classes CSS `:valid` e `:invalid`.
### Tarefa

Existem 2 campos obrigatórios para criar uma nova conta válida: o nome de utilizador e a moeda. Os outros campos são opcionais. Atualize o HTML do formulário, utilizando tanto o atributo `required` como texto no rótulo do campo para que:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

Embora esta implementação específica do servidor não imponha limites específicos no comprimento máximo dos campos, é sempre uma boa prática definir limites razoáveis para qualquer entrada de texto do utilizador.

Adicione um atributo `maxlength` aos campos de texto:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Agora, se pressionar o botão *Registar* e algum campo não respeitar uma regra de validação que definimos, deverá ver algo como isto:

![Captura de ecrã mostrando o erro de validação ao tentar submeter o formulário](../../../../7-bank-project/2-forms/images/validation-error.png)

A validação como esta, realizada *antes* de enviar qualquer dado para o servidor, é chamada de validação **do lado do cliente**. Mas note que nem sempre é possível realizar todas as verificações sem enviar os dados. Por exemplo, não podemos verificar aqui se já existe uma conta com o mesmo nome de utilizador sem enviar um pedido ao servidor. Validações adicionais realizadas no servidor são chamadas de validação **do lado do servidor**.

Normalmente, ambas precisam de ser implementadas, e enquanto a validação do lado do cliente melhora a experiência do utilizador ao fornecer feedback instantâneo, a validação do lado do servidor é crucial para garantir que os dados do utilizador que manipula são válidos e seguros.

---

## 🚀 Desafio

Mostre uma mensagem de erro no HTML se o utilizador já existir.

Aqui está um exemplo de como a página de login final pode parecer após um pouco de estilização:

![Captura de ecrã da página de login após adicionar estilos CSS](../../../../7-bank-project/2-forms/images/result.png)

## Questionário Pós-Aula

[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/44)

## Revisão e Autoestudo

Os programadores têm sido muito criativos nos seus esforços de construção de formulários, especialmente no que diz respeito a estratégias de validação. Aprenda sobre diferentes fluxos de formulários explorando [CodePen](https://codepen.com); consegue encontrar alguns formulários interessantes e inspiradores?

## Tarefa

[Estilize a sua aplicação bancária](assignment.md)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.