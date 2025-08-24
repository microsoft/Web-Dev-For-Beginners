<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-24T13:20:19+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "pt"
}
-->
# Extensão de navegador Carbon Trigger: Código completo

Usando a API de sinal CO2 da tmrow para monitorizar o uso de eletricidade, crie uma extensão de navegador que lhe permita ter um lembrete direto no seu navegador sobre o consumo de eletricidade na sua região. O uso desta extensão ad hoc ajudará a tomar decisões sobre as suas atividades com base nesta informação.

![captura de ecrã da extensão](../../../../../5-browser-extension/solution/start/extension-screenshot.png)

## Começar

Será necessário ter [npm](https://npmjs.com) instalado. Faça o download de uma cópia deste código para uma pasta no seu computador.

Instale todos os pacotes necessários:

```
npm install
```

Construa a extensão usando o webpack:

```
npm run build
```

Para instalar no Edge, utilize o menu de 'três pontos' no canto superior direito do navegador para encontrar o painel Extensões. A partir daí, selecione 'Carregar descompactado' para adicionar uma nova extensão. Abra a pasta 'dist' quando solicitado e a extensão será carregada. Para utilizá-la, precisará de uma chave API para a API CO2 Signal ([obtenha uma aqui por email](https://www.co2signal.com/) - insira o seu email na caixa desta página) e o [código da sua região](http://api.electricitymap.org/v3/zones) correspondente ao [Mapa de Eletricidade](https://www.electricitymap.org/map) (em Boston, por exemplo, utilizo 'US-NEISO').

![instalação](../../../../../5-browser-extension/solution/start/install-on-edge.png)

Depois de inserir a chave API e a região na interface da extensão, o ponto colorido na barra de extensão do navegador deve mudar para refletir o uso de energia da sua região e fornecer um indicador sobre as atividades de alto consumo de energia que seriam adequadas para si. O conceito por trás deste sistema de "pontos" foi inspirado pela [extensão Energy Lollipop](https://energylollipop.com/) para as emissões na Califórnia.

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.