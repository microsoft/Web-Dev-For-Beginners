<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a203e560e58ccc6ba68bffc40c7c8676",
  "translation_date": "2026-01-06T18:05:16+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/assignment.md",
  "language_code": "pt"
}
-->
# Analisar um site para desempenho

## Visão Geral da Tarefa

A análise de desempenho é uma competência crítica para desenvolvedores web modernos. Nesta tarefa, você realizará uma auditoria abrangente de desempenho de um site real, utilizando tanto ferramentas baseadas no navegador quanto serviços de terceiros para identificar gargalos e propor estratégias de otimização.

O seu objetivo é fornecer um relatório detalhado de desempenho que demonstre a sua compreensão dos princípios de desempenho web e a sua capacidade de usar ferramentas profissionais de análise de forma eficaz.

## Instruções da Tarefa

**Escolha um site** para análise - selecione uma das seguintes opções:
- Um site popular que você use frequentemente (site de notícias, redes sociais, e-commerce)
- Um site de projeto open-source (páginas GitHub, sites de documentação)
- Um site de negócio local ou portfólio
- O seu próprio projeto ou trabalho anterior

**Realize uma análise multi-ferramentas** usando pelo menos três abordagens diferentes:
- **DevTools do navegador** - Use a aba Performance do Chrome/Edge para perfil detalhado
- **Ferramentas online de auditoria** - Experimente Lighthouse, GTmetrix ou WebPageTest
- **Análise de rede** - Examine o carregamento de recursos, tamanhos de ficheiros e padrões de pedidos

**Documente as suas descobertas** num relatório abrangente que inclua:

### Análise de Métricas de Desempenho
- **Medições de tempo de carregamento** a partir de múltiplas ferramentas e perspetivas
- **Pontuações Core Web Vitals** (LCP, FID, CLS) e suas implicações
- **Desagregação de recursos** mostrando quais ativos contribuem mais para o tempo de carregamento
- **Análise em cascata de rede** identificando recursos bloqueantes

### Identificação de Problemas
- **Gargalos específicos de desempenho** com dados de suporte
- **Análise da causa raiz** explicando por que cada problema ocorre
- **Avaliação do impacto ao utilizador** descrevendo como os problemas afetam utilizadores reais
- **Classificação de prioridades** dos problemas com base na gravidade e dificuldade de correção

### Recomendações de Otimização
- **Melhorias específicas e acionáveis** com impacto esperado
- **Estratégias de implementação** para cada mudança recomendada
- **Melhores práticas modernas** que podem ser aplicadas (lazy loading, compressão, etc.)
- **Ferramentas e técnicas** para monitorização contínua do desempenho

## Requisitos de Pesquisa

**Não dependa apenas das ferramentas do navegador** - expanda a sua análise usando:

**Serviços de auditoria de terceiros:**
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Auditorias abrangentes
- [GTmetrix](https://gtmetrix.com/) - Insights de desempenho e otimização
- [WebPageTest](https://www.webpagetest.org/) - Testes em condições do mundo real
- [Pingdom](https://tools.pingdom.com/) - Monitorização global de desempenho

**Ferramentas especializadas de análise:**
- [Bundle Analyzer](https://bundlephobia.com/) - Análise do tamanho de bundles JavaScript
- [Ferramentas de otimização de imagem](https://squoosh.app/) - Oportunidades de otimização de ativos
- [Análise de cabeçalhos de segurança](https://securityheaders.com/) - Impacto no desempenho de segurança

## Formato dos Entregáveis

Crie um relatório profissional (2-3 páginas) que inclua:

1. **Resumo Executivo** - Principais descobertas e visão geral das recomendações
2. **Metodologia** - Ferramentas utilizadas e abordagem de testes
3. **Avaliação Atual do Desempenho** - Métricas e medições de referência
4. **Problemas Identificados** - Análise detalhada dos problemas com dados de suporte
5. **Recomendações** - Estratégias de melhoria priorizadas
6. **Roadmap de Implementação** - Plano passo a passo de otimização

**Inclua evidências visuais:**
- Capturas de ecrã das ferramentas e métricas de desempenho
- Gráficos ou diagramas mostrando dados de desempenho
- Comparações antes/depois onde possível
- Diagramas em cascata de rede e desagregações de recursos

## Rubrica

| Critério | Exemplar (90-100%) | Adequado (70-89%) | Precisa Melhorar (50-69%) |
| -------- | ------------------- | ----------------- | -------------------------- |
| **Profundidade da Análise** | Análise abrangente usando 4+ ferramentas com métricas detalhadas, análise da causa raiz e avaliação do impacto ao utilizador | Boa análise usando 3 ferramentas com métricas claras e identificação básica de problemas | Análise básica usando 2 ferramentas com profundidade limitada e identificação mínima de problemas |
| **Diversidade de Ferramentas** | Usa ferramentas do navegador + 3+ serviços de terceiros com análise comparativa e insights de cada um | Usa ferramentas do navegador + 2 serviços de terceiros com alguma análise comparativa | Usa ferramentas do navegador + 1 serviço de terceiros com comparação limitada |
| **Identificação de Problemas** | Identifica 5+ problemas específicos de desempenho com análise detalhada da causa raiz e impacto quantificado | Identifica 3-4 problemas de desempenho com boa análise e alguma medição de impacto | Identifica 1-2 problemas de desempenho com análise básica |
| **Recomendações** | Fornece recomendações específicas e acionáveis com detalhes de implementação, impacto esperado e melhores práticas modernas | Fornece boas recomendações com alguma orientação de implementação e resultados esperados | Fornece recomendações básicas com detalhes limitados de implementação |
| **Apresentação Profissional** | Relatório bem organizado com estrutura clara, evidências visuais, resumo executivo e formatação profissional | Boa organização com algumas evidências visuais e estrutura clara | Organização básica com evidências visuais mínimas |

## Resultados de Aprendizagem

Ao completar esta tarefa, você irá demonstrar a sua capacidade de:
- **Aplicar** ferramentas e metodologias profissionais de análise de desempenho
- **Identificar** gargalos de desempenho usando análise orientada por dados
- **Analisar** a relação entre qualidade do código e experiência do utilizador
- **Recomendar** estratégias específicas e acionáveis de otimização
- **Comunicar** descobertas técnicas em formato profissional

Esta tarefa reforça os conceitos de desempenho aprendidos na aula enquanto desenvolve competências práticas que usará ao longo da sua carreira de desenvolvimento web.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, por favor tenha em conta que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritativa. Para informação crítica, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações erradas decorrentes da utilização desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->