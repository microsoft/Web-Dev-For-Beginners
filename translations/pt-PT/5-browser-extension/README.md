# Criar uma extensão de navegador

Criar extensões de navegador é uma forma divertida e interessante de pensar sobre o desempenho das suas aplicações enquanto desenvolve um tipo diferente de recurso web. Este módulo inclui lições sobre como os navegadores funcionam, como implementar uma extensão de navegador, como criar um formulário, chamar uma API, usar armazenamento local e como avaliar o desempenho do seu site e melhorá-lo.

Você irá criar uma extensão de navegador que funciona no Edge, Chrome e Firefox. Esta extensão, que é como um mini site web adaptado para uma tarefa muito específica, verifica a [API CO2 Signal](https://www.co2signal.com) para o uso de eletricidade e intensidade de carbono de uma determinada região e retorna uma leitura sobre a pegada de carbono dessa região.

Esta extensão pode ser chamada sob demanda por um utilizador, após inserir uma chave de API e um código de região num formulário, para determinar o uso local de eletricidade e, assim, oferecer dados que podem influenciar as decisões de consumo de eletricidade do utilizador. Por exemplo, pode ser preferível adiar o uso de uma máquina de secar roupa (uma atividade com alta intensidade de carbono) durante um período de elevado consumo de eletricidade na sua região.

### Tópicos

1. [Sobre o navegador](1-about-browsers/README.md)
2. [Formulários e armazenamento local](2-forms-browsers-local-storage/README.md)
3. [Tarefas em segundo plano e desempenho](3-background-tasks-and-performance/README.md)

### Créditos

![uma extensão de navegador verde](../../../5-browser-extension/extension-screenshot.png)

## Créditos

A ideia para este gatilho de carbono web foi sugerida por Asim Hussain, líder na Microsoft da equipa de Green Cloud Advocacy e autor dos [Green Principles](https://principles.green/). Originalmente, era um [projeto de site web](https://github.com/jlooper/green).

A estrutura da extensão de navegador foi influenciada pela [extensão COVID de Adebola Adeniran](https://github.com/onedebos/covtension).

O conceito por trás do sistema de ícones 'dot' foi inspirado pela estrutura de ícones da extensão de navegador [Energy Lollipop](https://energylollipop.com/) para emissões na Califórnia.

Estas lições foram escritas com ♥️ por [Jen Looper](https://www.twitter.com/jenlooper)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.