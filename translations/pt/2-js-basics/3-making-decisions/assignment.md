<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ffe366b2d1f037b99fbadbe1dc81083d",
  "translation_date": "2026-01-06T17:43:54+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "pt"
}
-->
# Tomar Decisões: Processador de Notas dos Estudantes

## Objetivos de Aprendizagem

Neste exercício, vais praticar os conceitos de tomada de decisão desta lição construindo um programa que processa as notas dos estudantes de diferentes sistemas de avaliação. Vais usar declarações `if...else`, operadores de comparação e operadores lógicos para determinar quais os estudantes que passam nas suas disciplinas.

## O Desafio

Trabalhas numa escola que recentemente se fundiu com outra instituição. Agora, precisas de processar as notas dos estudantes de dois sistemas de avaliação completamente diferentes e determinar quais os estudantes que estão a passar. Esta é uma oportunidade perfeita para praticar a lógica condicional!

### Compreender os Sistemas de Avaliação

#### Primeiro Sistema de Avaliação (Numérico)
- As notas são números de 1 a 5
- **Nota de aprovação**: 3 e acima (3, 4 ou 5)
- **Nota de reprovação**: abaixo de 3 (1 ou 2)

#### Segundo Sistema de Avaliação (Notas por Letras)
- As notas são letras: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Notas de aprovação**: `A`, `A-`, `B`, `B-`, `C`, `C-` (todas as notas listadas são de aprovação)
- **Nota**: Este sistema não inclui notas de reprovação como `D` ou `F`

### O Teu Trabalho

Dada a seguinte array `allStudents` que representa todos os estudantes e as suas notas, constrói uma nova array `studentsWhoPass` contendo todos os estudantes que passam de acordo com os seus respetivos sistemas de avaliação.

```javascript
let allStudents = [
  'A',    // Nota com letra - aprovado
  'B-',   // Nota com letra - aprovado
  1,      // Nota numérica - reprovado
  4,      // Nota numérica - aprovado
  5,      // Nota numérica - aprovado
  2       // Nota numérica - reprovado
];

let studentsWhoPass = [];
```

### Abordagem Passo a Passo

1. **Configura um ciclo** para percorrer cada nota na array `allStudents`
2. **Verifica o tipo da nota** (é um número ou uma string?)
3. **Aplica as regras apropriadas de cada sistema de avaliação**:
   - Para números: verifica se a nota >= 3
   - Para strings: verifica se é uma das letras válidas de aprovação
4. **Adiciona as notas de aprovação** à array `studentsWhoPass`

### Técnicas de Código Úteis

Usa estes conceitos de JavaScript da lição:

- **operador typeof**: `typeof grade === 'number'` para verificar se é uma nota numérica
- **Operadores de comparação**: `>=` para comparar notas numéricas
- **Operadores lógicos**: `||` para verificar múltiplas condições de notas por letras
- **Declarações if...else**: para lidar com os diferentes sistemas de avaliação
- **Métodos de array**: `.push()` para adicionar notas de aprovação à nova array

### Resultado Esperado

Quando executares o teu programa, `studentsWhoPass` deverá conter: `['A', 'B-', 4, 5]`

**Por que estas notas passam:**
- `'A'` e `'B-'` são notas válidas por letras (todas as notas por letras neste sistema correspondem a aprovação)
- `4` e `5` são notas numéricas >= 3
- `1` e `2` reprovam porque são notas numéricas < 3

## Testar a Tua Solução

Testa o teu código com diferentes cenários:

```javascript
// Teste com diferentes combinações de notas
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// A sua solução deve funcionar com qualquer combinação de notas válidas
```

## Desafios Bónus

Depois de completares o exercício básico, experimenta estas extensões:

1. **Adicionar validação**: Verificar notas inválidas (como números negativos ou letras inválidas)
2. **Contar estatísticas**: Calcular quantos estudantes passam vs. reprovam
3. **Conversão de notas**: Converter todas as notas para um único sistema numérico (A=5, B=4, C=3, etc.)

## Rubrica

| Critério | Exemplar (4) | Proficiente (3) | A Desenvolver (2) | Iniciante (1) |
|----------|--------------|-----------------|-------------------|---------------|
| **Funcionalidade** | Programa identifica corretamente todas as notas de aprovação de ambos os sistemas | Programa funciona com pequenos problemas ou casos extremos | Programa funciona parcialmente mas com erros lógicos | Programa tem erros significativos ou não funciona |
| **Estrutura de Código** | Código limpo, bem organizado com lógica adequada de if...else | Boa estrutura com declarações condicionais apropriadas | Estrutura aceitável com algumas falhas organizacionais | Estrutura pobre, difícil de seguir a lógica |
| **Uso de Conceitos** | Usa eficazmente operadores de comparação, operadores lógicos e declarações condicionais | Bom uso dos conceitos da lição com pequenas lacunas | Algum uso dos conceitos da lição mas faltam elementos chave | Uso limitado dos conceitos da lição |
| **Resolução de Problemas** | Demonstra clara compreensão do problema e abordagem elegante para a solução | Boa abordagem de resolução de problemas com lógica sólida | Resolução adequada do problema com alguma confusão | Abordagem pouco clara, não demonstra compreensão |

## Diretrizes para Submissão

1. **Testa o teu código** rigorosamente com os exemplos fornecidos
2. **Adiciona comentários** explicando a tua lógica, especialmente para as declarações condicionais
3. **Verifica que a saída** corresponde aos resultados esperados: `['A', 'B-', 4, 5]`
4. **Considera casos extremos** como arrays vazias ou tipos de dados inesperados

> 💡 **Dica Profissional**: Começa simples! Faz primeiro funcionar a funcionalidade básica e depois adiciona funcionalidades mais sofisticadas. Lembra-te, o objetivo é praticar a lógica de tomada de decisões com as ferramentas que aprendeste nesta lição.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para assegurar a precisão, por favor, tenha em conta que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte oficial. Para informações cruciais, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações erradas decorrentes da utilização desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->