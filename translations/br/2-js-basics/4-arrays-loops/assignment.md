<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8abcada0534e0fb3a7556ea3c5a2a8a4",
  "translation_date": "2025-10-22T23:00:01+00:00",
  "source_file": "2-js-basics/4-arrays-loops/assignment.md",
  "language_code": "br"
}
-->
# Arrays e Laços de Repetição - Tarefa

## Instruções

Complete os seguintes exercícios para praticar o trabalho com arrays e laços de repetição. Cada exercício se baseia nos conceitos da aula e incentiva você a aplicar diferentes tipos de laços e métodos de arrays.

### Exercício 1: Gerador de Padrão Numérico
Crie um programa que liste a cada 3 números entre 1-20 e os imprima no console.

**Requisitos:**
- Use um laço `for` com incremento personalizado
- Exiba os números em um formato amigável
- Adicione comentários descritivos explicando sua lógica

**Saída Esperada:**
```
3, 6, 9, 12, 15, 18
```

> **Dica:** Modifique a expressão de iteração no seu laço `for` para pular números.

### Exercício 2: Análise de Array
Crie um array com pelo menos 8 números diferentes e escreva funções para analisar os dados.

**Requisitos:**
- Crie um array chamado `numbers` com pelo menos 8 valores
- Escreva uma função `findMaximum()` que retorne o maior número
- Escreva uma função `findMinimum()` que retorne o menor número  
- Escreva uma função `calculateSum()` que retorne o total de todos os números
- Teste cada função e exiba os resultados

**Desafio Extra:** Crie uma função que encontre o segundo maior número no array.

### Exercício 3: Processamento de Array de Strings
Crie um array com seus filmes/livros/músicas favoritos e pratique diferentes tipos de laços.

**Requisitos:**
- Crie um array com pelo menos 5 valores de string
- Use um laço `for` tradicional para exibir os itens com números (1. Nome do Item)
- Use um laço `for...of` para exibir os itens em letras maiúsculas
- Use o método `forEach()` para contar e exibir o total de caracteres

**Exemplo de Saída:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Exercício 4: Filtragem de Dados (Avançado)
Crie um programa que processe um array de objetos representando estudantes.

**Requisitos:**
- Crie um array com pelo menos 5 objetos de estudantes com as propriedades: `name`, `age`, `grade`
- Use laços para encontrar estudantes com 18 anos ou mais
- Calcule a média das notas de todos os estudantes
- Crie um novo array contendo apenas estudantes com notas acima de 85

**Estrutura de Exemplo:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Testando Seu Código

Teste seus programas:
1. Executando cada exercício no console do navegador
2. Verificando se as saídas correspondem aos resultados esperados
3. Testando com diferentes conjuntos de dados
4. Checando se seu código lida com casos extremos (arrays vazios, elementos únicos)

## Diretrizes de Submissão

Inclua o seguinte na sua submissão:
- Código JavaScript bem comentado para cada exercício
- Capturas de tela ou saída de texto mostrando seus programas em execução
- Breve explicação sobre qual tipo de laço você escolheu para cada tarefa e por quê

## Rubrica

| Critério | Exemplar (3 pontos) | Adequado (2 pontos) | Precisa Melhorar (1 ponto) |
| -------- | ------------------- | ------------------- | -------------------------- |
| **Funcionalidade** | Todos os exercícios concluídos corretamente com desafios extras | Todos os exercícios obrigatórios funcionam corretamente | Alguns exercícios incompletos ou com erros |
| **Qualidade do Código** | Código limpo, bem organizado e com nomes de variáveis descritivos | Código funciona, mas poderia ser mais limpo | Código desorganizado ou difícil de entender |
| **Comentários** | Comentários abrangentes explicando lógica e decisões | Comentários básicos presentes | Comentários mínimos ou ausentes |
| **Uso de Laços** | Demonstra compreensão apropriada de diferentes tipos de laços | Usa laços corretamente, mas com variedade limitada | Uso incorreto ou ineficiente de laços |
| **Testes** | Evidência de testes completos com múltiplos cenários | Testes básicos demonstrados | Pouca evidência de testes |

## Perguntas de Reflexão

Após completar os exercícios, considere:
1. Qual tipo de laço pareceu mais natural de usar e por quê?
2. Quais desafios você encontrou ao trabalhar com arrays?
3. Como essas habilidades podem ser aplicadas em projetos reais de desenvolvimento web?
4. O que você faria diferente se tivesse que otimizar seu código para desempenho?

---

**Aviso Legal**:  
Este documento foi traduzido usando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional feita por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.