# Extensión del navegador Carbon Trigger: Código completo

Usando la API de señal de CO2 de tmrow para rastrear el uso de electricidad, cree una extensión de navegador que le permita tener un recordatorio directo en su navegador sobre el consumo de electricidad en su región. El uso de esta extensión personalizada le ayudará a tomar decisiones informadas sobre sus actividades basándose en esta información.

![captura de pantalla de la extensión](../../../../../5-browser-extension/solution/start/extension-screenshot.png)

## Empezando

Debe tener [npm](https://npmjs.com) instalado. Descargue una copia de este código en una carpeta de su computadora.

Instale todos los paquetes necesarios:

```
npm install
```

Construya la extensión con webpack:

```
npm run build
```

Para instalar en Edge, use el menú de 'tres puntos' en la esquina superior derecha del navegador para acceder al panel de Extensiones. Desde allí, seleccione 'Cargar desempaquetado' para añadir una nueva extensión. Abra la carpeta 'dist' cuando se le solicite y la extensión se cargará. Para usarla, necesitará una clave API para la API de CO2 Signal ([obtenga una aquí por correo electrónico](https://www.co2signal.com/) - ingrese su correo electrónico en el cuadro de esta página) y el [código para su región](http://api.electricitymap.org/v3/zones) correspondiente al [Mapa de electricidad](https://www.electricitymap.org/map) (en Boston, por ejemplo, utilizo 'US-NEISO').

![instalando](../../../../../5-browser-extension/solution/start/install-on-edge.png)

Una vez que ingrese la clave API y la región en la interfaz de la extensión, el punto de color en la barra de extensiones del navegador debería cambiar para reflejar el uso de energía en su región y darle una indicación sobre las actividades de alto consumo de energía que serían apropiadas para usted. El concepto detrás de este sistema de "puntos" me lo inspiró la [extensión Energy Lollipop](https://energylollipop.com/) para las emisiones en California.

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.