# Extensión de navegador Carbon Trigger: Código completo

Construye una extensión de navegador que, utilizando la API de CO2 Signal de tmrow, muestre un recordatorio en tu navegador sobre cuánta energía se está utilizando en tu región. Esto te permitirá tomar decisiones basadas en esta información sobre tus actividades.

![extension screenshot](../../../../../5-browser-extension/extension-screenshot.png)

## Introducción

Es necesario tener [npm](https://npmjs.com) instalado. Descarga una copia de este código en una carpeta de tu computadora.

Instala todos los paquetes necesarios.

```
npm install
```

Construye la extensión utilizando webpack.

```
npm run build
```

Para instalarla en Edge, encuentra el panel de "Extensiones" desde el menú de "tres puntos" en la esquina superior derecha del navegador. Desde allí, selecciona "Cargar sin empaquetar" y carga la nueva extensión. En el cuadro de diálogo, abre la carpeta "dist" y la extensión se cargará. Para usarla, necesitarás una clave de API de CO2 Signal ([obtén una aquí por correo electrónico](https://www.co2signal.com/) - ingresa tu correo en el cuadro de esa página) y el [código de tu región](http://api.electricitymap.org/v3/zones) correspondiente en [Electricity Map](https://www.electricitymap.org/map) (por ejemplo, para Boston, utiliza 'US-NEISO').

![installing](../../../../../5-browser-extension/install-on-edge.png)

Una vez que ingreses la clave de API y tu región en la interfaz de la extensión, el punto de color que aparece en la barra de extensiones del navegador cambiará, reflejando el uso de energía en tu región. Esto te indicará qué tipo de actividades que requieren energía son más apropiadas en ese momento. El concepto del sistema de "puntos" fue inspirado por la extensión [Energy Lollipop](https://energylollipop.com/) para las emisiones de California.

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.