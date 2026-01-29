# API del Banco

> API del Banco construida con [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

La API ya está construida para ti y no forma parte del ejercicio.

Sin embargo, si estás interesado en aprender cómo construir una API como esta, puedes seguir esta serie de videos: https://aka.ms/NodeBeginner (los videos 17 al 21 cubren esta API exacta).

También puedes echar un vistazo a este tutorial interactivo: https://aka.ms/learn/express-api

## Ejecutando el servidor

Asegúrate de tener [Node.js](https://nodejs.org) instalado.

1. Clona este repositorio [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Abre tu terminal y navega a la carpeta `Web-Dev-For-Beginners/7-bank-project/api`.
3. Ejecuta `npm install` y espera a que se instalen los paquetes (puede tardar un poco dependiendo de la calidad de tu conexión a internet).
4. Cuando termine la instalación, ejecuta `npm start` y listo.

El servidor debería comenzar a escuchar en el puerto `5000`.
*Este servidor estará funcionando junto con la terminal del servidor principal de la aplicación bancaria (escuchando en el puerto `3000`), no lo cierres.*

> Nota: todas las entradas se almacenan en memoria y no se persisten, por lo que cuando el servidor se detiene, todos los datos se pierden.

## Detalles de la API

Ruta                                         | Descripción
---------------------------------------------|------------------------------------
GET    /api/                                 | Obtener información del servidor
POST   /api/accounts/                        | Crear una cuenta, ej: `{ user: 'Yohan', description: 'Mi presupuesto', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Obtener todos los datos de la cuenta especificada
DELETE /api/accounts/:user                   | Eliminar la cuenta especificada
POST   /api/accounts/:user/transactions      | Agregar una transacción, ej: `{ date: '2020-07-23T18:25:43.511Z', object: 'Compré un libro', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Eliminar la transacción especificada

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.