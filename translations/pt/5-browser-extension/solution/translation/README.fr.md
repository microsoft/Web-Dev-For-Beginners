<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9361268ca430b2579375009e1eceb5e5",
  "translation_date": "2025-08-24T13:23:09+00:00",
  "source_file": "5-browser-extension/solution/translation/README.fr.md",
  "language_code": "pt"
}
-->
# Extensão de navegador Carbon Trigger: Código Completo

Utilizando a API C02 Signal da tmrow para monitorizar o consumo de eletricidade, crie uma extensão de navegador para que possa receber lembretes diretamente no seu navegador sobre o consumo de eletricidade na sua região. O uso desta extensão personalizada ajudará a tomar decisões sobre as suas atividades com base nessas informações.

![captura de extensão](../../../../../5-browser-extension/extension-screenshot.png)

## Introdução

Será necessário ter o [npm](https://npmjs.com) instalado. Faça o download de uma cópia deste código para uma pasta no seu computador.

Instale todos os pacotes necessários:

```
npm install
```

Compile a extensão utilizando o webpack:

```
npm run build
```

Para instalar no Edge, utilize o menu 'três pontos' no canto superior direito do navegador para encontrar o painel Extensões. A partir daí, selecione 'Carregar extensão descompactada' para adicionar uma nova extensão. Abra a pasta 'dist' quando solicitado, e a extensão será carregada. Para utilizá-la, precisará de uma chave API para a API do CO2 Signal ([obtenha uma aqui por e-mail](https://www.co2signal.com/) - insira o seu e-mail na caixa desta página) e o [código da sua região](http://api.electricitymap.org/v3/zones) correspondente ao [Mapa de Eletricidade](https://www.electricitymap.org/map) (em Boston, por exemplo, utilizo 'US-NEISO').

![instalação](../../../../../5-browser-extension/install-on-edge.png)

Depois de inserir a chave API e a região na interface da extensão, o ponto colorido na barra de extensões do navegador deve mudar para refletir o consumo de energia da sua região e fornecer um indicador sobre as atividades que consomem mais energia e que seria apropriado realizar. O conceito por trás deste sistema de 'pontos' foi inspirado pela [extensão Energy Lollipop](https://energylollipop.com/) para emissões na Califórnia.

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.