<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fc6aef8ecfdd5b0ad2afa6e6ba52bfde",
  "translation_date": "2025-08-25T21:55:47+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "br"
}
-->
# Fundamentos de JavaScript: Tipos de Dados

![Fundamentos de JavaScript - Tipos de Dados](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.br.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pré-Aula
[Quiz pré-aula](https://ff-quizzes.netlify.app/web/quiz/7)

Esta lição aborda os fundamentos do JavaScript, a linguagem que proporciona interatividade na web.

> Você pode fazer esta lição no [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variáveis](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variáveis em JavaScript")

[![Tipos de Dados em JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Tipos de Dados em JavaScript")

> 🎥 Clique nas imagens acima para assistir aos vídeos sobre variáveis e tipos de dados.

Vamos começar com variáveis e os tipos de dados que as preenchem!

## Variáveis

Variáveis armazenam valores que podem ser usados e alterados ao longo do seu código.

Criar e **declarar** uma variável segue a seguinte sintaxe **[palavra-chave] [nome]**. É composta por duas partes:

- **Palavra-chave**. As palavras-chave podem ser `let` ou `var`.  

✅ A palavra-chave `let` foi introduzida no ES6 e dá à sua variável um chamado _escopo de bloco_. É recomendado usar `let` em vez de `var`. Vamos abordar escopos de bloco mais detalhadamente em partes futuras.
- **O nome da variável**, que é um nome que você escolhe.

### Tarefa - Trabalhando com variáveis

1. **Declare uma variável**. Vamos declarar uma variável usando a palavra-chave `let`:

    ```javascript
    let myVariable;
    ```

   `myVariable` foi declarada agora usando a palavra-chave `let`. Atualmente, ela não possui um valor.

1. **Atribua um valor**. Armazene um valor em uma variável com o operador `=`, seguido do valor esperado.

    ```javascript
    myVariable = 123;
    ```

   > Nota: o uso de `=` nesta lição significa que estamos utilizando um "operador de atribuição", usado para definir um valor para uma variável. Ele não denota igualdade.

   `myVariable` foi agora *inicializada* com o valor 123.

1. **Refatore**. Substitua seu código pela seguinte instrução.

    ```javascript
    let myVariable = 123;
    ```

    O exemplo acima é chamado de _inicialização explícita_ quando uma variável é declarada e recebe um valor ao mesmo tempo.

1. **Altere o valor da variável**. Altere o valor da variável da seguinte forma:

   ```javascript
   myVariable = 321;
   ```

   Uma vez que uma variável é declarada, você pode alterar seu valor a qualquer momento no seu código com o operador `=` e o novo valor.

   ✅ Experimente! Você pode escrever JavaScript diretamente no seu navegador. Abra uma janela do navegador e acesse as Ferramentas de Desenvolvedor. No console, você encontrará um prompt; digite `let myVariable = 123`, pressione Enter, e depois digite `myVariable`. O que acontece? Observe que você aprenderá mais sobre esses conceitos em lições subsequentes.

## Constantes

A declaração e inicialização de uma constante seguem os mesmos conceitos de uma variável, com a exceção da palavra-chave `const`. Constantes geralmente são declaradas com letras maiúsculas.

```javascript
const MY_VARIABLE = 123;
```

Constantes são semelhantes às variáveis, com duas exceções:

- **Devem ter um valor**. Constantes devem ser inicializadas, ou ocorrerá um erro ao executar o código.
- **A referência não pode ser alterada**. A referência de uma constante não pode ser alterada após ser inicializada, ou ocorrerá um erro ao executar o código. Vamos analisar dois exemplos:
   - **Valor simples**. O seguinte NÃO é permitido:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **Referência de objeto é protegida**. O seguinte NÃO é permitido.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **Valor do objeto não é protegido**. O seguinte É permitido:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      No exemplo acima, você está alterando o valor do objeto, mas não a referência em si, o que é permitido.

   > Nota: um `const` significa que a referência está protegida contra reatribuição. O valor, no entanto, não é _imutável_ e pode mudar, especialmente se for uma estrutura complexa como um objeto.

## Tipos de Dados

Variáveis podem armazenar diferentes tipos de valores, como números e textos. Esses diferentes tipos de valores são conhecidos como **tipos de dados**. Tipos de dados são uma parte importante do desenvolvimento de software porque ajudam os desenvolvedores a tomar decisões sobre como o código deve ser escrito e como o software deve funcionar. Além disso, alguns tipos de dados possuem características únicas que ajudam a transformar ou extrair informações adicionais de um valor.

✅ Tipos de Dados também são chamados de primitivas de dados do JavaScript, pois são os tipos de dados de nível mais baixo fornecidos pela linguagem. Existem 7 tipos de dados primitivos: string, number, bigint, boolean, undefined, null e symbol. Reserve um momento para visualizar o que cada uma dessas primitivas pode representar. O que é um `zebra`? E `0`? `true`?

### Números

Na seção anterior, o valor de `myVariable` era um tipo de dado numérico.

`let myVariable = 123;`

Variáveis podem armazenar todos os tipos de números, incluindo decimais ou números negativos. Números também podem ser usados com operadores aritméticos, abordados na [próxima seção](../../../../2-js-basics/1-data-types).

### Operadores Aritméticos

Existem vários tipos de operadores para usar ao realizar funções aritméticas, e alguns estão listados aqui:

| Símbolo | Descrição                                                              | Exemplo                          |
| ------ | ---------------------------------------------------------------------- | -------------------------------- |
| `+`    | **Adição**: Calcula a soma de dois números                              | `1 + 2 //resposta esperada é 3`   |
| `-`    | **Subtração**: Calcula a diferença entre dois números                   | `1 - 2 //resposta esperada é -1`  |
| `*`    | **Multiplicação**: Calcula o produto de dois números                    | `1 * 2 //resposta esperada é 2`   |
| `/`    | **Divisão**: Calcula o quociente de dois números                        | `1 / 2 //resposta esperada é 0.5` |
| `%`    | **Resto**: Calcula o resto da divisão de dois números                   | `1 % 2 //resposta esperada é 1`   |

✅ Experimente! Tente uma operação aritmética no console do seu navegador. Os resultados te surpreendem?

### Strings

Strings são conjuntos de caracteres que ficam entre aspas simples ou duplas.

- `'Isto é uma string'`
- `"Isto também é uma string"`
- `let myString = 'Este é um valor de string armazenado em uma variável';`

Lembre-se de usar aspas ao escrever uma string, caso contrário, o JavaScript assumirá que é um nome de variável.

### Formatando Strings

Strings são textuais e, às vezes, precisarão de formatação.

Para **concatenar** duas ou mais strings, ou uni-las, use o operador `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Por que `1 + 1 = 2` em JavaScript, mas `'1' + '1' = 11?` Pense nisso. E `'1' + 1`?

**Template literals** são outra forma de formatar strings, mas, em vez de aspas, usa-se o acento grave. Qualquer coisa que não seja texto simples deve ser colocada dentro de placeholders `${ }`. Isso inclui quaisquer variáveis que possam ser strings.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Você pode alcançar seus objetivos de formatação com qualquer método, mas os template literals respeitarão quaisquer espaços e quebras de linha.

✅ Quando você usaria um template literal em vez de uma string simples?

### Booleanos

Booleanos podem ter apenas dois valores: `true` ou `false`. Booleanos ajudam a tomar decisões sobre quais linhas de código devem ser executadas quando certas condições são atendidas. Em muitos casos, [operadores](../../../../2-js-basics/1-data-types) ajudam a definir o valor de um Booleano, e você frequentemente verá e escreverá variáveis sendo inicializadas ou tendo seus valores atualizados com um operador.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Uma variável pode ser considerada 'truthy' se for avaliada como um booleano `true`. Curiosamente, em JavaScript, [todos os valores são truthy, a menos que sejam definidos como falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Desafio

JavaScript é notório por suas formas surpreendentes de lidar com tipos de dados ocasionalmente. Faça uma pesquisa sobre esses 'pegadinhas'. Por exemplo: a sensibilidade a maiúsculas e minúsculas pode te pegar! Experimente isso no seu console: `let age = 1; let Age = 2; age == Age` (resolve como `false` -- por quê?). Que outras pegadinhas você consegue encontrar?

## Quiz Pós-Aula
[Quiz pós-aula](https://ff-quizzes.netlify.app/web/quiz/8)

## Revisão e Autoestudo

Dê uma olhada nesta [lista de exercícios de JavaScript](https://css-tricks.com/snippets/javascript/) e tente um. O que você aprendeu?

## Tarefa

[Prática de Tipos de Dados](assignment.md)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.