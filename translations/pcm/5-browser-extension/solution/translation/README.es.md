# Carbon Trigger Browser Extension: Full Code

Using tmrow's CO2 signal API to track electricity use, make a browser extension so you fit get reminder directly for your browser about your area's electricity consumption. This kind extension go help you take decisions about your activities based on this information.

![extension screenshot](../../../../../translated_images/extension-screenshot.352c4c3ba54e4041.pcm.png)

## Getting Started

You gats get [npm](https://npmjs.com) installed. Download one copy of this code for one folder for your computer.

Install all the necessary packages:

```
npm install
```

Build the extension from webpack:

```
npm run build
```

To install for Edge, use the 'three dots' menu for the top right corner of the browser to find the Extensions panel. From there, select 'Load unpacked' to load new extension. Open the 'dist' folder wen dem ask you and the extension go load. To use am, you go need API key for CO2 Signal API ([get one here by email](https://www.co2signal.com/) - enter your email for the box on this page) and the [code for your area](http://api.electricitymap.org/v3/zones) wey match the [Electricity map](https://www.electricitymap.org/map) (for Boston, for example, I dey use 'US- NEISO').

![installing](../../../../../translated_images/install-on-edge.8bd0ee3ca7dcda1c.pcm.png)

Once you don enter the API key and the region for the extension interface, the color dot for the browser extension bar go change to show how your area's energy use dey and give you one signal about high energy consumption activities wey go make sense for you. The idea behind this "dot" system I get am from the [Energy Lollipop extension](https://energylollipop.com/) for California emissions.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:  
Dis document don translate wit AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Even tho we dey try make am correct, abeg sabi say automated translation fit get mistake or no exactly correct. The original document wey e come from na im get final authority. For important information, make person wey sabi do professional human translation help you. We no go take responsibility if person no understand or misinterpret anything from dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->