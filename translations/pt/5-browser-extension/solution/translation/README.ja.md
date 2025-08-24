<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-24T13:24:57+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "pt"
}
-->
# Extensão de Navegador Carbon Trigger: Código Finalizado

Construa uma extensão de navegador que utilize a API CO2 Signal da tmrow para monitorizar o consumo de energia na sua região e exibir lembretes no navegador sobre o impacto do uso de eletricidade. Com esta extensão, pode tomar decisões informadas sobre as suas atividades com base nesta informação.

![captura de ecrã da extensão](../../../../../5-browser-extension/extension-screenshot.png)

## Introdução

É necessário ter o [npm](https://npmjs.com) instalado. Faça o download de uma cópia deste código para uma pasta no seu computador.

Instale todos os pacotes necessários.

```
npm install
```

Construa a extensão utilizando o webpack.

```
npm run build
```

Para instalar no Edge, localize o painel "Extensões" no menu dos "três pontos" no canto superior direito do navegador. A partir daí, selecione "Carregar sem compactação" e carregue a nova extensão. Quando solicitado, abra a pasta "dist" para carregar a extensão. Para utilizá-la, precisará de uma chave de API da CO2 Signal ([obtenha uma aqui por e-mail](https://www.co2signal.com/) - insira o seu e-mail na caixa desta página) e do [código da sua região](http://api.electricitymap.org/v3/zones) correspondente no [Electricity Map](https://www.electricitymap.org/map) (em Boston, por exemplo, utiliza-se 'US-NEISO').

![instalação](../../../../../5-browser-extension/install-on-edge.png)

Depois de inserir a chave de API e a região na interface da extensão, verá um ponto colorido na barra de extensões do navegador. Este ponto muda de cor para refletir o consumo de energia na sua região, ajudando a determinar quais atividades que consomem energia são mais adequadas naquele momento. O conceito deste sistema de "ponto" foi inspirado pela extensão [Energy Lollipop](https://energylollipop.com/) para emissões na Califórnia.

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.