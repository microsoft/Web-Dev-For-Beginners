<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "25b8d28b8531352d4eb67291fd7824c4",
  "translation_date": "2026-01-06T18:02:52+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/assignment.md",
  "language_code": "pt"
}
-->
# Adote uma API

## Visão Geral

As APIs abrem possibilidades infinitas para o desenvolvimento web criativo! Nesta tarefa, vais escolher uma API externa e criar uma extensão para navegador que resolva um problema real ou forneça funcionalidades valiosas aos utilizadores.

## Instruções

### Passo 1: Escolhe a tua API
Seleciona uma API desta [lista selecionada de APIs públicas gratuitas](https://github.com/public-apis/public-apis). Considera estas categorias:

**Opções populares para iniciantes:**
- **Entretenimento**: [Dog CEO API](https://dog.ceo/dog-api/) para imagens aleatórias de cães
- **Clima**: [OpenWeatherMap](https://openweathermap.org/api) para dados meteorológicos atuais
- **Citações**: [Quotable API](https://quotable.io/) para citações inspiradoras
- **Notícias**: [NewsAPI](https://newsapi.org/) para manchetes atuais
- **Curiosidades**: [Numbers API](http://numbersapi.com/) para factos interessantes sobre números

### Passo 2: Planeia a tua Extensão
Antes de programar, responde a estas perguntas de planeamento:
- Que problema resolve a tua extensão?
- Quem é o teu utilizador-alvo?
- Que dados vais guardar no armazenamento local?
- Como vais lidar com falhas da API ou limites de taxa?

### Passo 3: Constrói a tua Extensão
A tua extensão deve incluir:

**Funcionalidades Obrigatórias:**
- Formulários para quaisquer parâmetros exigidos pela API
- Integração com a API com tratamento adequado de erros
- Armazenamento local para preferências do utilizador ou chaves da API
- Interface limpa e responsiva
- Estados de carregamento e feedback para o utilizador

**Requisitos de Código:**
- Usa funcionalidades modernas do JavaScript (ES6+)
- Implementa async/await para chamadas à API
- Inclui tratamento de erros com blocos try/catch
- Adiciona comentários significativos a explicar o código
- Segue formatação de código consistente

### Passo 4: Testa e Aperfeiçoa
- Testa a tua extensão com vários inputs
- Lida com casos extremos (sem internet, respostas inválidas da API)
- Garante que a extensão funciona após reiniciar o navegador
- Adiciona mensagens de erro amigáveis para o utilizador

## Desafios Bónus

Leva a tua extensão para o próximo nível:
- Adiciona múltiplos endpoints da API para funcionalidades mais ricas
- Implementa cache de dados para reduzir chamadas à API
- Cria atalhos de teclado para ações comuns
- Adiciona funcionalidades de exportação/importação de dados
- Implementa opções de personalização pelo utilizador

## Requisitos de Submissão

1. **Extensão para navegador funcional** que integre com sucesso a API escolhida
2. **Ficheiro README** explicando:
   - Qual API escolheste e porquê
   - Como instalar e usar a tua extensão
   - Quaisquer chaves de API ou configuração necessária
   - Capturas de ecrã da tua extensão em funcionamento
3. **Código limpo e comentado** seguindo práticas modernas de JavaScript

## Rubrica

| Critérios | Exemplar (90-100%) | Proficiente (80-89%) | Em Desenvolvimento (70-79%) | Inicial (60-69%) |
|----------|---------------------|---------------------|-----------------------------|------------------|
| **Integração API** | Integração perfeita da API com tratamento abrangente de erros e gestão de casos extremos | Integração da API bem-sucedida com tratamento básico de erros | A API funciona mas tem tratamento limitado de erros | Integração da API com problemas significativos |
| **Qualidade do Código** | Código limpo, bem comentado e moderno seguindo as melhores práticas | Boa estrutura de código com comentários adequados | Código funcional mas com organização melhorável | Código pobre e comentários mínimos |
| **Experiência do Utilizador** | Interface polida com excelentes estados de carregamento e feedback ao utilizador | Boa interface com feedback básico | Interface básica que funciona adequadamente | Má experiência do utilizador com interface confusa |
| **Armazenamento Local** | Uso sofisticado do armazenamento local com validação e gestão de dados | Implementação adequada do armazenamento local para funcionalidades-chave | Implementação básica do armazenamento local | Uso mínimo ou incorreto do armazenamento local |
| **Documentação** | README abrangente com instruções de configuração e capturas de ecrã | Boa documentação cobrindo a maioria dos requisitos | Documentação básica com alguns detalhes em falta | Documentação pobre ou ausente |

## Dicas para Começar

1. **Começa simples**: Escolhe uma API que não exija autenticação complexa
2. **Lê a documentação**: Entende bem os endpoints e respostas da API escolhida
3. **Planeia a interface**: Esboça a interface da tua extensão antes de programar
4. **Testa frequentemente**: Desenvolve de forma incremental e testa cada funcionalidade adicionada
5. **Lida com erros**: Assume sempre que chamadas à API podem falhar e planeia em conformidade

## Recursos

- [Documentação de Extensões para Navegador](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Guia da Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Tutorial de Armazenamento Local](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [Parsing e Manipulação de JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Divirta-te a criar algo útil e criativo! 🚀

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso**:
Este documento foi traduzido usando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, tenha em conta que as traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte oficial. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->