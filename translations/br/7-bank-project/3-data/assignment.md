<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-26T00:29:01+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "br"
}
-->
# Refatore e comente seu código

## Instruções

À medida que sua base de código cresce, é importante refatorar o código frequentemente para mantê-lo legível e sustentável ao longo do tempo. Adicione comentários e refatore seu `app.js` para melhorar a qualidade do código:

- Extraia constantes, como a URL base da API do servidor
- Factorize códigos semelhantes: por exemplo, você pode criar uma função `sendRequest()` para agrupar o código usado tanto em `createAccount()` quanto em `getAccount()`
- Reorganize o código para torná-lo mais fácil de ler e adicione comentários

## Rubrica

| Critério | Exemplary                                                                                                                                                     | Adequado                                                                                          | Precisa de Melhorias                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|          | O código está comentado, bem organizado em diferentes seções e fácil de ler. Constantes foram extraídas e uma função `sendRequest()` foi criada e fatorizada. | O código está limpo, mas ainda pode ser melhorado com mais comentários, extração de constantes ou fatorização. | O código está bagunçado, sem comentários, constantes não foram extraídas e o código não foi fatorizado. |

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.