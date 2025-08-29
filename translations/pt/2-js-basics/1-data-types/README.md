<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b95fdd8310ef467305015ece1b0f9411",
  "translation_date": "2025-08-29T16:15:00+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "pt"
}
-->
# Fundamentos de JavaScript: Tipos de Dados

![Fundamentos de JavaScript - Tipos de Dados](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.pt.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Questionário Pré-Aula
[Questionário pré-aula](https://ff-quizzes.netlify.app/web/)

Esta lição aborda os fundamentos do JavaScript, a linguagem que proporciona interatividade na web.

> Pode fazer esta lição no [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Variáveis](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Variáveis em JavaScript")

[![Tipos de Dados em JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Tipos de Dados em JavaScript")

> 🎥 Clique nas imagens acima para vídeos sobre variáveis e tipos de dados

Vamos começar com variáveis e os tipos de dados que as preenchem!

## Variáveis

As variáveis armazenam valores que podem ser usados e alterados ao longo do seu código.

Criar e **declarar** uma variável tem a seguinte sintaxe **[palavra-chave] [nome]**. É composta por duas partes:

- **Palavra-chave**. As palavras-chave podem ser `let` ou `var`.  

✅ A palavra-chave `let` foi introduzida no ES6 e dá à sua variável um chamado _escopo de bloco_. É recomendado usar `let` em vez de `var`. Vamos abordar escopos de bloco mais detalhadamente em partes futuras.
- **O nome da variável**, este é um nome que escolhe por si mesmo.

### Tarefa - Trabalhar com variáveis

1. **Declarar uma variável**. Vamos declarar uma variável usando a palavra-chave `let`:

    ```javascript
    let myVariable;
    ```

   `myVariable` foi agora declarada usando a palavra-chave `let`. Atualmente, não tem um valor.

1. **Atribuir um valor**. Armazene um valor numa variável com o operador `=`, seguido do valor esperado.

    ```javascript
    myVariable = 123;
    ```

   > Nota: o uso de `=` nesta lição significa que estamos a usar um "operador de atribuição", utilizado para definir um valor numa variável. Não denota igualdade.

   `myVariable` foi agora *inicializada* com o valor 123.

1. **Refatorar**. Substitua o seu código pela seguinte instrução.

    ```javascript
    let myVariable = 123;
    ```

    O acima é chamado de _inicialização explícita_ quando uma variável é declarada e é atribuída um valor ao mesmo tempo.

1. **Alterar o valor da variável**. Altere o valor da variável da seguinte forma:

   ```javascript
   myVariable = 321;
   ```

   Uma vez que uma variável é declarada, pode alterar o seu valor em qualquer ponto do seu código com o operador `=` e o novo valor.

   ✅ Experimente! Pode escrever JavaScript diretamente no seu navegador. Abra uma janela do navegador e navegue até às Ferramentas de Programador. No console, encontrará um prompt; escreva `let myVariable = 123`, pressione Enter, depois escreva `myVariable`. O que acontece? Nota, aprenderá mais sobre estes conceitos em lições subsequentes.

## Constantes

A declaração e inicialização de uma constante seguem os mesmos conceitos de uma variável, com a exceção da palavra-chave `const`. As constantes são normalmente declaradas com todas as letras maiúsculas.

```javascript
const MY_VARIABLE = 123;
```

As constantes são semelhantes às variáveis, com duas exceções:

- **Devem ter um valor**. As constantes devem ser inicializadas, ou ocorrerá um erro ao executar o código.
- **A referência não pode ser alterada**. A referência de uma constante não pode ser alterada após a inicialização, ou ocorrerá um erro ao executar o código. Vamos ver dois exemplos:
   - **Valor simples**. O seguinte NÃO é permitido:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **A referência do objeto está protegida**. O seguinte NÃO é permitido.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **O valor do objeto não está protegido**. O seguinte É permitido:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Acima está a alterar o valor do objeto, mas não a referência em si, o que torna permitido.

   > Nota, um `const` significa que a referência está protegida contra reatribuição. O valor não é _imutável_ e pode mudar, especialmente se for uma construção complexa como um objeto.

## Tipos de Dados

As variáveis podem armazenar muitos tipos diferentes de valores, como números e texto. Estes vários tipos de valores são conhecidos como **tipo de dado**. Os tipos de dados são uma parte importante do desenvolvimento de software porque ajudam os programadores a tomar decisões sobre como o código deve ser escrito e como o software deve funcionar. Além disso, alguns tipos de dados têm características únicas que ajudam a transformar ou extrair informações adicionais de um valor.

✅ Os tipos de dados também são referidos como primitivas de dados do JavaScript, pois são os tipos de dados de nível mais baixo fornecidos pela linguagem. Existem 7 tipos de dados primitivos: string, number, bigint, boolean, undefined, null e symbol. Tire um momento para visualizar o que cada uma destas primitivas pode representar. O que é um `zebra`? E `0`? `true`?

### Números

Na seção anterior, o valor de `myVariable` era um tipo de dado numérico.

`let myVariable = 123;`

As variáveis podem armazenar todos os tipos de números, incluindo decimais ou números negativos. Os números também podem ser usados com operadores aritméticos, abordados na [próxima seção](../../../../2-js-basics/1-data-types).

### Operadores Aritméticos

Existem vários tipos de operadores para usar ao realizar funções aritméticas, e alguns estão listados aqui:

| Símbolo | Descrição                                                               | Exemplo                          |
| ------  | ----------------------------------------------------------------------- | -------------------------------- |
| `+`     | **Adição**: Calcula a soma de dois números                              | `1 + 2 //resposta esperada é 3`  |
| `-`     | **Subtração**: Calcula a diferença de dois números                      | `1 - 2 //resposta esperada é -1` |
| `*`     | **Multiplicação**: Calcula o produto de dois números                    | `1 * 2 //resposta esperada é 2`  |
| `/`     | **Divisão**: Calcula o quociente de dois números                        | `1 / 2 //resposta esperada é 0.5`|
| `%`     | **Resto**: Calcula o resto da divisão de dois números                   | `1 % 2 //resposta esperada é 1`  |

✅ Experimente! Experimente uma operação aritmética no console do seu navegador. Os resultados surpreendem?

### Strings

Strings são conjuntos de caracteres que residem entre aspas simples ou duplas.

- `'Isto é uma string'`
- `"Isto também é uma string"`
- `let myString = 'Este é um valor de string armazenado numa variável';`

Lembre-se de usar aspas ao escrever uma string, ou o JavaScript assumirá que é um nome de variável.

### Formatação de Strings

Strings são textuais e, ocasionalmente, precisarão de formatação.

Para **concatenar** duas ou mais strings, ou uni-las, use o operador `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Por que `1 + 1 = 2` em JavaScript, mas `'1' + '1' = 11?` Pense nisso. E `'1' + 1`?

**Template literals** são outra forma de formatar strings, exceto que, em vez de aspas, usa-se o acento grave. Qualquer coisa que não seja texto simples deve ser colocada dentro de placeholders `${ }`. Isso inclui quaisquer variáveis que possam ser strings.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Pode alcançar os seus objetivos de formatação com qualquer método, mas os template literals respeitarão quaisquer espaços e quebras de linha.

✅ Quando usaria um template literal em vez de uma string simples?

### Booleans

Booleans podem ter apenas dois valores: `true` ou `false`. Booleans ajudam a tomar decisões sobre quais linhas de código devem ser executadas quando certas condições são atendidas. Em muitos casos, [operadores](../../../../2-js-basics/1-data-types) ajudam a definir o valor de um Boolean e frequentemente verá e escreverá variáveis sendo inicializadas ou seus valores sendo atualizados com um operador.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Uma variável pode ser considerada 'truthy' se avaliar para um booleano `true`. Curiosamente, em JavaScript, [todos os valores são truthy, a menos que definidos como falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Desafio

JavaScript é conhecido pelas suas formas surpreendentes de lidar com tipos de dados ocasionalmente. Faça uma pesquisa sobre estes 'gotchas'. Por exemplo: a sensibilidade a maiúsculas pode ser traiçoeira! Experimente isto no seu console: `let age = 1; let Age = 2; age == Age` (resolve `false` -- por quê?). Que outros gotchas consegue encontrar?

## Questionário Pós-Aula
[Questionário pós-aula](https://ff-quizzes.netlify.app)

## Revisão & Autoestudo

Dê uma olhada [nesta lista de exercícios de JavaScript](https://css-tricks.com/snippets/javascript/) e experimente um. O que aprendeu?

## Tarefa

[Prática de Tipos de Dados](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, é importante ter em conta que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.