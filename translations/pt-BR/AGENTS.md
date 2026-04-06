# AGENTS.md

## Visão Geral do Projeto

Este é um repositório educacional para ensinar fundamentos de desenvolvimento web para iniciantes. O currículo é um curso completo de 12 semanas desenvolvido pelos Microsoft Cloud Advocates, com 24 aulas práticas cobrindo JavaScript, CSS e HTML.

### Componentes Principais

- **Conteúdo Educacional**: 24 aulas estruturadas organizadas em módulos baseados em projetos
- **Projetos Práticos**: Terrarium, Jogo de Digitação, Extensão de Navegador, Jogo Espacial, Aplicativo Bancário, Editor de Código e Assistente de Chat com IA
- **Questionários Interativos**: 48 questionários com 3 perguntas cada (avaliações pré/pós-aula)
- **Suporte Multilíngue**: Traduções automatizadas para mais de 50 idiomas via GitHub Actions
- **Tecnologias**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (para projetos de IA)

### Arquitetura

- Repositório educacional com estrutura baseada em aulas
- Cada pasta de aula contém README, exemplos de código e soluções
- Projetos independentes em diretórios separados (quiz-app, vários projetos de aulas)
- Sistema de tradução usando GitHub Actions (co-op-translator)
- Documentação servida via Docsify e disponível em PDF

## Comandos de Configuração

Este repositório é voltado principalmente para consumo de conteúdo educacional. Para trabalhar com projetos específicos:

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
# Abra index.html no navegador ou use o Live Server
```

### Projeto de Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Definir variável de ambiente GITHUB_TOKEN
python api.py
```

## Fluxo de Trabalho para Desenvolvimento

### Para Contribuidores de Conteúdo

1. **Faça um fork do repositório** para sua conta no GitHub
2. **Clone seu fork** localmente
3. **Crie um novo branch** para suas alterações
4. Faça alterações no conteúdo das aulas ou exemplos de código
5. Teste quaisquer mudanças de código nos diretórios relevantes do projeto
6. Envie pull requests seguindo as diretrizes de contribuição

### Para Estudantes

1. Faça fork ou clone o repositório
2. Navegue pelas pastas das aulas sequencialmente
3. Leia os arquivos README de cada aula
4. Complete os questionários pré-aula em https://ff-quizzes.netlify.app/web/
5. Trabalhe nos exemplos de código nas pastas das aulas
6. Complete tarefas e desafios
7. Faça os questionários pós-aula

### Desenvolvimento ao Vivo

- **Documentação**: Execute `docsify serve` na raiz (porta 3000)
- **Quiz App**: Execute `npm run dev` no diretório quiz-app
- **Projetos**: Use a extensão Live Server do VS Code para projetos HTML
- **Projetos API**: Execute `npm start` nos diretórios das APIs correspondentes

## Instruções de Teste

### Teste do Quiz App

```bash
cd quiz-app
npm run lint       # Verifique problemas de estilo de código
npm run build      # Verifique se a compilação é bem-sucedida
```

### Teste da API Bancária

```bash
cd 7-bank-project/api
npm run lint       # Verificar problemas de estilo de código
node server.js     # Verificar se o servidor inicia sem erros
```

### Abordagem Geral de Testes

- Este é um repositório educacional sem testes automatizados abrangentes
- Testes manuais focam em:
  - Exemplos de código executam sem erros
  - Links na documentação funcionam corretamente
  - Builds dos projetos concluem com sucesso
  - Exemplos seguem boas práticas

### Checagens Antes do Envio

- Execute `npm run lint` em diretórios com package.json
- Verifique se os links em markdown são válidos
- Teste exemplos de código no navegador ou Node.js
- Verifique se as traduções mantêm a estrutura correta

## Diretrizes de Estilo de Código

### JavaScript

- Use sintaxe moderna ES6+
- Siga as configurações padrão do ESLint fornecidas nos projetos
- Use nomes de variáveis e funções significativos para clareza educacional
- Adicione comentários explicando conceitos para estudantes
- Formate usando Prettier onde configurado

### HTML/CSS

- Elementos semânticos HTML5
- Princípios de design responsivo
- Convenções claras de nomenclatura de classes
- Comentários explicando técnicas CSS para estudantes

### Python

- Diretrizes de estilo PEP 8
- Exemplos claros e educacionais
- Anotações de tipo úteis para aprendizado

### Documentação Markdown

- Hierarquia clara de títulos
- Blocos de código com especificação de linguagem
- Links para recursos adicionais
- Capturas de tela e imagens nas pastas `images/`
- Texto alternativo para acessibilidade das imagens

### Organização de Arquivos

- Aulas numeradas sequencialmente (1-getting-started-lessons, 2-js-basics, etc.)
- Cada projeto possui diretórios `solution/` e frequentemente `start/` ou `your-work/`
- Imagens armazenadas em pastas específicas `images/` de cada aula
- Traduções na estrutura `translations/{language-code}/`

## Build e Implantação

### Implantação do Quiz App (Azure Static Web Apps)

O quiz-app está configurado para implantação no Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Cria a pasta dist/
# Faz o deploy via workflow do GitHub Actions ao enviar para a branch main
```

Configuração do Azure Static Web Apps:
- **Localização do app**: `/quiz-app`
- **Localização de saída**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Geração de PDF da Documentação

```bash
npm install                    # Instale docsify-to-pdf
npm run convert               # Gere PDF a partir do docs
```

### Documentação Docsify

```bash
npm install -g docsify-cli    # Instalar Docsify globalmente
docsify serve                 # Servir em localhost:3000
```

### Builds Específicos por Projeto

Cada diretório de projeto pode ter seu próprio processo de build:
- Projetos Vue: `npm run build` cria pacotes de produção
- Projetos estáticos: Sem passo de build, sirva os arquivos diretamente

## Diretrizes para Pull Requests

### Formato do Título

Use títulos claros e descritivos indicando a área da mudança:
- `[Quiz-app] Adicionar novo quiz para a lição X`
- `[Lesson-3] Corrigir erro de digitação no projeto terrarium`
- `[Translation] Adicionar tradução para espanhol na lição 5`
- `[Docs] Atualizar instruções de configuração`

### Verificações Necessárias

Antes de enviar um PR:

1. **Qualidade do Código**:
   - Execute `npm run lint` nos diretórios dos projetos afetados
   - Corrija todos os erros e avisos do lint

2. **Verificação do Build**:
   - Execute `npm run build` se aplicável
   - Garanta que não haja erros no build

3. **Validação de Links**:
   - Teste todos os links em markdown
   - Verifique se referências de imagens funcionam

4. **Revisão do Conteúdo**:
   - Revise ortografia e gramática
   - Assegure que exemplos de código estão corretos e educacionais
   - Verifique se traduções mantêm o significado original

### Requisitos para Contribuição

- Aceitar a CLA da Microsoft (verificação automática no primeiro PR)
- Seguir o [Código de Conduta de Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para diretrizes detalhadas
- Referenciar números de issues na descrição do PR, se aplicável

### Processo de Revisão

- PRs revisados por mantenedores e comunidade
- Clareza educacional é priorizada
- Exemplos de código devem seguir melhores práticas atuais
- Traduções revisadas quanto a precisão e adequação cultural

## Sistema de Tradução

### Tradução Automatizada

- Usa GitHub Actions com workflow co-op-translator
- Traduz automaticamente para mais de 50 idiomas
- Arquivos fonte nos diretórios principais
- Arquivos traduzidos em `translations/{language-code}/`

### Adicionando Melhorias Manuais na Tradução

1. Localize o arquivo em `translations/{language-code}/`
2. Faça melhorias preservando a estrutura
3. Certifique-se que exemplos de código continuam funcionais
4. Teste qualquer conteúdo localizado dos quizzes

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
- Apague `node_modules` e `package-lock.json`, execute `npm install` novamente
- Verifique conflitos de porta (padrão: Vite usa porta 5173)

**Servidor API não inicia**:
- Confirme que Node.js atende o mínimo (node >=10)
- Verifique se a porta já não está em uso
- Garanta que todas as dependências estejam instaladas com `npm install`

**Extensão do navegador não carrega**:
- Verifique se o manifest.json está formatado corretamente
- Confira o console do navegador para erros
- Siga as instruções específicas para instalação da extensão no navegador

**Problemas no projeto de chat Python**:
- Assegure que o pacote OpenAI está instalado: `pip install openai`
- Verifique se a variável de ambiente GITHUB_TOKEN está definida
- Confirme permissões de acesso aos GitHub Models

**Docsify não serve a documentação**:
- Instale globalmente o docsify-cli: `npm install -g docsify-cli`
- Execute a partir do diretório raiz do repositório
- Verifique se o arquivo `docs/_sidebar.md` existe

### Dicas para Ambiente de Desenvolvimento

- Use VS Code com a extensão Live Server para projetos HTML
- Instale extensões ESLint e Prettier para formatação consistente
- Use DevTools do navegador para depurar JavaScript
- Para projetos Vue, instale a extensão Vue DevTools no navegador

### Considerações de Performance

- Grande número de arquivos traduzidos (mais de 50 idiomas) torna clones completos grandes
- Use clone superficial se trabalhar somente com conteúdo: `git clone --depth 1`
- Exclua traduções das buscas ao trabalhar com conteúdo em inglês
- Processos de build podem ser lentos na primeira execução (npm install, build Vite)

## Considerações de Segurança

### Variáveis de Ambiente

- Chaves de API nunca devem ser commitadas no repositório
- Use arquivos `.env` (já no `.gitignore`)
- Documente variáveis de ambiente necessárias nos README dos projetos

### Projetos Python

- Use ambientes virtuais: `python -m venv venv`
- Mantenha dependências atualizadas
- Tokens do GitHub devem ter permissões mínimas necessárias

### Acesso aos GitHub Models

- Tokens de Acesso Pessoal (PAT) são necessários para GitHub Models
- Armazene tokens como variáveis de ambiente
- Nunca faça commit de tokens ou credenciais

## Notas Adicionais

### Público-Alvo

- Iniciantes completos em desenvolvimento web
- Estudantes e autodidatas
- Professores usando o currículo em salas de aula
- Conteúdo projetado para acessibilidade e construção gradual de habilidades

### Filosofia Educacional

- Abordagem de aprendizado baseado em projetos
- Verificações frequentes de conhecimento (quizzes)
- Exercícios práticos de codificação
- Exemplos de aplicação no mundo real
- Foco nos fundamentos antes de frameworks

### Manutenção do Repositório

- Comunidade ativa de aprendizes e contribuidores
- Atualizações regulares de dependências e conteúdo
- Issues e discussões monitoradas por mantenedores
- Atualizações de tradução automatizadas via GitHub Actions

### Recursos Relacionados

- [Módulos Microsoft Learn](https://docs.microsoft.com/learn/)
- [Recursos do Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) recomendado para estudantes
- Cursos adicionais: AI Generativa, Ciência de Dados, ML, IoT disponíveis

### Trabalhando com Projetos Específicos

Para instruções detalhadas sobre projetos individuais, consulte os arquivos README em:
- `quiz-app/README.md` - aplicação de quiz Vue 3
- `7-bank-project/README.md` - aplicativo bancário com autenticação
- `5-browser-extension/README.md` - desenvolvimento de extensão de navegador
- `6-space-game/README.md` - desenvolvimento de jogo baseado em canvas
- `9-chat-project/README.md` - projeto assistente de chat com IA

### Estrutura Monorepo

Embora não seja um monorepo tradicional, este repositório contém múltiplos projetos independentes:
- Cada aula é autossuficiente
- Projetos não compartilham dependências
- Trabalhe em projetos individuais sem afetar outros
- Clone o repositório completo para a experiência do curso completo

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido usando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->