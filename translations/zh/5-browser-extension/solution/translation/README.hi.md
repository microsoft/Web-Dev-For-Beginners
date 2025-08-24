<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-23T23:50:02+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "zh"
}
-->
# Carbon Trigger 浏览器扩展：完整代码

使用 tmrow 的 CO2 Signal API 来追踪电力使用情况，构建一个浏览器扩展，以便在您的浏览器中提醒您所在地区的电力使用负荷情况。通过使用这个扩展，您可以根据这些信息来决定自己的活动安排。

![扩展截图](../../../../../5-browser-extension/extension-screenshot.png)

## 开始

您需要先安装 [npm](https://npmjs.com)。将此代码的副本下载到您的计算机中的一个文件夹。

安装所有必要的依赖包：

```
npm install
```

使用 Webpack 构建扩展：

```
npm run build
```

要在 Edge 浏览器中安装，请点击浏览器右上角的“三点”菜单，找到扩展面板。从那里选择“加载未打包的扩展”。在弹出的提示中，打开“dist”文件夹，扩展就会加载完成。要使用此扩展，您需要 CO2 Signal 的 API 密钥（[通过电子邮件在此处获取](https://www.co2snal.com/) - 在页面上的框中输入您的电子邮件）以及 [您所在地区的代码](http://api.electricitymap.org/v3/zones)（例如，在波士顿，我使用的是“US-NEISO”）[电力地图](https://www.electricitymap.org/map)。

![安装](../../../../../5-browser-extension/install-on-edge.png)

一旦您在扩展界面中输入了 API 密钥和地区代码，浏览器扩展栏中的彩色点应该会根据您所在地区的能源使用情况发生变化，并为您提供一个指示器，告诉您哪些能源密集型活动适合进行。这个“点”的概念灵感来源于加州排放的 [Energy Lollipop 扩展](https://energylollipop.com/)。

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于关键信息，建议使用专业人工翻译。我们对因使用此翻译而产生的任何误解或误读不承担责任。