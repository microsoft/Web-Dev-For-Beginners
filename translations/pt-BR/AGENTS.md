# AGENTS.md

## Visão Geral do Projeto

Este é um repositório curricular educacional para ensinar os fundamentos do desenvolvimento web para iniciantes. O currículo é um curso abrangente de 12 semanas desenvolvido pelos Microsoft Cloud Advocates, com 24 aulas práticas cobrindo JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educacional**: 24 aulas estruturadas organizadas em módulos baseados em projetos  
- **Projetos Práticos**: Terrarium, Typing Game, Extensão de Navegador, Space Game, Aplicativo Bancário, Editor de Código e Assistente de Chat com IA  
- **Quizzes Interativos**: 48 quizzes com 3 perguntas cada (avaliações pré/pós-aula)  
- **Suporte Multilíngue**: Traduções automáticas para 50+ idiomas via GitHub Actions  
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos de IA)  

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
npm run build      # Compilar para produção
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

### Projetos de Space Game

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

### Para Colaboradores de Conteúdo

1. **Faça um fork** do repositório para sua conta no GitHub  
2. **Clone seu fork** localmente  
3. **Crie uma nova branch** para suas alterações  
4. Faça mudanças no conteúdo das aulas ou exemplos de código  
5. Teste qualquer alteração de código nos diretórios dos projetos relevantes  
6. Envie pull requests seguindo as diretrizes de contribuição  

### Para Aprendizes

1. Faça fork ou clone o repositório  
2. Navegue sequencialmente pelas pastas das aulas  
3. Leia os arquivos README de cada aula  
4. Complete os quizzes pré-aula em https://ff-quizzes.netlify.app/web/  
5. Trabalhe nos exemplos de código nas pastas das aulas  
6. Complete tarefas e desafios  
7. Realize os quizzes pós-aula  

### Desenvolvimento Ao Vivo

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)  
- **Quiz App**: Execute `npm run dev` no diretório quiz-app  
- **Projetos**: Use a extensão Live Server do VS Code para projetos HTML  
- **Projetos API**: Execute `npm start` nos diretórios das APIs respectivas  

## Instruções de Teste

### Teste do Quiz App

```bash
cd quiz-app
npm run lint       # Verificar problemas de estilo de código
npm run build      # Verificar se a compilação foi bem-sucedida
```

### Teste da API Bancária

```bash
cd 7-bank-project/api
npm run lint       # Verificar problemas no estilo do código
node server.js     # Verificar se o servidor inicia sem erros
```

### Abordagem Geral de Testes

- Este é um repositório educacional sem testes automatizados abrangentes  
- Testes manuais focam em:  
  - Exemplos de código executando sem erros  
  - Links na documentação funcionando corretamente  
  - Builds dos projetos completando com sucesso  
  - Exemplos seguindo boas práticas  

### Verificações Pré-envio

- Execute `npm run lint` nos diretórios com package.json  
- Verifique se os links markdown são válidos  
- Teste exemplos de código no navegador ou Node.js  
- Confira se as traduções mantêm a estrutura adequada  

## Diretrizes de Estilo de Código

### JavaScript

- Use sintaxe moderna ES6+  
- Siga as configurações padrão do ESLint fornecidas nos projetos  
- Use nomes significativos para variáveis e funções para clareza educacional  
- Adicione comentários explicando conceitos para os aprendizes  
- Formate usando Prettier onde configurado  

### HTML/CSS

- Elementos semânticos HTML5  
- Princípios de design responsivo  
- Convenções claras de nomes de classes  
- Comentários explicando técnicas de CSS para os aprendizes  

### Python

- Diretrizes de estilo PEP 8  
- Exemplos claros e educacionais de código  
- Dicas de tipo onde forem úteis para o aprendizado  

### Documentação Markdown

- Hierarquia clara de títulos  
- Blocos de código com especificação de linguagem  
- Links para recursos adicionais  
- Capturas de tela e imagens nas pastas `images/`  
- Texto alternativo para imagens para acessibilidade  

### Organização de Arquivos

- Aulas numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)  
- Cada projeto tem diretórios `solution/` e frequentemente `start/` ou `your-work/`  
- Imagens armazenadas em pastas `images/` específicas da aula  
- Traduções em estrutura `translations/{language-code}/`  

## Build e Implantação

### Implantação do Quiz App (Azure Static Web Apps)

O quiz-app está configurado para implantação no Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Faz o deploy via workflow do GitHub Actions ao fazer push na branch main
```
  
Configuração do Azure Static Web Apps:  
- **Localização do app**: `/quiz-app`  
- **Localização do output**: `dist`  
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

### Builds Específicos de Projeto

Cada diretório de projeto pode ter seu próprio processo de build:  
- Projetos Vue: `npm run build` cria pacotes de produção  
- Projetos estáticos: Sem etapa de build, servir arquivos diretamente  

## Diretrizes para Pull Requests

### Formato do Título

Use títulos claros e descritivos indicando a área da mudança:  
- `[Quiz-app] Adiciona novo quiz para aula X`  
- `[Lesson-3] Corrige erro de digitação no projeto terrarium`  
- `[Translation] Adiciona tradução para espanhol na aula 5`  
- `[Docs] Atualiza instruções de configuração`  

### Verificações Necessárias

Antes de enviar um PR:

1. **Qualidade do Código**:  
   - Execute `npm run lint` nos diretórios dos projetos afetados  
   - Corrija todos os erros e avisos do lint  

2. **Verificação do Build**:  
   - Execute `npm run build` se aplicável  
   - Garanta que não haja erros no build  

3. **Validação de Links**:  
   - Teste todos os links markdown  
   - Verifique se referências de imagens funcionam  

4. **Revisão de Conteúdo**:  
   - Revise ortografia e gramática  
   - Garanta que exemplos de código estão corretos e educativos  
   - Verifique se as traduções mantêm o significado original  

### Requisitos de Contribuição

- Aceitar o Microsoft CLA (verificação automática no primeiro PR)  
- Seguir o [Código de Conduta de Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/)  
- Consulte [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas  
- Referencie números de issues na descrição do PR se aplicável  

### Processo de Revisão

- PRs são revisados por mantenedores e comunidade  
- Clareza educacional é priorizada  
- Exemplos de código devem seguir as melhores práticas atuais  
- Traduções são revisadas para precisão e adequação cultural  

## Sistema de Tradução

### Tradução Automática

- Utiliza GitHub Actions com workflow co-op-translator  
- Tradução automática para 50+ idiomas  
- Arquivos fonte nos diretórios principais  
- Arquivos traduzidos em diretórios `translations/{language-code}/`  

### Adicionando Melhorias Manuais à Tradução

1. Localize o arquivo em `translations/{language-code}/`  
2. Faça melhorias preservando a estrutura  
3. Assegure que exemplos de código continuem funcionais  
4. Teste qualquer conteúdo de quiz localizado  

### Metadados da Tradução

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
- Exclua `node_modules` e `package-lock.json`, rode `npm install` novamente  
- Verifique conflitos de porta (padrão: Vite usa porta 5173)  

**Servidor API não inicia**:  
- Confirme que a versão do Node.js atende o mínimo (node >=10)  
- Verifique se a porta já está em uso  
- Garanta que todas as dependências estejam instaladas com `npm install`  

**Extensão de navegador não carrega**:  
- Verifique se o manifest.json está formatado corretamente  
- Cheque o console do navegador para erros  
- Siga instruções específicas para instalação da extensão no navegador  

**Problemas no projeto de chat Python**:  
- Certifique-se que o pacote OpenAI esteja instalado: `pip install openai`  
- Verifique se a variável de ambiente GITHUB_TOKEN está configurada  
- Confira permissões de acesso ao GitHub Models  

**Docsify não serve a documentação**:  
- Instale docsify-cli globalmente: `npm install -g docsify-cli`  
- Execute a partir do diretório raiz do repositório  
- Verifique se `docs/_sidebar.md` existe  

### Dicas para Ambiente de Desenvolvimento

- Use VS Code com extensão Live Server para projetos HTML  
- Instale as extensões ESLint e Prettier para formatação consistente  
- Use DevTools do navegador para depuração de JavaScript  
- Para projetos Vue, instale a extensão Vue DevTools no navegador  

### Considerações de Performance

- Grande número de arquivos traduzidos (50+ idiomas) torna clones completos grandes  
- Use clone superficial se trabalhar apenas com conteúdo: `git clone --depth 1`  
- Exclua traduções das buscas ao trabalhar com conteúdo em inglês  
- Processos de build podem ser lentos na primeira execução (npm install, build do Vite)  

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves API nunca devem ser commitadas no repositório  
- Use arquivos `.env` (já no `.gitignore`)  
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

- Começantes completos em desenvolvimento web  
- Estudantes e autodidatas  
- Professores usando o currículo em salas de aula  
- Conteúdo projetado para acessibilidade e desenvolvimento gradual de habilidades  

### Filosofia Educacional

- Aprendizado baseado em projetos  
- Verificações frequentes de conhecimento (quizzes)  
- Exercícios práticos de codificação  
- Exemplos de aplicações do mundo real  
- Foco em fundamentos antes de frameworks  

### Manutenção do Repositório

- Comunidade ativa de aprendizes e colaboradores  
- Atualizações regulares em dependências e conteúdo  
- Issues e discussões monitoradas por mantenedores  
- Atualizações de tradução automatizadas via GitHub Actions  

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)  
- [Recursos do Student Hub](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para aprendizes  
- Cursos adicionais: Currículos de IA Generativa, Ciência de Dados, ML, IoT disponíveis  

### Trabalhando com Projetos Específicos

Para instruções detalhadas sobre projetos individuais, veja os arquivos README em:  
- `quiz-app/README.md` - Aplicação quiz Vue 3  
- `7-bank-project/README.md` - Aplicativo bancário com autenticação  
- `5-browser-extension/README.md` - Desenvolvimento de extensão de navegador  
- `6-space-game/README.md` - Desenvolvimento de jogo baseado em canvas  
- `9-chat-project/README.md` - Projeto de assistente de chat AI  

### Estrutura do Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:  
- Cada aula é autônoma  
- Projetos não compartilham dependências  
- Trabalhe em projetos individuais sem afetar os outros  
- Clone o repositório completo para a experiência curricular completa  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, por favor, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional feita por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->