<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-26T00:00:08+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "br"
}
-->
# Extensão do navegador Carbon Trigger: código para começar

Será utilizada a API Signal CO2 da tmrow para monitorar o uso de eletricidade e criar uma extensão para o navegador, permitindo que você tenha um lembrete diretamente no navegador sobre o impacto do consumo de eletricidade na sua região. O uso dessa extensão personalizada ajudará a avaliar suas atividades com base nessas informações.

![captura de tela da extensão](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.br.png)

## Para Começar

É necessário ter o [npm](https://npmjs.com) instalado. Baixe uma cópia deste código para uma pasta no seu computador.

Instale todos os pacotes necessários:

```
npm install
```

Crie a extensão usando o webpack:

```
npm run build
```

Para instalar no Edge, utilize o menu de "três pontos" no canto superior direito do navegador para acessar o painel de Extensões. Se ainda não estiver ativado, habilite o Modo Desenvolvedor (no canto inferior esquerdo). Selecione "Carregar sem compactação" para adicionar uma nova extensão. No prompt, abra a pasta "dist" e a extensão será carregada. Para utilizá-la, você precisará de uma chave de API para a API do CO2 Signal (você pode [obter uma aqui por e-mail](https://www.co2signal.com/) - insira seu e-mail na caixa dessa página) e o [código da sua região](http://api.electricitymap.org/v3/zones) correspondente ao [mapa elétrico](https://www.electricitymap.org/map) (em Boston, por exemplo, "US-NEISO").

![instalação](../../../../../translated_images/install-on-edge.78634f02842c4828.br.png)

Depois que a chave de API e a região forem inseridas na interface da extensão, o ponto colorido na barra de extensões do navegador deve mudar para refletir o consumo de energia da região e fornecer uma indicação sobre quais atividades de alto consumo energético seriam apropriadas para realizar. O conceito por trás desse sistema de "pontos" foi inspirado na [extensão Energy Lollipop](https://energylollipop.com/) para emissões na Califórnia.

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.