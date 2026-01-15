<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-25T23:53:01+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "br"
}
-->
# Extensão de Navegador Carbon Trigger: Código Completo

Usando a API de sinal de CO2 da tmrow para monitorar o uso de eletricidade, crie uma extensão de navegador para ter um lembrete direto no seu navegador sobre o consumo de eletricidade da sua região. O uso dessa extensão personalizada ajudará você a tomar decisões sobre suas atividades com base nessas informações.

![captura de tela da extensão](../../../../../translated_images/br/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

## Começando

Você precisará ter o [npm](https://npmjs.com) instalado. Baixe uma cópia deste código para uma pasta no seu computador.

Instale todos os pacotes necessários:

```
npm install
```

Compile a extensão usando o webpack:

```
npm run build
```

Para instalar no Edge, use o menu de 'três pontos' no canto superior direito do navegador para acessar o painel de Extensões. A partir daí, selecione 'Carregar sem compactação' para adicionar uma nova extensão. Abra a pasta 'dist' quando solicitado, e a extensão será carregada. Para usá-la, você precisará de uma chave de API para a API de CO2 Signal ([obtenha uma aqui por e-mail](https://www.co2signal.com/) - insira seu e-mail no campo desta página) e o [código da sua região](http://api.electricitymap.org/v3/zones) correspondente ao [Mapa de Eletricidade](https://www.electricitymap.org/map) (em Boston, por exemplo, uso 'US-NEISO').

![instalando](../../../../../translated_images/br/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

Depois de inserir a chave de API e a região na interface da extensão, o ponto colorido na barra de extensão do navegador deve mudar para refletir o uso de energia da sua região e fornecer um indicador sobre as atividades de alto consumo de energia que seriam adequadas para você. O conceito por trás desse sistema de "pontos" foi inspirado pela [extensão Energy Lollipop](https://energylollipop.com/) para emissões na Califórnia.

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.