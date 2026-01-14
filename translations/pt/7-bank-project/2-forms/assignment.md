<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2026-01-06T18:10:07+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "pt"
}
-->
# Estilize a Sua Aplicação Bancária com CSS Moderno

## Visão Geral do Projeto

Transforme a sua aplicação bancária funcional numa aplicação web visualmente apelativa e com aparência profissional, utilizando técnicas modernas de CSS. Vai criar um sistema de design coeso que melhora a experiência do utilizador, mantendo os princípios de acessibilidade e design responsivo.

Este exercício desafia-o a aplicar padrões contemporâneos de design web, implementar uma identidade visual consistente e criar uma interface que os utilizadores achem tanto atraente como intuitiva para navegar.

## Instruções

### Passo 1: Configure a Sua Folha de Estilos

**Crie a sua base CSS:**

1. **Crie** um novo ficheiro chamado `styles.css` na raiz do seu projeto  
2. **Ligue** a folha de estilos no seu ficheiro `index.html`:  
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Comece** com reset CSS e predefinições modernas:  
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

### Passo 2: Requisitos do Sistema de Design

**Implemente estes elementos essenciais de design:**

#### Paleta de Cores
- **Cor primária**: Escolha uma cor profissional para botões e realces  
- **Cor secundária**: Cor complementar para acentos e ações secundárias  
- **Cores neutras**: Cinzentos para texto, bordas e fundos  
- **Cores de sucesso/erro**: Verde para estados de sucesso, vermelho para erros  

#### Tipografia
- **Hierarquia de títulos**: Distinção clara entre elementos H1, H2, e H3  
- **Texto corpo**: Tamanho de fonte legível (mínimo 16px) e altura de linha adequada  
- **Etiquetas de formulário**: Estilo de texto claro e acessível  

#### Layout e Espaçamento
- **Espaçamento consistente**: Use uma escala de espaçamento (8px, 16px, 24px, 32px)  
- **Sistema de grelha**: Layout organizado para formulários e secções de conteúdo  
- **Design responsivo**: Abordagem mobile-first com pontos de interrupção  

### Passo 3: Estilização dos Componentes

**Estilize estes componentes específicos:**

#### Formulários
- **Campos de entrada**: Bordas profissionais, estados de foco e estilos de validação  
- **Botões**: Efeitos de hover, estados desabilitados e indicadores de carregamento  
- **Etiquetas**: Posicionamento claro e indicadores de campos obrigatórios  
- **Mensagens de erro**: Estilos visíveis para erros e mensagens úteis  

#### Navegação
- **Cabeçalho**: Área de navegação limpa e com branding  
- **Links**: Estados de hover claros e indicadores ativos  
- **Logotipo/Título**: Elemento de branding distintivo  

#### Áreas de Conteúdo
- **Secções**: Separação visual clara entre diferentes áreas  
- **Cartões**: Se usar layouts baseados em cartões, inclua sombras e bordas  
- **Fundos**: Utilização apropriada de espaço branco e fundos subtis  

### Passo 4: Funcionalidades Avançadas (Opcional)

**Considere implementar estas funcionalidades avançadas:**  
- **Modo escuro**: Alternância entre temas claro e escuro  
- **Animações**: Transições subtis e micro-interações  
- **Estados de carregamento**: Feedback visual durante submissão de formulários  
- **Imagens responsivas**: Imagens otimizadas para diferentes tamanhos de ecrã  

## Inspiração para o Design

**Características de uma aplicação bancária moderna:**  
- **Design limpo e minimalista** com bastante espaço branco  
- **Esquemas de cores profissionais** (azuis, verdes, ou neutros sofisticados)  
- **Hierarquia visual clara** com botões de chamada à ação proeminentes  
- **Contrastes acessíveis** que cumprem as diretrizes WCAG  
- **Layouts responsivos para dispositivos móveis** que funcionam em todos os dispositivos  

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
- **Contraste de cores**: Assegurar pelo menos uma relação de 4.5:1 para texto normal  
- **Indicadores de foco**: Estados de foco visíveis para navegação por teclado  
- **Etiquetas de formulário**: Associadas corretamente aos campos  
- **Design responsivo**: Usável em ecrãs desde 320px até 1920px de largura  

## Rubrica de Avaliação

| Critério | Exemplar (A) | Competente (B) | Em Desenvolvimento (C) | Necessita Melhorias (F) |
|----------|--------------|----------------|------------------------|------------------------|
| **Sistema de Design** | Implementa sistema de design completo com cores, tipografia e espaçamento consistentes | Usa estilo consistente com padrões claros de design e boa hierarquia visual | Estilo básico aplicado com algumas inconsistências ou elementos de design em falta | Estilo mínimo com escolhas inconsistentes ou conflitantes de design |
| **Experiência do Utilizador** | Cria interface intuitiva e profissional com excelente usabilidade e apelo visual | Proporciona boa experiência com navegação clara e conteúdo legível | Usabilidade básica com algumas melhorias UX necessárias | Usabilidade deficiente, difícil de navegar ou ler |
| **Implementação Técnica** | Usa técnicas modernas de CSS, código organizado e segue as melhores práticas | Implementa CSS eficazmente com boa organização e técnicas apropriadas | CSS funciona corretamente, mas pode faltar organização ou abordagens modernas | Implementação CSS pobre com problemas técnicos ou de compatibilidade entre navegadores |
| **Design Responsivo** | Design totalmente responsivo que funciona perfeitamente em todos os tamanhos de dispositivo | Bom comportamento responsivo com pequenas questões em alguns tamanhos de ecrã | Implementação responsiva básica com algumas falhas de layout | Não responsivo ou problemas significativos em dispositivos móveis |
| **Acessibilidade** | Cumpre as diretrizes WCAG com excelente navegação por teclado e suporte a leitores de ecrã | Boas práticas de acessibilidade com contraste e indicadores de foco adequados | Considerações básicas de acessibilidade com alguns elementos em falta | Má acessibilidade, difícil para utilizadores com deficiências |

## Orientações para Entrega

**Inclua na sua submissão:**  
- **styles.css**: A sua folha de estilos completa  
- **HTML atualizado**: Quaisquer modificações feitas no HTML  
- **Capturas de ecrã**: Imagens que mostram o seu design no desktop e no telemóvel  
- **README**: Breve descrição das escolhas de design e paleta de cores  

**Pontos bónus para:**  
- **Propriedades customizadas CSS** para tematização sustentável  
- **Funcionalidades CSS avançadas** como Grid, Flexbox ou animações CSS  
- **Considerações de desempenho** como CSS otimizado e tamanho mínimo de ficheiro  
- **Testes cross-browser** garantindo compatibilidade entre diferentes navegadores  

> 💡 **Dica Profissional**: Comece por desenhar para telemóveis primeiro e depois melhore para ecrãs maiores. Esta abordagem mobile-first assegura que a sua aplicação funciona bem em todos os dispositivos e segue as melhores práticas atuais de desenvolvimento web.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos por garantir a precisão, por favor esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado como a fonte oficial. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->