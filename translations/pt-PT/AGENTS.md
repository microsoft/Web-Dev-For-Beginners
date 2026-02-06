# AGENTS.md

## Visão Geral do Projeto

Este é um repositório de currículo educativo para o ensino dos fundamentos do desenvolvimento web a principiantes. O currículo é um curso abrangente de 12 semanas desenvolvido pelos Microsoft Cloud Advocates, com 24 aulas práticas cobrindo JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educativo**: 24 lições estruturadas organizadas em módulos baseados em projetos  
- **Projetos Práticos**: Terrarium, Jogo de Digitação, Extensão de Navegador, Jogo Espacial, Aplicação Bancária, Editor de Código e Assistente de Chat AI  
- **Questionários Interativos**: 48 questionários com 3 perguntas cada (avaliações pré/pós-aula)  
- **Suporte Multilíngue**: Traduções automáticas para 50+ idiomas via GitHub Actions  
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos AI)  

### Arquitetura

- Repositório educativo com estrutura baseada em aulas  
- Cada pasta de aula contém README, exemplos de código e soluções  
- Projetos independentes em diretórios separados (quiz-app, vários projetos de aulas)  
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
# Abra o index.html no navegador ou use o Live Server
```
  
### Projeto de Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Definir a variável de ambiente GITHUB_TOKEN
python api.py
```
  
## Fluxo de Trabalho em Desenvolvimento

### Para Contribuintes de Conteúdo

1. **Faça fork do repositório** para a sua conta GitHub  
2. **Clone o seu fork** localmente  
3. **Crie uma nova branch** para as suas alterações  
4. Faça alterações no conteúdo da aula ou exemplos de código  
5. Teste quaisquer alterações de código nos diretórios dos projetos relevantes  
6. Submeta pull requests seguindo as diretrizes de contribuição  

### Para Estudantes

1. Faça fork ou clone do repositório  
2. Navegue pelos diretórios das aulas sequencialmente  
3. Leia os ficheiros README de cada aula  
4. Complete os questionários pré-aula em https://ff-quizzes.netlify.app/web/  
5. Execute os exemplos de código nas pastas das aulas  
6. Complete tarefas e desafios  
7. Realize os questionários pós-aula  

### Desenvolvimento ao Vivo

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)  
- **Quiz App**: Execute `npm run dev` no diretório quiz-app  
- **Projetos**: Use a extensão Live Server do VS Code para projetos HTML  
- **Projetos API**: Execute `npm start` nos respetivos diretórios das APIs  

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
  
### Abordagem Geral de Teste

- Este é um repositório educativo sem testes automáticos completos  
- Testes manuais focam em:  
  - Exemplos de código executarem sem erros  
  - Links na documentação funcionarem corretamente  
  - Builds dos projetos concluírem com sucesso  
  - Exemplos seguirem boas práticas  

### Verificações Antes da Submissão

- Execute `npm run lint` em diretórios com package.json  
- Verifique se os links markdown são válidos  
- Teste exemplos de código no navegador ou Node.js  
- Confirme que as traduções mantêm a estrutura correta  

## Guia de Estilo de Código

### JavaScript

- Use sintaxe moderna ES6+  
- Siga configurações padrão ESLint fornecidas nos projetos  
- Use nomes de variáveis e funções significativos para clareza educativa  
- Adicione comentários explicando conceitos para os estudantes  
- Utilize Prettier para formatação onde configurado  

### HTML/CSS

- Elementos semânticos HTML5  
- Princípios de design responsivo  
- Convenções claras de nomenclatura de classes  
- Comentários explicativos para técnicas CSS voltados para aprendizes  

### Python

- Diretrizes de estilo PEP 8  
- Exemplos claros e educativos  
- Anotações de tipo para ajudar na aprendizagem  

### Documentação Markdown

- Hierarquia clara de títulos  
- Blocos de código com especificação da linguagem  
- Links para recursos adicionais  
- Capturas de ecrã e imagens nas pastas `images/`  
- Texto alternativo para imagens visando acessibilidade  

### Organização dos Ficheiros

- Lições numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)  
- Cada projeto tem pastas `solution/` e frequentemente `start/` ou `your-work/`  
- Imagens armazenadas em pastas `images/` específicas das aulas  
- Traduções em estrutura `translations/{language-code}/`  

## Construção e Implementação

### Implementação do Quiz App (Azure Static Web Apps)

O quiz-app está configurado para implementação em Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Faz deploy através do fluxo de trabalho GitHub Actions ao enviar para main
```
  
Configuração Azure Static Web Apps:  
- **Localização da App**: `/quiz-app`  
- **Localização da saída**: `dist`  
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Geração de PDF para Documentação

```bash
npm install                    # Instalar docsify-to-pdf
npm run convert               # Gerar PDF a partir de docs
```
  
### Documentação Docsify

```bash
npm install -g docsify-cli    # Instalar o Docsify globalmente
docsify serve                 # Servir em localhost:3000
```
  
### Builds Específicos de Cada Projeto

Cada diretório de projeto pode ter o seu próprio processo de build:  
- Projetos Vue: `npm run build` cria bundles para produção  
- Projetos estáticos: Sem etapa de build, servir ficheiros diretamente  

## Diretrizes para Pull Requests

### Formato do Título

Use títulos claros e descritivos indicando a área da alteração:  
- `[Quiz-app] Adicionar novo quiz para a lição X`  
- `[Lesson-3] Corrigir erro tipográfico no projeto terrarium`  
- `[Translation] Adicionar tradução em espanhol para a lição 5`  
- `[Docs] Atualizar instruções de configuração`  

### Verificações Obrigatórias

Antes de submeter um PR:

1. **Qualidade do Código**:  
   - Execute `npm run lint` nos diretórios dos projetos afetados  
   - Corrija todos os erros e avisos de lint  

2. **Verificação de Build**:  
   - Execute `npm run build` se aplicável  
   - Garanta que não há erros no build  

3. **Validação de Links**:  
   - Teste todos os links markdown  
   - Verifique referências a imagens  

4. **Revisão de Conteúdo**:  
   - Revise ortografia e gramática  
   - Assegure que exemplos de código estão corretos e educativos  
   - Verifique traduções para manter sentido original  

### Requisitos para Contribuição

- Aceitar o CLA da Microsoft (verificação automática no primeiro PR)  
- Seguir o [Código de Conduta Open Source da Microsoft](https://opensource.microsoft.com/codeofconduct/)  
- Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas  
- Referenciar números de issues na descrição do PR quando aplicável  

### Processo de Revisão

- PRs revistos por mantenedores e comunidade  
- Clareza educativa é prioritária  
- Exemplos de código devem seguir as melhores práticas atuais  
- Traduções são revistas para precisão e adequação cultural  

## Sistema de Tradução

### Tradução Automática

- Utiliza GitHub Actions com workflow co-op-translator  
- Traduz para 50+ idiomas automaticamente  
- Ficheiros fonte nas pastas principais  
- Ficheiros traduzidos em diretórios `translations/{language-code}/`  

### Adicionar Melhorias Manuais nas Traduções

1. Localize o ficheiro em `translations/{language-code}/`  
2. Faça melhorias preservando a estrutura  
3. Assegure que exemplos de código permanecem funcionais  
4. Teste qualquer conteúdo de quiz localizado  

### Metadados da Tradução

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

**Quiz app não começa**:  
- Verifique a versão do Node.js (v14+ recomendado)  
- Apague `node_modules` e `package-lock.json`, execute `npm install` novamente  
- Verifique conflitos de porta (padrão: Vite usa porta 5173)  

**Servidor API não inicia**:  
- Confirme versão mínima do Node.js (node >=10)  
- Verifique se a porta já está em uso  
- Assegure que todas as dependências estão instaladas com `npm install`  

**Extensão do navegador não carrega**:  
- Verifique se o manifest.json está corretamente formatado  
- Confira console do navegador para erros  
- Siga instruções específicas do navegador para instalação da extensão  

**Problemas no projeto de chat Python**:  
- Assegure que o pacote OpenAI está instalado: `pip install openai`  
- Verifique se a variável ambiente GITHUB_TOKEN está definida  
- Cheque permissões de acesso a GitHub Models  

**Docsify não serve a documentação**:  
- Instale docsify-cli globalmente: `npm install -g docsify-cli`  
- Execute a partir da raiz do repositório  
- Confirme que o ficheiro `docs/_sidebar.md` existe  

### Dicas para Ambiente de Desenvolvimento

- Use VS Code com extensão Live Server para projetos HTML  
- Instale extensões ESLint e Prettier para formatação consistente  
- Use DevTools do navegador para depurar JavaScript  
- Para projetos Vue, instale a extensão Vue DevTools no navegador  

### Considerações de Performance

- Grande número de ficheiros traduzidos (50+ idiomas) torna clones completos grandes  
- Use clone raso se só trabalhar com conteúdo: `git clone --depth 1`  
- Exclua traduções das pesquisas quando trabalhar com conteúdo em inglês  
- Processos de build podem ser lentos na primeira execução (npm install, build Vite)  

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves API nunca devem ser commitadas no repositório  
- Use ficheiros `.env` (já incluídos em `.gitignore`)  
- Documente as variáveis de ambiente necessárias nos READMEs dos projetos  

### Projetos Python

- Utilize ambientes virtuais: `python -m venv venv`  
- Mantenha dependências atualizadas  
- Tokens do GitHub devem ter permissões mínimas necessárias  

### Acesso ao GitHub Models

- Tokens de Acesso Pessoal (PAT) são necessários para GitHub Models  
- Tokens devem ser guardados como variáveis ambiente  
- Nunca commit tokens ou credenciais  

## Notas Adicionais

### Público-Alvo

- Principiantes completos no desenvolvimento web  
- Estudantes e autodidatas  
- Professores usando o currículo em salas de aula  
- Conteúdo desenhado para acessibilidade e construção gradual de competências  

### Filosofia Educativa

- Abordagem de aprendizagem baseada em projetos  
- Verificações frequentes de conhecimento (questionários)  
- Exercícios práticos de programação  
- Exemplos de aplicações do mundo real  
- Foco nos fundamentos antes dos frameworks  

### Manutenção do Repositório

- Comunidade ativa de aprendizes e contribuidores  
- Atualizações regulares de dependências e conteúdo  
- Issues e discussões monitorizadas pelos mantenedores  
- Atualizações de tradução automatizadas via GitHub Actions  

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)  
- [Recursos Student Hub](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para aprendizes  
- Cursos adicionais: IA generativa, Ciência de Dados, ML, currículos IoT disponíveis  

### Trabalhar com Projetos Específicos

Para instruções detalhadas sobre projetos individuais, consulte os ficheiros README em:  
- `quiz-app/README.md` - Aplicação de quiz Vue 3  
- `7-bank-project/README.md` - Aplicação bancária com autenticação  
- `5-browser-extension/README.md` - Desenvolvimento de extensão para navegador  
- `6-space-game/README.md` - Desenvolvimento de jogo baseado em Canvas  
- `9-chat-project/README.md` - Projeto de assistente chat AI  

### Estrutura Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:  
- Cada aula é autónoma  
- Projetos não partilham dependências  
- Trabalhe em projetos individuais sem afetar outros  
- Clone o repositório completo para a experiência do currículo completo  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, por favor tenha em atenção que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se a tradução profissional realizada por um humano. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->