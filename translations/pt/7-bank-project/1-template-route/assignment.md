<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2026-01-06T18:12:39+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "pt"
}
-->
# Melhorar o Roteamento

## Instruções

Agora que construiu um sistema de roteamento básico, é hora de aprimorá-lo com funcionalidades profissionais que melhoram a experiência do utilizador e fornecem melhores ferramentas para o programador. As aplicações do mundo real precisam de mais do que apenas mudar templates – requerem títulos de página dinâmicos, hooks de ciclo de vida e arquiteturas extensíveis.

Nesta tarefa, irá estender a sua implementação de roteamento com duas funcionalidades essenciais que são comuns em aplicações web de produção. Estas melhorias tornarão a sua app bancária mais refinada e fornecerão uma base para funcionalidades futuras.

A declaração das rotas contém atualmente apenas o ID do template a usar. Mas ao exibir uma nova página, às vezes é necessário um pouco mais. Vamos melhorar a nossa implementação de roteamento com duas funcionalidades adicionais:

### Funcionalidade 1: Títulos de Página Dinâmicos
**Objetivo:** Atribuir títulos a cada template e atualizar o título da janela com este novo título quando o template mudar.

**Por que isto é importante:**
- **Melhora** a experiência do utilizador ao mostrar títulos descritivos na aba do navegador
- **Aumenta** a acessibilidade para leitores de ecrã e tecnologias assistivas  
- **Proporciona** melhor contexto para bookmarks e histórico do navegador
- **Segue** as melhores práticas profissionais de desenvolvimento web

**Abordagem de implementação:**
- **Estender** o objeto routes para incluir informação de título para cada rota
- **Modificar** a função `updateRoute()` para atualizar `document.title` dinamicamente
- **Testar** se os títulos mudam corretamente ao navegar entre ecrãs

### Funcionalidade 2: Hooks de Ciclo de Vida da Rota  
**Objetivo:** Adicionar uma opção para executar algum código depois da mudança do template. Queremos imprimir `'Dashboard is shown'` no console do programador sempre que a página do dashboard for exibida.

**Por que isto é importante:**
- **Permite** a execução de lógica personalizada quando rotas específicas carregam
- **Fornece** hooks para analytics, logging ou código de inicialização
- **Cria** uma base para comportamentos de rota mais complexos
- **Demonstra** o padrão observer em desenvolvimento web

**Abordagem de implementação:**
- **Adicionar** uma propriedade opcional de função callback às configurações das rotas
- **Executar** a função callback (se existir) depois que a renderização do template terminar
- **Garantir** que a funcionalidade funciona para qualquer rota com callback definido
- **Testar** se a mensagem no console aparece quando visitar o dashboard

## Rubrica

| Critério | Exemplar                                                                                                                         | Adequado                                                                                                                                                                                 | Precisa de Melhoria                                    |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|          | As duas funcionalidades estão implementadas e funcionam. A adição de título e código também funciona para uma nova rota adicionada na declaração `routes`. | As duas funcionalidades funcionam, mas o comportamento está codificado estaticamente e não configurável através da declaração `routes`. Adicionar uma terceira rota com título e código não funciona ou funciona parcialmente. | Uma das funcionalidades está em falta ou não funciona corretamente. |

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:
Este documento foi traduzido recorrendo ao serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, por favor tenha em conta que as traduções automáticas podem conter erros ou imprecisões. O documento original, na sua língua nativa, deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->