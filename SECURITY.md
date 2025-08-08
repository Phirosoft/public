# 🔒 セキュリティポリシー

## サポート対象バージョン

現在、以下のバージョンにセキュリティサポートを提供しています：

| バージョン | サポート状況 |
| ------- | -------- |
| 1.0.x   | ✅ サポート中 |

## 脆弱性の報告

セキュリティ上の脆弱性を発見した場合は、以下の方法でご報告ください：

### 🚨 緊急度: 高

機密データの漏洩、認証バイパス、XSS、SQLインジェクションなどの重大な脆弱性：

1. **非公開での報告**: 公開のIssueは作成せず、メンテナーに直接連絡
2. **詳細情報**: 脆弱性の詳細、再現手順、影響範囲を記載
3. **対応期間**: 24時間以内に初回応答、7日以内に修正リリース

### 📋 緊急度: 中・低

その他のセキュリティ関連の問題：

1. [GitHub Issues](https://github.com/phirosoft/public/issues) で報告
2. ラベル: `security` を付与
3. 対応期間: 3日以内に初回応答、30日以内に修正

## 現在の既知のセキュリティ問題

### 🚨 CRITICAL: ハードコードされたパスワード

- **ファイル**: `scripts/base.js`
- **行番号**: 205, 256
- **内容**: 暗号化関数で `'password'` 文字列がハードコード
- **リスク**: 公開リポジトリで機密情報が露出
- **ステータス**: 🔴 未修正（要即時対応）
- **対応予定**: 即座

### 推奨される修正方法

```javascript
// ❌ 現在（危険）
let password = (new TextEncoder()).encode('password');

// ✅ 推奨修正
const password = await getSecurePassword(); // 環境変数から取得
// または
const password = (new TextEncoder()).encode(process.env.ENCRYPTION_KEY);
```

## セキュリティベストプラクティス

### コード開発時

1. **機密情報の管理**
   - 環境変数を使用
   - .envファイルは.gitignoreに追加
   - 本番環境では適切な秘密管理サービスを使用

2. **入力検証**
   - すべてのユーザー入力を検証
   - XSS対策のためHTMLエスケープを実施
   - CSRFトークンの実装

3. **依存関係管理**
   - 定期的な `npm audit` の実行
   - 脆弱性のある依存関係の迅速な更新

### デプロイ時

1. **HTTPS強制**
   - GitHub Pagesでのみアクセス可能
   - HTTP接続は自動的にHTTPS リダイレクト

2. **Content Security Policy (CSP)**
   - インラインスクリプトの制限
   - 信頼できるソースからのみリソース読み込み

3. **セキュリティヘッダー**
   ```html
   <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com;">
   ```

## 定期的なセキュリティチェック

### 月次チェック

- [ ] `npm audit` の実行と脆弱性修正
- [ ] 依存関係の更新
- [ ] アクセスログの確認

### 四半期チェック

- [ ] セキュリティポリシーの見直し
- [ ] 脆弱性スキャンの実施
- [ ] セキュリティ設定の更新

## セキュリティツール

### 推奨ツール

1. **依存関係スキャン**
   ```bash
   npm audit
   npm audit fix
   ```

2. **コード解析**
   - ESLint security plugin
   - SonarQube
   - GitHub Security Advisories

3. **ランタイム保護**
   - Content Security Policy
   - Subresource Integrity (SRI)

### GitHub Security Features

- [ ] Dependabot alerts 有効化
- [ ] Secret scanning 有効化
- [ ] Code scanning 有効化
- [ ] Vulnerability reporting 有効化

## インシデント対応

### 脆弱性発見時の対応フロー

1. **即座の対応**（1時間以内）
   - 影響範囲の特定
   - 緊急修正の必要性判断
   - 関係者への通知

2. **短期対応**（24時間以内）
   - 修正パッチの作成
   - テスト環境での検証
   - ステークホルダーへの報告

3. **長期対応**（1週間以内）
   - 本修正の実装
   - 再発防止策の検討
   - ドキュメント更新

## 連絡先

- **緊急時**: プロジェクトメンテナー
- **一般的な質問**: GitHub Issues
- **機密情報**: 非公開チャンネル

## 更新履歴

- **2025-08-09**: 初版作成
- **2025-08-09**: ハードコードパスワード問題を追加

---

このセキュリティポリシーは定期的に見直され、必要に応じて更新されます。
