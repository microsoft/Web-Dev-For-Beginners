<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e4cd5b1faed4adab5acf720f82798003",
  "translation_date": "2025-08-24T12:52:10+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "pt"
}
-->
# Criar Páginas Web Acessíveis

![Tudo Sobre Acessibilidade](../../../../sketchnotes/webdev101-a11y.png)  
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Questionário Pré-Aula  
[Questionário pré-aula](https://ff-quizzes.netlify.app/web/quiz/5)

> O poder da Web está na sua universalidade. O acesso por todos, independentemente de deficiência, é um aspeto essencial.  
>
> \- Sir Timothy Berners-Lee, Diretor do W3C e inventor da World Wide Web

Esta citação destaca perfeitamente a importância de criar websites acessíveis. Uma aplicação que não pode ser acedida por todos é, por definição, excludente. Como programadores web, devemos sempre ter a acessibilidade em mente. Ao focarmo-nos nisso desde o início, estaremos no caminho certo para garantir que todos possam aceder às páginas que criamos. Nesta lição, vais aprender sobre as ferramentas que podem ajudar-te a garantir que os teus recursos web são acessíveis e como construir com acessibilidade em mente.

> Podes fazer esta lição no [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Ferramentas a Utilizar

### Leitores de Ecrã

Uma das ferramentas de acessibilidade mais conhecidas são os leitores de ecrã.

[Leitores de ecrã](https://en.wikipedia.org/wiki/Screen_reader) são clientes frequentemente utilizados por pessoas com deficiências visuais. Assim como nos preocupamos em garantir que um navegador transmite corretamente a informação que queremos partilhar, também devemos garantir que um leitor de ecrã faz o mesmo.

De forma básica, um leitor de ecrã lê uma página de cima para baixo de forma audível. Se a tua página for apenas texto, o leitor transmitirá a informação de forma semelhante a um navegador. No entanto, páginas web raramente são apenas texto; elas contêm links, gráficos, cores e outros componentes visuais. É necessário cuidado para garantir que esta informação é lida corretamente por um leitor de ecrã.

Todo programador web deve familiarizar-se com um leitor de ecrã. Como mencionado acima, é o cliente que os teus utilizadores irão utilizar. Da mesma forma que estás familiarizado com o funcionamento de um navegador, deves aprender como funciona um leitor de ecrã. Felizmente, leitores de ecrã estão integrados na maioria dos sistemas operativos.

Alguns navegadores também têm ferramentas integradas e extensões que podem ler texto em voz alta ou até fornecer algumas funcionalidades básicas de navegação, como [estas ferramentas de acessibilidade do navegador Edge](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Estas também são ferramentas importantes de acessibilidade, mas funcionam de forma muito diferente dos leitores de ecrã e não devem ser confundidas com ferramentas de teste de leitores de ecrã.

✅ Experimenta um leitor de ecrã e um leitor de texto do navegador. No Windows, o [Narrador](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) está incluído por padrão, e o [JAWS](https://webaim.org/articles/jaws/) e o [NVDA](https://www.nvaccess.org/about-nvda/) também podem ser instalados. No macOS e iOS, o [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) está instalado por padrão.

### Zoom

Outra ferramenta frequentemente utilizada por pessoas com deficiências visuais é o zoom. O tipo mais básico de zoom é o zoom estático, controlado através de `Control + sinal de mais (+)` ou pela diminuição da resolução do ecrã. Este tipo de zoom faz com que toda a página seja redimensionada, por isso usar [design responsivo](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) é importante para proporcionar uma boa experiência de utilizador em níveis de zoom aumentados.

Outro tipo de zoom depende de software especializado para ampliar uma área do ecrã e mover-se, como se estivesse a usar uma lupa real. No Windows, o [Lupa](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) está integrado, e o [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) é um software de ampliação de terceiros com mais funcionalidades e uma base de utilizadores maior. Tanto o macOS como o iOS têm um software de ampliação integrado chamado [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Verificadores de Contraste

As cores nos websites precisam de ser cuidadosamente escolhidas para atender às necessidades de utilizadores daltónicos ou pessoas que têm dificuldade em ver cores de baixo contraste.

✅ Testa um website que gostes de usar para verificar o uso de cores com uma extensão de navegador como o [verificador de contraste de cores do WCAG](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). O que aprendes?

### Lighthouse

Na área de ferramentas de programador do teu navegador, encontrarás a ferramenta Lighthouse. Esta ferramenta é importante para obter uma primeira visão da acessibilidade (bem como outras análises) de um website. Embora seja importante não depender exclusivamente do Lighthouse, uma pontuação de 100% é muito útil como ponto de partida.

✅ Encontra o Lighthouse no painel de ferramentas de programador do teu navegador e executa uma análise em qualquer site. O que descobres?

## Projetar para Acessibilidade

A acessibilidade é um tópico relativamente amplo. Para te ajudar, existem inúmeros recursos disponíveis.

- [Accessible U - Universidade de Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Embora não consigamos abordar todos os aspetos de criar sites acessíveis, abaixo estão alguns dos princípios fundamentais que deves implementar. Projetar uma página acessível desde o início é **sempre** mais fácil do que voltar a uma página existente para torná-la acessível.

## Bons Princípios de Exibição

### Paletas de Cores Seguras

As pessoas veem o mundo de formas diferentes, e isso inclui as cores. Ao selecionar um esquema de cores para o teu site, deves garantir que ele é acessível para todos. Uma ótima [ferramenta para gerar paletas de cores é o Color Safe](http://colorsafe.co/).

✅ Identifica um website que seja muito problemático no uso de cores. Porquê?

### Usa o HTML Correto

Com CSS e JavaScript, é possível fazer qualquer elemento parecer qualquer tipo de controlo. `<span>` pode ser usado para criar um `<button>`, e `<b>` pode tornar-se um hyperlink. Embora isso possa ser considerado mais fácil de estilizar, não transmite nada a um leitor de ecrã. Usa o HTML apropriado ao criar controlos numa página. Se quiseres um hyperlink, usa `<a>`. Usar o HTML correto para o controlo correto é chamado de uso de HTML Semântico.

✅ Vai a qualquer website e verifica se os designers e programadores estão a usar o HTML corretamente. Consegues encontrar um botão que deveria ser um link? Dica: clica com o botão direito e escolhe 'Ver Código-Fonte da Página' no teu navegador para olhar para o código subjacente.

### Cria uma Hierarquia de Cabeçalhos Descritiva

Utilizadores de leitores de ecrã [dependem muito de cabeçalhos](https://webaim.org/projects/screenreadersurvey8/#finding) para encontrar informações e navegar por uma página. Escrever conteúdo descritivo para cabeçalhos e usar tags semânticas de cabeçalhos são importantes para criar um site facilmente navegável para utilizadores de leitores de ecrã.

### Usa Boas Pistas Visuais

O CSS oferece controlo total sobre o aspeto de qualquer elemento numa página. Podes criar caixas de texto sem contorno ou hyperlinks sem sublinhado. Infelizmente, remover essas pistas pode tornar mais difícil para alguém que depende delas reconhecer o tipo de controlo.

## A Importância do Texto dos Links

Os hyperlinks são fundamentais para navegar na web. Como resultado, garantir que um leitor de ecrã pode ler corretamente os links permite que todos os utilizadores naveguem no teu site.

### Leitores de Ecrã e Links

Como seria de esperar, leitores de ecrã leem o texto dos links da mesma forma que leem qualquer outro texto na página. Com isso em mente, o texto demonstrado abaixo pode parecer perfeitamente aceitável.

> O pequeno pinguim, às vezes conhecido como pinguim-fada, é o menor pinguim do mundo. [Clique aqui](https://en.wikipedia.org/wiki/Little_penguin) para mais informações.

> O pequeno pinguim, às vezes conhecido como pinguim-fada, é o menor pinguim do mundo. Visite https://en.wikipedia.org/wiki/Little_penguin para mais informações.

> **NOTA** Como estás prestes a ler, nunca deves criar links que se pareçam com os exemplos acima.

Lembra-te, leitores de ecrã são uma interface diferente dos navegadores, com um conjunto diferente de funcionalidades.

### O Problema de Usar o URL

Leitores de ecrã leem o texto. Se um URL aparecer no texto, o leitor de ecrã lerá o URL. Geralmente, o URL não transmite informações significativas e pode soar irritante. Talvez já tenhas experienciado isso se o teu telemóvel alguma vez leu em voz alta uma mensagem de texto com um URL.

### O Problema de "Clique Aqui"

Leitores de ecrã também têm a capacidade de ler apenas os hyperlinks numa página, da mesma forma que uma pessoa com visão percorreria uma página à procura de links. Se o texto do link for sempre "clique aqui", tudo o que o utilizador ouvirá será "clique aqui, clique aqui, clique aqui, clique aqui, clique aqui, ...". Todos os links tornam-se indistinguíveis uns dos outros.

### Bom Texto de Link

Um bom texto de link descreve brevemente o que está do outro lado do link. No exemplo acima sobre pequenos pinguins, o link é para a página da Wikipédia sobre a espécie. A frase *pequenos pinguins* seria um texto de link perfeito, pois deixa claro o que alguém aprenderá se clicar no link - pequenos pinguins.

> O [pequeno pinguim](https://en.wikipedia.org/wiki/Little_penguin), às vezes conhecido como pinguim-fada, é o menor pinguim do mundo.

✅ Navega na web por alguns minutos para encontrar páginas que usam estratégias obscuras de links. Compara-as com outras páginas que usam links melhores. O que aprendes?

#### Notas sobre Motores de Busca

Como um bónus adicional por garantir que o teu site é acessível para todos, também ajudarás os motores de busca a navegar no teu site. Os motores de busca usam o texto dos links para aprender sobre os tópicos das páginas. Assim, usar bons textos de links ajuda todos!

### ARIA

Imagina a seguinte página:

| Produto      | Descrição          | Encomendar   |
| ------------ | ------------------ | ------------ |
| Widget       | [Descrição](../../../../1-getting-started-lessons/3-accessibility/')   | [Encomendar](../../../../1-getting-started-lessons/3-accessibility/') |
| Super widget | [Descrição](../../../../1-getting-started-lessons/3-accessibility/')   | [Encomendar](../../../../1-getting-started-lessons/3-accessibility/') |

Neste exemplo, duplicar o texto de descrição e encomendar faz sentido para alguém que usa um navegador. No entanto, alguém que usa um leitor de ecrã ouviria apenas as palavras *descrição* e *encomendar* repetidas sem contexto.

Para suportar estes tipos de cenários, o HTML suporta um conjunto de atributos conhecidos como [Aplicações Ricas de Internet Acessíveis (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Estes atributos permitem fornecer informações adicionais aos leitores de ecrã.

> **NOTA**: Como muitos aspetos do HTML, o suporte de navegadores e leitores de ecrã pode variar. No entanto, a maioria dos clientes principais suporta atributos ARIA.

Podes usar `aria-label` para descrever o link quando o formato da página não o permite. A descrição para o widget poderia ser definida como:

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Em geral, usar marcação semântica como descrito acima substitui o uso de ARIA, mas às vezes não há equivalente semântico para vários widgets HTML. Um bom exemplo é uma Árvore. Não há equivalente HTML para uma árvore, então identificas o `<div>` genérico para este elemento com um papel e valores ARIA apropriados. A [documentação MDN sobre ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) contém mais informações úteis.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Imagens

É óbvio que leitores de ecrã não conseguem automaticamente ler o que está numa imagem. Garantir que as imagens são acessíveis não exige muito trabalho - é para isso que serve o atributo `alt`. Todas as imagens significativas devem ter um `alt` para descrever o que são.  
Imagens que são puramente decorativas devem ter o atributo `alt` definido como uma string vazia: `alt=""`. Isso impede que leitores de ecrã anunciem desnecessariamente a imagem decorativa.

✅ Como seria de esperar, motores de busca também não conseguem entender o que está numa imagem. Eles também usam o texto alternativo. Assim, mais uma vez, garantir que a tua página é acessível traz bónus adicionais!

## O Teclado

Alguns utilizadores não conseguem usar um rato ou trackpad, dependendo apenas de interações com o teclado para navegar de um elemento para o outro. É importante que o teu website apresente o conteúdo numa ordem lógica para que um utilizador de teclado possa aceder a cada elemento interativo à medida que avança no documento. Se construíres as tuas páginas web com marcação semântica e usares CSS para estilizar o layout visual, o teu site deve ser navegável por teclado, mas é importante testar este aspeto manualmente. Aprende mais sobre [estratégias de navegação por teclado](https://webaim.org/techniques/keyboard/).

✅ Vai a qualquer website e tenta navegar por ele usando apenas o teclado. O que funciona, o que não funciona? Porquê?

## Resumo

Uma web acessível para alguns não é uma verdadeira 'world wide web'. A melhor forma de garantir que os sites que crias são acessíveis é incorporar as melhores práticas de acessibilidade desde o início. Embora envolva passos adicionais, incorporar estas competências no teu fluxo de trabalho agora garantirá que todas as páginas que crias serão acessíveis.

---

## 🚀 Desafio

Pega neste HTML e reescreve-o para ser o mais acessível possível, usando as estratégias que aprendeste.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## Questionário Pós-Aula  
[Questionário pós-aula](https://ff-quizzes.netlify.app/web/quiz/6)

## Revisão & Autoestudo
Muitos governos têm leis relacionadas aos requisitos de acessibilidade. Informe-se sobre as leis de acessibilidade do seu país. O que está coberto e o que não está? Um exemplo é [este site governamental](https://accessibility.blog.gov.uk/).

## Tarefa

[Analise um site não acessível](assignment.md)

Créditos: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) por Instrument

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original no seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas resultantes do uso desta tradução.