<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-25T23:54:51+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "br"
}
-->
# Extensão de Navegador Carbon Trigger: Código Completo

Usando a API CO2 Signal da tmrow para rastrear o uso de eletricidade, esta extensão de navegador foi criada para lembrar você sobre o impacto do uso de energia na sua região enquanto navega. Utilizar esta extensão pode ajudá-lo a tomar decisões informadas com base nessas informações.

![Captura de tela da extensão](../../../../../translated_images/br/extension-screenshot.0e7f5bfa110e92e3.webp)

## Começando

Você precisará instalar o [npm](https://npmjs.com). Baixe uma cópia deste código em uma pasta no seu computador.

Instale todos os pacotes necessários:

```
npm install
```

Crie a extensão usando o webpack:

```
npm run build
```

Para instalar no Edge, use o menu de 'três pontos' no canto superior direito do navegador para encontrar o painel de extensões. A partir daí, selecione 'Carregar sem empacotar' para carregar uma nova extensão. No prompt, abra a pasta 'dist' e a extensão será carregada. Para utilizá-la, você precisará de uma chave de API do CO2 Signal ([obtenha por e-mail aqui](https://www.co2signal.com/) - insira seu e-mail na caixa desta página) e [o código da sua região](http://api.electricitymap.org/v3/zones) no [Electricity Map](https://www.electricitymap.org/map) (por exemplo, em Boston, eu uso 'US-NEISO').

![instalando](../../../../../translated_images/br/install-on-edge.78634f02842c4828.webp)

Depois que a chave de API e o código da região forem inseridos na interface da extensão, o ponto colorido na barra de extensões do navegador deve mudar para refletir o uso de energia na sua região e fornecer um indicador sobre quais atividades intensivas em energia são mais adequadas para o momento. O conceito por trás deste sistema de 'ponto' foi inspirado pela extensão [Energy Lollipop](https://energylollipop.com/) para emissões na Califórnia.

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.