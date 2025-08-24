<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-24T13:37:04+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "pt"
}
-->
# Refatora e comenta o teu código

## Instruções

À medida que a tua base de código cresce, é importante refatorar o código frequentemente para mantê-lo legível e fácil de manter ao longo do tempo. Adiciona comentários e refatora o teu `app.js` para melhorar a qualidade do código:

- Extrai constantes, como a URL base da API do servidor
- Factoriza código semelhante: por exemplo, podes criar uma função `sendRequest()` para agrupar o código usado tanto em `createAccount()` como em `getAccount()`
- Reorganiza o código para torná-lo mais fácil de ler e adiciona comentários

## Rubrica

| Critérios | Exemplar                                                                                                                                                     | Adequado                                                                                          | Precisa de Melhorias                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|           | O código está comentado, bem organizado em diferentes secções e fácil de ler. As constantes foram extraídas e uma função `sendRequest()` foi criada e factorizada. | O código está limpo, mas ainda pode ser melhorado com mais comentários, extração de constantes ou factorização. | O código está desorganizado, sem comentários, as constantes não foram extraídas e o código não foi factorizado. |

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, tenha em atenção que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.