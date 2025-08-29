<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acb5ae00cde004304296bb97da8ff4c3",
  "translation_date": "2025-08-29T16:16:11+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "pt"
}
-->
# Projeto Terrário Parte 2: Introdução ao CSS

![Introdução ao CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.pt.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Questionário Pré-Aula

[Questionário pré-aula](https://ff-quizzes.netlify.app/web/quiz/17)

### Introdução

CSS, ou Cascading Style Sheets, resolve um problema importante no desenvolvimento web: como fazer com que o seu site tenha uma boa aparência. Estilizar as suas aplicações torna-as mais utilizáveis e visualmente agradáveis; também pode usar o CSS para criar um Design Responsivo (RWD) - permitindo que as suas aplicações fiquem bem em qualquer tamanho de ecrã. CSS não é apenas para melhorar a aparência da sua aplicação; a sua especificação inclui animações e transformações que possibilitam interações sofisticadas. O CSS Working Group ajuda a manter as especificações atuais do CSS; pode acompanhar o trabalho deles no [site do World Wide Web Consortium](https://www.w3.org/Style/CSS/members).

> Nota: o CSS é uma linguagem que evolui, como tudo na web, e nem todos os navegadores suportam as partes mais recentes da especificação. Verifique sempre as suas implementações consultando o [CanIUse.com](https://caniuse.com).

Nesta lição, vamos adicionar estilos ao nosso terrário online e aprender mais sobre vários conceitos de CSS: a cascata, herança, uso de seletores, posicionamento e como usar CSS para criar layouts. Durante o processo, vamos estruturar o terrário e criar o próprio terrário.

### Pré-requisito

Deve ter o HTML do seu terrário construído e pronto para ser estilizado.

> Veja o vídeo

> 
> [![Vídeo básico sobre Git e GitHub](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Tarefa

Na pasta do seu terrário, crie um novo ficheiro chamado `style.css`. Importe esse ficheiro na secção `<head>`:

```html
<link rel="stylesheet" href="./style.css" />
```

---

## A Cascata

As Cascading Style Sheets incorporam a ideia de que os estilos 'cascateiam', de forma que a aplicação de um estilo é guiada pela sua prioridade. Estilos definidos pelo autor de um site têm prioridade sobre os definidos por um navegador. Estilos definidos 'inline' têm prioridade sobre os definidos num ficheiro de estilo externo.

### Tarefa

Adicione o estilo inline "color: red" à sua tag `<h1>`:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Depois, adicione o seguinte código ao seu ficheiro `style.css`:

```CSS
h1 {
 color: blue;
}
```

✅ Que cor é exibida na sua aplicação web? Porquê? Consegue encontrar uma forma de sobrescrever estilos? Quando gostaria de fazer isso, ou porquê não?

---

## Herança

Os estilos são herdados de um estilo ancestral para um descendente, de forma que elementos aninhados herdam os estilos dos seus pais.

### Tarefa

Defina a fonte do corpo para uma fonte específica e verifique se o elemento aninhado herda essa fonte:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

Abra o console do seu navegador na aba 'Elements' e observe a fonte do H1. Ela herda a fonte do corpo, conforme indicado pelo navegador:

![fonte herdada](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.pt.png)

✅ Consegue fazer com que um estilo aninhado herde uma propriedade diferente?

---

## Seletores CSS

### Tags

Até agora, o seu ficheiro `style.css` tem apenas algumas tags estilizadas, e a aplicação parece um pouco estranha:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Este método de estilizar uma tag dá-lhe controlo sobre elementos únicos, mas precisa de controlar os estilos de muitas plantas no seu terrário. Para isso, precisa de aproveitar os seletores CSS.

### IDs

Adicione algum estilo para estruturar os contentores esquerdo e direito. Como há apenas um contentor esquerdo e um contentor direito, eles recebem IDs no markup. Para os estilizar, use `#`:

```CSS
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

Aqui, posicionou esses contentores com posicionamento absoluto nos extremos esquerdo e direito do ecrã, e usou percentagens para a largura para que possam ser escalados para ecrãs móveis pequenos.

✅ Este código é bastante repetitivo, portanto não segue o princípio "DRY" (Don't Repeat Yourself); consegue encontrar uma forma melhor de estilizar esses IDs, talvez com um ID e uma classe? Precisaria de alterar o markup e refatorar o CSS:

```html
<div id="left-container" class="container"></div>
```

### Classes

No exemplo acima, estilizou dois elementos únicos no ecrã. Se quiser que os estilos se apliquem a muitos elementos no ecrã, pode usar classes CSS. Faça isso para estruturar as plantas nos contentores esquerdo e direito.

Note que cada planta no markup HTML tem uma combinação de IDs e classes. Os IDs aqui são usados pelo JavaScript que será adicionado mais tarde para manipular a colocação das plantas no terrário. As classes, no entanto, dão a todas as plantas um estilo específico.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

Adicione o seguinte ao seu ficheiro `style.css`:

```CSS
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

Notável neste trecho é a mistura de posicionamento relativo e absoluto, que abordaremos na próxima secção. Observe como as alturas são tratadas com percentagens:

Definiu a altura do suporte das plantas para 13%, um bom valor para garantir que todas as plantas sejam exibidas em cada contentor vertical sem necessidade de rolagem.

Moveu o suporte das plantas para a esquerda para que as plantas fiquem mais centradas dentro do contentor. As imagens têm uma grande quantidade de fundo transparente para torná-las mais fáceis de arrastar, então precisam ser deslocadas para a esquerda para se ajustarem melhor ao ecrã.

Depois, a própria planta recebeu uma largura máxima de 150%. Isso permite que ela seja redimensionada à medida que o navegador é redimensionado. Experimente redimensionar o navegador; as plantas permanecem nos seus contentores, mas ajustam-se para caber.

Também é notável o uso de z-index, que controla a altitude relativa de um elemento (para que as plantas fiquem acima do contentor e pareçam estar dentro do terrário).

✅ Por que precisa de um seletor CSS para o suporte das plantas e outro para a planta?

## Posicionamento CSS

Misturar propriedades de posicionamento (existem posições estática, relativa, fixa, absoluta e sticky) pode ser um pouco complicado, mas quando feito corretamente, dá-lhe um bom controlo sobre os elementos nas suas páginas.

Elementos com posicionamento absoluto são posicionados em relação aos seus ancestrais posicionados mais próximos, e se não houver nenhum, são posicionados em relação ao corpo do documento.

Elementos com posicionamento relativo são posicionados com base nas direções do CSS para ajustar a sua colocação em relação à sua posição inicial.

No nosso exemplo, o `plant-holder` é um elemento com posicionamento relativo que está posicionado dentro de um contentor com posicionamento absoluto. O comportamento resultante é que os contentores laterais são fixados à esquerda e à direita, e o `plant-holder` é aninhado, ajustando-se dentro das barras laterais, dando espaço para as plantas serem colocadas numa linha vertical.

> A própria `plant` também tem posicionamento absoluto, necessário para torná-la arrastável, como descobrirá na próxima lição.

✅ Experimente alterar os tipos de posicionamento dos contentores laterais e do `plant-holder`. O que acontece?

## Layouts CSS

Agora vai usar o que aprendeu para construir o próprio terrário, tudo usando CSS!

Primeiro, estilize os filhos da div `.terrarium` como um retângulo arredondado usando CSS:

```CSS
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 1rem;
	position: absolute;
	bottom: 0.5%;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
}

.jar-top {
	width: 50%;
	height: 5%;
	background: #d1e1df;
	position: absolute;
	bottom: 80.5%;
	left: 25%;
	opacity: 0.7;
	z-index: 1;
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
}

.dirt {
	width: 60%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
}
```

Note o uso de percentagens aqui. Se redimensionar o navegador, pode ver como o frasco também se ajusta. Observe também as percentagens de largura e altura dos elementos do frasco e como cada elemento é posicionado absolutamente no centro, fixado na parte inferior da janela de visualização.

Também estamos a usar `rem` para o border-radius, uma unidade de comprimento relativa à fonte. Leia mais sobre este tipo de medida relativa na [especificação CSS](https://www.w3.org/TR/css-values-3/#font-relative-lengths).

✅ Experimente alterar as cores e a opacidade do frasco em comparação com as da terra. O que acontece? Porquê?

---

## 🚀Desafio

Adicione um brilho de 'bolha' na área inferior esquerda do frasco para que pareça mais vítreo. Vai estilizar as classes `.jar-glossy-long` e `.jar-glossy-short` para parecerem um reflexo. Aqui está como deve ficar:

![terrário finalizado](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.pt.png)

Para completar o questionário pós-aula, explore este módulo do Learn: [Estilize a sua aplicação HTML com CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Questionário Pós-Aula

[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/18)

## Revisão e Estudo Individual

O CSS parece enganosamente simples, mas há muitos desafios ao tentar estilizar uma aplicação perfeitamente para todos os navegadores e tamanhos de ecrã. CSS-Grid e Flexbox são ferramentas desenvolvidas para tornar o trabalho um pouco mais estruturado e confiável. Aprenda sobre estas ferramentas jogando [Flexbox Froggy](https://flexboxfroggy.com/) e [Grid Garden](https://codepip.com/games/grid-garden/).

## Tarefa

[Refatoração de CSS](assignment.md)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, é importante ter em conta que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.