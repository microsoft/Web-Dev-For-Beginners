<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f7f87871312cf6cc12662da7d973182",
  "translation_date": "2025-08-24T12:18:40+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "pt"
}
-->
# Fundamentos de JavaScript: Arrays e Ciclos

![Fundamentos de JavaScript - Arrays](../../../../sketchnotes/webdev101-js-arrays.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Questionário Pré-Aula
[Questionário pré-aula](https://ff-quizzes.netlify.app/web/quiz/13)

Esta lição aborda os fundamentos do JavaScript, a linguagem que proporciona interatividade na web. Nesta lição, vais aprender sobre arrays e ciclos, que são usados para manipular dados.

[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![Ciclos](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")

> 🎥 Clica nas imagens acima para vídeos sobre arrays e ciclos.

> Podes fazer esta lição no [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Arrays

Trabalhar com dados é uma tarefa comum em qualquer linguagem, e torna-se muito mais fácil quando os dados estão organizados num formato estrutural, como arrays. Com arrays, os dados são armazenados numa estrutura semelhante a uma lista. Uma grande vantagem dos arrays é que podes armazenar diferentes tipos de dados num único array.

✅ Arrays estão por todo o lado! Consegues pensar num exemplo da vida real de um array, como um conjunto de painéis solares?

A sintaxe de um array é um par de colchetes.

```javascript
let myArray = [];
```

Este é um array vazio, mas os arrays podem ser declarados já preenchidos com dados. Os valores num array são separados por uma vírgula.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

Os valores do array são atribuídos a um valor único chamado **índice**, um número inteiro que é atribuído com base na sua distância do início do array. No exemplo acima, o valor de string "Chocolate" tem um índice de 0, e o índice de "Rocky Road" é 4. Usa o índice com colchetes para recuperar, alterar ou inserir valores no array.

✅ Surpreende-te que os arrays começam no índice zero? Em algumas linguagens de programação, os índices começam em 1. Há uma história interessante sobre isto, que podes [ler na Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

Podes usar o índice para alterar um valor, assim:

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

E podes inserir um novo valor num índice específico assim:

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ Uma forma mais comum de adicionar valores a um array é utilizando operadores como array.push()

Para descobrir quantos itens existem num array, usa a propriedade `length`.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ Experimenta tu mesmo! Usa o console do teu navegador para criar e manipular um array da tua própria criação.

## Ciclos

Os ciclos permitem-nos realizar tarefas repetitivas ou **iterativas**, e podem poupar muito tempo e código. Cada iteração pode variar nas suas variáveis, valores e condições. Existem diferentes tipos de ciclos em JavaScript, e todos têm pequenas diferenças, mas essencialmente fazem a mesma coisa: iterar sobre dados.

### Ciclo For

O ciclo `for` requer 3 partes para iterar:
- `counter` Uma variável que é tipicamente inicializada com um número que conta o número de iterações
- `condition` Expressão que utiliza operadores de comparação para fazer o ciclo parar quando for `false`
- `iteration-expression` Executa no final de cada iteração, normalmente usado para alterar o valor do contador
  
```javascript
// Counting up to 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ Executa este código no console do navegador. O que acontece quando fazes pequenas alterações ao contador, condição ou expressão de iteração? Consegues fazê-lo correr ao contrário, criando uma contagem decrescente?

### Ciclo While

Ao contrário da sintaxe do ciclo `for`, os ciclos `while` apenas requerem uma condição que fará o ciclo parar quando a condição se tornar `false`. As condições nos ciclos geralmente dependem de outros valores como contadores, e devem ser geridas durante o ciclo. Os valores iniciais para os contadores devem ser criados fora do ciclo, e quaisquer expressões para cumprir uma condição, incluindo alterar o contador, devem ser mantidas dentro do ciclo.

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ Por que escolherias um ciclo for em vez de um ciclo while? 17 mil utilizadores tiveram a mesma pergunta no StackOverflow, e algumas das opiniões [podem ser interessantes para ti](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Ciclos e Arrays

Os arrays são frequentemente usados com ciclos porque a maioria das condições requer o comprimento do array para parar o ciclo, e o índice também pode ser o valor do contador.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ Experimenta iterar sobre um array da tua própria criação no console do navegador.

---

## 🚀 Desafio

Existem outras formas de iterar sobre arrays além dos ciclos for e while. Existem [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), e [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Reescreve o teu ciclo de array utilizando uma destas técnicas.

## Questionário Pós-Aula
[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/14)

## Revisão e Autoestudo

Os arrays em JavaScript têm muitos métodos associados a eles, que são extremamente úteis para manipulação de dados. [Lê sobre estes métodos](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) e experimenta alguns deles (como push, pop, slice e splice) num array da tua criação.

## Tarefa

[Iterar um Array](assignment.md)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.