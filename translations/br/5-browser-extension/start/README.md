<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "26fd39046d264ba185dcb086d3a8cf3e",
  "translation_date": "2025-08-25T23:35:52+00:00",
  "source_file": "5-browser-extension/start/README.md",
  "language_code": "br"
}
-->
# Extensão de Navegador Carbon Trigger: Código Inicial

Usando a API CO2 Signal da tmrow para monitorar o uso de eletricidade, crie uma extensão de navegador para que você tenha um lembrete diretamente no seu navegador sobre o quão intenso está o consumo de eletricidade na sua região. Usar essa extensão de forma pontual ajudará você a tomar decisões sobre suas atividades com base nessas informações.

![captura de tela da extensão](../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.br.png)

## Primeiros Passos

Você precisará ter o [npm](https://npmjs.com) instalado. Baixe uma cópia deste código para uma pasta no seu computador.

Instale todos os pacotes necessários:

```
npm install
```

Compile a extensão usando o webpack:

```
npm run build
```

Para instalar no Edge, use o menu de 'três pontos' no canto superior direito do navegador para acessar o painel de Extensões. A partir daí, selecione 'Carregar sem Empacotamento' para carregar uma nova extensão. Na janela que aparecer, abra a pasta 'dist' e a extensão será carregada. Para utilizá-la, você precisará de uma chave de API para a API do CO2 Signal ([obtenha uma aqui por e-mail](https://www.co2signal.com/) - insira seu e-mail na caixa desta página) e do [código da sua região](http://api.electricitymap.org/v3/zones) correspondente ao [Electricity Map](https://www.electricitymap.org/map) (em Boston, por exemplo, eu uso 'US-NEISO').

![instalando](../../../../translated_images/install-on-edge.78634f02842c4828.br.png)

Depois de inserir a chave de API e a região na interface da extensão, o ponto colorido na barra de extensão do navegador deve mudar para refletir o consumo de energia da sua região e fornecer uma indicação sobre quais atividades intensivas em energia seriam apropriadas para você realizar. O conceito por trás desse sistema de 'ponto' foi inspirado pela [extensão Energy Lollipop](https://energylollipop.com/) para emissões na Califórnia.

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.