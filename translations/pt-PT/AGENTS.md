# AGENTS.md

## Visão Geral do Projeto

Este é um repositório de currículo educacional para ensinar os fundamentos do desenvolvimento web a iniciantes. O currículo é um curso abrangente de 12 semanas desenvolvido pelos Microsoft Cloud Advocates, com 24 aulas práticas que abrangem JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educacional**: 24 lições estruturadas organizadas em módulos baseados em projetos
- **Projetos Práticos**: Terrário, Jogo de Digitação, Extensão de Navegador, Jogo Espacial, Aplicação Bancária, Editor de Código e Assistente de Chat AI
- **Questionários Interativos**: 48 questionários com 3 perguntas cada (avaliações pré e pós aula)
- **Suporte Multilíngue**: Traduções automáticas para mais de 50 idiomas através do GitHub Actions
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos de AI)

### Arquitetura

- Repositório educacional com estrutura baseada em lições
- Cada pasta de lição contém README, exemplos de código e soluções
- Projetos independentes em diretórios separados (quiz-app, vários projetos de lições)
- Sistema de tradução usando GitHub Actions (co-op-translator)
- Documentação servida via Docsify e disponível em PDF

## Comandos de Configuração

Este repositório destina-se principalmente ao consumo de conteúdo educacional. Para trabalhar com projetos específicos:

### Configuração Principal do Repositório

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Configuração da Aplicação de Quiz (Vue 3 + Vite)

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
npm run format     # Formatado com Prettier
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
# Abra index.html no navegador ou use Live Server
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

1. **Faça fork do repositório** para a sua conta do GitHub
2. **Clone o seu fork** localmente
3. **Crie uma nova branch** para as suas alterações
4. Faça alterações no conteúdo das lições ou exemplos de código
5. Teste quaisquer alterações de código nas pastas de projetos relevantes
6. Envie pull requests seguindo as diretrizes de contribuição

### Para Aprendizes

1. Faça fork ou clone do repositório
2. Navegue pelas pastas de lições sequencialmente
3. Leia os arquivos README de cada lição
4. Complete os questionários pré-licão em https://ff-quizzes.netlify.app/web/
5. Trabalhe com os exemplos de código nas pastas de lição
6. Complete tarefas e desafios
7. Faça os questionários pós-lição

### Desenvolvimento em Tempo Real

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)
- **Aplicação de Quiz**: Execute `npm run dev` na pasta quiz-app
- **Projetos**: Use a extensão Live Server do VS Code para projetos HTML
- **Projetos API**: Execute `npm start` nas pastas das APIs respetivas

## Instruções de Teste

### Teste da Aplicação de Quiz

```bash
cd quiz-app
npm run lint       # Verificar problemas de estilo de código
npm run build      # Verificar se a compilação é bem-sucedida
```

### Teste da API Bancária

```bash
cd 7-bank-project/api
npm run lint       # Verificar problemas de estilo de código
node server.js     # Verificar se o servidor inicia sem erros
```

### Abordagem Geral de Testes

- Este é um repositório educacional sem testes automatizados abrangentes
- O teste manual foca em:
  - Exemplos de código executam sem erros
  - Links na documentação funcionam corretamente
  - Builds de projetos completam com sucesso
  - Exemplos seguem as melhores práticas

### Verificações Pré-Envio

- Execute `npm run lint` nas pastas com package.json
- Verifique se os links markdown são válidos
- Teste exemplos de código no navegador ou Node.js
- Confirme que traduções mantêm a estrutura correta

## Diretrizes de Estilo de Código

### JavaScript

- Use sintaxe moderna ES6+
- Siga configurações padrão do ESLint fornecidas nos projetos
- Use nomes significativos para variáveis e funções para clareza educacional
- Adicione comentários explicativos para os alunos
- Formate usando Prettier onde configurado

### HTML/CSS

- Elementos semânticos HTML5
- Princípios de design responsivo
- Convenções claras de nomes de classes
- Comentários explicando técnicas CSS para aprendizes

### Python

- Diretrizes de estilo PEP 8
- Exemplos de código claros e educativos
- Anotações de tipo onde úteis para o aprendizado

### Documentação Markdown

- Hierarquia clara de títulos
- Blocos de código com especificação da linguagem
- Links para recursos adicionais
- Capturas de ecrã e imagens nas pastas `images/`
- Texto alternativo para imagens para acessibilidade

### Organização de Ficheiros

- Lição numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada projeto tem diretórios `solution/` e muitas vezes `start/` ou `your-work/`
- Imagens armazenadas em pastas `images/` específicas de cada lição
- Traduções em estrutura `translations/{language-code}/`

## Construção e Implantação

### Implantação da Aplicação de Quiz (Azure Static Web Apps)

A aplicação quiz-app está configurada para implantação em Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Desdobra via workflow do GitHub Actions em push para a main
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

### Builds Específicos de Projetos

Cada diretório de projeto pode ter seu próprio processo de build:
- Projetos Vue: `npm run build` cria bundles de produção
- Projetos estáticos: Sem passo de build, serve arquivos diretamente

## Diretrizes para Pull Requests

### Formato do Título

Use títulos claros e descritivos a indicar a área da alteração:
- `[Quiz-app] Adicionar novo quiz para lição X`
- `[Lesson-3] Corrigir erro de digitação no projeto terrarium`
- `[Translation] Adicionar tradução em espanhol para a lição 5`
- `[Docs] Atualizar instruções de configuração`

### Verificações Obrigatórias

Antes de submeter um PR:

1. **Qualidade do Código**:
   - Execute `npm run lint` nas pastas do projeto afetadas
   - Corrija todos os erros e avisos do lint

2. **Verificação do Build**:
   - Execute `npm run build` se aplicável
   - Garanta que não há erros de build

3. **Validação de Links**:
   - Teste todos os links markdown
   - Verifique as referências de imagens

4. **Revisão de Conteúdo**:
   - Revise ortografia e gramática
   - Garanta que exemplos de código estão corretos e educativos
   - Confirme que traduções mantêm o significado original

### Requisitos para Contribuição

- Concordar com o Microsoft CLA (verificação automática no primeiro PR)
- Seguir o [Código de Conduta Open Source da Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas
- Referenciar números de issues na descrição do PR, se aplicável

### Processo de Revisão

- PRs revisados por mantenedores e comunidade
- Clareza educacional é prioridade
- Exemplos de código devem seguir as melhores práticas atuais
- Traduções revisadas quanto à precisão e adequação cultural

## Sistema de Tradução

### Tradução Automática

- Usa GitHub Actions com workflow co-op-translator
- Tradução automática para mais de 50 idiomas
- Ficheiros fonte nos diretórios principais
- Ficheiros traduzidos em pastas `translations/{language-code}/`

### Adicionar Melhorias de Tradução Manualmente

1. Localize o ficheiro em `translations/{language-code}/`
2. Faça melhorias preservando a estrutura
3. Assegure que exemplos de código continuam funcionais
4. Teste quaisquer conteúdos de quiz localizados

### Metadados de Tradução

Ficheiros traduzidos incluem cabeçalho de metadados:
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

**Aplicação de quiz não inicia**:
- Verifique a versão do Node.js (recomendado v14+)
- Apague `node_modules` e `package-lock.json`, execute `npm install` novamente
- Verifique conflitos de porta (padrão: Vite usa a porta 5173)

**Servidor API não inicia**:
- Verifique se a versão do Node.js cumpre o mínimo (node >=10)
- Verifique se a porta já está em uso
- Certifique-se de que todas as dependências estão instaladas com `npm install`

**Extensão de navegador não carrega**:
- Verifique se o manifest.json está formatado corretamente
- Veja erros no console do navegador
- Siga as instruções específicas para instalação da extensão no navegador

**Problemas no projeto de chat Python**:
- Certifique-se que o pacote OpenAI está instalado: `pip install openai`
- Verifique se a variável de ambiente GITHUB_TOKEN está definida
- Verifique permissões de acesso aos modelos GitHub

**Docsify não serve documentação**:
- Instale docsify-cli globalmente: `npm install -g docsify-cli`
- Execute a partir da raiz do repositório
- Verifique que `docs/_sidebar.md` existe

### Dicas para Ambiente de Desenvolvimento

- Use VS Code com extensão Live Server para projetos HTML
- Instale extensões ESLint e Prettier para formatação consistente
- Use DevTools do navegador para depurar JavaScript
- Para projetos Vue, instale a extensão Vue DevTools no navegador

### Considerações de Performance

- Grande número de ficheiros traduzidos (50+ idiomas) faz com que clones completos sejam grandes
- Use clone superficial se estiver a trabalhar só conteúdo: `git clone --depth 1`
- Exclua traduções das pesquisas ao trabalhar em conteúdo em inglês
- Os processos de build podem ser lentos na primeira execução (npm install, build Vite)

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves de API nunca devem ser comitadas no repositório
- Use ficheiros `.env` (já incluídos no `.gitignore`)
- Documente variáveis de ambiente necessárias nos READMEs dos projetos

### Projetos Python

- Use ambientes virtuais: `python -m venv venv`
- Mantenha dependências atualizadas
- Tokens GitHub devem ter permissões mínimas necessárias

### Acesso aos Modelos GitHub

- Tokens de Acesso Pessoal (PAT) necessários para os Modelos GitHub
- Tokens devem ser guardados como variáveis de ambiente
- Nunca comite tokens ou credenciais

## Notas Adicionais

### Público-Alvo

- Iniciantes completos em desenvolvimento web
- Estudantes e autodidatas
- Professores usando o currículo em sala de aula
- Conteúdo projetado para acessibilidade e construção gradual de competências

### Filosofia Educacional

- Método de aprendizagem baseado em projetos
- Verificações frequentes de conhecimento (quizzes)
- Exercícios práticos de codificação
- Exemplos de aplicação no mundo real
- Foco nos fundamentos antes dos frameworks

### Manutenção do Repositório

- Comunidade ativa de aprendizes e contribuintes
- Atualizações regulares de dependências e conteúdo
- Issues e discussões monitoradas por mantenedores
- Atualizações de tradução automatizadas via GitHub Actions

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para aprendizes
- Cursos adicionais: AI Generativa, Ciência de Dados, ML, currículos IoT disponíveis

### Trabalhar com Projetos Específicos

Para instruções detalhadas sobre projetos individuais, consulte os arquivos README em:
- `quiz-app/README.md` - Aplicação de quiz Vue 3
- `7-bank-project/README.md` - Aplicação bancária com autenticação
- `5-browser-extension/README.md` - Desenvolvimento de extensão de navegador
- `6-space-game/README.md` - Desenvolvimento de jogo baseado em Canvas
- `9-chat-project/README.md` - Projeto de assistente de chat AI

### Estrutura Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:
- Cada lição é autónoma
- Projetos não partilham dependências
- Trabalhe em projetos individuais sem afetar os outros
- Clone o repositório completo para a experiência do currículo completo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, por favor esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original, na sua língua nativa, deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações erradas resultantes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->