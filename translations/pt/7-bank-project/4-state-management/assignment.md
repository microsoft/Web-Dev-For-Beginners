<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2026-01-06T18:18:16+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "pt"
}
-->
# Implementar a caixa de diálogo "Adicionar Transação"

## Visão Geral

A sua aplicação bancária tem agora uma gestão de estado sólida e persistência de dados, mas falta-lhe uma funcionalidade crucial que as aplicações bancárias reais precisam: a capacidade de os utilizadores adicionarem as suas próprias transações. Neste exercício, irá implementar uma caixa de diálogo completa "Adicionar Transação" que se integra perfeitamente com o seu sistema de gestão de estado existente.

Este exercício junta tudo o que aprendeu nas quatro aulas de banca: templating HTML, gestão de formulários, integração com API e gestão de estado.

## Objetivos de Aprendizagem

Ao completar este exercício, você irá:
- **Criar** uma interface de diálogo amigável para introdução de dados
- **Implementar** um design de formulário acessível com suporte a teclado e leitores de ecrã
- **Integrar** novas funcionalidades com o seu sistema de gestão de estado existente
- **Praticar** comunicação com API e gestão de erros
- **Aplicar** padrões modernos de desenvolvimento web a uma funcionalidade do mundo real

## Instruções

### Passo 1: Botão "Adicionar Transação"

**Crie** um botão "Adicionar Transação" na sua página do dashboard que os utilizadores possam encontrar e aceder facilmente.

**Requisitos:**
- **Colocar** o botão numa localização lógica no dashboard
- **Usar** texto claro e orientado para ação no botão
- **Estilizar** o botão para combinar com o design UI existente
- **Garantir** que o botão é acessível através do teclado

### Passo 2: Implementação da Caixa de Diálogo

Escolha uma destas duas abordagens para implementar a sua caixa de diálogo:

**Opção A: Página Separada**
- **Criar** um novo template HTML para o formulário da transação
- **Adicionar** uma nova rota ao seu sistema de routing
- **Implementar** a navegação para dentro e fora da página do formulário

**Opção B: Caixa de Diálogo Modal (Recomendado)**
- **Usar** JavaScript para mostrar/ocultar a caixa de diálogo sem sair do dashboard
- **Implementar** usando a propriedade [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) ou classes CSS
- **Criar** uma experiência de utilizador fluida com gestão correta do foco

### Passo 3: Implementação de Acessibilidade

**Garantir** que a sua caixa de diálogo cumpre os [padrões de acessibilidade para diálogos modais](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/):

**Navegação pelo Teclado:**
- **Suportar** a tecla Escape para fechar a caixa de diálogo
- **Fixar** o foco dentro da caixa de diálogo enquanto estiver aberta
- **Retornar** o foco ao botão de disparo quando fechada

**Suporte a Leitores de Ecrã:**
- **Adicionar** etiquetas e papéis ARIA apropriados
- **Anunciar** a abertura/fecho da caixa de diálogo aos leitores de ecrã
- **Fornecer** etiquetas claras para os campos do formulário e mensagens de erro

### Passo 4: Criação do Formulário

**Desenhar** um formulário HTML que recolha os dados da transação:

**Campos Obrigatórios:**
- **Data**: Quando a transação ocorreu
- **Descrição**: Para que foi a transação
- **Montante**: Valor da transação (positivo para receitas, negativo para despesas)

**Funcionalidades do Formulário:**
- **Validar** a entrada do utilizador antes do envio
- **Fornecer** mensagens de erro claras para dados inválidos
- **Incluir** texto de espaço reservado útil e etiquetas
- **Estilizar** de forma consistente com o design existente

### Passo 5: Integração com API

**Ligar** o seu formulário à API do backend:

**Passos de Implementação:**
- **Rever** as [especificações da API do servidor](../api/README.md) para o endpoint correto e formato dos dados
- **Criar** dados JSON a partir das entradas do formulário
- **Enviar** os dados para a API com gestão de erros apropriada
- **Exibir** mensagens de sucesso/falha ao utilizador
- **Tratar** erros de rede de forma apropriada

### Passo 6: Integração com Gestão de Estado

**Atualizar** o seu dashboard com a nova transação:

**Requisitos de Integração:**
- **Atualizar** os dados da conta após a adição bem-sucedida da transação
- **Atualizar** a visualização do dashboard sem necessidade de recarregar a página
- **Garantir** que a nova transação aparece imediatamente
- **Manter** a consistência do estado durante todo o processo

## Especificações Técnicas

**Detalhes do Endpoint da API:**
Consulte a [documentação da API do servidor](../api/README.md) para:
- Formato JSON exigido para os dados de transação
- Método HTTP e URL do endpoint
- Formato esperado da resposta
- Tratamento de respostas de erro

**Resultado Esperado:**
Depois de concluir este exercício, a sua aplicação bancária deve ter uma funcionalidade "Adicionar Transação" totalmente funcional, com aparência e comportamento profissionais:

![Screenshot showing an example "Add transaction" dialog](../../../../translated_images/pt/dialog.93bba104afeb79f1.webp)

## Testar a Sua Implementação

**Testes Funcionais:**
1. **Verificar** que o botão "Adicionar Transação" está claramente visível e acessível
2. **Testar** se a caixa de diálogo abre e fecha corretamente
3. **Confirmar** que a validação do formulário funciona para todos os campos obrigatórios
4. **Verificar** que as transações bem-sucedidas aparecem imediatamente no dashboard
5. **Garantir** que a gestão de erros funciona para dados inválidos e problemas de rede

**Testes de Acessibilidade:**
1. **Navegar** por todo o fluxo usando apenas o teclado
2. **Testar** com um leitor de ecrã para garantir anúncios apropriados
3. **Verificar** se a gestão do foco funciona corretamente
4. **Confirmar** que todos os elementos do formulário têm etiquetas apropriadas

## Rubrica de Avaliação

| Critério | Exemplar | Adequado | Necessita Melhorias |
| -------- | -------- | -------- | ------------------- |
| **Funcionalidade** | A funcionalidade de adicionar transação funciona perfeitamente com excelente experiência do utilizador e segue todas as melhores práticas das lições | A funcionalidade de adicionar transação funciona corretamente mas pode não seguir algumas melhores práticas ou tem pequenos problemas de usabilidade | A funcionalidade de adicionar transação está parcialmente funcional ou tem problemas significativos de usabilidade |
| **Qualidade do Código** | Código bem organizado, segue padrões estabelecidos, inclui gestão adequada de erros, e integra-se perfeitamente com a gestão de estado existente | Código funciona mas pode apresentar alguns problemas de organização ou padrões inconsistentes com a base de código existente | Código tem problemas estruturais significativos ou não se integra bem com os padrões existentes |
| **Acessibilidade** | Suporte integral à navegação por teclado, compatibilidade com leitores de ecrã, e segue as diretrizes WCAG com excelente gestão de foco | Funcionalidades básicas de acessibilidade implementadas mas podem faltar algumas funcionalidades de navegação por teclado ou leitores de ecrã | Considerações de acessibilidade limitadas ou inexistentes |
| **Experiência do Utilizador** | Interface intuitiva e polida com feedback claro, interações fluídas, e aparência profissional | Boa experiência do utilizador com pequenas áreas a melhorar em feedback ou design visual | Experiência do utilizador pobre com interface confusa ou falta de feedback ao utilizador |

## Desafios Adicionais (Opcional)

Depois de concluir os requisitos básicos, considere estas melhorias:

**Funcionalidades Avançadas:**
- **Adicionar** categorias de transação (alimentação, transportes, entretenimento, etc.)
- **Implementar** validação de entrada com feedback em tempo real
- **Criar** atalhos de teclado para utilizadores avançados
- **Adicionar** capacidade de edição e eliminação de transações

**Integração Avançada:**
- **Implementar** funcionalidade de desfazer para transações recentemente adicionadas
- **Adicionar** importação em massa de transações a partir de ficheiros CSV
- **Criar** funcionalidades de pesquisa e filtro de transações
- **Implementar** funcionalidade de exportação de dados

Estas funcionalidades opcionais irão ajudá-lo a praticar conceitos mais avançados de desenvolvimento web e a criar uma aplicação bancária mais completa!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, por favor note que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autorizada. Para informações críticas, recomenda-se tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações erradas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->