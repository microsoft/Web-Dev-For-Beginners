# AGENTS.md

## Visão Geral do Projeto

Este é um repositório curricular educativo para ensinar fundamentos de desenvolvimento web a iniciantes. O currículo é um curso abrangente de 12 semanas desenvolvido pelos Microsoft Cloud Advocates, com 24 lições práticas cobrindo JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educacional**: 24 lições estruturadas organizadas em módulos baseados em projetos
- **Projetos Práticos**: Terrarium, Jogo de Digitação, Extensão de Navegador, Jogo Espacial, Aplicação Bancária, Editor de Código e Assistente de Chat com IA
- **Questionários Interativos**: 48 quizzes com 3 perguntas cada (avaliações pré e pós lição)
- **Suporte Multilíngue**: Traduções automáticas para mais de 50 línguas via GitHub Actions
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos de IA)

### Arquitetura

- Repositório educativo com estrutura baseada em lições
- Cada pasta de lição contém README, exemplos de código e soluções
- Projetos independentes em diretórios separados (quiz-app, vários projetos de lições)
- Sistema de tradução usando GitHub Actions (co-op-translator)
- Documentação servida via Docsify e disponível como PDF

## Comandos de Configuração

Este repositório destina-se principalmente ao consumo de conteúdo educativo. Para trabalhar com projetos específicos:

### Configuração Principal do Repositório

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Configuração Quiz App (Vue 3 + Vite)

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

### Projetos de Jogo Espacial

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

## Fluxo de Trabalho de Desenvolvimento

### Para Contribuintes de Conteúdo

1. **Fork do repositório** para a sua conta GitHub
2. **Clone o seu fork** localmente
3. **Crie uma nova branch** para as suas alterações
4. Faça alterações no conteúdo das lições ou exemplos de código
5. Teste quaisquer alterações de código nos diretórios dos projetos relevantes
6. Submeta pull requests seguindo as diretrizes de contribuição

### Para Aprendizes

1. Faça fork ou clone do repositório
2. Navegue sequencialmente pelos diretórios das lições
3. Leia os ficheiros README de cada lição
4. Complete os quizzes pré-lição em https://ff-quizzes.netlify.app/web/
5. Trabalhe os exemplos de código nas pastas das lições
6. Complete tarefas e desafios
7. Faça os quizzes pós-lição

### Desenvolvimento em Tempo Real

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)
- **Quiz App**: Execute `npm run dev` no diretório quiz-app
- **Projetos**: Use a extensão Live Server do VS Code para projetos HTML
- **APIs**: Execute `npm start` nos respetivos diretórios das APIs

## Instruções de Testes

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
  - Exemplos de código sem erros na execução
  - Links na documentação funcionais
  - Compilação bem-sucedida dos projetos
  - Exemplos que seguem as melhores práticas

### Verificações Antes da Submissão

- Execute `npm run lint` em diretórios com package.json
- Verifique se os links markdown são válidos
- Teste exemplos de código no navegador ou Node.js
- Confirme que traduções mantêm a estrutura correta

## Diretrizes de Estilo de Código

### JavaScript

- Utilize sintaxe moderna ES6+
- Siga as configurações padrão ESLint fornecidas nos projetos
- Use nomes significativos para variáveis e funções para maior clareza educativa
- Adicione comentários explicativos para os conceitos apresentados aos alunos
- Formate com Prettier onde estiver configurado

### HTML/CSS

- Use elementos HTML5 semânticos
- Princípios de design responsivo
- Convenções claras de nomes de classes
- Comentários que explicam técnicas CSS para os aprendizes

### Python

- Diretrizes de estilo PEP 8
- Código claro e educativo
- Dicas de tipos onde úteis para aprendizagem

### Documentação Markdown

- Hierarquia clara de cabeçalhos
- Blocos de código com especificação de linguagem
- Links para recursos adicionais
- Capturas de ecrã e imagens nas pastas `images/`
- Texto alternativo nas imagens para acessibilidade

### Organização de Ficheiros

- Lições numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada projeto tem diretórios `solution/` e frequentemente `start/` ou `your-work/`
- Imagens armazenadas nas pastas `images/` específicas de cada lição
- Traduções na estrutura `translations/{language-code}/`

## Construção e Implementação

### Implementação do Quiz App (Azure Static Web Apps)

O quiz-app está configurado para deployment no Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Desdobra através do fluxo de trabalho do GitHub Actions ao fazer push para a branch main
```

Configuração do Azure Static Web Apps:
- **Localização da App**: `/quiz-app`
- **Localização de saída**: `dist`
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
- Projetos estáticos: Sem passo de build, servir os ficheiros diretamente

## Diretrizes para Pull Requests

### Formato do Título

Use títulos claros e descritivos indicando a área da alteração:
- `[Quiz-app] Adicionar novo quiz para a lição X`
- `[Lição-3] Corrigir erro de digitação no projeto terrarium`
- `[Tradução] Adicionar tradução para espanhol na lição 5`
- `[Docs] Atualizar instruções de configuração`

### Verificações Requeridas

Antes de submeter um PR:

1. **Qualidade do Código**:
   - Execute `npm run lint` nos diretórios dos projetos afetados
   - Corrija todos os erros e avisos de lint

2. **Verificação de Build**:
   - Execute `npm run build` se aplicável
   - Assegure que não haja erros de build

3. **Validação de Links**:
   - Teste todos os links markdown
   - Verifique se referências a imagens funcionam

4. **Revisão de Conteúdo**:
   - Revise ortografia e gramática
   - Garanta que exemplos de código estão corretos e educativos
   - Confirme que traduções mantêm o significado original

### Requisitos para Contribuição

- Concordar com o Microsoft CLA (verificação automática no primeiro PR)
- Seguir o [Código de Conduta Open Source da Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Consultar [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas
- Referenciar números de issues na descrição do PR quando aplicável

### Processo de Revisão

- PRs revistos por mantenedores e comunidade
- Prioridade na clareza educativa
- Exemplos de código devem seguir as melhores práticas atuais
- Traduções revistas quanto à precisão e adequação cultural

## Sistema de Tradução

### Tradução Automática

- Usa GitHub Actions com workflow co-op-translator
- Traduções automáticas para mais de 50 línguas
- Ficheiros fonte nas pastas principais
- Ficheiros traduzidos em diretórios `translations/{language-code}/`

### Adição de Melhorias Manuais à Tradução

1. Localize o ficheiro em `translations/{language-code}/`
2. Faça melhorias preservando a estrutura
3. Assegure que exemplos de código permanecem funcionais
4. Teste qualquer conteúdo de quiz localizado

### Metadados das Traduções

Ficheiros traduzidos incluem header de metadados:
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

**A app do quiz não inicia**:
- Verifique a versão do Node.js (recomendado v14+)
- Apague `node_modules` e `package-lock.json`, execute `npm install` novamente
- Verifique conflitos de porta (por defeito: Vite usa a porta 5173)

**Servidor API não inicia**:
- Confirme que a versão do Node.js é a mínima requerida (node >=10)
- Verifique se a porta está em uso
- Garanta que todas as dependências estão instaladas com `npm install`

**Extensão de navegador não carrega**:
- Verifique se manifest.json está corretamente formatado
- Revise a consola do navegador por erros
- Siga instruções específicas para instalação da extensão no navegador

**Problemas no projeto Python chat**:
- Certifique-se que o pacote OpenAI está instalado: `pip install openai`
- Verifique se a variável de ambiente GITHUB_TOKEN está definida
- Confirme permissões de acesso aos Models do GitHub

**Docsify não serve documentação**:
- Instale docsify-cli globalmente: `npm install -g docsify-cli`
- Execute a partir do diretório raiz do repositório
- Verifique a existência do ficheiro `docs/_sidebar.md`

### Dicas para Ambiente de Desenvolvimento

- Use VS Code com extensão Live Server para projetos HTML
- Instale as extensões ESLint e Prettier para formatação consistente
- Utilize DevTools do browser para depurar JavaScript
- Para Vue, instale a extensão Vue DevTools no navegador

### Considerações de Performance

- Muitas traduções (50+ línguas) significam clones completos grandes
- Use clone superficial se trabalhar só no conteúdo: `git clone --depth 1`
- Exclua pesquisas em traduções quando trabalhar no conteúdo em inglês
- Processos de build podem ser lentos na primeira execução (npm install, build Vite)

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves de API não devem ser commitadas no repositório
- Use ficheiros `.env` (já incluídos no `.gitignore`)
- Documente variáveis de ambiente requeridas nos READMEs dos projetos

### Projetos Python

- Use ambientes virtuais: `python -m venv venv`
- Mantenha dependências atualizadas
- Tokens do GitHub devem ter permissões mínimas necessárias

### Acesso aos Models do GitHub

- Tokens de Acesso Pessoal (PAT) necessários para Models do GitHub
- Tokens devem ser armazenados em variáveis de ambiente
- Nunca commit tokens ou credenciais

## Notas Adicionais

### Público-Alvo

- Iniciantes completos em desenvolvimento web
- Estudantes e autodidatas
- Professores que usam o currículo em salas de aula
- Conteúdo projetado para acessibilidade e progressão gradual de competências

### Filosofia Educacional

- Abordagem de aprendizagem baseada em projetos
- Verificações frequentes de conhecimento (quizzes)
- Exercícios práticos de programação
- Exemplos baseados em aplicações reais
- Foco nos fundamentos antes de frameworks

### Manutenção do Repositório

- Comunidade ativa de aprendizes e contribuintes
- Atualizações regulares de dependências e conteúdo
- Monitorização de issues e discussões pelos mantenedores
- Atualizações de traduções automatizadas via GitHub Actions

### Recursos Relacionados

- [Módulos da Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos do Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para aprendizes
- Cursos adicionais: IA Generativa, Ciência de Dados, ML, currículos IoT disponíveis

### Trabalhar com Projetos Específicos

Para instruções detalhadas sobre projetos individuais, consulte os ficheiros README em:
- `quiz-app/README.md` - Aplicação quiz em Vue 3
- `7-bank-project/README.md` - Aplicação bancária com autenticação
- `5-browser-extension/README.md` - Desenvolvimento de extensão de navegador
- `6-space-game/README.md` - Desenvolvimento de jogo com Canvas
- `9-chat-project/README.md` - Projeto de assistente de chat com IA

### Estrutura Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:
- Cada lição é autocontida
- Projetos não partilham dependências
- Trabalhe em projetos individuais sem afetar os outros
- Clone o repositório completo para a experiência curricular completa

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, tenha em atenção que as traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte oficial. Para informações críticas, recomenda-se tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->