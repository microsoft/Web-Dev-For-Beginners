<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-24T13:41:36+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "pt"
}
-->
# Melhorar o encaminhamento

## Instruções

A declaração de rotas atualmente contém apenas o ID do modelo a ser usado. No entanto, ao exibir uma nova página, às vezes é necessário um pouco mais. Vamos melhorar a nossa implementação de encaminhamento com duas funcionalidades adicionais:

- Atribuir títulos a cada modelo e atualizar o título da janela com este novo título quando o modelo mudar.
- Adicionar uma opção para executar algum código após a mudança do modelo. Queremos imprimir `'Dashboard is shown'` na consola do programador sempre que a página do dashboard for exibida.

## Rubrica

| Critérios | Exemplar                                                                                                                          | Adequado                                                                                                                                                                                  | Necessita Melhorias                                    |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|           | As duas funcionalidades estão implementadas e a funcionar. A adição de título e código também funciona para uma nova rota adicionada na declaração de `routes`.           | As duas funcionalidades funcionam, mas o comportamento está codificado e não é configurável através da declaração de `routes`. Adicionar uma terceira rota com título e código não funciona ou funciona parcialmente. | Uma das funcionalidades está ausente ou não funciona corretamente. |

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.