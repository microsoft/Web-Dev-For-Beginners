# AGENTS.md

## Visão Geral do Projeto

Este é um repositório de currículo educacional para ensinar fundamentos de desenvolvimento web para iniciantes. O currículo é um curso completo de 12 semanas desenvolvido pelos Microsoft Cloud Advocates, com 24 aulas práticas cobrindo JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educacional**: 24 lições estruturadas organizadas em módulos baseados em projetos
- **Projetos Práticos**: Terrário, Jogo de Digitação, Extensão de Navegador, Jogo Espacial, Aplicativo Bancário, Editor de Código e Assistente de Chat com IA
- **Questionários Interativos**: 48 questionários com 3 perguntas cada (avaliações pré e pós-lição)
- **Suporte Multilíngue**: Traduções automáticas para mais de 50 idiomas via GitHub Actions
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos de IA)

### Arquitetura

- Repositório educacional com estrutura baseada em lições
- Cada pasta de lição contém README, exemplos de código e soluções
- Projetos independentes em diretórios separados (quiz-app, vários projetos de lição)
- Sistema de tradução usando GitHub Actions (co-op-translator)
- Documentação servida via Docsify e disponível em PDF

## Comandos de Configuração

Este repositório é destinado principalmente ao consumo de conteúdo educacional. Para trabalhar com projetos específicos:

### Configuração Principal do Repositório

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Configuração do Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Iniciar servidor de desenvolvimento
npm run build      # Construir para produção
npm run lint       # Executar ESLint
```

### API do Projeto Bancário (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Iniciar servidor API
npm run lint       # Executar ESLint
npm run format     # Formatar com Prettier
```

### Projetos de Extensão de Navegador

```bash
cd 5-browser-extension/solution
npm install
# Siga as instruções específicas do navegador para carregar extensões
```

### Projetos de Jogo Espacial

```bash
cd 6-space-game/solution
npm install
# Abra index.html no navegador ou use o Live Server
```

### Projeto de Chat (Backend em Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Defina a variável de ambiente GITHUB_TOKEN
python api.py
```

## Fluxo de Desenvolvimento

### Para Contribuidores de Conteúdo

1. **Faça um fork do repositório** para sua conta do GitHub
2. **Clone seu fork** localmente
3. **Crie uma nova branch** para suas alterações
4. Faça mudanças no conteúdo das lições ou exemplos de código
5. Teste quaisquer alterações de código nos diretórios dos projetos relevantes
6. Envie pull requests seguindo as diretrizes de contribuição

### Para Estudantes

1. Faça fork ou clone o repositório
2. Navegue pelas pastas das lições sequencialmente
3. Leia os arquivos README de cada lição
4. Complete os questionários pré-lição em https://ff-quizzes.netlify.app/web/
5. Trabalhe nos exemplos de código nas pastas das lições
6. Complete tarefas e desafios
7. Faça os questionários pós-lição

### Desenvolvimento ao Vivo

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)
- **Quiz App**: Execute `npm run dev` no diretório quiz-app
- **Projetos**: Use a extensão Live Server do VS Code para projetos HTML
- **Projetos de API**: Execute `npm start` nos respectivos diretórios de API

## Instruções de Teste

### Teste do Quiz App

```bash
cd quiz-app
npm run lint       # Verifique problemas no estilo do código
npm run build      # Verifique se a compilação foi bem-sucedida
```

### Teste da API Bancária

```bash
cd 7-bank-project/api
npm run lint       # Verifique problemas de estilo de código
node server.js     # Verifique se o servidor inicia sem erros
```

### Abordagem Geral de Testes

- Este é um repositório educacional sem testes automatizados abrangentes
- Os testes manuais focam em:
  - Exemplos de código executam sem erros
  - Links na documentação funcionam corretamente
  - Builds dos projetos completam com sucesso
  - Exemplos seguem boas práticas

### Verificações Antes de Enviar

- Execute `npm run lint` em diretórios com package.json
- Verifique se os links markdown são válidos
- Teste exemplos de código no navegador ou Node.js
- Confira se as traduções mantêm estrutura adequada

## Diretrizes de Estilo de Código

### JavaScript

- Use sintaxe moderna ES6+
- Siga as configurações padrão do ESLint fornecidas nos projetos
- Use nomes de variáveis e funções significativos para clareza educacional
- Adicione comentários explicando conceitos para os estudantes
- Formate usando Prettier onde configurado

### HTML/CSS

- Elementos semânticos HTML5
- Princípios de design responsivo
- Convenções claras para nomes de classes
- Comentários explicando técnicas CSS para os estudantes

### Python

- Diretrizes de estilo PEP 8
- Exemplos de código claros e educativos
- Anotações de tipo onde forem úteis para aprendizagem

### Documentação Markdown

- Hierarquia clara de títulos
- Blocos de código com especificação de linguagem
- Links para recursos adicionais
- Capturas de tela e imagens em diretórios `images/`
- Texto alternativo para imagens para acessibilidade

### Organização de Arquivos

- Lições numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada projeto tem diretórios `solution/` e frequentemente `start/` ou `your-work/`
- Imagens armazenadas em pastas `images/` específicas das lições
- Traduções na estrutura `translations/{language-code}/`

## Build e Implantação

### Implantação do Quiz App (Azure Static Web Apps)

O quiz-app está configurado para implantação no Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Faz o deploy via workflow do GitHub Actions em push para main
```

Configuração do Azure Static Web Apps:
- **Localização do app**: `/quiz-app`
- **Localização de output**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Geração de PDF da Documentação

```bash
npm install                    # Instalar docsify-to-pdf
npm run convert               # Gerar PDF a partir do docs
```

### Documentação Docsify

```bash
npm install -g docsify-cli    # Instalar Docsify globalmente
docsify serve                 # Servir em localhost:3000
```

### Builds Específicos de Projetos

Cada diretório de projeto pode ter seu próprio processo de build:
- Projetos Vue: `npm run build` cria bundles de produção
- Projetos estáticos: Nenhuma etapa de build, sirva arquivos diretamente

## Diretrizes para Pull Requests

### Formato do Título

Use títulos claros e descritivos indicando a área da alteração:
- `[Quiz-app] Adicionar novo quiz para a lição X`
- `[Lesson-3] Corrigir erro de digitação no projeto terrarium`
- `[Translation] Adicionar tradução para espanhol da lição 5`
- `[Docs] Atualizar instruções de configuração`

### Verificações Obrigatórias

Antes de enviar um PR:

1. **Qualidade do Código**:
   - Execute `npm run lint` nos diretórios dos projetos afetados
   - Corrija todos os erros e avisos de lint

2. **Verificação de Build**:
   - Execute `npm run build`, se aplicável
   - Garanta que não haja erros no build

3. **Validação de Links**:
   - Teste todos os links markdown
   - Verifique referências de imagens funcionando

4. **Revisão de Conteúdo**:
   - Faça revisão ortográfica e gramatical
   - Confirme que exemplos de código estão corretos e educativos
   - Verifique se traduções mantêm o significado original

### Requisitos para Contribuição

- Aceitar o Microsoft CLA (verificação automática no primeiro PR)
- Seguir o [Código de Conduta de Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas
- Referenciar números de issues na descrição do PR se aplicável

### Processo de Revisão

- PRs revisados por mantenedores e comunidade
- Clareza educacional é prioridade
- Exemplos de código devem seguir as melhores práticas atuais
- Traduções são revisadas para precisão e adequação cultural

## Sistema de Tradução

### Tradução Automatizada

- Usa GitHub Actions com workflow co-op-translator
- Tradução para mais de 50 idiomas automaticamente
- Arquivos fonte nos diretórios principais
- Arquivos traduzidos em diretórios `translations/{language-code}/`

### Adicionando Melhorias Manuais de Tradução

1. Encontre o arquivo em `translations/{language-code}/`
2. Faça melhorias preservando a estrutura
3. Garanta que exemplos de código permaneçam funcionais
4. Teste qualquer conteúdo localizado de quizzes

### Metadados da Tradução

Arquivos traduzidos incluem cabeçalho metadata:
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## Depuração e Solução de Problemas

### Problemas Comuns

**Quiz app não inicia**:
- Verifique a versão do Node.js (recomendado v14+)
- Delete `node_modules` e `package-lock.json`, execute `npm install` novamente
- Cheque conflitos de porta (padrão: Vite usa porta 5173)

**Servidor API não inicia**:
- Verifique se versão do Node.js é mínima (node >=10)
- Verifique se a porta já está em uso
- Confirme todas as dependências instaladas com `npm install`

**Extensão do navegador não carrega**:
- Verifique se manifest.json está formatado corretamente
- Cheque console do navegador para erros
- Siga instruções específicas do navegador para instalação da extensão

**Problemas no projeto de chat em Python**:
- Certifique-se que o pacote OpenAI está instalado: `pip install openai`
- Verifique se a variável de ambiente GITHUB_TOKEN está configurada
- Cheque permissões de acesso ao GitHub Models

**Docsify não serve documentação**:
- Instale docsify-cli globalmente: `npm install -g docsify-cli`
- Rode a partir do diretório raiz do repositório
- Verifique se `docs/_sidebar.md` existe

### Dicas para Ambiente de Desenvolvimento

- Use VS Code com extensão Live Server para projetos HTML
- Instale extensões ESLint e Prettier para formatação consistente
- Use DevTools do navegador para depurar JavaScript
- Para projetos Vue, instale extensão Vue DevTools no navegador

### Considerações de Performance

- Grande número de arquivos traduzidos (50+ idiomas) torna clones completos grandes
- Use clone superficial se trabalhar só com conteúdo: `git clone --depth 1`
- Exclua traduções de buscas ao trabalhar com conteúdo em inglês
- Processos de build podem ser lentos na primeira execução (npm install, build Vite)

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves de API nunca devem ser commitadas no repositório
- Use arquivos `.env` (já no `.gitignore`)
- Documente variáveis de ambiente necessárias nos READMEs dos projetos

### Projetos Python

- Use ambientes virtuais: `python -m venv venv`
- Mantenha dependências atualizadas
- Tokens do GitHub devem ter permissões mínimas necessárias

### Acesso aos GitHub Models

- Tokens de acesso pessoal (PAT) são necessários para GitHub Models
- Tokens devem ser armazenados como variáveis de ambiente
- Nunca commit tokens ou credenciais

## Notas Adicionais

### Público Alvo

- Iniciantes completos em desenvolvimento web
- Estudantes e autodidatas
- Professores usando o currículo em salas de aula
- Conteúdo projetado para acessibilidade e aprendizado gradual

### Filosofia Educacional

- Abordagem baseada em projetos
- Verificações frequentes de conhecimento (quizzes)
- Exercícios práticos de codificação
- Exemplos de aplicação reais
- Foco em fundamentos antes de frameworks

### Manutenção do Repositório

- Comunidade ativa de estudantes e contribuidores
- Atualizações regulares de dependências e conteúdo
- Issues e discussões monitoradas por mantenedores
- Atualizações de tradução automatizadas via GitHub Actions

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos do Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para estudantes
- Cursos adicionais: IA Generativa, Ciência de Dados, ML, currículos de IoT disponíveis

### Trabalhando com Projetos Específicos

Para instruções detalhadas sobre projetos individuais, consulte os arquivos README em:
- `quiz-app/README.md` - Aplicativo de quiz Vue 3
- `7-bank-project/README.md` - Aplicativo bancário com autenticação
- `5-browser-extension/README.md` - Desenvolvimento de extensão de navegador
- `6-space-game/README.md` - Desenvolvimento de jogo em canvas
- `9-chat-project/README.md` - Projeto de assistente de chat com IA

### Estrutura Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:
- Cada lição é autocontida
- Projetos não compartilham dependências
- Trabalhe em projetos individuais sem afetar os outros
- Clone o repositório inteiro para a experiência completa do currículo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se a tradução profissional realizada por um tradutor humano. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->