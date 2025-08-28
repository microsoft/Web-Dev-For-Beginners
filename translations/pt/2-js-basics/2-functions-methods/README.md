<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-24T12:15:26+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "pt"
}
-->
# Fundamentos de JavaScript: Métodos e Funções

![Fundamentos de JavaScript - Funções](../../../../sketchnotes/webdev101-js-functions.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Questionário Pré-Aula
[Questionário pré-aula](https://ff-quizzes.netlify.app/web/quiz/9)

Quando pensamos em escrever código, queremos sempre garantir que ele seja legível. Embora isso possa parecer contraintuitivo, o código é lido muitas mais vezes do que é escrito. Uma ferramenta essencial no arsenal de um programador para garantir um código sustentável é a **função**.

[![Métodos e Funções](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Métodos e Funções")

> 🎥 Clique na imagem acima para assistir a um vídeo sobre métodos e funções.

> Pode aceder a esta lição no [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funções

No seu núcleo, uma função é um bloco de código que podemos executar sob demanda. Isto é perfeito para cenários onde precisamos realizar a mesma tarefa várias vezes; em vez de duplicar a lógica em vários locais (o que tornaria difícil atualizá-la no futuro), podemos centralizá-la num único local e chamá-la sempre que precisarmos realizar a operação - e até podemos chamar funções dentro de outras funções!

Igualmente importante é a capacidade de dar um nome a uma função. Embora isso possa parecer trivial, o nome fornece uma forma rápida de documentar uma secção do código. Pode pensar nisso como uma etiqueta num botão. Se eu clicar num botão que diz "Cancelar temporizador", sei que ele vai parar o relógio.

## Criar e chamar uma função

A sintaxe de uma função é a seguinte:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Se eu quisesse criar uma função para exibir uma saudação, poderia ser assim:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Sempre que quisermos chamar (ou invocar) a nossa função, usamos o nome da função seguido de `()`. Vale a pena notar que a nossa função pode ser definida antes ou depois de decidirmos chamá-la; o compilador JavaScript irá encontrá-la para si.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Existe um tipo especial de função conhecido como **método**, que já tem estado a usar! Na verdade, vimos isso no nosso exemplo acima quando usamos `console.log`. O que diferencia um método de uma função é que um método está associado a um objeto (`console` no nosso exemplo), enquanto uma função é independente. Muitos programadores usam estes termos de forma intercambiável.

### Melhores práticas para funções

Há algumas boas práticas a ter em mente ao criar funções:

- Como sempre, use nomes descritivos para saber o que a função faz
- Use **camelCasing** para combinar palavras
- Mantenha as suas funções focadas numa tarefa específica

## Passar informações para uma função

Para tornar uma função mais reutilizável, muitas vezes queremos passar informações para ela. Se considerarmos o nosso exemplo `displayGreeting` acima, ele apenas exibirá **Hello, world!**. Não é a função mais útil que se poderia criar. Se quisermos torná-la um pouco mais flexível, como permitir que alguém especifique o nome da pessoa a cumprimentar, podemos adicionar um **parâmetro**. Um parâmetro (às vezes também chamado de **argumento**) é uma informação adicional enviada para uma função.

Os parâmetros são listados na parte de definição entre parênteses e são separados por vírgulas, como no exemplo:

```javascript
function name(param, param2, param3) {

}
```

Podemos atualizar o nosso `displayGreeting` para aceitar um nome e exibi-lo.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Quando quisermos chamar a nossa função e passar o parâmetro, especificamo-lo entre parênteses.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Valores padrão

Podemos tornar a nossa função ainda mais flexível adicionando mais parâmetros. Mas e se não quisermos exigir que todos os valores sejam especificados? Continuando com o nosso exemplo de saudação, poderíamos deixar o nome como obrigatório (precisamos saber quem estamos a cumprimentar), mas queremos permitir que a saudação em si seja personalizada, se desejado. Se alguém não quiser personalizá-la, fornecemos um valor padrão. Para fornecer um valor padrão a um parâmetro, definimo-lo de forma semelhante a como definimos um valor para uma variável - `parameterName = 'defaultValue'`. Para ver um exemplo completo:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Quando chamamos a função, podemos então decidir se queremos definir um valor para `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Valores de retorno

Até agora, as funções que criámos sempre exibem resultados no [console](https://developer.mozilla.org/docs/Web/API/console). Às vezes, isso pode ser exatamente o que procuramos, especialmente quando criamos funções que irão chamar outros serviços. Mas e se quisermos criar uma função auxiliar para realizar um cálculo e fornecer o valor de volta para que possamos usá-lo noutro lugar?

Podemos fazer isso usando um **valor de retorno**. Um valor de retorno é devolvido pela função e pode ser armazenado numa variável, da mesma forma que armazenaríamos um valor literal, como uma string ou número.

Se uma função devolver algo, então a palavra-chave `return` é usada. A palavra-chave `return` espera um valor ou referência do que está a ser devolvido, como no exemplo:

```javascript
return myVariable;
```  

Podemos criar uma função para criar uma mensagem de saudação e devolver o valor ao chamador.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Ao chamar esta função, armazenaremos o valor numa variável. Isto é muito semelhante a definir uma variável com um valor estático (como `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Funções como parâmetros para outras funções

À medida que progride na sua carreira de programação, encontrará funções que aceitam outras funções como parâmetros. Este truque útil é frequentemente usado quando não sabemos quando algo vai ocorrer ou ser concluído, mas sabemos que precisamos realizar uma operação em resposta.

Por exemplo, considere [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), que inicia um temporizador e executa código quando este termina. Precisamos dizer-lhe qual código queremos executar. Parece o trabalho perfeito para uma função!

Se executar o código abaixo, após 3 segundos verá a mensagem **3 segundos passaram**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Funções anónimas

Vamos analisar novamente o que construímos. Estamos a criar uma função com um nome que será usado apenas uma vez. À medida que a nossa aplicação se torna mais complexa, podemos ver-nos a criar muitas funções que serão chamadas apenas uma vez. Isto não é ideal. Acontece que nem sempre precisamos fornecer um nome!

Quando passamos uma função como parâmetro, podemos evitar criá-la antecipadamente e, em vez disso, construí-la como parte do parâmetro. Usamos a mesma palavra-chave `function`, mas construímo-la como um parâmetro.

Vamos reescrever o código acima para usar uma função anónima:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Se executar o nosso novo código, notará que obtemos os mesmos resultados. Criámos uma função, mas não tivemos de lhe dar um nome!

### Funções de seta (fat arrow functions)

Um atalho comum em muitas linguagens de programação (incluindo JavaScript) é a capacidade de usar o que é chamado de **função de seta** ou **função fat arrow**. Ela usa um indicador especial `=>`, que se parece com uma seta - daí o nome! Ao usar `=>`, podemos ignorar a palavra-chave `function`.

Vamos reescrever o nosso código mais uma vez para usar uma função de seta:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Quando usar cada estratégia

Agora viu que temos três formas de passar uma função como parâmetro e pode estar a perguntar-se quando usar cada uma. Se souber que usará a função mais de uma vez, crie-a normalmente. Se a usar apenas num local, geralmente é melhor usar uma função anónima. Se usa uma função de seta ou a sintaxe mais tradicional `function` é uma questão de preferência, mas notará que a maioria dos programadores modernos prefere `=>`.

---

## 🚀 Desafio

Consegue articular numa frase a diferença entre funções e métodos? Experimente!

## Questionário Pós-Aula
[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/10)

## Revisão e Autoestudo

Vale a pena [ler um pouco mais sobre funções de seta](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), pois elas são cada vez mais usadas em bases de código. Pratique escrever uma função e, em seguida, reescrevê-la com esta sintaxe.

## Tarefa

[Divirta-se com Funções](assignment.md)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.