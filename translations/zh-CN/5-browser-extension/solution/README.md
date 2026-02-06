# Carbon Trigger 浏览器扩展：完整代码

使用 tmrow 的 C02 Signal API 来追踪电力使用情况，构建一个浏览器扩展，让您可以直接在浏览器中收到关于您所在地区电力使用强度的提醒。临时使用此扩展可以帮助您根据这些信息对自己的活动做出判断。

![扩展截图](../../../../5-browser-extension/extension-screenshot.png)

## 快速开始

您需要安装 [npm](https://npmjs.com)。将此代码下载到您电脑的一个文件夹中。

安装所有必需的依赖包：

```
npm install
```

使用 webpack 构建扩展：

```
npm run build
```

在 Edge 浏览器中安装扩展，使用浏览器右上角的“三点”菜单找到扩展面板。从那里选择“加载未打包的扩展”以加载新扩展。在提示中打开“dist”文件夹，扩展将被加载。要使用此扩展，您需要一个 CO2 Signal API 的 API 密钥（[通过电子邮件获取](https://www.co2signal.com/) - 在此页面的框中输入您的电子邮件）以及与 [Electricity Map](https://www.electricitymap.org/map) 对应的 [地区代码](http://api.electricitymap.org/v3/zones)（例如，在波士顿，我使用的是“US-NEISO”）。

![安装](../../../../5-browser-extension/install-on-edge.png)

一旦在扩展界面中输入了 API 密钥和地区代码，浏览器扩展栏中的彩色圆点应会根据您所在地区的能源使用情况发生变化，并为您提供关于哪些高能耗活动适合进行的提示。这个“圆点”系统的概念来源于 [Energy Lollipop 扩展](https://energylollipop.com/)，它用于加州的碳排放监测。

**免责声明**：  
本文档使用AI翻译服务[Co-op Translator](https://github.com/Azure/co-op-translator)进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。原始语言的文档应被视为权威来源。对于关键信息，建议使用专业人工翻译。我们不对因使用此翻译而产生的任何误解或误读承担责任。