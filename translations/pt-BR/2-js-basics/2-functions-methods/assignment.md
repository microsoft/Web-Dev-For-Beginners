# Diversão com Funções

## Instruções

Neste exercício, você praticará a criação de diferentes tipos de funções para reforçar os conceitos que aprendeu sobre funções em JavaScript, parâmetros, valores padrão e declarações de retorno.

Crie um arquivo JavaScript chamado `functions-practice.js` e implemente as seguintes funções:

### Parte 1: Funções Básicas
1. **Crie uma função chamada `sayHello`** que não recebe nenhum parâmetro e simplesmente exibe "Olá!" no console.

2. **Crie uma função chamada `introduceYourself`** que recebe um parâmetro `name` e exibe uma mensagem como "Oi, meu nome é [name]" no console.

### Parte 2: Funções com Parâmetros Padrão
3. **Crie uma função chamada `greetPerson`** que recebe dois parâmetros: `name` (obrigatório) e `greeting` (opcional, com valor padrão "Olá"). A função deve exibir uma mensagem como "[greeting], [name]!" no console.

### Parte 3: Funções que Retornam Valores
4. **Crie uma função chamada `addNumbers`** que recebe dois parâmetros (`num1` e `num2`) e retorna a soma deles.

5. **Crie uma função chamada `createFullName`** que recebe os parâmetros `firstName` e `lastName` e retorna o nome completo como uma única string.

### Parte 4: Misturando Tudo
6. **Crie uma função chamada `calculateTip`** que recebe dois parâmetros: `billAmount` (obrigatório) e `tipPercentage` (opcional, com valor padrão de 15). A função deve calcular e retornar o valor da gorjeta.

### Parte 5: Teste suas Funções
Adicione chamadas de função para testar cada uma das suas funções e exibir os resultados usando `console.log()`.

**Exemplo de chamadas de teste:**
```javascript
// Test your functions here
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

| Critério | Exemplar | Adequado | Precisa Melhorar |
| -------- | --------- | -------- | ---------------- |
| **Criação de Funções** | Todas as 6 funções são implementadas corretamente com sintaxe e convenções de nomenclatura adequadas | 4-5 funções são implementadas corretamente com pequenos problemas de sintaxe | 3 ou menos funções implementadas ou erros graves de sintaxe |
| **Parâmetros e Valores Padrão** | Usa corretamente parâmetros obrigatórios, opcionais e valores padrão conforme especificado | Usa parâmetros corretamente, mas pode ter problemas com valores padrão | Implementação de parâmetros incorreta ou ausente |
| **Valores de Retorno** | Funções que devem retornar valores fazem isso corretamente, e funções que não devem retornar valores apenas executam ações | A maioria dos valores de retorno está correta, com pequenos problemas | Problemas significativos com declarações de retorno |
| **Qualidade do Código** | Código limpo, bem organizado, com nomes de variáveis significativos e indentação adequada | Código funciona, mas poderia ser mais limpo ou melhor organizado | Código difícil de ler ou mal estruturado |
| **Testes** | Todas as funções são testadas com chamadas de função apropriadas e os resultados são exibidos claramente | A maioria das funções é testada adequadamente | Testes limitados ou incorretos das funções |

## Desafios Extras (Opcional)

Se você quiser se desafiar ainda mais:

1. **Crie uma versão com função arrow** de uma das suas funções
2. **Crie uma função que aceita outra função como parâmetro** (como os exemplos de `setTimeout` da aula)
3. **Adicione validação de entrada** para garantir que suas funções lidem com entradas inválidas de forma adequada

---

> 💡 **Dica**: Lembre-se de abrir o console do desenvolvedor do seu navegador (F12) para ver a saída das suas declarações `console.log()`!

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional feita por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.