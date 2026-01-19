<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "21b364c158c8e4f698de65eeac16c9fe",
  "translation_date": "2026-01-08T16:14:56+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ms.md",
  "language_code": "pcm"
}
-->
# Carbon Trigger Browser Extension: Complete Code

Using the CO2 Signal API tmrow to detect electricity usage, build a browser extension so you fit get reminder for your browser about how heavy your region electricity use be. Using this extension specifically go help you make decisions about your activity based on this information.

![browser extension screenshot](../../../../../translated_images/pcm/extension-screenshot.0e7f5bfa110e92e3.webp)

## Start Here

You need to install [npm](https://npmjs.com). Download copy of this code to folder for your computer.

Install all the packages wey you need:

```
npm install
```

Build the extension from webpack

```
npm run build
```

To install for Edge, use the 'three dots' menu for the top right corner of browser to find Extensions panel. From there, choose 'Load Unpacked' to load new extension. Open the 'dist' folder on request and the extension go load. To use am, you need API key for CO2 Signal API ([get one here via email](https://www.co2signal.com/) - enter your email inside the box for this page) and [code for your region](http://api.electricitymap.org/v3/zones) wey match the [Electricity Map](https://www.electricitymap.org/map) (for Boston, for example, I use 'US-NEISO').

![downloading](../../../../../translated_images/pcm/install-on-edge.78634f02842c4828.webp)

Once the API key and region don enter into the extension interface, the coloured dot for the browser extension bar go change to show your region electricity usage and give you idea about the kind heavy activities wey make sense for you to do. The concept behind the 'dot' system dem give me from [Energy Lollipop browser extension](https://energylollipop.com/) for California emissions.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis document don translate wit AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we dey try make am correct, make you sabi say automated translations fit get mistakes or no too correct. Di original document wey e base for e own language na di correct source. If na important tins, na professional human translation better. We no dey responsible for any wahala or wrong understanding wey fit happen from dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->