module.exports = {
  ci: {
    collect: {
      // 静的サイトのルートディレクトリ
      staticDistDir: './docs',
      // テスト対象のURL（相対パス）
      url: [
        'http://localhost:8080/',
        'http://localhost:8080/#/about',
        'http://localhost:8080/#/work',
        'http://localhost:8080/#/game',
        'http://localhost:8080/#/movie',
        'http://localhost:8080/#/blog',
        'http://localhost:8080/#/tool',
        'http://localhost:8080/#/help'
      ],
      // 実行回数（より安定した結果のため）
      numberOfRuns: 3,
      // 設定オプション
      settings: {
        // ヘッドレスモードで実行
        chromeFlags: '--no-sandbox --headless'
      }
    },
    
    assert: {
      // 最低スコア要件
      assertions: {
        // パフォーマンス
        'categories:performance': ['error', {minScore: 0.8}],  // 80点以上
        // アクセシビリティ  
        'categories:accessibility': ['error', {minScore: 0.9}],  // 90点以上
        // ベストプラクティス
        'categories:best-practices': ['error', {minScore: 0.9}],  // 90点以上
        // SEO
        'categories:seo': ['error', {minScore: 0.8}],  // 80点以上
        // PWA（プログレッシブウェブアプリ）
        'categories:pwa': ['warn', {minScore: 0.5}],  // 50点以上（警告レベル）
        
        // 具体的なメトリクス
        'audits:first-contentful-paint': ['warn', {maxNumericValue: 2000}],  // 2秒以内
        'audits:largest-contentful-paint': ['error', {maxNumericValue: 3000}],  // 3秒以内
        'audits:cumulative-layout-shift': ['error', {maxNumericValue: 0.1}],  // CLS 0.1以下
        'audits:total-blocking-time': ['warn', {maxNumericValue: 300}]  // 300ms以内
      }
    },
    
    upload: {
      // GitHub status checkを作成
      target: 'temporary-public-storage'
    }
  }
};
