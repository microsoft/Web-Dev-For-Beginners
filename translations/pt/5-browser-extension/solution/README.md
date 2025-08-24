<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fab4e6b4f0efcd587a9029d82991f597",
  "translation_date": "2025-08-24T13:19:23+00:00",
  "source_file": "5-browser-extension/solution/README.md",
  "language_code": "pt"
}
-->
# Extensão de Navegador Carbon Trigger: Código Completo

Usando a API CO2 Signal da tmrow para monitorizar o consumo de eletricidade, crie uma extensão de navegador para que possa ter um lembrete diretamente no seu navegador sobre o quão intenso é o consumo de eletricidade na sua região. Utilizar esta extensão de forma pontual ajudará a tomar decisões informadas sobre as suas atividades com base nesta informação.

![captura de ecrã da extensão](../../../../5-browser-extension/extension-screenshot.png)

## Introdução

Será necessário ter o [npm](https://npmjs.com) instalado. Faça o download de uma cópia deste código para uma pasta no seu computador.

Instale todos os pacotes necessários:

```
npm install
```

Compile a extensão com o webpack:

```
npm run build
```

Para instalar no Edge, utilize o menu dos 'três pontos' no canto superior direito do navegador para aceder ao painel de Extensões. A partir daí, selecione 'Carregar sem compactação' para carregar uma nova extensão. Na janela que aparecer, abra a pasta 'dist' e a extensão será carregada. Para utilizá-la, será necessário obter uma chave de API para a API CO2 Signal ([obtenha uma aqui por email](https://www.co2signal.com/) - insira o seu email na caixa desta página) e o [código da sua região](http://api.electricitymap.org/v3/zones) correspondente ao [Electricity Map](https://www.electricitymap.org/map) (em Boston, por exemplo, utilizo 'US-NEISO').

![instalação](../../../../5-browser-extension/install-on-edge.png)

Depois de inserir a chave de API e a região na interface da extensão, o ponto colorido na barra de extensões do navegador deverá mudar para refletir o consumo de energia da sua região e fornecer uma indicação sobre quais atividades intensivas em energia seriam apropriadas para realizar. O conceito por trás deste sistema de 'ponto' foi inspirado pela extensão [Energy Lollipop](https://energylollipop.com/) para emissões na Califórnia.

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.