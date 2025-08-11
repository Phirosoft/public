# Phirosoft Official Website

[![Website](https://img.shields.io/website?url=https%3A//phirosoft.github.io/public)](https://phirosoft.github.io/public)
[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![Security](https://img.shields.io/badge/Security-Secure-green)](./DEVELOPMENT.md#セキュリティ)
[![Dependencies](https://img.shields.io/badge/Dependencies-Up_to_Date-brightgreen)](#dependencies)

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
| **SEO** | Open Graph, Twitter Cards, 構造化データ(JSON-LD) |

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
│   ├── index.html    # メインページ（SEO最適化済み）
│   ├── main.js       # Vue.jsアプリケーション
│   ├── templates.js  # Vueテンプレート
│   ├── sitemap.xml   # 検索エンジン用サイトマップ
│   ├── robots.txt    # クローラー制御ファイル
│   └── assets/       # 静的アセット
└── .github/          # 🔧 CI/CD設定
    └── workflows/    # GitHub Actions
```

## � 依存関係・ツール {#dependencies}

### 開発・デプロイツール

| ツール | バージョン | 用途 |
|--------|------------|------|
| **Node.js** | ≥16.0.0 | 開発環境 |
| **http-server** | ^14.1.1 | ローカル開発サーバー |
| **Lighthouse** | ^12.8.1 | パフォーマンス測定 |
| **Lighthouse CI** | ^0.15.1 | 自動品質チェック |

### 🔒 セキュリティ状況

- ✅ **脆弱性**: 0個（2025年8月11日時点）
- ✅ **Dependabot**: すべてのアラート解決済み
- ✅ **依存関係**: 最新の安全なバージョンに更新済み

詳細は [SECURITY.md](./SECURITY.md) を参照してください。

### 🔍 SEO対策

- ✅ **メタデータ最適化**: Open Graph、Twitter Cards実装済み
- ✅ **構造化データ**: JSON-LDスキーママークアップ
- ✅ **サイトマップ**: sitemap.xml、robots.txt配置済み
- ✅ **アクセシビリティ**: ARIA属性、セマンティックHTML対応

## 🔗 関連文書・サポート

- 📚 **開発ガイド**: [DEVELOPMENT.md](./DEVELOPMENT.md)
- 🚀 **デプロイガイド**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- � **セキュリティポリシー**: [SECURITY.md](./SECURITY.md)
- �📝 **TODOリスト**: [TODO.md](./TODO.md)
- 🐛 **バグ報告**: [お問い合わせフォーム](https://docs.google.com/forms/d/e/1FAIpQLSd8q-TwBhthRMhuBaDISSIC10cIFLYY6iyAo1GAh-m9E21dvg/viewform?usp=sf_link)
- 💡 **機能提案**: [お問い合わせフォーム](https://docs.google.com/forms/d/e/1FAIpQLSd8q-TwBhthRMhuBaDISSIC10cIFLYY6iyAo1GAh-m9E21dvg/viewform?usp=sf_link)

## 📄 ライセンス

[CC BY-NC-ND 4.0](./docs/LICENSE) - 学習・研究目的での利用のみ許可。商用利用および改変・再配布は禁止されています。

**利用条件:**
- ✅ **学習・研究目的での閲覧**
- ✅ **コード構造の研究**
- ❌ **商用利用禁止**
- ❌ **改変・再配布禁止**

---

- 📧 **お問い合わせ**: [お問い合わせフォーム](https://docs.google.com/forms/d/e/1FAIpQLSd8q-TwBhthRMhuBaDISSIC10cIFLYY6iyAo1GAh-m9E21dvg/viewform?usp=sf_link)
