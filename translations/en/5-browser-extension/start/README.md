<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "26fd39046d264ba185dcb086d3a8cf3e",
  "translation_date": "2025-08-28T11:26:41+00:00",
  "source_file": "5-browser-extension/start/README.md",
  "language_code": "en"
}
-->
# Carbon Trigger Browser Extension: Starter Code

Using tmrow's CO2 Signal API to monitor electricity usage, create a browser extension that provides a reminder directly in your browser about the intensity of electricity usage in your region. Using this extension on the fly can help you make informed decisions about your activities based on this data.

![extension screenshot](../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.en.png)

## Getting Started

You need to have [npm](https://npmjs.com) installed. Download a copy of this code to a folder on your computer.

Install all the necessary packages:

```
npm install
```

Build the extension using webpack:

```
npm run build
```

To install on Edge, open the 'three dot' menu in the top right corner of the browser to access the Extensions panel. From there, select 'Load Unpacked' to add a new extension. When prompted, open the 'dist' folder, and the extension will load. To use it, you’ll need an API key for CO2 Signal's API ([request one here via email](https://www.co2signal.com/) - enter your email in the box on this page) and the [region code](http://api.electricitymap.org/v3/zones) corresponding to the [Electricity Map](https://www.electricitymap.org/map) (for example, in Boston, I use 'US-NEISO').

![installing](../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.en.png)

Once you input the API key and region into the extension interface, the colored dot in the browser extension bar will update to reflect your region's energy usage. It will also provide guidance on which energy-intensive activities might be suitable for you to undertake. The idea for this 'dot' system was inspired by the [Energy Lollipop extension](https://energylollipop.com/) for California emissions.

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we aim for accuracy, please note that automated translations may include errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is advised. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.