# Mejorar el enrutamiento

## Instrucciones

La declaración de rutas contiene actualmente solo el ID de plantilla a usar. Pero cuando se muestra una página nueva, a veces se necesita un poco más. Mejoremos nuestra implementación de enrutamiento con dos características adicionales:

- Dé títulos a cada plantilla y actualice el título de la ventana con él cuando cambie la plantilla.
- Agregue una opción para ejecutar código después de que cambie la plantilla. Queremos imprimir `'Se muestra el panel'` en la consola del desarrollador cada vez que se muestra la página del panel.

## Rúbrica

| Criterios | Ejemplar | Adecuado | Necesita mejorar |
| -------- | --------- | -------- | ----------------- |
| | Las dos características están implementadas y funcionando. La adición de título y código también funciona para una nueva ruta agregada en la declaración de `routes`. | Las dos características funcionan, pero el comportamiento está codificado y no se puede configurar a través de la declaración de `routes`. Agregar una tercera ruta con la adición de título y código no funciona o funciona parcialmente. | Una de las funciones falta o no funciona correctamente.