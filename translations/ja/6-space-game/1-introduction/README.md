<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "979cfcce2413a87d9e4c67eb79234bc3",
  "translation_date": "2025-08-28T17:54:00+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "ja"
}
-->
# 宇宙ゲームを作ろう パート1: はじめに

![video](../../../../6-space-game/images/pewpew.gif)

## 講義前クイズ

[講義前クイズ](https://ff-quizzes.netlify.app/web/quiz/29)

### ゲーム開発における継承とコンポジション

これまでのレッスンでは、作成したアプリの設計アーキテクチャについてあまり考える必要はありませんでした。なぜなら、プロジェクトの規模が非常に小さかったからです。しかし、アプリケーションの規模や範囲が大きくなるにつれて、アーキテクチャの決定が重要な課題となります。JavaScriptで大規模なアプリケーションを作成するには、主に2つのアプローチがあります：*コンポジション* または *継承*。どちらにも長所と短所がありますが、ゲームの文脈で説明してみましょう。

✅ プログラミングに関する最も有名な本の1つは、[デザインパターン](https://en.wikipedia.org/wiki/Design_Patterns)に関するものです。

ゲームでは、`ゲームオブジェクト`という画面上に存在するオブジェクトがあります。これらは、デカルト座標系上の位置を持ち、`x`座標と`y`座標で特徴付けられます。ゲームを開発していくと、すべてのゲームオブジェクトが標準的なプロパティを持っていることに気づくでしょう。それは、以下のような要素です：

- **位置ベース** ほとんどのゲーム要素は位置ベースです。つまり、`x`と`y`の位置を持っています。
- **移動可能** 新しい位置に移動できるオブジェクトです。通常、ヒーロー、モンスター、またはNPC（非プレイヤーキャラクター）が該当しますが、例えば木のような静的オブジェクトは該当しません。
- **自己破壊** 一定期間だけ存在し、その後削除されるオブジェクトです。通常、`dead`や`destroyed`というブール値で表され、ゲームエンジンにそのオブジェクトを描画しないよう指示します。
- **クールダウン** 短命なオブジェクトに共通するプロパティです。典型的な例としては、数ミリ秒だけ表示されるテキストや爆発のようなグラフィカルエフェクトがあります。

✅ パックマンのようなゲームを考えてみてください。このゲームで上記の4つのオブジェクトタイプを特定できますか？

### 振る舞いの表現

上記で説明したのは、ゲームオブジェクトが持つ可能性のある振る舞いです。それでは、これらをどのようにコード化するのでしょうか？これらの振る舞いは、クラスやオブジェクトに関連付けられたメソッドとして表現できます。

**クラス**

`クラス`と`継承`を組み合わせて、特定の振る舞いをクラスに追加する方法があります。

✅ 継承は理解すべき重要な概念です。[MDNの継承に関する記事](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)でさらに学びましょう。

コードで表現すると、ゲームオブジェクトは通常次のようになります：

```javascript

//set up the class GameObject
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//this class will extend the GameObject's inherent class properties
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//this movable object can be moved on the screen
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//this is a specific class that extends the Movable class, so it can take advantage of all the properties that it inherits
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//this class, on the other hand, only inherits the GameObject properties
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//a hero can move...
const hero = new Hero();
hero.moveTo(5,5);

//but a tree cannot
const tree = new Tree();
```

✅ パックマンのヒーロー（例えばインキー、ピンキー、ブリンキー）を再構想し、それをJavaScriptでどのように記述するか考えてみてください。

**コンポジション**

オブジェクトの継承を扱う別の方法として、*コンポジション*を使用する方法があります。この場合、オブジェクトは次のように振る舞いを表現します：

```javascript
//create a constant gameObject
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//...and a constant movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//then the constant movableObject is composed of the gameObject and movable constants
const movableObject = {...gameObject, ...movable};

//then create a function to create a new Hero who inherits the movableObject properties
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...and a static object that inherits only the gameObject properties
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//create the hero and move it
const hero = createHero(10,10);
hero.moveTo(5,5);
//and create a static tree which only stands around
const tree = createStatic(0,0, 'Tree'); 
```

**どのパターンを使うべきか？**

どちらのパターンを選ぶかはあなた次第です。JavaScriptはこれら両方のパラダイムをサポートしています。

--

ゲーム開発で一般的なもう1つのパターンは、ゲームのユーザーエクスペリエンスとパフォーマンスを管理する問題に対処するものです。

## Pub/subパターン

✅ Pub/Subは「publish-subscribe（発行-購読）」の略です。

このパターンは、アプリケーションの異なる部分がお互いを知らないようにするという考え方に基づいています。なぜそうするのでしょうか？アプリケーションの各部分が分離されていると、全体の状況を把握しやすくなります。また、必要に応じて振る舞いを突然変更するのも簡単になります。これをどのように実現するのでしょうか？以下の概念を確立することで実現します：

- **メッセージ**: メッセージは通常、テキスト文字列と、メッセージの内容を明確にするためのオプションのペイロード（データ片）で構成されます。ゲームでの典型的なメッセージは`KEY_PRESSED_ENTER`です。
- **パブリッシャー**: この要素はメッセージを*発行*し、すべてのサブスクライバーに送信します。
- **サブスクライバー**: この要素は特定のメッセージを*受信*し、そのメッセージを受け取った結果として何らかのタスクを実行します（例：レーザーを発射する）。

この実装は非常に小規模ですが、非常に強力なパターンです。以下のように実装できます：

```javascript
//set up an EventEmitter class that contains listeners
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//when a message is received, let the listener to handle its payload
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//when a message is sent, send it to a listener with some payload
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

上記のコードを使用して、非常に小さな実装を作成できます：

```javascript
//set up a message structure
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoke the eventEmitter you set up above
const eventEmitter = new EventEmitter();
//set up a hero
const hero = createHero(0,0);
//let the eventEmitter know to watch for messages pertaining to the hero moving left, and act on it
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//set up the window to listen for the keyup event, specifically if the left arrow is hit, emit a message to move the hero left
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

上記では、キーボードイベント`ArrowLeft`を接続し、`HERO_MOVE_LEFT`メッセージを送信しています。このメッセージをリッスンして、結果として`hero`を移動させます。このパターンの強みは、イベントリスナーとヒーローがお互いを知らないことです。`ArrowLeft`を`A`キーに再マッピングすることもできます。また、イベントエミッターの`on`関数を少し編集するだけで、`ArrowLeft`でまったく異なる動作をさせることも可能です：

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

ゲームが成長して複雑になるにつれて、このパターンの複雑さは変わらず、コードはクリーンなままです。このパターンを採用することを強くお勧めします。

---

## 🚀 チャレンジ

Pub/Subパターンがゲームをどのように強化できるか考えてみましょう。どの部分がイベントを発行すべきで、ゲームはそれにどう反応すべきでしょうか？新しいゲームを考え、そのパーツがどのように振る舞うかを創造的に考えるチャンスです。

## 講義後クイズ

[講義後クイズ](https://ff-quizzes.netlify.app/web/quiz/30)

## 復習と自己学習

Pub/Subについてさらに学ぶには、[こちらを読んでください](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon)。

## 課題

[ゲームのモックアップを作成する](assignment.md)

---

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確さが含まれる可能性があります。元の言語で記載された原文が公式な情報源と見なされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当社は一切の責任を負いません。