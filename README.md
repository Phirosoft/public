# Phirosoft Official Website

[![Website](https://img.shields.io/website?url=https%3A//phirosoft.github.io/public)](https://phirosoft.github.io/public)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Security](https://img.shields.io/badge/Security-Critical_Issue-red)](./DEVELOPMENT.md#セキュリティ)

> 🌐 **Live Site**: https://phirosoft.github.io/public

## 📖 概要

Phirosoft公式ホームページ - Vue.js 2.x で構築されたシングルページアプリケーション（SPA）

### 🛠️ 技術スタック

| 技術分野 | 使用技術 |
|---------|---------|
| **フロントエンド** | Vue.js 2.x, Vuetify, Bootstrap |
| **ルーティング** | Vue Router |
| **HTTP通信** | Axios |
| **デプロイ** | GitHub Pages (自動デプロイ) |

## 🚀 クイックスタート

```bash
# 1. リポジトリクローン
git clone https://github.com/phirosoft/public.git
cd public

# 2. 依存関係インストール
npm install

# 3. 開発サーバー起動
npm run dev
# → http://localhost:8080 でアクセス
```

## 📁 プロジェクト構造

```
├── docs/              # 🌐 GitHub Pages公開コンテンツ
│   ├── index.html    # メインページ
│   ├── main.js       # Vue.jsアプリケーション
│   ├── templates.js  # Vueテンプレート
│   └── assets/       # 静的アセット
└── .github/          # 🔧 CI/CD設定
    └── workflows/    # GitHub Actions
```

## 🔗 関連文書

## 🤝 コントリビューション・サポート

- 📚 **開発ガイド**: [DEVELOPMENT.md](./DEVELOPMENT.md)
- 🚀 **デプロイガイド**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- 🐛 **バグ報告**: [GitHub Issues](https://github.com/phirosoft/public/issues)
- 💡 **機能提案**: [GitHub Issues](https://github.com/phirosoft/public/issues)

## 📄 ライセンス

[MIT License](./docs/LICENSE) - 自由に使用・改変・配布可能です。

---

**⚠️ セキュリティ重要事項**: 現在 `docs/scripts/base.js` にハードコードされたパスワードが存在します。[DEVELOPMENT.md](./DEVELOPMENT.md#セキュリティ) を確認して修正してください。
- 📧 その他のお問い合わせ: [Contact](https://phirosoft.github.io/public/#/about)
