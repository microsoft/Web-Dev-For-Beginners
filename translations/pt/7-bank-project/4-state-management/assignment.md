<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-24T13:47:21+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "pt"
}
-->
# Implementar o diálogo "Adicionar transação"

## Instruções

A nossa aplicação bancária ainda está a faltar uma funcionalidade importante: a possibilidade de introduzir novas transações.  
Usando tudo o que aprendeste nas quatro lições anteriores, implementa um diálogo "Adicionar transação":

- Adiciona um botão "Adicionar transação" na página do painel de controlo.
- Cria uma nova página com um modelo HTML ou utiliza JavaScript para mostrar/ocultar o HTML do diálogo sem sair da página do painel de controlo (podes usar a propriedade [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) para isso, ou classes CSS).
- Garante que tratas da [acessibilidade para teclado e leitores de ecrã](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) no diálogo.
- Implementa um formulário HTML para receber os dados de entrada.
- Cria dados JSON a partir dos dados do formulário e envia-os para a API.
- Atualiza a página do painel de controlo com os novos dados.

Consulta as [especificações da API do servidor](../api/README.md) para ver qual API precisas de chamar e qual é o formato JSON esperado.

Aqui está um exemplo do resultado após completares a tarefa:

![Captura de ecrã a mostrar um exemplo do diálogo "Adicionar transação"](../../../../7-bank-project/4-state-management/images/dialog.png)

## Rubrica

| Critérios | Exemplar                                                                                         | Adequado                                                                                                               | Necessita de Melhorias                      |
| --------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|           | Adicionar uma transação está completamente implementado seguindo todas as boas práticas vistas nas lições. | Adicionar uma transação está implementado, mas não segue as boas práticas vistas nas lições ou funciona apenas parcialmente. | Adicionar uma transação não funciona de todo. |

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.