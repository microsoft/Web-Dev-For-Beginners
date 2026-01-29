# Tarefa de Refatoração CSS

## Objetivo

Transforma o teu projeto terrário para usar técnicas modernas de layout CSS! Refatora a abordagem atual de posicionamento absoluto para implementar **Flexbox** ou **CSS Grid** para um design mais sustentável e responsivo. Esta tarefa desafia-te a aplicar os padrões modernos de CSS mantendo a atratividade visual do teu terrário.

Compreender quando e como usar diferentes métodos de layout é uma competência crucial para o desenvolvimento web moderno. Este exercício liga as técnicas tradicionais de posicionamento com sistemas contemporâneos de layout CSS.

## Instruções da Tarefa

### Fase 1: Análise e Planeamento
1. **Revisão do teu código atual do terrário** - Identifica quais elementos estão atualmente a usar posicionamento absoluto
2. **Escolhe o teu método de layout** - Decide se Flexbox ou CSS Grid se adequam melhor aos teus objetivos de design
3. **Faz um esboço da nova estrutura de layout** - Planeia como os contentores e elementos das plantas serão organizados

### Fase 2: Implementação
1. **Cria uma nova versão** do teu projeto terrário numa pasta separada
2. **Atualiza a estrutura HTML** conforme necessário para suportar o método de layout escolhido
3. **Refatora o CSS** para usar Flexbox ou CSS Grid em vez de posicionamento absoluto
4. **Mantém a consistência visual** - Garante que as plantas e o frasco do terrário apareçam nas mesmas posições
5. **Implementa comportamento responsivo** - O teu layout deve adaptar-se de forma suave a diferentes tamanhos de ecrã

### Fase 3: Teste e Documentação
1. **Teste em vários navegadores** - Verifica se o teu design funciona no Chrome, Firefox, Edge e Safari
2. **Teste responsivo** - Verifica o teu layout em dispositivos móveis, tablet e desktop
3. **Documentação** - Adiciona comentários ao teu CSS explicando as opções de layout
4. **Capturas de ecrã** - Captura imagens do teu terrário em diferentes navegadores e tamanhos de ecrã

## Requisitos Técnicos

### Implementação do Layout
- **Escolhe UM**: Implementa Flexbox OU CSS Grid (não ambos para os mesmos elementos)
- **Design Responsivo**: Usa unidades relativas (`rem`, `em`, `%`, `vw`, `vh`) em vez de pixels fixos
- **Acessibilidade**: Mantém uma estrutura HTML semântica adequada e texto alternativo
- **Qualidade do Código**: Usa convenções de nomenclatura consistentes e organiza o CSS de forma lógica

### Funcionalidades Modernas de CSS a Incluir
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Requisitos de Suporte aos Navegadores
- **Chrome/Edge**: 2 versões mais recentes
- **Firefox**: 2 versões mais recentes  
- **Safari**: 2 versões mais recentes
- **Navegadores móveis**: iOS Safari, Chrome Mobile

## Entregáveis

1. **Ficheiro HTML atualizado** com estrutura semântica melhorada
2. **Ficheiro CSS refatorado** usando técnicas modernas de layout
3. **Coleção de capturas de ecrã** mostrando compatibilidade entre navegadores:
   - Visualização desktop (1920x1080)
   - Visualização tablet (768x1024) 
   - Visualização móvel (375x667)
   - Pelo menos 2 navegadores diferentes
4. **Ficheiro README.md** documentando:
   - A tua escolha de layout (Flexbox vs Grid) e os motivos
   - Desafios enfrentados durante a refatoração
   - Notas sobre compatibilidade dos navegadores
   - Instruções para executar o teu código

## Rubrica de Avaliação

| Critério | Exemplar (4) | Proficiente (3) | Em desenvolvimento (2) | Iniciante (1) |
|----------|--------------|-----------------|-----------------------|---------------|
| **Implementação do Layout** | Uso magistral de Flexbox/Grid com funcionalidades avançadas; totalmente responsivo | Implementação correta com bom comportamento responsivo | Implementação básica com pequenas falhas responsivas | Implementação incompleta ou incorreta do layout |
| **Qualidade do Código** | CSS limpo e bem organizado com comentários úteis e nomenclatura consistente | Boa organização com alguns comentários | Organização adequada com poucos comentários | Organização pobre; difícil de entender |
| **Compatibilidade entre Navegadores** | Consistência perfeita em todos os navegadores exigidos com capturas de ecrã | Boa compatibilidade com pequenas diferenças documentadas | Algumas incompatibilidades que não afetam funcionalidade | Problemas graves de compatibilidade ou falta de testes |
| **Design Responsivo** | Abordagem mobile-first excepcional com pontos de ruptura suaves | Bom comportamento responsivo com pontos de ruptura adequados | Funcionalidades responsivas básicas com algumas falhas no layout | Comportamento responsivo limitado ou ausente |
| **Documentação** | README abrangente com explicações detalhadas e insights | Boa documentação cobrindo todos os elementos necessários | Documentação básica com explicações mínimas | Documentação incompleta ou ausente |

## Recursos Úteis

### Guias de Métodos de Layout
- 📖 [Um Guia Completo para Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Um Guia Completo para CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid – Escolhe a Ferramenta Correta](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Ferramentas de Teste em Navegadores
- 🛠️ [Modo Responsivo das Ferramentas de Desenvolvimento do Navegador](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use – Suporte a Funcionalidades](https://caniuse.com/)
- 🛠️ [BrowserStack – Teste entre Navegadores](https://www.browserstack.com/)

### Ferramentas de Qualidade de Código
- ✅ [Validador CSS](https://jigsaw.w3.org/css-validator/)
- ✅ [Validador HTML](https://validator.w3.org/)
- ✅ [Verificador de Contraste WebAIM](https://webaim.org/resources/contrastchecker/)

## Desafios Bónus

🌟 **Layouts Avançados**: Implementa Flexbox E Grid em diferentes partes do teu design  
🌟 **Integração de Animação**: Adiciona transições ou animações CSS que trabalhem com o teu novo layout  
🌟 **Modo Escuro**: Implementa um alternador de tema baseado em propriedades CSS personalizadas  
🌟 **Consultas de Contentor**: Usa técnicas modernas de consultas de contentor para responsividade ao nível de componentes

> 💡 **Lembra-te**: O objetivo não é apenas fazê-lo funcionar, mas entender PORQUE o método de layout escolhido é a melhor solução para este desafio de design em particular!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora esforcemo-nos por garantir a precisão, por favor esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->