# 🛠️ 開発ガイド

## 📋 目次

- [開発環境の準備](#開発環境の準備)
- [開発ワークフロー](#開発ワークフロー)
- [コーディング規約](#コーディング規約)
- [セキュリティ](#セキュリティ)
- [品質管理](#品質管理)
- [トラブルシューティング](#トラブルシューティング)

## 🚀 開発環境の準備

### 必須要件

- **Node.js**: v14.0.0以上
- **npm**: v6.0.0以上
- **Git**: 最新版
- **ブラウザ**: Chrome、Firefox、Safari（最新版）

### 初期セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/[username]/[repository].git
cd [repository]

# 依存関係のインストール
npm install

# ローカル開発サーバーの起動
npm run dev
# または Live Server (VS Code拡張) を使用
```

### 推奨開発ツール

- **エディタ**: VS Code（推奨）
- **拡張機能**:
  - Live Server
  - Vue 3 Snippets
  - ES6 String HTML
  - Auto Rename Tag
  - Prettier - Code formatter

## 🔄 開発ワークフロー

### ブランチ戦略

```text
main        # 本番環境
├── develop # 開発統合ブランチ
├── feature/xxx # 機能開発
├── hotfix/xxx  # 緊急修正
└── docs/xxx    # ドキュメント更新
```

### プルリクエスト手順

1. **ブランチ作成**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **開発・テスト**
   - 機能実装
   - コード品質チェック
   - ローカルテスト

3. **コミット**
   ```bash
   git add .
   git commit -m "feat: Add new feature description"
   ```

4. **プッシュ・PR作成**
   ```bash
   git push origin feature/your-feature-name
   ```

### コミットメッセージ規約

```text
<type>(<scope>): <subject>

例:
feat(ui): Add responsive navigation menu
fix(api): Resolve authentication error
docs(readme): Update installation guide
style(css): Fix mobile layout issues
refactor(js): Optimize image loading logic
```

**Type一覧:**
- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメント
- `style`: スタイル調整
- `refactor`: リファクタリング
- `test`: テスト追加
- `chore`: 設定変更

## 📐 コーディング規約

### JavaScript/Vue.js

```javascript
// ✅ Good: ES6+記法使用
const app = new Vue({
  el: '#app',
  data() {
    return {
      items: []
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('/api/data')
        this.items = response.data
      } catch (error) {
        console.error('データ取得エラー:', error)
      }
    }
  }
})

// ❌ Bad: 古いJS記法
var app = new Vue({
  el: '#app',
  data: function() {
    return {
      items: []
    }
  }
})
```

### CSS/スタイル

```css
/* ✅ Good: BEM記法推奨 */
.navbar {
  display: flex;
  align-items: center;
}

.navbar__item {
  padding: 1rem;
}

.navbar__item--active {
  background-color: #007bff;
}

/* ✅ Good: CSS Custom Properties使用 */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}
```

### HTML構造

```html
<!-- ✅ Good: セマンティックHTML -->
<nav class="navbar" role="navigation">
  <ul class="navbar__list">
    <li class="navbar__item">
      <a href="#home" class="navbar__link">ホーム</a>
    </li>
  </ul>
</nav>

<!-- ✅ Good: アクセシビリティ対応 -->
<button 
  type="button" 
  aria-label="メニューを開く"
  aria-expanded="false">
  メニュー
</button>
```

## 🔒 セキュリティ

### 🚨 緊急修正が必要な問題

**現在の重大なセキュリティ課題:**

```javascript
// ❌ 危険: ハードコードされたパスワード
// ファイル: docs/scripts/base.js
const adminPassword = "admin123"; // 即座に修正が必要！
```

**修正方法:**

1. **環境変数の使用**
   ```javascript
   // ✅ 修正案
   const adminPassword = process.env.ADMIN_PASSWORD || '';
   ```

2. **認証システムの実装**
   ```javascript
   // ✅ より安全な認証
   async function authenticateUser(token) {
     try {
       const response = await fetch('/api/auth/verify', {
         headers: { 'Authorization': `Bearer ${token}` }
       });
       return response.ok;
     } catch (error) {
       return false;
     }
   }
   ```

### セキュリティガイドライン

#### 1. 機密情報の管理

```bash
# ✅ 環境変数ファイル（.env）- .gitignoreに追加
API_KEY=your_api_key_here
DATABASE_URL=your_db_url_here
SECRET_TOKEN=your_secret_token_here
```

#### 2. XSS対策

```javascript
// ✅ Good: HTMLエスケープ
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ❌ Bad: 直接HTML挿入
element.innerHTML = userInput; // 危険！
```

#### 3. HTTPS強制

```javascript
// ✅ HTTPS強制リダイレクト
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
  location.replace('https:' + window.location.href.substring(window.location.protocol.length));
}
```

### セキュリティチェックリスト

- [ ] ハードコードされたパスワード・APIキーの削除
- [ ] 環境変数を使用した機密情報管理
- [ ] XSS対策の実装
- [ ] CSRF対策の実装
- [ ] HTTPS通信の強制
- [ ] 入力値の検証・サニタイゼーション
- [ ] 依存関係の脆弱性監査（`npm audit`）

## 📊 品質管理

### 自動化されたチェック

GitHub Actionsで以下を自動実行：

1. **コード品質**
   - ESLint（JavaScript）
   - Prettier（フォーマット）
   - セキュリティ監査

2. **パフォーマンス**
   - Lighthouse CI
   - Core Web Vitals
   - バンドルサイズ監視

3. **アクセシビリティ**
   - axe-core テスト
   - WAVE 解析

### ローカルでの品質チェック

```bash
# セキュリティ監査
npm audit

# 依存関係の更新確認
npm outdated

# パフォーマンステスト（Lighthouse CLI）
npm install -g lighthouse
lighthouse https://your-site.com --output=html
```

### パフォーマンス目標

| メトリクス | 目標値 | 現在値 |
|------------|--------|--------|
| LCP | < 2.5s | 📊 要測定 |
| FID | < 100ms | 📊 要測定 |
| CLS | < 0.1 | 📊 要測定 |
| Performance Score | > 90 | 📊 要測定 |

## 🔧 トラブルシューティング

### よくある問題と解決策

#### 1. ローカルサーバーが起動しない

```bash
# ポート競合の確認
lsof -i :3000

# 別ポートで起動
npm run dev -- --port 3001
```

#### 2. パッケージインストールエラー

```bash
# キャッシュクリア
npm cache clean --force

# node_modules再インストール
rm -rf node_modules package-lock.json
npm install
```

#### 3. Gitエラー

```bash
# ブランチの強制同期
git fetch origin
git reset --hard origin/main

# コンフリクト解決
git mergetool
```

### デバッグ手順

1. **ブラウザ開発者ツール確認**
   - Console エラー
   - Network タブ
   - Performance タブ

2. **ログファイル確認**
   - GitHub Actions ログ
   - Lighthouse レポート

3. **依存関係の確認**
   ```bash
   npm ls
   npm audit
   ```

## 📞 サポート・連絡先

- 🐛 **バグ報告**: [GitHub Issues](https://github.com/phirosoft/public/issues)
- 💡 **機能提案**: [GitHub Issues](https://github.com/phirosoft/public/issues)
- 📧 **その他**: [プロジェクト連絡先](https://phirosoft.github.io/public/#/about)

---

このガイドは随時更新されます。最新情報は [GitHub Repository](https://github.com/phirosoft/public) をご確認ください。
