# Carbon Trigger Browser Extension: Completed Code

Using tmrow's C02 Signal API to track electricity usage, build a browser extension so that you fit get reminder right for your browser about how heavy your region's electricity usage be. Using this extension ad hoc go help you make judgement calls on your activities based on this information.

![extension screenshot](../../../../translated_images/pcm/extension-screenshot.0e7f5bfa110e92e3.webp)

## Getting Started

You go need get [npm](https://npmjs.com) installed. Download copy of this code for folder for your computer.

Install all di required packages:

```
npm install
```

Build di extension from webpack

```
npm run build
```

To install for Edge, use di 'three dot' menu for di top right corner of di browser to find di Extensions panel. From there, select 'Load Unpacked' to load new extension. Open di 'dist' folder when dem ask you and di extension go load. To use am, you need API key for CO2 Signal's API ([get one here via email](https://www.co2signal.com/) - put your email for di box for dis page) plus di [code for your region](http://api.electricitymap.org/v3/zones) wey match di [Electricity Map](https://www.electricitymap.org/map) (for Boston, as example, I dey use 'US-NEISO').

![installing](../../../../translated_images/pcm/install-on-edge.78634f02842c4828.webp)

Once di API key and region don enter for di extension interface, di colored dot wey dey di browser extension bar go change to show how your region energy use dey and go give you hint on which energy-heavy activities fit make sense for you to do. Di idea behind dis 'dot' system na wetin di [Energy Lollipop extension](https://energylollipop.com/) give me for California emissions.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis document don translate wit AI translation service wey dem dey call [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we dey try make am correct, abeg sabi say machine translation fit get some small mistake or no too correct. Di original document for dia own language na di correct one. If na serious matter, e good make human expert translate am. We no responsible if mistake or wrong meaning show because of dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->