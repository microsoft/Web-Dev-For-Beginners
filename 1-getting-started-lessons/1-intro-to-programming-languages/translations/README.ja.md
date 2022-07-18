# プログラミング言語と開発ツール入門

このレッスンでは、まずプログラミング言語の基礎を学びます。
ここで取り上げた特徴は、最新のプログラミング言語のほとんどに当てはまります。
次にツールセクションでは、開発者にとって有用なソフトウェアを紹介します。

![Intro Programming](/sketchnotes/webdev101-programming.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## 事前クイズ
[事前クイズ](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1?loc=ja)

## Introduction

この講座には以下が含まれています。

- プログラミングとは何か？
- プログラミング言語の種類
- プログラムの基本要素
- 開発ツール

## プログラミングとは何か？

プログラミング(コーディングとも表されます)とは、コンピュータやモバイル機器などのデバイスに対して、命令を出すことです。
命令はプログラミング言語で書かれており、そしてデバイスはその命令を解釈して実行します。
この命令は色々な名称で呼ばれることがありますが、*プログラム*、*コンピュータプログラム*、*アプリケーション(アプリ)*、*実行可能ファイル*、などが一般的に使われています。

*プログラム*とは、コードで書かれている何かです。
Webサイトも、ゲームも、スマホアプリも、全てがプログラムです。
コードを書かずにプログラムを作ることも可能ですが、作り上げたロジックは実際にはコードで書かれていて、実際にデバイスが解釈するのはコードです。
プログラムはコードを実行し、デバイスに命令を出します。
あなたが今このレッスンを読んでいるということは、文字を画面に表示するというプログラムをデバイスが実行しているということです。

✅ ちょっと調べてみましょう：世界初のコンピュータプログラマは誰でしょうか？

## プログラミング言語

プログラミング言語の主な目的は、開発者がデバイスに対して命令を送信する手助けをすることです。
デバイスはバイナリ(要するに0と1)しか理解することができず、そして*ほとんどの*開発者にとってバイナリはあまり効率的な命令手段ではありません。
プログラミング言語は、人間とコンピュータがコミュニケーションを取るための手段なのです。

世の中には様々な目的のために様々なプログラミング言語が存在しています。
たとえばJavaScriptは主にWebアプリケーションのために、Bashは主にOSとの対話のために使われます。

*低レベル言語*とは、デバイスが命令を解釈するために必要なステップ数が、*高レベル言語*より少ない言語のことです。
高レベル言語が人気であるのは、その読みやすさとサポート能力によるものです。
JavaScriptは高レベル言語とされています。

次のコードは、高レベル言語であるJavaScriptと、低レベル言語であるARMアセンブリの違いを表したものです。

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

信じられないかもしれませんが、両者は同じ処理をしています。
いずれもフィボナッチ数を順番に10個出力します。

✅ [フィボナッチ数](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%9C%E3%83%8A%E3%83%83%E3%83%81%E6%95%B0)とは、各数がその手前の二つの値の和である値の集合です。

## プログラムの基本要素

プログラムにおいてひとつの命令は*文*と呼ばれ、文は通常は改行などの*区切り文字*で分かたれます。
プログラムの区切り文字は言語によって異なります。

多くのプログラムは、ユーザや他から来た入力データによって出力が変わります。
データによってプログラムの動作を変えるため、プログラミング言語にはデータを一時的に保存しておく方法が用意されています。
そのデータは*変数*と呼ばれています。
変数とは、デバイス内のメモリにデータを保存する文のことです。
プログラムにおける変数は数学における変数と似ていて、変数には固有の名称があり、その値は処理の経過に伴って変化することがあります。

プログラムには、実行されない文が現れることがあります。
これは、そうなるように開発者が設計して制御されたものであるか、予期せぬエラーが発生したかのいずれかです。
アプリケーションの制御は、堅牢で信頼性の高いプログラムを書くために必要なことです。
制御は、何らかの条件が満たされたことによって発生することが一般的です。
最近のプログラミング言語には、実行される文を制御するために`if...else`のような文が存在します。

✅ これら文については次のレッスンで詳しく学びます。

## 開発ツール

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

このセクションでは、プロの開発者としての道を歩き始めるときに役立つであろうソフトウェアについて紹介します。

**開発環境**とは、開発者がソフトウェアを作成する際に頻繁に使用するツールや機能のセットのことです。
開発環境は、開発者が特定のニーズに合わせてカスタマイズしたり、優先順位を変更したり、異なるプログラミング言語を使用したりといった理由で次々と変わっていくこともあります。
開発環境は、それを使用する開発者の数と同じくらい千差万別です。

### エディタ

ソフトウェア開発において最も重要なツールのひとつが、エディタです。
エディタはコードを書く場所であり、時にはコードを実行する場所であることもあります。

開発者がエディタを使う理由は、それ以外にも多々あります。

- *デバッグ*
コードを1行1行ステップ実行することで、バグやエラーを発見しやすくします。
デバッグ機能を備えたエディタや、特定のプログラミング言語用にカスタマイズすることができるエディタも存在します。

- *シンタックスハイライト*
コードに色や書式を設定することで、コードを読みやすくします。
多くのエディタはシンタックスハイライトをカスタマイズすることもできます。

- *拡張機能*
デフォルトでは含まれない、一部の開発者向けに特化された拡張機能を追加することができます。
例えば、コードをドキュメント化してどのように動作するかを確認したいユーザがいて、タイプミスのチェックのためにスペルチェックを行いたいユーザがいて、各自が自分のほしい拡張機能をインストールすることができます。
ほとんどの拡張機能は特定のエディタでのみ動作するもので、そしてほとんどのエディタは拡張機能を検索する方法を用意しています。

- *カスタマイズ*
ほとんどのエディタは幅広いカスタマイズが可能で、開発者は自分のニーズに合わせた開発環境を作ることができます。
さらに多くのエディタでは、開発者が自分で拡張機能を作ることも可能です。

#### 有名なエディタとWeb開発向けのエクステンション

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### ブラウザ

もうひとつの重要なツールはブラウザです。
Web開発者は、自分のコードがWeb上でどのように実行されるかを確認するため、そしてHTML要素を視覚的に確認するためにブラウザを必要とします。

多くのブラウザには*開発者ツール*が付属しており、アプリケーションの動作を収集・分析するために便利な機能や情報があります。
たとえば開発者ツールを使って、Webページにエラーがあった場合に、いつどこでエラーが発生したかを把握することができます。


#### 有名なブラウザ

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-13441-cxa)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### コマンドラインツール

開発者の中には、日常の作業をGUIで行うことを好まず、コマンドラインに多くを頼る人もいます。
コードの開発には多量のタイピングが必要となるため、マウスを使うためにキーボードから手を外すことで作業の流れを中断されることを避け、キーボードショートカットを駆使して複数のファイルを操作したり複数のツールを併用したりします。

多くのタスクはマウスだけでも実行可能です。
しかし、コマンドラインの利点のひとつが、マウスとキーボードで行ったり来たりせずにキーボードだけで作業を完結できるというものです。
またコマンドラインのもうひとつの利点が、カスタム設定を登録しておくことが可能ということです。
さらにマシンを新調したときに設定を移動することもできます。

開発環境は個人個人によって非常に異なるため、コマンドラインの使用を避ける人もいれば、完全にコマンドラインだけしか使わない人もいます。
両方とも使う人も多いでしょう。

### 有名なコマンドラインオプション

コマンドラインオプションは、OSによって異なります。

💻はOSにプリインストールされているものです。

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7?WT.mc_id=academic-13441-cxa) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands?WT.mc_id=academic-13441-cxa) (also known as CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-13441-cxa)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### 有名なコマンドラインツール

- [Git](https://git-scm.com/) (多くのOSで 💻)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### ドキュメント

何か新しいことを学びたいと思ったとき、その使い方を学ぶためには大抵ドキュメントに頼ることになるでしょう。
開発者は、ツールや言語を適切に使用する方法を学んだり、その仕組みについて深く調べる場合、まずはドキュメントを参照します。

#### Web開発者向けの有名なドキュメント

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), [Firefox](https://www.mozilla.org/firefox/) の発行元である Mozilla から
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), [Chrome](https://www.google.com/chrome/) の発行元である Google から
- [Microsoft 独自の開発者向けドキュメント](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), [Microsoft Edge](https://www.microsoft.com/edge) の場合

✅ Web開発者の開発環境の基礎を理解したところで、Webデザイナーの開発環境との違いを見てみましょう。

---

## 🚀 チャレンジ

いくつかのプログラミング言語について比較してみましょう。
JavaScriptとJavaの特徴は？
COBOLとGoについては？

## 事後テスト
[事後テスト](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1?loc=ja)

## レビュー & 自習

プログラマーが利用できる様々な言語について、少しだけかじってみましょう。
ひとつの言語で1行書いて実行したら、次は別のふたつの言語で同じことをやってみてください。
なにかわかりましたか？

## 課題

[ドキュメントを読む](assignment.ja.md)
