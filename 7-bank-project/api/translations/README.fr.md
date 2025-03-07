# API bancaire

> API bancaire construite avec [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

L'API est déjà conçue pour vous et ne fait pas partie de l'exercice.

Cependant, si vous souhaitez apprendre à créer une API comme celle-ci, vous pouvez suivre cette série de vidéos : https://aka.ms/NodeBeginner (les vidéos 17 à 21 couvrent cette API exacte).

Vous pouvez également consulter ce tutoriel interactif : https://aka.ms/learn/express-api

## Exécution du serveur

Assurez-vous que [Node.js](https://nodejs.org) est installé.

1. Git clonez ce repo [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Ouvrez votre terminal et accédez au dossier `Web-Dev-For-Beginners/7-bank-project/api`
2. Exécutez `npm install` et attendez que les packages soient installés (cela peut prendre un certain temps en fonction de la qualité de votre connexion Internet).
3. Une fois l'installation terminée, exécutez `npm start` et vous êtes prêt à commencer.

Le serveur devrait commencer à écouter sur le port `5000`.
*Ce serveur fonctionnera avec le terminal principal du serveur d'applications de la banque (à l'écoute sur le port `3000`), ne le fermez pas.*

> Remarque : toutes les entrées sont stockées en mémoire et ne sont pas persistantes, de sorte que lorsque le serveur est arrêté, toutes les données sont perdues.

## Détails de l'API

Route                                        | Description
---------------------------------------------|------------------------------------
GET /api/ | Obtenir des informations sur le serveur
POST /api/accounts/ | Créer un compte, ex : `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET /api/accounts/:user | Obtenir toutes les données pour le compte spécifié
DELETE /api/accounts/:user | Supprimer le compte spécifié
POST /api/accounts/:user/transactions | Ajoutez une transaction, ex : `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE /api/accounts/:user/transactions/:id | Supprimer la transaction spécifiée