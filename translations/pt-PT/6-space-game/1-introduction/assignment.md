# Simular um Jogo: Aplicar Padrões de Design

## Visão Geral do Trabalho

Coloque o seu novo conhecimento sobre padrões de design em prática criando um protótipo simples de jogo! Este trabalho ajudará a praticar tanto padrões arquitetónicos (herança ou composição) como o sistema de comunicação pub/sub que aprendeu na lição.

## Instruções

Crie uma representação simples de um jogo que demonstre os padrões de design desta lição. O seu jogo deve ser funcional mas não necessita de gráficos complexos – foque-se na arquitetura subjacente e nos padrões de comunicação.

### Requisitos

**Escolha o seu Padrão de Arquitetura:**
- **Opção A**: Use herança baseada em classes (como o exemplo `GameObject` → `Movable` → `Hero`)
- **Opção B**: Use composição (como a abordagem da função fábrica com comportamentos mistos)

**Implemente Comunicação:**
- **Inclua** uma classe `EventEmitter` para mensagens pub/sub
- **Configure** pelo menos 2-3 tipos de mensagens diferentes (como `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Ligue** a entrada do utilizador (teclado/ratão) aos eventos do jogo através do sistema de eventos

**Elementos do Jogo a Incluir:**
- Pelo menos uma personagem controlada pelo jogador
- Pelo menos outro objeto de jogo (inimigo, colecionável ou elemento ambiental)
- Interação básica entre objetos (colisão, recolha ou comunicação)

### Sugestões de Jogos

**Jogos Simples a Considerar:**
- **Jogo da Cobra** – Segmentos da cobra seguem a cabeça, comida aparece aleatoriamente
- **Variação de Pong** – Raquete responde a entrada, bola rebate nas paredes
- **Jogo de Colecionador** – Jogador move-se colecionando itens enquanto evita obstáculos
- **Bases de Tower Defense** – Torres detectam e disparam contra inimigos em movimento

### Diretrizes para Estrutura do Código

```javascript
// Estrutura inicial de exemplo
const Messages = {
  // Defina as suas mensagens de jogo aqui
};

class EventEmitter {
  // A sua implementação do sistema de eventos
}

// Escolha entre abordagem baseada em classe OU composição
// Exemplo baseado em classe:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OU Exemplo de composição:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Testar a Sua Implementação

**Verifique que o seu código funciona através de:**
- **Testar** se os objetos se movem ou mudam quando os eventos são disparados
- **Confirmar** que múltiplos objetos podem responder ao mesmo evento
- **Verificar** que pode adicionar novos comportamentos sem modificar o código existente
- **Garantir** que a entrada de teclado/ratão dispara corretamente os eventos do jogo

## Diretrizes de Submissão

**A sua submissão deve incluir:**
1. **Ficheiro(s) JavaScript** com a implementação do seu jogo
2. **Ficheiro HTML** para executar e testar o seu jogo (pode ser simples)
3. **Comentários** explicando qual padrão escolheu e porquê
4. **Documentação breve** dos seus tipos de mensagem e o que fazem

## Critérios de Avaliação

| Critério | Exemplar (3 pontos) | Adequado (2 pontos) | Precisa Melhorar (1 ponto) |
|----------|---------------------|---------------------|----------------------------|
| **Padrão de Arquitetura** | Implementa corretamente herança OU composição com hierarquia clara de classes/objetos | Usa o padrão escolhido com pequenas falhas ou inconsistências | Tenta usar o padrão mas a implementação tem problemas significativos |
| **Implementação Pub/Sub** | EventEmitter funciona corretamente com múltiplos tipos de mensagens e fluxo adequado de eventos | Sistema pub/sub básico funcionando com alguma gestão de eventos | Sistema de eventos presente mas não funciona de forma fiável |
| **Funcionalidade do Jogo** | Três ou mais elementos interativos que comunicam via eventos | Dois elementos interativos com comunicação básica de eventos | Um elemento responde a eventos ou interação básica |
| **Qualidade do Código** | Código limpo, bem comentado, com organização lógica e JavaScript moderno | Código geralmente organizado com comentários adequados | Código funciona mas carece de organização ou comentários claros |

**Pontos Bónus:**
- **Mecânicas de jogo criativas** que mostrem usos interessantes dos padrões
- **Múltiplos métodos de entrada** (teclado E ratão)
- **Arquitetura escalável** que seja fácil de expandir com novas funcionalidades

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, por favor tenha em conta que as traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autorizada. Para informação crítica, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações erradas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->