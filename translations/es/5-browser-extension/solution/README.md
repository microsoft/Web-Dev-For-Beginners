<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fab4e6b4f0efcd587a9029d82991f597",
  "translation_date": "2025-08-24T13:19:32+00:00",
  "source_file": "5-browser-extension/solution/README.md",
  "language_code": "es"
}
-->
# Extensión de Navegador Carbon Trigger: Código Completado

Usando la API CO2 Signal de tmrow para rastrear el uso de electricidad, construye una extensión de navegador para que puedas tener un recordatorio directamente en tu navegador sobre qué tan alta es la carga de uso eléctrico en tu región. Usar esta extensión de manera ad hoc te ayudará a tomar decisiones sobre tus actividades basándote en esta información.

![captura de pantalla de la extensión](../../../../5-browser-extension/extension-screenshot.png)

## Primeros Pasos

Necesitarás tener [npm](https://npmjs.com) instalado. Descarga una copia de este código en una carpeta de tu computadora.

Instala todos los paquetes necesarios:

```
npm install
```

Construye la extensión con webpack:

```
npm run build
```

Para instalar en Edge, utiliza el menú de los 'tres puntos' en la esquina superior derecha del navegador para encontrar el panel de Extensiones. Desde allí, selecciona 'Cargar sin empaquetar' para cargar una nueva extensión. Abre la carpeta 'dist' cuando se te solicite y la extensión se cargará. Para usarla, necesitarás una clave de API para la API de CO2 Signal ([obtén una aquí por correo electrónico](https://www.co2signal.com/) - ingresa tu correo en el cuadro de esta página) y el [código de tu región](http://api.electricitymap.org/v3/zones) correspondiente al [Electricity Map](https://www.electricitymap.org/map) (en Boston, por ejemplo, uso 'US-NEISO').

![instalando](../../../../5-browser-extension/install-on-edge.png)

Una vez que la clave de API y la región se ingresen en la interfaz de la extensión, el punto de color en la barra de extensiones del navegador debería cambiar para reflejar el uso de energía en tu región y darte una indicación sobre qué actividades intensivas en energía serían apropiadas para realizar. El concepto detrás de este sistema de 'punto' me fue inspirado por la extensión [Energy Lollipop](https://energylollipop.com/) para las emisiones de California.

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Si bien nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse como la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.