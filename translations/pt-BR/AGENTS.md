# AGENTS.md

## Visão Geral do Projeto

Este é um repositório curricular educacional para ensino dos fundamentos do desenvolvimento web para iniciantes. O currículo é um curso abrangente de 12 semanas desenvolvido pelos Microsoft Cloud Advocates, com 24 aulas práticas cobrindo JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educacional**: 24 aulas estruturadas organizadas em módulos baseados em projetos
- **Projetos Práticos**: Terrário, Jogo de Digitação, Extensão de Navegador, Jogo Espacial, Aplicativo Bancário, Editor de Código e Assistente de Chat com IA
- **Quizzes Interativos**: 48 quizzes com 3 perguntas cada (avaliação pré e pós-aula)
- **Suporte Multilíngue**: Traduções automáticas para mais de 50 idiomas via GitHub Actions
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos de IA)

### Arquitetura

- Repositório educacional com estrutura baseada em aulas
- Cada pasta de aula contém README, exemplos de código e soluções
- Projetos independentes em diretórios separados (quiz-app, vários projetos de aula)
- Sistema de tradução usando GitHub Actions (co-op-translator)
- Documentação servida via Docsify e disponível em PDF

## Comandos de Configuração

Este repositório é principalmente para consumo de conteúdo educacional. Para trabalhar com projetos específicos:

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
npm run build      # Criar para produção
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
# Abra index.html no navegador ou use Live Server
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

1. **Faça fork do repositório** para sua conta GitHub
2. **Clone seu fork** localmente
3. **Crie uma nova branch** para suas alterações
4. Faça alterações no conteúdo das aulas ou exemplos de código
5. Teste quaisquer mudanças de código nos diretórios dos projetos relevantes
6. Submeta pull requests seguindo as diretrizes de contribuição

### Para Aprendizes

1. Faça fork ou clone do repositório
2. Navegue seqüencialmente pelos diretórios das aulas
3. Leia os arquivos README de cada aula
4. Complete os quizzes pré-aula em https://ff-quizzes.netlify.app/web/
5. Trabalhe nos exemplos de código nas pastas das aulas
6. Complete tarefas e desafios
7. Realize os quizzes pós-aula

### Desenvolvimento ao Vivo

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)
- **Quiz App**: Execute `npm run dev` no diretório quiz-app
- **Projetos**: Use a extensão Live Server do VS Code para projetos HTML
- **Projetos API**: Execute `npm start` nos diretórios das APIs correspondentes

## Instruções de Teste

### Teste do Quiz App

```bash
cd quiz-app
npm run lint       # Verificar problemas de estilo de código
npm run build      # Verificar se a compilação é bem-sucedida
```

### Teste da API Bancária

```bash
cd 7-bank-project/api
npm run lint       # Verifique problemas de estilo de código
node server.js     # Verifique se o servidor inicia sem erros
```

### Abordagem Geral para Testes

- Este é um repositório educacional sem testes automatizados abrangentes
- Testes manuais focam em:
  - Exemplos de código executam sem erros
  - Links na documentação funcionam corretamente
  - Builds dos projetos são realizados com sucesso
  - Exemplos seguem boas práticas

### Verificações Antes da Submissão

- Execute `npm run lint` nos diretórios com package.json
- Verifique se os links markdown são válidos
- Teste exemplos de código no navegador ou Node.js
- Confirme que as traduções mantêm a estrutura adequada

## Diretrizes de Estilo de Código

### JavaScript

- Use sintaxe moderna ES6+
- Siga configurações padrão do ESLint fornecidas nos projetos
- Use nomes de variáveis e funções significativos para clareza educacional
- Adicione comentários explicando conceitos para alunos
- Formate usando Prettier onde configurado

### HTML/CSS

- Elementos semânticos HTML5
- Princípios de design responsivo
- Convenções claras de nomeação de classes
- Comentários explicando técnicas de CSS para alunos

### Python

- Diretrizes de estilo PEP 8
- Exemplos de código claros e educacionais
- Tipagem onde ajuda no aprendizado

### Documentação Markdown

- Hierarquia clara de títulos
- Blocos de código com especificação de linguagem
- Links para recursos adicionais
- Capturas de tela e imagens em diretórios `images/`
- Texto alternativo para imagens para acessibilidade

### Organização de Arquivos

- Aulas numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada projeto tem diretórios `solution/` e frequentemente `start/` ou `your-work/`
- Imagens armazenadas em pastas `images/` específicas das aulas
- Traduções na estrutura `translations/{language-code}/`

## Build e Implantação

### Deploy do Quiz App (Azure Static Web Apps)

O quiz-app está configurado para deploy no Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Faz o deploy via workflow do GitHub Actions ao enviar para a main
```

Configuração do Azure Static Web Apps:
- **Localização do app**: `/quiz-app`
- **Localização da saída**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Geração de PDF da Documentação

```bash
npm install                    # Instalar docsify-to-pdf
npm run convert               # Gerar PDF a partir do docs
```

### Documentação Docsify

```bash
npm install -g docsify-cli    # Instale o Docsify globalmente
docsify serve                 # Servir em localhost:3000
```

### Builds Específicos por Projeto

Cada diretório de projeto pode ter seu próprio processo de build:
- Projetos Vue: `npm run build` cria bundles de produção
- Projetos estáticos: Sem etapa de build, serve arquivos diretamente

## Diretrizes para Pull Requests

### Formato do Título

Use títulos claros e descritivos indicando a área de mudança:
- `[Quiz-app] Adicionar novo quiz para a aula X`
- `[Lesson-3] Corrigir erro de digitação no projeto terrarium`
- `[Translation] Adicionar tradução em espanhol para a aula 5`
- `[Docs] Atualizar instruções de configuração`

### Verificações Obrigatórias

Antes de submeter um PR:

1. **Qualidade do Código**:
   - Execute `npm run lint` nos diretórios dos projetos afetados
   - Corrija todos os erros e avisos de lint

2. **Verificação do Build**:
   - Execute `npm run build` se aplicável
   - Garanta que não haja erros no build

3. **Validação de Links**:
   - Teste todos os links markdown
   - Verifique referências de imagens

4. **Revisão de Conteúdo**:
   - Faça revisão ortográfica e gramatical
   - Garanta que os exemplos de código estejam corretos e educativos
   - Verifique se as traduções mantêm o significado original

### Requisitos para Contribuição

- Concordar com o Microsoft CLA (verificação automática no primeiro PR)
- Seguir o [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas
- Referenciar números de issues na descrição do PR, quando aplicável

### Processo de Revisão

- PRs são revisados por mantenedores e comunidade
- Clareza educacional é priorizada
- Exemplos de código devem seguir as melhores práticas atuais
- Traduções revisadas para precisão e adequação cultural

## Sistema de Tradução

### Tradução Automatizada

- Utiliza GitHub Actions com workflow co-op-translator
- Traduz para mais de 50 idiomas automaticamente
- Arquivos fonte nas pastas principais
- Arquivos traduzidos em `translations/{language-code}/`

### Adicionando Melhorias Manuais nas Traduções

1. Localize o arquivo em `translations/{language-code}/`
2. Faça melhorias preservando a estrutura
3. Certifique-se de que os exemplos de código permaneçam funcionais
4. Teste qualquer conteúdo localizado de quizzes

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

## Depuração e Solução de Problemas

### Problemas Comuns

**Aplicação de quiz não inicia**:
- Verifique a versão do Node.js (recomendada v14+)
- Exclua `node_modules` e `package-lock.json`, execute `npm install` novamente
- Verifique conflitos de porta (padrão: Vite usa porta 5173)

**Servidor API não inicia**:
- Confirme que a versão do Node.js atende ao mínimo (node >=10)
- Confira se a porta não está em uso
- Assegure-se que todas as dependências foram instaladas com `npm install`

**Extensão do navegador não carrega**:
- Verifique se o manifest.json está corretamente formatado
- Cheque o console do navegador para erros
- Siga as instruções específicas do navegador para instalação da extensão

**Problemas no projeto de chat em Python**:
- Instale o pacote OpenAI: `pip install openai`
- Garanta que a variável de ambiente GITHUB_TOKEN está configurada
- Verifique permissões de acesso ao GitHub Models

**Docsify não serve a documentação**:
- Instale docsify-cli globalmente: `npm install -g docsify-cli`
- Execute a partir do diretório raiz do repositório
- Verifique se `docs/_sidebar.md` existe

### Dicas para Ambiente de Desenvolvimento

- Use VS Code com extensão Live Server para projetos HTML
- Instale extensões ESLint e Prettier para formatação consistente
- Utilize DevTools do navegador para depurar JavaScript
- Para projetos Vue, instale a extensão Vue DevTools no navegador

### Considerações de Performance

- Grande número de arquivos traduzidos (mais de 50 idiomas) faz clones completos serem grandes
- Use clone shallow se estiver trabalhando apenas com conteúdo: `git clone --depth 1`
- Exclua traduções das buscas ao trabalhar com conteúdo em inglês
- Processos de build podem ser lentos na primeira execução (npm install, build Vite)

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves de API nunca devem ser commitadas ao repositório
- Use arquivos `.env` (já incluídos no `.gitignore`)
- Documente as variáveis de ambiente necessárias nos READMEs dos projetos

### Projetos Python

- Use ambientes virtuais: `python -m venv venv`
- Mantenha dependências atualizadas
- Tokens GitHub devem ter permissões mínimas necessárias

### Acesso ao GitHub Models

- Tokens de Acesso Pessoal (PAT) são obrigatórios para GitHub Models
- Tokens devem ser armazenados como variáveis de ambiente
- Nunca faça commit de tokens ou credenciais

## Notas Adicionais

### Público-Alvo

- Iniciantes completos em desenvolvimento web
- Estudantes e autodidatas
- Professores usando o currículo em salas de aula
- Conteúdo projetado para acessibilidade e construção gradual de habilidades

### Filosofia Educacional

- Abordagem de aprendizagem baseada em projetos
- Verificações frequentes de conhecimento (quizzes)
- Exercícios práticos de programação
- Exemplos de aplicações do mundo real
- Foco nos fundamentos antes dos frameworks

### Manutenção do Repositório

- Comunidade ativa de aprendizes e contribuidores
- Atualizações regulares de dependências e conteúdo
- Issues e discussões monitoradas por mantenedores
- Atualizações de tradução automatizadas via GitHub Actions

### Recursos Relacionados

- [Módulos do Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos do Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para aprendizes
- Cursos adicionais: IA Generativa, Ciência de Dados, ML, Currículos IoT disponíveis

### Trabalhando com Projetos Específicos

Para instruções detalhadas sobre cada projeto, consulte os arquivos README em:
- `quiz-app/README.md` - Aplicação de quiz Vue 3
- `7-bank-project/README.md` - Aplicativo bancário com autenticação
- `5-browser-extension/README.md` - Desenvolvimento de extensão de navegador
- `6-space-game/README.md` - Desenvolvimento de jogo baseado em canvas
- `9-chat-project/README.md` - Projeto de assistente de chat IA

### Estrutura Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:
- Cada aula é auto-contida
- Projetos não compartilham dependências
- Trabalhe em projetos individuais sem afetar os outros
- Clone o repositório completo para a experiência completa do currículo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se a tradução profissional por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->