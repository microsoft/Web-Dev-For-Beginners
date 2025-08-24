<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2025-08-23T23:55:42+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "fr"
}
-->
# API Bancaire

> API bancaire construite avec [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

L'API est déjà construite pour vous et ne fait pas partie de l'exercice.

Cependant, si vous êtes intéressé(e) à apprendre comment construire une API comme celle-ci, vous pouvez suivre cette série de vidéos : https://aka.ms/NodeBeginner (les vidéos 17 à 21 couvrent exactement cette API).

Vous pouvez également consulter ce tutoriel interactif : https://aka.ms/learn/express-api

## Lancer le serveur

Assurez-vous d'avoir [Node.js](https://nodejs.org) installé.

1. Clonez ce dépôt Git [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Ouvrez votre terminal et naviguez dans le dossier `Web-Dev-For-Beginners/7-bank-project/api`.
3. Exécutez `npm install` et attendez que les packages soient installés (cela peut prendre un certain temps en fonction de la qualité de votre connexion Internet).
4. Une fois l'installation terminée, exécutez `npm start` et tout sera prêt.

Le serveur devrait commencer à écouter sur le port `5000`.
*Ce serveur fonctionnera en parallèle avec le terminal principal de l'application bancaire (écoutant sur le port `3000`), ne le fermez pas.*

> Note : toutes les entrées sont stockées en mémoire et ne sont pas persistées, donc lorsque le serveur est arrêté, toutes les données sont perdues.

## Détails de l'API

Route                                        | Description
---------------------------------------------|------------------------------------
GET    /api/                                 | Obtenir les informations du serveur
POST   /api/accounts/                        | Créer un compte, ex : `{ user: 'Yohan', description: 'Mon budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Obtenir toutes les données pour le compte spécifié
DELETE /api/accounts/:user                   | Supprimer le compte spécifié
POST   /api/accounts/:user/transactions      | Ajouter une transaction, ex : `{ date: '2020-07-23T18:25:43.511Z', object: 'Achat d’un livre', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Supprimer la transaction spécifiée

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.