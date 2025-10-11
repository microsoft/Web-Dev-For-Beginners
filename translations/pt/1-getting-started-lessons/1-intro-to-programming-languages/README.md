<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2581528206a2a01c3a0b9c88e039b7bc",
  "translation_date": "2025-10-03T09:31:21+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "pt"
}
-->
# Introdução às Linguagens de Programação e Ferramentas do Ofício

Esta lição aborda os fundamentos das linguagens de programação. Os tópicos aqui apresentados aplicam-se à maioria das linguagens de programação modernas. Na secção 'Ferramentas do Ofício', vais aprender sobre software útil que te ajuda como programador.

![Introdução à Programação](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.pt.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Questionário Pré-Lição
[Questionário pré-lição](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Introdução

Nesta lição, vamos abordar:

- O que é programação?
- Tipos de linguagens de programação
- Elementos básicos de um programa
- Software e ferramentas úteis para o programador profissional

> Podes seguir esta lição no [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## O que é Programação?

Programação (também conhecida como codificação) é o processo de escrever instruções para um dispositivo, como um computador ou dispositivo móvel. Escrevemos estas instruções com uma linguagem de programação, que é então interpretada pelo dispositivo. Estes conjuntos de instruções podem ser referidos por vários nomes, como *programa*, *programa de computador*, *aplicação (app)* e *executável*, entre outros.

Um *programa* pode ser qualquer coisa escrita com código; websites, jogos e aplicações móveis são programas. Embora seja possível criar um programa sem escrever código, a lógica subjacente é interpretada pelo dispositivo e essa lógica foi, muito provavelmente, escrita com código. Um programa que está *a correr* ou *a executar* código está a realizar instruções. O dispositivo que estás a usar para ler esta lição está a executar um programa para o apresentar no teu ecrã.

✅ Faz uma pequena pesquisa: quem é considerado o primeiro programador de computadores do mundo?

## Linguagens de Programação

As linguagens de programação permitem aos programadores escrever instruções para um dispositivo. Os dispositivos só conseguem entender binário (1s e 0s), e para *a maioria* dos programadores isso não é uma forma muito eficiente de comunicar. As linguagens de programação são o veículo de comunicação entre humanos e computadores.

As linguagens de programação têm diferentes formatos e podem servir diferentes propósitos. Por exemplo, JavaScript é usado principalmente para aplicações web, enquanto Bash é usado principalmente para sistemas operativos.

*Linguagens de baixo nível* geralmente requerem menos passos do que *linguagens de alto nível* para que um dispositivo interprete as instruções. No entanto, o que torna as linguagens de alto nível populares é a sua legibilidade e suporte. JavaScript é considerado uma linguagem de alto nível.

O código abaixo ilustra a diferença entre uma linguagem de alto nível, como JavaScript, e uma linguagem de baixo nível, como o código de montagem ARM.

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

Acredites ou não, *ambos estão a fazer a mesma coisa*: imprimir uma sequência de Fibonacci até 10.

✅ Uma sequência de Fibonacci é [definida](https://en.wikipedia.org/wiki/Fibonacci_number) como um conjunto de números em que cada número é a soma dos dois anteriores, começando por 0 e 1. Os primeiros 10 números da sequência de Fibonacci são 0, 1, 1, 2, 3, 5, 8, 13, 21 e 34.

## Elementos de um Programa

Uma única instrução num programa é chamada de *declaração* e geralmente terá um carácter ou espaçamento de linha que marca onde a instrução termina, ou *termina*. A forma como um programa termina varia de acordo com a linguagem.

As declarações dentro de um programa podem depender de dados fornecidos por um utilizador ou de outro lugar para executar as instruções. Os dados podem alterar o comportamento de um programa, por isso as linguagens de programação vêm com uma forma de armazenar temporariamente os dados para que possam ser usados mais tarde. Estes são chamados de *variáveis*. Variáveis são declarações que instruem um dispositivo a guardar dados na sua memória. As variáveis em programas são semelhantes às variáveis em álgebra, onde têm um nome único e o seu valor pode mudar ao longo do tempo.

Há uma possibilidade de que algumas declarações não sejam executadas por um dispositivo. Isto geralmente acontece por design, quando escrito pelo programador, ou por acidente, quando ocorre um erro inesperado. Este tipo de controlo sobre uma aplicação torna-a mais robusta e fácil de manter. Normalmente, estas mudanças de controlo acontecem quando certas condições são atendidas. Uma declaração comum usada na programação moderna para controlar como um programa é executado é a declaração `if..else`.

✅ Vais aprender mais sobre este tipo de declaração em lições subsequentes.

## Ferramentas do Ofício

[![Ferramentas do Ofício](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Ferramentas do Ofício")

> 🎥 Clica na imagem acima para ver um vídeo sobre ferramentas

Nesta secção, vais aprender sobre alguns softwares que podem ser muito úteis à medida que inicias a tua jornada como programador profissional.

Um **ambiente de desenvolvimento** é um conjunto único de ferramentas e funcionalidades que um programador utiliza frequentemente ao escrever software. Algumas destas ferramentas foram personalizadas para atender às necessidades específicas de um programador e podem mudar ao longo do tempo, caso o programador altere prioridades no trabalho, em projetos pessoais ou ao usar uma linguagem de programação diferente. Os ambientes de desenvolvimento são tão únicos quanto os programadores que os utilizam.

### Editores

Uma das ferramentas mais cruciais para o desenvolvimento de software é o editor. Os editores são onde escreves o teu código e, por vezes, onde o executas.

Os programadores confiam nos editores por algumas razões adicionais:

- *Depuração* ajuda a identificar bugs e erros ao percorrer o código, linha por linha. Alguns editores têm capacidades de depuração; podem ser personalizados e adicionados para linguagens de programação específicas.
- *Realce de sintaxe* adiciona cores e formatação ao texto do código, tornando-o mais fácil de ler. A maioria dos editores permite personalizar o realce de sintaxe.
- *Extensões e Integrações* são ferramentas especializadas para programadores, criadas por programadores. Estas ferramentas não foram incluídas no editor base. Por exemplo, muitos programadores documentam o seu código para explicar como funciona. Podem instalar uma extensão de verificação ortográfica para ajudar a encontrar erros de digitação na documentação. A maioria das extensões é destinada a um editor específico, e a maioria dos editores vem com uma forma de pesquisar extensões disponíveis.
- *Personalização* permite aos programadores criar um ambiente de desenvolvimento único para atender às suas necessidades. A maioria dos editores é extremamente personalizável e pode também permitir que os programadores criem extensões personalizadas.

#### Editores Populares e Extensões para Desenvolvimento Web

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  
- [Sublimetext](https://www.sublimetext.com/)
  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### Navegadores

Outra ferramenta crucial é o navegador. Os programadores web confiam no navegador para ver como o seu código funciona na web. Também é usado para exibir os elementos visuais de uma página web que são escritos no editor, como HTML.

Muitos navegadores vêm com *ferramentas de desenvolvimento* (DevTools) que contêm um conjunto de funcionalidades úteis e informações para ajudar os programadores a recolher e capturar informações importantes sobre a sua aplicação. Por exemplo: Se uma página web tiver erros, por vezes é útil saber quando ocorreram. As DevTools num navegador podem ser configuradas para capturar esta informação.

#### Navegadores Populares e DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Ferramentas de Linha de Comando

Alguns programadores preferem uma visão menos gráfica para as suas tarefas diárias e confiam na linha de comando para isso. Escrever código requer uma quantidade significativa de digitação e alguns programadores preferem não interromper o seu fluxo no teclado. Eles utilizam atalhos de teclado para alternar entre janelas do desktop, trabalhar em diferentes ficheiros e usar ferramentas. A maioria das tarefas pode ser realizada com um rato, mas um dos benefícios de usar a linha de comando é que muito pode ser feito com ferramentas de linha de comando sem a necessidade de alternar entre o rato e o teclado. Outro benefício da linha de comando é que ela é configurável e podes guardar uma configuração personalizada, alterá-la mais tarde e importá-la para outras máquinas de desenvolvimento. Como os ambientes de desenvolvimento são tão únicos para cada programador, alguns evitam usar a linha de comando, outros confiam nela completamente, e alguns preferem uma mistura dos dois.

### Opções Populares de Linha de Comando

As opções para a linha de comando diferem com base no sistema operativo que utilizas.

*💻 = vem pré-instalado no sistema operativo.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (também conhecido como CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Ferramentas Populares de Linha de Comando

- [Git](https://git-scm.com/) (💻 na maioria dos sistemas operativos)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Documentação

Quando um programador quer aprender algo novo, ele provavelmente recorrerá à documentação para aprender a usar. Os programadores frequentemente confiam na documentação para orientá-los sobre como usar ferramentas e linguagens corretamente, e também para obter um conhecimento mais profundo de como funcionam.

#### Documentação Popular sobre Desenvolvimento Web

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), da Mozilla, os editores do navegador [Firefox](https://www.mozilla.org/firefox/)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), da Google, editores do [Chrome](https://www.google.com/chrome/)
- [Documentação da Microsoft](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), para [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Faz uma pesquisa: Agora que conheces os fundamentos do ambiente de um programador web, compara-o com o ambiente de um designer web.

---

## 🚀 Desafio

Compara algumas linguagens de programação. Quais são algumas das características únicas do JavaScript em comparação com Java? E do COBOL em comparação com Go?

## Questionário Pós-Lição
[Questionário pós-lição](https://ff-quizzes.netlify.app/web/)

## Revisão & Autoestudo

Estuda um pouco sobre as diferentes linguagens disponíveis para o programador. Tenta escrever uma linha numa linguagem e depois reescrevê-la em duas outras. O que aprendeste?

## Tarefa

[Lendo a Documentação](assignment.md)

> Nota: Ao selecionar ferramentas para a tua tarefa, não escolhas editores, navegadores ou ferramentas de linha de comando já listados acima.

---

**Aviso**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.