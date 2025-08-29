<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5d2efabbc8f94d89f4317ee8646c3ce9",
  "translation_date": "2025-08-28T23:48:53+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "br"
}
-->
# Construindo um App Bancário Parte 4: Conceitos de Gerenciamento de Estado

## Quiz Pré-Aula

[Quiz pré-aula](https://ff-quizzes.netlify.app/web/quiz/47)

### Introdução

À medida que uma aplicação web cresce, torna-se um desafio acompanhar todos os fluxos de dados. Qual código obtém os dados, qual página os consome, onde e quando eles precisam ser atualizados... é fácil acabar com um código bagunçado e difícil de manter. Isso é especialmente verdadeiro quando você precisa compartilhar dados entre diferentes páginas do seu app, como os dados do usuário. O conceito de *gerenciamento de estado* sempre existiu em todos os tipos de programas, mas à medida que os apps web continuam crescendo em complexidade, tornou-se um ponto-chave a ser considerado durante o desenvolvimento.

Nesta última parte, vamos revisar o app que construímos para repensar como o estado é gerenciado, permitindo suporte para atualização do navegador a qualquer momento e persistindo dados entre sessões do usuário.

### Pré-requisitos

Você precisa ter concluído a parte de [busca de dados](../3-data/README.md) do app web para esta lição. Também é necessário instalar o [Node.js](https://nodejs.org) e [executar a API do servidor](../api/README.md) localmente para gerenciar os dados da conta.

Você pode testar se o servidor está funcionando corretamente executando este comando em um terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Repensando o gerenciamento de estado

Na [lição anterior](../3-data/README.md), introduzimos um conceito básico de estado em nosso app com a variável global `account`, que contém os dados bancários do usuário atualmente logado. No entanto, nossa implementação atual tem algumas falhas. Tente atualizar a página enquanto estiver no painel. O que acontece?

Há 3 problemas com o código atual:

- O estado não é persistido, pois uma atualização do navegador leva você de volta à página de login.
- Existem várias funções que modificam o estado. À medida que o app cresce, isso pode dificultar o rastreamento das mudanças e é fácil esquecer de atualizar algo.
- O estado não é limpo, então quando você clica em *Logout*, os dados da conta ainda estão lá, mesmo que você esteja na página de login.

Poderíamos atualizar nosso código para resolver esses problemas um por um, mas isso criaria mais duplicação de código e tornaria o app mais complexo e difícil de manter. Ou poderíamos parar por alguns minutos e repensar nossa estratégia.

> Quais problemas estamos realmente tentando resolver aqui?

[Gerenciamento de estado](https://en.wikipedia.org/wiki/State_management) trata de encontrar uma boa abordagem para resolver esses dois problemas específicos:

- Como manter os fluxos de dados em um app compreensíveis?
- Como manter os dados de estado sempre sincronizados com a interface do usuário (e vice-versa)?

Depois de resolver esses problemas, quaisquer outros problemas que você possa ter podem já estar resolvidos ou se tornar mais fáceis de corrigir. Existem muitas abordagens possíveis para resolver esses problemas, mas seguiremos uma solução comum que consiste em **centralizar os dados e as formas de alterá-los**. Os fluxos de dados seriam assim:

![Esquema mostrando os fluxos de dados entre o HTML, ações do usuário e estado](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.br.png)

> Não abordaremos aqui a parte em que os dados automaticamente acionam a atualização da visualização, pois está ligada a conceitos mais avançados de [Programação Reativa](https://en.wikipedia.org/wiki/Reactive_programming). É um bom assunto para um mergulho mais profundo.

✅ Existem muitas bibliotecas por aí com diferentes abordagens para gerenciamento de estado, sendo o [Redux](https://redux.js.org) uma opção popular. Dê uma olhada nos conceitos e padrões usados, pois muitas vezes é uma boa maneira de aprender quais problemas potenciais você pode enfrentar em apps web grandes e como eles podem ser resolvidos.

### Tarefa

Começaremos com um pouco de refatoração. Substitua a declaração de `account`:

```js
let account = null;
```

Por:

```js
let state = {
  account: null
};
```

A ideia é *centralizar* todos os dados do nosso app em um único objeto de estado. Por enquanto, só temos `account` no estado, então isso não muda muito, mas cria um caminho para evoluções.

Também precisamos atualizar as funções que o utilizam. Nas funções `register()` e `login()`, substitua `account = ...` por `state.account = ...`;

No início da função `updateDashboard()`, adicione esta linha:

```js
const account = state.account;
```

Essa refatoração por si só não trouxe muitas melhorias, mas a ideia era preparar o terreno para as próximas mudanças.

## Rastrear mudanças nos dados

Agora que colocamos em prática o objeto `state` para armazenar nossos dados, o próximo passo é centralizar as atualizações. O objetivo é facilitar o rastreamento de quaisquer mudanças e quando elas acontecem.

Para evitar que mudanças sejam feitas diretamente no objeto `state`, também é uma boa prática considerá-lo [*imutável*](https://en.wikipedia.org/wiki/Immutable_object), o que significa que ele não pode ser modificado de forma alguma. Isso também significa que você precisa criar um novo objeto de estado se quiser alterar algo nele. Ao fazer isso, você constrói uma proteção contra possíveis [efeitos colaterais](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) indesejados e abre possibilidades para novos recursos no seu app, como implementar desfazer/refazer, além de facilitar a depuração. Por exemplo, você poderia registrar todas as mudanças feitas no estado e manter um histórico das alterações para entender a origem de um bug.

Em JavaScript, você pode usar [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) para criar uma versão imutável de um objeto. Se você tentar fazer alterações em um objeto imutável, uma exceção será lançada.

✅ Você sabe a diferença entre um objeto imutável *superficial* e *profundo*? Você pode ler sobre isso [aqui](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

### Tarefa

Vamos criar uma nova função `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

Nesta função, estamos criando um novo objeto de estado e copiando os dados do estado anterior usando o [*operador spread (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Em seguida, substituímos uma propriedade específica do objeto de estado com os novos dados usando a [notação de colchetes](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` para atribuição. Por fim, bloqueamos o objeto para evitar modificações usando `Object.freeze()`. Por enquanto, só temos a propriedade `account` armazenada no estado, mas com essa abordagem você pode adicionar quantas propriedades precisar no estado.

Também atualizaremos a inicialização do `state` para garantir que o estado inicial seja congelado:

```js
let state = Object.freeze({
  account: null
});
```

Depois disso, atualize a função `register` substituindo a atribuição `state.account = result;` por:

```js
updateState('account', result);
```

Faça o mesmo com a função `login`, substituindo `state.account = data;` por:

```js
updateState('account', data);
```

Agora aproveitaremos para corrigir o problema de os dados da conta não serem limpos quando o usuário clica em *Logout*.

Crie uma nova função `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Na função `updateDashboard()`, substitua o redirecionamento `return navigate('/login');` por `return logout();`;

Tente registrar uma nova conta, fazer logout e login novamente para verificar se tudo ainda funciona corretamente.

> Dica: você pode observar todas as mudanças de estado adicionando `console.log(state)` no final de `updateState()` e abrindo o console nas ferramentas de desenvolvimento do navegador.

## Persistir o estado

A maioria dos apps web precisa persistir dados para funcionar corretamente. Todos os dados críticos geralmente são armazenados em um banco de dados e acessados por meio de uma API de servidor, como os dados da conta do usuário no nosso caso. Mas às vezes, também é interessante persistir alguns dados no app cliente que está sendo executado no navegador, para uma melhor experiência do usuário ou para melhorar o desempenho de carregamento.

Quando você deseja persistir dados no navegador, há algumas perguntas importantes que você deve se fazer:

- *Os dados são sensíveis?* Você deve evitar armazenar qualquer dado sensível no cliente, como senhas de usuários.
- *Por quanto tempo você precisa manter esses dados?* Você planeja acessar esses dados apenas para a sessão atual ou deseja que eles sejam armazenados para sempre?

Existem várias maneiras de armazenar informações dentro de um app web, dependendo do que você deseja alcançar. Por exemplo, você pode usar as URLs para armazenar uma consulta de pesquisa e torná-la compartilhável entre usuários. Você também pode usar [cookies HTTP](https://developer.mozilla.org/docs/Web/HTTP/Cookies) se os dados precisarem ser compartilhados com o servidor, como informações de [autenticação](https://en.wikipedia.org/wiki/Authentication).

Outra opção é usar uma das muitas APIs do navegador para armazenar dados. Duas delas são particularmente interessantes:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): um [Key/Value store](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) que permite persistir dados específicos do site atual entre diferentes sessões. Os dados salvos nele nunca expiram.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): funciona da mesma forma que o `localStorage`, exceto que os dados armazenados nele são apagados quando a sessão termina (quando o navegador é fechado).

Observe que ambas as APIs permitem apenas armazenar [strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). Se você quiser armazenar objetos complexos, precisará serializá-los no formato [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) usando [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Se você quiser criar um app web que não funcione com um servidor, também é possível criar um banco de dados no cliente usando a API [`IndexedDB`](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Esta é reservada para casos de uso avançados ou se você precisar armazenar uma quantidade significativa de dados, pois é mais complexa de usar.

### Tarefa

Queremos que nossos usuários permaneçam logados até que cliquem explicitamente no botão *Logout*, então usaremos `localStorage` para armazenar os dados da conta. Primeiro, vamos definir uma chave que usaremos para armazenar nossos dados.

```js
const storageKey = 'savedAccount';
```

Em seguida, adicione esta linha ao final da função `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Com isso, os dados da conta do usuário serão persistidos e sempre atualizados, já que centralizamos anteriormente todas as atualizações de estado. É aqui que começamos a colher os benefícios de todas as nossas refatorações anteriores 🙂.

Como os dados são salvos, também precisamos cuidar de restaurá-los quando o app for carregado. Como começaremos a ter mais código de inicialização, pode ser uma boa ideia criar uma nova função `init`, que também inclui nosso código anterior no final de `app.js`:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

Aqui, recuperamos os dados salvos e, se houver algum, atualizamos o estado de acordo. É importante fazer isso *antes* de atualizar a rota, pois pode haver código que depende do estado durante a atualização da página.

Também podemos tornar a página *Dashboard* a página padrão do nosso app, já que agora estamos persistindo os dados da conta. Se nenhum dado for encontrado, o painel cuida de redirecionar para a página de *Login* de qualquer forma. Em `updateRoute()`, substitua o fallback `return navigate('/login');` por `return navigate('/dashboard');`.

Agora faça login no app e tente atualizar a página. Você deve permanecer no painel. Com essa atualização, resolvemos todos os nossos problemas iniciais...

## Atualizar os dados

...Mas também podemos ter criado um novo problema. Oops!

Vá para o painel usando a conta `test`, depois execute este comando em um terminal para criar uma nova transação:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Agora tente atualizar a página do painel no navegador. O que acontece? Você vê a nova transação?

O estado é persistido indefinidamente graças ao `localStorage`, mas isso também significa que ele nunca é atualizado até que você saia do app e entre novamente!

Uma possível estratégia para corrigir isso é recarregar os dados da conta toda vez que o painel for carregado, para evitar dados desatualizados.

### Tarefa

Crie uma nova função `updateAccountData`:

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

Este método verifica se estamos atualmente logados e então recarrega os dados da conta do servidor.

Crie outra função chamada `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Esta função atualiza os dados da conta e cuida de atualizar o HTML da página do painel. É o que precisamos chamar quando a rota do painel for carregada. Atualize a definição da rota com:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Agora tente atualizar o painel. Ele deve exibir os dados da conta atualizados.

---

## 🚀 Desafio

Agora que recarregamos os dados da conta toda vez que o painel é carregado, você acha que ainda precisamos persistir *todos os dados da conta*?

Tente trabalhar em equipe para alterar o que é salvo e carregado do `localStorage` para incluir apenas o que é absolutamente necessário para o app funcionar.

## Quiz Pós-Aula

[Quiz pós-aula](https://ff-quizzes.netlify.app/web/quiz/48)

## Tarefa
[Implementar o diálogo "Adicionar transação"](assignment.md)

Aqui está um exemplo do resultado após concluir a tarefa:

![Captura de tela mostrando um exemplo de diálogo "Adicionar transação"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.br.png)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.