# Extensión de navegador Carbon Trigger: Código completado

Usando la API C02 Signal de tmrow para monitorear el consumo de electricidad, crea una extensión de navegador para que puedas recibir un recordatorio directamente en tu navegador sobre el consumo de electricidad en tu región. El uso de esta extensión te ayudará a tomar decisiones sobre tus actividades basándote en esta información.

![captura de extensión](../../../../../5-browser-extension/extension-screenshot.png)

## Comenzar

Necesitarás tener [npm](https://npmjs.com) instalado. Descarga una copia de este código en una carpeta de tu computadora.

Instala todos los paquetes necesarios:

```
npm install
```

Construye la extensión con webpack:

```
npm run build
```

Para instalar en Edge, utiliza el menú de 'tres puntos' en la esquina superior derecha del navegador para encontrar el panel de Extensiones. Desde allí, selecciona 'Cargar extensión descomprimida' para cargar una nueva extensión. Abre la carpeta 'dist' cuando se te solicite y la extensión se cargará. Para usarla, necesitarás una clave API para la API de CO2 Signal ([obtén una aquí por correo electrónico](https://www.co2signal.com/) - ingresa tu correo electrónico en el cuadro de esta página) y el [código para tu región](http://api.electricitymap.org/v3/zones) correspondiente al [Mapa de electricidad](https://www.electricitymap.org/map) (en Boston, por ejemplo, utilizo 'US-NEISO').

![instalación](../../../../../5-browser-extension/install-on-edge.png)

Una vez que la clave API y la región se ingresen en la interfaz de la extensión, el punto de color en la barra de extensiones del navegador debería cambiar para reflejar el consumo de energía de tu región y darte un indicador sobre las actividades que consumen energía y que sería apropiado realizar. El concepto detrás de este sistema de 'puntos' me fue inspirado por la [extensión Energy Lollipop](https://energylollipop.com/) para las emisiones en California.

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.