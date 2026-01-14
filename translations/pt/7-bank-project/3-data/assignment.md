<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2026-01-06T18:15:34+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "pt"
}
-->
# Refatoração de Código e Trabalho de Documentação

## Objetivos de Aprendizagem

Ao completar este trabalho, praticará competências essenciais de desenvolvimento de software que os programadores profissionais usam diariamente. Vai aprender a organizar o código para a sua manutenção, reduzir a duplicação através da abstração e documentar o seu trabalho para futuros programadores (incluindo a si próprio!).

Código limpo e bem documentado é crucial para projetos reais de desenvolvimento web, onde múltiplos programadores colaboram e as bases de código evoluem ao longo do tempo.

## Visão Geral do Trabalho

O ficheiro `app.js` da sua aplicação bancária cresceu significativamente com funcionalidades de login, registo e painel de controlo. É hora de refatorar este código usando práticas profissionais de desenvolvimento para melhorar a legibilidade, a manutenção e reduzir a duplicação.

## Instruções

Transforme o código atual do seu `app.js` implementando estas três técnicas centrais de refatoração:

### 1. Extrair Constantes de Configuração

**Tarefa**: Crie uma secção de configuração no topo do seu ficheiro com constantes reutilizáveis.

**Orientações para implementação:**
- Extraia a URL base da API do servidor (atualmente hardcoded em vários locais)
- Crie constantes para mensagens de erro que aparecem em múltiplas funções
- Considere extrair caminhos de rotas e identificadores de elementos usados repetidamente

**Exemplo de estrutura:**
```javascript
// Constantes de configuração
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Criar uma Função Unificada de Requisição

**Tarefa**: Construa uma função reutilizável `sendRequest()` que elimine código duplicado entre `createAccount()` e `getAccount()`.

**Requisitos:**
- Gerir requisições GET e POST
- Incluir tratamento de erros adequado
- Suportar diferentes endpoints URL
- Aceitar dados de corpo de requisição opcionais

**Orientação da assinatura da função:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // A sua implementação aqui
}
```

### 3. Adicionar Documentação Profissional ao Código

**Tarefa**: Documente o seu código com comentários claros e úteis que expliquem o "porquê" da sua lógica.

**Padrões de documentação:**
- Adicione documentação às funções explicando o propósito, parâmetros e valores de retorno
- Inclua comentários inline para lógica complexa ou regras de negócio
- Agrupe funções relacionadas com cabeçalhos de secção
- Explique quaisquer padrões de código não óbvios ou soluções específicas para browsers

**Exemplo de estilo de documentação:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevenir o envio padrão do formulário para tratar com JavaScript
  event.preventDefault();
  
  // A sua implementação...
}
```

## Critérios de Sucesso

O seu código refatorado deve demonstrar estas práticas profissionais de desenvolvimento:

### Implementação Exemplar
- ✅ **Constantes**: Todas as strings mágicas e URLs estão extraídas em constantes claramente nomeadas
- ✅ **Princípio DRY**: A lógica comum de requisição está consolidada numa função reutilizável `sendRequest()`
- ✅ **Documentação**: Funções com comentários JSDoc claros explicando propósito e parâmetros
- ✅ **Organização**: Código logicamente agrupado com cabeçalhos de secção e formatação consistente
- ✅ **Tratamento de Erros**: Melhor gestão de erros usando a nova função de requisição

### Implementação Adequada
- ✅ **Constantes**: A maioria dos valores repetidos foi extraída, com alguns valores hardcoded menores restantes
- ✅ **Fatorização**: Função `sendRequest()` básica criada, mas pode não gerir todos os casos extremos
- ✅ **Comentários**: Funções chave estão documentadas, embora algumas explicações possam ser mais completas
- ✅ **Legibilidade**: Código geralmente bem organizado com algumas áreas para melhoria

### Necessita de Melhoria
- ❌ **Constantes**: Muitas strings mágicas e URLs continuam hardcoded pelo ficheiro
- ❌ **Duplicação**: Continua significativa duplicação de código entre funções similares
- ❌ **Documentação**: Comentários em falta ou inadequados que não explicam o propósito do código
- ❌ **Organização**: Código sem estrutura clara e agrupamento lógico

## Testar o Seu Código Refatorado

Após a refatoração, garanta que a sua aplicação bancária funciona corretamente:

1. **Teste todos os fluxos de utilizador**: Registo, login, apresentação do painel, e tratamento de erros
2. **Verifique as chamadas API**: Confirme que a sua função `sendRequest()` funciona para a criação e recuperação de conta
3. **Teste cenários de erro**: Teste com credenciais inválidas e erros de rede
4. **Reveja a saída do console**: Assegure que não foram introduzidos erros novos durante a refatoração

## Regras de Submissão

Submeta o seu ficheiro `app.js` refatorado com:
- Cabeçalhos claros organizando as diferentes funcionalidades
- Formatação e indentação consistentes no código
- Documentação JSDoc completa para todas as funções
- Um comentário breve no topo explicando a sua abordagem à refatoração

**Desafio Bónus**: Crie um ficheiro simples de documentação de código (`CODE_STRUCTURE.md`) que explique a arquitetura da sua aplicação e como as diferentes funções interagem.

## Ligação ao Mundo Real

Este trabalho reflete o tipo de manutenção de código que programadores profissionais executam regularmente. Em ambientes industriais:
- **Revisões de código** avaliam a legibilidade e manutenção como neste trabalho
- **Dívida técnica** acumula-se quando o código não é regularmente refatorado e documentado
- **Colaboração de equipa** depende de código claro e bem documentado que novos membros podem entender
- **Correção de bugs** torna-se muito mais fácil em bases de código bem organizadas e com abstrações adequadas

As competências que está a praticar aqui — extrair constantes, eliminar duplicação e escrever documentação clara — são fundamentais para o desenvolvimento profissional de software.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, por favor, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes da utilização desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->