# 📋 TODO リスト

> **最終更新**: 2025年8月9日  
> **ステータス**: 🔴 緊急対応項目あり

## 🚨 緊急対応 (即座)

### 🔒 セキュリティ修正
- [ ] **[CRITICAL] ハードコードされたパスワードの削除**
  - 📁 ファイル: `scripts/base.js` (行205, 256)
  - 🚨 リスク: 公開リポジトリで機密情報が露出
  - 🎯 対応: 環境変数または適切な暗号化ライブラリに変更
  - ⏰ 期限: **即座**
  - 👤 担当者: 未定

- [x] **[FIXED] .gitignore修正** ✅
  - 📁 問題: `public/` フォルダがGit除外対象になっていた
  - 🚨 リスク: デプロイ対象ファイルがバージョン管理されていない
  - 🎯 対応: `.gitignore` から `public` 行を除外
  - ⏰ 対応日: 2025-08-09
  
  ```javascript
  // 現在（危険）
  let password = (new TextEncoder()).encode('password');
  
  // 修正案
  const password = (new TextEncoder()).encode(process.env.ENCRYPTION_KEY || generateSecureKey());
  ```

## 🔧 高優先度 (1週間以内)

### 📊 Lighthouse自動化の完全実装

- [x] **Lighthouse CI設定ファイル作成** ✅
  - `lighthouserc.js` 作成済み
  - GitHub Actions統合準備完了
  
- [x] **GitHub Pages デプロイ設定** ✅
  - GitHub Actions ワークフロー作成
  - public/ フォルダ専用デプロイ設定
  - 自動デプロイ機能実装済み
  
- [ ] **GitHub リポジトリ設定**
  - Settings > Pages > Source を "GitHub Actions" に変更
  - 初回デプロイ実行とテスト
  
- [ ] **GitHub Secrets設定**
  - `LHCI_GITHUB_APP_TOKEN` の設定
  - リポジトリ設定 > Secrets and variables > Actions
  
- [ ] **Lighthouse CI実行テスト**
  - 初回実行とスコア確認
  - 閾値の調整（必要に応じて）
  
- [ ] **パフォーマンス基準値の設定**
  - 現在のスコア測定
  - 目標値の設定（Performance: 80%+, Accessibility: 90%+）

### 🛠️ 開発環境改善
- [ ] **ESLint設定**
  ```bash
  npm install --save-dev eslint @vue/cli-plugin-eslint
  npx eslint --init
  ```
  
- [ ] **Prettier設定**
  ```bash
  npm install --save-dev prettier eslint-plugin-prettier
  ```
  
- [ ] **Pre-commit hooks (Husky)**
  ```bash
  npm install --save-dev husky lint-staged
  npx husky install
  ```

## 📈 中優先度 (2-4週間)

### 🎨 UI/UX改善
- [ ] **レスポンシブデザインの改善**
  - モバイル表示の最適化
  - タブレット表示の調整
  - Vuetifyグリッドシステムの活用

- [ ] **アクセシビリティ改善**
  - ARIA属性の追加
  - キーボードナビゲーション対応
  - スクリーンリーダー対応
  
- [ ] **ダークモード実装**
  - Vuetifyテーマ設定
  - ユーザー設定の保存

### ⚡ パフォーマンス最適化
- [ ] **画像最適化**
  - WebP形式対応
  - 画像の遅延読み込み
  - 適切なサイズ設定
  
- [ ] **バンドル最適化**
  - 不要なライブラリの削除
  - CDN読み込みの最適化
  - コード分割の検討

### 🧪 テスト実装
- [ ] **Unit テストセットアップ**
  ```bash
  npm install --save-dev jest @vue/test-utils vue-jest
  ```
  
- [ ] **E2Eテストセットアップ**
  ```bash
  npm install --save-dev cypress
  ```
  
- [ ] **テストカバレッジ設定**
  - 目標: 80%以上

## 📅 低優先度 (1-3ヶ月)

### 🚀 機能追加
- [ ] **PWA対応**
  - Service Worker実装
  - Manifest.json設定
  - オフライン対応
  
- [ ] **SEO改善**
  - メタタグの充実
  - 構造化データ追加
  - サイトマップ生成
  
- [ ] **多言語対応 (i18n)**
  - Vue i18n設定
  - 英語版ページ作成
  
- [ ] **お問い合わせフォーム**
  - バックエンドAPIまたは外部サービス連携
  - バリデーション実装

### 🔄 技術的改善
- [ ] **Vue.js 3移行検討**
  - Composition API への移行
  - パフォーマンス向上の検証
  
- [ ] **TypeScript導入検討**
  - 型安全性の向上
  - 開発効率の改善
  
- [ ] **Vite移行検討**
  - ビルド速度の向上
  - HMR（Hot Module Replacement）の活用

## 📊 継続的なタスク

### 🔍 定期監視
- [ ] **週次**
  - [ ] Lighthouse スコアチェック
  - [ ] npm audit実行
  - [ ] GitHub Security alerts確認
  
- [ ] **月次**
  - [ ] 依存関係更新
  - [ ] パフォーマンス分析
  - [ ] アクセス解析確認
  
- [ ] **四半期**
  - [ ] セキュリティ監査
  - [ ] コード品質レビュー
  - [ ] 技術スタック見直し

### 📝 ドキュメント保守
- [ ] **README.md更新**
  - 新機能追加時
  - セットアップ手順変更時
  
- [ ] **CONTRIBUTING.md更新**
  - 開発プロセス変更時
  - 新しいツール導入時
  
- [ ] **このTODO.md更新**
  - タスク完了時
  - 新しい課題発見時

## 🎯 マイルストーン

### 📍 Phase 1: セキュリティ & 基盤 (2週間)
- [x] セキュリティポリシー作成 ✅
- [x] 開発ガイドライン作成 ✅  
- [x] Lighthouse CI設定 ✅
- [x] プロジェクト構成整理（publicフォルダ分離） ✅
- [ ] セキュリティ問題修正
- [ ] 開発環境整備

### 📍 Phase 2: 品質向上 (1ヶ月)
- [ ] テスト実装
- [ ] パフォーマンス最適化
- [ ] アクセシビリティ改善
- [ ] UI/UX改善

### 📍 Phase 3: 機能拡張 (3ヶ月)
- [ ] PWA対応
- [ ] 多言語対応
- [ ] 新機能追加
- [ ] 技術スタック更新

## 📊 品質指標 & 目標値

### 現在の状況
- **Lighthouse Score**: 未計測
- **Bundle Size**: 未計測  
- **Code Coverage**: 0%
- **Security Issues**: 1件（要緊急対応）

### 目標値
- **Lighthouse Performance**: 80%以上
- **Lighthouse Accessibility**: 90%以上
- **Lighthouse Best Practices**: 90%以上
- **Lighthouse SEO**: 80%以上
- **Bundle Size**: 1MB未満
- **Code Coverage**: 80%以上
- **Security Issues**: 0件

### 品質管理プロセス
- [ ] **自動品質チェック**: GitHub Actions で実行中
- [ ] **定期監査**: 月次でスコア確認
- [ ] **継続的改善**: 四半期で目標値見直し

## 📋 チェックリスト: Lighthouse自動化

### ✅ 完了済み
- [x] lighthouserc.js 設定ファイル作成
- [x] GitHub Actions ワークフロー作成
- [x] package.json にスクリプト追加
- [x] 依存関係追加

### 🔄 実装中
- [ ] GitHub Secrets設定
- [ ] 初回実行とテスト
- [ ] スコア閾値調整

### ⏳ 今後の作業
- [ ] 定期実行の監視
- [ ] パフォーマンス改善
- [ ] レポート自動生成

## 💡 参考リンク

- [Lighthouse CI Documentation](https://github.com/GoogleChrome/lighthouse-ci)
- [Vue.js Performance Best Practices](https://v2.vuejs.org/v2/guide/performance.html)
- [Web Vitals](https://web.dev/vitals/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

**📝 更新手順**:
1. タスク完了時は ✅ マークを追加
2. 新しい課題発見時は適切な優先度セクションに追加  
3. 月1回全体の見直しを実施
