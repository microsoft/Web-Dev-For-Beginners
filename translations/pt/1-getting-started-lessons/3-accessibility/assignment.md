<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e6d0f456dfc22afb41bbdefeb5ec179d",
  "translation_date": "2026-01-06T18:31:10+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/assignment.md",
  "language_code": "pt"
}
-->
# Auditoria Abrangente de Acessibilidade de Website

## Instruções

Nesta tarefa, irá realizar uma auditoria de acessibilidade a nível profissional de um website real, aplicando os princípios e técnicas que aprendeu. Esta experiência prática aprofundará a sua compreensão das barreiras e soluções de acessibilidade.

Escolha um website que apparentemente tenha problemas de acessibilidade — isto oferece-lhe mais oportunidades de aprendizagem do que analisar um site já perfeito. Bons candidatos incluem websites antigos, aplicações web complexas ou sites com conteúdo multimédia rico.

### Fase 1: Avaliação manual estratégica

Antes de recorrer a ferramentas automatizadas, faça uma avaliação manual abrangente. Esta abordagem centrada no ser humano frequentemente revela problemas que as ferramentas não detectam e ajuda a compreender a experiência real do utilizador.

**🔍 Critérios essenciais de avaliação:**

**Navegação e Estrutura:**
- Consegue navegar no site inteiro usando apenas teclado (Tab, Shift+Tab, Enter, Espaço, teclas de seta)?
- Os indicadores de foco são claramente visíveis em todos os elementos interativos?
- A estrutura de cabeçalhos (H1-H6) cria um esboço lógico do conteúdo?
- Existem links de salto para pular diretamente para o conteúdo principal?

**Acessibilidade Visual:**
- Existe contraste de cor suficiente em todo o site (mínimo 4.5:1 para texto normal)?
- O site depende exclusivamente da cor para transmitir informação importante?
- Todas as imagens têm texto alternativo apropriado?
- O layout mantém-se funcional quando ampliado a 200%?

**Conteúdo e Comunicação:**
- Existem textos de links ambíguos como "clique aqui"?
- Consegue compreender o conteúdo e a funcionalidade sem pistas visuais?
- Os campos de formulários estão devidamente rotulados e agrupados?
- As mensagens de erro são claras e úteis?

**Elementos Interativos:**
- Todos os botões e controlos de formulários funcionam apenas com teclado?
- As alterações de conteúdo dinâmico são anunciadas aos leitores de ecrã?
- Os diálogos modais e widgets complexos seguem os padrões corretos de acessibilidade?

📝 **Documente as suas conclusões** com exemplos específicos, capturas de ecrã e URLs das páginas. Note tanto os problemas como os aspetos bem executados.

### Fase 2: Testes automatizados abrangentes

Agora valide e expanda as suas conclusões manuais utilizando ferramentas de teste de acessibilidade padrão da indústria. Cada ferramenta tem pontos fortes diferentes, por isso usar várias garante cobertura completa.

**🛠️ Ferramentas de teste requeridas:**

1. **Auditoria de Acessibilidade Lighthouse** (integrada no Chrome/Edge DevTools)
   - Execute auditorias em várias páginas
   - Foque em métricas e recomendações específicas
   - Registe a sua pontuação de acessibilidade e violações específicas

2. **axe DevTools** (extensão de navegador - padrão da indústria)
   - Deteção de problemas mais detalhada que o Lighthouse
   - Fornece exemplos específicos de código para correções
   - Testa contra os critérios WCAG 2.1

3. **WAVE Web Accessibility Evaluator** (extensão de navegador)
   - Representação visual das funcionalidades de acessibilidade
   - Destaca erros e aspetos positivos
   - Útil para entender a estrutura da página

4. **Color Contrast Analyzers**
   - WebAIM Contrast Checker para pares de cores específicos
   - Extensões para análise em toda a página
   - Testa contra padrões WCAG AA e AAA

**🎧 Testes reais com tecnologia assistiva:**
- **Testes com leitor de ecrã**: use NVDA (Windows), VoiceOver (Mac) ou TalkBack (Android)
- **Navegação apenas com teclado**: desligue o rato e navegue no site inteiro
- **Testes de zoom**: teste funcionamento a níveis de zoom de 200% e 400%
- **Testes de controlo por voz**: se disponível, experimente ferramentas de navegação por voz

**📊 Organize os seus resultados** criando uma folha de cálculo mestra com:
- Descrição e localização do problema
- Nível de severidade (Crítico/Alto/Médio/Baixo)
- Critério de sucesso WCAG violado
- Ferramenta que detetou o problema
- Capturas de ecrã e provas

### Fase 3: Documentação abrangente das conclusões

Elabore um relatório profissional de auditoria de acessibilidade que demonstre a sua compreensão tanto dos problemas técnicos como do impacto humano.

**📋 Secções requeridas no relatório:**

1. **Resumo Executivo** (1 página)
   - URL do website e breve descrição
   - Nível geral de maturidade em acessibilidade
   - 3 questões mais críticas
   - Impacto estimado nos utilizadores com deficiência

2. **Metodologia** (½ página)
   - Abordagem de teste e ferramentas utilizadas
   - Páginas avaliadas e combinações de dispositivos/navegadores
   - Normas avaliadas (WCAG 2.1 AA)

3. **Conclusões Detalhadas** (2-3 páginas)
   - Questões categorizadas por princípio WCAG (Perceptível, Operável, Compreensível, Robusto)
   - Inclua capturas de ecrã e exemplos específicos
   - Note aspetos positivos de acessibilidade que encontrou
   - Faça referência cruzada com os resultados das ferramentas automatizadas

4. **Avaliação do Impacto no Utilizador** (1 página)
   - Como os problemas afetam utilizadores com diferentes deficiências
   - Cenários que descrevam experiências reais de utilizadores
   - Impacto empresarial (risco legal, SEO, expansão da base de utilizadores)

**📸 Recolha de provas:**
- Capturas de ecrã das violações de acessibilidade
- Gravações de ecrã dos fluxos problemáticos
- Relatórios das ferramentas (em PDF)
- Exemplos de código que mostram os problemas

### Fase 4: Plano profissional de remediação

Desenvolva um plano estratégico e prioritário para corrigir os problemas de acessibilidade. Isto demonstra a sua capacidade de pensar como um desenvolvedor web profissional que aborda restrições empresariais reais.

**🎯 Crie recomendações detalhadas de melhoria (mínimo 10 problemas):**

**Para cada problema identificado, forneça:**

- **Descrição do Problema**: Explicação clara do que está mal e porque é problemático
- **Referência WCAG**: Critério de sucesso específico violado (ex.: "2.4.4 Propósito do Link (No Contexto) - Nível A")
- **Impacto no Utilizador**: Como afeta pessoas com diferentes deficiências
- **Solução**: Alterações específicas no código, modificações de design ou melhorias de processo
- **Nível de Prioridade**: Crítico (impede uso básico) / Alto (barreira significativa) / Médio (problema de usabilidade) / Baixo (melhoria)
- **Esforço de Implementação**: Estimativa de tempo/complexidade (Ganho rápido / Esforço moderado / Reestruturação maior)
- **Verificação de Testes**: Como verificar se a correção funciona

**Exemplo de entrada de melhoria:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```
  
**📈 Fases estratégicas de implementação:**

- **Fase 1 (0-2 semanas)**: Problemas críticos que bloqueiam funcionalidades básicas  
- **Fase 2 (1-2 meses)**: Melhorias de alta prioridade para melhor experiência do utilizador  
- **Fase 3 (3-6 meses)**: Aperfeiçoamentos de prioridade média e melhorias de processo  
- **Fase 4 (Contínuo)**: Monitorização e aperfeiçoamento contínuos  

## Rubrica de Avaliação

A sua auditoria de acessibilidade será avaliada tanto pela precisão técnica como pela apresentação profissional:

| Critério | Excelente (90-100%) | Bom (80-89%) | Satisfatório (70-79%) | Precisa Melhorar (<70%) |
|----------|-------------------|---------------|---------------------|------------------------|
| **Profundidade do Teste Manual** | Avaliação abrangente cobrindo todos os princípios POUR com observações detalhadas e cenários de utilizador | Boa cobertura da maioria das áreas de acessibilidade com conclusões claras e alguma análise de impacto no utilizador | Avaliação básica cobrindo áreas chave com observações adequadas | Testes limitados com observações superficiais e pouca consideração do impacto no utilizador |
| **Utilização & Análise de Ferramentas** | Usa todas as ferramentas requeridas de forma eficaz, referências cruzadas, inclui evidências claras e analisa limitações das ferramentas | Usa a maioria das ferramentas com boa documentação, algumas referências cruzadas e evidências adequadas | Usa ferramentas requeridas com documentação básica e alguma evidência | Uso mínimo de ferramentas, documentação pobre ou evidência em falta |
| **Identificação & Categorização de Problemas** | Identifica 15+ problemas específicos em todos os princípios WCAG, categoriza com precisão por severidade, demonstra entendimento profundo | Identifica 10-14 problemas na maioria dos princípios WCAG, boa categorização, demonstra sólido entendimento | Identifica 7-9 problemas com cobertura WCAG adequada e categorização básica | Identifica <7 problemas com escopo limitado ou categorização deficiente |
| **Qualidade & Viabilidade das Soluções** | 10+ soluções detalhadas e acionáveis com referências WCAG precisas, prazos realistas e métodos de verificação | 8-9 soluções bem desenvolvidas com referências maioritariamente precisas e bons detalhes de implementação | 6-7 soluções básicas com algum detalhe e abordagens geralmente realistas | <6 soluções ou detalhes insuficientes, implementações pouco realistas |
| **Comunicação Profissional** | Relatório excelentemente organizado, claramente escrito, inclui resumo executivo, usa linguagem técnica apropriada e segue padrões de documentação empresarial | Bem organizado com boa qualidade de escrita, inclui a maioria das secções necessárias, tom apropriado | Adequadamente organizado com escrita aceitável, inclui secções básicas necessárias | Organização pobre, escrita pouco clara ou seções-chave em falta |
| **Aplicação ao Mundo Real** | Demonstra compreensão do impacto empresarial, considerações legais, diversidade de utilizadores e desafios práticos de implementação | Mostra bom entendimento das aplicações práticas com algum contexto empresarial | Compreensão básica das aplicações reais | Ligação limitada às aplicações práticas |

## Opções Avançadas de Desafio

**🚀 Para estudantes que queiram um desafio adicional:**

- **Análise Comparativa**: Audite 2-3 websites concorrentes e compare o nível de maturidade em acessibilidade  
- **Foco na Acessibilidade Móvel**: Investigação aprofundada de problemas específicos de acessibilidade móvel usando TalkBack do Android ou VoiceOver do iOS  
- **Perspetiva Internacional**: Pesquise e aplique normas de acessibilidade de diferentes países (EN 301 549, Section 508, ADA)  
- **Revisão da Declaração de Acessibilidade**: Avalie a declaração de acessibilidade existente do website (se houver) em relação às suas conclusões  

## Entregáveis

Submeta um relatório abrangente de auditoria de acessibilidade que demonstre análise profissional e planeamento prático de implementação:

**📄 Requisitos do Relatório Final:**

1. **Resumo Executivo** (1 página)  
   - Visão geral do website e avaliação da maturidade em acessibilidade  
   - Sumário de conclusões principais com impacto empresarial  
   - Ações prioritárias recomendadas  

2. **Metodologia e Escopo** (1 página)  
   - Abordagem de teste, ferramentas usadas e critérios de avaliação  
   - Páginas/seções avaliadas e eventuais limitações  
   - Quadro de conformidade com normas (WCAG 2.1 AA)  

3. **Relatório de Conclusões Detalhadas** (3-4 páginas)  
   - Observações de testes manuais com cenários de utilizador  
   - Resultados das ferramentas automatizadas com referências cruzadas  
   - Problemas organizados por princípios WCAG com evidências  
   - Funcionalidades positivas de acessibilidade identificadas  

4. **Plano Estratégico de Remediação** (3-4 páginas)  
   - Recomendações de melhoria priorizadas (mínimo 10)  
   - Cronograma de implementação com estimativas de esforço  
   - Métricas de sucesso e métodos de verificação  
   - Estratégia de manutenção a longo prazo da acessibilidade  

5. **Provas de Apoio** (Anexos)  
   - Capturas de ecrã das violações e das ferramentas de teste  
   - Exemplos de código mostrando problemas e soluções  
   - Relatórios das ferramentas e resumos da auditoria  
   - Notas ou gravações de testes com leitores de ecrã  

**📊 Requisitos de Formato:**  
- **Formato de documento**: PDF (apresentação profissional)  
- **Número de palavras**: 2.500-3.500 palavras (excluindo anexos e capturas de ecrã)  
- **Elementos visuais**: Inclua capturas de ecrã, diagramas e exemplos ao longo do documento  
- **Citações**: Referencie adequadamente as diretrizes WCAG e recursos de acessibilidade  

**💡 Dicas Profissionais para Excelência:**  
- Use formatação profissional com títulos e estilos consistentes  
- Inclua índice para facilitar navegação  
- Equilibre precisão técnica com linguagem clara e adequada ao negócio  
- Demonstre compreensão tanto da implementação técnica como do impacto no utilizador  

## Resultados de Aprendizagem

Após completar esta auditoria abrangente de acessibilidade, terá desenvolvido competências profissionais essenciais:

**🎯 Competências Técnicas:**  
- **Domínio dos Testes de Acessibilidade**: Proficiência em métodos manuais e automatizados padrão da indústria  
- **Aplicação WCAG**: Experiência prática em aplicar as Diretrizes de Acessibilidade para Conteúdos Web a cenários reais  
- **Compreensão de Tecnologia Assistiva**: Experiência prática com leitores de ecrã e navegação com teclado  
- **Mapeamento Problema-Solução**: Capacidade de identificar barreiras de acessibilidade e desenvolver estratégias específicas e acionáveis  

**💼 Competências Profissionais:**  
- **Comunicação Técnica**: Experiência na redação de relatórios profissionais de acessibilidade para diversos públicos  
- **Planeamento Estratégico**: Capacidade de priorizar melhorias de acessibilidade com base no impacto no utilizador e viabilidade de implementação  
- **Garantia de Qualidade**: Compreensão do teste de acessibilidade como parte do ciclo de vida do desenvolvimento  
- **Avaliação de Risco**: Valorização das implicações legais, empresariais e éticas da conformidade em acessibilidade  

**🌍 Mentalidade de Design Inclusivo:**  
- **Empatia pelo Utilizador**: Compreensão profunda das necessidades diversificadas de utilizadores e da interação com tecnologia assistiva  
- **Princípios de Design Universal**: Reconhecimento de que o design acessível beneficia todos os utilizadores, não apenas os com deficiência  
- **Melhoria Contínua**: Estrutura para avaliação e aperfeiçoamento constantes da acessibilidade  
- **Competências de Advocacy**: Confiança para promover boas práticas de acessibilidade em projetos e equipas futuras  

**🚀 Preparação para Carreira:**  
Esta tarefa espelha projetos reais de consultoria em acessibilidade, oferecendo-lhe experiência para portfolio que demonstra:  
- Abordagem sistemática à resolução de problemas  
- Atenção tanto aos pormenores técnicos como ao impacto empresarial  
- Comunicação clara de conceitos técnicos complexos  
- Compreensão das responsabilidades legais e éticas no desenvolvimento web  

Após a conclusão, estará preparado para contribuir significativamente para iniciativas de acessibilidade em qualquer função de desenvolvimento web e defender práticas de design inclusivas ao longo da sua carreira.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, por favor tenha em conta que traduções automatizadas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autorizada. Para informações críticas, é recomendada a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações erradas decorrentes da utilização desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->