# Carbon Trigger 浏览器扩展：完整代码

利用 tmrow 的 CO2 Signal API 检测电力使用情况，构建一个浏览器扩展，让您可以在浏览器中收到关于所在地区电力使用情况的提醒。使用这个扩展可以帮助您根据这些信息更好地规划自己的活动。

![浏览器扩展截图](../../../../../5-browser-extension/extension-screenshot.png)

## 从这里开始

您需要安装 [npm](https://npmjs.com)。将此代码的副本下载到您电脑上的一个文件夹中。

安装所有必要的包：

```
npm install
```

使用 webpack 构建扩展：

```
npm run build
```

要在 Edge 中安装，请使用浏览器右上角的“三点菜单”找到扩展面板。从那里选择“加载未打包的扩展”以加载新的扩展。根据提示打开“dist”文件夹，扩展将被加载。要使用它，您需要一个 CO2 Signal API 的 API 密钥（[通过电子邮件获取一个](https://www.co2signal.com/) - 在页面上的框中输入您的电子邮件）以及一个与 [Electricity Map](https://www.electricitymap.org/map) 匹配的地区代码 ([查看地区代码](http://api.electricitymap.org/v3/zones))。例如，在波士顿，我使用的是“US-NEISO”。

![正在下载](../../../../../5-browser-extension/install-on-edge.png)

在扩展界面中输入 API 密钥和地区代码后，浏览器扩展栏中的彩色点将会根据您所在地区的能源使用情况发生变化，并为您提供建议，帮助您决定是否进行高耗能活动。这个“彩色点”系统的概念来源于 [Energy Lollipop 浏览器扩展](https://energylollipop.com/)，该扩展专为加州的排放情况设计。

**免责声明**：  
本文档使用AI翻译服务 [Co-op Translator](https://github.com/Azure/co-op-translator) 进行翻译。尽管我们努力确保翻译的准确性，但请注意，自动翻译可能包含错误或不准确之处。应以原始语言的文档作为权威来源。对于关键信息，建议使用专业人工翻译。因使用本翻译而引起的任何误解或误读，我们概不负责。