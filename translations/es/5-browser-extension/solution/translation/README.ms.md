# Extensión del Navegador Carbon Trigger: Código Completo

Utilizando la API de CO2 Signal de tmrow para monitorear el consumo eléctrico, crea una extensión de navegador que te permita recibir alertas en tu navegador sobre el nivel de consumo eléctrico en tu región. Usar esta extensión te ayudará a tomar decisiones informadas sobre tus actividades basándote en esta información.

![captura de pantalla de la extensión del navegador](../../../../../5-browser-extension/extension-screenshot.png)

## Comienza Aquí

Necesitas instalar [npm](https://npmjs.com). Descarga una copia del código en una carpeta de tu computadora.

Instala todos los paquetes necesarios:

```
npm install
```

Construye la extensión con webpack:

```
npm run build
```

Para instalarla en Edge, utiliza el menú de 'tres puntos' en la esquina superior derecha del navegador para encontrar el panel de Extensiones. Desde allí, selecciona 'Cargar sin empaquetar' para añadir la nueva extensión. Abre la carpeta 'dist' cuando se te solicite y la extensión se cargará. Para usarla, necesitarás una clave API para la API de CO2 Signal ([obtén una aquí por correo electrónico](https://www.co2signal.com/) - ingresa tu correo electrónico en el cuadro de la página) y [el código de tu región](http://api.electricitymap.org/v3/zones) correspondiente al [Electricity Map](https://www.electricitymap.org/map) (en Boston, por ejemplo, yo utilizo 'US-NEISO').

![descargando](../../../../../5-browser-extension/install-on-edge.png)

Una vez que la clave API y la región se hayan ingresado en la interfaz de la extensión, el punto de color en la barra de extensiones del navegador cambiará para reflejar el consumo energético de tu región y te dará indicaciones sobre las actividades más adecuadas para realizar. El concepto detrás del sistema de 'puntos' me fue inspirado por [la extensión de navegador Energy Lollipop](https://energylollipop.com/) para las emisiones de California.

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.