# Noções básicas de JavaScript: Tomando Decisões
![Noções básicas de JavaScript - Tomando Decisões](/sketchnotes/webdev101-js-decisions.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pré-Aula
[Quiz Pré-Aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/11)

Tomar decisões e controlar a ordem do que é executado no seu código o torna recusável e robusto. Essa seção cobre a sintaxe para controle do fluxo de dados no JavaScript e sua significância quando usada com tipos Booleanos.

[![Tomando Decisões](https://img.youtube.com/vi/jqxfynLcNIw/0.jpg)](https://youtube.com/watch?v=jqxfynLcNIw "Making Decisions")

> 🎥 Clique na imagem acima para ver um video sobre tomada de decisões 

> Você pode fazer essa aula em [Microsoft Learn](https://docs.microsoft.com/pt-br/learn/modules/web-development-101-if-else/?WT.mc_id=academic-13441-cxa)!

## Uma breve recapitulação sobre Booleanos

Booleanos podem ter apenas dois valores `true` ou `false` (Verdadeiro ou falso). Os booleanos ajudam a tomar decisões sobre quais linhas de código devem ser executadas quando certas condições são atendidas.

Atribua valores verdadeiro ou falso no seu booleano da seguinte forma:

`let meuBooleanoVerdadeiro = true`
`let meuBooleanoFalso = false`

✅ Os booleanos receberam o nome do matemático, filósofo e lógico inglês George Boole (1815–1864).

## Operadores de comparação e booleanos

Os operadores são usados para avaliar as condições fazendo comparações que criarão um valor booleano. A seguir está uma lista de operadores que são usados com frequência

| Simbolo | Descrição                                                                                                                                                               | Exemplo            |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`     | **Menor que**: Compara dois valores e retorna o tipo de dados Booleano `true` se o valor do lado esquerdo for menor que o direito                                       | `5 < 6 // true`    |
| `<=`    | **Menor ou igual**: Compara dois valores e retorna o tipo de dados Booleano `true` se o valor à esquerda for menor ou igual à direita                                   | `5 <= 6 // true`   |
| `>`     | **Maior que**: Compara dois valores e retorna o tipo de dados Booleano `true` se o valor à esquerda for menor ou igual à direita                                        | `5 > 6 // false`   |
| `>=`    | **Maior ou igual**: Compara dois valores e retorna o tipo de dados Booleano `true` se o valor à esquerda for maior ou igual à direita                                   | `5 >= 6 // false`  |
| `===`   | **Igualdade estrita**: Compara dois valores e retorna o tipo de dados booleano `true` se os valores à direita e à esquerda forem iguais E forem do mesmo tipo de dados. | `5 === 6 // false` |
| `!==`   | **Desigualdade**: Compara dois valores e retorna o valor booleano oposto ao que um operador de igualdade estrita retornaria                                             | `5 !== 6 // true`  |

✅ Verifique seu conhecimento escrevendo algumas comparações no console do seu navegador. Algum dado retornado o surpreende?

## Instrução If

A instrução if executará o código entre seus blocos se a condição for verdadeira.

```javascript
if (condição){
    // A condição era verdadeira. O código neste bloco será executado.
}
```

Os operadores lógicos são freqüentemente usados para formar a condição.

```javascript
let dinheiroAtual;
let precoLaptop;

if (dinheiroAtual >= precoLaptop){
    // A condição era verdadeira. O código neste bloco será executado.
    console.log("Comprando um novo laptop!");
}
```

## Instrução IF..Else 

A instrução `else` executará o código entre seus blocos quando a condição for falsa. É opcional com uma instrução `if`.

```javascript
let dinheiroAtual;
let precoLaptop;

if (dinheiroAtual >= precoLaptop){
    // A condição era verdadeira. O código neste bloco será executado.
    console.log("Comprando um novo laptop!");
}
else{
    // A condição era verdadeira. O código neste bloco será executado.
    console.log("Ainda não posso comprar um novo laptop!");
}
```

✅ Teste sua compreensão deste código e do código a seguir, executando-o em um console de navegador. Altere os valores das variáveis dinheiroAtual e precoLaptop para alterar os retornos do `console.log ()`.

## Operadores Lógicos e Booleanos

As decisões podem exigir mais de uma comparação e podem ser combinadas com operadores lógicos para produzir um valor booleano.

| Simbolo | Descrição                                                                                                              | Exemplo                                                                              |
| ------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `&&`    | **AND Lógico**: Compara duas expressões booleanas. Retorna verdadeiro ** apenas ** se ambos os lados forem verdadeiros | `(5 > 6) && (5 < 6 ) //// Um lado é falso, o outro é verdadeiro. Retorna falso`      |
| `\|\|`  | **OR Lógico**: Compara duas expressões booleanas. Retorna verdadeiro se pelo menos um lado for verdadeiro              | `(5> 6) \ | \ | (5 <6) // Um lado é falso, o outro é verdadeiro. Retorna verdadeiro` |
| `!`     | **NOT Lógico**: Retorna o valor oposto de uma expressão booleana                                                       | `! (5> 6) // 5 não é maior que 6, mas"! " retornará verdadeiro`                      |

## Codições e Decisões com Operadores Lógicos

Operadores lógicos podem ser usados para formar condições em instruções if..else.

```javascript
let dinheiroAtual;
let precoLaptop;
let laptopComDesconto = precoLaptop - (precoLaptop * .20) //Laptop com desconto de 20%

if (dinheiroAtual >= precoLaptop || dinheiroAtual >= laptopComDesconto){
    // A condição era verdadeira. O código neste bloco será executado.
    console.log("Comprando um novo laptop!");
}
else {
    // A condição era verdadeira. O código neste bloco será executado.
    console.log("Ainda não posso comprar um novo laptop!");
}
```

### Operador de negação

Você viu até agora como se pode usar uma instrução `if ... else` para criar lógica condicional. Tudo o que entra em um `if` precisa ser avaliado como verdadeiro / falso. Usando o operador `!` Você pode _negar_ a expressão. Seria assim:

```javascript
if (!condicao) {
  // é executado se a condição for falsa
} else {
  // é executado se a condição for verdadeira
}
```

### Expressões ternárias

`if ... else` não é a única maneira de expressar a lógica de decisão. Você também pode usar algo chamado operador ternário. A sintaxe é assim:

```javascript
let variavel = condicao ? <retorne isso se verdadeiro> : <retorne isso se falso>
```

Abaixo está um exemplo mais tangível:

```javascript
let primeiroNumero = 20;
let segundoNumero = 10
let maiorNumero = primeiroNumero > segundoNumero ? primeiroNumero: segundoNumero;
```

✅ Reserve um minuto para ler este código algumas vezes. Você entende como esses operadores estão trabalhando?

O código acima afirma que
- Se `primeiroNumero` for maior que o `segundoNumero` 
- então atribua `primeiroNumero` a `maiorNumero` 
- Senão atribua `segundoNumero`. 
  
A expressão ternária é apenas uma forma compacta de escrever o código abaixo:

```javascript
let maiorNumero;
if (primeiroNumero > segundoNumero) {
  maiorNumero = primeiroNumero;
} else {
  maiorNumero = segundoNumero;
}
```

---

## 🚀 Desafio

Crie um programa que seja escrito primeiro com operadores lógicos e, em seguida, reescreva-o usando uma expressão ternária. Qual é a sua sintaxe preferida?

---
## Quiz Pós-Aula
[Quiz Pós Aula](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/12)

## Revisão e autoestudo

Leia mais sobre os vários operadores disponíveis para o usuário [no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators).

Vá até a maravilhosa [pesquisa de operador](https://joshwcomeau.com/operator-lookup/)! de Josh Comeau 

## Tarefa

[Operadores](assignment.pt.md)
