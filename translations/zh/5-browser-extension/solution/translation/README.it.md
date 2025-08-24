<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-23T23:52:42+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "zh"
}
-->
# Carbon Trigger 浏览器扩展：启动代码

我们将使用 tmrow 的 Signal CO2 API 来监控电力使用情况，创建一个浏览器扩展，以便直接在浏览器中提醒您所在地区的电力使用情况有多严重。使用这个定制扩展可以帮助您根据这些信息评估自己的活动。

![扩展截图](../../../../../5-browser-extension/extension-screenshot.png)

## 开始

需要先安装 [npm](https://npmjs.com)。将此代码下载到您电脑的一个文件夹中。

安装所有所需的包：

```
npm install
```

使用 webpack 构建扩展：

```
npm run build
```

要在 Edge 上安装，请使用浏览器右上角的“三点”菜单找到扩展面板。如果尚未启用，请启用开发者模式（左下角）。选择“加载未打包”以加载新的扩展。在提示中打开“dist”文件夹，扩展将被加载。要使用它，您需要一个 CO2 Signal API 的 API 密钥（可以通过[电子邮件获取](https://www.co2signal.com/) - 在页面上的框中输入您的电子邮件）以及与[电力地图](https://www.electricitymap.org/map)对应的[区域代码](http://api.electricitymap.org/v3/zones)（例如，在波士顿，代码为“US-NEISO”）。

![安装](../../../../../5-browser-extension/install-on-edge.png)

一旦在扩展界面中输入了 API 密钥和区域代码，浏览器扩展栏中的彩色点应该会根据该地区的能源使用情况发生变化，并提供指示哪些高能耗活动适合执行的建议。这个“点”系统的概念来源于加州排放的 [Energy Lollipop 扩展](https://energylollipop.com/)。

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原文档的原始语言版本为权威来源。对于关键信息，建议使用专业人工翻译。我们对因使用本翻译而引起的任何误解或误读不承担责任。