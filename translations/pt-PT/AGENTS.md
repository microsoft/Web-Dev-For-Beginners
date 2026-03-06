# AGENTES.md

## Visão Geral do Projeto

Este é um repositório curricular educativo para o ensino dos fundamentos do desenvolvimento web a principiantes. O currículo é um curso abrangente de 12 semanas desenvolvido pelos Microsoft Cloud Advocates, contendo 24 aulas práticas que abrangem JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educativo**: 24 lições estruturadas organizadas em módulos baseados em projetos
- **Projetos Práticos**: Terrário, Jogo de Digitação, Extensão de Browser, Jogo Espacial, Aplicação Bancária, Editor de Código e Assistente de Chat IA
- **Questionários Interativos**: 48 questionários com 3 perguntas cada (avaliações pré/pós-aula)
- **Suporte Multilíngue**: Traduções automáticas para 50+ idiomas via GitHub Actions
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos de IA)

### Arquitetura

- Repositório educativo com estrutura baseada em aulas
- Cada pasta de aula contém README, exemplos de código e soluções
- Projetos independentes em diretórios separados (quiz-app, vários projetos das aulas)
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

### Projetos de Extensão de Browser

```bash
cd 5-browser-extension/solution
npm install
# Siga as instruções específicas do navegador para carregar a extensão
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

## Fluxo de Desenvolvimento

### Para Contribuidores de Conteúdo

1. **Faça fork do repositório** para a sua conta GitHub
2. **Clone seu fork** localmente
3. **Crie uma nova branch** para suas alterações
4. Faça alterações no conteúdo das aulas ou exemplos de código
5. Teste quaisquer alterações de código nas pastas dos projetos relevantes
6. Submeta pull requests seguindo as diretrizes de contribuição

### Para Aprendizes

1. Faça fork ou clone o repositório
2. Navegue sequencialmente pelas pastas das aulas
3. Leia os ficheiros README de cada aula
4. Complete os questionários pré-aula em https://ff-quizzes.netlify.app/web/
5. Trabalhe nos exemplos de código nas pastas das aulas
6. Complete os trabalhos e desafios
7. Realize os questionários pós-aula

### Desenvolvimento em Tempo Real

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)
- **Quiz App**: Execute `npm run dev` na pasta quiz-app
- **Projetos**: Utilize a extensão VS Code Live Server para projetos HTML
- **Projetos API**: Execute `npm start` nas respetivas pastas API

## Instruções para Testes

### Testes do Quiz App

```bash
cd quiz-app
npm run lint       # Verificar problemas de estilo de código
npm run build      # Verificar se a compilação é bem-sucedida
```

### Testes da API Bancária

```bash
cd 7-bank-project/api
npm run lint       # Verificar problemas de estilo de código
node server.js     # Verificar se o servidor inicia sem erros
```

### Abordagem Geral de Testes

- Este é um repositório educativo sem testes automatizados completos
- Testes manuais focam em:
  - Exemplos de código executados sem erros
  - Links na documentação funcionam corretamente
  - Builds dos projetos completam sem falhas
  - Exemplos seguem as melhores práticas

### Verificações Antes da Submissão

- Execute `npm run lint` nas pastas com package.json
- Verifique se os links markdown são válidos
- Teste exemplos de código no navegador ou Node.js
- Confira se as traduções mantêm a estrutura correta

## Diretrizes de Estilo de Código

### JavaScript

- Utilize sintaxe moderna ES6+
- Siga as configurações padrão de ESLint fornecidas nos projetos
- Use nomes de variáveis e funções significativos para clareza educativa
- Adicione comentários explicativos para os aprendizes
- Formate com Prettier onde configurado

### HTML/CSS

- Utilize elementos semânticos HTML5
- Princípios de design responsivo
- Convenções claras de nomenclatura de classes
- Comentários explicando técnicas CSS para aprendizes

### Python

- Diretrizes de estilo PEP 8
- Código claro e educativo
- Anotações de tipo quando úteis para aprendizado

### Documentação Markdown

- Hierarquia clara de cabeçalhos
- Blocos de código com especificação de linguagem
- Links para recursos adicionais
- Capturas de ecrã e imagens nas pastas `images/`
- Texto alternativo para imagens para acessibilidade

### Organização de Ficheiros

- Lições numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada projeto tem diretórios `solution/` e frequentemente `start/` ou `your-work/`
- Imagens guardadas em pastas `images/` específicas das lições
- Traduções na estrutura `translations/{language-code}/`

## Construção e Implementação

### Implementação do Quiz App (Azure Static Web Apps)

O quiz-app está configurado para implementação no Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Faz deploy via workflow do GitHub Actions ao fazer push para o main
```

Configuração do Azure Static Web Apps:
- **Local da app**: `/quiz-app`
- **Local de saída**: `dist`
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
- Projetos Vue: `npm run build` cria bundles para produção
- Projetos estáticos: Sem etapa de build, servem ficheiros diretamente

## Diretrizes para Pull Requests

### Formato do Título

Use títulos claros e descritivos indicando a área da alteração:
- `[Quiz-app] Adicionar novo quiz para a lição X`
- `[Lesson-3] Corrigir erro tipográfico no projeto terrarium`
- `[Translation] Adicionar tradução em Espanhol para a lição 5`
- `[Docs] Atualizar instruções de configuração`

### Verificações Necessárias

Antes de submeter um PR:

1. **Qualidade do Código**:
   - Execute `npm run lint` nas pastas dos projetos afetados
   - Corrija todos os erros e avisos reportados

2. **Verificação do Build**:
   - Execute `npm run build` se aplicável
   - Certifique-se que não haja erros de build

3. **Validação de Links**:
   - Teste todos os links markdown
   - Verifique se referências de imagens funcionam

4. **Revisão de Conteúdo**:
   - Revise ortografia e gramática
   - Garanta que os exemplos de código estão corretos e educativos
   - Verifique se traduções mantêm o significado original

### Requisitos para Contribuição

- Aceitar o CLA da Microsoft (verificação automática no primeiro PR)
- Seguir o [Código de Conduta Open Source da Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consulte o [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas
- Referencie números de issues na descrição do PR se aplicável

### Processo de Revisão

- PRs são revistos por mantenedores e comunidade
- Clareza educativa é priorizada
- Exemplos de código devem seguir as melhores práticas atuais
- Traduções são revistas para precisão e adequação cultural

## Sistema de Tradução

### Tradução Automática

- Utiliza GitHub Actions com workflow co-op-translator
- Traduz automaticamente para 50+ idiomas
- Ficheiros fonte nas pastas principais
- Ficheiros traduzidos nas pastas `translations/{language-code}/`

### Adição de Melhorias Manuais na Tradução

1. Localize o ficheiro em `translations/{language-code}/`
2. Faça melhorias preservando a estrutura
3. Assegure que exemplos de código continuam funcionais
4. Teste qualquer conteúdo de quiz localizado

### Metadados de Tradução

Os ficheiros traduzidos incluem cabeçalho de metadados:
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
- Confirme se o Node.js está na versão mínima (node >=10)
- Veja se a porta já está em uso
- Assegure que todas as dependências estão instaladas com `npm install`

**Extensão de browser não carrega**:
- Verifique se o manifest.json está formatado corretamente
- Confira erros na consola do browser
- Siga as instruções específicas do browser para instalação da extensão

**Problemas no projeto de chat Python**:
- Verifique se o pacote OpenAI está instalado: `pip install openai`
- Confirme se a variável de ambiente GITHUB_TOKEN está definida
- Verifique permissões de acesso aos GitHub Models

**Docsify não serve a documentação**:
- Instale docsify-cli globalmente: `npm install -g docsify-cli`
- Execute a partir da raiz do repositório
- Verifique se `docs/_sidebar.md` existe

### Dicas para Ambiente de Desenvolvimento

- Use VS Code com a extensão Live Server para projetos HTML
- Instale extensões ESLint e Prettier para formatação consistente
- Use as DevTools do browser para depurar JavaScript
- Para projetos Vue, instale a extensão Vue DevTools para browser

### Considerações de Performance

- Grande número de ficheiros traduzidos (50+ idiomas) faz os clones completos serem grandes
- Use clone superficial se estiver a trabalhar apenas no conteúdo: `git clone --depth 1`
- Exclua traduções das pesquisas quando trabalhar no conteúdo em inglês
- Processos de build podem ser lentos na primeira execução (npm install, build Vite)

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves API nunca devem ser cometidas no repositório
- Use ficheiros `.env` (já listados em `.gitignore`)
- Documente variáveis de ambiente necessárias nos READMEs dos projetos

### Projetos Python

- Use ambientes virtuais: `python -m venv venv`
- Mantenha dependências atualizadas
- Tokens GitHub devem ter permissões mínimas necessárias

### Acesso aos GitHub Models

- Tokens de Acesso Pessoal (PAT) são necessários para GitHub Models
- Tokens devem ser guardados como variáveis de ambiente
- Nunca cometa tokens ou credenciais no repositório

## Notas Adicionais

### Público-Alvo

- Principiantes completos em desenvolvimento web
- Estudantes e autodidatas
- Professores a usar o currículo em sala de aula
- Conteúdo desenhado para acessibilidade e construção gradual de competências

### Filosofia Educativa

- Aproximação baseada em projetos
- Verificações frequentes de conhecimento (quizzes)
- Exercícios práticos de programação
- Exemplos de aplicação no mundo real
- Foco nos fundamentos antes dos frameworks

### Manutenção do Repositório

- Comunidade ativa de aprendizes e contribuidores
- Atualizações regulares de dependências e conteúdo
- Issues e discussões monitorizadas pelos mantenedores
- Atualizações de tradução automatizadas via GitHub Actions

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos no Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para aprendizes
- Cursos adicionais: IA Generativa, Ciência de Dados, ML, currículos IoT disponíveis

### Trabalhar com Projetos Específicos

Para instruções detalhadas de projetos individuais, consulte os ficheiros README em:
- `quiz-app/README.md` - Aplicação quiz em Vue 3
- `7-bank-project/README.md` - Aplicação bancária com autenticação
- `5-browser-extension/README.md` - Desenvolvimento de extensão de browser
- `6-space-game/README.md` - Desenvolvimento de jogo baseado em canvas
- `9-chat-project/README.md` - Projeto de assistente de chat IA

### Estrutura de Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:
- Cada aula é autónoma
- Projetos não partilham dependências
- Trabalhe em projetos individuais sem afetar os outros
- Clone o repositório completo para ter a experiência do currículo completo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional por um humano. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->