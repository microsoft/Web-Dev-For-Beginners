# AGENTS.md

## Visão Geral do Projeto

Este é um repositório curricular educacional para ensinar fundamentos de desenvolvimento web para iniciantes. O currículo é um curso abrangente de 12 semanas desenvolvido pelos Microsoft Cloud Advocates, com 24 aulas práticas que cobrem JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educacional**: 24 aulas estruturadas organizadas em módulos baseados em projetos
- **Projetos Práticos**: Terrarium, Jogo de Digitação, Extensão de Navegador, Jogo Espacial, Aplicativo Bancário, Editor de Código e Assistente de Chat com IA
- **Quizzes Interativos**: 48 quizzes com 3 perguntas cada (avaliações pré e pós aula)
- **Suporte Multilíngue**: Traduções automatizadas para mais de 50 idiomas via GitHub Actions
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos de IA)

### Arquitetura

- Repositório educacional com estrutura baseada em aulas
- Cada pasta da aula contém README, exemplos de código e soluções
- Projetos independentes em diretórios separados (quiz-app, vários projetos de aula)
- Sistema de tradução usando GitHub Actions (co-op-translator)
- Documentação servida via Docsify e disponível em PDF

## Comandos de Configuração

Este repositório é destinado principalmente para consumo de conteúdo educacional. Para trabalhar com projetos específicos:

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

### Projetos de Extensão para Navegador

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

### Projeto de Chat (Backend em Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Definir a variável de ambiente GITHUB_TOKEN
python api.py
```

## Fluxo de Trabalho para Desenvolvimento

### Para Contribuidores de Conteúdo

1. **Faça um fork** do repositório para sua conta do GitHub
2. **Clone seu fork** localmente
3. **Crie uma nova branch** para suas alterações
4. Faça mudanças no conteúdo das aulas ou exemplos de código
5. Teste quaisquer mudanças de código nos diretórios de projeto relevantes
6. Envie pull requests seguindo as diretrizes de contribuição

### Para Aprendizes

1. Faça fork ou clone do repositório
2. Navegue para os diretórios das aulas sequencialmente
3. Leia os arquivos README de cada aula
4. Complete quizzes pré-aula em https://ff-quizzes.netlify.app/web/
5. Trabalhe nos exemplos de código nas pastas das aulas
6. Complete tarefas e desafios
7. Faça os quizzes pós-aula

### Desenvolvimento ao Vivo

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)
- **Quiz App**: Execute `npm run dev` no diretório quiz-app
- **Projetos**: Use a extensão Live Server do VS Code para projetos HTML
- **Projetos API**: Execute `npm start` nos respectivos diretórios de API

## Instruções para Testes

### Testes do Quiz App

```bash
cd quiz-app
npm run lint       # Verificar problemas de estilo de código
npm run build      # Verificar se a compilação foi bem-sucedida
```

### Testes da API Bancária

```bash
cd 7-bank-project/api
npm run lint       # Verifique problemas de estilo de código
node server.js     # Verifique se o servidor inicia sem erros
```

### Abordagem Geral de Teste

- Este é um repositório educacional sem testes automatizados abrangentes
- Testes manuais focam em:
  - Exemplos de código que executam sem erros
  - Links na documentação funcionam corretamente
  - Build dos projetos completam com sucesso
  - Exemplos seguem as melhores práticas

### Verificações Antes da Submissão

- Execute `npm run lint` nos diretórios que possuem package.json
- Verifique se os links markdown são válidos
- Teste os exemplos de código no navegador ou Node.js
- Certifique-se de que as traduções mantêm a estrutura adequada

## Diretrizes de Estilo de Código

### JavaScript

- Use sintaxe moderna ES6+
- Siga as configurações padrão do ESLint fornecidas nos projetos
- Use nomes significativos para variáveis e funções para clareza educacional
- Adicione comentários explicando conceitos para aprendizes
- Formate usando Prettier onde configurado

### HTML/CSS

- Elementos semânticos HTML5
- Princípios de design responsivo
- Convenções claras de nomenclatura de classes
- Comentários explicando técnicas CSS para aprendizes

### Python

- Diretrizes de estilo PEP 8
- Exemplos de código claros e educativos
- Tipagem (type hints) quando útil para o aprendizado

### Documentação Markdown

- Hierarquia clara de títulos
- Blocos de código com especificação de linguagem
- Links para recursos adicionais
- Capturas de tela e imagens nas pastas `images/`
- Texto alternativo para imagens para acessibilidade

### Organização de Arquivos

- Aulas numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada projeto tem diretórios `solution/` e frequentemente `start/` ou `your-work/`
- Imagens armazenadas nas pastas `images/` específicas de cada aula
- Traduções na estrutura `translations/{language-code}/`

## Build e Implantação

### Implantação do Quiz App (Azure Static Web Apps)

O quiz-app está configurado para implantação no Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Faz o deploy via workflow do GitHub Actions no push para a branch main
```

Configuração do Azure Static Web Apps:
- **Localização do app**: `/quiz-app`
- **Localização de saída**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Geração de PDF da Documentação

```bash
npm install                    # Instalar docsify-to-pdf
npm run convert               # Gerar PDF a partir dos docs
```

### Documentação Docsify

```bash
npm install -g docsify-cli    # Instalar Docsify globalmente
docsify serve                 # Servir em localhost:3000
```

### Builds Específicos de Projeto

Cada diretório de projeto pode ter seu próprio processo de build:
- Projetos Vue: `npm run build` cria bundles de produção
- Projetos estáticos: Sem etapa de build, serve arquivos diretamente

## Diretrizes para Pull Requests

### Formato do Título

Use títulos claros e descritivos indicando a área da mudança:
- `[Quiz-app] Adicionar novo quiz para a aula X`
- `[Lesson-3] Corrigir erro de digitação no projeto terrarium`
- `[Translation] Adicionar tradução para espanhol na aula 5`
- `[Docs] Atualizar instruções de configuração`

### Verificações Necessárias

Antes de enviar um PR:

1. **Qualidade do Código**:
   - Execute `npm run lint` nos diretórios afetados
   - Corrija todos os erros e avisos do lint

2. **Verificação do Build**:
   - Execute `npm run build` se aplicável
   - Certifique-se de que não há erros de build

3. **Validação dos Links**:
   - Teste todos os links markdown
   - Verifique funcionamento das referências de imagem

4. **Revisão de Conteúdo**:
   - Revise ortografia e gramática
   - Assegure que os exemplos de código estão corretos e educativos
   - Verifique se as traduções mantêm o significado original

### Requisitos para Contribuição

- Aceitar o CLA da Microsoft (verificação automática no primeiro PR)
- Seguir o [Código de Conduta Open Source da Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Confira o [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas
- Referencie números de issues na descrição do PR, se aplicável

### Processo de Revisão

- PRs são revisados por mantenedores e comunidade
- Clareza educacional é prioridade
- Exemplos de código devem seguir as melhores práticas atuais
- Traduções são revisadas para precisão e adequação cultural

## Sistema de Tradução

### Tradução Automatizada

- Usa GitHub Actions com workflow co-op-translator
- Tradução automática para mais de 50 idiomas
- Arquivos fonte nos diretórios principais
- Arquivos traduzidos em diretórios `translations/{language-code}/`

### Adicionando Melhorias Manuais nas Traduções

1. Localize o arquivo em `translations/{language-code}/`
2. Faça melhorias preservando a estrutura
3. Assegure que exemplos de código continuam funcionando
4. Teste qualquer conteúdo de quiz localizado

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

**App de quiz não inicia**:
- Verifique a versão do Node.js (recomendado v14+)
- Delete `node_modules` e `package-lock.json`, execute `npm install` novamente
- Verifique conflito de portas (padrão: Vite usa porta 5173)

**Servidor API não inicia**:
- Verifique se versão do Node.js atende mínimo (node >=10)
- Cheque se a porta já está em uso
- Certifique-se que todas as dependências foram instaladas com `npm install`

**Extensão de navegador não carrega**:
- Verifique se manifest.json está formatado corretamente
- Consulte console do navegador para erros
- Siga instruções específicas para instalação da extensão no navegador

**Problemas no projeto de chat Python**:
- Confirme que pacote OpenAI está instalado: `pip install openai`
- Verifique se variável de ambiente GITHUB_TOKEN está configurada
- Confira permissões de acesso do GitHub Models

**Docsify não serve a documentação**:
- Instale docsify-cli globalmente: `npm install -g docsify-cli`
- Rode a partir do diretório raiz do repositório
- Confirme que `docs/_sidebar.md` existe

### Dicas para Ambiente de Desenvolvimento

- Use VS Code com extensão Live Server para projetos HTML
- Instale extensões ESLint e Prettier para formatação consistente
- Use DevTools do navegador para depuração de JavaScript
- Para projetos Vue, instale extensão Vue DevTools no navegador

### Considerações de Performance

- Grande número de arquivos traduzidos (50+ idiomas) torna clones completos grandes
- Use clone superficial se for trabalhar somente com conteúdo: `git clone --depth 1`
- Exclua traduções de buscas ao trabalhar com conteúdo em inglês
- Processos de build podem ser lentos na primeira execução (npm install, build do Vite)

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves de API nunca devem ser commitadas no repositório
- Use arquivos `.env` (já incluídos no `.gitignore`)
- Documente variáveis de ambiente necessárias nos README dos projetos

### Projetos Python

- Use ambientes virtuais: `python -m venv venv`
- Mantenha dependências atualizadas
- Tokens do GitHub devem ter permissões mínimas necessárias

### Acesso ao GitHub Models

- Tokens pessoais de acesso (PAT) são necessários para acessar GitHub Models
- Tokens devem ser armazenados como variáveis de ambiente
- Nunca faça commit de tokens ou credenciais

## Notas Adicionais

### Público-alvo

- Iniciantes completos em desenvolvimento web
- Estudantes e autodidatas
- Professores usando o currículo em sala de aula
- Conteúdo projetado para acessibilidade e construção gradual de habilidades

### Filosofia Educacional

- Abordagem de aprendizagem baseada em projetos
- Verificações frequentes de conhecimento (quizzes)
- Exercícios práticos de programação
- Exemplos de aplicação no mundo real
- Foco nos fundamentos antes dos frameworks

### Manutenção do Repositório

- Comunidade ativa de aprendizes e colaboradores
- Atualizações regulares nas dependências e conteúdo
- Monitoramento de issues e discussões pelos mantenedores
- Atualizações de tradução automatizadas via GitHub Actions

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos do Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para aprendizes
- Cursos adicionais: IA Generativa, Ciência de Dados, ML, currículos de IoT disponíveis

### Trabalhando com Projetos Específicos

Para instruções detalhadas sobre projetos individuais, consulte os arquivos README em:
- `quiz-app/README.md` - Aplicação de quiz Vue 3
- `7-bank-project/README.md` - Aplicativo bancário com autenticação
- `5-browser-extension/README.md` - Desenvolvimento de extensão para navegador
- `6-space-game/README.md` - Desenvolvimento de jogo baseado em canvas
- `9-chat-project/README.md` - Projeto de assistente de chat com IA

### Estrutura Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:
- Cada aula é auto-suficiente
- Projetos não compartilham dependências
- Trabalhe em projetos individuais sem impactar os outros
- Clone o repositório completo para a experiência curricular completa

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se tradução humana profissional. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->