# github-actions-hands-on
GitHub Actions のハンズオン用リポジトリ

## ハンズオン

このリポジトリには、Node.js で書かれた Web アプリと、その Web アプリを Docker イメージにするための Dockerfile が存在します。
 
GitHub Actions で、次の内容の CI を設定してみましょう。

- コードスタイルチェックと単体テスト実行
  - `npm run lint` でコードスタイルチェック
  - `npm test` で単体テスト
- 上記が通ったら、Docker イメージをビルド
  - `docker build .` でビルド可能

まず、各自でこのリポジトリを Fork してから、手元に clone し、適当な名前のブランチを作成してください。

```bash
$ git clone https://github.com/(your account)/github-actions-hands-on.git
$ git checkout -b setup-ci
```

次に、GitHub Actions で CI を設定します。GitHub Actions は YAML で CI を定義します。リポジトリ上に、`.github/workflows/ci.yml` というファイルを、以下の内容で作成してください。

```yaml
name: Node.js Web App CI
on: push

jobs:
  lint_and_test:
    name: Lint and Test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2.1.1
      - uses: actions/setup-node@v1.4.2
        with:
          node-version: 12.x
      - run: npm ci
      - run: npm run lint
  build:
    name: Docker Build
    needs: [lint_and_test]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2.1.1
      - run: docker build .
```

設定内容を簡単に説明すると、それぞれ以下のような意味があります。

- `on: push`: リポジトリにコミットが push されるたびにこのワークフローを実行する
- `runs-on: ubuntu-latest`: GitHub Actions が提供する Ubuntu の最新環境上でビルドを行う
- `uses: actions/checkout@v2.1.1`: リポジトリをビルド環境上にチェックアウトする
- `uses: actions/setup-node@v1.4.2`: ビルド環境の Node.js を `node-version` で指定したバージョンでセットアップする
- `run`: 指定したコマンドを実行
- `needs: [lint_and_test]`: `lint_and_test` ジョブが成功したら実行

作成できたら、変更内容をコミットしてリポジトリに push しましょう。

```bash
$ git add .github/workflows/ci.yml
$ git commit -m "setup CI"
$ git push -u origin setup-ci
```

ブラウザで、リポジトリの Actions タブを開いて、ワークフローが正しく動いているか確認しましょう。

## ハンズオンで扱ってないこと

- Docker コンテナ内ビルド
- 結合テストやデプロイ
- 環境変数
- キャッシュ
- 成果物
- 通知
- バッジ
- その他いろいろ

より詳しく知りたい人は、[公式ドキュメント](https://help.github.com/en/actions)を参考に、自分の開発しているソフトウェアに CI/CD を設定してみましょう！
