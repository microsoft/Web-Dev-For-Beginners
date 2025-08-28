<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4fa20c513e367e9cdd401bf49ae16e33",
  "translation_date": "2025-08-24T13:42:59+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "pt"
}
-->
# Criar uma App Bancária Parte 4: Conceitos de Gestão de Estado

## Questionário Pré-Aula

[Questionário pré-aula](https://ff-quizzes.netlify.app/web/quiz/47)

### Introdução

À medida que uma aplicação web cresce, torna-se um desafio acompanhar todos os fluxos de dados. Que código obtém os dados, que página os consome, onde e quando precisam ser atualizados... é fácil acabar com um código confuso e difícil de manter. Isto é especialmente verdade quando é necessário partilhar dados entre diferentes páginas da aplicação, como os dados do utilizador. O conceito de *gestão de estado* sempre existiu em todos os tipos de programas, mas à medida que as aplicações web continuam a crescer em complexidade, tornou-se um ponto-chave a considerar durante o desenvolvimento.

Nesta última parte, vamos rever a aplicação que construímos para repensar como o estado é gerido, permitindo suporte para atualizações do navegador em qualquer momento e persistindo os dados entre sessões de utilizador.

### Pré-requisitos

É necessário ter concluído a parte de [obtenção de dados](../3-data/README.md) da aplicação web para esta lição. Também é necessário instalar o [Node.js](https://nodejs.org) e [executar a API do servidor](../api/README.md) localmente para poder gerir os dados da conta.

Pode testar se o servidor está a funcionar corretamente executando este comando num terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Repensar a gestão de estado

Na [lição anterior](../3-data/README.md), introduzimos um conceito básico de estado na nossa aplicação com a variável global `account`, que contém os dados bancários do utilizador atualmente autenticado. No entanto, a nossa implementação atual tem algumas falhas. Experimente atualizar a página quando estiver no painel de controlo. O que acontece?

Há 3 problemas com o código atual:

- O estado não é persistido, pois uma atualização do navegador leva-o de volta à página de login.
- Existem várias funções que modificam o estado. À medida que a aplicação cresce, pode tornar-se difícil acompanhar as alterações e é fácil esquecer de atualizar algo.
- O estado não é limpo, então, quando clica em *Logout*, os dados da conta ainda estão lá, mesmo estando na página de login.

Poderíamos atualizar o nosso código para resolver estes problemas um por um, mas isso criaria mais duplicação de código e tornaria a aplicação mais complexa e difícil de manter. Ou poderíamos parar por alguns minutos e repensar a nossa estratégia.

> Que problemas estamos realmente a tentar resolver aqui?

A [gestão de estado](https://en.wikipedia.org/wiki/State_management) trata de encontrar uma boa abordagem para resolver estes dois problemas específicos:

- Como manter os fluxos de dados numa aplicação compreensíveis?
- Como manter os dados do estado sempre sincronizados com a interface do utilizador (e vice-versa)?

Depois de resolver estas questões, quaisquer outros problemas que possa ter podem já estar resolvidos ou tornarem-se mais fáceis de corrigir. Existem muitas abordagens possíveis para resolver estes problemas, mas vamos optar por uma solução comum que consiste em **centralizar os dados e as formas de os alterar**. Os fluxos de dados seriam assim:

![Esquema mostrando os fluxos de dados entre o HTML, ações do utilizador e o estado](../../../../7-bank-project/4-state-management/images/data-flow.png)

> Não vamos abordar aqui a parte em que os dados atualizam automaticamente a visualização, pois está ligada a conceitos mais avançados de [Programação Reativa](https://en.wikipedia.org/wiki/Reactive_programming). É um bom tema para explorar mais a fundo.

✅ Existem muitas bibliotecas com diferentes abordagens para a gestão de estado, sendo o [Redux](https://redux.js.org) uma opção popular. Dê uma olhada nos conceitos e padrões utilizados, pois é frequentemente uma boa forma de aprender sobre os potenciais problemas que pode enfrentar em grandes aplicações web e como resolvê-los.

### Tarefa

Vamos começar com um pouco de refatoração. Substitua a declaração de `account`:

```js
let account = null;
```

Por:

```js
let state = {
  account: null
};
```

A ideia é *centralizar* todos os dados da aplicação num único objeto de estado. Por enquanto, só temos `account` no estado, então não muda muito, mas cria um caminho para futuras evoluções.

Também temos de atualizar as funções que o utilizam. Nas funções `register()` e `login()`, substitua `account = ...` por `state.account = ...`;

No início da função `updateDashboard()`, adicione esta linha:

```js
const account = state.account;
```

Esta refatoração, por si só, não trouxe muitas melhorias, mas a ideia era preparar o terreno para as próximas alterações.

## Acompanhar alterações nos dados

Agora que implementámos o objeto `state` para armazenar os nossos dados, o próximo passo é centralizar as atualizações. O objetivo é tornar mais fácil acompanhar quaisquer alterações e quando elas acontecem.

Para evitar alterações feitas diretamente ao objeto `state`, também é uma boa prática considerá-lo [*imutável*](https://en.wikipedia.org/wiki/Immutable_object), o que significa que não pode ser modificado de forma alguma. Isso também implica que é necessário criar um novo objeto de estado se quiser alterar algo nele. Ao fazer isso, protege-se contra potenciais [efeitos colaterais](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) indesejados e abre-se a possibilidade de implementar novas funcionalidades na aplicação, como desfazer/refazer alterações, além de facilitar a depuração. Por exemplo, pode registar todas as alterações feitas ao estado e manter um histórico para entender a origem de um erro.

Em JavaScript, pode usar [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) para criar uma versão imutável de um objeto. Se tentar fazer alterações num objeto imutável, será gerada uma exceção.

✅ Sabe a diferença entre um objeto imutável *superficial* e *profundo*? Pode ler sobre isso [aqui](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

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

Nesta função, estamos a criar um novo objeto de estado e a copiar os dados do estado anterior usando o [*operador spread (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Depois, substituímos uma propriedade específica do objeto de estado com os novos dados usando a [notação de colchetes](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` para atribuição. Por fim, bloqueamos o objeto para evitar modificações usando `Object.freeze()`. Por enquanto, só temos a propriedade `account` armazenada no estado, mas com esta abordagem pode adicionar quantas propriedades forem necessárias.

Também vamos atualizar a inicialização do `state` para garantir que o estado inicial também está congelado:

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

Agora vamos aproveitar para corrigir o problema dos dados da conta não serem limpos quando o utilizador clica em *Logout*.

Crie uma nova função `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Na função `updateDashboard()`, substitua a redireção `return navigate('/login');` por `return logout();`;

Experimente registar uma nova conta, fazer logout e voltar a entrar para verificar se tudo ainda funciona corretamente.

> Dica: pode verificar todas as alterações no estado adicionando `console.log(state)` no final de `updateState()` e abrindo a consola nas ferramentas de desenvolvimento do navegador.

## Persistir o estado

A maioria das aplicações web precisa de persistir dados para funcionar corretamente. Todos os dados críticos são geralmente armazenados numa base de dados e acedidos através de uma API de servidor, como os dados da conta do utilizador no nosso caso. Mas, por vezes, também é interessante persistir alguns dados na aplicação cliente que está a ser executada no navegador, para uma melhor experiência do utilizador ou para melhorar o desempenho do carregamento.

Quando quiser persistir dados no navegador, há algumas perguntas importantes que deve fazer:

- *Os dados são sensíveis?* Deve evitar armazenar quaisquer dados sensíveis no cliente, como palavras-passe de utilizadores.
- *Por quanto tempo precisa de manter estes dados?* Pretende aceder a estes dados apenas durante a sessão atual ou quer que sejam armazenados para sempre?

Existem várias formas de armazenar informações numa aplicação web, dependendo do que pretende alcançar. Por exemplo, pode usar os URLs para armazenar uma consulta de pesquisa e torná-la partilhável entre utilizadores. Também pode usar [cookies HTTP](https://developer.mozilla.org/docs/Web/HTTP/Cookies) se os dados precisarem de ser partilhados com o servidor, como informações de [autenticação](https://en.wikipedia.org/wiki/Authentication).

Outra opção é usar uma das muitas APIs do navegador para armazenar dados. Duas delas são particularmente interessantes:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): um [armazenamento chave/valor](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) que permite persistir dados específicos do site atual entre diferentes sessões. Os dados guardados nele nunca expiram.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): funciona da mesma forma que o `localStorage`, exceto que os dados armazenados nele são apagados quando a sessão termina (quando o navegador é fechado).

Note que ambas as APIs só permitem armazenar [strings](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). Se quiser armazenar objetos complexos, terá de os serializar para o formato [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) usando [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Se quiser criar uma aplicação web que não funcione com um servidor, também é possível criar uma base de dados no cliente usando a API [`IndexedDB`](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Esta é reservada para casos de uso avançados ou se precisar de armazenar uma quantidade significativa de dados, pois é mais complexa de usar.

### Tarefa

Queremos que os nossos utilizadores permaneçam autenticados até clicarem explicitamente no botão *Logout*, por isso vamos usar o `localStorage` para armazenar os dados da conta. Primeiro, vamos definir uma chave que usaremos para armazenar os nossos dados.

```js
const storageKey = 'savedAccount';
```

Depois, adicione esta linha no final da função `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Com isto, os dados da conta do utilizador serão persistidos e estarão sempre atualizados, já que centralizámos anteriormente todas as atualizações do estado. É aqui que começamos a beneficiar de todas as refatorações anteriores 🙂.

Como os dados são guardados, também temos de cuidar de os restaurar quando a aplicação é carregada. Como começaremos a ter mais código de inicialização, pode ser uma boa ideia criar uma nova função `init`, que também inclui o nosso código anterior no final de `app.js`:

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

Aqui recuperamos os dados guardados e, se houver algum, atualizamos o estado em conformidade. É importante fazer isso *antes* de atualizar a rota, pois pode haver código que depende do estado durante a atualização da página.

Também podemos tornar a página *Dashboard* a página padrão da nossa aplicação, já que agora estamos a persistir os dados da conta. Se não forem encontrados dados, o painel de controlo trata de redirecionar para a página de *Login* de qualquer forma. Na função `updateRoute()`, substitua o fallback `return navigate('/login');` por `return navigate('/dashboard');`.

Agora faça login na aplicação e experimente atualizar a página. Deve permanecer no painel de controlo. Com esta atualização, resolvemos todos os problemas iniciais...

## Atualizar os dados

...Mas também podemos ter criado um novo problema. Oops!

Vá para o painel de controlo usando a conta `test`, depois execute este comando num terminal para criar uma nova transação:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Agora experimente atualizar a página do painel de controlo no navegador. O que acontece? Vê a nova transação?

O estado é persistido indefinidamente graças ao `localStorage`, mas isso também significa que nunca é atualizado até sair da aplicação e voltar a entrar!

Uma possível estratégia para corrigir isso é recarregar os dados da conta sempre que o painel de controlo for carregado, para evitar dados desatualizados.

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

Este método verifica se estamos atualmente autenticados e, em seguida, recarrega os dados da conta a partir do servidor.

Crie outra função chamada `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Esta função atualiza os dados da conta e, em seguida, cuida de atualizar o HTML da página do painel de controlo. É o que precisamos de chamar quando a rota do painel de controlo for carregada. Atualize a definição da rota com:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Experimente recarregar o painel de controlo agora, ele deve exibir os dados da conta atualizados.

---

## 🚀 Desafio

Agora que recarregamos os dados da conta sempre que o painel de controlo é carregado, acha que ainda precisamos de persistir *todos os dados da conta*?

Tente trabalhar em conjunto para alterar o que é guardado e carregado do `localStorage` para incluir apenas o que é absolutamente necessário para a aplicação funcionar.

## Questionário Pós-Aula
[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/48)

## Tarefa

[Implementar o diálogo "Adicionar transação"](assignment.md)

Aqui está um exemplo do resultado após concluir a tarefa:

![Captura de ecrã mostrando um exemplo do diálogo "Adicionar transação"](../../../../7-bank-project/4-state-management/images/dialog.png)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.