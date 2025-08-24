<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "24201cf428c7edba1ccec2a78a0dd8f8",
  "translation_date": "2025-08-23T23:09:15+00:00",
  "source_file": "6-space-game/6-end-condition/assignment.md",
  "language_code": "ja"
}
-->
# サンプルゲームを作成する

## 手順

異なる終了条件を練習するために、小さなゲームを作ってみましょう。ポイントを一定数獲得する、ヒーローがすべてのライフを失う、またはすべてのモンスターが倒されるなど、終了条件を変えてみてください。コンソールベースの冒険ゲームのようなシンプルなものを作成してください。以下のゲームフローを参考にしてください:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

## 評価基準

| 基準     | 優秀                   | 適切                        | 改善が必要                 |
| -------- | ---------------------- | --------------------------- | -------------------------- |
|          | 完全なゲームが提示されている | 部分的なゲームが提示されている | 部分的なゲームにバグが含まれている |

**免責事項**:  
この文書は、AI翻訳サービス [Co-op Translator](https://github.com/Azure/co-op-translator) を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知おきください。元の言語で記載された原文が公式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤認について、当方は一切の責任を負いません。