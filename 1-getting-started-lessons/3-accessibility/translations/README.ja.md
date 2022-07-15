# アクセシブルな Web ページの作成

![All About Accessibility](/sketchnotes/webdev101-a11y.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## レッスン前の小テスト
[レッスン前の小テスト](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/5?loc=ja)

> Web の力は、その普遍性にあります。障害の有無に関わらず、誰もがアクセスできることが重要です。
>
> \- Sir Timothy Berners-Lee, W3C 理事、World Wide Web の発明者

この引用は、アクセシブルな Web サイトを作成することの重要性を完璧に強調しています。すべての人がアクセスできないアプリケーションは、定義上、排除的なものです。Web 開発者として、私たちは常にアクセシビリティを念頭に置くべきです。最初からこのことに焦点を当てることで、あなたが作成したページに誰もがアクセスできるようにすることができるようになります。このレッスンでは、Web 資産がアクセシブルであることを確実にするのに役立つツールと、アクセシビリティを念頭に置いて構築する方法について学びます。

## 使用するツール

### スクリーンリーダー

よく知られているアクセシビリティツールの一つにスクリーンリーダーがあります。

[スクリーンリーダー](https://ja.wikipedia.org/wiki/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC)は、視覚障害のある方のために一般的に使用されているクライアントです。ブラウザが共有したい情報を適切に伝えることに時間を費やしているので、スクリーンリーダーも同じように情報を伝えるようにしなければなりません。

スクリーンリーダーは、最も基本的には、ページを上から下まで音声で読み上げます。あなたのページがすべてテキストである場合、リーダーはブラウザと同様の方法で情報を伝えます。もちろん、ウェブページが純粋なテキストであることはほとんどなく、リンク、グラフィック、カラー、その他の視覚的な要素が含まれます。これらの情報がスクリーンリーダーに正しく読まれるように注意を払わなければなりません。

すべてのウェブ開発者は、スクリーンリーダーに慣れる必要があります。上で強調したように、ユーザーが利用するのはクライアントです。ブラウザの操作方法を熟知しているのと同じように、スクリーンリーダーの操作方法を学ぶべきです。幸いなことに、スクリーンリーダーはほとんどのオペレーティングシステムに組み込まれています。

ブラウザの中には、テキストを音読したり、基本的なナビゲーション機能を提供したりするツールや拡張機能を内蔵しているものもありますが、[これらはアクセシビリティに焦点を当てたEdgeブラウザツール](https://support.microsoft.com/ja-jp/microsoft-edge/microsoft-edge-%E3%81%AE%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B7%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3%E6%A9%9F%E8%83%BD-4c696192-338e-9465-b2cd-bd9b698ad19a)のようなものです。これらも重要なアクセシビリティツールですが、スクリーンリーダーとは機能が大きく異なるため、スクリーンリーダーのテストツールと勘違いしてはいけません。

✅ スクリーンリーダーやブラウザのテキストリーダーを試してみましょう。Windows ではデフォルトで [Narrator](https://support.microsoft.com/ja-jp/windows/%E3%83%8A%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC%E3%81%AE%E8%A9%B3%E7%B4%B0%E3%81%AA%E3%82%AC%E3%82%A4%E3%83%89-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) が搭載されており、[JAWS](https://webaim.org/articles/jaws/) や [NVDA](https://www.nvaccess.org/about-nvda/) もインストールできます。macOS と iOS では、[VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) がデフォルトでインストールされています。

### ズーム

視覚障害のある人がよく使うもう一つのツールは、ズームです。ズームの最も基本的なタイプは静的ズームで、`コントロール + プラス記号 (+)` で制御するか、画面の解像度を下げることで制御します。このタイプのズームではページ全体のサイズが変更されるため、[レスポンシブデザイン](https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout/Responsive_Design)を使用することは、ズームレベルを上げても良いユーザー体験を提供するために重要です。

もう一つのタイプのズームは、特殊なソフトウェアを使用して、実際の虫眼鏡を使用するのと同じように、画面のある領域を拡大してパンすることを目的としています。Windows では、[Magnifier](https://support.microsoft.com/ja-jp/windows/%E7%94%BB%E9%9D%A2%E4%B8%8A%E3%81%AE%E9%A0%85%E7%9B%AE%E3%82%92%E8%A6%8B%E3%82%84%E3%81%99%E3%81%8F%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AB-%E6%8B%A1%E5%A4%A7%E9%8F%A1%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B-414948ba-8b1c-d3bd-8615-0e5e32204198) が内蔵されており、[ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) は、より多くの機能を持ち、より多くのユーザーベースを持つサードパーティ製の拡大表示ソフトウェアです。macOS と iOS の両方には、[Zoom](https://www.apple.com/accessibility/mac/vision/) と呼ばれる拡大鏡ソフトが内蔵されています。

### コントラストチェッカー

Webサイトの色は、色覚障害者やコントラストの低い色が見えにくい人のニーズに応えるために、慎重に選ぶ必要があります。

✅ [WCAG のカラーチェッカー](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=ja-JP)などのブラウザ拡張機能を使って、色使いを楽しむ Web サイトをテストしてみましょう。何がわかりますか？

### Lighthouse

ブラウザの開発者ツールエリアには、Lighthouse ツールがあります。このツールは、Web サイトのアクセシビリティ (他の分析と同様に) を最初に見るために重要です。Lighthouse だけに頼らないことが重要ですが、100% のスコアはベースラインとして非常に役立ちます。

✅ ブラウザの開発者ツールパネルで Lighthouse を見つけて、任意のサイトで分析を実行してください。何を発見しましたか？

## アクセシビリティを考慮した設計

アクセシビリティは比較的大きなテーマです。あなたを助けるために、多くのリソースが用意されています。

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

アクセシブルなサイトを作成するためのすべての側面をカバーすることはできませんが、以下は、あなたが実装したいと思う中核的な原則のいくつかです。アクセシブルなページを最初からデザインすることは、既存のページに戻ってアクセシブルにするよりも**常に**簡単です。

## 良い表示の原則

### カラーセーフパレット

人はさまざまな方法で世界を見ていますが、これには色も含まれます。サイトの配色を選択する際には、誰もがアクセスできるようにする必要があります。[カラーパレットを生成するための素晴らしいツールの1つが Color Safe ](http://colorsafe.co/)です。

✅ 色の使用に非常に問題のある Web サイトを特定してください。なぜですか？

### 正しい HTML を使用する

CSS と JavaScript を使えば、あらゆる要素をあらゆるタイプのコントロールのように見せることができます。`<span>` を使って `<button>` を作成したり、`<b>` をハイパーリンクにしたりすることができます。この方がスタイルを整えるのは簡単だと思われるかもしれませんが、スクリーンリーダーには何も伝わりません。ページ上でコントロールを作成する際には、適切な HTML を使用してください。ハイパーリンクが必要な場合は、`<a>` を使用します。適切なコントロールに適切なHTML を使うことをセマンティック HTML の利用といいます。

✅ 任意の Web サイトに行って、デザイナーや開発者が HTML を適切に使用しているかどうかを確認してください。リンクであるはずのボタンを見つけることができますか？ヒント: 右クリックして、ブラウザで「View Page Source」を選択して、基礎となるコードを見てみましょう。

### 記述的な見出しの階層を作成する

スクリーンリーダーのユーザーは、情報を見つけたり、ページをナビゲートしたりするために、[見出しに大きく依存しています](https://webaim.org/projects/screenreadersurvey8/#finding)。記述的な見出しコンテンツを書き、意味的な見出しタグを使用することは、スクリーンリーダーのユーザーがナビゲートしやすいサイトを作成するために重要です。

### 視覚的な手がかりを上手に使う

CSS は、ページ上のあらゆる要素の外観を完全に制御することができます。アウトラインのないテキストボックスやアンダーラインのないハイパーリンクを作成することができます。残念ながら、これらの手がかりを削除すると、それらに依存している人がコントロールの種類を認識することが難しくなる可能性があります。

## リンクテキストの重要性

ハイパーリンクは、ウェブをナビゲートするための核となるものです。その結果、スクリーンリーダーがリンクを適切に読めるようにすることで、すべてのユーザーがサイトをナビゲートできるようになります。

### スクリーンリーダーとリンク

ご想像の通り、スクリーンリーダーはリンクテキストをページ上の他のテキストと同じように読みます。このことを念頭に置いて、以下に示すテキストは完全に許容できると感じるかもしれません。

> 妖精ペンギンと呼ばれることもあるコガタペンギンは、世界最小のペンギンです。[詳しくはこちら](https://ja.wikipedia.org/wiki/%E3%82%B3%E3%82%AC%E3%82%BF%E3%83%9A%E3%83%B3%E3%82%AE%E3%83%B3) をご覧ください。

> 妖精ペンギンと呼ばれることもあるリトルペンギンは、世界最小のペンギンです。詳しくは https://ja.wikipedia.org/wiki/%E3%82%B3%E3%82%AC%E3%82%BF%E3%83%9A%E3%83%B3%E3%82%AE%E3%83%B3 をご覧ください。

> **注** 今から読むように、上記のようなリンクは絶対に作っては**いけません**。

スクリーンリーダーは、ブラウザとは異なる機能のセットを持つ別のインターフェイスであることを覚えておいてください。

### URL を使用する場合の問題点

スクリーンリーダーはテキストを読みます。本文中に URL が表示されている場合、スクリーンリーダーはその URL を読みます。一般的に、URL は意味のある情報を伝えず、迷惑に聞こえることがあります。あなたの携帯電話が URL 付きのテキストメッセージを音声で読んだことがある場合は、このような経験をしたことがあるかもしれません。

### "こちらをクリック" の問題点

スクリーンリーダーは、目の不自由な人がページをスキャンしてリンクを探すのと同じように、ページ上のハイパーリンクだけを読む機能も持っています。リンクテキストが常に「ここをクリックしてください」となっている場合、ユーザーは「ここをクリックしてください、ここをクリックしてください、ここをクリックしてください、ここをクリックしてください、ここをクリックしてください、ここをクリックしてください、ここをクリックしてください、ここをクリックしてください、...」としか聞こえません。すべてのリンクは互いに区別がつかなくなりました。

### 良いリンクテキスト

良いリンクの文章は、リンクの向こう側に何があるのかを簡潔に説明します。上記の例では、コガタペンギンについて話していますが、リンク先はその種についての Wikipedia のページになっています。*コガタペンギン* というフレーズは、リンクをクリックした場合に何を学ぶのかが明確になるので、完璧なリンクテキストになります。

> 妖精ペンギンとして知られることもある[コガタペンギン](https://ja.wikipedia.org/wiki/%E3%82%B3%E3%82%AC%E3%82%BF%E3%83%9A%E3%83%B3%E3%82%AE%E3%83%B3)は、世界で最も小さいペンギンです。

✅ 数分間 Web サーフィンをして、不明瞭なリンク戦略を使用しているページを見つけましょう。他の、より良いリンクを貼られているサイトと比較してみてください。あなたは何を学びますか？

#### 検索エンジンの注意事項

あなたのサイトが誰でもアクセスできるようにすることで、検索エンジンがあなたのサイトをナビゲートするのにも役立ちます。検索エンジンは、ページのトピックを学習するためにリンクテキストを使用します。ですから、良いリンクテキストを使用することは誰にでも役立ちます。

### ARIA

次のページを想像してみてください。

| Product      | Description        | Order        |
| ------------ | ------------------ | ------------ |
| Widget       | [Description]('#') | [Order]('#') |
| Super widget | [Description]('#') | [Order]('#') |

この例では、description と order のテキストを複製しても、ブラウザを使っている人にとっては意味があります。しかし、スクリーン・リーダーを使っている人には、文脈なしに繰り返される *description* と *order* という単語しか聞こえません。

これらのタイプのシナリオをサポートするために、HTML は[アクセシブル・リッチ・インターネット・アプリケーション (ARIA)](https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA)として知られている一連の属性をサポートしています。これらの属性により、スクリーンリーダーに追加の情報を提供することができます。

> **NOTE**: HTML の多くの側面と同様に、ブラウザやスクリーンリーダーのサポートは異なるかもしれません。しかし、ほとんどのメインラインのクライアントは ARIA 属性をサポートしています。

ページのフォーマットでリンクを記述できない場合、`aria-label` を使ってリンクを記述することができます。ウィジェットの説明は

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ 一般的には、上記のようにセマンティックマークアップを使用することで ARIA の使用が優先されますが、様々な HTML ウィジェットにはセマンティックに相当するものが存在しないことがあります。良い例がツリーです。ツリーには HTML と同等のものがないので、適切なロールとアリアの値でこの要素の一般的な `<div>` を識別します。[ARIA に関する MDN のドキュメント](https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA)には、より有用な情報が含まれています。

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## 画像

言うまでもなく、スクリーンリーダーは画像の中にあるものを自動的に読み取ることができません。画像を確実にアクセスできるようにするには、それほどの労力は必要ありません - それが `alt` 属性のすべてです。意味のある画像はすべて、その画像が何であるかを説明するための `alt` を持つべきです。
純粋に装飾的な画像は `alt` 属性に空の文字列を設定しなければなりません。`alt=""`です。これにより、スクリーンリーダが装飾的な画像を不必要に知らせることを防ぐことができます。

✅ さすがに検索エンジンも画像の中身を理解することができません。彼らもまた、alt　テキストを使用しています。ですから、もう一度言いますが、あなたのページがアクセス可能であることを確認することは、追加のボーナスを提供します。

## キーボード

マウスやトラックパッドを使用できないユーザーの中には、1つの要素から次の要素へとタブを移動するためにキーボードのインタラクションに頼っている人もいます。キーボードを使用するユーザーがドキュメントの下に移動しながら各インタラクティブ要素にアクセスできるように、Web サイトのコンテンツを論理的な順序で表示することが重要です。Web ページをセマンティック マークアップで構築し、CSS を使用して視覚的なレイアウトをスタイル化している場合、サイトはキーボード ナビゲーションが可能なはずですが、この点を手動でテストすることが重要です。[キーボードナビゲーション戦略](https://webaim.org/techniques/keyboard/)の詳細については、こちらをご覧ください。

✅ 任意のウェブサイトにアクセスして、キーボードだけを使ってナビゲートしてみてください。何がうまくいき、何がうまくいかないのでしょうか？なぜでしょうか？

## まとめ

ある人にとってアクセシブルな Web は、真の意味での「ワールドワイドな Web」ではありません。作成するサイトがアクセシブルであることを保証する最善の方法は、アクセシビリティのベストプラクティスを最初から取り入れることです。余分なステップがありますが、これらのスキルをワークフローに組み込むことで、作成するすべてのページがアクセシブルになることを意味します。

---

## 🚀 チャレンジ

この HTML を手に取り、学んだ戦略を踏まえて、できるだけアクセスしやすいように書き換えてください。

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

## レッスン後の小テスト
[レッスン後の小テスト](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/6?loc=ja)

## 復習と自己学習

多くの政府には、アクセシビリティの要件に関する法律があります。あなたの国のアクセシビリティに関する法律をお読みください。何が適用され、何が適用されないのか？例としては、[この政府の Web サイト](https://accessibility.blog.gov.uk/)があります。

## 課題
 
[アクセスできない Web サイトを分析する](assignment.ja.md)

Credits: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) by Instrument
