# AGENTS.md

## Visão Geral do Projeto

Este é um repositório de currículo educativo para ensinar os fundamentos do desenvolvimento web a iniciantes. O currículo é um curso abrangente de 12 semanas desenvolvido pelos Microsoft Cloud Advocates, com 24 aulas práticas que cobrem JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educativo**: 24 aulas estruturadas organizadas em módulos baseados em projetos  
- **Projetos Práticos**: Terrário, Jogo de Digitação, Extensão de Navegador, Jogo Espacial, Aplicação Bancária, Editor de Código e Assistente de Chat AI  
- **Quizzes Interativos**: 48 quizzes com 3 perguntas cada (avaliações pré/pós-licção)  
- **Suporte Multilíngue**: Traduções automáticas para mais de 50 idiomas via GitHub Actions  
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos AI)  

### Arquitetura

- Repositório educativo com estrutura baseada em lições  
- Cada pasta de lição contém README, exemplos de código e soluções  
- Projetos independentes em diretórios separados (quiz-app, vários projetos de lições)  
- Sistema de tradução usando GitHub Actions (co-op-translator)  
- Documentação servida via Docsify e disponível em PDF  

## Comandos de Configuração

Este repositório destina-se principalmente ao consumo de conteúdo educativo. Para trabalhar com projetos específicos:

### Configuração do Repositório Principal

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

## Fluxo de Desenvolvimento

### Para Contribuidores de Conteúdo

1. **Faça fork do repositório** para a sua conta do GitHub  
2. **Clone o seu fork** localmente  
3. **Crie uma nova branch** para as suas alterações  
4. Faça as alterações ao conteúdo das lições ou exemplos de código  
5. Teste quaisquer alterações de código nos diretórios de projeto relevantes  
6. Submeta pull requests seguindo as diretrizes de contribuição  

### Para Estudantes

1. Faça fork ou clone do repositório  
2. Navegue pelas pastas das lições sequencialmente  
3. Leia os arquivos README de cada lição  
4. Complete os quizzes pré-lição em https://ff-quizzes.netlify.app/web/  
5. Trabalhe nos exemplos de código nas pastas das lições  
6. Complete tarefas e desafios  
7. Faça os quizzes pós-lição  

### Desenvolvimento em Tempo Real

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)  
- **Quiz App**: Execute `npm run dev` no diretório quiz-app  
- **Projetos**: Use a extensão Live Server do VS Code para projetos HTML  
- **Projetos API**: Execute `npm start` nos respetivos diretórios API  

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
npm run lint       # Verificar problemas de estilo de código
node server.js     # Verificar se o servidor inicia sem erros
```

### Abordagem Geral de Testes

- Este é um repositório educativo sem testes automatizados abrangentes  
- Testes manuais focam em:  
  - Exemplos de código executam sem erros  
  - Links na documentação funcionam corretamente  
  - Builds dos projetos completam com sucesso  
  - Exemplos seguem as melhores práticas  

### Verificações Antes da Submissão

- Execute `npm run lint` em diretórios com package.json  
- Verifique se os links markdown são válidos  
- Teste os exemplos de código no navegador ou Node.js  
- Verifique se as traduções mantêm a estrutura adequada  

## Diretrizes de Estilo de Código

### JavaScript

- Use sintaxe moderna ES6+  
- Siga as configurações padrão ESLint fornecidas nos projetos  
- Use nomes de variáveis e funções significativos para clareza educativa  
- Adicione comentários explicando conceitos para os estudantes  
- Formate usando Prettier onde configurado  

### HTML/CSS

- Elementos semânticos HTML5  
- Princípios de design responsivo  
- Convenções claras de nomes de classes  
- Comentários explicando técnicas CSS para aprendizes  

### Python

- Diretrizes de estilo PEP 8  
- Código claro e educativo  
- Tipo de anotações onde útil para aprendizagem  

### Documentação Markdown

- Hierarquia clara de cabeçalhos  
- Blocos de código com especificação de linguagem  
- Links para recursos adicionais  
- Capturas de ecrã e imagens nas pastas `images/`  
- Texto alternativo para imagens para acessibilidade  

### Organização de Ficheiros

- Lições numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)  
- Cada projeto tem diretórios `solution/` e frequentemente `start/` ou `your-work/`  
- Imagens armazenadas em pastas `images/` específicas da lição  
- Traduções nas pastas `translations/{código-do-idioma}/`  

## Construção e Deploy

### Deploy do Quiz App (Azure Static Web Apps)

O quiz-app está configurado para deploy no Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Desdobra via fluxo de trabalho do GitHub Actions ao fazer push para o main
```

Configuração Azure Static Web Apps:  
- **Localização da app**: `/quiz-app`  
- **Localização da saída**: `dist`  
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Geração do PDF da Documentação

```bash
npm install                    # Instalar docsify-to-pdf
npm run convert               # Gerar PDF a partir do docs
```

### Documentação Docsify

```bash
npm install -g docsify-cli    # Instalar o Docsify globalmente
docsify serve                 # Servir no localhost:3000
```

### Builds Específicos de Projeto

Cada diretório de projeto pode ter seu próprio processo de build:  
- Projetos Vue: `npm run build` cria bundles para produção  
- Projetos estáticos: Sem passo de build, servem ficheiros diretamente  

## Diretrizes para Pull Requests

### Formato do Título

Use títulos claros e descritivos indicando a área de alteração:  
- `[Quiz-app] Add new quiz for lesson X`  
- `[Lesson-3] Fix typo in terrarium project`  
- `[Translation] Add Spanish translation for lesson 5`  
- `[Docs] Update setup instructions`  

### Verificações Obrigatórias

Antes de submeter um PR:

1. **Qualidade do Código**:  
   - Execute `npm run lint` nos diretórios afetados  
   - Corrija todos os erros e avisos de linting  

2. **Verificação da Build**:  
   - Execute `npm run build` se aplicável  
   - Garanta que não ocorra erro na build  

3. **Validação de Links**:  
   - Teste todos os links markdown  
   - Verifique referências a imagens  

4. **Revisão de Conteúdo**:  
   - Faça revisão ortográfica e gramatical  
   - Garanta que os exemplos de código estão corretos e educativos  
   - Verifique se as traduções mantêm o significado original  

### Requisitos de Contribuição

- Concordar com a Microsoft CLA (verificação automática no primeiro PR)  
- Seguir o [Código de Conduta do Microsoft Open Source](https://opensource.microsoft.com/codeofconduct/)  
- Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas  
- Referenciar números de issues na descrição do PR se aplicável  

### Processo de Revisão

- PRs são revistos por mantenedores e comunidade  
- Prioriza-se a clareza educativa  
- Exemplos de código devem seguir as melhores práticas atuais  
- Traduções são avaliadas para precisão e adequação cultural  

## Sistema de Tradução

### Tradução Automática

- Usa GitHub Actions com workflow co-op-translator  
- Traduz para mais de 50 idiomas automaticamente  
- Ficheiros fonte nas pastas principais  
- Ficheiros traduzidos em `translations/{código-do-idioma}/`  

### Melhorias Manuais nas Traduções

1. Localize o ficheiro em `translations/{código-do-idioma}/`  
2. Faça melhorias preservando a estrutura  
3. Assegure que os exemplos de código continuam funcionais  
4. Teste qualquer conteúdo de quizzes localizado  

### Metadados das Traduções

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

**O quiz app não inicia**:  
- Verifique versão do Node.js (v14+ recomendado)  
- Elimine `node_modules` e `package-lock.json`, execute `npm install` novamente  
- Verifique conflitos de porta (por padrão: Vite usa porta 5173)  

**Servidor API não inicia**:  
- Confirme que a versão do Node.js satisfaz o mínimo (node >=10)  
- Verifique se a porta está em uso  
- Garanta que todas dependências estão instaladas com `npm install`  

**Extensão de navegador não carrega**:  
- Verifique se o manifest.json está corretamente formatado  
- Verifique erros no console do navegador  
- Siga as instruções específicas para instalação da extensão no navegador  

**Problemas com projeto de chat Python**:  
- Garanta que o pacote OpenAI está instalado: `pip install openai`  
- Verifique se a variável de ambiente GITHUB_TOKEN está definida  
- Verifique permissões de acesso aos GitHub Models  

**Docsify não serve documentação**:  
- Instale docsify-cli globalmente: `npm install -g docsify-cli`  
- Execute a partir da raiz do repositório  
- Verifique se `docs/_sidebar.md` existe  

### Dicas para Ambiente de Desenvolvimento

- Use VS Code com extensão Live Server para projetos HTML  
- Instale extensões ESLint e Prettier para formatação consistente  
- Use DevTools do navegador para depurar JavaScript  
- Para projetos Vue, instale extensão Vue DevTools no navegador  

### Considerações de Performance

- Grande número de ficheiros traduzidos (50+ idiomas) torna clones completos grandes  
- Use clone superficial se trabalhar apenas com conteúdo: `git clone --depth 1`  
- Exclua traduções de pesquisas quando trabalhar com conteúdo em inglês  
- Processos de build podem ser lentos na primeira execução (npm install, build Vite)  

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves de API nunca devem ser commitadas no repositório  
- Use ficheiros `.env` (já incluídos no `.gitignore`)  
- Documente variáveis de ambiente necessárias nos READMEs dos projetos  

### Projetos Python

- Use ambientes virtuais: `python -m venv venv`  
- Mantenha dependências atualizadas  
- Tokens GitHub devem ter permissões mínimas necessárias  

### Acesso aos GitHub Models

- Tokens de Acesso Pessoal (PAT) são necessários para GitHub Models  
- Tokens devem ser armazenados como variáveis de ambiente  
- Nunca commit tokens ou credenciais  

## Notas Adicionais

### Público-Alvo

- Iniciantes completos no desenvolvimento web  
- Estudantes e autodidatas  
- Professores que usam o currículo em salas de aula  
- Conteúdo desenhado para acessibilidade e desenvolvimento gradual de competências  

### Filosofia Educativa

- Abordagem de aprendizagem baseada em projetos  
- Verificações frequentes de conhecimento (quizzes)  
- Exercícios práticos de programação  
- Exemplos de aplicação real  
- Foco nos fundamentos antes dos frameworks  

### Manutenção do Repositório

- Comunidade ativa de aprendizes e contribuidores  
- Atualizações regulares de dependências e conteúdo  
- Issues e discussões monitorizadas pelos mantenedores  
- Atualizações de tradução automatizadas via GitHub Actions  

### Recursos Relacionados

- [Microsoft Learn módulos](https://docs.microsoft.com/learn/)  
- [Recursos do Student Hub](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para aprendizes  
- Cursos adicionais: AI Generativa, Data Science, ML, currículos IoT disponíveis  

### Trabalhar com Projetos Específicos

Para instruções detalhadas sobre projetos individuais, consulte os arquivos README em:  
- `quiz-app/README.md` - aplicação de quiz Vue 3  
- `7-bank-project/README.md` - aplicação bancária com autenticação  
- `5-browser-extension/README.md` - desenvolvimento de extensão de navegador  
- `6-space-game/README.md` - desenvolvimento de jogo com canvas  
- `9-chat-project/README.md` - projeto de assistente de chat AI  

### Estrutura Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:  
- Cada lição é auto-contida  
- Projetos não partilham dependências  
- Trabalhe nos projetos individuais sem afetar os outros  
- Clone o repositório completo para a experiência total do currículo  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos por garantir a precisão, por favor note que traduções automatizadas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por um ser humano. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->