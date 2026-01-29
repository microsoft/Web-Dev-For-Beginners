# Exercício de Arrays e Loops

## Instruções

Complete os seguintes exercícios para praticar o trabalho com arrays e loops. Cada exercício desenvolve conceitos da lição e incentiva a aplicação de diferentes tipos de loops e métodos de arrays.

### Exercício 1: Gerador de Padrão Numérico  
Crie um programa que liste a cada 3 números entre 1 e 20 e imprima-os na consola.

**Requisitos:**  
- Use um loop `for` com um incremento personalizado  
- Exiba os números num formato amigável para o utilizador  
- Adicione comentários descritivos explicando a sua lógica  

**Resultado Esperado:**  
```
3, 6, 9, 12, 15, 18
```
  
> **Dica:** Modifique a expressão de iteração no seu loop for para saltar números.

### Exercício 2: Análise de Array  
Crie um array com pelo menos 8 números diferentes e escreva funções para analisar os dados.

**Requisitos:**  
- Crie um array chamado `numbers` com pelo menos 8 valores  
- Escreva uma função `findMaximum()` que retorna o número mais alto  
- Escreva uma função `findMinimum()` que retorna o número mais baixo  
- Escreva uma função `calculateSum()` que retorna o total de todos os números  
- Teste cada função e exiba os resultados  

**Desafio Bónus:** Crie uma função que encontre o segundo número mais alto no array.

### Exercício 3: Processamento de Array de Strings  
Crie um array dos seus filmes/livros/músicas favoritos e pratique diferentes tipos de loops.

**Requisitos:**  
- Crie um array com pelo menos 5 valores string  
- Use um loop `for` tradicional para exibir os itens com números (1. Nome do Item)  
- Use um loop `for...of` para exibir os itens em maiúsculas  
- Use o método `forEach()` para contar e exibir o total de caracteres  

**Exemplo de Resultado:**  
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
Crie um programa que processe um array de objetos que representam estudantes.

**Requisitos:**  
- Crie um array com pelo menos 5 objetos estudantes com propriedades: `name`, `age`, `grade`  
- Use loops para encontrar estudantes com 18 anos ou mais  
- Calcule a média das notas de todos os estudantes  
- Crie um novo array contendo apenas estudantes com notas superiores a 85  

**Estrutura de Exemplo:**  
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Adicionar mais alunos...
];
```
  
## Testar o Seu Código

Teste os seus programas fazendo:  
1. Executar cada exercício na consola do seu navegador  
2. Verificar se os outputs coincidem com os resultados esperados  
3. Testar com diferentes conjuntos de dados  
4. Confirmar que o seu código lida com casos extremos (arrays vazios, elementos únicos)  

## Diretrizes para Submissão

Inclua o seguinte na sua submissão:  
- Código JavaScript bem comentado para cada exercício  
- Capturas de ecrã ou output em texto mostrando os seus programas a funcionar  
- Breve explicação de qual tipo de loop escolheu para cada tarefa e porquê  

## Rubrica

| Critérios | Exemplar (3 pontos) | Adequado (2 pontos) | Precisa Melhorar (1 ponto) |
| --------- | ------------------- | ------------------- | -------------------------- |
| **Funcionalidade** | Todos os exercícios completos corretamente com desafios bónus | Todos os exercícios obrigatórios funcionam corretamente | Alguns exercícios incompletos ou com erros |
| **Qualidade do Código** | Código limpo, bem organizado com nomes descritivos de variáveis | Código funciona mas podia ser mais limpo | Código é confuso ou difícil de entender |
| **Comentários** | Comentários abrangentes explicando lógica e decisões | Comentários básicos presentes | Comentários mínimos ou inexistentes |
| **Uso de Loops** | Demonstra entendimento apropriado dos diferentes tipos de loops | Usa loops corretamente mas com variedade limitada | Uso incorreto ou ineficiente dos loops |
| **Testes** | Evidência de testes rigorosos com múltiplos cenários | Demonstração de testes básicos | Pouca evidência de testes |

## Perguntas de Reflexão

Após completar os exercícios, considere:  
1. Qual tipo de loop lhe pareceu mais natural usar e porquê?  
2. Que desafios encontrou ao trabalhar com arrays?  
3. Como é que estas competências poderiam ser aplicadas em projetos reais de desenvolvimento web?  
4. O que faria diferente se tivesse de otimizar o seu código para desempenho?

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, por favor tenha em conta que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se tradução humana profissional. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações erradas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->