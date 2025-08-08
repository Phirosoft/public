# Phirosoft Official Website

[![Website](https://img.shields.io/website?url=https%3A//phirosoft.github.io/public)](https://phirosoft.github.io/public)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 🌐 [Live Site](https://phirosoft.github.io/public)

## 📖 概要

Phirosoft公式ホームページのソースコードです。GitHub Pagesを通して公開されているシングルページアプリケーション（SPA）です。

## 🛠️ 技術スタック

- **フロントエンド**: Vue.js 2.x
- **UIフレームワーク**: Vuetify + Bootstrap
- **アイコン**: Material Design Icons
- **ルーティング**: Vue Router
- **HTTP通信**: Axios
- **デプロイ**: GitHub Pages

## 🚀 開発環境のセットアップ

### 必要な環境

- Node.js (推奨: v16以上)
- npm

### ローカル開発

```bash
# 1. リポジトリをクローン
git clone https://github.com/phirosoft/public.git
cd public

# 2. 依存関係をインストール
npm install

# 3. 開発サーバーを起動（publicフォルダをルートとして）
npm run dev
# または
npx http-server public -p 8080
```

### ビルドとデプロイ

このプロジェクトは静的サイトのため、ビルドプロセスは不要です。

#### 🚀 GitHub Pages 自動デプロイ
- **デプロイ対象**: `public/` フォルダの内容のみ
- **トリガー**: `main` ブランチへのpush時に自動実行
- **設定**: GitHub Actions (`deploy.yml`) で管理

詳細は [DEPLOY.md](./DEPLOY.md) をご確認ください。

## 📁 プロジェクト構成

```text
├── public/               # 🌐 公開コンテンツ
│   ├── index.html       #   メインHTMLファイル
│   ├── main.js          #   アプリケーションエントリーポイント
│   ├── templates.js     #   Vue.jsテンプレート定義
│   ├── LICENSE          #   ライセンスファイル
│   ├── assets/          #   静的アセット（画像、アイコン）
│   ├── component/       #   Vueコンポーネント（HTML）
│   ├── scripts/         #   JavaScript ユーティリティ
│   └── styles/          #   スタイルシート
├── .github/             # 🔧 GitHub設定
├── node_modules/        # 📦 依存関係
├── package.json         # 📄 プロジェクト設定
├── lighthouserc.js      # 🚦 Lighthouse設定
├── README.md            # 📖 このファイル
├── CONTRIBUTING.md      # 🤝 開発ガイドライン
├── SECURITY.md          # 🔒 セキュリティポリシー
└── TODO.md              # 📋 タスク管理
```

## 🔒 セキュリティ注意事項

⚠️ **重要**: このリポジトリは公開されています。以下の点にご注意ください：

- APIキー、パスワード、秘密鍵などの機密情報をコミットしないでください
- 現在 `scripts/base.js` にハードコードされたパスワードが含まれています（要修正）
- 本番環境では適切な環境変数管理を実装してください

## 🐛 既知の問題・課題

詳細は [TODO.md](./TODO.md) をご確認ください。

## 📊 品質管理

### SRE（Site Reliability Engineering）

- 定期的にLighthouseの解析を実施
- パフォーマンス改善のためのissueを自動作成
- アクセシビリティとSEOの監視

### 推奨ツール

- Lighthouse CI
- Web Vitals
- WAVE（アクセシビリティ）

## 🤝 コントリビューション

コントリビューションを歓迎します！詳細は [CONTRIBUTING.md](./CONTRIBUTING.md) をご確認ください。

## 📄 ライセンス

[MIT License](./LICENSE) - 詳細は LICENSEファイルをご確認ください。

## 📞 サポート

- 🐛 バグ報告: [Issues](https://github.com/phirosoft/public/issues)
- 💡 機能提案: [Issues](https://github.com/phirosoft/public/issues)
- 📧 その他のお問い合わせ: [Contact](https://phirosoft.github.io/public/#/about)
