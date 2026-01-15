<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-28T11:28:22+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "en"
}
-->
# Carbon Trigger Browser Extension: Complete Code

Using tmrow's CO2 signal API to track electricity usage, create a browser extension so you can have a direct reminder in your browser about your region's electricity consumption. Using this ad hoc extension will help you make decisions about your activities based on this information.

![extension screenshot](../../../../../translated_images/en/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

## Getting Started

You will need [npm](https://npmjs.com) installed. Download a copy of this code into a folder on your computer.

Install all the required packages:

```
npm install
```

Build the extension using webpack:

```
npm run build
```

To install on Edge, use the 'three dots' menu in the top-right corner of the browser to find the Extensions panel. From there, select 'Load unpacked' to load a new extension. Open the 'dist' folder when prompted, and the extension will be loaded. To use it, you will need an API key for the CO2 Signal API ([get one here via email](https://www.co2signal.com/) - enter your email in the box on this page) and the [code for your region](http://api.electricitymap.org/v3/zones) corresponding to the [Electricity Map](https://www.electricitymap.org/map) (in Boston, for example, I use 'US-NEISO').

![installing](../../../../../translated_images/en/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

Once the API key and region are entered in the extension interface, the colored dot in the browser's extension bar should change to reflect your region's energy usage and give you an indicator about high-energy consumption activities that would be appropriate for you. The concept behind this "dot" system was inspired by the [Energy Lollipop extension](https://energylollipop.com/) for California emissions.

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we aim for accuracy, please note that automated translations may include errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is advised. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.