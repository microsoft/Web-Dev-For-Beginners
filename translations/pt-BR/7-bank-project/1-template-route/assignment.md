# Melhorar o Roteamento

## Instruções

Agora que você construiu um sistema básico de roteamento, é hora de aprimorá-lo com recursos profissionais que melhoram a experiência do usuário e fornecem melhores ferramentas para desenvolvedores. Aplicações do mundo real precisam de mais do que apenas alternância de templates – elas exigem títulos de página dinâmicos, hooks de ciclo de vida e arquiteturas extensíveis.

Nesta tarefa, você irá expandir sua implementação de roteamento com dois recursos essenciais que são comumente encontrados em aplicações web de produção. Esses aprimoramentos farão com que seu aplicativo bancário pareça mais refinado e fornecerão uma base para funcionalidades futuras.

A declaração de rotas atualmente contém apenas o ID do template a ser usado. Mas, ao exibir uma nova página, às vezes é necessário um pouco mais. Vamos melhorar nossa implementação de roteamento com dois recursos adicionais:

### Recurso 1: Títulos de Página Dinâmicos
**Objetivo:** Atribuir títulos a cada template e atualizar o título da janela com este novo título quando o template mudar.

**Por que isso é importante:**
- **Melhora** a experiência do usuário ao exibir títulos descritivos na aba do navegador
- **Aumenta** a acessibilidade para leitores de tela e tecnologias assistivas  
- **Fornece** melhor contexto para favoritos e histórico do navegador
- **Segue** as melhores práticas de desenvolvimento web profissional

**Abordagem de implementação:**
- **Estender** o objeto de rotas para incluir informações de título para cada rota
- **Modificar** a função `updateRoute()` para atualizar dinamicamente o `document.title`
- **Testar** se os títulos mudam corretamente ao navegar entre telas

### Recurso 2: Hooks de Ciclo de Vida da Rota  
**Objetivo:** Adicionar uma opção para executar algum código após a mudança de template. Queremos imprimir `'Dashboard is shown'` no console do desenvolvedor toda vez que a página do dashboard for exibida.

**Por que isso é importante:**
- **Permite** a execução de lógica personalizada quando rotas específicas são carregadas
- **Fornece** hooks para análises, registros ou código de inicialização
- **Cria** uma base para comportamentos de rota mais complexos
- **Demonstra** o padrão de observador no desenvolvimento web

**Abordagem de implementação:**
- **Adicionar** uma propriedade opcional de função de callback às configurações de rota
- **Executar** a função de callback (se presente) após a renderização do template ser concluída
- **Garantir** que o recurso funcione para qualquer rota com um callback definido
- **Testar** se a mensagem do console aparece ao visitar o dashboard

## Rubrica

| Critério | Exemplary                                                                                                                          | Adequate                                                                                                                                                                                  | Needs Improvement                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Os dois recursos estão implementados e funcionando. Título e adição de código também funcionam para uma nova rota adicionada na declaração de `routes`. | Os dois recursos funcionam, mas o comportamento está codificado e não é configurável via declaração de `routes`. Adicionar uma terceira rota com título e adição de código não funciona ou funciona parcialmente. | Um dos recursos está ausente ou não funciona corretamente. |

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.