# Tomando Decisões: Processador de Notas dos Alunos

## Objetivos de Aprendizagem

Neste exercício, você praticará os conceitos de tomada de decisão apresentados nesta lição, construindo um programa que processa notas de alunos de diferentes sistemas de avaliação. Você usará declarações `if...else`, operadores de comparação e operadores lógicos para determinar quais alunos passaram em suas disciplinas.

## O Desafio

Você trabalha em uma escola que recentemente se fundiu com outra instituição. Agora, você precisa processar as notas dos alunos de dois sistemas de avaliação completamente diferentes e determinar quais alunos estão aprovados. Esta é uma oportunidade perfeita para praticar lógica condicional!

### Entendendo os Sistemas de Avaliação

#### Primeiro Sistema de Avaliação (Numérico)
- As notas são dadas como números de 1 a 5
- **Nota de aprovação**: 3 ou acima (3, 4 ou 5)
- **Nota de reprovação**: Abaixo de 3 (1 ou 2)

#### Segundo Sistema de Avaliação (Notas por Letras)
- As notas são representadas por letras: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Notas de aprovação**: `A`, `A-`, `B`, `B-`, `C`, `C-` (todas as notas listadas são de aprovação)
- **Nota importante**: Este sistema não inclui notas de reprovação como `D` ou `F`

### Sua Tarefa

Dado o seguinte array `allStudents` que representa todos os alunos e suas notas, construa um novo array `studentsWhoPass` contendo todos os alunos que foram aprovados de acordo com seus respectivos sistemas de avaliação.

```javascript
let allStudents = [
  'A',    // Letter grade - passing
  'B-',   // Letter grade - passing  
  1,      // Numeric grade - failing
  4,      // Numeric grade - passing
  5,      // Numeric grade - passing
  2       // Numeric grade - failing
];

let studentsWhoPass = [];
```

### Abordagem Passo a Passo

1. **Configure um loop** para percorrer cada nota no array `allStudents`
2. **Verifique o tipo da nota** (é um número ou uma string?)
3. **Aplique as regras apropriadas do sistema de avaliação**:
   - Para números: verifique se a nota é >= 3
   - Para strings: verifique se é uma das notas válidas de aprovação
4. **Adicione as notas aprovadas** ao array `studentsWhoPass`

### Técnicas Úteis de Código

Use estes conceitos de JavaScript apresentados na lição:

- **Operador typeof**: `typeof grade === 'number'` para verificar se é uma nota numérica
- **Operadores de comparação**: `>=` para comparar notas numéricas
- **Operadores lógicos**: `||` para verificar múltiplas condições de notas por letras
- **Declarações if...else**: para lidar com diferentes sistemas de avaliação
- **Métodos de array**: `.push()` para adicionar notas aprovadas ao novo array

### Resultado Esperado

Quando você executar seu programa, o array `studentsWhoPass` deverá conter: `['A', 'B-', 4, 5]`

**Por que essas notas foram aprovadas:**
- `'A'` e `'B-'` são notas válidas por letras (todas as notas por letras neste sistema são de aprovação)
- `4` e `5` são notas numéricas >= 3
- `1` e `2` foram reprovadas porque são notas numéricas < 3

## Testando Sua Solução

Teste seu código com diferentes cenários:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Desafios Extras

Depois de completar o exercício básico, tente estas extensões:

1. **Adicione validação**: Verifique por notas inválidas (como números negativos ou letras inválidas)
2. **Calcule estatísticas**: Determine quantos alunos foram aprovados e quantos foram reprovados
3. **Converta as notas**: Transforme todas as notas em um único sistema numérico (A=5, B=4, C=3, etc.)

## Rubrica

| Critério | Exemplar (4) | Proficiente (3) | Em Desenvolvimento (2) | Iniciante (1) |
|----------|---------------|-----------------|-------------------------|---------------|
| **Funcionalidade** | O programa identifica corretamente todas as notas aprovadas de ambos os sistemas | O programa funciona com pequenos problemas ou casos extremos | O programa funciona parcialmente, mas tem erros lógicos | O programa tem erros significativos ou não funciona |
| **Estrutura do Código** | Código limpo e bem organizado com lógica adequada de if...else | Boa estrutura com declarações condicionais apropriadas | Estrutura aceitável com alguns problemas de organização | Estrutura ruim, lógica difícil de seguir |
| **Uso de Conceitos** | Usa efetivamente operadores de comparação, operadores lógicos e declarações condicionais | Bom uso dos conceitos da lição com pequenas lacunas | Algum uso dos conceitos da lição, mas faltam elementos-chave | Uso limitado dos conceitos da lição |
| **Resolução de Problemas** | Demonstra clara compreensão do problema e abordagem de solução elegante | Boa abordagem de resolução de problemas com lógica sólida | Abordagem adequada com alguma confusão | Abordagem pouco clara, não demonstra compreensão |

## Diretrizes de Submissão

1. **Teste seu código** cuidadosamente com os exemplos fornecidos
2. **Adicione comentários** explicando sua lógica, especialmente para as declarações condicionais
3. **Verifique se o resultado** corresponde aos resultados esperados: `['A', 'B-', 4, 5]`
4. **Considere casos extremos** como arrays vazios ou tipos de dados inesperados

> 💡 **Dica Pro**: Comece simples! Faça a funcionalidade básica funcionar primeiro, depois adicione recursos mais sofisticados. Lembre-se, o objetivo é praticar lógica de decisão com as ferramentas que você aprendeu nesta lição.

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.