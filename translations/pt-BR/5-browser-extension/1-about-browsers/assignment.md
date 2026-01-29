# Tarefa: Redefina o Estilo da Sua Extensão de Navegador

## Visão Geral

Agora que você construiu a estrutura HTML para sua extensão de navegador sobre pegada de carbono, é hora de torná-la visualmente atraente e fácil de usar. Um bom design melhora a experiência do usuário e torna sua extensão mais profissional e envolvente.

Sua extensão já possui um estilo básico em CSS, mas esta tarefa desafia você a criar uma identidade visual única que reflita seu estilo pessoal, mantendo uma excelente usabilidade.

## Instruções

### Parte 1: Analise o Design Atual

Antes de fazer alterações, examine a estrutura atual do CSS:

1. **Localize** os arquivos CSS no projeto da sua extensão
2. **Revise** a abordagem de estilo e esquema de cores atual
3. **Identifique** áreas que podem ser melhoradas em layout, tipografia e hierarquia visual
4. **Considere** como o design apoia os objetivos do usuário (preenchimento fácil de formulários e exibição clara de dados)

### Parte 2: Crie Seu Estilo Personalizado

Desenvolva um design visual coeso que inclua:

**Esquema de Cores:**
- Escolha uma paleta de cores primária que reflita temas ambientais
- Garanta contraste suficiente para acessibilidade (use ferramentas como o verificador de contraste do WebAIM)
- Considere como as cores aparecerão em diferentes temas de navegador

**Tipografia:**
- Selecione fontes legíveis que funcionem bem em tamanhos pequenos de extensão
- Estabeleça uma hierarquia clara com tamanhos e pesos de fonte apropriados
- Certifique-se de que o texto permaneça legível em temas claros e escuros de navegador

**Layout e Espaçamento:**
- Melhore a organização visual dos elementos do formulário e exibição de dados
- Adicione espaçamento e margens adequados para melhor legibilidade
- Considere princípios de design responsivo para diferentes tamanhos de tela

### Parte 3: Implemente Seu Design

Modifique os arquivos CSS para implementar seu design:

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

**Áreas principais para estilizar:**
- **Elementos do formulário**: Campos de entrada, rótulos e botão de envio
- **Exibição de resultados**: Contêiner de dados, estilo de texto e estados de carregamento
- **Elementos interativos**: Efeitos de hover, estados de botão e transições
- **Layout geral**: Espaçamento dos contêineres, cores de fundo e hierarquia visual

### Parte 4: Teste e Aperfeiçoe

1. **Compile** sua extensão com `npm run build`
2. **Carregue** a extensão atualizada no seu navegador
3. **Teste** todos os estados visuais (entrada no formulário, carregamento, exibição de resultados, erros)
4. **Verifique** a acessibilidade com as ferramentas de desenvolvedor do navegador
5. **Aperfeiçoe** seus estilos com base no uso real

## Desafios Criativos

### Nível Básico
- Atualize cores e fontes para criar um tema coeso
- Melhore o espaçamento e alinhamento em toda a interface
- Adicione efeitos sutis de hover aos elementos interativos

### Nível Intermediário
- Crie ícones ou gráficos personalizados para sua extensão
- Implemente transições suaves entre diferentes estados
- Desenvolva uma animação única de carregamento para chamadas de API

### Nível Avançado
- Projete opções de múltiplos temas (claro/escuro/alto contraste)
- Implemente design responsivo para diferentes tamanhos de janela do navegador
- Adicione microinterações que melhorem a experiência do usuário

## Diretrizes de Envio

Sua tarefa concluída deve incluir:

- **Arquivos CSS modificados** com seu estilo personalizado
- **Capturas de tela** mostrando sua extensão em diferentes estados (formulário, carregamento, resultados)
- **Descrição breve** (2-3 frases) explicando suas escolhas de design e como elas melhoram a experiência do usuário

## Rubrica de Avaliação

| Critério | Exemplar (4) | Proficiente (3) | Em Desenvolvimento (2) | Inicial (1) |
|----------|---------------|-----------------|--------------------------|-------------|
| **Design Visual** | Design criativo e coeso que melhora a usabilidade e reflete fortes princípios de design | Boas escolhas de design com estilo consistente e hierarquia visual clara | Melhorias básicas no design com alguns problemas de consistência | Alterações mínimas de estilo ou design inconsistente |
| **Funcionalidade** | Todos os estilos funcionam perfeitamente em diferentes estados e ambientes de navegador | Estilos funcionam bem com pequenos problemas em casos extremos | A maioria dos estilos funciona com alguns problemas de exibição | Problemas significativos de estilo que impactam a usabilidade |
| **Qualidade do Código** | CSS limpo e bem organizado com nomes de classes significativos e seletores eficientes | Boa estrutura de CSS com uso apropriado de seletores e propriedades | CSS aceitável com alguns problemas de organização | Estrutura de CSS ruim ou estilo excessivamente complexo |
| **Acessibilidade** | Excelente contraste de cores, fontes legíveis e consideração para usuários com deficiência | Boas práticas de acessibilidade com pequenas áreas para melhoria | Considerações básicas de acessibilidade com alguns problemas | Atenção limitada aos requisitos de acessibilidade |

## Dicas para Sucesso

> 💡 **Dica de Design**: Comece com mudanças sutis e evolua para estilos mais dramáticos. Pequenas melhorias em tipografia e espaçamento frequentemente têm grandes impactos na percepção de qualidade.

**Melhores práticas a seguir:**
- **Teste** sua extensão em temas claros e escuros de navegador
- **Use** unidades relativas (em, rem) para melhor escalabilidade
- **Mantenha** espaçamento consistente usando propriedades personalizadas de CSS
- **Considere** como seu design será visto por usuários com diferentes necessidades visuais
- **Valide** seu CSS para garantir que segue a sintaxe correta

> ⚠️ **Erro Comum**: Não sacrifique a usabilidade pela aparência visual. Sua extensão deve ser bonita e funcional.

**Lembre-se de:**
- **Manter** informações importantes facilmente legíveis
- **Garantir** que botões e elementos interativos sejam fáceis de clicar
- **Preservar** feedback visual claro para ações do usuário
- **Testar** seu design com dados reais, não apenas texto de espaço reservado

Boa sorte na criação de uma extensão de navegador que seja funcional e visualmente impressionante!

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.