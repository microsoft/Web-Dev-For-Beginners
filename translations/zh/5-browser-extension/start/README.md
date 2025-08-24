<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "26fd39046d264ba185dcb086d3a8cf3e",
  "translation_date": "2025-08-23T23:41:12+00:00",
  "source_file": "5-browser-extension/start/README.md",
  "language_code": "zh"
}
-->
# Carbon Trigger 浏览器扩展：入门代码

使用 tmrow 的 C02 Signal API 来追踪电力使用情况，构建一个浏览器扩展，让您可以在浏览器中直接提醒所在地区的电力使用情况有多繁重。临时使用此扩展可以帮助您根据这些信息对活动进行判断。

![扩展截图](../../../../5-browser-extension/extension-screenshot.png)

## 开始使用

您需要安装 [npm](https://npmjs.com)。将此代码下载到您电脑上的一个文件夹中。

安装所有所需的包：

```
npm install
```

使用 webpack 构建扩展：

```
npm run build
```

在 Edge 浏览器中安装扩展，请使用浏览器右上角的“三点”菜单找到扩展面板。从那里选择“加载未打包的扩展”以加载新扩展。在提示中打开“dist”文件夹，扩展将被加载。要使用此扩展，您需要 CO2 Signal API 的 API 密钥（[通过电子邮件获取](https://www.co2signal.com/) - 在此页面的框中输入您的电子邮件）以及与 [Electricity Map](https://www.electricitymap.org/map) 对应的地区代码（例如，在波士顿，我使用 'US-NEISO'，可以在 [此处](http://api.electricitymap.org/v3/zones) 找到地区代码）。

![安装](../../../../5-browser-extension/install-on-edge.png)

一旦在扩展界面中输入了 API 密钥和地区代码，浏览器扩展栏中的彩色点应该会根据您所在地区的能源使用情况发生变化，并为您提供建议，告诉您哪些耗能活动是适合进行的。这个“点”系统的概念来源于 [Energy Lollipop 扩展](https://energylollipop.com/)，该扩展用于加州的排放情况。

**免责声明**：  
本文档使用AI翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于重要信息，建议使用专业人工翻译。我们不对因使用此翻译而产生的任何误解或误读承担责任。