# Construindo uma extensão para navegador

Criar extensões para navegadores é uma maneira divertida e interessante de pensar sobre o desempenho dos seus aplicativos enquanto desenvolve um tipo diferente de recurso para a web. Este módulo inclui lições sobre como os navegadores funcionam, como implantar uma extensão para navegador, como criar um formulário, chamar uma API, usar armazenamento local e como avaliar o desempenho do seu site e melhorá-lo.

Você criará uma extensão para navegador que funciona no Edge, Chrome e Firefox. Essa extensão, que é como um mini site voltado para uma tarefa muito específica, verifica a [API CO2 Signal](https://www.co2signal.com) para obter o uso de eletricidade e a intensidade de carbono de uma determinada região, retornando uma leitura sobre a pegada de carbono da região.

Essa extensão pode ser chamada sob demanda por um usuário, uma vez que uma chave de API e um código de região sejam inseridos em um formulário para determinar o uso local de eletricidade, oferecendo assim dados que podem influenciar as decisões de consumo de energia do usuário. Por exemplo, pode ser preferível adiar o uso de uma secadora de roupas (uma atividade com alta emissão de carbono) durante um período de alto consumo de eletricidade na sua região.

### Tópicos

1. [Sobre o navegador](1-about-browsers/README.md)
2. [Formulários e armazenamento local](2-forms-browsers-local-storage/README.md)
3. [Tarefas em segundo plano e desempenho](3-background-tasks-and-performance/README.md)

### Créditos

![uma extensão de navegador verde](../../../translated_images/pt-BR/extension-screenshot.0e7f5bfa110e92e3.webp)

## Créditos

A ideia para este gatilho de carbono na web foi oferecida por Asim Hussain, líder na Microsoft da equipe de Green Cloud Advocacy e autor dos [Princípios Verdes](https://principles.green/). Originalmente, era um [projeto de site](https://github.com/jlooper/green).

A estrutura da extensão para navegador foi influenciada pela [extensão COVID de Adebola Adeniran](https://github.com/onedebos/covtension).

O conceito por trás do sistema de ícones de 'ponto' foi sugerido pela estrutura de ícones da extensão para navegador [Energy Lollipop](https://energylollipop.com/) para emissões na Califórnia.

Estas lições foram escritas com ♥️ por [Jen Looper](https://www.twitter.com/jenlooper)

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.