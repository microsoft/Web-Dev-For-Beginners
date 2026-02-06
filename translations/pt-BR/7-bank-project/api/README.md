# API do Banco

> API do Banco construída com [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

A API já está pronta e não faz parte do exercício.

No entanto, se você estiver interessado em aprender como construir uma API como esta, pode seguir esta série de vídeos: https://aka.ms/NodeBeginner (os vídeos 17 a 21 cobrem exatamente esta API).

Você também pode dar uma olhada neste tutorial interativo: https://aka.ms/learn/express-api

## Executando o servidor

Certifique-se de ter o [Node.js](https://nodejs.org) instalado.

1. Faça um clone deste repositório [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Abra seu terminal e navegue até a pasta `Web-Dev-For-Beginners/7-bank-project/api`.
3. Execute `npm install` e aguarde a instalação dos pacotes (pode levar algum tempo dependendo da qualidade da sua conexão com a internet).
4. Quando a instalação terminar, execute `npm start` e pronto.

O servidor deve começar a escutar na porta `5000`.
*Este servidor será executado junto com o terminal do servidor principal do aplicativo do banco (escutando na porta `3000`), não o feche.*

> Nota: todas as entradas são armazenadas na memória e não são persistidas, então, quando o servidor é parado, todos os dados são perdidos.

## Detalhes da API

Rota                                         | Descrição
---------------------------------------------|------------------------------------
GET    /api/                                 | Obtém informações do servidor
POST   /api/accounts/                        | Cria uma conta, ex: `{ user: 'Yohan', description: 'Meu orçamento', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Obtém todos os dados da conta especificada
DELETE /api/accounts/:user                   | Remove a conta especificada
POST   /api/accounts/:user/transactions      | Adiciona uma transação, ex: `{ date: '2020-07-23T18:25:43.511Z', object: 'Comprei um livro', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Remove a transação especificada

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.