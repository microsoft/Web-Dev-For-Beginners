<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b6897c02603d0045dd6d8256e8714baa",
  "translation_date": "2026-01-06T18:07:26+00:00",
  "source_file": "5-browser-extension/1-about-browsers/assignment.md",
  "language_code": "pt"
}
-->
# Trabalho: Redesenhar a Extensão do Navegador

## Visão Geral

Agora que construiu a estrutura HTML para a sua extensão de pegada de carbono no navegador, é hora de torná-la visualmente apelativa e fácil de usar. Um ótimo design melhora a experiência do utilizador e torna a sua extensão mais profissional e envolvente.

A sua extensão vem com um estilo CSS básico, mas este trabalho desafia-o a criar uma identidade visual única que reflita o seu estilo pessoal, mantendo uma excelente usabilidade.

## Instruções

### Parte 1: Analisar o Design Atual

Antes de fazer alterações, examine a estrutura CSS existente:

1. **Localize** os ficheiros CSS no seu projeto de extensão
2. **Revise** a abordagem atual de estilização e o esquema de cores
3. **Identifique** áreas para melhoria no layout, tipografia e hierarquia visual
4. **Considere** como o design apoia os objetivos do utilizador (fácil preenchimento do formulário e exibição clara dos dados)

### Parte 2: Desenhe a Sua Estilização Personalizada

Crie um design visual coeso que inclua:

**Esquema de Cores:**
- Escolha uma paleta de cores primária que reflita temas ambientais
- Garanta contraste suficiente para acessibilidade (utilize ferramentas como o verificador de contraste do WebAIM)
- Considere como as cores serão apresentadas em diferentes temas de navegador

**Tipografia:**
- Selecione fontes legíveis que funcionem bem em tamanhos pequenos da extensão
- Estabeleça uma hierarquia clara com tamanhos e pesos de fonte adequados
- Assegure que o texto permaneça legível em temas de navegador claros e escuros

**Layout e Espaçamento:**
- Melhore a organização visual dos elementos do formulário e da exibição de dados
- Adicione preenchimento e margens apropriadas para melhor legibilidade
- Considere princípios de design responsivo para diferentes tamanhos de ecrã

### Parte 3: Implemente o Seu Design

Modifique os ficheiros CSS para implementar o seu design:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Áreas principais a estilizar:**
- **Elementos do formulário**: campos de entrada, etiquetas e botão de envio
- **Exibição dos resultados**: recipiente de dados, estilo de texto e estados de carregamento
- **Elementos interativos**: efeitos ao passar o rato, estados dos botões e transições
- **Layout geral**: espaçamento do recipiente, cores de fundo e hierarquia visual

### Parte 4: Testar e Refinar

1. **Construa** a sua extensão com `npm run build`
2. **Carregue** a extensão atualizada no seu navegador
3. **Teste** todos os estados visuais (entrada do formulário, carregamento, exibição de resultados, erros)
4. **Verifique** a acessibilidade com ferramentas de desenvolvimento do navegador
5. **Aperfeiçoe** os seus estilos com base no uso real

## Desafios Criativos

### Nível Básico
- Atualize cores e fontes para criar um tema coeso
- Melhore o espaçamento e alinhamento em toda a interface
- Adicione efeitos subtis ao passar o rato em elementos interativos

### Nível Intermédio
- Desenhe ícones ou gráficos personalizados para a sua extensão
- Implemente transições suaves entre diferentes estados
- Crie uma animação de carregamento única para chamadas de API

### Nível Avançado
- Desenhe múltiplas opções de temas (claro/escuro/alto contraste)
- Implemente design responsivo para diferentes tamanhos de janela do navegador
- Adicione micro-interações que melhoram a experiência do utilizador

## Diretrizes de Entrega

O seu trabalho concluído deve incluir:

- **Ficheiros CSS modificados** com a sua estilização personalizada
- **Capturas de ecrã** mostrando a sua extensão em diferentes estados (formulário, carregamento, resultados)
- **Descrição breve** (2-3 frases) explicando as suas escolhas de design e como estas melhoram a experiência do utilizador

## Rubrica de Avaliação

| Critérios | Exemplary (4) | Proficient (3) | Developing (2) | Beginning (1) |
|----------|---------------|----------------|----------------|----------------|
| **Design Visual** | Design criativo e coeso que melhora a usabilidade e reflete sólidos princípios de design | Boas escolhas de design com estilo consistente e hierarquia visual clara | Melhorias básicas no design com algumas inconsistências | Alterações mínimas na estilização ou design inconsistente |
| **Funcionalidade** | Todos os estilos funcionam perfeitamente em diferentes estados e ambientes de navegador | Estilos funcionam bem com pequenos problemas em casos limite | A maioria dos estilos funciona com alguns problemas de exibição | Problemas significativos na estilização que afetam a usabilidade |
| **Qualidade do Código** | CSS limpo, bem organizado com nomes de classes significativos e seletores eficientes | Boa estrutura CSS com uso adequado de seletores e propriedades | CSS aceitável com algumas questões de organização | Estrutura CSS pobre ou estilização excessivamente complexa |
| **Acessibilidade** | Excelente contraste de cores, fontes legíveis e consideração para utilizadores com deficiências | Boas práticas de acessibilidade com pequenas áreas para melhoria | Considerações básicas de acessibilidade com alguns problemas | Atenção limitada aos requisitos de acessibilidade |

## Dicas para o Sucesso

> 💡 **Dica de Design**: Comece com alterações subtis e vá avançando para estilizações mais dramáticas. Pequenas melhorias em tipografia e espaçamento muitas vezes têm grande impacto na perceção da qualidade.

**Boas práticas a seguir:**
- **Teste** a sua extensão em temas claros e escuros do navegador
- **Use** unidades relativas (em, rem) para melhor escalabilidade
- **Mantenha** espaçamento consistente usando propriedades CSS customizadas
- **Considere** como o seu design será visto por utilizadores com diferentes necessidades visuais
- **Valide** o seu CSS para garantir que segue a sintaxe correta

> ⚠️ **Erro Comum**: Não sacrifique a usabilidade pela aparência visual. A sua extensão deve ser bonita e funcional.

**Lembre-se de:**
- **Manter** informação importante facilmente legível
- **Assegurar** que botões e elementos interativos são fáceis de clicar
- **Manter** feedback visual claro para as ações do utilizador
- **Testar** o seu design com dados reais, não apenas textos de espaço reservado

Boa sorte a criar uma extensão de navegador que seja funcional e visualmente impressionante!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para alcançar a maior precisão possível, informamos que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte oficial. Para informações críticas, recomenda-se a tradução profissional feita por um ser humano. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->