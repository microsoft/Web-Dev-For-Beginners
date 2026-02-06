# Criação de um Jogo: Aplicando Padrões de Projeto

## Visão Geral da Tarefa

Coloque em prática seu conhecimento recém-adquirido sobre padrões de projeto criando um protótipo simples de jogo! Esta tarefa ajudará você a praticar tanto padrões arquiteturais (herança ou composição) quanto o sistema de comunicação pub/sub que você aprendeu na aula.

## Instruções

Crie uma representação simples de um jogo que demonstre os padrões de projeto abordados nesta aula. Seu jogo deve ser funcional, mas não precisa de gráficos complexos – foque na arquitetura subjacente e nos padrões de comunicação.

### Requisitos

**Escolha Seu Padrão Arquitetural:**
- **Opção A**: Use herança baseada em classes (como o exemplo `GameObject` → `Movable` → `Hero`)
- **Opção B**: Use composição (como a abordagem de função fábrica com comportamentos mistos)

**Implemente a Comunicação:**
- **Inclua** uma classe `EventEmitter` para mensagens pub/sub
- **Configure** pelo menos 2-3 tipos diferentes de mensagens (como `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Conecte** a entrada do usuário (teclado/mouse) aos eventos do jogo por meio do sistema de eventos

**Elementos do Jogo a Incluir:**
- Pelo menos um personagem controlado pelo jogador
- Pelo menos um outro objeto do jogo (inimigo, item coletável ou elemento ambiental)
- Interação básica entre objetos (colisão, coleta ou comunicação)

### Ideias de Jogos Sugeridas

**Jogos Simples para Considerar:**
- **Jogo da Cobra** – Segmentos da cobra seguem a cabeça, comida aparece aleatoriamente
- **Variante do Pong** – Raquete responde ao input, bola rebate nas paredes
- **Jogo de Coleta** – Jogador se move coletando itens enquanto evita obstáculos
- **Defesa de Torre Básica** – Torres detectam e atiram em inimigos em movimento

### Diretrizes de Estrutura de Código

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Testando Sua Implementação

**Verifique se seu código funciona:**
- **Testando** se os objetos se movem ou mudam quando eventos são disparados
- **Confirmando** que múltiplos objetos podem responder ao mesmo evento
- **Checando** se você pode adicionar novos comportamentos sem modificar o código existente
- **Garantindo** que a entrada do teclado/mouse dispara corretamente os eventos do jogo

## Diretrizes de Submissão

**Sua submissão deve incluir:**
1. **Arquivo(s) JavaScript** com a implementação do seu jogo
2. **Arquivo HTML** para executar e testar seu jogo (pode ser simples)
3. **Comentários** explicando qual padrão você escolheu e por quê
4. **Documentação breve** dos tipos de mensagens e o que elas fazem

## Rubrica

| Critério | Exemplary (3 pontos) | Adequate (2 pontos) | Needs Improvement (1 ponto) |
|----------|---------------------|---------------------|------------------------------|
| **Padrão Arquitetural** | Implementa corretamente herança OU composição com hierarquia clara de classes/objetos | Usa o padrão escolhido com pequenos problemas ou inconsistências | Tenta usar o padrão, mas a implementação tem problemas significativos |
| **Implementação Pub/Sub** | EventEmitter funciona corretamente com múltiplos tipos de mensagens e fluxo de eventos adequado | Sistema básico de pub/sub funciona com algum manuseio de eventos | Sistema de eventos presente, mas não funciona de forma confiável |
| **Funcionalidade do Jogo** | Três ou mais elementos interativos que se comunicam por meio de eventos | Dois elementos interativos com comunicação básica de eventos | Um elemento responde a eventos ou interação básica |
| **Qualidade do Código** | Código limpo, bem comentado, com organização lógica e JavaScript moderno | Código geralmente bem organizado com comentários adequados | Código funciona, mas carece de organização ou comentários claros |

**Pontos Extras:**
- **Mecânicas criativas de jogo** que mostram usos interessantes dos padrões
- **Múltiplos métodos de entrada** (eventos de teclado E mouse)
- **Arquitetura escalável** que seria fácil de estender com novos recursos

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.