# AGENTS.md

## Visão Geral do Projeto

Este é um repositório de currículo educacional para ensinar os fundamentos do desenvolvimento web a iniciantes. O currículo é um curso abrangente de 12 semanas desenvolvido pelos Microsoft Cloud Advocates, com 24 lições práticas que cobrem JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educacional**: 24 lições estruturadas organizadas em módulos baseados em projetos
- **Projetos Práticos**: Terrário, Jogo de Digitação, Extensão de Navegador, Jogo Espacial, Aplicação Bancária, Editor de Código e Assistente de Chat com IA
- **Questionários Interativos**: 48 questionários com 3 perguntas cada (avaliações pré/pós-lição)
- **Suporte Multilíngue**: Traduções automáticas para mais de 50 idiomas via GitHub Actions
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos de IA)

### Arquitetura

- Repositório educacional com estrutura baseada em lições
- Cada pasta de lição contém README, exemplos de código e soluções
- Projetos independentes em diretórios separados (quiz-app, vários projetos de lições)
- Sistema de tradução usando GitHub Actions (co-op-translator)
- Documentação servida via Docsify e disponível em PDF

## Comandos de Configuração

Este repositório é principalmente para consumo de conteúdo educacional. Para trabalhar com projetos específicos:

### Configuração do Repositório Principal

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Configuração do Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API do Projeto Bancário (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Projetos de Extensão de Navegador

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Projetos do Jogo Espacial

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Projeto de Chat (Backend em Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Fluxo de Trabalho de Desenvolvimento

### Para Contribuidores de Conteúdo

1. **Faça um fork do repositório** na sua conta GitHub
2. **Clone o fork** localmente
3. **Crie uma nova branch** para suas alterações
4. Faça alterações no conteúdo das lições ou nos exemplos de código
5. Teste quaisquer alterações de código nos diretórios de projetos relevantes
6. Envie pull requests seguindo as diretrizes de contribuição

### Para Estudantes

1. Faça um fork ou clone do repositório
2. Navegue pelos diretórios das lições sequencialmente
3. Leia os arquivos README de cada lição
4. Complete os questionários pré-lição em https://ff-quizzes.netlify.app/web/
5. Trabalhe nos exemplos de código nas pastas das lições
6. Complete os exercícios e desafios
7. Faça os questionários pós-lição

### Desenvolvimento ao Vivo

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)
- **Quiz App**: Execute `npm run dev` no diretório quiz-app
- **Projetos**: Use a extensão Live Server do VS Code para projetos HTML
- **Projetos de API**: Execute `npm start` nos diretórios de API correspondentes

## Instruções de Teste

### Teste do Quiz App

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Teste da API Bancária

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Abordagem Geral de Teste

- Este é um repositório educacional sem testes automatizados abrangentes
- O teste manual foca em:
  - Exemplos de código executando sem erros
  - Links na documentação funcionando corretamente
  - Construções de projetos concluídas com sucesso
  - Exemplos seguindo boas práticas

### Verificações Antes da Submissão

- Execute `npm run lint` nos diretórios com package.json
- Verifique se os links em markdown são válidos
- Teste os exemplos de código no navegador ou Node.js
- Certifique-se de que as traduções mantêm a estrutura adequada

## Diretrizes de Estilo de Código

### JavaScript

- Use sintaxe moderna ES6+
- Siga as configurações padrão do ESLint fornecidas nos projetos
- Use nomes de variáveis e funções significativos para clareza educacional
- Adicione comentários explicando conceitos para os alunos
- Formate usando Prettier onde configurado

### HTML/CSS

- Elementos semânticos do HTML5
- Princípios de design responsivo
- Convenções claras de nomenclatura de classes
- Comentários explicando técnicas de CSS para os alunos

### Python

- Diretrizes de estilo PEP 8
- Exemplos de código claros e educacionais
- Dicas de tipo onde úteis para aprendizado

### Documentação em Markdown

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

## Construção e Implantação

### Implantação do Quiz App (Azure Static Web Apps)

O quiz-app está configurado para implantação no Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Configuração do Azure Static Web Apps:
- **Localização do aplicativo**: `/quiz-app`
- **Localização de saída**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Geração de PDF da Documentação

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Documentação Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Construções Específicas de Projetos

Cada diretório de projeto pode ter seu próprio processo de construção:
- Projetos Vue: `npm run build` cria pacotes de produção
- Projetos estáticos: Sem etapa de construção, sirva os arquivos diretamente

## Diretrizes para Pull Requests

### Formato do Título

Use títulos claros e descritivos indicando a área de alteração:
- `[Quiz-app] Adicionar novo questionário para a lição X`
- `[Lesson-3] Corrigir erro de digitação no projeto terrário`
- `[Translation] Adicionar tradução em espanhol para a lição 5`
- `[Docs] Atualizar instruções de configuração`

### Verificações Necessárias

Antes de enviar um PR:

1. **Qualidade do Código**:
   - Execute `npm run lint` nos diretórios de projeto afetados
   - Corrija todos os erros e avisos de linting

2. **Verificação de Construção**:
   - Execute `npm run build`, se aplicável
   - Certifique-se de que não há erros de construção

3. **Validação de Links**:
   - Teste todos os links em markdown
   - Verifique se as referências de imagens funcionam

4. **Revisão de Conteúdo**:
   - Revise para erros de ortografia e gramática
   - Certifique-se de que os exemplos de código estão corretos e educacionais
   - Verifique se as traduções mantêm o significado original

### Requisitos de Contribuição

- Concorde com o Microsoft CLA (verificação automatizada no primeiro PR)
- Siga o [Código de Conduta de Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consulte [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas
- Referencie números de problemas na descrição do PR, se aplicável

### Processo de Revisão

- PRs revisados por mantenedores e comunidade
- Clareza educacional é priorizada
- Exemplos de código devem seguir as melhores práticas atuais
- Traduções revisadas para precisão e adequação cultural

## Sistema de Tradução

### Tradução Automática

- Usa GitHub Actions com workflow co-op-translator
- Traduz automaticamente para mais de 50 idiomas
- Arquivos fonte nos diretórios principais
- Arquivos traduzidos em diretórios `translations/{language-code}/`

### Adicionando Melhorias de Tradução Manual

1. Localize o arquivo em `translations/{language-code}/`
2. Faça melhorias preservando a estrutura
3. Certifique-se de que os exemplos de código permanecem funcionais
4. Teste qualquer conteúdo de questionário localizado

### Metadados de Tradução

Arquivos traduzidos incluem cabeçalho de metadados:
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

## Depuração e Resolução de Problemas

### Problemas Comuns

**Quiz app não inicia**:
- Verifique a versão do Node.js (recomendado v14+)
- Exclua `node_modules` e `package-lock.json`, execute `npm install` novamente
- Verifique conflitos de porta (padrão: Vite usa porta 5173)

**Servidor API não inicia**:
- Verifique se a versão do Node.js atende ao mínimo (node >=10)
- Verifique se a porta já está em uso
- Certifique-se de que todas as dependências estão instaladas com `npm install`

**Extensão de navegador não carrega**:
- Verifique se o manifest.json está formatado corretamente
- Verifique o console do navegador para erros
- Siga as instruções específicas do navegador para instalação de extensões

**Problemas no projeto de chat em Python**:
- Certifique-se de que o pacote OpenAI está instalado: `pip install openai`
- Verifique se a variável de ambiente GITHUB_TOKEN está definida
- Verifique as permissões de acesso aos GitHub Models

**Docsify não serve os documentos**:
- Instale docsify-cli globalmente: `npm install -g docsify-cli`
- Execute a partir do diretório raiz do repositório
- Verifique se `docs/_sidebar.md` existe

### Dicas para Ambiente de Desenvolvimento

- Use VS Code com a extensão Live Server para projetos HTML
- Instale as extensões ESLint e Prettier para formatação consistente
- Use as DevTools do navegador para depurar JavaScript
- Para projetos Vue, instale a extensão Vue DevTools no navegador

### Considerações de Desempenho

- Grande número de arquivos traduzidos (50+ idiomas) significa clones completos grandes
- Use clone superficial se estiver trabalhando apenas no conteúdo: `git clone --depth 1`
- Exclua traduções de buscas ao trabalhar no conteúdo em inglês
- Processos de construção podem ser lentos na primeira execução (npm install, Vite build)

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves de API nunca devem ser comprometidas no repositório
- Use arquivos `.env` (já em `.gitignore`)
- Documente as variáveis de ambiente necessárias nos READMEs dos projetos

### Projetos em Python

- Use ambientes virtuais: `python -m venv venv`
- Mantenha as dependências atualizadas
- Tokens do GitHub devem ter permissões mínimas necessárias

### Acesso aos GitHub Models

- Tokens de Acesso Pessoal (PAT) necessários para GitHub Models
- Tokens devem ser armazenados como variáveis de ambiente
- Nunca comprometa tokens ou credenciais

## Notas Adicionais

### Público-alvo

- Iniciantes completos em desenvolvimento web
- Estudantes e autodidatas
- Professores usando o currículo em salas de aula
- O conteúdo é projetado para acessibilidade e construção gradual de habilidades

### Filosofia Educacional

- Abordagem de aprendizado baseada em projetos
- Verificações frequentes de conhecimento (questionários)
- Exercícios práticos de codificação
- Exemplos de aplicação no mundo real
- Foco nos fundamentos antes de frameworks

### Manutenção do Repositório

- Comunidade ativa de alunos e contribuidores
- Atualizações regulares de dependências e conteúdo
- Problemas e discussões monitorados por mantenedores
- Atualizações de tradução automatizadas via GitHub Actions

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos do Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para alunos
- Cursos adicionais: IA Generativa, Ciência de Dados, ML, currículos de IoT disponíveis

### Trabalhando com Projetos Específicos

Para instruções detalhadas sobre projetos individuais, consulte os arquivos README em:
- `quiz-app/README.md` - Aplicação de questionário em Vue 3
- `7-bank-project/README.md` - Aplicação bancária com autenticação
- `5-browser-extension/README.md` - Desenvolvimento de extensão de navegador
- `6-space-game/README.md` - Desenvolvimento de jogo baseado em Canvas
- `9-chat-project/README.md` - Projeto de assistente de chat com IA

### Estrutura Monorepo

Embora não seja um monorepo tradicional, este repositório contém vários projetos independentes:
- Cada lição é autônoma
- Projetos não compartilham dependências
- Trabalhe em projetos individuais sem afetar outros
- Clone o repositório inteiro para a experiência completa do currículo

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.