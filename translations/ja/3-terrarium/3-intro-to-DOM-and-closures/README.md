<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "30f8903a1f290e3d438dc2c70fe60259",
  "translation_date": "2025-08-23T22:30:21+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/README.md",
  "language_code": "ja"
}
-->
# テラリウムプロジェクト パート3: DOM操作とクロージャ

![DOMとクロージャ](../../../../sketchnotes/webdev101-js.png)  
> スケッチノート: [Tomomi Imura](https://twitter.com/girlie_mac)

## 講義前クイズ

[講義前クイズ](https://ff-quizzes.netlify.app/web/quiz/19)

### はじめに

DOM（"Document Object Model"）の操作は、ウェブ開発の重要な側面です。[MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction)によると、「Document Object Model (DOM) は、ウェブ上のドキュメントの構造と内容を構成するオブジェクトのデータ表現です。」DOM操作の課題は、しばしばJavaScriptフレームワークを使用してDOMを管理する理由となっていますが、ここではバニラJavaScriptで対応します！

さらに、このレッスンでは[JavaScriptクロージャ](https://developer.mozilla.org/docs/Web/JavaScript/Closures)の概念を紹介します。クロージャとは、ある関数が別の関数に囲まれており、内側の関数が外側の関数のスコープにアクセスできるようにするものです。

> JavaScriptのクロージャは非常に広範で複雑なトピックです。このレッスンでは、基本的なアイデアに触れるだけです。このテラリウムのコード内で、クロージャ（内側の関数と外側の関数が構築され、内側の関数が外側のスコープにアクセスできるようになっているもの）を見つけることができます。詳細については、[詳細なドキュメント](https://developer.mozilla.org/docs/Web/JavaScript/Closures)をご覧ください。

このレッスンでは、クロージャを使用してDOMを操作します。

DOMを木構造として考えてみてください。これは、ウェブページのドキュメントを操作するためのすべての方法を表しています。さまざまなAPI（アプリケーションプログラムインターフェース）が作成されており、プログラマーは選択したプログラミング言語を使用してDOMにアクセスし、編集、変更、再配置、その他の管理を行うことができます。

![DOMツリーの表現](../../../../3-terrarium/3-intro-to-DOM-and-closures/images/dom-tree.png)

> DOMとそれを参照するHTMLマークアップの表現。[Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)より

このレッスンでは、ページ上の植物を操作できるJavaScriptを作成することで、インタラクティブなテラリウムプロジェクトを完成させます。

### 前提条件

テラリウムのHTMLとCSSが完成している必要があります。このレッスンの終わりまでに、植物をドラッグしてテラリウムに出し入れできるようになります。

### タスク

テラリウムフォルダ内に新しいファイル`script.js`を作成します。このファイルを`<head>`セクションでインポートします：

```html
	<script src="./script.js" defer></script>
```

> 注: 外部JavaScriptファイルをHTMLファイルにインポートする際には、`defer`を使用して、HTMLファイルが完全に読み込まれた後にJavaScriptが実行されるようにします。また、`async`属性を使用して、HTMLファイルの解析中にスクリプトを実行することもできますが、今回の場合、ドラッグスクリプトを実行する前にHTML要素が完全に利用可能であることが重要です。

---

## DOM要素

最初に行うべきことは、DOM内で操作したい要素への参照を作成することです。今回の場合、サイドバーにある14個の植物が対象です。

### タスク

```html
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
```

ここで何が起きているのでしょうか？ドキュメントを参照し、そのDOMを検索して特定のIdを持つ要素を見つけています。HTMLの最初のレッスンで、各植物画像に個別のId（`id="plant1"`）を付けたことを思い出してください。その作業がここで役立ちます。各要素を特定した後、そのアイテムを`dragElement`という関数に渡します。この関数は後で作成します。これにより、HTML内の要素がドラッグ可能になります（または、すぐにドラッグ可能になります）。

✅ なぜ要素をIdで参照するのでしょうか？CSSクラスではなく？CSSに関する前回のレッスンを参考にして、この質問に答えてみてください。

---

## クロージャ

次に、`dragElement`クロージャを作成します。これは、内側の関数（今回の場合は3つ）を囲む外側の関数です。

クロージャは、1つ以上の関数が外側の関数のスコープにアクセスする必要がある場合に便利です。以下はその例です：

```javascript
function displayCandy(){
	let candy = ['jellybeans'];
	function addCandy(candyType) {
		candy.push(candyType)
	}
	addCandy('gumdrops');
}
displayCandy();
console.log(candy)
```

この例では、`displayCandy`関数が、既存の配列に新しいキャンディタイプを追加する関数を囲んでいます。このコードを実行すると、`candy`配列は未定義になります。これは、`candy`がローカル変数（クロージャにローカル）であるためです。

✅ `candy`配列をアクセス可能にするにはどうすればよいでしょうか？配列をクロージャの外側に移動してみてください。これにより、配列はグローバルになり、クロージャのローカルスコープに限定されなくなります。

### タスク

`script.js`内の要素宣言の下に、次の関数を作成します：

```javascript
function dragElement(terrariumElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
}
```

`dragElement`は、スクリプトの冒頭で宣言された`terrariumElement`オブジェクトを取得します。そして、関数に渡されたオブジェクトのローカル位置を`0`に設定します。これらは、ドラッグ＆ドロップ機能を各要素に追加する際に操作されるローカル変数です。テラリウムはこれらのドラッグされた要素によって埋められるため、配置場所を追跡する必要があります。

さらに、この関数に渡された`terrariumElement`は、`pointerdown`イベントを割り当てられます。これは、[ウェブAPI](https://developer.mozilla.org/docs/Web/API)の一部で、DOM管理を支援するために設計されています。`onpointerdown`はボタンが押されたとき、または今回の場合はドラッグ可能な要素がタッチされたときに発火します。このイベントハンドラーは、いくつかの例外を除き、[ウェブおよびモバイルブラウザ](https://caniuse.com/?search=onpointerdown)の両方で動作します。

✅ [イベントハンドラー`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick)は、クロスブラウザでのサポートがはるかに広範です。なぜここで使用しないのでしょうか？作成しようとしている画面インタラクションの正確なタイプを考えてみてください。

---

## Pointerdrag関数

`terrariumElement`はドラッグ可能になりました。`onpointerdown`イベントが発火すると、`pointerDrag`関数が呼び出されます。この関数を次の行の下に追加します：`terrariumElement.onpointerdown = pointerDrag;`：

### タスク

```javascript
function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
}
```

いくつかのことが起きています。まず、`e.preventDefault();`を使用して、pointerdown時に通常発生するデフォルトイベントを防ぎます。これにより、インターフェースの動作をより細かく制御できます。

> スクリプトファイルを完全に構築した後、この行を削除してみてください。何が起きるでしょうか？

次に、ブラウザウィンドウで`index.html`を開き、インターフェースを検査します。植物をクリックすると、'e'イベントがどのようにキャプチャされるかがわかります。このイベントを掘り下げて、1回のpointerdownイベントでどれだけの情報が収集されるかを確認してください。

次に、ローカル変数`pos3`と`pos4`が`e.clientX`に設定されていることに注目してください。これらの値は、クリックまたはタッチした瞬間の植物のx座標とy座標をキャプチャします。クリックしてドラッグする際の植物の動作を細かく制御する必要があるため、その座標を追跡します。

✅ なぜこのアプリ全体が1つの大きなクロージャで構築されているのか、少しずつ明確になってきましたか？もしそうでなければ、14個のドラッグ可能な植物それぞれのスコープをどのように維持するかを考えてみてください。

この初期関数を完成させるために、`pos4 = e.clientY`の下に2つのpointerイベント操作を追加します：

```html
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```

これで、ポインタを動かすと植物が一緒にドラッグされ、植物の選択を解除するとドラッグジェスチャが停止するように指定しています。`onpointermove`と`onpointerup`は、`onpointerdown`と同じAPIの一部です。インターフェースは現在エラーをスローしますが、これはまだ`elementDrag`と`stopElementDrag`関数を定義していないためです。次にそれらを構築します。

## elementDragとstopElementDrag関数

クロージャを完成させるために、植物をドラッグしたときとドラッグを停止したときに何が起きるかを処理する2つの内部関数を追加します。目指す動作は、いつでもどの植物でもドラッグでき、画面上のどこにでも配置できることです。このインターフェースは非常に自由度が高く（ドロップゾーンなどはありません）、植物を追加、削除、再配置することでテラリウムを自由にデザインできるようにしています。

### タスク

`pointerDrag`の閉じ中括弧の直後に`elementDrag`関数を追加します：

```javascript
function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}
```

この関数では、冒頭で設定したローカル変数1～4を大幅に編集しています。ここで何が起きているのでしょうか？

ドラッグ中に、`pos1`を`pos3`（以前に`e.clientX`として設定）から現在の`e.clientX`値を引いたものに再割り当てします。同様の操作を`pos2`にも行います。その後、`pos3`と`pos4`を要素の新しいX座標とY座標にリセットします。これらの変更をドラッグ中にコンソールで確認できます。その後、植物のCSSスタイルを操作して、新しい位置に基づいて植物の位置を設定します。これは、`pos1`と`pos2`の新しい位置を比較して植物の上部と左側のX座標とY座標を計算することで行います。

> `offsetTop`と`offsetLeft`は、親要素の位置に基づいて要素の位置を設定するCSSプロパティです。親要素は`static`以外の位置指定がされている必要があります。

これらの位置の再計算により、テラリウムとその植物の動作を細かく調整できます。

### タスク

インターフェースを完成させる最後のタスクは、`elementDrag`の閉じ中括弧の後に`stopElementDrag`関数を追加することです：

```javascript
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
```

この小さな関数は、`onpointerup`と`onpointermove`イベントをリセットします。これにより、植物のドラッグを再開したり、新しい植物のドラッグを開始したりできます。

✅ これらのイベントをnullに設定しないとどうなるでしょうか？

これでプロジェクトが完成しました！

🥇おめでとうございます！美しいテラリウムが完成しました。  
![完成したテラリウム](../../../../3-terrarium/3-intro-to-DOM-and-closures/images/terrarium-final.png)

---

## 🚀チャレンジ

クロージャに新しいイベントハンドラーを追加して、植物にさらに何かをさせてみましょう。たとえば、植物をダブルクリックして最前面に移動させるなどです。創造力を発揮してください！

## 講義後クイズ

[講義後クイズ](https://ff-quizzes.netlify.app/web/quiz/20)

## 復習と自己学習

画面上の要素をドラッグすることは一見簡単そうに見えますが、目的とする効果によってはさまざまな方法や落とし穴があります。実際、[ドラッグ＆ドロップAPI](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API)というものがあり、試してみることができます。このモジュールでは、求める効果が少し異なるため使用しませんでしたが、自分のプロジェクトでこのAPIを試してみてください。

ポインターイベントに関する詳細は、[W3Cドキュメント](https://www.w3.org/TR/pointerevents1/)や[MDNウェブドキュメント](https://developer.mozilla.org/docs/Web/API/Pointer_events)で確認できます。

常にブラウザの対応状況を[CanIUse.com](https://caniuse.com/)で確認してください。

## 課題

[DOMを使ったさらなる作業](assignment.md)

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知おきください。元の言語で記載された文書が公式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当方は一切の責任を負いません。