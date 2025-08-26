<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-26T00:35:38+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "br"
}
-->
# Construindo um App Bancário Parte 1: Templates HTML e Rotas em um Aplicativo Web

## Questionário Pré-Aula

[Questionário pré-aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/41)

### Introdução

Desde o surgimento do JavaScript nos navegadores, os sites estão se tornando mais interativos e complexos do que nunca. As tecnologias web agora são comumente usadas para criar aplicativos totalmente funcionais que rodam diretamente no navegador, conhecidos como [aplicativos web](https://en.wikipedia.org/wiki/Web_application). Como os aplicativos web são altamente interativos, os usuários não querem esperar por um recarregamento completo da página toda vez que uma ação é realizada. Por isso, o JavaScript é usado para atualizar o HTML diretamente através do DOM, proporcionando uma experiência de usuário mais fluida.

Nesta lição, vamos estabelecer as bases para criar um aplicativo bancário web, utilizando templates HTML para criar múltiplas telas que podem ser exibidas e atualizadas sem a necessidade de recarregar toda a página HTML.

### Pré-requisitos

Você precisará de um servidor web local para testar o aplicativo web que construiremos nesta lição. Caso não tenha um, você pode instalar o [Node.js](https://nodejs.org) e usar o comando `npx lite-server` a partir da pasta do seu projeto. Isso criará um servidor web local e abrirá seu aplicativo em um navegador.

### Preparação

No seu computador, crie uma pasta chamada `bank` com um arquivo chamado `index.html` dentro dela. Vamos começar com este [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code) HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## Templates HTML

Se você quiser criar múltiplas telas para uma página web, uma solução seria criar um arquivo HTML para cada tela que deseja exibir. No entanto, essa solução apresenta alguns inconvenientes:

- É necessário recarregar todo o HTML ao alternar entre telas, o que pode ser lento.
- É difícil compartilhar dados entre as diferentes telas.

Outra abordagem é ter apenas um arquivo HTML e definir múltiplos [templates HTML](https://developer.mozilla.org/docs/Web/HTML/Element/template) usando o elemento `<template>`. Um template é um bloco HTML reutilizável que não é exibido pelo navegador e precisa ser instanciado em tempo de execução usando JavaScript.

### Tarefa

Vamos criar um aplicativo bancário com duas telas: a página de login e o painel (dashboard). Primeiro, vamos adicionar no corpo do HTML um elemento placeholder que usaremos para instanciar as diferentes telas do nosso aplicativo:

```html
<div id="app">Loading...</div>
```

Estamos atribuindo um `id` a ele para facilitar sua localização com JavaScript mais tarde.

> Dica: como o conteúdo deste elemento será substituído, podemos colocar uma mensagem ou indicador de carregamento que será exibido enquanto o aplicativo está carregando.

Em seguida, vamos adicionar abaixo o template HTML para a página de login. Por enquanto, colocaremos apenas um título e uma seção contendo um link que usaremos para realizar a navegação.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Depois, adicionaremos outro template HTML para a página do painel. Esta página conterá diferentes seções:

- Um cabeçalho com um título e um link para logout
- O saldo atual da conta bancária
- Uma lista de transações, exibida em uma tabela

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> Dica: ao criar templates HTML, se você quiser ver como eles ficarão, pode comentar as linhas `<template>` e `</template>` envolvendo-as com `<!-- -->`.

✅ Por que você acha que usamos atributos `id` nos templates? Poderíamos usar algo como classes?

## Exibindo templates com JavaScript

Se você tentar abrir seu arquivo HTML atual em um navegador, verá que ele fica travado exibindo `Loading...`. Isso acontece porque precisamos adicionar algum código JavaScript para instanciar e exibir os templates HTML.

Instanciar um template geralmente é feito em 3 etapas:

1. Recuperar o elemento template no DOM, por exemplo, usando [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Clonar o elemento template, usando [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Anexá-lo ao DOM sob um elemento visível, por exemplo, usando [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ Por que precisamos clonar o template antes de anexá-lo ao DOM? O que você acha que aconteceria se pulássemos essa etapa?

### Tarefa

Crie um novo arquivo chamado `app.js` na pasta do seu projeto e importe esse arquivo na seção `<head>` do seu HTML:

```html
<script src="app.js" defer></script>
```

Agora, no `app.js`, vamos criar uma nova função chamada `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

O que fazemos aqui são exatamente os 3 passos descritos acima. Instanciamos o template com o `id` `templateId` e colocamos seu conteúdo clonado dentro do nosso placeholder do aplicativo. Note que precisamos usar `cloneNode(true)` para copiar toda a subárvore do template.

Agora chame essa função com um dos templates e veja o resultado.

```js
updateRoute('login');
```

✅ Qual é o propósito deste código `app.innerHTML = '';`? O que acontece sem ele?

## Criando rotas

Quando falamos de um aplicativo web, chamamos de *Roteamento* a intenção de mapear **URLs** para telas específicas que devem ser exibidas. Em um site com múltiplos arquivos HTML, isso é feito automaticamente, pois os caminhos dos arquivos são refletidos na URL. Por exemplo, com esses arquivos na pasta do seu projeto:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Se você criar um servidor web com `mywebsite` como raiz, o mapeamento de URLs será:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

No entanto, para nosso aplicativo web, estamos usando um único arquivo HTML contendo todas as telas, então esse comportamento padrão não nos ajudará. Precisamos criar esse mapeamento manualmente e atualizar o template exibido usando JavaScript.

### Tarefa

Usaremos um objeto simples para implementar um [mapa](https://en.wikipedia.org/wiki/Associative_array) entre caminhos de URL e nossos templates. Adicione este objeto no topo do seu arquivo `app.js`.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Agora vamos modificar um pouco a função `updateRoute`. Em vez de passar diretamente o `templateId` como argumento, queremos recuperá-lo primeiro olhando para a URL atual e, em seguida, usar nosso mapa para obter o valor correspondente do `templateId`. Podemos usar [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) para obter apenas a seção de caminho da URL.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Aqui mapeamos as rotas que declaramos para o template correspondente. Você pode testar que funciona corretamente alterando a URL manualmente no navegador.

✅ O que acontece se você inserir um caminho desconhecido na URL? Como poderíamos resolver isso?

## Adicionando navegação

O próximo passo para nosso aplicativo é adicionar a possibilidade de navegar entre páginas sem precisar alterar a URL manualmente. Isso implica duas coisas:

1. Atualizar a URL atual
2. Atualizar o template exibido com base na nova URL

Já cuidamos da segunda parte com a função `updateRoute`, então precisamos descobrir como atualizar a URL atual.

Teremos que usar JavaScript e, mais especificamente, o [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), que permite atualizar a URL e criar uma nova entrada no histórico de navegação, sem recarregar o HTML.

> Nota: Embora o elemento âncora HTML [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) possa ser usado sozinho para criar hiperlinks para diferentes URLs, ele fará o navegador recarregar o HTML por padrão. É necessário evitar esse comportamento ao lidar com roteamento usando JavaScript personalizado, utilizando a função `preventDefault()` no evento de clique.

### Tarefa

Vamos criar uma nova função que podemos usar para navegar em nosso aplicativo:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Este método primeiro atualiza a URL atual com base no caminho fornecido e, em seguida, atualiza o template. A propriedade `window.location.origin` retorna a raiz da URL, permitindo-nos reconstruir uma URL completa a partir de um caminho fornecido.

Agora que temos essa função, podemos resolver o problema que temos se um caminho não corresponder a nenhuma rota definida. Vamos modificar a função `updateRoute` adicionando um fallback para uma das rotas existentes caso não consigamos encontrar uma correspondência.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Se uma rota não puder ser encontrada, agora redirecionaremos para a página de `login`.

Agora vamos criar uma função para obter a URL quando um link for clicado e evitar o comportamento padrão do navegador para links:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Vamos completar o sistema de navegação adicionando vinculações aos links de *Login* e *Logout* no HTML.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

O objeto `event` acima captura o evento de `click` e o passa para nossa função `onLinkClick`.

Usando o atributo [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick), vinculamos o evento de `click` ao código JavaScript, aqui a chamada para a função `navigate()`.

Tente clicar nesses links, agora você deve ser capaz de navegar entre as diferentes telas do seu aplicativo.

✅ O método `history.pushState` faz parte do padrão HTML5 e é implementado em [todos os navegadores modernos](https://caniuse.com/?search=pushState). Se você estiver criando um aplicativo web para navegadores mais antigos, há um truque que pode usar no lugar dessa API: utilizando um [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) antes do caminho, você pode implementar um roteamento que funciona com navegação de âncoras regulares e não recarrega a página, já que seu propósito era criar links internos dentro de uma página.

## Lidando com os botões de voltar e avançar do navegador

Usar o `history.pushState` cria novas entradas no histórico de navegação do navegador. Você pode verificar isso segurando o *botão de voltar* do navegador, ele deve exibir algo como isto:

![Captura de tela do histórico de navegação](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.br.png)

Se você tentar clicar no botão de voltar algumas vezes, verá que a URL atual muda e o histórico é atualizado, mas o mesmo template continua sendo exibido.

Isso acontece porque o aplicativo não sabe que precisamos chamar `updateRoute()` toda vez que o histórico muda. Se você der uma olhada na [documentação do `history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), verá que, se o estado mudar - ou seja, se nos movermos para uma URL diferente - o evento [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) é acionado. Vamos usar isso para corrigir o problema.

### Tarefa

Para garantir que o template exibido seja atualizado quando o histórico do navegador mudar, vamos anexar uma nova função que chama `updateRoute()`. Faremos isso no final do nosso arquivo `app.js`:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Nota: usamos uma [função arrow](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) aqui para declarar nosso manipulador de eventos `popstate` por concisão, mas uma função regular funcionaria da mesma forma.

Aqui está um vídeo de revisão sobre funções arrow:

[![Funções Arrow](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Funções Arrow")

> 🎥 Clique na imagem acima para assistir a um vídeo sobre funções arrow.

Agora tente usar os botões de voltar e avançar do navegador e verifique se a rota exibida é atualizada corretamente desta vez.

---

## 🚀 Desafio

Adicione um novo template e rota para uma terceira página que mostre os créditos deste aplicativo.

## Questionário Pós-Aula

[Questionário pós-aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/42)

## Revisão e Autoestudo

O roteamento é uma das partes surpreendentemente complicadas do desenvolvimento web, especialmente à medida que a web se move de comportamentos de atualização de página para atualizações de página em Aplicativos de Página Única (SPA). Leia um pouco sobre [como o serviço Azure Static Web App](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) lida com roteamento. Você consegue explicar por que algumas das decisões descritas nesse documento são necessárias?

## Tarefa

[Melhore o roteamento](assignment.md)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.