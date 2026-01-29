# Adote uma API

## Visão Geral

APIs abrem um mundo de possibilidades para o desenvolvimento criativo na web! Nesta tarefa, você escolherá uma API externa e criará uma extensão de navegador que resolva um problema real ou ofereça uma funcionalidade valiosa para os usuários.

## Instruções

### Etapa 1: Escolha Sua API
Selecione uma API desta [lista de APIs públicas gratuitas](https://github.com/public-apis/public-apis). Considere estas categorias:

**Opções populares para iniciantes:**
- **Entretenimento**: [Dog CEO API](https://dog.ceo/dog-api/) para imagens aleatórias de cachorros
- **Clima**: [OpenWeatherMap](https://openweathermap.org/api) para dados climáticos atuais
- **Frases**: [Quotable API](https://quotable.io/) para frases inspiradoras
- **Notícias**: [NewsAPI](https://newsapi.org/) para manchetes atuais
- **Curiosidades**: [Numbers API](http://numbersapi.com/) para fatos interessantes sobre números

### Etapa 2: Planeje Sua Extensão
Antes de começar a programar, responda estas perguntas de planejamento:
- Qual problema sua extensão resolve?
- Quem é o usuário-alvo?
- Quais dados serão armazenados no armazenamento local?
- Como você lidará com falhas na API ou limites de taxa?

### Etapa 3: Construa Sua Extensão
Sua extensão deve incluir:

**Funcionalidades Obrigatórias:**
- Campos de formulário para quaisquer parâmetros necessários da API
- Integração com a API com tratamento adequado de erros
- Armazenamento local para preferências do usuário ou chaves de API
- Interface de usuário limpa e responsiva
- Estados de carregamento e feedback para o usuário

**Requisitos de Código:**
- Utilize recursos modernos do JavaScript (ES6+)
- Implemente async/await para chamadas à API
- Inclua tratamento de erros adequado com blocos try/catch
- Adicione comentários significativos explicando seu código
- Siga um formato de código consistente

### Etapa 4: Teste e Aperfeiçoe
- Teste sua extensão com diferentes entradas
- Trate casos extremos (sem internet, respostas inválidas da API)
- Certifique-se de que sua extensão funcione após reiniciar o navegador
- Adicione mensagens de erro amigáveis ao usuário

## Desafios Extras

Leve sua extensão para o próximo nível:
- Adicione múltiplos endpoints da API para funcionalidades mais ricas
- Implemente cache de dados para reduzir chamadas à API
- Crie atalhos de teclado para ações comuns
- Adicione recursos de exportação/importação de dados
- Implemente opções de personalização para o usuário

## Requisitos de Submissão

1. **Extensão funcional para navegador** que se integre com sucesso à API escolhida
2. **Arquivo README** explicando:
   - Qual API você escolheu e por quê
   - Como instalar e usar sua extensão
   - Quaisquer chaves de API ou configurações necessárias
   - Capturas de tela da sua extensão em funcionamento
3. **Código limpo e comentado** seguindo práticas modernas de JavaScript

## Rubrica

| Critério | Exemplar (90-100%) | Proficiente (80-89%) | Em Desenvolvimento (70-79%) | Iniciante (60-69%) |
|----------|---------------------|---------------------|-----------------------------|--------------------|
| **Integração com API** | Integração impecável com tratamento abrangente de erros e gerenciamento de casos extremos | Integração bem-sucedida com tratamento básico de erros | API funciona, mas com tratamento limitado de erros | Integração com API apresenta problemas significativos |
| **Qualidade do Código** | Código limpo, bem comentado, seguindo as melhores práticas modernas de JavaScript | Boa estrutura de código com comentários adequados | Código funcional, mas precisa de melhor organização | Qualidade de código ruim com poucos comentários |
| **Experiência do Usuário** | Interface polida com excelentes estados de carregamento e feedback ao usuário | Boa interface com feedback básico ao usuário | Interface básica que funciona adequadamente | Experiência do usuário ruim com interface confusa |
| **Armazenamento Local** | Uso sofisticado de armazenamento local com validação e gerenciamento de dados | Implementação adequada de armazenamento local para funcionalidades principais | Implementação básica de armazenamento local | Uso mínimo ou incorreto de armazenamento local |
| **Documentação** | README abrangente com instruções de configuração e capturas de tela | Boa documentação cobrindo a maioria dos requisitos | Documentação básica com alguns detalhes ausentes | Documentação ruim ou ausente |

## Dicas para Começar

1. **Comece simples**: Escolha uma API que não exija autenticação complexa
2. **Leia a documentação**: Entenda bem os endpoints e respostas da API escolhida
3. **Planeje sua interface**: Faça um esboço da interface da sua extensão antes de começar a programar
4. **Teste frequentemente**: Construa de forma incremental e teste cada funcionalidade conforme adicionada
5. **Trate erros**: Sempre assuma que chamadas à API podem falhar e planeje de acordo

## Recursos

- [Documentação de Extensões para Navegadores](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Guia da Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Tutorial de Armazenamento Local](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [Manipulação e Parsing de JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Divirta-se criando algo útil e criativo! 🚀

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.