<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "862f7f2ef320f6f8950fae379e6ece45",
  "translation_date": "2025-10-24T15:16:09+00:00",
  "source_file": "6-space-game/1-introduction/README.md",
  "language_code": "ja"
}
-->
# 宇宙ゲームを作ろう パート1: はじめに

![ゲームプレイを示す宇宙ゲームのアニメーション](../../../../6-space-game/images/pewpew.gif)

NASAのミッションコントロールが宇宙打ち上げ中に複数のシステムを調整するのと同じように、異なるプログラムの部分がシームレスに連携する方法を示す宇宙ゲームを作ります。実際にプレイできるものを作りながら、あらゆるソフトウェアプロジェクトに適用できる基本的なプログラミングの概念を学びます。

コードを整理するための基本的なアプローチである「継承」と「コンポジション」について探求します。これらは単なる学術的な概念ではなく、ビデオゲームから銀行システムまで、あらゆるものを支えるパターンです。また、宇宙船で使用される通信ネットワークのように、異なるコンポーネントが依存関係を作らずに情報を共有できる「pub/sub」という通信システムも実装します。

このシリーズの終わりまでに、ゲーム、ウェブアプリケーション、その他のソフトウェアシステムを開発する際に、スケールアップや進化が可能なアプリケーションの構築方法を理解できるようになります。

## 講義前のクイズ

[講義前のクイズ](https://ff-quizzes.netlify.app/web/quiz/29)

## ゲーム開発における継承とコンポジション

プロジェクトが複雑になるにつれて、コードの整理が重要になります。単純なスクリプトとして始まったものが、適切な構造がないと維持が難しくなることがあります。これは、アポロ計画が数千のコンポーネント間の慎重な調整を必要としたのと似ています。

コードを整理するための基本的なアプローチとして「継承」と「コンポジション」を探求します。それぞれに独自の利点があり、両方を理解することで、状況に応じて適切なアプローチを選択できるようになります。これらの概念を宇宙ゲームを通じて実演します。ヒーロー、敵、パワーアップ、その他のオブジェクトが効率的に相互作用する必要があります。

✅ 最も有名なプログラミングの本の一つは、[デザインパターン](https://en.wikipedia.org/wiki/Design_Patterns)に関するものです。

どんなゲームでも「ゲームオブジェクト」が存在します。これはゲームの世界を構成するインタラクティブな要素です。ヒーロー、敵、パワーアップ、視覚効果などがゲームオブジェクトに該当します。それぞれが座標平面上の点をプロットするように、`x`と`y`の値を使用して特定の画面座標に存在します。

見た目は異なりますが、これらのオブジェクトはしばしば基本的な動作を共有しています：

- **どこかに存在する** – すべてのオブジェクトは`x`と`y`座標を持ち、ゲームがそれを描画する場所を知ることができます
- **多くは移動できる** – ヒーローは走り、敵は追いかけ、弾丸は画面を横切ります
- **寿命がある** – 一部は永遠に存在し、他のもの（爆発など）は一時的に現れて消えます
- **何かに反応する** – 衝突が起きると、パワーアップが収集され、体力バーが更新されます

✅ パックマンのようなゲームを考えてみてください。このゲームで上記の4つのオブジェクトタイプを特定できますか？

### コードで動作を表現する

ゲームオブジェクトが共有する共通の動作を理解したところで、これらの動作をJavaScriptで実装する方法を探ってみましょう。オブジェクトの動作は、クラスや個々のオブジェクトに付属するメソッドを通じて表現できます。いくつかのアプローチがあります。

**クラスベースのアプローチ**

クラスと継承は、ゲームオブジェクトを整理するための構造化されたアプローチを提供します。カール・リンネによって開発された分類学的分類システムのように、共通のプロパティを含む基本クラスから始め、これらの基本を継承しながら特定の機能を追加する専門化されたクラスを作成します。

✅ 継承は理解すべき重要な概念です。[MDNの継承に関する記事](https://developer.mozilla.org/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)で詳しく学びましょう。

以下は、クラスと継承を使用してゲームオブジェクトを実装する方法です：

```javascript
// Step 1: Create the base GameObject class
class GameObject {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }
}
```

**これをステップごとに分解すると：**
- すべてのゲームオブジェクトが使用できる基本テンプレートを作成しています
- コンストラクタはオブジェクトがどこにあるか（`x`、`y`）とどのような種類のものかを保存します
- これがすべてのゲームオブジェクトが基づく基盤となります

```javascript
// Step 2: Add movement capability through inheritance
class Movable extends GameObject {
  constructor(x, y, type) {
    super(x, y, type); // Call parent constructor
  }

  // Add the ability to move to a new position
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

**上記では：**
- GameObjectクラスを**拡張**して移動機能を追加しました
- 継承されたプロパティを初期化するために`super()`を使用して親コンストラクタを**呼び出しました**
- オブジェクトの位置を更新する`moveTo()`メソッドを**追加しました**

```javascript
// Step 3: Create specific game object types
class Hero extends Movable {
  constructor(x, y) {
    super(x, y, 'Hero'); // Set type automatically
  }
}

class Tree extends GameObject {
  constructor(x, y) {
    super(x, y, 'Tree'); // Trees don't need movement
  }
}

// Step 4: Use your game objects
const hero = new Hero(0, 0);
hero.moveTo(5, 5); // Hero can move!

const tree = new Tree(10, 15);
// tree.moveTo() would cause an error - trees can't move
```

**これらの概念を理解することで：**
- 適切な動作を継承する専門化されたオブジェクトタイプを**作成**できます
- 継承が選択的な機能の追加を可能にする方法を**示します**
- ヒーローが移動できる一方で、木は静止したままであることを**示します**
- クラス階層が不適切な動作を防ぐ方法を**説明します**

✅ パックマンのヒーロー（例えばインキー、ピンキー、ブリンキー）をJavaScriptでどのように書くか再考してみてください。

**コンポジションアプローチ**

コンポジションはモジュール設計哲学に従い、エンジニアが交換可能なコンポーネントで宇宙船を設計する方法に似ています。親クラスから継承する代わりに、特定の動作を組み合わせて、必要な機能を正確に持つオブジェクトを作成します。このアプローチは、堅固な階層的制約なしで柔軟性を提供します。

```javascript
// Step 1: Create base behavior objects
const gameObject = {
  x: 0,
  y: 0,
  type: ''
};

const movable = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }
};
```

**このコードが行うこと：**
- 位置とタイププロパティを持つ基本`gameObject`を**定義**します
- 移動機能を持つ別の`movable`動作オブジェクトを**作成**します
- 位置データと移動ロジックを独立して保持することで**関心を分離**します

```javascript
// Step 2: Compose objects by combining behaviors
const movableObject = { ...gameObject, ...movable };

// Step 3: Create factory functions for different object types
function createHero(x, y) {
  return {
    ...movableObject,
    x,
    y,
    type: 'Hero'
  };
}

function createStatic(x, y, type) {
  return {
    ...gameObject,
    x,
    y,
    type
  };
}
```

**上記では：**
- スプレッド構文を使用して基本オブジェクトプロパティと移動動作を**組み合わせました**
- カスタマイズされたオブジェクトを返すファクトリ関数を**作成**しました
- 堅固なクラス階層なしで柔軟なオブジェクト作成を**可能にしました**
- 必要な動作だけを持つオブジェクトを**許可しました**

```javascript
// Step 4: Create and use your composed objects
const hero = createHero(10, 10);
hero.moveTo(5, 5); // Works perfectly!

const tree = createStatic(0, 0, 'Tree');
// tree.moveTo() is undefined - no movement behavior was composed
```

**覚えておくべき重要なポイント：**
- 継承するのではなく動作を混合することでオブジェクトを**構成**します
- 堅固な継承階層よりも柔軟性を**提供**します
- 必要な機能だけを持つオブジェクトを**許可**します
- クリーンなオブジェクトの組み合わせのためにモダンなJavaScriptスプレッド構文を**使用**します
```

**Which Pattern Should You Choose?**

> 💡 **Pro Tip**: Both patterns have their place in modern JavaScript development. Classes work well for clearly defined hierarchies, while composition shines when you need maximum flexibility.
> 
**Here's when to use each approach:**
- **Choose** inheritance when you have clear "is-a" relationships (a Hero *is-a* Movable object)
- **Select** composition when you need "has-a" relationships (a Hero *has* movement abilities)
- **Consider** your team's preferences and project requirements
- **Remember** that you can mix both approaches in the same application

## Communication Patterns: The Pub/Sub System

As applications grow complex, managing communication between components becomes challenging. The publish-subscribe pattern (pub/sub) solves this problem using principles similar to radio broadcasting – one transmitter can reach multiple receivers without knowing who's listening.

Consider what happens when a hero takes damage: the health bar updates, sound effects play, visual feedback appears. Rather than coupling the hero object directly to these systems, pub/sub allows the hero to broadcast a "damage taken" message. Any system that needs to respond can subscribe to this message type and react accordingly.

✅ **Pub/Sub** stands for 'publish-subscribe'

### Understanding the Pub/Sub Architecture

The pub/sub pattern keeps different parts of your application loosely coupled, meaning they can work together without being directly dependent on each other. This separation makes your code more maintainable, testable, and flexible to changes.

**The key players in pub/sub:**
- **Messages** – Simple text labels like `'PLAYER_SCORED'` that describe what happened (plus any extra info)
- **Publishers** – The objects that shout out "Something happened!" to anyone who's listening
- **Subscribers** – The objects that say "I care about that event" and react when it happens
- **Event System** – The middleman that makes sure messages get to the right listeners

### Building an Event System

Let's create a simple but powerful event system that demonstrates these concepts:

```javascript
// Step 1: Create the EventEmitter class
class EventEmitter {
  constructor() {
    this.listeners = {}; // Store all event listeners
  }
  
  // Register a listener for a specific message type
  on(message, listener) {
    if (!this.listeners[message]) {
      this.listeners[message] = [];
    }
    this.listeners[message].push(listener);
  }
  
  // Send a message to all registered listeners
  emit(message, payload = null) {
    if (this.listeners[message]) {
      this.listeners[message].forEach(listener => {
        listener(message, payload);
      });
    }
  }
}
```

**ここで何が起きているかを分解すると：**
- シンプルなクラスを使用して中央のイベント管理システムを**作成**します
- メッセージタイプごとに整理されたオブジェクトにリスナーを**保存**します
- `on()`メソッドを使用して新しいリスナーを**登録**します
- `emit()`を使用してすべての関心のあるリスナーにメッセージを**送信**します
- 関連情報を渡すためのオプションのデータペイロードを**サポート**します

### 実践例：すべてをまとめる

さて、これを実際に見てみましょう！pub/subのクリーンで柔軟な動作を示す簡単な移動システムを構築します：

```javascript
// Step 1: Define your message types
const Messages = {
  HERO_MOVE_LEFT: 'HERO_MOVE_LEFT',
  HERO_MOVE_RIGHT: 'HERO_MOVE_RIGHT',
  ENEMY_SPOTTED: 'ENEMY_SPOTTED'
};

// Step 2: Create your event system and game objects
const eventEmitter = new EventEmitter();
const hero = createHero(0, 0);
```

**このコードが行うこと：**
- メッセージ名のタイプミスを防ぐために定数オブジェクトを**定義**します
- すべての通信を処理するイベントエミッターインスタンスを**作成**します
- 初期位置でヒーローオブジェクトを**初期化**します

```javascript
// Step 3: Set up event listeners (subscribers)
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
  hero.moveTo(hero.x - 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});

eventEmitter.on(Messages.HERO_MOVE_RIGHT, () => {
  hero.moveTo(hero.x + 5, hero.y);
  console.log(`Hero moved to position: ${hero.x}, ${hero.y}`);
});
```

**上記では：**
- 移動メッセージに応答するイベントリスナーを**登録**しました
- 移動方向に基づいてヒーローの位置を**更新**しました
- ヒーローの位置変更を追跡するためにコンソールログを**追加**しました
- 入力処理から移動ロジックを**分離**しました

```javascript
// Step 4: Connect keyboard input to events (publishers)
window.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowLeft':
      eventEmitter.emit(Messages.HERO_MOVE_LEFT);
      break;
    case 'ArrowRight':
      eventEmitter.emit(Messages.HERO_MOVE_RIGHT);
      break;
  }
});
```

**これらの概念を理解することで：**
- キーボード入力をゲームイベントに直接結びつけることなく**接続**します
- 入力システムがゲームオブジェクトと間接的に通信することを**可能にします**
- 同じキーボードイベントに複数のシステムが応答することを**許可**します
- キーバインディングを変更したり新しい入力方法を追加するのが簡単になります

> 💡 **プロのヒント**: このパターンの美しさは柔軟性にあります！音響効果、画面の揺れ、またはパーティクル効果を簡単に追加できます。既存のキーボードや移動コードを変更する必要はありません。
> 
**このアプローチが好きになる理由：**
- 新しい機能の追加が非常に簡単になります – 必要なイベントをリッスンするだけ
- 同じイベントに複数のものが反応しても互いに干渉しません
- 各部分が独立して動作するためテストが非常に簡単になります
- 問題が発生した場合、どこを調べればよいかがすぐにわかります

### Pub/Subが効果的にスケールする理由

pub/subパターンは、アプリケーションが複雑になるにつれてシンプルさを維持します。敵が多数いる場合、動的なUI更新、または音響システムを管理する場合でも、このパターンはアーキテクチャの変更なしでスケールアップを処理します。新しい機能は既存のイベントシステムに統合され、既存の機能に影響を与えません。

> ⚠️ **よくある間違い**: 初期段階で特定のメッセージタイプを作りすぎないでください。広範なカテゴリから始め、ゲームのニーズが明確になるにつれてそれを洗練してください。
> 
**守るべきベストプラクティス：**
- 関連するメッセージを論理的なカテゴリに**グループ化**します
- 何が起きたかを明確に示す記述的な名前を**使用**します
- メッセージペイロードをシンプルで焦点を絞ったものに**保ちます**
- チームでのコラボレーションのためにメッセージタイプを**文書化**します

---

## GitHub Copilot Agent チャレンジ 🚀

Agentモードを使用して以下のチャレンジを完了してください：

**説明:** 継承とpub/subパターンの両方を使用して簡単なゲームオブジェクトシステムを作成します。異なるオブジェクトが互いを直接知らずにイベントを通じて通信できる基本的なゲームを実装します。

**プロンプト:** 以下の要件を満たすJavaScriptゲームシステムを作成してください：1) x, y座標とtypeプロパティを持つ基本GameObjectクラスを作成する。2) GameObjectを拡張し、移動可能なHeroクラスを作成する。3) GameObjectを拡張し、ヒーローを追いかけるEnemyクラスを作成する。4) pub/subパターン用のEventEmitterクラスを実装する。5) ヒーローが移動すると、近くの敵が'HERO_MOVED'イベントを受信し、ヒーローに向かって位置を更新するようにイベントリスナーを設定する。オブジェクト間の通信を示すconsole.logステートメントを含める。

[Agentモードについて詳しくはこちら](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)。

## 🚀 チャレンジ

pub-subパターンがゲームアーキテクチャをどのように強化できるかを考えてみましょう。どのコンポーネントがイベントを発行すべきか、システムがどのように応答すべきかを特定してください。ゲームのコンセプトを設計し、そのコンポーネント間の通信パターンをマッピングしてください。

## 講義後のクイズ

[講義後のクイズ](https://ff-quizzes.netlify.app/web/quiz/30)

## 復習と自己学習

Pub/Subについてもっと学ぶには、[こちらを読んでください](https://docs.microsoft.com/azure/architecture/patterns/publisher-subscriber/?WT.mc_id=academic-77807-sagibbon)。

## 課題

[ゲームのモックアップを作成する](assignment.md)

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてご参照ください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の利用に起因する誤解や誤認について、当方は一切の責任を負いません。