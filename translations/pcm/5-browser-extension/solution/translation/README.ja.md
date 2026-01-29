# Kaabon Trigger Browser Extension: Di Complete Code

Wi go build browser extension wey go fit show reminder for your browser to track how much power una dey use for your area using tmrow C02 Signal API. Dis extension go help you judge your activities based on dis information if you use am adhoc.

![extension screenshot](../../../../../translated_images/pcm/extension-screenshot.0e7f5bfa110e92e3.webp)

## Getting Started

You go need get [npm](https://npmjs.com) installed. Download di copy of dis code into folder for your computer.

Install all di packages wey you need.

```
npm install
```

Build di extension from webpack.

```
npm run build
```

To install for Edge, find di "3 dots" menu for di top right corner of di browser then find "Extensions" panel. From dia select "Load Unpacked" to load di new extension. When prompt show, open di "dist" folder and di extension go load. To use am, you go need CO2 Signal API key ([get one here via email](https://www.co2signal.com/) - just put your email for di box for dis page) and di [Electricity Map](https://www.electricitymap.org/map) code for your region (for Boston, we dey use 'US-NEISO' for example).

![installing](../../../../../translated_images/pcm/install-on-edge.78634f02842c4828.webp)

Once you put your API key and region for di extension interface, di colored dot wey dey show for di browser extension bar go change to reflect your area energy usage and show which kind energy activity you suppose do. Dis "dot" system idea na from di [Energy Lollipop extension](https://energylollipop.com/) wey I see for California state emission.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Dis document na AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator) weh translate am. Even though we try make am correct, abeg sabi say automated translation fit get errors or mistake. Di original document wey dem write for im correct language na di real correct one. If na serious matter, e better make professional human translator do am. We no go responsible for any misunderstanding or wrong meaning wey fit come from using dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->