<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2025-10-22T23:12:41+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "br"
}
-->
# Estilize Seu App Bancário com CSS Moderno

## Visão Geral do Projeto

Transforme seu aplicativo bancário funcional em um web app visualmente atraente e profissional utilizando técnicas modernas de CSS. Você criará um sistema de design coeso que melhora a experiência do usuário, mantendo os princípios de acessibilidade e design responsivo.

Este desafio propõe que você aplique padrões contemporâneos de design web, implemente uma identidade visual consistente e crie uma interface que os usuários considerem atraente e intuitiva para navegar.

## Instruções

### Etapa 1: Configure sua Folha de Estilo

**Crie a base do seu CSS:**

1. **Crie** um novo arquivo chamado `styles.css` na raiz do seu projeto.
2. **Linke** a folha de estilo no seu arquivo `index.html`:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Comece** com um reset de CSS e padrões modernos:
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```


### Etapa 2: Requisitos do Sistema de Design

**Implemente estes elementos essenciais de design:**

#### Paleta de Cores
- **Cor primária**: Escolha uma cor profissional para botões e destaques.
- **Cor secundária**: Cor complementar para ações secundárias e detalhes.
- **Cores neutras**: Tons de cinza para texto, bordas e fundos.
- **Cores de sucesso/erro**: Verde para estados de sucesso, vermelho para erros.

#### Tipografia
- **Hierarquia de títulos**: Distinção clara entre elementos H1, H2 e H3.
- **Texto do corpo**: Tamanho de fonte legível (mínimo de 16px) e altura de linha apropriada.
- **Rótulos de formulário**: Estilo de texto claro e acessível.

#### Layout e Espaçamento
- **Espaçamento consistente**: Use uma escala de espaçamento (8px, 16px, 24px, 32px).
- **Sistema de grid**: Layout organizado para formulários e seções de conteúdo.
- **Design responsivo**: Abordagem mobile-first com pontos de quebra.

### Etapa 3: Estilização de Componentes

**Estilize estes componentes específicos:**

#### Formulários
- **Campos de entrada**: Bordas profissionais, estados de foco e estilo de validação.
- **Botões**: Efeitos de hover, estados desativados e indicadores de carregamento.
- **Rótulos**: Posicionamento claro e indicadores de campos obrigatórios.
- **Mensagens de erro**: Estilo de erro visível e mensagens úteis.

#### Navegação
- **Cabeçalho**: Área de navegação limpa e com identidade visual.
- **Links**: Estados de hover claros e indicadores de ativo.
- **Logo/Título**: Elemento de marca distintivo.

#### Áreas de Conteúdo
- **Seções**: Separação visual clara entre diferentes áreas.
- **Cartões**: Se usar layouts baseados em cartões, inclua sombras e bordas.
- **Fundos**: Uso apropriado de espaços em branco e fundos sutis.

### Etapa 4: Recursos Avançados (Opcional)

**Considere implementar estes recursos avançados:**
- **Modo escuro**: Alternância entre temas claro e escuro.
- **Animações**: Transições sutis e micro-interações.
- **Estados de carregamento**: Feedback visual durante envios de formulários.
- **Imagens responsivas**: Imagens otimizadas para diferentes tamanhos de tela.

## Inspiração de Design

**Características de apps bancários modernos:**
- **Design limpo e minimalista** com bastante espaço em branco.
- **Esquemas de cores profissionais** (azuis, verdes ou neutros sofisticados).
- **Hierarquia visual clara** com botões de chamada para ação destacados.
- **Relações de contraste acessíveis** que atendem às diretrizes do WCAG.
- **Layouts responsivos** que funcionam em todos os dispositivos.

## Requisitos Técnicos

### Organização do CSS
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```


### Requisitos de Acessibilidade
- **Contraste de cores**: Garanta uma relação de pelo menos 4.5:1 para texto normal.
- **Indicadores de foco**: Estados de foco visíveis para navegação por teclado.
- **Rótulos de formulário**: Associados corretamente aos campos de entrada.
- **Design responsivo**: Utilizável em telas de 320px a 1920px de largura.

## Critérios de Avaliação

| Critério | Exemplar (A) | Proficiente (B) | Em Desenvolvimento (C) | Necessita Melhorar (F) |
|----------|---------------|-----------------|--------------------------|------------------------|
| **Sistema de Design** | Implementa um sistema de design abrangente com cores, tipografia e espaçamento consistentes em todo o projeto | Usa estilos consistentes com padrões claros de design e boa hierarquia visual | Estilização básica aplicada com alguns problemas de consistência ou elementos de design ausentes | Estilização mínima com escolhas de design inconsistentes ou conflitantes |
| **Experiência do Usuário** | Cria uma interface intuitiva e profissional com excelente usabilidade e apelo visual | Proporciona boa experiência ao usuário com navegação clara e conteúdo legível | Usabilidade básica com necessidade de algumas melhorias | Usabilidade ruim, difícil de navegar ou ler |
| **Implementação Técnica** | Utiliza técnicas modernas de CSS, estrutura de código organizada e segue as melhores práticas | Implementa CSS de forma eficaz com boa organização e técnicas apropriadas | CSS funciona corretamente, mas pode carecer de organização ou abordagens modernas | Implementação de CSS ruim com problemas técnicos ou de compatibilidade entre navegadores |
| **Design Responsivo** | Design totalmente responsivo que funciona perfeitamente em todos os tamanhos de dispositivos | Bom comportamento responsivo com pequenos problemas em alguns tamanhos de tela | Implementação responsiva básica com alguns problemas de layout | Não é responsivo ou apresenta problemas significativos em dispositivos móveis |
| **Acessibilidade** | Atende às diretrizes do WCAG com excelente navegação por teclado e suporte a leitores de tela | Boas práticas de acessibilidade com contraste e indicadores de foco adequados | Considerações básicas de acessibilidade com alguns elementos ausentes | Acessibilidade ruim, difícil para usuários com deficiência |

## Diretrizes de Submissão

**Inclua na sua submissão:**
- **styles.css**: Sua folha de estilo completa.
- **HTML atualizado**: Quaisquer modificações feitas no HTML.
- **Capturas de tela**: Imagens mostrando seu design em desktop e mobile.
- **README**: Breve descrição de suas escolhas de design e paleta de cores.

**Pontos extras para:**
- **Propriedades customizadas de CSS** para temas mais fáceis de manter.
- **Recursos avançados de CSS** como Grid, Flexbox ou animações CSS.
- **Considerações de desempenho** como CSS otimizado e tamanho de arquivo mínimo.
- **Testes entre navegadores** garantindo compatibilidade em diferentes navegadores.

> 💡 **Dica Profissional**: Comece com o design para dispositivos móveis primeiro e depois melhore para telas maiores. Essa abordagem mobile-first garante que seu app funcione bem em todos os dispositivos e siga as melhores práticas de desenvolvimento web moderno.

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional feita por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.