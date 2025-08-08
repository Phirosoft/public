# 📁 プロジェクト構成の説明

## 🌐 新しいフォルダ構成

### 公開用ファイル (`/public/`)
```
public/
├── index.html          # メインページ
├── main.js            # Vue.jsアプリケーション
├── templates.js       # Vueテンプレート定義
├── LICENSE            # ライセンス
├── assets/            # 画像・アイコン
├── component/         # ページコンポーネント
├── scripts/           # JavaScript ユーティリティ
└── styles/            # スタイルシート
```

### 開発・管理用ファイル (ルート)

```text
├── .github/           # GitHub Actions設定
├── node_modules/      # 依存関係  
├── package.json       # プロジェクト設定
├── package-lock.json  # 依存関係ロック
├── lighthouserc.js    # Lighthouse設定  
├── .gitignore         # Git除外設定
├── README.md          # プロジェクト説明
├── CONTRIBUTING.md    # 開発ガイドライン
├── SECURITY.md        # セキュリティポリシー
├── TODO.md            # タスク管理
├── DEPLOY.md          # デプロイ設定説明
├── PROJECT_STRUCTURE.md # このファイル
├── GITHUB_PAGES_SETUP.md # GitHub Pages設定手順
└── public.code-workspace # VS Code ワークスペース
```

## 🎯 変更理由

### ✅ メリット
1. **明確な責任分離**: 公開コンテンツと開発ファイルを分離
2. **セキュリティ向上**: 機密性の高い設定ファイルと公開ファイルを区別
3. **デプロイ最適化**: 公開フォルダのみをデプロイ対象に
4. **保守性向上**: 開発者が作業しやすい構成

### 🔧 技術的変更
- **HTTP Server**: `public` フォルダをルートディレクトリに設定
- **Lighthouse CI**: 静的サイトディレクトリを `./public` に変更
- **GitHub Pages**: 将来的に `public` フォルダのみをデプロイ対象に設定可能

## 🚀 開発フロー

### ローカル開発
```bash
npm run dev  # public フォルダでサーバー起動
```

### 本番デプロイ
- GitHub Pages: `public` フォルダのみを対象
- CDN/サーバー: `public` フォルダの内容をアップロード

## 📝 注意事項

1. **ファイルパス**: 相対パスは引き続き動作
2. **開発環境**: `npm run dev` で正常動作確認済み
3. **GitHub Actions**: 既存ワークフローは継続動作
4. **セキュリティ**: `scripts/base.js` のパスワード問題は依然として要修正

## 🔄 今後の改善予定

- [ ] GitHub Pagesのデプロイ設定を `public` フォルダに変更
- [ ] CDNキャッシュ最適化
- [ ] ビルドプロセスの導入検討（圧縮・最適化）

---
**作成日**: 2025年8月9日  
**最終更新**: 2025年8月9日
