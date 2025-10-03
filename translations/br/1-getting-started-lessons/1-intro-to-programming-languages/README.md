<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2581528206a2a01c3a0b9c88e039b7bc",
  "translation_date": "2025-10-03T09:34:20+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "br"
}
-->
# Introdução às Linguagens de Programação e Ferramentas do Ofício

Esta lição aborda os fundamentos das linguagens de programação. Os tópicos abordados aqui se aplicam à maioria das linguagens de programação modernas. Na seção "Ferramentas do Ofício", você aprenderá sobre softwares úteis que ajudam você como desenvolvedor.

![Introdução à Programação](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.br.png)
> Sketchnote por [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pré-Aula
[Quiz pré-aula](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Introdução

Nesta lição, abordaremos:

- O que é programação?
- Tipos de linguagens de programação
- Elementos básicos de um programa
- Softwares e ferramentas úteis para o desenvolvedor profissional

> Você pode fazer esta lição no [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## O que é Programação?

Programação (também conhecida como codificação) é o processo de escrever instruções para um dispositivo, como um computador ou dispositivo móvel. Escrevemos essas instruções com uma linguagem de programação, que é então interpretada pelo dispositivo. Esses conjuntos de instruções podem ser chamados por vários nomes, como *programa*, *programa de computador*, *aplicativo (app)* e *executável*, entre outros.

Um *programa* pode ser qualquer coisa escrita com código; sites, jogos e aplicativos de celular são programas. Embora seja possível criar um programa sem escrever código, a lógica subjacente é interpretada pelo dispositivo e essa lógica provavelmente foi escrita com código. Um programa que está *rodando* ou *executando* código está realizando instruções. O dispositivo que você está usando para ler esta lição está executando um programa para exibi-la na sua tela.

✅ Faça uma pequena pesquisa: quem é considerado o primeiro programador de computadores do mundo?

## Linguagens de Programação

Linguagens de programação permitem que os desenvolvedores escrevam instruções para um dispositivo. Dispositivos só entendem binário (1s e 0s), e para *a maioria* dos desenvolvedores, essa não é uma forma muito eficiente de se comunicar. Linguagens de programação são o meio de comunicação entre humanos e computadores.

As linguagens de programação vêm em diferentes formatos e podem servir a diferentes propósitos. Por exemplo, JavaScript é usado principalmente para aplicações web, enquanto Bash é usado principalmente para sistemas operacionais.

*Linguagens de baixo nível* geralmente exigem menos etapas do que *linguagens de alto nível* para que um dispositivo interprete as instruções. No entanto, o que torna as linguagens de alto nível populares é sua legibilidade e suporte. JavaScript é considerado uma linguagem de alto nível.

O código a seguir ilustra a diferença entre uma linguagem de alto nível, como JavaScript, e uma linguagem de baixo nível, como o código de montagem ARM.

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

Acredite ou não, *eles estão fazendo a mesma coisa*: imprimindo uma sequência de Fibonacci até 10.

✅ Uma sequência de Fibonacci é [definida](https://en.wikipedia.org/wiki/Fibonacci_number) como um conjunto de números em que cada número é a soma dos dois anteriores, começando de 0 e 1. Os primeiros 10 números da sequência de Fibonacci são 0, 1, 1, 2, 3, 5, 8, 13, 21 e 34.

## Elementos de um Programa

Uma única instrução em um programa é chamada de *declaração* e geralmente terá um caractere ou espaçamento de linha que marca onde a instrução termina, ou *termina*. Como um programa termina varia de acordo com cada linguagem.

Declarações dentro de um programa podem depender de dados fornecidos por um usuário ou de outra fonte para executar instruções. Os dados podem alterar o comportamento de um programa, então as linguagens de programação vêm com uma maneira de armazenar temporariamente os dados para que possam ser usados posteriormente. Esses são chamados de *variáveis*. Variáveis são declarações que instruem um dispositivo a salvar dados em sua memória. Variáveis em programas são semelhantes às variáveis em álgebra, onde têm um nome único e seu valor pode mudar ao longo do tempo.

Há uma chance de que algumas declarações não sejam executadas por um dispositivo. Isso geralmente ocorre por design, quando escrito pelo desenvolvedor, ou por acidente, quando ocorre um erro inesperado. Esse tipo de controle sobre um aplicativo o torna mais robusto e fácil de manter. Normalmente, essas mudanças no controle acontecem quando certas condições são atendidas. Uma declaração comum usada na programação moderna para controlar como um programa é executado é a declaração `if..else`.

✅ Você aprenderá mais sobre esse tipo de declaração em lições subsequentes.

## Ferramentas do Ofício

[![Ferramentas do Ofício](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Ferramentas do Ofício")

> 🎥 Clique na imagem acima para assistir a um vídeo sobre ferramentas

Nesta seção, você aprenderá sobre alguns softwares que podem ser muito úteis ao iniciar sua jornada como desenvolvedor profissional.

Um **ambiente de desenvolvimento** é um conjunto único de ferramentas e recursos que um desenvolvedor usa frequentemente ao escrever software. Algumas dessas ferramentas foram personalizadas para atender às necessidades específicas de um desenvolvedor e podem mudar ao longo do tempo, caso o desenvolvedor altere suas prioridades no trabalho, em projetos pessoais ou ao usar uma linguagem de programação diferente. Ambientes de desenvolvimento são tão únicos quanto os desenvolvedores que os utilizam.

### Editores

Uma das ferramentas mais cruciais para o desenvolvimento de software é o editor. Editores são onde você escreve seu código e, às vezes, onde você executa seu código.

Os desenvolvedores dependem dos editores por alguns motivos adicionais:

- *Depuração* ajuda a identificar bugs e erros ao passar pelo código linha por linha. Alguns editores possuem recursos de depuração; eles podem ser personalizados e adicionados para linguagens de programação específicas.
- *Realce de sintaxe* adiciona cores e formatação ao texto do código, tornando-o mais fácil de ler. A maioria dos editores permite personalizar o realce de sintaxe.
- *Extensões e integrações* são ferramentas especializadas para desenvolvedores, criadas por desenvolvedores. Essas ferramentas não foram incluídas no editor base. Por exemplo, muitos desenvolvedores documentam seu código para explicar como ele funciona. Eles podem instalar uma extensão de verificação ortográfica para ajudar a encontrar erros de digitação na documentação. A maioria das extensões é destinada ao uso em um editor específico, e a maioria dos editores vem com uma maneira de pesquisar extensões disponíveis.
- *Personalização* permite que os desenvolvedores criem um ambiente de desenvolvimento único para atender às suas necessidades. A maioria dos editores é extremamente personalizável e também pode permitir que os desenvolvedores criem extensões personalizadas.

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

Outra ferramenta crucial é o navegador. Desenvolvedores web dependem do navegador para ver como seu código é executado na web. Ele também é usado para exibir os elementos visuais de uma página web que são escritos no editor, como HTML.

Muitos navegadores vêm com *ferramentas de desenvolvedor* (DevTools) que contêm um conjunto de recursos úteis e informações para ajudar os desenvolvedores a coletar e capturar informações importantes sobre seu aplicativo. Por exemplo: se uma página web tiver erros, às vezes é útil saber quando eles ocorreram. As DevTools em um navegador podem ser configuradas para capturar essas informações.

#### Navegadores Populares e DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Ferramentas de Linha de Comando

Alguns desenvolvedores preferem uma visão menos gráfica para suas tarefas diárias e dependem da linha de comando para isso. Escrever código exige uma quantidade significativa de digitação, e alguns desenvolvedores preferem não interromper seu fluxo no teclado. Eles usam atalhos de teclado para alternar entre janelas do desktop, trabalhar em diferentes arquivos e usar ferramentas. A maioria das tarefas pode ser concluída com um mouse, mas um benefício da linha de comando é que muito pode ser feito com ferramentas de linha de comando sem a necessidade de alternar entre o mouse e o teclado. Outro benefício da linha de comando é que ela é configurável, permitindo salvar uma configuração personalizada, alterá-la posteriormente e importá-la para outras máquinas de desenvolvimento. Como os ambientes de desenvolvimento são tão únicos para cada desenvolvedor, alguns evitam usar a linha de comando, outros dependem dela totalmente, e alguns preferem uma mistura dos dois.

### Opções Populares de Linha de Comando

As opções de linha de comando variam de acordo com o sistema operacional que você usa.

*💻 = vem pré-instalado no sistema operacional.*

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

- [Git](https://git-scm.com/) (💻 na maioria dos sistemas operacionais)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Documentação

Quando um desenvolvedor quer aprender algo novo, ele provavelmente recorrerá à documentação para aprender como usar. Os desenvolvedores frequentemente dependem da documentação para orientá-los sobre como usar ferramentas e linguagens corretamente, além de obter um conhecimento mais profundo de como elas funcionam.

#### Documentação Popular sobre Desenvolvimento Web

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), da Mozilla, os editores do navegador [Firefox](https://www.mozilla.org/firefox/)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), do Google, editores do [Chrome](https://www.google.com/chrome/)
- [Documentação para desenvolvedores da Microsoft](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), para o [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Faça uma pesquisa: Agora que você conhece os fundamentos do ambiente de um desenvolvedor web, compare e contraste com o ambiente de um designer web.

---

## 🚀 Desafio

Compare algumas linguagens de programação. Quais são algumas das características únicas do JavaScript em comparação ao Java? E do COBOL em relação ao Go?

## Quiz Pós-Aula
[Quiz pós-aula](https://ff-quizzes.netlify.app/web/)

## Revisão e Autoestudo

Estude um pouco sobre as diferentes linguagens disponíveis para o programador. Tente escrever uma linha em uma linguagem e, em seguida, reescrevê-la em outras duas. O que você aprendeu?

## Tarefa

[Lendo a Documentação](assignment.md)

> Nota: Ao selecionar ferramentas para sua tarefa, não escolha editores, navegadores ou ferramentas de linha de comando já listados acima.

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.