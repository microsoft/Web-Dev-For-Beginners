# AGENTS.md

## Visão Geral do Projeto

Este é um repositório curricular educativo para ensinar fundamentos do desenvolvimento web a principiantes. O currículo é um curso abrangente de 12 semanas desenvolvido pelos Microsoft Cloud Advocates, com 24 lições práticas cobrindo JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educativo**: 24 lições estruturadas organizadas em módulos baseados em projetos
- **Projetos Práticos**: Terrário, Jogo de Digitação, Extensão de Navegador, Jogo Espacial, Aplicação Bancária, Editor de Código e Assistente de Chat AI
- **Questionários Interativos**: 48 questionários com 3 perguntas cada (avaliações pré/pós-licão)
- **Suporte Multilíngue**: Traduções automáticas para mais de 50 idiomas via GitHub Actions
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos AI)

### Arquitetura

- Repositório educativo com estrutura baseada em lições
- Cada pasta de lição contém README, exemplos de código e soluções
- Projetos independentes em diretórios separados (quiz-app, vários projetos das lições)
- Sistema de tradução usando GitHub Actions (co-op-translator)
- Documentação servida via Docsify e disponível em PDF

## Comandos para Configuração

Este repositório é principalmente para consumo de conteúdo educacional. Para trabalhar com projetos específicos:

### Configuração Principal do Repositório

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Configuração da Aplicação de Questionários (Vue 3 + Vite)

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

### Projetos do Jogo Espacial

```bash
cd 6-space-game/solution
npm install
# Abra index.html no navegador ou utilize o Live Server
```

### Projeto de Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Definir a variável de ambiente GITHUB_TOKEN
python api.py
```

## Workflow de Desenvolvimento

### Para Contribuidores de Conteúdo

1. **Fazer fork do repositório** para sua conta no GitHub
2. **Clonar o seu fork** localmente
3. **Criar uma nova branch** para as suas alterações
4. Fazer alterações no conteúdo da lição ou exemplos de código
5. Testar quaisquer alterações de código nos diretórios dos projetos relevantes
6. Submeter pull requests seguindo as diretrizes de contribuição

### Para Aprendizes

1. Fazer fork ou clonar o repositório
2. Navegar sequencialmente pelas pastas das lições
3. Ler os arquivos README de cada lição
4. Completar os questionários pré-lição em https://ff-quizzes.netlify.app/web/
5. Trabalhar os exemplos de código nas pastas das lições
6. Completar tarefas e desafios
7. Realizar os questionários pós-lição

### Desenvolvimento em Tempo Real

- **Documentação**: Executar `docsify serve` na raiz (porta 3000)
- **Aplicação de Questionários**: Executar `npm run dev` no diretório quiz-app
- **Projetos**: Usar extensão Live Server do VS Code para projetos HTML
- **Projetos API**: Executar `npm start` nos respetivos diretórios API

## Instruções de Testes

### Testes da Aplicação de Questionários

```bash
cd quiz-app
npm run lint       # Verificar problemas de estilo de código
npm run build      # Verificar se a compilação tem sucesso
```

### Testes da API Bancária

```bash
cd 7-bank-project/api
npm run lint       # Verifique problemas de estilo de código
node server.js     # Verifique se o servidor inicia sem erros
```

### Abordagem Geral de Testes

- Este é um repositório educativo sem testes automatizados completos
- Testes manuais focam em:
  - Exemplos de código executados sem erros
  - Links na documentação funcionam corretamente
  - Builds dos projetos completam com sucesso
  - Exemplos seguem boas práticas

### Verificações Antes da Submissão

- Executar `npm run lint` nas pastas com package.json
- Verificar que os links markdown são válidos
- Testar exemplos de código no browser ou Node.js
- Confirmar que traduções mantêm a estrutura correta

## Diretrizes de Estilo de Código

### JavaScript

- Usar sintaxe moderna ES6+
- Seguir configurações padrão ESLint fornecidas nos projetos
- Usar nomes de variáveis e funções significativos para clareza educativa
- Adicionar comentários explicando conceitos para aprendizes
- Formatar código com Prettier onde configurado

### HTML/CSS

- Elementos semânticos HTML5
- Princípios de design responsivo
- Convenções claras de nomeação de classes
- Comentários explicando técnicas CSS para aprendizes

### Python

- Diretrizes de estilo PEP 8
- Exemplos de código claros e educativos
- Anotações de tipos onde forem úteis para aprendizado

### Documentação Markdown

- Hierarquia clara de títulos
- Blocos de código com especificação de linguagem
- Links para recursos adicionais
- Capturas de ecrã e imagens nas pastas `images/`
- Texto alternativo para imagens para acessibilidade

### Organização de Ficheiros

- Lições numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada projeto tem diretórios `solution/` e frequentemente `start/` ou `your-work/`
- Imagens guardadas nas pastas `images/` específicas de cada lição
- Traduções na estrutura `translations/{language-code}/`

## Construção e Deployment

### Deployment da Aplicação de Questionários (Azure Static Web Apps)

A quiz-app está configurada para deployment em Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Faz o deploy através do fluxo de trabalho do GitHub Actions ao fazer push para a main
```

Configuração Azure Static Web Apps:
- **Local da aplicação**: `/quiz-app`
- **Local de output**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Geração de PDF da Documentação

```bash
npm install                    # Instalar docsify-to-pdf
npm run convert               # Gerar PDF a partir do docs
```

### Documentação Docsify

```bash
npm install -g docsify-cli    # Instalar o Docsify globalmente
docsify serve                 # Servir em localhost:3000
```

### Builds Específicos de Projetos

Cada diretório de projeto pode ter o seu próprio processo de build:
- Projetos Vue: `npm run build` cria bundles de produção
- Projetos estáticos: Sem passo de build, servir ficheiros diretamente

## Diretrizes para Pull Requests

### Formato de Título

Usar títulos claros e descritivos indicando a área de alteração:
- `[Quiz-app] Adicionar novo quiz para a lição X`
- `[Lesson-3] Corrigir erro tipográfico no projeto terrário`
- `[Translation] Adicionar tradução em Espanhol para a lição 5`
- `[Docs] Atualizar instruções de configuração`

### Verificações Obrigatórias

Antes de submeter um PR:

1. **Qualidade do Código**:
   - Executar `npm run lint` nas pastas de projeto afetadas
   - Corrigir todos os erros e avisos de lint

2. **Verificação do Build**:
   - Executar `npm run build`, se aplicável
   - Confirmar que não há erros de build

3. **Validação dos Links**:
   - Testar todos os links markdown
   - Verificar referências de imagens funcionam

4. **Revisão de Conteúdo**:
   - Revisar ortografia e gramática
   - Garantir que exemplos de código estão corretos e educativos
   - Confirmar que traduções mantêm o significado original

### Requisitos para Contribuição

- Aceitar o Microsoft CLA (verificação automática ao primeiro PR)
- Seguir o [Código de Conduta Open Source da Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas
- Referenciar números de issues na descrição do PR, se aplicável

### Processo de Revisão

- PRs são revistos por mantenedores e comunidade
- Clareza educativa é prioritária
- Exemplos de código devem seguir as melhores práticas atuais
- Traduções revisadas quanto à precisão e adequação cultural

## Sistema de Tradução

### Tradução Automática

- Usa GitHub Actions com workflow co-op-translator
- Tradução automática para mais de 50 idiomas
- Ficheiros fonte nas pastas principais
- Ficheiros traduzidos em `translations/{language-code}/`

### Adição de Melhorias Manuais à Tradução

1. Localizar ficheiro em `translations/{language-code}/`
2. Fazer melhorias preservando a estrutura
3. Garantir que exemplos de código mantém funcionalidade
4. Testar conteúdos de quiz localizados

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
- Verificar versão do Node.js (recomenda-se v14+)
- Apagar `node_modules` e `package-lock.json`, executar `npm install` novamente
- Verificar conflitos de porta (padrão: Vite usa porta 5173)

**Servidor API não arranca**:
- Confirmar versão mínima do Node.js (node >=10)
- Verificar se a porta já está em uso
- Garantir todas dependências instaladas com `npm install`

**Extensão de navegador não carrega**:
- Confirmar que manifest.json está formatado corretamente
- Verificar consola do navegador para erros
- Seguir instruções específicas para instalação de extensões no navegador

**Problemas no projeto de chat Python**:
- Confirmar pacote OpenAI instalado: `pip install openai`
- Verificar variável de ambiente GITHUB_TOKEN está configurada
- Checar permissões de acesso aos Modelos GitHub

**Docsify não serve a documentação**:
- Instalar docsify-cli globalmente: `npm install -g docsify-cli`
- Executar na raiz do repositório
- Confirmar existência do ficheiro `docs/_sidebar.md`

### Dicas para Ambiente de Desenvolvimento

- Usar VS Code com extensão Live Server para projetos HTML
- Instalar extensões ESLint e Prettier para formatação consistente
- Usar DevTools do navegador para depurar JavaScript
- Para projetos Vue, instalar extensão Vue DevTools no navegador

### Considerações de Performance

- Grande número de ficheiros traduzidos (50+ idiomas) torna clones completos grandes
- Usar clone superficial se estiver a trabalhar apenas no conteúdo: `git clone --depth 1`
- Excluir traduções de pesquisas quando trabalhar conteúdo em Inglês
- Processos de build podem ser lentos na primeira execução (npm install, build Vite)

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves de API nunca devem ser submetidas ao repositório
- Usar ficheiros `.env` (já listados no `.gitignore`)
- Documentar variáveis de ambiente necessárias nos READMEs dos projetos

### Projetos Python

- Usar ambientes virtuais: `python -m venv venv`
- Manter dependências atualizadas
- Tokens GitHub devem ter permissões mínimas necessárias

### Acesso a Modelos GitHub

- Tokens de Acesso Pessoal (PAT) necessários para os Modelos GitHub
- Tokens devem ser armazenados como variáveis de ambiente
- Nunca commitar tokens ou credenciais

## Notas Adicionais

### Público-alvo

- Principiantes completos em desenvolvimento web
- Estudantes e autodidatas
- Professores que usam o currículo em sala de aula
- Conteúdo desenhado para acessibilidade e desenvolvimento gradual de competências

### Filosofia Educativa

- Abordagem de aprendizagem baseada em projetos
- Verificações frequentes de conhecimento (quizzes)
- Exercícios práticos de código
- Exemplos de aplicações reais
- Foco nos fundamentos antes dos frameworks

### Manutenção do Repositório

- Comunidade ativa de aprendizes e contribuidores
- Atualizações regulares de dependências e conteúdos
- Issues e discussões monitoradas por mantenedores
- Atualizações de traduções automatizadas via GitHub Actions

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para aprendizes
- Cursos adicionais: Currículos de IA Generativa, Ciência de Dados, ML, IoT disponíveis

### Trabalhar com Projetos Específicos

Para instruções detalhadas sobre projetos individuais, consultar os README em:
- `quiz-app/README.md` - aplicação de quiz com Vue 3
- `7-bank-project/README.md` - aplicação bancária com autenticação
- `5-browser-extension/README.md` - desenvolvimento de extensão de navegador
- `6-space-game/README.md` - desenvolvimento de jogo em canvas
- `9-chat-project/README.md` - projeto de assistente de chat AI

### Estrutura Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:
- Cada lição é autónoma
- Projetos não partilham dependências
- Trabalhar em projetos individuais sem afetar os outros
- Clonar o repositório completo para experiência curricular completa

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, por favor esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->