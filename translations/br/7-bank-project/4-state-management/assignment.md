<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-26T00:50:04+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "br"
}
-->
# Implementar o diálogo "Adicionar transação"

## Instruções

Nosso aplicativo bancário ainda está faltando uma funcionalidade importante: a possibilidade de inserir novas transações.  
Usando tudo o que você aprendeu nas quatro lições anteriores, implemente um diálogo de "Adicionar transação":

- Adicione um botão "Adicionar transação" na página do dashboard.
- Crie uma nova página com um template HTML ou use JavaScript para mostrar/ocultar o HTML do diálogo sem sair da página do dashboard (você pode usar a propriedade [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) para isso, ou classes CSS).
- Certifique-se de lidar com [acessibilidade para teclado e leitores de tela](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) no diálogo.
- Implemente um formulário HTML para receber os dados de entrada.
- Crie dados JSON a partir das informações do formulário e envie-os para a API.
- Atualize a página do dashboard com os novos dados.

Consulte as [especificações da API do servidor](../api/README.md) para verificar qual API você precisa chamar e qual é o formato JSON esperado.

Aqui está um exemplo de resultado após completar a tarefa:

![Captura de tela mostrando um exemplo de diálogo "Adicionar transação"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.br.png)

## Rubrica

| Critério | Exemplar                                                                                         | Adequado                                                                                                               | Precisa Melhorar                            |
| -------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|          | Adicionar uma transação foi implementado completamente seguindo todas as melhores práticas vistas nas lições. | Adicionar uma transação foi implementado, mas não seguindo as melhores práticas vistas nas lições, ou funcionando apenas parcialmente. | Adicionar uma transação não está funcionando. |

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.