<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "232d592791465c1678cab3a2bb6cd3e8",
  "translation_date": "2025-10-22T23:15:11+00:00",
  "source_file": "6-space-game/6-end-condition/assignment.md",
  "language_code": "br"
}
-->
# Crie um Jogo de Exemplo

## Visão Geral da Tarefa

Agora que você dominou as condições de término e a funcionalidade de reinício no seu jogo espacial, é hora de aplicar esses conceitos em uma experiência de jogo completamente nova. Você irá projetar e construir seu próprio jogo que demonstre diferentes padrões de condições de término e mecânicas de reinício.

Esta tarefa desafia você a pensar criativamente sobre design de jogos enquanto pratica as habilidades técnicas que aprendeu. Você explorará diferentes cenários de vitória e derrota, implementará progressão do jogador e criará experiências de reinício envolventes.

## Requisitos do Projeto

### Recursos Essenciais do Jogo

Seu jogo deve incluir os seguintes elementos essenciais:

**Variedade de Condições de Término**: Implemente pelo menos duas maneiras diferentes de o jogo terminar:
- **Vitória baseada em pontos**: O jogador atinge uma pontuação alvo ou coleta itens específicos
- **Derrota baseada em vidas**: O jogador perde todas as vidas disponíveis ou pontos de saúde
- **Conclusão de objetivos**: Todos os inimigos derrotados, itens específicos coletados ou metas alcançadas
- **Baseado em tempo**: O jogo termina após uma duração definida ou quando o cronômetro chega a zero

**Funcionalidade de Reinício**: 
- **Limpar estado do jogo**: Remova todos os objetos do jogo anterior e redefina as variáveis
- **Reinicializar sistemas**: Comece do zero com novos status do jogador, inimigos e objetivos
- **Controles intuitivos**: Forneça instruções claras para reiniciar o jogo

**Feedback ao Jogador**:
- **Mensagens de vitória**: Celebre as conquistas do jogador com feedback positivo
- **Mensagens de derrota**: Forneça mensagens encorajadoras que motivem a jogar novamente
- **Indicadores de progresso**: Mostre a pontuação atual, vidas ou status dos objetivos

### Ideias e Inspiração para o Jogo

Escolha um dos conceitos de jogo abaixo ou crie o seu próprio:

#### 1. Jogo de Aventura no Console
Crie uma aventura baseada em texto com mecânicas de combate:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Recursos principais para implementar:**
- **Combate baseado em turnos** com diferentes opções de ataque
- **Pontos de saúde** para o jogador e os inimigos
- **Sistema de inventário** para coletar moedas ou itens
- **Vários tipos de inimigos** com diferentes níveis de dificuldade
- **Condição de vitória** quando todos os inimigos forem derrotados

#### 2. Jogo de Coleta
- **Objetivo**: Coletar itens específicos enquanto evita obstáculos
- **Condições de término**: Atingir a quantidade de coleta alvo ou perder todas as vidas
- **Progressão**: Os itens se tornam mais difíceis de alcançar conforme o jogo avança

#### 3. Jogo de Puzzle
- **Objetivo**: Resolver quebra-cabeças cada vez mais difíceis
- **Condições de término**: Completar todos os níveis ou ficar sem movimentos/tempo
- **Reinício**: Redefinir para o primeiro nível com progresso limpo

#### 4. Jogo de Defesa
- **Objetivo**: Proteger sua base de ondas de inimigos
- **Condições de término**: Sobreviver a todas as ondas (vitória) ou base destruída (derrota)
- **Progressão**: As ondas de inimigos aumentam em dificuldade e número

## Diretrizes de Implementação

### Começando

1. **Planeje o design do seu jogo**:
   - Esboce o loop básico de jogabilidade
   - Defina claramente suas condições de término
   - Identifique quais dados precisam ser redefinidos no reinício

2. **Configure a estrutura do seu projeto**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Crie o loop principal do jogo**:
   - Inicialize o estado do jogo
   - Lide com a entrada do usuário
   - Atualize a lógica do jogo
   - Verifique as condições de término
   - Renderize o estado atual

### Requisitos Técnicos

**Use JavaScript Moderno**: 
- Utilize `const` e `let` para declarações de variáveis
- Use funções de seta quando apropriado
- Implemente recursos ES6+ como template literals e destructuring

**Arquitetura Orientada a Eventos**:
- Crie manipuladores de eventos para interações do usuário
- Implemente mudanças no estado do jogo através de eventos
- Use listeners de eventos para funcionalidade de reinício

**Práticas de Código Limpo**:
- Escreva funções com responsabilidades únicas
- Use nomes descritivos para variáveis e funções
- Adicione comentários explicando a lógica e as regras do jogo
- Organize o código em seções lógicas

## Requisitos de Entrega

### Entregáveis

1. **Arquivos completos do jogo**: Todos os arquivos HTML, CSS e JavaScript necessários para rodar seu jogo
2. **README.md**: Documentação explicando:
   - Como jogar seu jogo
   - Quais condições de término você implementou
   - Instruções para reiniciar
   - Quaisquer recursos ou mecânicas especiais
3. **Comentários no código**: Explicações claras sobre a lógica e os algoritmos do jogo

### Lista de Verificação de Testes

Antes de enviar, verifique se o seu jogo:

- [ ] **Roda sem erros** no console do navegador
- [ ] **Implementa múltiplas condições de término** conforme especificado
- [ ] **Reinicia corretamente** com estado limpo
- [ ] **Fornece feedback claro** aos jogadores sobre o status do jogo
- [ ] **Utiliza sintaxe moderna de JavaScript** e boas práticas
- [ ] **Inclui documentação abrangente** no README.md

## Rubrica de Avaliação

| Critério | Exemplar (4) | Proficiente (3) | Em Desenvolvimento (2) | Iniciante (1) |
|----------|--------------|-----------------|-------------------------|---------------|
| **Funcionalidade do Jogo** | Jogo completo com múltiplas condições de término, reinício suave e experiência de jogo refinada | Jogo completo com condições básicas de término e mecanismo de reinício funcional | Jogo parcial com algumas condições de término implementadas, reinício pode ter pequenos problemas | Jogo incompleto com funcionalidade limitada e bugs significativos |
| **Qualidade do Código** | Código limpo, bem organizado, utilizando práticas modernas de JavaScript, comentários abrangentes e excelente estrutura | Boa organização do código com sintaxe moderna, comentários adequados e estrutura clara | Organização básica do código com algumas práticas modernas, comentários mínimos | Organização ruim do código, sintaxe desatualizada, falta de comentários e estrutura |
| **Experiência do Usuário** | Jogabilidade intuitiva com instruções claras, excelente feedback e experiência envolvente de término/reinício | Boa jogabilidade com instruções adequadas e feedback funcional | Jogabilidade básica com instruções mínimas, feedback limitado sobre o estado do jogo | Jogabilidade confusa com instruções pouco claras e feedback ruim ao usuário |
| **Implementação Técnica** | Demonstra domínio dos conceitos de desenvolvimento de jogos, manipulação de eventos e gerenciamento de estado | Mostra sólida compreensão dos conceitos de jogos com boa implementação | Compreensão básica com implementação aceitável | Compreensão limitada com implementação ruim |
| **Documentação** | README abrangente com instruções claras, código bem documentado e evidências de testes completos | Boa documentação com instruções claras e comentários adequados no código | Documentação básica com instruções mínimas | Documentação ruim ou ausente |

### Escala de Pontuação
- **Exemplar (16-20 pontos)**: Excede as expectativas com recursos criativos e implementação refinada
- **Proficiente (12-15 pontos)**: Atende a todos os requisitos com execução sólida
- **Em Desenvolvimento (8-11 pontos)**: Atende à maioria dos requisitos com pequenos problemas
- **Iniciante (4-7 pontos)**: Atende a alguns requisitos, mas precisa de melhorias significativas

## Recursos Adicionais de Aprendizado

- [Guia de Desenvolvimento de Jogos MDN](https://developer.mozilla.org/en-US/docs/Games)
- [Tutoriais de Desenvolvimento de Jogos em JavaScript](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Documentação da API Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Princípios de Design de Jogos](https://www.gamasutra.com/blogs/)

> 💡 **Dica Pro**: Comece simples e adicione recursos gradualmente. Um jogo simples e bem polido é melhor do que um jogo complexo cheio de bugs!

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.