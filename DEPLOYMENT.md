# 🚀 デプロイガイド

## 📋 目次

- [GitHub Pages設定](#github-pages設定)
- [自動デプロイワークフロー](#自動デプロイワークフロー)
- [手動デプロイ手順](#手動デプロイ手順)
- [環境設定](#環境設定)
- [監視・モニタリング](#監視モニタリング)
- [トラブルシューティング](#トラブルシューティング)

## 🌐 GitHub Pages設定

### 基本設定

1. **リポジトリ設定**
   - GitHub リポジトリの **Settings** > **Pages** にアクセス
   - **Source**: Deploy from a branch
   - **Branch**: `main` / `docs`
   - **Folder**: `/docs`

2. **カスタムドメイン（オプション）**
   ```text
   # docs/CNAME ファイルに記載
   your-domain.com
   ```

3. **HTTPS強制**
   - ✅ "Enforce HTTPS" オプションを有効化

### ファイル構成

```text
docs/                    # GitHub Pages デプロイフォルダ
├── index.html          # エントリーポイント
├── main.js             # Vue.js アプリケーション
├── templates.js        # Vue テンプレート
├── LICENSE             # ライセンス
├── assets/             # 静的アセット
│   ├── favicon.128.png
│   ├── icon.*.png
│   ├── logo.png
│   └── loading.svg
├── component/          # Vue コンポーネント
│   ├── about.html
│   ├── blog.html
│   ├── game.html
│   ├── help.html
│   ├── movie.html
│   ├── tool.html
│   └── work.html
├── scripts/            # ユーティリティスクリプト
│   └── base.js
└── styles/             # スタイルシート
    └── style.css
```

## ⚙️ 自動デプロイワークフロー

### GitHub Actions設定

**ファイル**: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Upload Pages artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: docs
    
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4
```

### 品質チェックワークフロー

**ファイル**: `.github/workflows/quality-check.yml`

```yaml
name: Quality Check

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  security-audit:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
    - run: npm audit --audit-level=high
```

### Lighthouse CI（最新版対応）

**ファイル**: `.github/workflows/lighthouse.yml`

```yaml
name: 📊 Lighthouse Performance Monitoring

on:
  push:
    branches: [ main ]
    paths:
      - 'docs/**'
      - '.github/workflows/lighthouse.yml'
  pull_request:
    branches: [ main ]
    paths:
      - 'docs/**'
  schedule:
    # 毎日午前9時（JST）に実行
    - cron: '0 0 * * *'

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm install -g @lhci/cli@0.15.x
    - run: lhci autorun
      env:
        LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

### 品質・セキュリティチェック

**ファイル**: `.github/workflows/quality-check.yml`

```yaml
name: 🔍 Security and Quality Checks

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  schedule:
    # 毎週月曜日に実行
    - cron: '0 0 * * 1'

jobs:
  security-audit:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm audit --audit-level=moderate
```

### ワークフロー最適化 🚀

各ワークフローは効率化のため、以下のパス制限を適用：

- **deploy.yml & lighthouse.yml**: `docs/` フォルダ変更時のみ実行
- **quality-check.yml**: すべての変更で実行（セキュリティ監視）
        node-version: '18'
    - run: npm ci
    - run: npm install -g @lhci/cli
    - run: lhci autorun
      env:
        LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

## 🔨 手動デプロイ手順

### 1. ローカルビルド確認

```bash
# 依存関係インストール
npm install

# ローカルテスト
npm run dev
# または Live Server で docs/index.html を開く

# 品質チェック
npm audit
npm run lint # (設定済みの場合)
```

### 2. デプロイ前チェックリスト

- [ ] すべてのファイルが `docs/` フォルダに配置済み
- [ ] `docs/index.html` が正常に動作
- [ ] 外部リンクが正しく機能
- [ ] 画像・アセットが適切に表示
- [ ] モバイル表示の確認
- [ ] セキュリティ課題の修正（特に `docs/scripts/base.js`）

### 3. Git操作

```bash
# 変更をステージング
git add docs/

# コミット
git commit -m "deploy: Update GitHub Pages content"

# プッシュ（自動デプロイトリガー）
git push origin main
```

### 4. デプロイ確認

1. **GitHub Actions確認**
   - リポジトリの **Actions** タブで進行状況確認
   - エラーがある場合はログを確認

2. **サイト確認**
   - `https://[username].github.io/[repository]` にアクセス
   - 全ページの動作確認
   - パフォーマンス確認

## 🛠️ 環境設定

### 必須ツール・バージョン

| ツール | バージョン | 目的 |
|--------|------------|------|
| **Node.js** | ≥16.0.0 | 開発環境・CI/CD |
| **npm** | ≥8.0.0 | パッケージ管理 |
| **@lhci/cli** | 0.15.1 | Lighthouse CI（最新版） |
| **lighthouse** | 12.8.1 | パフォーマンス測定（最新版） |

### 依存関係の状況

- ✅ **脆弱性**: 0個（2025年1月9日時点）
- ✅ **Dependabot**: すべてのアラート解決済み
- ✅ **パッケージ**: 最新の安全なバージョンに更新済み

### 開発環境変数

```bash
# .env.local（ローカル開発用）
NODE_ENV=development
API_BASE_URL=http://localhost:3000
DEBUG=true
```

### 本番環境設定

```bash
# 本番環境用
NODE_ENV=production
API_BASE_URL=https://api.your-domain.com
DEBUG=false
```

### GitHub Secrets設定

リポジトリの **Settings** > **Secrets and variables** > **Actions**:

```text
LHCI_GITHUB_APP_TOKEN=your_lighthouse_token
API_KEY=your_api_key (必要な場合)
```

## 📊 監視・モニタリング

### パフォーマンス監視

1. **Lighthouse CI**
   - 自動パフォーマンス測定
   - Core Web Vitals監視
   - アクセシビリティチェック

2. **監視項目**
   - Page Load Speed
   - First Contentful Paint (FCP)
   - Largest Contentful Paint (LCP)
   - First Input Delay (FID)
   - Cumulative Layout Shift (CLS)

### ログ監視

```javascript
// Google Analytics（オプション）
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: document.title,
  page_location: window.location.href
});

// エラー追跡
window.addEventListener('error', (event) => {
  console.error('Runtime Error:', event.error);
  // エラー報告サービスに送信（オプション）
});
```

### アップタイム監視

推奨ツール：
- **UptimeRobot** (無料)
- **Pingdom** (有料)
- **StatusCake** (無料/有料)

## 🔧 トラブルシューティング

### よくある問題

#### 1. GitHub Pages サイトが表示されない

**原因**: ファイルパスまたは設定の問題

**解決策**:
```bash
# 1. ファイル確認
ls docs/index.html  # ファイル存在確認

# 2. GitHub Pages設定確認
# Settings > Pages > Source: Deploy from branch
# Branch: main, Folder: /docs

# 3. ブラウザキャッシュクリア
# Ctrl+F5 または Cmd+Shift+R
```

#### 2. GitHub Actions失敗

**原因**: 権限またはトークンの問題

**解決策**:
```yaml
# .github/workflows/deploy.yml の権限設定確認
permissions:
  contents: read
  pages: write
  id-token: write
```

#### 3. Lighthouse スコア低下

**原因**: パフォーマンス問題

**解決策**:
```bash
# 画像最適化
npm install -g imagemin-cli
imagemin docs/assets/*.png --out-dir=docs/assets/optimized/

# JavaScript最小化
npm install -g terser
terser docs/main.js -o docs/main.min.js
```

#### 4. セキュリティ警告

**緊急対応が必要**:
```javascript
// docs/scripts/base.js のハードコードパスワード削除
// ❌ 削除対象
const adminPassword = "admin123";

// ✅ 修正後
const adminPassword = process.env.ADMIN_PASSWORD || '';
```

### デバッグ手順

1. **ローカル確認**
   ```bash
   # ローカルサーバー起動
   python3 -m http.server 8000 --directory docs
   # または
   npx serve docs
   ```

2. **GitHub Pages状況確認**
   - リポジトリ **Settings** > **Pages**
   - 最新デプロイ時刻確認
   - カスタムドメイン設定確認

3. **ログ確認**
   - GitHub Actions **Actions** タブ
   - Lighthouse レポート
   - ブラウザ開発者ツール

### 緊急対応手順

#### サイトダウン時

1. **即座の確認**
   ```bash
   curl -I https://your-username.github.io/repository
   ```

2. **ロールバック**
   ```bash
   git revert HEAD
   git push origin main
   ```

3. **ホットフィックス**
   ```bash
   git checkout -b hotfix/emergency-fix
   # 修正実施
   git commit -m "hotfix: Critical security fix"
   git push origin hotfix/emergency-fix
   # PR作成・マージ
   ```

## 📞 サポート

- 🐛 **デプロイ問題**: [GitHub Issues](https://github.com/phirosoft/public/issues)
- 📚 **GitHub Pages ドキュメント**: [公式ガイド](https://docs.github.com/pages)
- 🚀 **GitHub Actions ドキュメント**: [公式ガイド](https://docs.github.com/actions)

---

このガイドは実際のデプロイ経験を基に更新されます。問題が発生した場合は、Issue を作成してください。
