# Tarefa de Refatoração de CSS

## Objetivo

Transforme seu projeto de terrário para utilizar técnicas modernas de layout em CSS! Refatore a abordagem atual de posicionamento absoluto para implementar **Flexbox** ou **CSS Grid**, criando um design mais responsivo e fácil de manter. Este exercício desafia você a aplicar padrões modernos de CSS enquanto mantém o apelo visual do seu terrário.

Entender quando e como usar diferentes métodos de layout é uma habilidade essencial no desenvolvimento web moderno. Este exercício conecta técnicas tradicionais de posicionamento com sistemas contemporâneos de layout em CSS.

## Instruções da Tarefa

### Fase 1: Análise e Planejamento
1. **Revise o código atual do seu terrário** - Identifique quais elementos estão utilizando posicionamento absoluto
2. **Escolha seu método de layout** - Decida se Flexbox ou CSS Grid atende melhor aos seus objetivos de design
3. **Desenhe a nova estrutura de layout** - Planeje como os contêineres e os elementos das plantas serão organizados

### Fase 2: Implementação
1. **Crie uma nova versão** do seu projeto de terrário em uma pasta separada
2. **Atualize a estrutura HTML** conforme necessário para suportar o método de layout escolhido
3. **Refatore o CSS** para usar Flexbox ou CSS Grid em vez de posicionamento absoluto
4. **Mantenha a consistência visual** - Certifique-se de que as plantas e o jarro do terrário apareçam nas mesmas posições
5. **Implemente comportamento responsivo** - O layout deve se adaptar de forma fluida a diferentes tamanhos de tela

### Fase 3: Testes e Documentação
1. **Teste em diferentes navegadores** - Verifique se o design funciona no Chrome, Firefox, Edge e Safari
2. **Teste de responsividade** - Confira o layout em telas de celular, tablet e desktop
3. **Documentação** - Adicione comentários ao CSS explicando suas escolhas de layout
4. **Capturas de tela** - Registre imagens do seu terrário em diferentes navegadores e tamanhos de tela

## Requisitos Técnicos

### Implementação do Layout
- **Escolha UM**: Implemente Flexbox OU CSS Grid (não ambos para os mesmos elementos)
- **Design Responsivo**: Utilize unidades relativas (`rem`, `em`, `%`, `vw`, `vh`) em vez de pixels fixos
- **Acessibilidade**: Mantenha uma estrutura HTML semântica adequada e texto alternativo (alt text)
- **Qualidade do Código**: Use convenções de nomenclatura consistentes e organize o CSS de forma lógica

### Recursos Modernos de CSS para Incluir
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

### Requisitos de Suporte a Navegadores
- **Chrome/Edge**: Últimas 2 versões
- **Firefox**: Últimas 2 versões  
- **Safari**: Últimas 2 versões
- **Navegadores móveis**: Safari no iOS, Chrome Mobile

## Entregáveis

1. **Arquivo HTML atualizado** com estrutura semântica aprimorada
2. **Arquivo CSS refatorado** utilizando técnicas modernas de layout
3. **Coleção de capturas de tela** mostrando compatibilidade entre navegadores:
   - Visualização em desktop (1920x1080)
   - Visualização em tablet (768x1024) 
   - Visualização em celular (375x667)
   - Pelo menos 2 navegadores diferentes
4. **Arquivo README.md** documentando:
   - Sua escolha de layout (Flexbox vs Grid) e justificativa
   - Desafios enfrentados durante a refatoração
   - Observações sobre compatibilidade entre navegadores
   - Instruções para executar seu código

## Critérios de Avaliação

| Critério | Exemplar (4) | Proficiente (3) | Em Desenvolvimento (2) | Iniciante (1) |
|----------|--------------|-----------------|--------------------------|---------------|
| **Implementação do Layout** | Uso magistral de Flexbox/Grid com recursos avançados; totalmente responsivo | Implementação correta com bom comportamento responsivo | Implementação básica com pequenos problemas de responsividade | Implementação incompleta ou incorreta |
| **Qualidade do Código** | CSS limpo, bem organizado, com comentários significativos e nomenclatura consistente | Boa organização com alguns comentários | Organização adequada com poucos comentários | Organização ruim; difícil de entender |
| **Compatibilidade entre Navegadores** | Consistência perfeita em todos os navegadores exigidos com capturas de tela | Boa compatibilidade com pequenas diferenças documentadas | Alguns problemas de compatibilidade que não quebram a funcionalidade | Problemas graves de compatibilidade ou testes ausentes |
| **Design Responsivo** | Abordagem excepcional mobile-first com transições suaves | Bom comportamento responsivo com pontos de quebra apropriados | Recursos básicos de responsividade com alguns problemas de layout | Comportamento responsivo limitado ou quebrado |
| **Documentação** | README abrangente com explicações detalhadas e insights | Boa documentação cobrindo todos os elementos exigidos | Documentação básica com explicações mínimas | Documentação incompleta ou ausente |

## Recursos Úteis

### Guias de Métodos de Layout
- 📖 [Guia Completo de Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Guia Completo de CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Escolha a Ferramenta Certa](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)

### Ferramentas de Teste de Navegadores
- 🛠️ [Modo Responsivo do DevTools do Navegador](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Suporte a Recursos](https://caniuse.com/)
- 🛠️ [BrowserStack - Teste entre Navegadores](https://www.browserstack.com/)

### Ferramentas de Qualidade de Código
- ✅ [Validador de CSS](https://jigsaw.w3.org/css-validator/)
- ✅ [Validador de HTML](https://validator.w3.org/)
- ✅ [Verificador de Contraste WebAIM](https://webaim.org/resources/contrastchecker/)

## Desafios Extras

🌟 **Layouts Avançados**: Implemente tanto Flexbox QUANTO Grid em diferentes partes do seu design  
🌟 **Integração de Animações**: Adicione transições ou animações em CSS que funcionem com seu novo layout  
🌟 **Modo Escuro**: Implemente um alternador de tema baseado em propriedades customizadas de CSS  
🌟 **Consultas de Contêiner**: Utilize técnicas modernas de consulta de contêiner para responsividade em nível de componente  

> 💡 **Lembre-se**: O objetivo não é apenas fazer funcionar, mas entender POR QUE o método de layout escolhido é a melhor solução para este desafio de design específico!

---

**Aviso Legal**:  
Este documento foi traduzido usando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional feita por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.