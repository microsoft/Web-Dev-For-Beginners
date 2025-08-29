<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f7009631b73556168ca435120a231c98",
  "translation_date": "2025-08-29T16:14:39+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "pt"
}
-->
# Fundamentos de JavaScript: Tomar Decisões

![Fundamentos de JavaScript - Tomar decisões](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.pt.png)

> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Questionário Pré-Aula

[Questionário pré-aula](https://ff-quizzes.netlify.app/web/quiz/11)

Tomar decisões e controlar a ordem em que o seu código é executado torna-o reutilizável e robusto. Esta secção aborda a sintaxe para controlar o fluxo de dados em JavaScript e a sua importância quando usada com tipos de dados Booleanos.

[![Tomar Decisões](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Tomar Decisões")

> 🎥 Clique na imagem acima para ver um vídeo sobre como tomar decisões.

> Pode seguir esta lição no [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Uma Breve Recapitulação sobre Booleanos

Os Booleanos só podem ter dois valores: `true` ou `false`. Os Booleanos ajudam a tomar decisões sobre quais linhas de código devem ser executadas quando certas condições são atendidas.

Defina o seu booleano como verdadeiro ou falso desta forma:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Os Booleanos têm o nome do matemático, filósofo e lógico inglês George Boole (1815–1864).

## Operadores de Comparação e Booleanos

Os operadores são usados para avaliar condições, fazendo comparações que geram um valor Booleano. Abaixo está uma lista de operadores frequentemente utilizados.

| Símbolo | Descrição                                                                                                                                                   | Exemplo            |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`     | **Menor que**: Compara dois valores e retorna o tipo de dado Booleano `true` se o valor do lado esquerdo for menor que o do lado direito                     | `5 < 6 // true`    |
| `<=`    | **Menor ou igual a**: Compara dois valores e retorna o tipo de dado Booleano `true` se o valor do lado esquerdo for menor ou igual ao do lado direito        | `5 <= 6 // true`   |
| `>`     | **Maior que**: Compara dois valores e retorna o tipo de dado Booleano `true` se o valor do lado esquerdo for maior que o do lado direito                     | `5 > 6 // false`   |
| `>=`    | **Maior ou igual a**: Compara dois valores e retorna o tipo de dado Booleano `true` se o valor do lado esquerdo for maior ou igual ao do lado direito        | `5 >= 6 // false`  |
| `===`   | **Igualdade estrita**: Compara dois valores e retorna o tipo de dado Booleano `true` se os valores do lado direito e esquerdo forem iguais E do mesmo tipo   | `5 === 6 // false` |
| `!==`   | **Desigualdade**: Compara dois valores e retorna o valor Booleano oposto ao que o operador de igualdade estrita retornaria                                  | `5 !== 6 // true`  |

✅ Teste os seus conhecimentos escrevendo algumas comparações no console do navegador. Algum dos dados retornados surpreendeu-o?

## Declaração If

A declaração `if` executará o código entre os seus blocos se a condição for verdadeira.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

Os operadores lógicos são frequentemente usados para formar a condição.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## Declaração If..Else

A declaração `else` executará o código entre os seus blocos quando a condição for falsa. É opcional com uma declaração `if`.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

✅ Teste a sua compreensão deste código e do código seguinte executando-o no console do navegador. Altere os valores das variáveis `currentMoney` e `laptopPrice` para mudar o retorno do `console.log()`.

## Declaração Switch

A declaração `switch` é usada para realizar diferentes ações com base em diferentes condições. Use a declaração `switch` para selecionar um dos vários blocos de código a serem executados.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

```javascript
// program using switch statement
let a = 2;

switch (a) {
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);
```

✅ Teste a sua compreensão deste código e do código seguinte executando-o no console do navegador. Altere os valores da variável `a` para mudar o retorno do `console.log()`.

## Operadores Lógicos e Booleanos

As decisões podem exigir mais de uma comparação e podem ser encadeadas com operadores lógicos para produzir um valor Booleano.

| Símbolo | Descrição                                                                                     | Exemplo                                                                 |
| ------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`    | **E lógico**: Compara duas expressões Booleanas. Retorna `true` **apenas** se ambos os lados forem verdadeiros | `(5 > 6) && (5 < 6 ) //Um lado é falso, outro é verdadeiro. Retorna false` |
| `\|\|`  | **OU lógico**: Compara duas expressões Booleanas. Retorna `true` se pelo menos um dos lados for verdadeiro     | `(5 > 6) \|\| (5 < 6) //Um lado é falso, outro é verdadeiro. Retorna true` |
| `!`     | **NÃO lógico**: Retorna o valor oposto de uma expressão Booleana                             | `!(5 > 6) // 5 não é maior que 6, mas "!" retornará true`               |

## Condições e Decisões com Operadores Lógicos

Os operadores lógicos podem ser usados para formar condições em declarações if..else.

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is true. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

### Operador de Negação

Até agora, viu como pode usar uma declaração `if...else` para criar lógica condicional. Tudo o que entra num `if` precisa de ser avaliado como verdadeiro ou falso. Usando o operador `!`, pode _negar_ a expressão. Ficaria assim:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Expressões Ternárias

`if...else` não é a única forma de expressar lógica de decisão. Também pode usar algo chamado operador ternário. A sintaxe é a seguinte:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Abaixo está um exemplo mais prático:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Reserve um momento para ler este código algumas vezes. Compreende como estes operadores estão a funcionar?

O código acima afirma que:

- se `firstNumber` for maior que `secondNumber`
- então atribua `firstNumber` a `biggestNumber`
- caso contrário, atribua `secondNumber`.

A expressão ternária é apenas uma forma compacta de escrever o código abaixo:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Desafio

Crie um programa que seja escrito primeiro com operadores lógicos e, em seguida, reescreva-o usando uma expressão ternária. Qual é a sua sintaxe preferida?

---

## Questionário Pós-Aula

[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/12)

## Revisão e Estudo Individual

Leia mais sobre os muitos operadores disponíveis para o utilizador [no MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Explore o fantástico [lookup de operadores](https://joshwcomeau.com/operator-lookup/) de Josh Comeau!

## Tarefa

[Operadores](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte oficial. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.