# Extension de navigateur Carbon Trigger: Completed Code

En dey use API C02 Signal wey tmrow get to track how electricity dey consume, make you build browser extension so dat you fit get reminder straight for your browser about how much electricity your area dey use. Using dis kind ad hoc extension go help you make better judgment about your activities based on dis info.

![capture d'extension](../../../../../translated_images/pcm/extension-screenshot.0e7f5bfa110e92e3.webp)

## Débuter

You go need to get [npm](https://npmjs.com) install. Download one copy of dis code for one folder for your computer.

Install all di packages wey you need:

```
npm install
```

Build di extension from webpack

```
npm run build
```

To install for Edge, use di 'three dots' menu for di top right corner of your browser to find di Extensions panel. From there, select 'Load unpacked extension' to load new extension. Open di 'dist' folder when e ask and di extension go load. To use am, you need API key for CO2 Signal API ([get one here by email](https://www.co2signal.com/) - put your email for di box for dis page) plus di [code for your region](http://api.electricitymap.org/v3/zones) wey match with di [Electricity map](https://www.electricitymap.org/map) (for example, for Boston, I use 'US- NEISO').

![installation](../../../../../translated_images/pcm/install-on-edge.78634f02842c4828.webp)

Once you don enter di API key and region inside extension interface, di colored dot for di browser extension bar go change to show how much power your area dey consume and e go give you sign about which energy-heavy activities e go good make you do. Di idea behind dis 'points' system na from di [Energy Lollipop extension](https://energylollipop.com/) wey dem make for California emissions.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis document don translate wit AI translation service wey dem dey call [Co-op Translator](https://github.com/Azure/co-op-translator). Even though we dey try make am correct, abeg sabi say automatic translation fit get some errors or wrong tins. Di original document wey dem write for im own language na im be di main correct source. If na serious mata be dat, better to use professional human translation. We no go take responsibility for any misunderstanding or wrong meaning wey fit show from dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->