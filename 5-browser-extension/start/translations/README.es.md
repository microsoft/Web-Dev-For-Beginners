# Extensión del navegador Carbon Trigger: Código de inicio

Usando la API de señal C02 de tmrow para rastrear el uso de electricidad, cree una extensión de navegador para que pueda tener un recordatorio directamente en su navegador sobre el consumo de electricidad de su región. El uso de esta extensión ad hoc le ayudará a tomar decisiones sobre sus actividades basándose en esta información.

![extension screenshot](../extension-screenshot.png)

## Empezando

Deberá tener [npm](https://npmjs.com) instalado. Descargue una copia de este código en una carpeta de su computadora.

Instale todos los paquetes necesarios:

```
npm install
```

Construye la extensión desde webpack:

```
npm run build
```

Para instalar en Edge, use el menú de 'tres puntos' en la esquina superior derecha del navegador para encontrar el panel Extensiones. Desde allí, seleccione 'Cargar sin empaquetar' para cargar una nueva extensión. Abra la carpeta 'dist' cuando se le solicite y se cargará la extensión. Para usarlo, necesitará una clave API para la API de CO2 Signal ([obtenga una aquí por correo electrónico](https://www.co2signal.com/) - ingrese su correo electrónico en el cuadro de esta página) y el [código para su región](http://api.electricitymap.org/v3/zones) correspondiente al [Mapa de electricidad](https://www.electricitymap.org/map) (en Boston, por ejemplo, utilizo 'US- NEISO').

![instalación](../install-on-edge.png)

Una vez que se ingresa la clave API y la región en la interfaz de extensión, el punto de color en la barra de extensión del navegador debe cambiar para reflejar el uso de energía de su región y darle un indicador sobre las actividades de alto consumo de energía que serían apropiadas para usted. El concepto detrás de este sistema de "puntos" me lo dio la [extensión Energy Lollipop](https://energylollipop.com/) para las emisiones de California.

