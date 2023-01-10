# スペースゲーム構築プロジェクト その 1: イントロダクション

![video](../../images/pewpew.gif)

## レッスン前の小テスト

[レッスン前の小テスト](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/29?loc=ja)

### ゲーム開発における継承とコンポジション

以前のレッスンでは、プロジェクトの規模が非常に小さかったため、構築したアプリの設計アーキテクチャを気にする必要はあまりありませんでした。しかし、アプリケーションの規模や範囲が大きくなると、アーキテクチャの決定がより大きな関心事になります。JavaScript で大規模なアプリケーションを作成するには、大きく分けて2つのアプローチがあります。*コンポジション* と *継承* です。どちらにも長所と短所がありますが、ゲームの文脈から説明してみましょう。

✅ これまでに書かれたプログラミング本の中で最も有名なものの一つは、[デザインパターン](https://ja.wikipedia.org/wiki/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3_(%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2))と関係があります。

ゲームには `ゲームオブジェクト` があり、これは画面上に存在するオブジェクトです。つまり、それらは直交座標系上に位置しており、`x` と `y` の座標を持つことが特徴です。ゲームを開発していくうちに、すべてのゲームオブジェクトには、すべてのゲームに共通する標準的な特性があることに気づくでしょう。

- **location-based** すべてではないにしても、ほとんどのゲーム要素は位置情報に基づいています。これは、場所、`x` と `y` を持つことを意味します
- **movable** これらは、新しい場所に移動することができるオブジェクトです。これは典型的にはヒーローやモンスター、NPC (プレイヤーではないキャラクター) などですが、例えば木のような静的なオブジェクトはそうではありません
- **self-destructing** これらのオブジェクトは、削除のために自分自身を設定する前に、一定期間だけ存在します。通常、これは `dead` または `destroyed` ブール値で表され、このオブジェクトがレンダリングされなくなることをゲームエンジンに通知します
- **cool-down** 「クールダウン」は、短命なオブジェクトの典型的なプロパティです。典型的な例としては、数ミリ秒しか見られない爆発のようなテキストやグラフィック効果があります。

✅ パックマンのようなゲームについて考えてみましょう。このゲームでは、上に挙げた4つのオブジェクトの種類を特定できますか?

### 行動の表現

上で説明したのは、すべてゲームオブジェクトが持つことのできる動作です。では、それらをどのようにエンコードするのでしょうか? この動作をクラスやオブジェクトに関連付けられたメソッドとして表現することができます。

**クラス**

クラスに特定の振る舞いを追加するために `クラス` を `継承` と組み合わせて使うという考え方です。

✅ 継承は理解しておくべき重要な概念です。[継承に関する MDN の記事](https://developer.mozilla.org/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)で詳しく解説しています。

コードで表現すると、ゲームオブジェクトは通常このようになります。

```javascript

//GameObject クラスを設定します。
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}

//このクラスは GameObject の固有のクラスプロパティを拡張します。
class Movable extends GameObject {
  constructor(x,y, type) {
    super(x,y, type)
  }

//この移動可能なオブジェクトは、画面上で移動することができます。
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}

//これは Movable クラスを拡張した特定のクラスで、継承しているすべてのプロパティを利用することができます。
class Hero extends Movable {
  constructor(x,y) {
    super(x,y, 'Hero')
  }
}

//一方、このクラスは GameObject のプロパティのみを継承しています。
class Tree extends GameObject {
  constructor(x,y) {
    super(x,y, 'Tree')
  }
}

//hero は動くことができます
const hero = new Hero();
hero.moveTo(5,5);

//しかし木にはできません
const tree = new Tree();
```

✅ パックマンのヒーロー (例えば、Inky、Pinky、Blinky など) と、それが JavaScript でどのように書かれているかを、数分かけて再定義してみましょう。

**コンポジション**

オブジェクトの継承を処理する別の方法として、*コンポジション* を使用する方法があります。すると、オブジェクトは次のように動作を表現します。

```javascript
//定数の gameObject を作成する
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

//そして定数の movable
const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
//そして、定数 movableObject は定数 gameObject と movable で構成されます。
const movableObject = {...gameObject, ...movable};

//次に、movableObject のプロパティを継承する新しい Hero を作成する関数を作成します。
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  }
}
//...そして gameObject プロパティのみを継承する静的オブジェクト。
function createStatic(x, y, type) {
  return {
    ...gameObject
    x,
    y,
    type
  }
}
//hero を作って動かします
const hero = createHero(10,10);
hero.moveTo(5,5);
//そして、周りに立つだけの木を作ります
const tree = createStatic(0,0, 'Tree'); 
```

**どのパターンを使えばいいのか？**

どちらのパターンを選ぶかはあなた次第です。JavaScript はこれらのパラダイムの両方をサポートしています。

--

ゲーム開発に共通するもう一つのパターンは、ゲームのユーザーエクスペリエンスとパフォーマンスを処理する問題を扱っています。

## Pub/Sub パターン

✅ Pub/Sub は 'publish-subscribe' の略です。

このパターンは、あなたのアプリケーションのバラバラな部分が別のものを知ってはいけないという考えを示しています。それはなぜでしょうか? 様々な部分が分離されていると、一般的に何が起こっているのかを見るのがとても簡単になります。また、必要に応じて突然動作を変更することも容易になります。どのようにしてこれを達成するのでしょうか? いくつかの概念を確立することで実現します。

- **message**: メッセージは通常、オプションのペイロード (メッセージの内容を明確にするデータ) を伴ったテキスト文字列です。ゲームにおける典型的なメッセージは `KEY_PRESSED_ENTER` です
- **publisher**: この要素はメッセージを**発行し**、すべての購読者に送信します
- **subscriber**: この要素は、特定のメッセージを *待ち受け*、このメッセージを受信した結果として、レーザーを発射するなどのタスクを実行します

実装されているのはかなり小さいですが、かなり強力なパターンです。以下に実装方法を紹介します。

```javascript
//リスナーを含む EventEmitter クラスを設定します。
class EventEmitter {
  constructor() {
    this.listeners = {};
  }
//メッセージを受信したときに、リスナーにそのペイロードを処理させます。
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
//メッセージを受信したときに、リスナーにそのペイロードを処理させます。
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(l => l(message, payload))
    }
  }
}

```

上記のコードを使用するために、非常に小さな実装を作成することができます。

```javascript
//メッセージ構造を設定します
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//上記で設定した EventEmitter を呼び出します。
const eventEmitter = new EventEmitter();
//hero を設定します。
const hero = createHero(0,0);
//イベント送信者に hero が左に移動するメッセージを監視することを知らせ、それに基づいて行動するようにします。
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});

//keyup イベントをリッスンするためにウィンドウを設定し、具体的には左矢印がヒットした場合、hero を左に移動するためのメッセージを発します。
window.addEventListener('keyup', (evt) => {
  if (evt.key === 'ArrowLeft') {
    eventEmitter.emit(Messages.HERO_MOVE_LEFT)
  }
});
```

上ではキーボードイベント `ArrowLeft` を接続して `HERO_MOVE_LEFT` メッセージを送信している。私たちはそのメッセージを聞き、その結果として `hero` を移動させます。このパターンの強みは、イベントリスナーとヒーローがお互いのことを知らないことです。`ArrowLeft` を `A` キーにリマップすることができます。さらに、eventEmitter の `on` 関数にいくつかの編集を加えることで、`ArrowLeft` で全く異なることが可能になります。

```javascript
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.move(5,0);
});
```

ゲームが成長するときに物事がより複雑になったとしても、このパターンは複雑さの中で同じままで、あなたのコードはきれいなままになります。このパターンを採用することをお勧めします。

---

## 🚀 チャレンジ

pub-sub パターンがどのようにゲームを盛り上げるかを考えてみましょう。どのパーツがイベントを発生させ、それに対してゲームはどのように反応しますか? 新しいゲームとそのパーツがどのように振る舞うかを考えて、創造性を発揮するチャンスです。

## レッスン後の小テスト

[レッスン後の小テスト](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/30?loc=ja)

## 復習と自己学習

Pub/Sub については、[こちらを読んでみてください](https://docs.microsoft.com/ja-jp/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon)。

## 課題

[ゲームのモックアップ](assignment.ja.md)
