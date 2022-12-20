# Noções básicas de JavaScript: Arrays e Laços

![JavaScript Basics - Arrays](/sketchnotes/webdev101-js-arrays.png)
> Nota de esboço por [Tomomi Imura](https://twitter.com/girlie_mac)

## Questionário de Pré-Palestra
[Questionário de Pré-Palestra](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/13)

Esta lição cobre os conceitos básicos do JavaScript, a linguagem que proporciona interactividade na web. Nesta lição, aprenderá sobre arrays e loops, que são usados para manipular dados.

[![Arrays](https://img.youtube.com/vi/rlvD4Umw37U/0.jpg)](https://youtube.com/watch?v=rlvD4Umw37U "Arrays")

[![Loops](https://img.youtube.com/vi/J2X-olc3Z6Y/0.jpg)](https://www.youtube.com/watch?v=J2X-olc3Z6Y "Laços")

> 🎥 Clique na imagem acima para um vídeo sobre arrays e loops.

> Pode seguir esta lição em [Microsoft Aprender](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Arrays
Trabalhar com dados é uma tarefa comum para qualquer língua, e é uma tarefa muito mais fácil quando os dados são organizados num formato estrutural, tal como as matrizes. Com arrays, os dados são armazenados numa estrutura semelhante a uma lista. Uma grande vantagem dos arrays é que se pode armazenar diferentes tipos de dados numa única matriz.

✅ Os arrays estão à nossa volta! Consegue pensar num exemplo da vida real de uma matriz, tal como uma matriz de painéis solares?

A sintaxe de uma matriz é um par de colchetes.

```javscript
let myArray = [];
```

Esta é uma matriz vazia, mas as matrizes podem ser declaradas já povoadas com dados. Os valores múltiplos numa matriz são separados por uma vírgula.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

Aos valores da matriz é atribuído um valor único chamado **índice**, um número inteiro que é atribuído com base na sua distância desde o início da matriz. No exemplo acima, o valor da string "Chocolate" tem um índice de 0, e o índice de "Rocky Road" é 4. Use o índice com colchetes para recuperar, alterar, ou inserir valores da array.

✅ Surpreende-o que as arrays comecem pelo índice zero? Em algumas linguagens de programação, os índices começam em 1. Há uma história interessante em torno disto, que pode [ler na Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

Pode aproveitar o índice para alterar um valor, como este:

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Mudou "Rocky Road" para "Butter Pecan".
```

E pode inserir um novo valor a um determinado índice como este:

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Acrescentada "Cookie Dough".
```

✅ Uma forma mais comum de empurrar valores para uma matriz é através da utilização de operadores de matriz como array.push()

Para descobrir quantos itens estão numa matriz, utilize a propriedade `comprimento`.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ Experimente você mesmo! Use a consola do seu navegador para criar e manipular uma série da sua própria criação.

## Laços

Os laços permitem tarefas repetitivas ou **iterativas**, e podem poupar muito tempo e código. Cada iteração pode variar nas suas variáveis, valores, e condições. Existem diferentes tipos de loops em JavaScript, e têm pequenas diferenças, mas essencialmente fazem a mesma coisa: loop over data.

### Para Laço

O laço `para` requer 3 partes para iterar:
    - `Contador` Uma variável que é tipicamente inicializada com um número que conta o número de iterações.
    - `condição` Expressão que utiliza operadores de comparação para fazer parar o laço quando `verdadeiro`
    - `expressão de iteração` Funciona no final de cada iteração, normalmente utilizada para alterar o valor do contador
  
```javascript
// Contagem até 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅Executar este código numa consola de navegação. O que acontece quando se fazem pequenas alterações ao contador, condição, ou expressão de iteração? Pode fazê-lo correr para trás, criando uma contagem decrescente?

### While loop

Ao contrário da sintaxe para o laço `para`, `entretanto` só requer uma condição que irá parar o laço quando `verdadeiro`. As condições em loops geralmente dependem de outros valores como contadores, e devem ser geridas durante o loop. Os valores iniciais dos contadores devem ser criados fora do laço, e quaisquer expressões para satisfazer uma condição, incluindo a mudança do contador, devem ser mantidas dentro do laço.

```javascript
//Contagem até 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ Porque escolheria um para loop vs. um loop de tempo? Os 17K espectadores tinham a mesma pergunta sobre o StackOverflow, e algumas das opiniões [pode ser interessante para você](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Laços e Arrays

As arrays são frequentemente utilizadas com loops porque a maioria das condições requer o comprimento do array para parar o loop, e o índice também pode ser o valor do contador.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Termina quando todos os sabores são impressos
```

✅ Experimente fazer looping sobre um conjunto da sua própria marca na consola do seu navegador. 

---

## 🚀 Desafio

Existem outras formas de looping sobre arrays que não são para e enquanto se faz loops. Existem [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), and [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Reescreva o seu laço de matriz usando uma destas técnicas.

## Questionário de pós-publicidade
[Questionário de pós-publicidade](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/14)


## Revisão e Auto-estudo

As arrays em JavaScript têm muitos métodos ligados a elas, extremamente úteis para a manipulação de dados. [Leia mais sobre estes métodos](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) e experimente algumas delas (como empurrar, estalar, cortar e emendar) numa variedade da sua criação.

## Atribuição

[Laçar um Array](assignment.pt.md)
