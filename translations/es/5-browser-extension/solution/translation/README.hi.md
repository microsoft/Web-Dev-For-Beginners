# Extensión de navegador Carbon Trigger: Código completado

Utilizando la API de CO2 Signal de tmrow para rastrear el uso de electricidad, se ha creado una extensión de navegador que te recuerda cuán intensivo es el uso de electricidad en tu área mientras navegas. Usar esta extensión te ayudará a tomar decisiones informadas sobre tus actividades basándote en esta información.

![Captura de pantalla de la extensión](../../../../../5-browser-extension/extension-screenshot.png)

## Comenzando

Necesitarás instalar [npm](https://npmjs.com). Descarga una copia de este código en una carpeta de tu computadora.

Instala todos los paquetes necesarios:

```
npm install
```

Construye la extensión con webpack:

```
npm run build
```

Para instalar en Edge, utiliza el menú de 'tres puntos' en la esquina superior derecha del navegador para encontrar el panel de extensiones. Desde allí, selecciona 'Cargar sin empaquetar' para cargar una nueva extensión. En el aviso, abre la carpeta 'dist' y la extensión se cargará. Para usarla, necesitarás una clave de API de CO2 Signal ([obtenla aquí por correo electrónico](https://www.co2snal.com/) ingresando tu correo en el cuadro de esa página) y [el código de tu región](http://api.electricitymap.org/v3/zones) del [Electricity Map](https://www.electricitymap.org/map) (por ejemplo, en Boston, uso 'US-NEISO').

![instalando](../../../../../5-browser-extension/install-on-edge.png)

Una vez que la clave de API y la región se hayan ingresado en la interfaz de la extensión, el punto de color en la barra de extensiones del navegador debería cambiar para reflejar el uso de energía en tu área y darte un indicador sobre qué actividades intensivas en energía serían apropiadas para tu desempeño. El concepto detrás de este sistema de 'puntos' me fue inspirado por la extensión [Energy Lollipop](https://energylollipop.com/) para las emisiones de California.

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automatizadas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.