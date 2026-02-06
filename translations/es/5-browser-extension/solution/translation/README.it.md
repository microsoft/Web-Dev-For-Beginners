# Extensión del navegador Carbon Trigger: código para empezar

Se utilizará la API Signal CO2 de tmrow para monitorear el uso de electricidad y crear una extensión para el navegador que permita tener un recordatorio directo en el navegador sobre el impacto del uso de electricidad en tu región. El uso de esta extensión personalizada ayudará a evaluar tus actividades basándote en esta información.

![captura de pantalla de la extensión](../../../../../5-browser-extension/extension-screenshot.png)

## Para Empezar

Es necesario tener [npm](https://npmjs.com) instalado. Descarga una copia de este código en una carpeta de tu computadora.

Instala todos los paquetes requeridos:

```
npm install
```

Crea la extensión con webpack:

```
npm run build
```

Para instalar en Edge, utiliza el menú de "tres puntos" en la esquina superior derecha del navegador para encontrar el panel de Extensiones. Si aún no está activado, habilita el Modo desarrollador (en la parte inferior izquierda). Selecciona "Cargar sin empaquetar" para cargar una nueva extensión. Abre la carpeta "dist" cuando se te solicite y la extensión se cargará. Para usarla, necesitarás una clave API para la API de CO2 Signal (puedes [obtenerla aquí por correo electrónico](https://www.co2signal.com/) - ingresa tu correo electrónico en el cuadro de esta página) y el [código de tu región](http://api.electricitymap.org/v3/zones) correspondiente al [mapa eléctrico](https://www.electricitymap.org/map) (por ejemplo, en Boston, "US-NEISO").

![instalación](../../../../../5-browser-extension/install-on-edge.png)

Una vez que la clave API y la región se hayan ingresado en la interfaz de la extensión, el punto de color en la barra de extensiones del navegador debería cambiar para reflejar el uso de energía de la región y proporcionar una indicación sobre qué actividades de alto consumo energético serían apropiadas para realizar. El concepto detrás de este sistema de "puntos" fue inspirado por la [extensión Energy Lollipop](https://energylollipop.com/) para las emisiones de California.

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de ningún malentendido o interpretación errónea que surja del uso de esta traducción.