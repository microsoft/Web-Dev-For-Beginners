<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:48:08+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "ja"
}
-->
## Web開発初心者向けのGITの基本👶

## `Git`とは？
1. Gitは分散型バージョン管理システムです。
2. コードベース全体と履歴がすべての開発者のコンピュータに保存されており、簡単にブランチを作成したりマージしたりできます。
3. コンピュータファイルの変更を追跡するためのバージョン管理システム（VCS）として使用されます。

* 分散型バージョン管理
* 複数の開発者間の作業を調整
* 誰がどの変更をいつ行ったかを記録
* いつでも元に戻せる
* ローカル＆リモートリポジトリ

## GITの概念
* コード履歴を追跡
* ファイルの「スナップショット」を保存
* スナップショットを保存するタイミングは「コミット」で決定
* いつでもスナップショットを確認可能
* コミット前にファイルをステージングできる

### GitとGitHubの違い

| Git | GitHub |
| ------- | ----------- |
| Gitはソフトウェア | GitHubはクラウドサービス |
| Gitはシステムにローカルでインストールされる | GitHubはウェブ上でホストされる |
| コマンドラインツール | グラフィカルユーザーインターフェース |
| GitはLinuxによって管理されている | GitHubはMicrosoftによって管理されている |
| バージョン管理とコード共有に焦点を当てている | 中央集約型のソースコードホスティングに焦点を当てている |
| Gitはオープンソースライセンス | GitHubは無料プランと有料プランがある |
| Gitは2005年にリリース | GitHubは2008年にリリース |

## GITのインストール
* Linux(Debian)
    `$sudo apt-get install git`
* Linux(Fedora)
    `$sudo yum install git`
* [Mac用ダウンロード](http://git-scm.com/download/mac)
* [Windows用ダウンロード](http://git-scm.com/download/win)

### インストール手順:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. 次に「Next > Next > Next > <b>Install</b>」をクリック
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### インストール後、Git Bashを使用してGitを設定する必要があります
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Gitコマンド
___

### プロジェクトの取得＆作成

| コマンド | 説明 |
| ------- | ----------- |
| `git init` | ローカルGitリポジトリを初期化 |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | リモートリポジトリのローカルコピーを作成 |

### 基本的なスナップショット

| コマンド | 説明 |
| ------- | ----------- |
| `git status` | ステータスを確認 |
| `git add [file-name.txt]` | ファイルをステージングエリアに追加 |
| `git add -A` | 新規および変更されたすべてのファイルをステージングエリアに追加 |
| `git commit -m "[commit message]"` | 変更をコミット |
| `git rm -r [file-name.txt]` | ファイル（またはフォルダ）を削除 |
| `git push` | リモートリポジトリにプッシュ |
| `git pull` | リモートリポジトリから最新の変更を取得 |

### ブランチ＆マージ

| コマンド | 説明 |
| ------- | ----------- |
| `git branch` | ブランチを一覧表示（現在のブランチはアスタリスクで表示） |
| `git branch -a` | すべてのブランチ（ローカルおよびリモート）を一覧表示 |
| `git branch [branch name]` | 新しいブランチを作成 |
| `git branch -D [branch name]` | ブランチを削除 |
| `git push origin --delete [branch name]` | リモートブランチを削除 |
| `git checkout -b [branch name]` | 新しいブランチを作成して切り替え |
| `git checkout -b [branch name] origin/[branch name]` | リモートブランチをクローンして切り替え |
| `git branch -m [old branch name] [new branch name]` | ローカルブランチの名前を変更 |
| `git checkout [branch name]` | ブランチに切り替え |
| `git checkout -` | 最後にチェックアウトしたブランチに切り替え |
| `git checkout -- [file-name.txt]` | ファイルの変更を破棄 |
| `git merge [branch name]` | アクティブなブランチに別のブランチをマージ |
| `git merge [source branch] [target branch]` | ターゲットブランチに別のブランチをマージ |
| `git stash` | 作業中の変更を一時保存 |
| `git stash clear` | 一時保存したすべてのエントリを削除 |

### プロジェクトの共有＆更新

| コマンド | 説明 |
| ------- | ----------- |
| `git push origin [branch name]` | ブランチをリモートリポジトリにプッシュ |
| `git push -u origin [branch name]` | リモートリポジトリに変更をプッシュ（ブランチを記憶） |
| `git push` | リモートリポジトリに変更をプッシュ（記憶されたブランチ） |
| `git push origin --delete [branch name]` | リモートブランチを削除 |
| `git pull` | ローカルリポジトリを最新のコミットに更新 |
| `git pull origin [branch name]` | リモートリポジトリから変更を取得 |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | リモートリポジトリを追加 |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | リポジトリのoriginブランチをSSHに設定 |

### 検査＆比較

| コマンド | 説明 |
| ------- | ----------- |
| `git log` | 変更を表示 |
| `git log --summary` | 変更を詳細に表示 |
| `git log --oneline` | 変更を簡潔に表示 |
| `git diff [source branch] [target branch]` | マージ前に変更をプレビュー |

---

**免責事項**:  
この文書は、AI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があることをご承知ください。元の言語で記載された文書が正式な情報源とみなされるべきです。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の使用に起因する誤解や誤解釈について、当方は一切の責任を負いません。