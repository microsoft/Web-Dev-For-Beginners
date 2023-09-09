# Projeto Terrário Parte 2: Introdução a CSS

![Introdução a CSS](../../../sketchnotes/webdev101-css.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pre-Aula

[Pre-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/17)

### Introdução

CSS, ou Cascading Style Sheets, resolve um importante problema do desenvolvimento web, como fazer seu website parecer bonito. Estilizar seus apps faz deles mais usáveis e bonitos; você também pode usar CSS para criar um Design Web Responsivo(Responsive Web Design - RWD) permitindo aos seus apps uma melhor aparência independente do tamanho da tela em que estiver sendo exibido. CSS não é apenas sobre fazer de um app mais bonito, suas especificações incluem animações e transformações que permitem interações sofisticadas com os seus apps. O 'CSS Working Group' ajuda a manter as especificações do CSS, você pode segui-los em [World Wide Web Consortium's site](https://www.w3.org/Style/CSS/members).

> Nota, CSS é uma linguagem que evolui, assim como tudo na web, e nem todos os navegadores suportam novas especificações. Sempre cheque sua implementação consultando [CanIUse.com](https://caniuse.com).

Nessa Lição, nós vamos adicionar estilos em nosso terrário online e aprender múltiplos conceitos do CSS, como, por exemplo, cascata(cascade), herança(inheritance) e o uso de seletores, posicionamento, e usar o CSS para construir layouts. Nesse processo nós vamos construir o layout e o terrário em si.

### Pre-Requisito

Você deve ter o HTML para o seu terrário construído e pronto para ser estilizado.

> Cheque o vídeo
> 
> [![Git and GitHub basics video](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Tarefa

Na pasta do seu terrário, crie um novo arquivo chamado `style.css`. Importe o arquivo na tag `<head>`:

```html
<link rel="stylesheet" href="./style.css" />
```

---

## A Cascata

'Cascading Style Sheets' incorpora a ideia de que estilos cascata(cascade) assim como a aplicação de um estilo é guiada por prioridade. Estilos criados pelo desenvolvedor do site tem prioridade sobre os estilos do navegador. Estilos criados 'inline'(dentro da tag que deve ser estilizada) tem prioridade sobre as folhas de estilos externas.

### Tarefa

Adicionar o estilo 'inline' "color: red" em sua tag `<h1>`:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Agora, adicione o seguinte código ao seu arquivo `style.css`:

```CSS
h1 {
 color: blue;
}
```

✅ Qual cor é mostrada no seu app? Por quê? Você consegue descobrir uma maneira de sobrescrever esses estilos? Quando você deve querer fazer isso, e por quê?

---

## Herança

Estilos são herdados de um estilo pai para um filho, assim os elementos aninhados herdados dos estilos pais.

### Tarefa

Defina a fonte da tag `<body>` para a fonte abaixo, e veja a fonte dos elementos aninhados:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

Abra o console do seu navegador na aba 'Elementos' e observe a fonte da tag `<h1>`. Ela herdou sua fonte da tag `<body>`, conforme declarado no navegador:

![inherited font](../images/1.png)

✅ Você pode fazer um estilo aninhado herdar uma propriedade diferente?

---

## Seletores CSS

### Tags

Agora o seu arquivo `style.css` tem apenas algumas tags estilizadas, e o cabeçalho parece um tanto estranho:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Essa maneira de estilizar uma tag te dá controle sobre elementos únicos, mas você precisa controlar os estilos de muitas plantas no seu terrário. Para fazer isso você precisa aproveitar os seletores CSS.

### Ids

Adicione algum estilo ao layout dos conteiners esquerdo e direito. Já que existem apenas um container na esquerda e um na direita, lhes foram dados 'ids'. Para estilizá-los use `#`:

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
Aqui você colocou esses container com posicionamento absoluto para os cantos esquerdo e direito da tela, e usou porcentagens para a largura, assim eles podem caber em telas de dispositivos móveis.

✅ Esse código é um pouco repetitivo, por isso Não Se Repita("DRY" - Don't Repeat Yourself). Você consegue achar um jeito melhor de estilizar esses ids, talvez com um id e uma classe? Você vai precisar mudar a marcação e refatorar o CSS.

```html
<div id="left-container" class="container"></div>
```

### Classes

No exemplo acima você estilizou 2 elementos únicos da tela. Se você quer que os estilos sejam aplicados para muitos elementos da tela, você pode usar classes. Faça isso para criar o layout das plantas dos containers da direita e esquerda.

Perceba que cada planta na marcação HTML tem uma combinação de ids e classes. Os ids são utilizados pelo JavaScript que você vai adicionar mais tarde para manipular as plantas do terrário. As classes, entretanto, dão a todas as plantas seus estilos.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

Adicione o código a seguir no seu arquivo `style.css`:

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

É notável que nesse trecho tem uma mistura de posicionamentos absolutos e relativos, que será explicado na próxima sessão. Dê uma olhada no jeito que as alturas são tratadas por porcentagens:

Você definiu a altura do plant-holder em 13%, um bom número para assegurar que todas as plantas serão mostradas em cada container vertical sem a necessidade de rolar a página.

Você definiu o plant-holder para mover para a esquerda e permitir que as plantas sejam centralizadas dentro de seus containers. As imagens têm uma abundância de fundo transparente, então, para torná-las mais arrastáveis, é necessário arrastá-las mais para a esquerda da tela.

Então, é dada à planta uma largura máxima(max-width) de 150%. Isso permite que ela seja proporcional quando a tela for menor. Tente redimensionar o seu navegador, as plantas permanecerão em seus containers mas redimensionam para caber na tela.

Também é notável o uso de x-index, que controla a profundidade relativa de cada elemento (assim as plantas são alocadas nos container e parecem estar dentro dos terrários).

✅ Porque você precisa que ambas, um plant-holder e um seletor CSS?

## Posicionamento CSS

Misturar os tipos de posicionamento (static, relative, fixed, absolute, e sticky) pode ser um pouco complicado, mas quando bem feito te permite o controle sobre todos os elementos da página.

Elementos com posicionamento absoluto (Absolute) são posicionados em relação ao seu elemento pai mais próximo, e se não existir nenhum, conforme o body.

Elementos com posicionamento relativo (Relative) são posicionados conforme a sua posição inicial a partir das direções indicadas no CSS.

Na sua amostra, o `plant-holder` tem posicionamento relativo (relative) dentro de um elemento com posicionamento absoluto. O comportamento resultante é que os vasos (container) da barra lateral são fixados a direita e esquerda, e o plant-holder aninhado se posiciona dentro das barras laterais, dando espaço para as plantas serem posicionadas na vertical. 

> O elemento `plant` também tem posicionamento absoluto, necessário para torná-lo arrestável, assim como você descobrirá na próxima lição.

✅ Experimento - trocando os tipos de posicionamento dos vasos (container) a o plant-holder. o que acontece?

## CSS Layouts

Agora você vai usar o que aprendeu para criar um terrário sosinho, apenas usando CSS!

Primeiro, estilize os filhos da div `.terrarium` como um retangulo arredondado usando CSS:

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

Perceba o uso de porcentagens aqui. Se você redimensionar o navegador, você poderá ver como os jarros também seguirão. Também perceba que as porcentagens das larguras e alturas para os jarros e como cada elemento é tem posicionamento absoluto no centro, fixado a base da tela.

Nós também usaremos `rem` para o border-radius, uma fonte relativa de comprimento. Leia mais sobre esse tipo de medida relativa em [CSS spec](https://www.w3.org/TR/css-values-3/#font-relative-lengths).

✅ Tente mudar as cores e opacidade dos jarros em relacão a sujeira. O que acontece? porque?

---

## 🚀Desafio

Adicione uma bolha brilhante no canto esquerdo inferior do jarro para fazê-lo parecer mais semelhante a vidro. Você vai estilizar o `.jar-glossy-long` e `.jar-glossy-short` para parecer como um brilho refletido. Aqui é um exemplo de como deve parecer:

![terrário finalizado](../images/terrarium-final.png)

Para completar o quiz, passe por esse módulo: [Style your HTML app with CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Quiz Pós-Aula

[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/18)

## Revisão e Auto-Estudo

CSS parece enganosamente direto, porém existem muitos desafios quando se tenta estilizar um app perfeitamente para todos os navegadores e todos os tamanhos de tela. CSS-Grid e Flexbox são ferramentas que tem sido desenvolvidas para tornar o trabalho mais estruturado e confiável. Aprenda sobre essas ferramentas jogando [Flexbox Froggy](https://flexboxfroggy.com/) e [Grid Garden](https://codepip.com/games/grid-garden/).

## Tarefa

[Refatorando CSS](./assignment.pt.md)
