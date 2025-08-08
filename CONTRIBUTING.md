# 🚀 Phirosoft Website 開発ガイドライン

## 📋 目次

1. [プロジェクト概要](#プロジェクト概要)
2. [開発環境](#開発環境)
3. [コーディング規約](#コーディング規約)
4. [Git ワークフロー](#git-ワークフロー)
5. [セキュリティガイドライン](#セキュリティガイドライン)
6. [テストガイドライン](#テストガイドライン)
7. [デプロイメント](#デプロイメント)
8. [コードレビュー](#コードレビュー)

## 🎯 プロジェクト概要

Phirosoft公式ホームページは、Vue.js 2.xを使用したシングルページアプリケーション（SPA）です。GitHub Pagesでホストされ、完全に静的なサイトとして運営されています。

### 技術スタック

- **フロントエンド**: Vue.js 2.x, Vuetify, Bootstrap
- **ルーティング**: Vue Router
- **HTTP Client**: Axios
- **ビルド**: なし（静的ファイル）
- **デプロイ**: GitHub Pages

## 💻 開発環境

### 必要なソフトウェア

- Node.js (v16以上推奨)
- npm (v8以上推奨)
- Git
- 推奨エディタ: VS Code

### 環境構築

```bash
# 1. リポジトリのクローン
git clone https://github.com/phirosoft/public.git
cd public

# 2. 依存関係のインストール
npm install

# 3. 開発サーバーの起動
npx http-server -p 8080

# 4. ブラウザでアクセス
open http://localhost:8080
```

### 推奨VS Code拡張機能

```json
{
  "recommendations": [
    "vue.vscode-extension-pack",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.live-server"
  ]
}
```

## 📝 コーディング規約

### JavaScript

#### 基本規則

- ES6+ の記法を使用
- セミコロンは必須
- インデントは2スペース
- キャメルケースを使用
- 定数は UPPER_SNAKE_CASE

```javascript
// ✅ 良い例
const API_BASE_URL = 'https://api.example.com';
const userData = {
  firstName: 'John',
  lastName: 'Doe'
};

function getUserInfo(userId) {
  return fetch(`${API_BASE_URL}/users/${userId}`);
}

// ❌ 悪い例
const api_base_url = 'https://api.example.com'
const userdata = {
  first_name: 'John',
  last_name: 'Doe'
}

function get_user_info(user_id) {
  return fetch(api_base_url + '/users/' + user_id)
}
```

#### Vue.js 規約

```javascript
// ✅ コンポーネント定義
Vue.component('user-card', {
  template: `
    <div class="user-card">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
    </div>
  `,
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    handleClick() {
      this.$emit('user-selected', this.user);
    }
  }
});
```

### CSS/SCSS

- BEM記法を推奨
- Vuetifyのクラスを優先使用
- カスタムCSSは最小限に

```css
/* ✅ 良い例 */
.user-card {
  padding: 16px;
  border-radius: 8px;
}

.user-card__title {
  font-size: 18px;
  font-weight: 600;
}

.user-card__title--highlighted {
  color: #1976d2;
}

/* ❌ 悪い例 */
.userCard {
  padding: 16px;
}

.title {
  font-size: 18px;
}
```

### HTML

- セマンティックなHTMLを使用
- ARIA属性を適切に設定
- alt属性は必須

```html
<!-- ✅ 良い例 -->
<article class="blog-post" role="article">
  <header>
    <h1>{{ post.title }}</h1>
    <time :datetime="post.publishedAt">{{ formatDate(post.publishedAt) }}</time>
  </header>
  <main>
    <img :src="post.image" :alt="post.imageAlt" loading="lazy">
    <p>{{ post.excerpt }}</p>
  </main>
</article>

<!-- ❌ 悪い例 -->
<div class="post">
  <div class="title">{{ post.title }}</div>
  <img :src="post.image">
  <div>{{ post.excerpt }}</div>
</div>
```

## 🔄 Git ワークフロー

### ブランチ戦略

- `main`: 本番環境（自動デプロイ）
- `develop`: 開発統合ブランチ
- `feature/*`: 機能開発ブランチ
- `hotfix/*`: 緊急修正ブランチ

### コミットメッセージ

[Conventional Commits](https://www.conventionalcommits.org/)に従う：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### タイプ一覧

- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメント更新
- `style`: コードフォーマット
- `refactor`: リファクタリング
- `test`: テスト追加・修正
- `chore`: その他（依存関係更新等）

```bash
# ✅ 良い例
git commit -m "feat(auth): add user login functionality"
git commit -m "fix(ui): resolve mobile navigation issue"
git commit -m "docs: update README with new setup instructions"

# ❌ 悪い例
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"
```

### プルリクエスト

#### テンプレート

```markdown
## 変更内容

- [ ] 機能追加
- [ ] バグ修正
- [ ] リファクタリング
- [ ] ドキュメント更新

## 説明

<!-- 変更内容の詳細説明 -->

## 確認項目

- [ ] コードレビュー完了
- [ ] 動作テスト完了
- [ ] ドキュメント更新（必要に応じて）
- [ ] セキュリティチェック完了

## スクリーンショット（UI変更の場合）

<!-- Before/After の画像 -->

## 関連Issue

Closes #XXX
```

## 🔒 セキュリティガイドライン

### 絶対に避けるべきこと

1. **機密情報のハードコード**
   ```javascript
   // ❌ 絶対NG
   const PASSWORD = 'password123';
   const API_KEY = 'sk-1234567890abcdef';
   
   // ✅ 推奨
   const API_KEY = process.env.VUE_APP_API_KEY;
   ```

2. **不適切な認証実装**
   ```javascript
   // ❌ 危険
   if (userInput === 'admin') {
     showAdminPanel();
   }
   
   // ✅ 安全
   if (validateUserRole(userToken) === 'admin') {
     showAdminPanel();
   }
   ```

### セキュリティチェックリスト

- [ ] ハードコードされた機密情報がない
- [ ] XSS対策が実装されている
- [ ] CSRF対策が実装されている
- [ ] 依存関係に既知の脆弱性がない
- [ ] HTTPSを使用している
- [ ] Content Security Policy (CSP) が設定されている

### 定期的なセキュリティ監査

```bash
# 依存関係の脆弱性チェック
npm audit

# 修正可能な問題の自動修正
npm audit fix
```

## 🧪 テストガイドライン

### テスト戦略

1. **Unit Tests**: 個別の関数・コンポーネント
2. **Integration Tests**: コンポーネント間の連携
3. **E2E Tests**: ユーザーシナリオ

### 推奨テストツール

- **Unit**: Jest + Vue Test Utils
- **E2E**: Cypress
- **Visual**: Storybook + Chromatic

### テストコード例

```javascript
// tests/components/UserCard.spec.js
import { shallowMount } from '@vue/test-utils';
import UserCard from '@/components/UserCard.vue';

describe('UserCard.vue', () => {
  it('renders user name correctly', () => {
    const user = { name: 'John Doe', email: 'john@example.com' };
    const wrapper = shallowMount(UserCard, {
      propsData: { user }
    });
    
    expect(wrapper.text()).toContain('John Doe');
  });

  it('emits user-selected event on click', async () => {
    const user = { name: 'John Doe', email: 'john@example.com' };
    const wrapper = shallowMount(UserCard, {
      propsData: { user }
    });
    
    await wrapper.trigger('click');
    expect(wrapper.emitted('user-selected')).toBeTruthy();
  });
});
```

## 🚀 デプロイメント

### 自動デプロイ

GitHub Pagesによる自動デプロイが設定済み：

1. `main`ブランチへのマージで自動デプロイ
2. 静的ファイルのため、ビルドプロセスなし
3. デプロイ完了後、約5分でサイトに反映

### 手動デプロイ（緊急時）

```bash
# 1. 最新コードの取得
git checkout main
git pull origin main

# 2. GitHub Pages設定の確認
# Settings > Pages > Source: Deploy from a branch (main)
```

### デプロイ前チェックリスト

- [ ] すべてのテストが通過
- [ ] Lighthouseスコアが基準を満たす
- [ ] 本番環境での動作確認
- [ ] セキュリティチェック完了
- [ ] バックアップ作成（必要に応じて）

## 👀 コードレビュー

### レビュアーの責任

1. **機能性**: 要求仕様を満たしているか
2. **コード品質**: 可読性、保守性があるか
3. **セキュリティ**: 脆弱性がないか
4. **パフォーマンス**: 最適化されているか
5. **テスト**: 適切にテストされているか

### レビューのポイント

```javascript
// ✅ 良いコメント例
// 💡 この処理をutilsに移動することで再利用性が向上します
// 🔒 XSS対策のためエスケープ処理を追加してください
// 🚀 この部分はメモ化でパフォーマンス改善できそうです

// ❌ 悪いコメント例
// これは良くない
// 修正してください
// 間違っている
```

### レビューフロー

1. **Self Review**: 自分で一度確認
2. **Automated Checks**: CI/CDでの自動チェック
3. **Peer Review**: 同僚によるレビュー
4. **Final Approval**: シニア開発者による最終承認

## 📊 品質指標

### 目標値

- **Lighthouse Score**: 90+ (全カテゴリ)
- **Code Coverage**: 80%+
- **Bundle Size**: < 1MB
- **Load Time**: < 3秒

### 監視ツール

- Google Analytics
- Google Search Console
- Lighthouse CI
- GitHub Insights

## 🆘 トラブルシューティング

### よくある問題と解決方法

#### 1. ローカル開発サーバーが起動しない

```bash
# ポートが使用中の場合
npx http-server -p 8081

# 権限の問題の場合
sudo npx http-server -p 80
```

#### 2. Vue.jsコンポーネントが表示されない

- ブラウザのコンソールでエラーを確認
- テンプレートの構文エラーをチェック
- CDNの読み込み状況を確認

#### 3. GitHub Pagesデプロイが失敗する

- リポジトリ設定でPagesが有効になっているか確認
- `main`ブランチに正しくマージされているか確認
- ファイルサイズ制限（100MB）を超えていないか確認

## 📞 サポート・連絡先

- **技術的な質問**: GitHub Issues
- **緊急時**: プロジェクトメンテナー
- **その他**: [公式サイトお問い合わせ](https://phirosoft.github.io/public/#/about)

## 📚 参考リンク

- [Vue.js 公式ドキュメント](https://v2.vuejs.org/)
- [Vuetify ドキュメント](https://vuetifyjs.com/)
- [GitHub Pages ドキュメント](https://docs.github.com/ja/pages)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**最終更新**: 2025年8月9日
**バージョン**: 1.0.0
