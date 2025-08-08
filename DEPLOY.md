# 🚀 GitHub Pages デプロイ設定

## 📋 設定概要

このリポジトリは **GitHub Actions** を使用して、`docs/` フォルダの内容を **GitHub Pages** に自動デプロイします。

## 🔧 デプロイ設定

### GitHub Pages設定
1. **リポジトリ設定** → **Pages**
2. **Source**: `GitHub Actions` を選択
3. **Custom domain** (オプション): 必要に応じて設定

### 自動デプロイ
- **トリガー**: `main` ブランチへの push
- **手動実行**: Actions タブから `workflow_dispatch` で実行可能
- **デプロイ対象**: `docs/` フォルダの内容のみ

## 🎯 デプロイフロー

```mermaid
graph LR
    A[main ブランチに push] --> B[GitHub Actions 起動]
    B --> C[依存関係インストール]
    C --> D[docs/ フォルダをアーティファクト化]
    D --> E[GitHub Pages にデプロイ]
    E --> F[サイト公開]
```

## 🌐 アクセスURL

デプロイ後のサイトURL:
- **メイン**: `https://phirosoft.github.io/public/`
- **カスタムドメイン**: 設定に応じて

## 📁 デプロイ対象ファイル

```
docs/
├── index.html          # メインページ
├── main.js            # Vue.jsアプリケーション
├── templates.js       # Vueテンプレート
├── LICENSE            # ライセンス
├── assets/            # 静的アセット
├── component/         # ページコンポーネント
├── scripts/           # JavaScript
└── styles/            # スタイルシート
```

## 🚫 デプロイ対象外ファイル

以下のファイルは **デプロイされません**:
- `package.json` / `package-lock.json`
- `node_modules/`
- `.github/`
- `README.md` / `CONTRIBUTING.md` 等のドキュメント
- 設定ファイル (`lighthouserc.js` 等)

## ⚙️ 詳細設定

### ワークフロー権限
```yaml
permissions:
  contents: read    # リポジトリ読み取り
  pages: write     # Pages書き込み
  id-token: write  # OIDC認証
```

### 並行実行制御
```yaml
concurrency:
  group: "pages"
  cancel-in-progress: false
```

## 🔍 トラブルシューティング

### デプロイが失敗する場合
1. **Actions タブ** でエラーログを確認
2. **Settings > Pages** で設定を確認
3. **permissions** が正しく設定されているか確認

### よくある問題
- **404エラー**: `index.html` が `docs/` にあるか確認
- **CSS/JS読み込みエラー**: 相対パスが正しいか確認
- **権限エラー**: リポジトリ設定でActionsの権限を確認

## 📊 パフォーマンス

### キャッシュ設定
- GitHub Pages: 自動CDNキャッシュ
- ブラウザキャッシュ: HTTP-Serverのキャッシュヘッダー

### 最適化
- 画像: WebP対応推奨
- JavaScript: 必要に応じてminify
- CSS: 圧縮とクリティカルCSS

## 🔄 更新フロー

### 通常の更新
1. `docs/` フォルダ内のファイルを編集
2. `git add . && git commit -m "update"`
3. `git push origin main`
4. GitHub Actions が自動実行
5. 約1-2分後に反映

### 緊急更新
1. GitHub Actions タブで手動実行
2. `workflow_dispatch` ボタンをクリック

## 📅 履歴

- **2025-08-09**: GitHub Actions デプロイ設定
- **2025-08-09**: docs/ フォルダ構成変更（public/ から変更）

---

**関連ファイル**:
- `.github/workflows/deploy.yml` - デプロイワークフロー
- `.github/workflows/lighthouse.yml` - 品質チェック
- `PROJECT_STRUCTURE.md` - プロジェクト構成説明
