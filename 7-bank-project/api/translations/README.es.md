# API bancaria

> API bancaria construida con [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

La API ya está creada para usted y no forma parte del ejercicio.

Sin embargo, si está interesado en aprender cómo construir una API como esta, puede seguir esta serie de videos: https://aka.ms/NodeBeginner (los videos 17 a 21 cubren esta API exacta).

También puede echar un vistazo a este tutorial interactivo: https://aka.ms/learn/express-api

## Ejecutando el servidor

Asegúrese de tener [Node.js](https://nodejs.org) instalado.

1. Git clone este repositorio.
2. Abra una terminal en la carpeta `api`, luego ejecute `npm install`.
3. Ejecute `npm start`.

El servidor debería comenzar a escuchar en el puerto `5000`.

> Nota: todas las entradas se almacenan en la memoria y no se conservan, por lo que cuando se detiene el servidor, se pierden todos los datos.

## API

Ruta                                         | Descripción
---------------------------------------------|------------------------------------
GET    /api/                                 | Obtener información del servidor
POST   /api/accounts/                        | Cree una cuenta, por ejemplo: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Obtener todos los datos de la cuenta especificada
DELETE /api/accounts/:user                   | Eliminar cuenta especificada
POST   /api/accounts/:user/transactions      | Agregar una transacción, por ejemplo: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Eliminar transacción especificada
