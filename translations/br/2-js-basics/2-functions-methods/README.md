<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92e136090efc4341b1d51c37924c1802",
  "translation_date": "2025-08-28T23:54:01+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "br"
}
-->
# Noções Básicas de JavaScript: Métodos e Funções

![Noções Básicas de JavaScript - Funções](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.br.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pré-Aula
[Quiz pré-aula](https://ff-quizzes.netlify.app)

Quando pensamos em escrever código, sempre queremos garantir que ele seja legível. Embora isso possa parecer contraintuitivo, o código é lido muitas mais vezes do que é escrito. Uma ferramenta essencial no arsenal de um desenvolvedor para garantir um código sustentável é a **função**.

[![Métodos e Funções](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Métodos e Funções")

> 🎥 Clique na imagem acima para assistir a um vídeo sobre métodos e funções.

> Você pode acessar esta lição no [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funções

No seu núcleo, uma função é um bloco de código que podemos executar sob demanda. Isso é perfeito para cenários em que precisamos realizar a mesma tarefa várias vezes; em vez de duplicar a lógica em vários locais (o que tornaria difícil atualizá-la no futuro), podemos centralizá-la em um único local e chamá-la sempre que precisarmos realizar a operação - você pode até chamar funções dentro de outras funções!

Igualmente importante é a capacidade de nomear uma função. Embora isso possa parecer trivial, o nome fornece uma maneira rápida de documentar uma seção do código. Você pode pensar nisso como um rótulo em um botão. Se eu clicar em um botão que diz "Cancelar temporizador", sei que ele vai parar o relógio.

## Criando e chamando uma função

A sintaxe para uma função é assim:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Se eu quisesse criar uma função para exibir uma saudação, ela poderia ser assim:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Sempre que quisermos chamar (ou invocar) nossa função, usamos o nome da função seguido de `()`. Vale notar que nossa função pode ser definida antes ou depois de decidirmos chamá-la; o compilador JavaScript a encontrará para você.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Existe um tipo especial de função conhecido como **método**, que você já está usando! Na verdade, vimos isso no nosso exemplo acima quando usamos `console.log`. O que diferencia um método de uma função é que um método está anexado a um objeto (`console` no nosso exemplo), enquanto uma função é independente. Muitos desenvolvedores usam esses termos de forma intercambiável.

### Melhores práticas para funções

Há algumas boas práticas a serem lembradas ao criar funções:

- Como sempre, use nomes descritivos para saber o que a função fará.
- Use **camelCasing** para combinar palavras.
- Mantenha suas funções focadas em uma tarefa específica.

## Passando informações para uma função

Para tornar uma função mais reutilizável, muitas vezes você desejará passar informações para ela. Se considerarmos nosso exemplo `displayGreeting` acima, ele exibirá apenas **Hello, world!**. Não é a função mais útil que alguém poderia criar. Se quisermos torná-la um pouco mais flexível, como permitir que alguém especifique o nome da pessoa a ser saudada, podemos adicionar um **parâmetro**. Um parâmetro (às vezes chamado de **argumento**) é uma informação adicional enviada para uma função.

Os parâmetros são listados na parte de definição entre parênteses e são separados por vírgulas, assim:

```javascript
function name(param, param2, param3) {

}
```

Podemos atualizar nosso `displayGreeting` para aceitar um nome e exibi-lo.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Quando quisermos chamar nossa função e passar o parâmetro, especificamos isso entre os parênteses.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Valores padrão

Podemos tornar nossa função ainda mais flexível adicionando mais parâmetros. Mas e se não quisermos exigir que todos os valores sejam especificados? Mantendo nosso exemplo de saudação, poderíamos deixar o nome como obrigatório (precisamos saber quem estamos saudando), mas queremos permitir que a saudação em si seja personalizada conforme desejado. Se alguém não quiser personalizá-la, fornecemos um valor padrão. Para fornecer um valor padrão a um parâmetro, configuramos isso da mesma forma que configuramos um valor para uma variável - `parameterName = 'defaultValue'`. Para ver um exemplo completo:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Quando chamarmos a função, podemos decidir se queremos definir um valor para `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Valores de retorno

Até agora, a função que criamos sempre exibirá algo no [console](https://developer.mozilla.org/docs/Web/API/console). Às vezes, isso pode ser exatamente o que estamos procurando, especialmente quando criamos funções que chamarão outros serviços. Mas e se eu quiser criar uma função auxiliar para realizar um cálculo e fornecer o valor de volta para que eu possa usá-lo em outro lugar?

Podemos fazer isso usando um **valor de retorno**. Um valor de retorno é retornado pela função e pode ser armazenado em uma variável da mesma forma que armazenaríamos um valor literal, como uma string ou número.

Se uma função retornar algo, a palavra-chave `return` é usada. A palavra-chave `return` espera um valor ou referência do que está sendo retornado, assim:

```javascript
return myVariable;
```  

Podemos criar uma função para criar uma mensagem de saudação e retornar o valor para quem a chamou.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Ao chamar essa função, armazenaremos o valor em uma variável. Isso é muito semelhante a como definiríamos uma variável para um valor estático (como `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Funções como parâmetros para funções

À medida que você avança na sua carreira de programação, encontrará funções que aceitam outras funções como parâmetros. Esse truque interessante é comumente usado quando não sabemos quando algo vai ocorrer ou ser concluído, mas sabemos que precisamos realizar uma operação em resposta.

Como exemplo, considere [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), que inicia um temporizador e executará o código quando ele for concluído. Precisamos dizer a ele qual código queremos executar. Parece um trabalho perfeito para uma função!

Se você executar o código abaixo, após 3 segundos verá a mensagem **3 segundos se passaram**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Funções anônimas

Vamos dar outra olhada no que construímos. Estamos criando uma função com um nome que será usado apenas uma vez. À medida que nosso aplicativo se torna mais complexo, podemos nos ver criando muitas funções que serão chamadas apenas uma vez. Isso não é ideal. Acontece que nem sempre precisamos fornecer um nome!

Quando passamos uma função como parâmetro, podemos evitar criá-la com antecedência e, em vez disso, construí-la como parte do parâmetro. Usamos a mesma palavra-chave `function`, mas a construímos como um parâmetro.

Vamos reescrever o código acima para usar uma função anônima:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Se você executar nosso novo código, notará que obtemos os mesmos resultados. Criamos uma função, mas não precisamos dar um nome a ela!

### Funções de seta (fat arrow)

Um atalho comum em muitas linguagens de programação (incluindo JavaScript) é a capacidade de usar o que é chamado de função **arrow** ou **fat arrow**. Ela usa um indicador especial `=>`, que se parece com uma seta - daí o nome! Usando `=>`, podemos pular a palavra-chave `function`.

Vamos reescrever nosso código mais uma vez para usar uma função de seta:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Quando usar cada estratégia

Agora você viu que temos três maneiras de passar uma função como parâmetro e pode estar se perguntando quando usar cada uma. Se você sabe que usará a função mais de uma vez, crie-a normalmente. Se for usá-la apenas em um local, geralmente é melhor usar uma função anônima. Se você usará uma função de seta ou a sintaxe mais tradicional `function` é uma escolha sua, mas notará que a maioria dos desenvolvedores modernos prefere `=>`.

---

## 🚀 Desafio

Você consegue articular em uma frase a diferença entre funções e métodos? Tente!

## Quiz Pós-Aula
[Quiz pós-aula](https://ff-quizzes.netlify.app)

## Revisão e Autoestudo

Vale a pena [ler um pouco mais sobre funções de seta](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), já que elas estão sendo cada vez mais usadas em bases de código. Pratique escrever uma função e depois reescrevê-la com essa sintaxe.

## Tarefa

[Divirta-se com Funções](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.