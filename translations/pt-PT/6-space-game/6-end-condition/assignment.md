# Criar um Jogo de Exemplo

## Visão Geral da Tarefa

Agora que dominaste as condições de fim de jogo e a funcionalidade de reinício no teu jogo espacial, é hora de aplicares esses conceitos a uma experiência de jogo completamente nova. Vais conceber e construir o teu próprio jogo que demonstre diferentes padrões de condições de fim e mecânicas de reinício.

Esta tarefa desafia-te a pensar criativamente sobre design de jogos enquanto praticas as competências técnicas que aprendeste. Vais explorar diferentes cenários de vitória e derrota, implementar progressão do jogador e criar experiências de reinício envolventes.

## Requisitos do Projeto

### Funcionalidades Principais do Jogo

O teu jogo deve incluir os seguintes elementos essenciais:

**Variedade de Condições de Fim**: Implementa pelo menos duas maneiras diferentes de o jogo terminar:
- **Vitória baseada em pontos**: jogador atinge uma pontuação alvo ou recolhe itens específicos
- **Derrota baseada em vidas**: jogador perde todas as vidas ou pontos de saúde disponíveis
- **Conclusão de objetivos**: todos os inimigos derrotados, itens específicos recolhidos, ou metas alcançadas
- **Baseado em tempo**: o jogo termina após uma duração definida ou quando a contagem decrescente chega a zero

**Funcionalidade de Reinício**: 
- **Limpar estado do jogo**: remover todos os objetos do jogo anteriores e reiniciar variáveis
- **Reinicializar sistemas**: começar de novo com novas estatísticas do jogador, inimigos e objetivos
- **Controlo intuitivo**: fornecer instruções claras para reiniciar o jogo

**Feedback ao Jogador**:
- **Mensagens de vitória**: celebrar conquistas do jogador com feedback positivo
- **Mensagens de derrota**: fornecer mensagens encorajadoras que motivem a nova tentativa
- **Indicadores de progresso**: mostrar pontuação atual, vidas ou estado do objetivo

### Ideias e Inspiração para o Jogo

Escolhe um destes conceitos de jogo ou cria o teu próprio:

#### 1. Jogo de Aventura em Console
Cria uma aventura baseada em texto com mecânicas de combate:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Características chave a implementar:**
- **Combate por turnos** com diferentes opções de ataque
- **Pontos de saúde** para jogador e inimigos
- **Sistema de inventário** para recolher moedas ou itens
- **Múltiplos tipos de inimigos** com dificuldades variadas
- **Condição de vitória** quando todos os inimigos forem derrotados

#### 2. Jogo de Colecção
- **Objetivo**: Recolher itens específicos enquanto evitam obstáculos
- **Condições de fim**: Alcançar a contagem-alvo de itens ou perder todas as vidas
- **Progressão**: Os itens tornam-se mais difíceis de alcançar conforme o jogo avança

#### 3. Jogo de Puzzle
- **Objetivo**: Resolver puzzles cada vez mais difíceis
- **Condições de fim**: Completar todos os níveis ou ficar sem movimentos/tempo
- **Reinício**: Recomeçar no primeiro nível com progresso apagado

#### 4. Jogo de Defesa
- **Objetivo**: Proteger a tua base de ondas de inimigos
- **Condições de fim**: Sobreviver a todas as ondas (vitória) ou base destruída (derrota)
- **Progressão**: Ondas de inimigos aumentam em dificuldade e número

## Diretrizes de Implementação

### Começar

1. **Planeia o design do teu jogo**:
   - Esboça o ciclo básico de jogabilidade
   - Define claramente as tuas condições de fim de jogo
   - Identifica que dados precisam de ser reiniciados no reinício

2. **Configura a estrutura do teu projeto**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Cria o ciclo principal do jogo**:
   - Inicializa o estado do jogo
   - Trata a entrada do utilizador
   - Atualiza a lógica do jogo
   - Verifica as condições de fim
   - Renderiza o estado atual

### Requisitos Técnicos

**Usa JavaScript Moderno**: 
- Aplica `const` e `let` para declarações de variáveis
- Usa funções arrow onde apropriado
- Implementa funcionalidades ES6+ como template literals e destructuring

**Arquitetura Orientada a Eventos**:
- Cria manipuladores de evento para interações do utilizador
- Implementa alterações do estado do jogo através de eventos
- Usa event listeners para funcionalidade de reinício

**Boas Práticas de Código Limpo**:
- Escreve funções com responsabilidades únicas
- Usa nomes descritivos para variáveis e funções
- Adiciona comentários que expliquem lógica e regras do jogo
- Organiza o código em secções lógicas

## Requisitos de Submissão

### Entregáveis

1. **Ficheiros completos do jogo**: Todos os ficheiros HTML, CSS e JavaScript necessários para executar o teu jogo
2. **README.md**: Documentação explicando:
   - Como jogar o teu jogo
   - Quais condições de fim implementaste
   - Instruções para reiniciar
   - Qualquer funcionalidade ou mecânica especial
3. **Comentários no código**: Explicações claras da lógica e algoritmos do jogo

### Lista de Verificação para Testes

Antes de submeter, verifica que o teu jogo:

- [ ] **Corre sem erros** na consola do browser
- [ ] **Implementa múltiplas condições de fim** conforme especificado
- [ ] **Reinicia corretamente** com estado limpo
- [ ] **Fornece feedback claro** aos jogadores sobre o estado do jogo
- [ ] **Usa sintaxe e boas práticas de JavaScript moderno**
- [ ] **Inclui documentação abrangente** no README.md

## Rubrica de Avaliação

| Critério | Exemplar (4) | Proficiente (3) | Em Desenvolvimento (2) | Iniciante (1) |
|----------|---------------|-----------------|------------------------|---------------|
| **Funcionalidade do Jogo** | Jogo completo com múltiplas condições de fim, reinício fluido e experiência polida | Jogo completo com condições básicas de fim e reinício funcional | Jogo parcial com algumas condições de fim, reinício pode ter pequenos problemas | Jogo incompleto com funcionalidade limitada e erros significativos |
| **Qualidade do Código** | Código limpo, bem organizado, com boas práticas JS modernas, comentários abrangentes e excelente estrutura | Boa organização do código com sintaxe moderna, comentários adequados e estrutura clara | Organização básica do código com algumas práticas modernas, comentários mínimos | Organização pobre do código, sintaxe desatualizada, falta de comentários e estrutura |
| **Experiência do Utilizador** | Jogabilidade intuitiva com instruções claras, feedback excelente e experiência envolvente de fim/reinício | Boa jogabilidade com instruções e feedback adequados, fim/reinício funcional | Jogabilidade básica com instruções mínimas, feedback limitado sobre estado do jogo | Jogabilidade confusa com instruções pouco claras e mau feedback ao utilizador |
| **Implementação Técnica** | Demonstra domínio de conceitos de desenvolvimento de jogos, manipulação de eventos e gestão de estado | Demonstra boa compreensão dos conceitos de jogo com boa implementação | Compreensão básica com implementação aceitável | Compreensão limitada com implementação pobre |
| **Documentação** | README completo com instruções claras, código bem documentado e testes completos | Boa documentação com instruções claras e comentários adequados no código | Documentação básica com instruções mínimas | Documentação pobre ou inexistente |

### Escala de Avaliação
- **Exemplar (16-20 pontos)**: Excede expectativas com funcionalidades criativas e implementação polida
- **Proficiente (12-15 pontos)**: Cumpre todos os requisitos com execução sólida
- **Em Desenvolvimento (8-11 pontos)**: Cumpre a maioria dos requisitos com pequenos problemas
- **Iniciante (4-7 pontos)**: Cumpre alguns requisitos mas necessita de melhorias significativas

## Recursos Adicionais para Aprendizagem

- [Guia de Desenvolvimento de Jogos MDN](https://developer.mozilla.org/en-US/docs/Games)
- [Tutoriais de Desenvolvimento de Jogos JavaScript](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Documentação da API Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Princípios de Design de Jogos](https://www.gamasutra.com/blogs/)

> 💡 **Dica Pro**: Começa simples e adiciona funcionalidades progressivamente. Um jogo simples bem polido é melhor do que um jogo complexo cheio de erros!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações erradas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->