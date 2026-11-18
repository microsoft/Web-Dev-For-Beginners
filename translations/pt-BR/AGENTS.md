# AGENTS.md

## Visão Geral do Projeto

Este é um repositório curricular educativo para ensinar fundamentos de desenvolvimento web para iniciantes. O currículo é um curso completo de 12 semanas desenvolvido pelos Microsoft Cloud Advocates, com 24 aulas práticas que cobrem JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educacional**: 24 aulas estruturadas organizadas em módulos baseados em projetos  
- **Projetos Práticos**: Terrarium, Jogo de Digitação, Extensão de Navegador, Jogo Espacial, App Bancário, Editor de Código e Assistente de Chat AI  
- **Quizzes Interativos**: 48 quizzes com 3 perguntas cada (avaliações pré/pós-aula)  
- **Suporte Multilíngue**: Traduções automáticas para mais de 50 idiomas via GitHub Actions  
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos AI)  

### Arquitetura

- Repositório educacional com estrutura baseada em aulas  
- Cada pasta de aula contém README, exemplos de código e soluções  
- Projetos independentes em diretórios separados (quiz-app, vários projetos de aula)  
- Sistema de tradução usando GitHub Actions (co-op-translator)  
- Documentação servida via Docsify e disponível em PDF  

## Comandos para Configuração

Este repositório é primariamente para consumo do conteúdo educacional. Para trabalhar com projetos específicos:

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
# Abra o index.html no navegador ou use o Live Server
```

### Projeto de Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Defina a variável de ambiente GITHUB_TOKEN
python api.py
```

## Fluxo de Desenvolvimento

### Para Colaboradores de Conteúdo

1. **Faça fork do repositório** na sua conta do GitHub  
2. **Clone seu fork** localmente  
3. **Crie um novo branch** para suas alterações  
4. Faça mudanças no conteúdo das aulas ou exemplos de código  
5. Teste quaisquer alterações de código nos diretórios de projetos relacionados  
6. Envie pull requests seguindo as diretrizes de contribuição  

### Para Alunos

1. Faça fork ou clone do repositório  
2. Navegue pelas pastas das aulas sequencialmente  
3. Leia os arquivos README de cada aula  
4. Complete os quizzes pré-aula em https://ff-quizzes.netlify.app/web/  
5. Trabalhe nos exemplos de código nas pastas das aulas  
6. Complete as tarefas e desafios  
7. Faça os quizzes pós-aula  

### Desenvolvimento ao Vivo

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)  
- **Quiz App**: Execute `npm run dev` no diretório quiz-app  
- **Projetos**: Use a extensão Live Server do VS Code para projetos HTML  
- **Projetos API**: Execute `npm start` nos diretórios API respectivos  

## Instruções para Testes

### Testes do Quiz App

```bash
cd quiz-app
npm run lint       # Verifique problemas de estilo de código
npm run build      # Verifique se a compilação foi bem-sucedida
```

### Testes da API Bancária

```bash
cd 7-bank-project/api
npm run lint       # Verificar problemas de estilo de código
node server.js     # Verificar se o servidor inicia sem erros
```

### Abordagem Geral para Testes

- Este é um repositório educacional sem testes automatizados abrangentes  
- Testes manuais focam em:  
  - Exemplos de código executam sem erros  
  - Links na documentação funcionam corretamente  
  - Builds dos projetos completam com sucesso  
  - Exemplos seguem as melhores práticas  

### Verificações Antes de Enviar PR

- Execute `npm run lint` nas pastas que contêm package.json  
- Verifique se os links markdown são válidos  
- Teste exemplos de código no navegador ou Node.js  
- Certifique-se que traduções mantêm a estrutura correta  

## Diretrizes de Estilo de Código

### JavaScript

- Use sintaxe moderna ES6+  
- Siga as configurações padrão ESLint fornecidas nos projetos  
- Use nomes significativos para variáveis e funções para clareza educacional  
- Adicione comentários explicando conceitos para os alunos  
- Formate usando Prettier onde configurado  

### HTML/CSS

- Elementos semânticos HTML5  
- Princípios de design responsivo  
- Convenções claras para nomeação de classes  
- Comentários que explicam técnicas CSS para os aprendizes  

### Python

- Diretrizes de estilo PEP 8  
- Exemplos claros e educativos  
- Tipagem quando útil para aprendizado  

### Documentação Markdown

- Hierarquia clara de títulos  
- Blocos de código com especificação de linguagem  
- Links para recursos adicionais  
- Capturas de tela e imagens nas pastas `images/`  
- Texto alternativo para imagens para acessibilidade  

### Organização dos Arquivos

- Aulas numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)  
- Cada projeto tem diretórios `solution/` e frequentemente `start/` ou `your-work/`  
- Imagens armazenadas em pastas `images/` específicas da aula  
- Traduções na estrutura `translations/{language-code}/`  

## Build e Implantação

### Implantação do Quiz App (Azure Static Web Apps)

O quiz-app está configurado para implantação no Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Faz o deploy via workflow do GitHub Actions ao enviar para o main
```

Configuração do Azure Static Web Apps:  
- **Localização do app**: `/quiz-app`  
- **Localização de saída**: `dist`  
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Geração de PDF da Documentação

```bash
npm install                    # Instalar docsify-to-pdf
npm run convert               # Gerar PDF a partir do docs
```

### Documentação com Docsify

```bash
npm install -g docsify-cli    # Instale o Docsify globalmente
docsify serve                 # Sirva em localhost:3000
```

### Builds Específicos de Projetos

Cada diretório de projeto pode ter seu próprio processo de build:  
- Projetos Vue: `npm run build` cria bundles de produção  
- Projetos estáticos: Nenhuma etapa de build, serve os arquivos diretamente  

## Diretrizes para Pull Requests

### Formato do Título

Use títulos claros e descritivos indicando a área da mudança:  
- `[Quiz-app] Adicionar novo quiz para aula X`  
- `[Lesson-3] Corrigir erro de digitação no projeto terrarium`  
- `[Translation] Adicionar tradução em espanhol para a aula 5`  
- `[Docs] Atualizar instruções de configuração`  

### Verificações Obrigatórias

Antes de enviar um PR:

1. **Qualidade do Código**:  
   - Execute `npm run lint` nos diretórios afetados  
   - Corrija todos os erros e avisos do lint  

2. **Verificação do Build**:  
   - Execute `npm run build`, se aplicável  
   - Garanta que não haja erros no build  

3. **Validação de Links**:  
   - Teste todos os links markdown  
   - Verifique referências de imagens  

4. **Revisão de Conteúdo**:  
   - Revise ortografia e gramática  
   - Garanta que exemplos de código estejam corretos e educativos  
   - Verifique se traduções mantêm o significado original  

### Requisitos de Contribuição

- Concordar com o CLA da Microsoft (verificação automática no primeiro PR)  
- Seguir o [Código de Conduta de Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/)  
- Consulte o [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas  
- Referencie números de issues na descrição do PR, se aplicável  

### Processo de Revisão

- PRs revisados por mantenedores e comunidade  
- Clareza educacional é priorizada  
- Exemplos de código devem seguir melhores práticas atuais  
- Traduções são revisadas quanto à precisão e adequação cultural  

## Sistema de Tradução

### Tradução Automática

- Usa GitHub Actions com workflow co-op-translator  
- Traduz para mais de 50 idiomas automaticamente  
- Arquivos fonte nos diretórios principais  
- Arquivos traduzidos nas pastas `translations/{language-code}/`  

### Adicionando Melhorias Manuais de Tradução

1. Localize o arquivo em `translations/{language-code}/`  
2. Faça melhorias preservando a estrutura  
3. Garanta que exemplos de código continuem funcionais  
4. Teste quaisquer conteúdos localizados de quizzes  

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
- Verifique a versão do Node.js (v14+ recomendado)  
- Apague `node_modules` e `package-lock.json`, rode `npm install` novamente  
- Verifique conflito de porta (padrão: Vite usa porta 5173)  

**Servidor API não inicia**:  
- Verifique se a versão do Node.js atende o mínimo (node >=10)  
- Confira se a porta já está em uso  
- Assegure que todas as dependências estejam instaladas com `npm install`  

**Extensão de navegador não carrega**:  
- Verifique se o manifest.json está corretamente formatado  
- Confira o console do navegador para erros  
- Siga as instruções específicas do navegador para instalação da extensão  

**Problemas no projeto chat Python**:  
- Certifique-se que o pacote OpenAI está instalado: `pip install openai`  
- Verifique se a variável de ambiente GITHUB_TOKEN está definida  
- Verifique permissões de acesso aos Modelos GitHub  

**Docsify não serve a documentação**:  
- Instale o docsify-cli globalmente: `npm install -g docsify-cli`  
- Execute a partir do diretório raiz do repositório  
- Verifique se `docs/_sidebar.md` existe  

### Dicas do Ambiente de Desenvolvimento

- Use VS Code com extensão Live Server para projetos HTML  
- Instale extensões ESLint e Prettier para formatação consistente  
- Use DevTools do navegador para depurar JavaScript  
- Para projetos Vue, instale a extensão Vue DevTools para navegador  

### Considerações de Performance

- Grande número de arquivos traduzidos (50+ idiomas) faz com que clones completos sejam grandes  
- Use clone superficial se trabalhar apenas com conteúdo: `git clone --depth 1`  
- Exclua traduções das buscas quando trabalhar no conteúdo em inglês  
- Processos de build podem ser lentos na primeira execução (npm install, build Vite)  

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves API nunca devem ser commitadas no repositório  
- Use arquivos `.env` (já incluídos no `.gitignore`)  
- Documente variáveis de ambiente requeridas nos READMEs dos projetos  

### Projetos Python

- Use ambientes virtuais: `python -m venv venv`  
- Mantenha dependências atualizadas  
- Tokens GitHub devem ter permissões mínimas necessárias  

### Acesso aos Modelos GitHub

- Tokens de Acesso Pessoal (PAT) são necessários para Modelos GitHub  
- Tokens devem ser armazenados como variáveis de ambiente  
- Nunca commit tokens ou credenciais  

## Notas Adicionais

### Público Alvo

- Iniciantes completos em desenvolvimento web  
- Estudantes e autodidatas  
- Professores usando o currículo em salas de aula  
- Conteúdo projetado para acessibilidade e construção gradual de habilidades  

### Filosofia Educacional

- Abordagem de aprendizado baseada em projetos  
- Verificação frequente de conhecimento (quizzes)  
- Exercícios práticos de codificação  
- Exemplos de aplicação no mundo real  
- Foco nos fundamentos antes dos frameworks  

### Manutenção do Repositório

- Comunidade ativa de alunos e colaboradores  
- Atualizações regulares de dependências e conteúdo  
- Issues e discussões monitoradas por mantenedores  
- Atualizações de tradução automatizadas via GitHub Actions  

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)  
- [Recursos Student Hub](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para aprendizes  
- Cursos adicionais: AI Generativa, Ciência de Dados, ML, currículos IoT disponíveis  

### Trabalhando com Projetos Específicos

Para instruções detalhadas sobre projetos individuais, consulte os arquivos README em:  
- `quiz-app/README.md` - aplicação de quiz Vue 3  
- `7-bank-project/README.md` - aplicativo bancário com autenticação  
- `5-browser-extension/README.md` - desenvolvimento de extensão de navegador  
- `6-space-game/README.md` - desenvolvimento de jogo baseado em Canvas  
- `9-chat-project/README.md` - projeto assistente de chat AI  

### Estrutura Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:  
- Cada aula é autocontida  
- Projetos não compartilham dependências  
- Trabalhe nos projetos individualmente sem impactar os demais  
- Clone o repositório completo para a experiência curricular inteira  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução AI [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->