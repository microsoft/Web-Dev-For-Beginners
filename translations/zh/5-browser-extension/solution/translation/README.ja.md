<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-23T23:53:33+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "zh"
}
-->
# 碳触发浏览器扩展：完成的代码

使用 tmrow 的 C02 Signal API 构建一个浏览器扩展，以追踪电力使用情况，并在浏览器中显示您所在地区的电力使用量作为提醒。通过使用此扩展，您可以根据这些信息来判断自己的活动。

![扩展截图](../../../../../5-browser-extension/extension-screenshot.png)

## 开始

您需要安装 [npm](https://npmjs.com)。请将此代码的副本下载到您电脑上的一个文件夹中。

安装所有必要的依赖包。

```
npm install
```

使用 webpack 构建扩展。

```
npm run build
```

要在 Edge 中安装，请在浏览器右上角的“三点”菜单中找到“扩展”面板。从那里选择“加载未打包的扩展”，然后加载新的扩展。在提示中打开“dist”文件夹，扩展就会被加载。要使用此扩展，您需要 CO2 Signal API 的 API 密钥（[通过电子邮件获取一个](https://www.co2signal.com/) - 在该页面的框中输入您的电子邮件），以及 [Electricity Map](https://www.electricitymap.org/map) 对应的 [您所在地区的代码](http://api.electricitymap.org/v3/zones)（例如，在波士顿使用 'US-NEISO'）。

![安装](../../../../../5-browser-extension/install-on-edge.png)

在扩展界面中输入 API 密钥和地区代码后，浏览器扩展栏中显示的彩色圆点会发生变化，反映您所在地区的能源使用情况，并指示适合进行哪些需要能源的活动。这种“圆点”系统的概念来源于加州排放量的 [Energy Lollipop 扩展](https://energylollipop.com/)。

**免责声明**：  
本文档使用AI翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原文档的原始语言版本为权威来源。对于关键信息，建议使用专业人工翻译。我们对于因使用本翻译而引起的任何误解或误读不承担责任。