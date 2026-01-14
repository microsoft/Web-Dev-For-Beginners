<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8328f58f4593b4671656ff8f4b2edbd9",
  "translation_date": "2026-01-06T17:39:50+00:00",
  "source_file": "2-js-basics/2-functions-methods/assignment.md",
  "language_code": "pt"
}
-->
# Diversão com Funções

## Instruções

Neste exercício, vais praticar a criação de diferentes tipos de funções para reforçar os conceitos que aprendeste sobre funções em JavaScript, parâmetros, valores predefinidos e instruções return.

Cria um ficheiro JavaScript chamado `functions-practice.js` e implementa as seguintes funções:

### Parte 1: Funções Básicas
1. **Cria uma função chamada `sayHello`** que não recebe quaisquer parâmetros e apenas imprime "Hello!" na consola.

2. **Cria uma função chamada `introduceYourself`** que recebe um parâmetro `name` e imprime uma mensagem como "Hi, my name is [name]" na consola.

### Parte 2: Funções com Parâmetros Predefinidos
3. **Cria uma função chamada `greetPerson`** que recebe dois parâmetros: `name` (obrigatório) e `greeting` (opcional, com o valor predefinido "Hello"). A função deve imprimir uma mensagem como "[greeting], [name]!" na consola.

### Parte 3: Funções que Retornam Valores
4. **Cria uma função chamada `addNumbers`** que recebe dois parâmetros (`num1` e `num2`) e retorna a soma deles.

5. **Cria uma função chamada `createFullName`** que recebe os parâmetros `firstName` e `lastName` e retorna o nome completo como uma única string.

### Parte 4: Combina Tudo
6. **Cria uma função chamada `calculateTip`** que recebe dois parâmetros: `billAmount` (obrigatório) e `tipPercentage` (opcional, com valor predefinido 15). A função deve calcular e retornar o valor da gorjeta.

### Parte 5: Testa as Tuas Funções
Adiciona chamadas às funções para testar cada uma delas e mostra os resultados usando `console.log()`.

**Exemplo de chamadas de teste:**
```javascript
// Teste as suas funções aqui
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Rubrica

| Critério | Exemplar | Adequado | A Melhorar |
| -------- | -------- | -------- | ---------- |
| **Criação de Funções** | As 6 funções estão corretamente implementadas com sintaxe e convenções de nomenclatura apropriadas | 4-5 funções estão corretamente implementadas com pequenos erros de sintaxe | 3 ou menos funções implementadas ou erros graves de sintaxe |
| **Parâmetros e Valores Predefinidos** | Uso correto de parâmetros obrigatórios, opcionais e valores predefinidos conforme especificado | Usa os parâmetros corretamente mas pode haver problemas com os valores predefinidos | Implementação incorreta ou em falta dos parâmetros |
| **Valores de Retorno** | Funções que devem retornar valores fazem-no corretamente e funções que não devem retornar valores apenas realizam ações | A maioria dos valores retornados estão corretos com pequenos problemas | Problemas significativos com as instruções de retorno |
| **Qualidade do Código** | Código limpo, bem organizado com nomes de variáveis significativos e indentação adequada | Código funciona mas pode ser mais limpo ou melhor organizado | Código difícil de ler ou mal estruturado |
| **Testes** | Todas as funções são testadas com chamadas de função apropriadas e os resultados são mostrados claramente | A maior parte das funções é testada adequadamente | Testes limitados ou incorretos das funções |

## Desafios Bónus (Opcional)

Se quiseres desafiar-te ainda mais:

1. **Cria uma versão arrow function** de uma das tuas funções
2. **Cria uma função que aceite outra função como parâmetro** (como os exemplos com `setTimeout` da aula)
3. **Adiciona validação de entrada** para garantir que as tuas funções lidam elegantemente com entradas inválidas

---

> 💡 **Dica**: Lembra-te de abrir a consola de desenvolvedor do teu navegador (F12) para veres a saída das tuas instruções `console.log()`!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, tenha em atenção que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se a tradução profissional por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes da utilização desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->