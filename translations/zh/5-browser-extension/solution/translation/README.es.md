<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-23T23:49:06+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "zh"
}
-->
# Carbon Trigger 浏览器扩展：完整代码

使用 tmrow 的 CO2 Signal API 来追踪电力使用情况，创建一个浏览器扩展，让您可以直接在浏览器中查看所在地区的电力消耗情况。这款临时扩展可以帮助您根据这些信息做出活动决策。

![extension screenshot](../../../../../5-browser-extension/solution/start/extension-screenshot.png)

## 开始

您需要安装 [npm](https://npmjs.com)。将此代码下载到您电脑的一个文件夹中。

安装所有必要的包：

```
npm install
```

使用 webpack 构建扩展：

```
npm run build
```

要在 Edge 中安装，请使用浏览器右上角的“三点菜单”找到扩展面板。从那里选择“加载未打包的扩展”以加载新的扩展。当系统提示时，打开“dist”文件夹，扩展将被加载。要使用此扩展，您需要一个 CO2 Signal API 的 API 密钥（[通过电子邮件获取](https://www.co2signal.com/) - 在页面的输入框中输入您的电子邮件）以及 [电力地图](https://www.electricitymap.org/map) 对应的 [区域代码](http://api.electricitymap.org/v3/zones)（例如，在波士顿，我使用的是“US-NEISO”）。

![installing](../../../../../5-browser-extension/solution/start/install-on-edge.png)

一旦在扩展界面中输入了 API 密钥和区域代码，浏览器扩展栏中的颜色点应该会改变，以反映您所在地区的能源使用情况，并为您提供关于高能耗活动是否适合的指示。这个“点”系统的概念来源于 [Energy Lollipop 扩展](https://energylollipop.com/)，它用于加州的排放情况。

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。虽然我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于关键信息，建议使用专业人工翻译。我们不对因使用此翻译而产生的任何误解或误读承担责任。