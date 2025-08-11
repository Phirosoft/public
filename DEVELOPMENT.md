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

- **Node.js**: v16.0.0以上（推奨: v18以上）
- **npm**: v8.0.0以上
- **Git**: 最新版
- **ブラウザ**: Chrome、Firefox、Safari（最新版）

### 現在の依存関係

| パッケージ | バージョン | 用途 |
|------------|------------|------|
| **http-server** | ^14.1.1 | ローカル開発サーバー |
| **@lhci/cli** | ^0.15.1 | Lighthouse CI（最新版） |
| **lighthouse** | ^12.8.1 | パフォーマンス測定（最新版） |

### セキュリティ状況 🔒

- ✅ **脆弱性**: 0個（2025年8月9日更新）
- ✅ **依存関係**: すべて最新の安全なバージョン
- ✅ **Dependabot**: アラート解決済み

### 初期セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/Phirosoft/public.git
cd public

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

### SEO・アクセシビリティ

```html
<!-- ✅ SEO: メタデータ最適化 -->
<title>具体的で説明的なページタイトル</title>
<meta name="description" content="120-160文字のページ説明">

<!-- ✅ Open Graph -->
<meta property="og:title" content="ページタイトル">
<meta property="og:description" content="ページ説明">
<meta property="og:image" content="シェア用画像URL">

<!-- ✅ 構造化データ -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "ページ名"
}
</script>

<!-- ✅ 画像最適化 -->
<img src="image.webp" alt="具体的な代替テキスト" loading="lazy">
```

## 🔒 セキュリティ

> 📋 **詳細なセキュリティポリシー**: [SECURITY.md](./SECURITY.md) を参照

### ✅ セキュリティ状況

**セキュリティ監査結果（2025年8月11日）:**

```bash
# ✅ 確認完了: ハードコードされたパスワードは存在しない
grep -r "adminPassword\|admin123" docs/
# 結果: コードベース内にセキュリティリスクなし
```

### 開発時のセキュリティベストプラクティス

1. **環境変数の使用**
   ```javascript
   // ✅ 推奨: 環境変数を使用
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

- 🐛 **バグ報告**: [お問い合わせフォーム](https://docs.google.com/forms/d/e/1FAIpQLSd8q-TwBhthRMhuBaDISSIC10cIFLYY6iyAo1GAh-m9E21dvg/viewform?usp=sf_link)
- 💡 **機能提案**: [お問い合わせフォーム](https://docs.google.com/forms/d/e/1FAIpQLSd8q-TwBhthRMhuBaDISSIC10cIFLYY6iyAo1GAh-m9E21dvg/viewform?usp=sf_link)
- 📧 **その他**: [お問い合わせフォーム](https://docs.google.com/forms/d/e/1FAIpQLSd8q-TwBhthRMhuBaDISSIC10cIFLYY6iyAo1GAh-m9E21dvg/viewform?usp=sf_link)

---

このガイドは随時更新されます。最新情報は [GitHub Repository](https://github.com/Phirosoft/public) をご確認ください。
