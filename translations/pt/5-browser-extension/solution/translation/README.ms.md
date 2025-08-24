<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "21b364c158c8e4f698de65eeac16c9fe",
  "translation_date": "2025-08-24T13:22:12+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ms.md",
  "language_code": "pt"
}
-->
# Extensão do Navegador Carbon Trigger: Código Completo

Utilizando a API CO2 Signal da tmrow para monitorizar o consumo de eletricidade, crie uma extensão de navegador que permita receber alertas no seu navegador sobre o impacto do consumo de eletricidade na sua região. Usar esta extensão pode ajudá-lo a tomar decisões informadas sobre as suas atividades com base nestas informações.

![captura de ecrã da extensão do navegador](../../../../../5-browser-extension/extension-screenshot.png)

## Começar Aqui

É necessário instalar o [npm](https://npmjs.com). Faça o download de uma cópia deste código para uma pasta no seu computador.

Instale todos os pacotes necessários:

```
npm install
```

Compile a extensão com o webpack:

```
npm run build
```

Para instalar no Edge, utilize o menu dos 'três pontos' no canto superior direito do navegador para aceder ao painel de Extensões. A partir daí, selecione 'Carregar sem compactação' para adicionar uma nova extensão. Abra a pasta 'dist' quando solicitado, e a extensão será carregada. Para utilizá-la, precisará de uma chave API para a API CO2 Signal ([obtenha uma aqui por e-mail](https://www.co2signal.com/) - insira o seu e-mail na caixa disponível nesta página) e do [código da sua região](http://api.electricitymap.org/v3/zones) correspondente ao [Electricity Map](https://www.electricitymap.org/map) (em Boston, por exemplo, utilizo 'US-NEISO').

![a carregar](../../../../../5-browser-extension/install-on-edge.png)

Depois de inserir a chave API e a região na interface da extensão, o ponto colorido na barra da extensão do navegador mudará para refletir o consumo de energia da sua região, fornecendo-lhe indicações sobre quais atividades intensivas são mais adequadas para realizar. O conceito por trás deste sistema de 'pontos' foi inspirado pela [extensão de navegador Energy Lollipop](https://energylollipop.com/) para emissões na Califórnia.

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.