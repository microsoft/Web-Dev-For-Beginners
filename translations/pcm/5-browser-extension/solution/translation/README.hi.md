<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2026-01-08T16:06:34+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "pcm"
}
-->
# Carbon Trigger Browser Extension: Complete Code

To track electricity usage, use tmrow's CO2 Signal API to build a browser extension wey go remind you how heavy di electricity usage be for your area for your browser. Using dis temporary extension go help you decide your activities based on dis information.

![Extension Screenshot ](../../../../../translated_images/pcm/extension-screenshot.0e7f5bfa110e92e3.webp)

## Getting Started

You go need to install [npm](https://npmjs.com). Download one copy of dis code inside one folder for your computer.

Install all the necessary packages:

```
npm install
```

Build di extension using webpack

```
npm run build
```

To install for Edge, use di 'three-dot' menu for di top right corner of your browser to find di extension panel. From there, choose 'Load unpacked' to load new extension. Open di 'dist' folder at di prompt and di extension go load. To use am, you need an API key for di CO2 Signal API ([get am here via email](https://www.co2snal.com/) - enter your email for di box on dis page) and [code for your region](http://api.electricitymap.org/v3/zones) from [Electricity Map](https://www.electricitymap.org/map) (For example, for Boston, I dey use 'US-NEISO').

![installing](../../../../../translated_images/pcm/install-on-edge.78634f02842c4828.webp)

Once you don input di API key and region inside di extension interface, di colored dot for di browser extension bar suppose change to reflect how di energy use be for your area and also show you one indicator wey go tell you which energy-heavy activities fit be good for your performance. Di idea behind dis 'dot' system na from the California emissions [Energy Lollipop Extension](https://energylollipop.com/) wey I jaga.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis dokument don translate by AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we dey try make am correct, abeg sabi say automated translation fit get some mistakes or no-too-correct parts. The original dokument for im own language na im get correct authority. If na important info, e better make human professional translate am. We no go responsible if person waka mistake or misunderstand tins because of dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->