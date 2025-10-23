<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9197f8af0fef9be6e81d4dbda23c7e7d",
  "translation_date": "2025-10-22T22:59:42+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "br"
}
-->
# Fundamentos de JavaScript: Arrays e Loops

![Fundamentos de JavaScript - Arrays](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.br.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pré-Aula
[Quiz pré-aula](https://ff-quizzes.netlify.app/web/quiz/13)

Já se perguntou como os sites acompanham os itens do carrinho de compras ou exibem sua lista de amigos? É aí que entram os arrays e os loops. Arrays são como recipientes digitais que armazenam várias informações, enquanto os loops permitem trabalhar com todos esses dados de forma eficiente, sem precisar repetir o código.

Juntos, esses dois conceitos formam a base para lidar com informações em seus programas. Você aprenderá a sair de um processo manual e repetitivo para criar códigos inteligentes e eficientes que podem processar centenas ou até milhares de itens rapidamente.

Ao final desta lição, você entenderá como realizar tarefas complexas com dados usando apenas algumas linhas de código. Vamos explorar esses conceitos essenciais de programação.

[![Arrays](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Arrays")

[![Loops](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Loops")

> 🎥 Clique nas imagens acima para assistir aos vídeos sobre arrays e loops.

> Você pode acessar esta lição no [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Arrays

Pense nos arrays como um arquivo digital - em vez de armazenar um documento por gaveta, você pode organizar vários itens relacionados em um único recipiente estruturado. Em termos de programação, os arrays permitem armazenar várias informações em um pacote organizado.

Seja criando uma galeria de fotos, gerenciando uma lista de tarefas ou acompanhando pontuações em um jogo, os arrays fornecem a base para a organização de dados. Vamos ver como eles funcionam.

✅ Arrays estão por toda parte! Consegue pensar em um exemplo da vida real de um array, como um conjunto de painéis solares?

### Criando Arrays

Criar um array é super simples - basta usar colchetes!

```javascript
// Empty array - like an empty shopping cart waiting for items
const myArray = [];
```

**O que está acontecendo aqui?**
Você acabou de criar um recipiente vazio usando esses colchetes `[]`. Pense nisso como uma prateleira de biblioteca vazia - está pronta para armazenar os livros que você quiser organizar lá.

Você também pode preencher seu array com valores iniciais desde o início:

```javascript
// Your ice cream shop's flavor menu
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// A user's profile info (mixing different types of data)
const userData = ["John", 25, true, "developer"];

// Test scores for your favorite class
const scores = [95, 87, 92, 78, 85];
```

**Coisas legais para notar:**
- Você pode armazenar texto, números ou até valores verdadeiro/falso no mesmo array
- Basta separar cada item com uma vírgula - fácil!
- Arrays são perfeitos para manter informações relacionadas juntas

### Indexação de Arrays

Aqui está algo que pode parecer incomum no início: os arrays numeram seus itens começando do 0, não do 1. Essa indexação baseada em zero tem suas raízes em como a memória do computador funciona - é uma convenção de programação desde os primeiros dias de linguagens como C. Cada posição no array recebe um número de endereço chamado **índice**.

| Índice | Valor | Descrição |
|-------|-------|-------------|
| 0 | "Chocolate" | Primeiro elemento |
| 1 | "Morango" | Segundo elemento |
| 2 | "Baunilha" | Terceiro elemento |
| 3 | "Pistache" | Quarto elemento |
| 4 | "Rocky Road" | Quinto elemento |

✅ Surpreende você que os arrays começam no índice zero? Em algumas linguagens de programação, os índices começam no 1. Há uma história interessante sobre isso, que você pode [ler na Wikipedia](https://en.wikipedia.org/wiki/Zero-based_numbering).

**Acessando Elementos do Array:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Access individual elements using bracket notation
console.log(iceCreamFlavors[0]); // "Chocolate" - first element
console.log(iceCreamFlavors[2]); // "Vanilla" - third element
console.log(iceCreamFlavors[4]); // "Rocky Road" - last element
```

**Entendendo o que acontece aqui:**
- **Usa** notação de colchetes com o número do índice para acessar elementos
- **Retorna** o valor armazenado naquela posição específica no array
- **Começa** a contar do 0, tornando o primeiro elemento o índice 0

**Modificando Elementos do Array:**

```javascript
// Change an existing value
iceCreamFlavors[4] = "Butter Pecan";
console.log(iceCreamFlavors[4]); // "Butter Pecan"

// Add a new element at the end
iceCreamFlavors[5] = "Cookie Dough";
console.log(iceCreamFlavors[5]); // "Cookie Dough"
```

**No exemplo acima, nós:**
- **Modificamos** o elemento no índice 4 de "Rocky Road" para "Butter Pecan"
- **Adicionamos** um novo elemento "Cookie Dough" no índice 5
- **Expandimos** automaticamente o comprimento do array ao adicionar além dos limites atuais

### Comprimento do Array e Métodos Comuns

Os arrays vêm com propriedades e métodos embutidos que facilitam o trabalho com dados.

**Encontrando o Comprimento do Array:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
console.log(iceCreamFlavors.length); // 5

// Length updates automatically as array changes
iceCreamFlavors.push("Mint Chip");
console.log(iceCreamFlavors.length); // 6
```

**Pontos importantes para lembrar:**
- **Retorna** o número total de elementos no array
- **Atualiza** automaticamente quando elementos são adicionados ou removidos
- **Fornece** uma contagem dinâmica útil para loops e validação

**Métodos Essenciais de Arrays:**

```javascript
const fruits = ["apple", "banana", "orange"];

// Add elements
fruits.push("grape");           // Adds to end: ["apple", "banana", "orange", "grape"]
fruits.unshift("strawberry");   // Adds to beginning: ["strawberry", "apple", "banana", "orange", "grape"]

// Remove elements
const lastFruit = fruits.pop();        // Removes and returns "grape"
const firstFruit = fruits.shift();     // Removes and returns "strawberry"

// Find elements
const index = fruits.indexOf("banana"); // Returns 1 (position of "banana")
const hasApple = fruits.includes("apple"); // Returns true
```

**Entendendo esses métodos:**
- **Adiciona** elementos com `push()` (final) e `unshift()` (início)
- **Remove** elementos com `pop()` (final) e `shift()` (início)
- **Localiza** elementos com `indexOf()` e verifica existência com `includes()`
- **Retorna** valores úteis como elementos removidos ou índices de posição

✅ Experimente você mesmo! Use o console do seu navegador para criar e manipular um array de sua própria criação.

## Loops

Pense no famoso castigo dos romances de Charles Dickens, onde os alunos tinham que escrever frases repetidamente em uma lousa. Imagine se você pudesse simplesmente instruir alguém a "escrever esta frase 100 vezes" e ter isso feito automaticamente. É exatamente isso que os loops fazem pelo seu código.

Os loops são como ter um assistente incansável que pode repetir tarefas sem erros. Seja para verificar cada item em um carrinho de compras ou exibir todas as fotos em um álbum, os loops lidam com a repetição de forma eficiente.

O JavaScript oferece vários tipos de loops para você escolher. Vamos examinar cada um e entender quando usá-los.

### Loop For

O loop `for` é como configurar um cronômetro - você sabe exatamente quantas vezes quer que algo aconteça. É super organizado e previsível, o que o torna perfeito quando você está trabalhando com arrays ou precisa contar coisas.

**Estrutura do Loop For:**

| Componente | Propósito | Exemplo |
|-----------|---------|----------|
| **Inicialização** | Define o ponto de partida | `let i = 0` |
| **Condição** | Quando continuar | `i < 10` |
| **Incremento** | Como atualizar | `i++` |

```javascript
// Counting from 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(`Count: ${i}`);
}

// More practical example: processing scores
const testScores = [85, 92, 78, 96, 88];
for (let i = 0; i < testScores.length; i++) {
  console.log(`Student ${i + 1}: ${testScores[i]}%`);
}
```

**Passo a passo, aqui está o que acontece:**
- **Inicializa** a variável de contagem `i` como 0 no início
- **Verifica** a condição `i < 10` antes de cada iteração
- **Executa** o bloco de código quando a condição é verdadeira
- **Incrementa** `i` em 1 após cada iteração com `i++`
- **Para** quando a condição se torna falsa (quando `i` atinge 10)

✅ Execute este código no console do navegador. O que acontece quando você faz pequenas alterações na contagem, condição ou expressão de iteração? Consegue fazer com que ele funcione ao contrário, criando uma contagem regressiva?

### Loop While

O loop `while` é como dizer "continue fazendo isso até..." - você pode não saber exatamente quantas vezes ele será executado, mas sabe quando parar. É perfeito para coisas como pedir entrada ao usuário até que ele forneça o que você precisa ou buscar dados até encontrar o que está procurando.

**Características do Loop While:**
- **Continua** executando enquanto a condição for verdadeira
- **Requer** gerenciamento manual de quaisquer variáveis de contagem
- **Verifica** a condição antes de cada iteração
- **Corre o risco** de loops infinitos se a condição nunca se tornar falsa

```javascript
// Basic counting example
let i = 0;
while (i < 10) {
  console.log(`While count: ${i}`);
  i++; // Don't forget to increment!
}

// More practical example: processing user input
let userInput = "";
let attempts = 0;
const maxAttempts = 3;

while (userInput !== "quit" && attempts < maxAttempts) {
  userInput = prompt(`Enter 'quit' to exit (attempt ${attempts + 1}):`);
  attempts++;
}

if (attempts >= maxAttempts) {
  console.log("Maximum attempts reached!");
}
```

**Entendendo esses exemplos:**
- **Gerencia** a variável de contagem `i` manualmente dentro do corpo do loop
- **Incrementa** a contagem para evitar loops infinitos
- **Demonstra** caso prático com entrada do usuário e limite de tentativas
- **Inclui** mecanismos de segurança para evitar execução infinita

### Alternativas Modernas de Loops

O JavaScript oferece uma sintaxe moderna de loops que pode tornar seu código mais legível e menos propenso a erros.

**Loop For...of (ES6+):**

```javascript
const colors = ["red", "green", "blue", "yellow"];

// Modern approach - cleaner and safer
for (const color of colors) {
  console.log(`Color: ${color}`);
}

// Compare with traditional for loop
for (let i = 0; i < colors.length; i++) {
  console.log(`Color: ${colors[i]}`);
}
```

**Principais vantagens do for...of:**
- **Elimina** o gerenciamento de índices e possíveis erros de contagem
- **Fornece** acesso direto aos elementos do array
- **Melhora** a legibilidade do código e reduz a complexidade da sintaxe

**Método forEach:**

```javascript
const prices = [9.99, 15.50, 22.75, 8.25];

// Using forEach for functional programming style
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: $${price.toFixed(2)}`);
});

// forEach with arrow functions for simple operations
prices.forEach(price => console.log(`Price: $${price}`));
```

**O que você precisa saber sobre forEach:**
- **Executa** uma função para cada elemento do array
- **Fornece** tanto o valor do elemento quanto o índice como parâmetros
- **Não pode** ser interrompido antecipadamente (diferente dos loops tradicionais)
- **Retorna** undefined (não cria um novo array)

✅ Por que você escolheria um loop for em vez de um loop while? 17 mil pessoas tiveram a mesma dúvida no StackOverflow, e algumas das opiniões [podem ser interessantes para você](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Loops e Arrays

Combinar arrays com loops cria capacidades poderosas de processamento de dados. Essa combinação é fundamental para muitas tarefas de programação, desde exibir listas até calcular estatísticas.

**Processamento Tradicional de Arrays:**

```javascript
const iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

// Classic for loop approach
for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(`Flavor ${i + 1}: ${iceCreamFlavors[i]}`);
}

// Modern for...of approach
for (const flavor of iceCreamFlavors) {
  console.log(`Available flavor: ${flavor}`);
}
```

**Vamos entender cada abordagem:**
- **Usa** a propriedade de comprimento do array para determinar o limite do loop
- **Acessa** elementos por índice em loops for tradicionais
- **Fornece** acesso direto aos elementos em loops for...of
- **Processa** cada elemento do array exatamente uma vez

**Exemplo Prático de Processamento de Dados:**

```javascript
const studentGrades = [85, 92, 78, 96, 88, 73, 89];
let total = 0;
let highestGrade = studentGrades[0];
let lowestGrade = studentGrades[0];

// Process all grades with a single loop
for (let i = 0; i < studentGrades.length; i++) {
  const grade = studentGrades[i];
  total += grade;
  
  if (grade > highestGrade) {
    highestGrade = grade;
  }
  
  if (grade < lowestGrade) {
    lowestGrade = grade;
  }
}

const average = total / studentGrades.length;
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highestGrade}`);
console.log(`Lowest: ${lowestGrade}`);
```

**Aqui está como este código funciona:**
- **Inicializa** variáveis de rastreamento para soma e extremos
- **Processa** cada nota com um único loop eficiente
- **Acumula** o total para cálculo da média
- **Rastreia** os valores mais altos e mais baixos durante a iteração
- **Calcula** as estatísticas finais após a conclusão do loop

✅ Experimente iterar sobre um array criado por você no console do navegador.

---

## Desafio do Agente GitHub Copilot 🚀

Use o modo Agent para completar o seguinte desafio:

**Descrição:** Crie uma função abrangente de processamento de dados que combine arrays e loops para analisar um conjunto de dados e gerar insights significativos.

**Prompt:** Crie uma função chamada `analyzeGrades` que receba um array de objetos de notas de alunos (cada um contendo propriedades de nome e pontuação) e retorne um objeto com estatísticas, incluindo a maior nota, menor nota, média das notas, número de alunos que passaram (nota >= 70) e um array de nomes de alunos que tiveram nota acima da média. Use pelo menos dois tipos diferentes de loops em sua solução.

Saiba mais sobre o [modo agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aqui.

## 🚀 Desafio

O JavaScript oferece vários métodos modernos de arrays que podem substituir loops tradicionais para tarefas específicas. Explore [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of), [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [filter](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) e [reduce](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). 

**Seu desafio:** Refatore o exemplo de notas dos alunos usando pelo menos três métodos diferentes de arrays. Note como o código se torna mais limpo e legível com a sintaxe moderna do JavaScript.

## Quiz Pós-Aula
[Quiz pós-aula](https://ff-quizzes.netlify.app/web/quiz/14)

## Revisão e Autoestudo

Os arrays em JavaScript possuem muitos métodos associados a eles, que são extremamente úteis para manipulação de dados. [Leia sobre esses métodos](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) e experimente alguns deles (como push, pop, slice e splice) em um array criado por você.

## Tarefa

[Loop em um Array](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional feita por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.