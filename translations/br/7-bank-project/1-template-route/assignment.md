<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-26T00:38:40+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "br"
}
-->
# Melhorar o roteamento

## Instruções

A declaração de rotas atualmente contém apenas o ID do template a ser usado. Porém, ao exibir uma nova página, às vezes é necessário um pouco mais. Vamos melhorar nossa implementação de roteamento com duas funcionalidades adicionais:

- Atribuir títulos a cada template e atualizar o título da janela com esse novo título quando o template mudar.
- Adicionar uma opção para executar algum código após a mudança do template. Queremos imprimir `'Dashboard is shown'` no console do desenvolvedor toda vez que a página do dashboard for exibida.

## Critérios de Avaliação

| Critério | Exemplar                                                                                                                          | Adequado                                                                                                                                                                                  | Precisa Melhorar                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|          | As duas funcionalidades estão implementadas e funcionando. Título e adição de código também funcionam para uma nova rota adicionada na declaração de `routes`.            | As duas funcionalidades funcionam, mas o comportamento está fixo e não é configurável via a declaração de `routes`. Adicionar uma terceira rota com título e adição de código não funciona ou funciona parcialmente. | Uma das funcionalidades está ausente ou não funciona corretamente. |

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.