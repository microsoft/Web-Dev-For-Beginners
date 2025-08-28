<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c63675cfaf1d223b37bb9fecbfe7c252",
  "translation_date": "2025-08-23T23:29:40+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "ja"
}
-->
# プログラミング言語とツールの基礎

このレッスンでは、プログラミング言語の基本を学びます。ここで扱うトピックは、今日のほとんどの現代的なプログラミング言語に適用されます。「ツールの基礎」セクションでは、開発者として役立つソフトウェアについて学びます。

![Intro Programming](../../../../sketchnotes/webdev101-programming.png)
> スケッチノート: [Tomomi Imura](https://twitter.com/girlie_mac)

## 講義前のクイズ
[講義前のクイズ](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## はじめに

このレッスンでは以下を学びます:

- プログラミングとは何か？
- プログラミング言語の種類
- プログラムの基本要素
- プロフェッショナルな開発者に役立つソフトウェアとツール

> このレッスンは [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon) で受講できます！

## プログラミングとは？

プログラミング（コーディングとも呼ばれる）は、コンピュータやモバイルデバイスなどの機器に指示を与えるプロセスです。これらの指示はプログラミング言語を使って記述され、デバイスによって解釈されます。これらの指示セットはさまざまな名前で呼ばれることがありますが、*プログラム*、*コンピュータプログラム*、*アプリケーション（アプリ）*、*実行可能ファイル* などが一般的です。

*プログラム* はコードで書かれたものすべてを指します。ウェブサイト、ゲーム、スマホアプリなどがプログラムです。コードを書かずにプログラムを作成することも可能ですが、その基盤となるロジックはデバイスによって解釈され、そのロジックはほとんどの場合コードで書かれています。*実行中* または *実行している* プログラムは指示を実行しています。このレッスンを読んでいるデバイスも、画面に表示するためのプログラムを実行しています。

✅ 少し調べてみましょう: 世界初のコンピュータプログラマーとされる人物は誰でしょう？

## プログラミング言語

プログラミング言語は、開発者がデバイスに指示を与えるための手段です。デバイスはバイナリ（1と0）しか理解できませんが、*ほとんどの* 開発者にとってそれは効率的なコミュニケーション方法ではありません。プログラミング言語は、人間とコンピュータの間のコミュニケーション手段です。

プログラミング言語にはさまざまな形式があり、目的も異なる場合があります。例えば、JavaScriptは主にウェブアプリケーションに使用され、Bashは主にオペレーティングシステムに使用されます。

*低水準言語* は通常、デバイスが指示を解釈するために必要なステップが少なくなります。しかし、*高水準言語* が人気なのは、その読みやすさとサポートの充実度です。JavaScriptは高水準言語とされています。

以下のコードは、高水準言語であるJavaScriptと低水準言語であるARMアセンブリコードの違いを示しています。

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

信じられないかもしれませんが、*どちらも同じことをしています*: フィボナッチ数列を10まで表示しています。

✅ フィボナッチ数列は [定義](https://en.wikipedia.org/wiki/Fibonacci_number) によると、0と1から始まり、各数がその前の2つの数の合計となる数列です。フィボナッチ数列の最初の10個の数字は、0, 1, 1, 2, 3, 5, 8, 13, 21, 34です。

## プログラムの要素

プログラム内の単一の指示は *ステートメント* と呼ばれ、通常は指示が終了する場所、つまり *終端* を示す文字や行間隔があります。プログラムの終端方法は言語によって異なります。

プログラム内のステートメントは、ユーザーやその他の場所から提供されるデータに依存して指示を実行することがあります。データはプログラムの動作を変える可能性があるため、プログラミング言語にはデータを一時的に保存して後で使用できる方法が備わっています。これを *変数* と呼びます。変数は、デバイスにデータをメモリに保存するよう指示するステートメントです。プログラム内の変数は代数の変数に似ており、ユニークな名前を持ち、その値は時間とともに変化する可能性があります。

一部のステートメントがデバイスによって実行されない可能性があります。これは通常、開発者によって意図的に書かれた場合や、予期しないエラーが発生した場合に起こります。このようなアプリケーションの制御は、より堅牢で保守性の高いものにします。通常、これらの制御の変更は特定の条件が満たされたときに発生します。現代のプログラミングでよく使われるステートメントの1つに `if..else` ステートメントがあります。

✅ このタイプのステートメントについては、後のレッスンでさらに学びます。

## ツールの基礎

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

> 🎥 上の画像をクリックしてツールに関する動画を視聴

このセクションでは、プロフェッショナルな開発の旅を始める際に非常に役立つソフトウェアについて学びます。

**開発環境** とは、開発者がソフトウェアを書く際に頻繁に使用するツールや機能の独自のセットです。これらのツールは開発者の特定のニーズに合わせてカスタマイズされている場合があり、開発者が仕事や個人プロジェクトの優先順位を変更したり、異なるプログラミング言語を使用したりする場合に変化することがあります。開発環境は、それを使用する開発者と同じくらいユニークです。

### エディタ

ソフトウェア開発において最も重要なツールの1つがエディタです。エディタはコードを書く場所であり、時にはコードを実行する場所でもあります。

開発者がエディタを利用する理由は以下の通りです:

- *デバッグ* は、コードを1行ずつステップ実行してバグやエラーを見つけるのに役立ちます。一部のエディタにはデバッグ機能があり、特定のプログラミング言語に合わせてカスタマイズして追加することができます。
- *構文ハイライト* は、コードに色やテキストのフォーマットを追加し、読みやすくします。ほとんどのエディタはカスタマイズ可能な構文ハイライトを提供しています。
- *拡張機能と統合* は、開発者による開発者のための専門的なツールです。これらのツールは基本エディタに組み込まれていません。例えば、多くの開発者はコードの動作を説明するためにドキュメントを作成します。彼らはスペルチェック拡張機能をインストールして、ドキュメント内の誤字を見つけることができます。ほとんどの拡張機能は特定のエディタ内で使用することを目的としており、ほとんどのエディタには利用可能な拡張機能を検索する方法が備わっています。
- *カスタマイズ* により、開発者は自分のニーズに合わせた独自の開発環境を作成できます。ほとんどのエディタは非常にカスタマイズ可能で、開発者が独自の拡張機能を作成することも可能です。

#### 人気のエディタとウェブ開発拡張機能

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

### ブラウザ

もう1つの重要なツールがブラウザです。ウェブ開発者は、ウェブ上でコードがどのように動作するかを確認するためにブラウザを利用します。また、HTMLのようにエディタで書かれたウェブページの視覚的要素を表示するためにも使用されます。

多くのブラウザには *開発者ツール* (DevTools) が搭載されており、アプリケーションに関する重要な情報を収集・キャプチャするための便利な機能が含まれています。例えば、ウェブページにエラーがある場合、エラーが発生したタイミングを知ることが役立つことがあります。ブラウザのDevToolsはこの情報をキャプチャするように設定できます。

#### 人気のブラウザとDevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### コマンドラインツール

一部の開発者は、日常の作業においてグラフィカルなビューをあまり必要とせず、コマンドラインを利用することを好みます。コードを書くには大量のタイピングが必要であり、一部の開発者はキーボードでの作業の流れを中断したくないと考えます。彼らはキーボードショートカットを使ってデスクトップウィンドウを切り替えたり、異なるファイルで作業したり、ツールを使用したりします。ほとんどのタスクはマウスで完了できますが、コマンドラインを使用する利点の1つは、マウスとキーボードを切り替える必要なく多くの作業をコマンドラインツールで完了できることです。コマンドラインのもう1つの利点は、カスタマイズ可能であり、カスタム設定を保存して後で変更したり、他の開発マシンにインポートしたりできることです。開発環境は開発者ごとに非常にユニークであるため、コマンドラインを完全に避ける人もいれば、完全に依存する人もおり、その両方を好む人もいます。

### 人気のコマンドラインオプション

コマンドラインのオプションは使用するオペレーティングシステムによって異なります。

*💻 = オペレーティングシステムにプリインストールされています。*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (CMDとも呼ばれる) 💻
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

#### 人気のコマンドラインツール

- [Git](https://git-scm.com/) (💻 ほとんどのオペレーティングシステムにプリインストール)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### ドキュメント

開発者が新しいことを学びたいとき、最も頼りにするのはドキュメントです。開発者はツールや言語を正しく使用する方法を学ぶため、またその仕組みを深く理解するためにドキュメントを利用します。

#### ウェブ開発に関する人気のドキュメント

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web) - Mozillaによる、[Firefox](https://www.mozilla.org/firefox/)ブラウザの発行元
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev) - Googleによる、[Chrome](https://www.google.com/chrome/)の発行元
- [Microsoftの開発者向けドキュメント](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers) - [Microsoft Edge](https://www.microsoft.com/edge)向け
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ 調査してみましょう: ウェブ開発者の環境の基本を理解した今、ウェブデザイナーの環境と比較してみましょう。

---

## 🚀 チャレンジ

いくつかのプログラミング言語を比較してみましょう。JavaScriptとJavaのユニークな特徴は何ですか？COBOLとGoではどうでしょう？

## 講義後のクイズ
[講義後のクイズ](https://ff-quizzes.netlify.app/web/quiz/2)

## 復習と自己学習

プログラマーが利用できるさまざまな言語について少し学びましょう。1つの言語で1行を書き、それを別の2つの言語で書き直してみてください。何を学びましたか？

## 課題

[ドキュメントを読む](assignment.md)

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を期すよう努めておりますが、自動翻訳には誤りや不正確さが含まれる可能性があります。元の言語で記載された原文が公式な情報源と見なされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当方は一切の責任を負いません。