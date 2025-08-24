<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-24T13:21:14+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "pt"
}
-->
# Extensão de Navegador Carbon Trigger: Código Completo

Utilizando a API CO2 Signal da tmrow para monitorizar o uso de eletricidade, esta extensão de navegador foi criada para lhe lembrar o quão intensivo é o uso de eletricidade na sua área enquanto navega. Usar esta extensão pode ajudá-lo a tomar decisões sobre suas atividades com base nesta informação.

![Captura de ecrã da extensão](../../../../../5-browser-extension/extension-screenshot.png)

## Começar

É necessário ter [npm](https://npmjs.com) instalado. Faça o download de uma cópia deste código para uma pasta no seu computador.

Instale todos os pacotes necessários:

```
npm install
```

Crie a extensão com Webpack:

```
npm run build
```

Para instalar no Edge, utilize o menu de 'três pontos' no canto superior direito do navegador para encontrar o painel de extensões. A partir daí, selecione 'Carregar não empacotado' para carregar uma nova extensão. No prompt, abra a pasta 'dist' e a extensão será carregada. Para utilizá-la, precisará de uma chave de API do CO2 Signal ([obtenha aqui por email](https://www.co2snal.com/) - insira o seu email na caixa desta página) e [o código da sua área](http://api.electricitymap.org/v3/zones) no [Electricity Map](https://www.electricitymap.org/map) (por exemplo, em Boston, utilizo 'US-NEISO').

![instalando](../../../../../5-browser-extension/install-on-edge.png)

Depois de inserir a chave de API e o código da área na interface da extensão, o ponto colorido na barra de extensões do navegador deve mudar para refletir o uso de energia na sua área e fornecer um indicador sobre quais atividades intensivas em energia são mais adequadas para o momento. O conceito por trás deste sistema de 'ponto' foi inspirado na extensão [Energy Lollipop](https://energylollipop.com/) para emissões na Califórnia.

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.