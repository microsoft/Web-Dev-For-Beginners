# AGENTS.md

## Visão Geral do Projeto

Este é um repositório de currículo educacional para ensinar fundamentos de desenvolvimento web para iniciantes. O currículo é um curso abrangente de 12 semanas desenvolvido por Microsoft Cloud Advocates, com 24 aulas práticas cobrindo JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educacional**: 24 aulas estruturadas organizadas em módulos baseados em projetos
- **Projetos Práticos**: Terrário, Jogo de Digitação, Extensão de Navegador, Jogo Espacial, Aplicativo Bancário, Editor de Código e Assistente de Chat AI
- **Quizzes Interativos**: 48 quizzes com 3 perguntas cada (avaliações pré e pós-aula)
- **Suporte Multilíngue**: Traduções automáticas para mais de 50 idiomas via GitHub Actions
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos de AI)

### Arquitetura

- Repositório educacional com estrutura baseada em aulas
- Cada pasta de aula contém README, exemplos de código e soluções
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

### Projeto API do Banco (Node.js + Express)

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
# Siga as instruções específicas do navegador para carregar a extensão
```

### Projetos de Jogo Espacial

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

## Fluxo de Trabalho para Desenvolvimento

### Para Contribuidores de Conteúdo

1. **Faça um fork do repositório** para sua conta no GitHub
2. **Clone seu fork** localmente
3. **Crie uma nova branch** para suas alterações
4. Faça mudanças no conteúdo das aulas ou exemplos de código
5. Teste quaisquer alterações de código nos diretórios dos projetos relevantes
6. Envie pull requests seguindo as diretrizes de contribuição

### Para Aprendizes

1. Faça fork ou clone do repositório
2. Navegue sequentialmente pelos diretórios das aulas
3. Leia os arquivos README de cada aula
4. Complete os quizzes pré-aula em https://ff-quizzes.netlify.app/web/
5. Trabalhe nos exemplos de código nas pastas das aulas
6. Complete tarefas e desafios
7. Faça os quizzes pós-aula

### Desenvolvimento ao Vivo

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)
- **Quiz App**: Execute `npm run dev` no diretório quiz-app
- **Projetos**: Use a extensão Live Server do VS Code para projetos HTML
- **Projetos API**: Execute `npm start` nos diretórios API respectivos

## Instruções de Teste

### Teste do Quiz App

```bash
cd quiz-app
npm run lint       # Verificar problemas de estilo de código
npm run build      # Verificar se a construção é bem-sucedida
```

### Teste da API do Banco

```bash
cd 7-bank-project/api
npm run lint       # Verifique problemas de estilo de código
node server.js     # Verifique se o servidor inicia sem erros
```

### Abordagem Geral de Teste

- Este é um repositório educacional sem testes automatizados completos
- Testes manuais focam em:
  - Exemplos de código rodando sem erros
  - Links na documentação funcionando corretamente
  - Builds dos projetos completando com sucesso
  - Exemplos seguindo boas práticas

### Verificações Pré-envio

- Execute `npm run lint` em diretórios com package.json
- Verifique se os links markdown são válidos
- Teste os exemplos de código no navegador ou Node.js
- Confira se traduções mantêm a estrutura correta

## Diretrizes de Estilo de Código

### JavaScript

- Use sintaxe moderna ES6+
- Siga as configurações padrão do ESLint fornecidas nos projetos
- Use nomes significativos para variáveis e funções para clareza educacional
- Adicione comentários explicativos para os aprendizes
- Formate com Prettier onde configurado

### HTML/CSS

- Elementos semânticos HTML5
- Princípios de design responsivo
- Convenções claras de nomes de classes
- Comentários explicando técnicas CSS para aprendizes

### Python

- Diretrizes de estilo PEP 8
- Exemplos de código claros e educacionais
- Tipos (type hints) onde úteis para aprendizado

### Documentação Markdown

- Hierarquia clara de títulos
- Blocos de código com especificação de linguagem
- Links para recursos adicionais
- Capturas de tela e imagens nas pastas `images/`
- Texto alternativo para imagens para acessibilidade

### Organização de Arquivos

- Aulas numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada projeto tem diretórios `solution/` e frequentemente `start/` ou `your-work/`
- Imagens armazenadas nas pastas `images/` específicas das aulas
- Traduções na estrutura `translations/{language-code}/`

## Build e Deploy

### Deploy do Quiz App (Azure Static Web Apps)

O quiz-app está configurado para deployment no Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Faz o deploy via fluxo de trabalho do GitHub Actions ao dar push no main
```

Configuração do Azure Static Web Apps:
- **Localização do app**: `/quiz-app`
- **Localização de saída**: `dist`
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

### Builds específicos de projeto

Cada diretório de projeto pode ter seu próprio processo de build:
- Projetos Vue: `npm run build` cria bundles para produção
- Projetos estáticos: Nenhum passo de build, serve arquivos diretamente

## Diretrizes para Pull Request

### Formatação do Título

Use títulos claros e descritivos indicando a área da mudança:
- `[Quiz-app] Adiciona novo quiz para a aula X`
- `[Lesson-3] Corrige erro de digitação no projeto terrário`
- `[Translation] Adiciona tradução para espanhol na aula 5`
- `[Docs] Atualiza instruções de configuração`

### Verificações Obrigatórias

Antes de enviar um PR:

1. **Qualidade de Código**:
   - Execute `npm run lint` nos diretórios afetados
   - Corrija todos erros e avisos do lint

2. **Verificação do Build**:
   - Execute `npm run build`, se aplicável
   - Garanta que não haja erros no build

3. **Validação de Links**:
   - Teste todos os links markdown
   - Verifique se as imagens são referenciadas corretamente

4. **Revisão de Conteúdo**:
   - Revisão ortográfica e gramatical
   - Certifique-se que os exemplos de código estão corretos e educativos
   - Verifique se traduções mantêm o significado original

### Requisitos para Contribuição

- Concordar com o CLA da Microsoft (verificação automática no primeiro PR)
- Seguir o [Código de Conduta Open Source da Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas
- Referenciar números de issues na descrição do PR, se aplicável

### Processo de Revisão

- PRs são revisados por mantenedores e comunidade
- Clareza educacional é priorizada
- Exemplos de código devem seguir as melhores práticas atuais
- Traduções revisadas quanto à precisão e adequação cultural

## Sistema de Tradução

### Tradução Automática

- Usa GitHub Actions com workflow co-op-translator
- Traduz automaticamente para mais de 50 idiomas
- Arquivos fonte nos diretórios principais
- Arquivos traduzidos em `translations/{language-code}/`

### Adicionando Melhorias Manuais de Tradução

1. Localize o arquivo em `translations/{language-code}/`
2. Faça melhorias preservando a estrutura
3. Garanta que exemplos de código continuem funcionais
4. Teste conteúdo de quiz localizado

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
- Apague `node_modules` e `package-lock.json`, execute `npm install` novamente
- Verifique conflitos de porta (padrão: Vite usa porta 5173)

**Servidor API não inicia**:
- Verifique se a versão do Node.js atende ao mínimo (node >=10)
- Confira se a porta já está em uso
- Garanta todas dependências instaladas com `npm install`

**Extensão de navegador não carrega**:
- Verifique se manifest.json está corretamente formatado
- Cheque erros no console do navegador
- Siga instruções específicas de instalação para o navegador

**Problemas no projeto de chat Python**:
- Certifique-se que o pacote OpenAI está instalado: `pip install openai`
- Verifique se a variável ambiente GITHUB_TOKEN está configurada
- Confira permissões de acesso aos modelos GitHub

**Docsify não serve a documentação**:
- Instale o docsify-cli globalmente: `npm install -g docsify-cli`
- Execute a partir da raiz do repositório
- Verifique se `docs/_sidebar.md` existe

### Dicas para Ambiente de Desenvolvimento

- Use VS Code com extensão Live Server para projetos HTML
- Instale extensões ESLint e Prettier para formatação consistente
- Utilize DevTools do navegador para depurar JavaScript
- Para projetos Vue, instale a extensão Vue DevTools no navegador

### Considerações de Performance

- Grande número de arquivos traduzidos (mais de 50 idiomas) torna clones completos grandes
- Use clone raso se trabalhar apenas no conteúdo: `git clone --depth 1`
- Exclua traduções de buscas quando trabalhar com conteúdo em inglês
- Processos de build podem ser lentos na primeira execução (npm install, build Vite)

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves de API nunca devem ser commitadas no repositório
- Use arquivos `.env` (já em `.gitignore`)
- Documente as variáveis de ambiente necessárias nos READMEs dos projetos

### Projetos Python

- Use ambientes virtuais: `python -m venv venv`
- Mantenha dependências atualizadas
- Tokens do GitHub devem ter permissões mínimas necessárias

### Acesso aos Modelos do GitHub

- Tokens de Acesso Pessoal (PAT) necessários para Modelos GitHub
- Tokens devem ser armazenados como variáveis de ambiente
- Nunca commit tokens ou credenciais

## Notas Adicionais

### Público Alvo

- Iniciantes completos em desenvolvimento web
- Estudantes e autodidatas
- Professores utilizando o currículo em salas de aula
- Conteúdo projetado para acessibilidade e construção gradual de habilidades

### Filosofia Educacional

- Abordagem baseada em projetos
- Verificações frequentes de conhecimento (quizzes)
- Exercícios práticos de codificação
- Exemplos de aplicação no mundo real
- Foco nos fundamentos antes dos frameworks

### Manutenção do Repositório

- Comunidade ativa de aprendizes e contribuidores
- Atualizações regulares de dependências e conteúdo
- Issues e discussões monitoradas por mantenedores
- Atualizações de tradução automatizadas via GitHub Actions

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos do Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para aprendizes
- Cursos adicionais: AI Generativa, Data Science, ML, currículos IoT disponíveis

### Trabalhando com Projetos Específicos

Para instruções detalhadas sobre projetos individuais, consulte os arquivos README em:
- `quiz-app/README.md` - aplicação de quiz Vue 3
- `7-bank-project/README.md` - aplicativo bancário com autenticação
- `5-browser-extension/README.md` - desenvolvimento de extensão de navegador
- `6-space-game/README.md` - desenvolvimento de jogo baseado em canvas
- `9-chat-project/README.md` - projeto assistente de chat AI

### Estrutura Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:
- Cada aula é autônoma
- Projetos não compartilham dependências
- Trabalhe em projetos individuais sem afetar os outros
- Clone o repositório inteiro para a experiência completa do currículo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em sua língua nativa deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->