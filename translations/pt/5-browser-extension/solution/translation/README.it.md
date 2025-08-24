<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-24T13:24:03+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "pt"
}
-->
# Extensão de navegador Carbon Trigger: código para começar

Será utilizada a API Signal CO2 da tmrow para monitorizar o uso de eletricidade e criar uma extensão para o navegador, permitindo ter um lembrete diretamente no navegador sobre o impacto do consumo de eletricidade na sua região. O uso desta extensão personalizada ajudará a avaliar as suas atividades com base nessas informações.

![captura de ecrã da extensão](../../../../../5-browser-extension/extension-screenshot.png)

## Para Começar

É necessário ter o [npm](https://npmjs.com) instalado. Faça o download de uma cópia deste código para uma pasta no seu computador.

Instale todos os pacotes necessários:

```
npm install
```

Crie a extensão com o webpack:

```
npm run build
```

Para instalar no Edge, utilize o menu "três pontos" no canto superior direito do navegador para encontrar o painel Extensões. Caso ainda não esteja ativado, ative o Modo de Programador (no canto inferior esquerdo). Selecione "Carregar descompactado" para adicionar uma nova extensão. No prompt, abra a pasta "dist" e a extensão será carregada. Para utilizá-la, será necessário uma chave API para a API CO2 Signal (pode [obtê-la aqui por e-mail](https://www.co2signal.com/) - insira o seu e-mail na caixa desta página) e o [código da sua região](http://api.electricitymap.org/v3/zones) correspondente ao [mapa elétrico](https://www.electricitymap.org/map) (em Boston, por exemplo, "US-NEISO").

![instalação](../../../../../5-browser-extension/install-on-edge.png)

Depois de inserir a chave API e a região na interface da extensão, o ponto colorido na barra de extensões do navegador deverá mudar para refletir o consumo de energia da região e fornecer uma indicação sobre quais atividades de alto consumo energético seriam apropriadas para realizar. O conceito por trás deste sistema de "pontos" foi inspirado pela [extensão Energy Lollipop](https://energylollipop.com/) para as emissões na Califórnia.

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, é importante notar que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.