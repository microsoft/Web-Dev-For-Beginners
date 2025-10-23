<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2025-10-22T23:10:53+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "br"
}
-->
# Tarefa de Refatoração de Código e Documentação

## Objetivos de Aprendizagem

Ao concluir esta tarefa, você praticará habilidades essenciais de desenvolvimento de software que os desenvolvedores profissionais utilizam diariamente. Você aprenderá a organizar o código para facilitar a manutenção, reduzir duplicações por meio de abstração e documentar seu trabalho para desenvolvedores futuros (incluindo você mesmo!).

Código limpo e bem documentado é crucial para projetos reais de desenvolvimento web, onde vários desenvolvedores colaboram e os códigos evoluem ao longo do tempo.

## Visão Geral da Tarefa

O arquivo `app.js` do seu aplicativo bancário cresceu significativamente com funcionalidades de login, registro e painel de controle. É hora de refatorar esse código utilizando práticas profissionais de desenvolvimento para melhorar a legibilidade, a manutenção e reduzir duplicações.

## Instruções

Transforme o código atual do seu arquivo `app.js` implementando estas três técnicas principais de refatoração:

### 1. Extrair Constantes de Configuração

**Tarefa**: Crie uma seção de configuração no topo do arquivo com constantes reutilizáveis.

**Orientações para implementação:**
- Extraia a URL base da API do servidor (atualmente codificada em vários lugares)
- Crie constantes para mensagens de erro que aparecem em várias funções
- Considere extrair caminhos de rotas e IDs de elementos que são usados repetidamente

**Estrutura de exemplo:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Criar uma Função Unificada de Requisição

**Tarefa**: Construa uma função reutilizável `sendRequest()` que elimine o código duplicado entre `createAccount()` e `getAccount()`.

**Requisitos:**
- Lidar com requisições GET e POST
- Incluir tratamento de erros adequado
- Suportar diferentes endpoints de URL
- Aceitar dados opcionais no corpo da requisição

**Orientação para assinatura da função:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Adicionar Documentação Profissional ao Código

**Tarefa**: Documente seu código com comentários claros e úteis que expliquem o "porquê" por trás da lógica.

**Padrões de documentação:**
- Adicione documentação das funções explicando propósito, parâmetros e valores de retorno
- Inclua comentários inline para lógica complexa ou regras de negócio
- Agrupe funções relacionadas com cabeçalhos de seção
- Explique quaisquer padrões de código não óbvios ou soluções específicas para navegadores

**Estilo de documentação de exemplo:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevent default form submission to handle with JavaScript
  event.preventDefault();
  
  // Your implementation...
}
```

## Critérios de Sucesso

Seu código refatorado deve demonstrar estas práticas de desenvolvimento profissional:

### Implementação Exemplar
- ✅ **Constantes**: Todas as strings mágicas e URLs são extraídas em constantes claramente nomeadas
- ✅ **Princípio DRY**: A lógica comum de requisição é consolidada em uma função reutilizável `sendRequest()`
- ✅ **Documentação**: As funções possuem comentários JSDoc claros explicando propósito e parâmetros
- ✅ **Organização**: O código está logicamente agrupado com cabeçalhos de seção e formatação consistente
- ✅ **Tratamento de Erros**: Tratamento de erros aprimorado usando a nova função de requisição

### Implementação Adequada
- ✅ **Constantes**: A maioria dos valores repetidos é extraída, com alguns valores codificados restantes
- ✅ **Fatoração**: Função básica `sendRequest()` criada, mas pode não lidar com todos os casos extremos
- ✅ **Comentários**: Funções principais estão documentadas, embora algumas explicações possam ser mais completas
- ✅ **Legibilidade**: O código está geralmente bem organizado, com algumas áreas para melhoria

### Necessita Melhorias
- ❌ **Constantes**: Muitas strings mágicas e URLs permanecem codificadas ao longo do arquivo
- ❌ **Duplicação**: Grande duplicação de código permanece entre funções semelhantes
- ❌ **Documentação**: Comentários ausentes ou inadequados que não explicam o propósito do código
- ❌ **Organização**: O código carece de estrutura clara e agrupamento lógico

## Testando Seu Código Refatorado

Após a refatoração, certifique-se de que seu aplicativo bancário ainda funciona corretamente:

1. **Teste todos os fluxos de usuário**: Registro, login, exibição do painel e tratamento de erros
2. **Verifique chamadas à API**: Confirme que sua função `sendRequest()` funciona tanto para criação quanto para recuperação de contas
3. **Teste cenários de erro**: Teste com credenciais inválidas e erros de rede
4. **Revise a saída do console**: Certifique-se de que nenhum novo erro foi introduzido durante a refatoração

## Diretrizes de Submissão

Envie seu arquivo `app.js` refatorado com:
- Cabeçalhos de seção claros organizando diferentes funcionalidades
- Formatação e indentação consistentes do código
- Documentação JSDoc completa para todas as funções
- Um breve comentário no topo explicando sua abordagem de refatoração

**Desafio Extra**: Crie um arquivo simples de documentação de código (`CODE_STRUCTURE.md`) que explique a arquitetura do seu aplicativo e como as diferentes funções trabalham juntas.

## Conexão com o Mundo Real

Esta tarefa reflete o tipo de manutenção de código que os desenvolvedores profissionais realizam regularmente. Em ambientes industriais:
- **Revisões de código** avaliam legibilidade e manutenção, como nesta tarefa
- **Dívida técnica** se acumula quando o código não é regularmente refatorado e documentado
- **Colaboração em equipe** depende de código claro e bem documentado que novos membros da equipe possam entender
- **Correção de bugs** é muito mais fácil em bases de código bem organizadas com abstrações adequadas

As habilidades que você está praticando aqui - extração de constantes, eliminação de duplicação e escrita de documentação clara - são fundamentais para o desenvolvimento de software profissional.

---

**Aviso Legal**:  
Este documento foi traduzido usando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional feita por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.