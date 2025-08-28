<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-28T11:27:41+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "en"
}
-->
# Carbon Trigger Browser Extension: Code to Get Started

We will use tmrow's CO2 Signal API to monitor electricity usage and create a browser extension that provides a direct reminder in your browser about the electricity intensity in your region. Using this custom extension will help you evaluate your activities based on this information.

![screenshot of the extension](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.en.png)

## Getting Started

You need to have [npm](https://npmjs.com) installed. Download a copy of this code to a folder on your computer.

Install all required packages:

```
npm install
```

Build the extension using webpack:

```
npm run build
```

To install on Edge, use the "three dots" menu in the top-right corner of the browser to find the Extensions panel. If not already enabled, turn on Developer Mode (bottom left). Select "Load unpacked" to load a new extension. Open the "dist" folder when prompted, and the extension will be loaded. To use it, you will need an API key for the CO2 Signal API (you can [get one here via email](https://www.co2signal.com/) - enter your email in the box on this page) and the [code for your region](http://api.electricitymap.org/v3/zones) corresponding to the [electricity map](https://www.electricitymap.org/map) (for example, in Boston, "US-NEISO").

![installation](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.en.png)

Once the API key and region are entered in the extension interface, the colored dot in the browser's extension bar should change to reflect your region's energy usage and provide a pointer on which high-energy activities would be appropriate to perform. The concept behind this "dot" system was inspired by the [Energy Lollipop extension](https://energylollipop.com/) for California emissions.

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we aim for accuracy, please note that automated translations may include errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is advised. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.