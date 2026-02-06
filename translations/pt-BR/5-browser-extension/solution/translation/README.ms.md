# Extensão do Navegador Carbon Trigger: Código Completo

Usando a API CO2 Signal da tmrow para monitorar o consumo de eletricidade, crie uma extensão de navegador que possa alertá-lo sobre o impacto do consumo de energia na sua região. O uso dessa extensão pode ajudá-lo a tomar decisões mais conscientes sobre suas atividades com base nessas informações.

![captura de tela da extensão do navegador](../../../../../translated_images/pt-BR/extension-screenshot.0e7f5bfa110e92e3.webp)

## Começando

Você precisará instalar o [npm](https://npmjs.com). Baixe uma cópia deste código para uma pasta no seu computador.

Instale todos os pacotes necessários:

```
npm install
```

Compile a extensão usando o webpack:

```
npm run build
```

Para instalar no Edge, use o menu de 'três pontos' no canto superior direito do navegador para acessar o painel de Extensões. A partir daí, selecione 'Carregar sem compactação' para adicionar uma nova extensão. Abra a pasta 'dist' quando solicitado, e a extensão será carregada. Para utilizá-la, você precisará de uma chave de API para a API CO2 Signal ([obtenha uma aqui por e-mail](https://www.co2signal.com/) - insira seu e-mail na caixa na página) e [o código da sua região](http://api.electricitymap.org/v3/zones) correspondente ao [Electricity Map](https://www.electricitymap.org/map) (em Boston, por exemplo, eu uso 'US-NEISO').

![baixando](../../../../../translated_images/pt-BR/install-on-edge.78634f02842c4828.webp)

Depois de inserir a chave de API e a região na interface da extensão, um ponto colorido na barra da extensão do navegador mudará para refletir o consumo de energia da sua região e fornecerá sugestões sobre quais atividades intensivas são mais adequadas para o momento. O conceito por trás do sistema de 'pontos' foi inspirado pela [extensão de navegador Energy Lollipop](https://energylollipop.com/) para emissões na Califórnia.

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.