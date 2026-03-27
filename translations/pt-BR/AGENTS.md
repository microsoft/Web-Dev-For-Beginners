# AGENTS.md

## Visão Geral do Projeto

Este é um repositório de currículo educacional para ensinar fundamentos de desenvolvimento web para iniciantes. O currículo é um curso abrangente de 12 semanas desenvolvido pelos Microsoft Cloud Advocates, contendo 24 aulas práticas com JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educacional**: 24 aulas estruturadas organizadas em módulos baseados em projetos
- **Projetos Práticos**: Terrarium, Jogo de Digitação, Extensão de Navegador, Jogo Espacial, Aplicativo Bancário, Editor de Código e Assistente de Chat com IA
- **Quizzes Interativos**: 48 quizzes com 3 perguntas cada (avaliações pré e pós-aula)
- **Suporte Multilíngue**: Traduções automáticas para mais de 50 idiomas via GitHub Actions
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos de IA)

### Arquitetura

- Repositório educacional com estrutura baseada em aulas
- Cada pasta de aula contém README, exemplos de código e soluções
- Projetos independentes em diretórios separados (quiz-app, vários projetos das aulas)
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
npm run build      # Compilar para produção
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
# Abra index.html no navegador ou use o Live Server
```

### Projeto de Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Defina a variável de ambiente GITHUB_TOKEN
python api.py
```

## Fluxo de Desenvolvimento

### Para Contribuidores de Conteúdo

1. **Faça fork do repositório** para sua conta no GitHub
2. **Clone seu fork** localmente
3. **Crie um novo branch** para suas mudanças
4. Faça alterações no conteúdo das aulas ou nos exemplos de código
5. Teste quaisquer alterações de código nos diretórios dos projetos relevantes
6. Envie pull requests seguindo as diretrizes de contribuição

### Para Aprendizes

1. Faça fork ou clone o repositório
2. Navegue sequencialmente pelos diretórios das aulas
3. Leia os arquivos README de cada aula
4. Complete os quizzes pré-aula em https://ff-quizzes.netlify.app/web/
5. Trabalhe nos exemplos de código nas pastas das aulas
6. Complete as tarefas e desafios
7. Faça os quizzes pós-aula

### Desenvolvimento ao Vivo

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)
- **Quiz App**: Execute `npm run dev` no diretório quiz-app
- **Projetos**: Use a extensão Live Server do VS Code para projetos HTML
- **Projetos API**: Execute `npm start` nos diretórios das APIs correspondentes

## Instruções de Testes

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

### Abordagem Geral de Testes

- Este é um repositório educacional sem testes automatizados abrangentes
- Testes manuais focam em:
  - Exemplos de código executam sem erros
  - Links na documentação funcionam corretamente
  - Builds dos projetos completam com sucesso
  - Exemplos seguem as melhores práticas

### Verificações Pré-Envio

- Execute `npm run lint` nos diretórios com package.json
- Verifique se os links em markdown são válidos
- Teste exemplos de código no navegador ou Node.js
- Verifique se traduções mantêm a estrutura correta

## Diretrizes de Estilo de Código

### JavaScript

- Utilize sintaxe moderna ES6+
- Siga configurações padrão ESLint providas nos projetos
- Use nomes de variáveis e funções significativos para clareza educacional
- Adicione comentários explicando conceitos para os aprendizes
- Formate usando Prettier onde configurado

### HTML/CSS

- Elementos semânticos HTML5
- Princípios de design responsivo
- Convenções claras de nomenclatura de classes
- Comentários explicando técnicas CSS para aprendizes

### Python

- Diretrizes de estilo PEP 8
- Exemplos de código claros e educativos
- Anotações de tipos onde forem úteis para aprendizado

### Documentação Markdown

- Hierarquia clara de títulos
- Blocos de código com especificação de linguagem
- Links para recursos adicionais
- Capturas de tela e imagens nas pastas `images/`
- Texto alternativo para imagens para acessibilidade

### Organização de Arquivos

- Aulas numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada projeto tem diretórios `solution/` e frequentemente `start/` ou `your-work/`
- Imagens armazenadas em pastas `images/` específicas de cada aula
- Traduções na estrutura `translations/{language-code}/`

## Build e Implantação

### Implantação do Quiz App (Azure Static Web Apps)

O quiz-app está configurado para implantação em Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Implanta via workflow do GitHub Actions ao fazer push para o main
```

Configuração Azure Static Web Apps:
- **Localização do app**: `/quiz-app`
- **Localização da saída**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Geração de PDF da Documentação

```bash
npm install                    # Instale o docsify-to-pdf
npm run convert               # Gere PDF a partir do docs
```

### Documentação Docsify

```bash
npm install -g docsify-cli    # Instalar Docsify globalmente
docsify serve                 # Servir em localhost:3000
```

### Builds Específicos de Projetos

Cada diretório de projeto pode ter seu próprio processo de build:
- Projetos Vue: `npm run build` cria bundles de produção
- Projetos estáticos: Sem etapa de build, servem arquivos diretamente

## Diretrizes para Pull Requests

### Formato do Título

Use títulos claros e descritivos indicando a área da mudança:
- `[Quiz-app] Adicionar novo quiz para a aula X`
- `[Lesson-3] Corrigir erro de digitação no projeto terrarium`
- `[Translation] Adicionar tradução em espanhol para a aula 5`
- `[Docs] Atualizar instruções de configuração`

### Verificações Obrigatórias

Antes de enviar um PR:

1. **Qualidade do Código**:
   - Execute `npm run lint` nos diretórios dos projetos afetados
   - Corrija todos os erros e avisos do lint

2. **Verificação de Build**:
   - Execute `npm run build` se aplicável
   - Garanta que não haja erros no build

3. **Validação de Links**:
   - Teste todos os links markdown
   - Verifique as referências de imagens

4. **Revisão de Conteúdo**:
   - Revise ortografia e gramática
   - Assegure que os exemplos de código estejam corretos e educacionais
   - Confirme que traduções mantenham o significado original

### Requisitos de Contribuição

- Aceite o CLA da Microsoft (checagem automática no primeiro PR)
- Siga o [Código de Conduta de Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas
- Faça referência aos números de issues na descrição do PR, se aplicável

### Processo de Revisão

- PRs revisados por mantenedores e comunidade
- Clareza educacional é priorizada
- Exemplos de código devem seguir as melhores práticas atuais
- Traduções revisadas quanto à precisão e adequação cultural

## Sistema de Tradução

### Tradução Automatizada

- Usa GitHub Actions com workflow co-op-translator
- Traduz para mais de 50 idiomas automaticamente
- Arquivos-fonte nos diretórios principais
- Arquivos traduzidos nas pastas `translations/{language-code}/`

### Adição de Melhorias Manuais nas Traduções

1. Localize o arquivo em `translations/{language-code}/`
2. Faça melhorias preservando a estrutura
3. Certifique-se de que exemplos de código continuem funcionais
4. Teste conteúdos de quiz localizados

### Metadados das Traduções

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

**Quiz app não inicia**:
- Verifique a versão do Node.js (recomendado v14+)
- Apague `node_modules` e `package-lock.json`, execute `npm install` novamente
- Verifique conflitos de porta (padrão: Vite usa porta 5173)

**Servidor API não inicia**:
- Verifique se a versão do Node.js atende ao mínimo (node >=10)
- Cheque se a porta já está em uso
- Assegure que todas as dependências foram instaladas com `npm install`

**Extensão de navegador não carrega**:
- Verifique se o manifest.json está formatado corretamente
- Verifique a console do navegador para erros
- Siga as instruções específicas do navegador para instalação de extensões

**Problemas no projeto de chat Python**:
- Certifique-se de que o pacote OpenAI está instalado: `pip install openai`
- Verifique se a variável de ambiente GITHUB_TOKEN está definida
- Verifique as permissões de acesso aos GitHub Models

**Docsify não serve a documentação**:
- Instale docsify-cli globalmente: `npm install -g docsify-cli`
- Execute a partir do diretório raiz do repositório
- Verifique se `docs/_sidebar.md` existe

### Dicas para o Ambiente de Desenvolvimento

- Use VS Code com extensão Live Server para projetos HTML
- Instale as extensões ESLint e Prettier para formatação consistente
- Use as DevTools do navegador para debugar JavaScript
- Para projetos Vue, instale a extensão Vue DevTools no navegador

### Considerações de Performance

- Grande número de arquivos traduzidos (50+ idiomas) torna clonagens completas grandes
- Use clone shallow se estiver trabalhando apenas com conteúdo: `git clone --depth 1`
- Exclua traduções de buscas ao trabalhar com conteúdo em inglês
- Processos de build podem ser lentos na primeira execução (npm install, build Vite)

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves de API nunca devem ser commitadas no repositório
- Use arquivos `.env` (já estão no `.gitignore`)
- Documente variáveis de ambiente necessárias nos READMEs dos projetos

### Projetos Python

- Use ambientes virtuais: `python -m venv venv`
- Mantenha dependências atualizadas
- Tokens GitHub devem ter permissões mínimas necessárias

### Acesso aos GitHub Models

- Tokens de Acesso Pessoal (PAT) requeridos para GitHub Models
- Tokens devem ser armazenados como variáveis de ambiente
- Nunca commit tokens ou credenciais

## Notas Adicionais

### Público-Alvo

- Iniciantes completos em desenvolvimento web
- Estudantes e autodidatas
- Professores que usam o currículo em sala de aula
- Conteúdo desenhado para acessibilidade e construção gradual de habilidades

### Filosofia Educacional

- Abordagem baseada em projetos
- Verificações frequentes de conhecimento (quizzes)
- Exercícios práticos de codificação
- Exemplos de aplicação no mundo real
- Foco nos fundamentos antes dos frameworks

### Manutenção do Repositório

- Comunidade ativa de aprendizes e contribuidores
- Atualizações regulares de dependências e conteúdo
- Issues e discussões monitoradas pelos mantenedores
- Atualizações de tradução automatizadas via GitHub Actions

### Recursos Relacionados

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para aprendizes
- Cursos adicionais: AI Generativa, Ciência de Dados, ML, IoT disponíveis

### Trabalhando com Projetos Específicos

Para instruções detalhadas sobre projetos individuais, consulte os arquivos README em:
- `quiz-app/README.md` - Aplicação de quiz em Vue 3
- `7-bank-project/README.md` - Aplicativo bancário com autenticação
- `5-browser-extension/README.md` - Desenvolvimento de extensão de navegador
- `6-space-game/README.md` - Desenvolvimento de jogo baseado em canvas
- `9-chat-project/README.md` - Projeto de assistente de chat com IA

### Estrutura Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:
- Cada aula é autocontida
- Projetos não compartilham dependências
- Trabalhe em projetos individuais sem afetar outros
- Clone o repositório inteiro para a experiência completa do currículo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos empenhemos pela precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em sua língua nativa deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se tradução profissional feita por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->