# AGENTS.md

## Visão Geral do Projeto

Este é um repositório de currículo educacional para ensino dos fundamentos do desenvolvimento web a iniciantes. O currículo é um curso abrangente de 12 semanas desenvolvido por Microsoft Cloud Advocates, com 24 lições práticas cobrindo JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educativo**: 24 lições estruturadas organizadas em módulos baseados em projetos
- **Projetos Práticos**: Terrário, Jogo de Digitação, Extensão de Navegador, Jogo Espacial, Aplicação Bancária, Editor de Código e Assistente de Chat com IA
- **Questionários Interativos**: 48 questionários com 3 perguntas cada (avaliações pré/pós-lição)
- **Suporte Multilíngue**: Traduções automáticas para mais de 50 idiomas via GitHub Actions
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos de IA)

### Arquitetura

- Repositório educativo com estrutura baseada em lições
- Cada pasta de lição contém README, exemplos de código e soluções
- Projetos independentes em diretórios separados (quiz-app, vários projetos de lições)
- Sistema de tradução usando GitHub Actions (co-op-translator)
- Documentação servida via Docsify e disponível em PDF

## Comandos de Configuração

Este repositório é principalmente para consumo de conteúdo educativo. Para trabalhar com projetos específicos:

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
npm run build      # Compilar para produção
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

### Projetos do Jogo Espacial

```bash
cd 6-space-game/solution
npm install
# Abra index.html no navegador ou use o Live Server
```

### Projeto de Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Definir a variável de ambiente GITHUB_TOKEN
python api.py
```

## Fluxo de Trabalho de Desenvolvimento

### Para Contribuidores de Conteúdo

1. **Fork do repositório** para a sua conta GitHub
2. **Clone o seu fork** localmente
3. **Crie uma nova branch** para suas alterações
4. Faça alterações no conteúdo das lições ou exemplos de código
5. Teste quaisquer alterações de código nos diretórios relevantes dos projetos
6. Submeta pull requests seguindo as diretrizes de contribuição

### Para Aprendizes

1. Fork ou clone o repositório
2. Navegue sequencialmente pelos diretórios das lições
3. Leia os ficheiros README de cada lição
4. Complete os questionários pré-lição em https://ff-quizzes.netlify.app/web/
5. Trabalhe com os exemplos de código nas pastas das lições
6. Complete tarefas e desafios
7. Faça os questionários pós-lição

### Desenvolvimento em Tempo Real

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)
- **Quiz App**: Execute `npm run dev` no diretório quiz-app
- **Projetos**: Use a extensão Live Server do VS Code para projetos HTML
- **Projetos API**: Execute `npm start` nos diretórios API correspondentes

## Instruções de Teste

### Teste do Quiz App

```bash
cd quiz-app
npm run lint       # Verificar problemas de estilo de código
npm run build      # Verificar se a compilação é bem-sucedida
```

### Teste da API do Banco

```bash
cd 7-bank-project/api
npm run lint       # Verificar problemas de estilo de código
node server.js     # Verificar se o servidor inicia sem erros
```

### Abordagem Geral de Testes

- Este é um repositório educacional sem testes automáticos abrangentes
- O teste manual foca em:
  - Exemplos de código executar sem erros
  - Links na documentação funcionarem corretamente
  - Compilações de projetos serem concluídas com sucesso
  - Exemplos seguirem as melhores práticas

### Verificações Pré-submissão

- Execute `npm run lint` nos diretórios com package.json
- Verifique se os links markdown estão válidos
- Teste exemplos de código no browser ou Node.js
- Confirme que traduções mantêm a estrutura correta

## Diretrizes de Estilo de Código

### JavaScript

- Use sintaxe moderna ES6+
- Siga as configurações padrão do ESLint fornecidas nos projetos
- Use nomes de variáveis e funções significativos para clareza educativa
- Adicione comentários explicando conceitos para os aprendizes
- Formate usando Prettier onde configurado

### HTML/CSS

- Elementos semânticos HTML5
- Princípios de design responsivo
- Convenções claras de nomes de classes
- Comentários explicando técnicas CSS para aprendizes

### Python

- Diretrizes de estilo PEP 8
- Exemplos de código claros e educativos
- Dicas de tipo onde úteis para o aprendizado

### Documentação Markdown

- Hierarquia clara de títulos
- Blocos de código com especificação de linguagem
- Links para recursos adicionais
- Capturas de ecrã e imagens nas pastas `images/`
- Texto alternativo para imagens para acessibilidade

### Organização de Ficheiros

- Lições numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada projeto tem diretórios `solution/` e frequentemente `start/` ou `your-work/`
- Imagens armazenadas em pastas `images/` específicas de cada lição
- Traduções em estrutura `translations/{language-code}/`

## Construção e Implantação

### Implantação do Quiz App (Azure Static Web Apps)

O quiz-app está configurado para implantação em Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Desdobra através do fluxo de trabalho do GitHub Actions ao fazer push para main
```

Configuração Azure Static Web Apps:
- **Localização da app**: `/quiz-app`
- **Localização da saída**: `dist`
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

### Compilações Específicas de Projeto

Cada diretório de projeto pode ter seu próprio processo de build:
- Projetos Vue: `npm run build` cria bundles de produção
- Projetos estáticos: Sem etapa de build, serve os ficheiros diretamente

## Diretrizes para Pull Requests

### Formato do Título

Use títulos claros e descritivos indicando a área da alteração:
- `[Quiz-app] Adicionar novo quiz para lição X`
- `[Lesson-3] Corrigir erro tipográfico no projeto terrário`
- `[Translation] Adicionar tradução em espanhol para lição 5`
- `[Docs] Atualizar instruções de configuração`

### Verificações Obrigatórias

Antes de submeter um PR:

1. **Qualidade do Código**:
   - Execute `npm run lint` nos diretórios de projeto afetados
   - Corrija todos os erros e avisos do lint

2. **Verificação de Build**:
   - Execute `npm run build` se aplicável
   - Assegure-se de que não há erros de build

3. **Validação de Links**:
   - Teste todos os links markdown
   - Verifique referências de imagem

4. **Revisão de Conteúdo**:
   - Revise ortografia e gramática
   - Garanta que exemplos de código estão corretos e educativos
   - Verifique se as traduções mantêm o significado original

### Requisitos para Contribuição

- Concordar com o Microsoft CLA (verificação automática no primeiro PR)
- Seguir o [Código de Conduta Open Source da Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consulte [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas
- Referencie números de issues na descrição do PR, se aplicável

### Processo de Revisão

- PRs revisados por mantenedores e comunidade
- Clareza educativa é prioridade
- Exemplos de código devem seguir as melhores práticas atuais
- Traduções revisadas quanto à precisão e adequação cultural

## Sistema de Tradução

### Tradução Automatizada

- Usa GitHub Actions com workflow co-op-translator
- Traduz automaticamente para mais de 50 idiomas
- Arquivos fonte nos diretórios principais
- Arquivos traduzidos em `translations/{language-code}/`

### Adição de Melhorias Manuais nas Traduções

1. Localize o ficheiro em `translations/{language-code}/`
2. Faça melhorias preservando a estrutura
3. Assegure que os exemplos de código permanecem funcionais
4. Teste qualquer conteúdo de questionário localizado

### Metadados da Tradução

Arquivos traduzidos incluem um cabeçalho de metadados:
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
- Verifique a versão do Node.js (recomenda-se v14+)
- Apague `node_modules` e `package-lock.json`, execute `npm install` novamente
- Verifique conflitos de porta (padrão: Vite usa a porta 5173)

**Servidor API não inicia**:
- Verifique se a versão do Node.js é mínima (node >=10)
- Confirme se a porta já está em uso
- Garanta que todas as dependências estão instaladas com `npm install`

**Extensão de navegador não carrega**:
- Verifique se o manifesto.json está formatado corretamente
- Verifique erros na consola do navegador
- Siga instruções específicas para instalação da extensão no navegador

**Problemas no projeto de chat Python**:
- Certifique-se que o pacote OpenAI está instalado: `pip install openai`
- Verifique se a variável ambiente GITHUB_TOKEN está definida
- Cheque permissões de acesso ao GitHub Models

**Docsify não serve a documentação**:
- Instale docsify-cli globalmente: `npm install -g docsify-cli`
- Execute a partir do diretório raiz do repositório
- Verifique que `docs/_sidebar.md` existe

### Dicas para Ambiente de Desenvolvimento

- Use VS Code com extensão Live Server para projetos HTML
- Instale extensões ESLint e Prettier para formatação consistente
- Use DevTools do navegador para depurar JavaScript
- Para projetos Vue, instale extensão Vue DevTools no navegador

### Considerações de Performance

- Número elevado de ficheiros traduzidos (mais de 50 idiomas) implica clones completos volumosos
- Use clone superficial se estiver a trabalhar apenas no conteúdo: `git clone --depth 1`
- Exclua traduções das pesquisas ao trabalhar no conteúdo em inglês
- Processos de build podem ser lentos na primeira execução (npm install, build do Vite)

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves API nunca devem ser cometidas no repositório
- Use ficheiros `.env` (já incluídos no `.gitignore`)
- Documente variáveis de ambiente necessárias nos READMEs dos projetos

### Projetos Python

- Use ambientes virtuais: `python -m venv venv`
- Mantenha as dependências atualizadas
- Tokens GitHub devem ter permissões mínimas necessárias

### Acesso ao GitHub Models

- Tokens Pessoais de Acesso (PAT) são requeridos para GitHub Models
- Tokens devem ser armazenados como variáveis de ambiente
- Nunca cometa tokens ou credenciais

## Notas Adicionais

### Público-Alvo

- Iniciantes completos no desenvolvimento web
- Estudantes e autodidatas
- Professores usando o currículo em sala de aula
- Conteúdo desenhado para acessibilidade e construção gradual de competências

### Filosofia Educativa

- Abordagem de aprendizagem baseada em projetos
- Verificações frequentes de conhecimento (questionários)
- Exercícios práticos de programação
- Exemplos de aplicação no mundo real
- Foco nos fundamentos antes dos frameworks

### Manutenção do Repositório

- Comunidade ativa de aprendizes e contribuidores
- Atualizações regulares em dependências e conteúdo
- Issues e discussões monitorizadas pelos mantenedores
- Atualizações das traduções automatizadas via GitHub Actions

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para aprendizes
- Cursos adicionais: IA generativa, Data Science, ML, currículos IoT disponíveis

### Trabalhar com Projetos Específicos

Para instruções detalhadas de projetos individuais, consulte os ficheiros README em:
- `quiz-app/README.md` - aplicação quiz Vue 3
- `7-bank-project/README.md` - aplicação bancária com autenticação
- `5-browser-extension/README.md` - desenvolvimento de extensão de navegador
- `6-space-game/README.md` - desenvolvimento de jogo com Canvas
- `9-chat-project/README.md` - projeto assistente de chat com IA

### Estrutura Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:
- Cada lição é autónoma
- Projetos não partilham dependências
- Trabalhe em projetos individuais sem afetar outros
- Clone o repositório inteiro para ter a experiência completa do currículo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso**:
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos por garantir a precisão, por favor tenha em conta que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se tradução profissional por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações erradas decorrentes da utilização desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->