# API do Banco

> API do Banco construída com [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

A API já está construída para si e não faz parte do exercício.

No entanto, se estiver interessado em aprender como construir uma API como esta, pode seguir esta série de vídeos: https://aka.ms/NodeBeginner (os vídeos 17 a 21 cobrem exatamente esta API).

Também pode dar uma vista de olhos neste tutorial interativo: https://aka.ms/learn/express-api

## Executar o servidor

Certifique-se de que tem [Node.js](https://nodejs.org) instalado.

1. Faça um clone deste repositório [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Abra o seu terminal e navegue até à pasta `Web-Dev-For-Beginners/7-bank-project/api`.
3. Execute `npm install` e aguarde que os pacotes sejam instalados (pode demorar algum tempo, dependendo da qualidade da sua ligação à internet).
4. Quando a instalação terminar, execute `npm start` e está pronto para começar.

O servidor deverá começar a ouvir na porta `5000`.
*Este servidor será executado juntamente com o terminal do servidor principal da aplicação do banco (a ouvir na porta `3000`), não o feche.*

> Nota: todas as entradas são armazenadas em memória e não são persistidas, por isso, quando o servidor é parado, todos os dados são perdidos.

## Detalhes da API

Rota                                         | Descrição
---------------------------------------------|------------------------------------
GET    /api/                                 | Obter informações do servidor
POST   /api/accounts/                        | Criar uma conta, ex: `{ user: 'Yohan', description: 'O meu orçamento', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Obter todos os dados da conta especificada
DELETE /api/accounts/:user                   | Remover a conta especificada
POST   /api/accounts/:user/transactions      | Adicionar uma transação, ex: `{ date: '2020-07-23T18:25:43.511Z', object: 'Comprei um livro', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Remover a transação especificada

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.