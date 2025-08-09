//Vue templates
let templates = [
  {
    name: 'about-main',
    template: null,
    template_url: './component/about.html',
    props: ['id'],
    data: function () {
      return {
        dialog: false,
        objects: Array.from([
          {
            title: 'About Me', text: `
            Phirosoftの代表、Phiroです。
            atelierentのプログラム担当。サーバサイドエンジニア。

            「誰かの感動の瞬間に寄り添えたら」という気持ちで、
            今日もソフトウェア開発を行なっています。

            「心を震わすソフトウェアを生み出すエンジニアでありたい」
            `,
            href: ''
          },
        ]).map((e, i) => ({
          num: i + 1,
          title: e.title,
          text: e.text,
          href: e.href
        })),
      }
    },
    methods: {
      hoge: function (e) {
        alert('hoge');
      }
    },
  },
  {
    name: 'work-main',
    template: null,
    template_url: './component/work.html',
    props: ['id'],
    data: function () {
      return {
        dialog: false,
        objects: Array.from([
          {
            title: '受託開発',
            text: `アプリ開発業務をお受けします。
            対応可能案件：
            C#, Java, Node, PHP
            Oracle, PostgreSQL, MYSQL
            Microsoft Azure

            `, href: 'https://docs.google.com/forms/d/e/1FAIpQLSd8q-TwBhthRMhuBaDISSIC10cIFLYY6iyAo1GAh-m9E21dvg/viewform'
          },
          {
            title: '業務支援',
            text: `業務支援をお受けします。
            システム要件定義
            試作アプリ開発
            クラウドサーバ運用


            `, href: 'https://docs.google.com/forms/d/e/1FAIpQLSd8q-TwBhthRMhuBaDISSIC10cIFLYY6iyAo1GAh-m9E21dvg/viewform'
          },
        ]).map((e, i) => ({
          num: i + 1,
          title: e.title,
          text: e.text,
          href: e.href
        })),
      }
    },
    methods: {
      hoge: function (e) {
        alert('hoge');
      }
    },
  },
  {
    name: 'game-main',
    template: null,
    template_url: './component/game.html',
    props: ['id'],
    data: function () {
      return {
        dialog: false,
        objects: Array.from([
          {
            title: 'ぼくの自由研究所web',
            text: `自由研究サポートナビゲータアプリです。`,
            href: 'https://kids-labo.atelierent.jp/'
          },
          {
            title: '夢冒険',
            text: `睡眠改善アプリです。`,
            href: 'https://dreamer.tokyo/'
          },
        ]).map((e, i) => ({
          num: i + 1,
          title: e.title,
          text: e.text,
          href: e.href
        })),
      }
    },
    methods: {
      hoge: function (e) {
        alert('hoge');
      }
    },
  },
  {
    name: 'tool-main',
    template: null,
    template_url: './component/tool.html',
    props: ['id'],
    data: function () {
      return {
        dialog: false,
        objects: Array.from([
          {
            title: '日曜運営局',
            text: `小規模団体運営サポートソフトです。`,
            href: 'https://sun.atelierent.jp'
          },
        ]).map((e, i) => ({
          num: i + 1,
          title: e.title,
          text: e.text,
          href: e.href
        })),
      }
    },
    methods: {
      hoge: function (e) {
        alert('hoge');
      }
    },
  },
  {
    name: 'movie-main',
    template: null,
    template_url: './component/movie.html',
    props: ['id'],
    data: function () {
      return {
        dialog: false,
        objects: Array.from([
          {
            title: '高校の怪談 CM',
            text: `スマートフォンアプリ高校の会談のCMです。
            iMovie、Motion5により作成しています。`,
            href: 'https://www.youtube.com/watch?v=3SzkdKBkP_k'
          },
          {
            title: '高校の怪談 主題歌 MV',
            text: `スマートフォンアプリ高校の会談のMVです。
            iMovie、Motion5により作成しています。`,
            href: 'https://www.youtube.com/watch?v=y1_9mx3DZ1c'
          },
          {
            title: '高校の怪談 another S MV',
            text: `スマートフォンアプリ高校の会談のMVです。
            iMovie、Motion5により作成しています。`,
            href: 'https://www.youtube.com/watch?v=HJ1XFjfHd54'
          },
        ]).map((e, i) => ({
          num: i + 1,
          title: e.title,
          text: e.text,
          href: e.href
        })),
      }
    },
    methods: {
      hoge: function (e) {
        alert('hoge');
      }
    },
  },
  {
    name: 'blog-main',
    template: null,
    template_url: './component/blog.html',
    props: ['id'],
    data: function () {
      return {
        dialog: false,
        objects: Array.from([
          {
            title: 'Qiita',
            text: `技術に関する内容の記事です。`,
            href: 'https://qiita.com/phiro1021'
          },
          {
            title: 'Note',
            text: `Python開発や経営に関する内容です。`,
            href: 'https://note.com/phirosoft'
          },
        ]).map((e, i) => ({
          num: i + 1,
          title: e.title,
          text: e.text,
          href: e.href
        })),
      }
    },
    methods: {
      hoge: function (e) {
        alert('hoge');
      }
    },
  },
  {
    name: 'help-main',
    template: null,
    template_url: './component/help.html',
    props: ['id'],
    data: function () {
      return {
        dialog: false,
        objects: Array.from([
          {
            title: 'プライバシーポリシー',
            text: `
            Phirosoftは，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，
            ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
            
            ○第1条（個人情報）

            「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，
            当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，
            指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
            
            ○第2条（個人情報の収集方法）

            Phirosoftは，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，
            銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。
            また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,
            提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。
            
            ○第3条（個人情報を収集・利用する目的）

            Phirosoftが個人情報を収集・利用する目的は，以下のとおりです。
            
            ・サービスの提供・運営のため
            ・ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）
            ・利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，
            　ご利用をお断りするため
            ・有料サービスにおいて，ユーザーに利用料金を請求するため
            ・上記の利用目的に付随する目的

            ○第4条（利用目的の変更）

            Phirosoftは，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，
            個人情報の利用目的を変更するものとします。
            利用目的の変更を行った場合には，変更後の目的について，Phirosoftの所定の方法により，
            ユーザーに通知し，または本ウェブサイト上に公表するものとします。

            ○第5条（個人情報の第三者提供）

            Phirosoftは，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，
            第三者に個人情報を提供することはありません。
            ただし，個人情報保護法その他の法令で認められる場合を除きます。

            ・人の生命，身体または財産の保護のために必要がある場合であって，
            　本人の同意を得ることが困難であるとき
            ・公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，
            　本人の同意を得ることが困難であるとき
            ・国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して
            　協力する必要がある場合であって，
            　本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
            ・予め次の事項を告知あるいは公表し，かつPhirosoftが個人情報保護委員会に届出をしたとき
            　・利用目的に第三者への提供を含むこと
            　・第三者に提供されるデータの項目
            　・第三者への提供の手段または方法
            　・本人の求めに応じて個人情報の第三者への提供を停止すること
            　・本人の求めを受け付ける方法
            ・前項の定めにかかわらず，次に掲げる場合には，当該情報の提供先は第三者に該当しないものとします。

            　・Phirosoftが利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合
            　・合併その他の事由による事業の承継に伴って個人情報が提供される場合
            　・個人情報を特定の者との間で共同して利用する場合であって，その旨並びに共同して利用される個人情報の項目，
            　・共同して利用する者の範囲，利用する者の利用目的および当該個人情報の管理について
            　　責任を有する者の氏名または名称について，あらかじめ本人に通知し，または本人が容易に知り得る状態に置いた場合

            ○第6条（個人情報の開示）

            Phirosoftは，本人から個人情報の開示を求められたときは，本人に対し，
            遅滞なくこれを開示します。ただし，開示することにより次のいずれかに該当する場合は，
            その全部または一部を開示しないこともあり，開示しない決定をした場合には，その旨を遅滞なく通知します。
            なお，個人情報の開示に際しては，1件あたり1，000円の手数料を申し受けます。

            本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合
            Phirosoftの業務の適正な実施に著しい支障を及ぼすおそれがある場合
            その他法令に違反することとなる場合
            前項の定めにかかわらず，履歴情報および特性情報などの個人情報以外の情報については，
            原則として開示いたしません。

            ○第7条（個人情報の訂正および削除）

            ユーザーは，Phirosoftの保有する自己の個人情報が誤った情報である場合には，
            Phirosoftが定める手続きにより，
            Phirosoftに対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。

            Phirosoftは，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，
            遅滞なく，当該個人情報の訂正等を行うものとします。
            Phirosoftは，前項の規定に基づき訂正等を行った場合，または訂正等を行わない旨の決定をしたときは遅滞なく，
            これをユーザーに通知します。
            
            ○第8条（個人情報の利用停止等）

            Phirosoftは，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，
            または不正の手段により取得されたものであるという理由により，
            その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。

            前項の調査結果に基づき，その請求に応じる必要があると判断した場合には，
            遅滞なく，当該個人情報の利用停止等を行います。
            Phirosoftは，前項の規定に基づき利用停止等を行った場合，または利用停止等を行わない旨の決定をしたときは，
            遅滞なく，これをユーザーに通知します。
            前2項にかかわらず，利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって，
            ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は，この代替策を講じるものとします。

            ○第9条（プライバシーポリシーの変更）

            本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，
            ユーザーに通知することなく，変更することができるものとします。
            Phirosoftが別途定める場合を除いて，変更後のプライバシーポリシーは，
            本ウェブサイトに掲載したときから効力を生じるものとします。

            ○第10条（お問い合わせ窓口）

            本ポリシーに関するお問い合わせは，下記の窓口までお願いいたします。
            
            屋号：Phirosoft
            代表：Phiro
            Eメールアドレス：phirosoft@gmail.com
            
            以上`,
            href: ''
          },
        ]).map((e, i) => ({
          num: i + 1,
          title: e.title,
          text: e.text,
          href: e.href
        })),
      }
    },
    methods: {
      hoge: function (e) {
        alert('hoge');
      }
    },
  },
  {
    name: 'portfolio-main',
    template: null,
    template_url: './component/portfolio.html',
    props: ['id'],
    data: function () {
      return {
        searchQuery: '',
        selectedCategory: null,
        selectedYear: null,
        projectDialog: false,
        selectedProject: null,
        currentYear: new Date().getFullYear(),
        startYear: 2018,
        
        // 直接プロパティとして追加（デバッグ用）
        totalProjects: 0,
        totalClients: 0,
        totalTechnologies: 0,
        filteredProjects: [],
        years: [],
        
        categories: [
          'Webアプリケーション',
          'モバイルアプリ',
          'デスクトップアプリ',
          'システム開発',
          'API開発',
          'インフラ構築',
          'その他'
        ],
        
        projects: [
          {
            id: 1,
            title: 'ぼくの自由研究所web',
            category: 'Webアプリケーション',
            description: '小学生向けの自由研究サポートナビゲータアプリ。研究テーマの提案から実験手順、まとめ方まで包括的にサポート。',
            period: '2023年4月 - 2023年8月',
            teamSize: 3,
            role: 'フルスタック開発者',
            client: 'atelierent',
            image: './assets/logo.png',
            demoUrl: 'https://kids-labo.atelierent.jp/',
            githubUrl: '',
            technologies: ['Vue.js', 'Node.js', 'Express', 'PostgreSQL', 'Azure App Service'],
            details: `小学生の自由研究をサポートするWebアプリケーション。
子どもたちが興味を持てる研究テーマの提案機能、段階的な実験ガイド、研究結果のまとめ方指導など、自由研究の全工程をサポートします。

主な機能：
- 年齢・興味に応じた研究テーマ提案
- ステップバイステップの実験ガイド
- 写真付きの実験記録機能
- 研究レポート自動生成
- 保護者向けサポート情報`,
            achievements: [
              'Vue.js 2.xを使ったSPA開発の経験習得',
              'PostgreSQLを使ったデータベース設計・最適化',
              'Azure App Serviceでの本格的なWebアプリ運用',
              '子ども向けUIの設計・開発経験',
              'ユーザビリティテストの実施と改善'
            ]
          },
          {
            id: 2,
            title: '夢冒険',
            category: 'Webアプリケーション',
            description: '睡眠改善をゲーム化したWebアプリ。睡眠記録と習慣化をサポートし、良質な睡眠を促進。',
            period: '2023年1月 - 2023年3月',
            teamSize: 2,
            role: 'バックエンド開発者',
            client: 'atelierent',
            image: './assets/logo.png',
            demoUrl: 'https://dreamer.tokyo/',
            githubUrl: '',
            technologies: ['Node.js', 'Express', 'MongoDB', 'Chart.js', 'Bootstrap'],
            details: `睡眠習慣の改善をゲーミフィケーションで支援するWebアプリケーション。
ユーザーの睡眠データを記録・分析し、改善提案とモチベーション維持機能を提供します。

主な機能：
- 睡眠時間・質の記録機能
- 睡眠パターンの可視化・分析
- 改善アドバイスの自動提案
- 習慣化を促すゲーム要素
- 睡眠データのエクスポート機能`,
            achievements: [
              'MongoDBを使ったNoSQLデータベース設計',
              'Chart.jsを使ったデータ可視化機能の実装',
              'RESTful API設計の経験',
              'ユーザー行動データの分析手法の習得',
              'ゲーミフィケーション要素の設計・実装'
            ]
          },
          {
            id: 3,
            title: 'Phirosoft Website',
            category: 'Webアプリケーション',
            description: '企業サイト・ポートフォリオサイト。Vue.js SPA、SEO最適化、GitHub Pages自動デプロイ実装。',
            period: '2024年12月 - 2025年8月',
            teamSize: 1,
            role: 'フルスタック開発者',
            client: '自社プロジェクト',
            image: './assets/logo.png',
            demoUrl: 'https://phirosoft.github.io/public/',
            githubUrl: 'https://github.com/Phirosoft/public',
            technologies: ['Vue.js 2.x', 'Vuetify', 'GitHub Pages', 'GitHub Actions', 'Lighthouse CI'],
            details: `Phirosoftの企業サイト兼ポートフォリオサイト。
SPAでありながらSEO最適化を実現し、CI/CDパイプラインを完備した現代的なWebサイト。

主な機能：
- レスポンシブデザインの企業サイト
- 実績ポートフォリオ表示機能
- お問い合わせフォーム統合
- SEO最適化（Open Graph、構造化データ）
- 自動デプロイ・品質管理`,
            achievements: [
              'Vue.js SPAでのSEO最適化手法の確立',
              'GitHub Actions CI/CDパイプライン構築',
              'Lighthouse CIを使った品質管理自動化',
              'Creative Commons ライセンスの適用経験',
              'アクセシビリティ対応の実装'
            ]
          },
          {
            id: 4,
            title: '業務システム開発',
            category: 'システム開発',
            description: 'C#/.NET、Oracle/PostgreSQL/MySQLを使った業務システムの受託開発。要件定義から運用まで。',
            period: '2018年 - 現在',
            teamSize: '1-8',
            role: 'システムエンジニア',
            client: '複数クライアント',
            image: './assets/logo.png',
            demoUrl: '',
            githubUrl: '',
            technologies: ['C#', '.NET Framework', '.NET Core', 'Oracle', 'PostgreSQL', 'MySQL', 'Azure'],
            details: `企業向け業務システムの受託開発プロジェクト。
要件定義からシステム設計、開発、テスト、運用まで一貫して対応。

対応業務：
- 基幹業務システム開発
- データベース設計・最適化
- API開発・統合
- クラウドインフラ構築
- システム運用・保守`,
            achievements: [
              '複数のデータベースシステムでの開発経験',
              'Microsoft Azureでのクラウドシステム構築',
              '要件定義から運用まで一貫した開発経験',
              'チームリーダーとしてのプロジェクト管理経験',
              '様々な業界のビジネス要件への対応経験'
            ]
          },
          {
            id: 5,
            title: 'Cloud Infrastructure Automation',
            category: 'インフラ構築',
            description: 'Azure DevOpsとTerraformを使ったクラウドインフラの自動化。CI/CDパイプライン構築とIaC実装。',
            period: '2024年6月 - 2024年10月',
            teamSize: 2,
            role: 'DevOpsエンジニア',
            client: '企業クライアント',
            image: './assets/logo.png',
            demoUrl: '',
            githubUrl: '',
            technologies: ['Azure DevOps', 'Terraform', 'Docker', 'Kubernetes', 'Azure Monitor'],
            details: `企業のクラウドインフラ自動化プロジェクト。
オンプレミスからクラウドへの移行を支援し、Infrastructure as Code (IaC) による効率的なインフラ管理を実現。

実装内容：
- Terraformによるインフラコード化
- Azure DevOpsでのCI/CDパイプライン構築
- Dockerコンテナ化とKubernetes運用
- 監視・ログ管理システム構築
- セキュリティポリシーの自動適用`,
            achievements: [
              'Infrastructure as Code (IaC) の実装経験',
              'Azure DevOpsでのエンタープライズCI/CD構築',
              'Kubernetesクラスター運用の経験',
              'セキュリティ監査要件への対応',
              'インフラコスト30%削減を実現'
            ]
          },
          {
            id: 6,
            title: 'REST API & マイクロサービス',
            category: 'API開発',
            description: '.NET 6とDockerを使ったマイクロサービスアーキテクチャ。高可用性API設計・実装。',
            period: '2024年2月 - 2024年5月',
            teamSize: 4,
            role: 'APIアーキテクト',
            client: 'スタートアップ企業',
            image: './assets/logo.png',
            demoUrl: '',
            githubUrl: '',
            technologies: ['.NET 6', 'Docker', 'Redis', 'RabbitMQ', 'Swagger', 'Azure API Management'],
            details: `スケーラブルなマイクロサービスアーキテクチャの設計・実装。
高トラフィック対応とサービス間通信の最適化を実現。

アーキテクチャ特徴：
- RESTful API設計とOpenAPI仕様
- Redis分散キャッシュシステム
- RabbitMQメッセージキューイング
- Docker Composeローカル開発環境
- API Gateway による統合管理`,
            achievements: [
              'マイクロサービスアーキテクチャ設計の経験',
              '.NET 6による高性能API開発',
              'Redis分散キャッシュの実装',
              'API Gateway設計・運用',
              'レスポンス時間50ms以下を達成'
            ]
          }
        ],
        
        // computed プロパティで参照される値の初期化
        filteredProjectsData: [],
        yearsData: [],
        totalProjectsData: 0,
        totalClientsData: 0,
        totalTechnologiesData: 0
      }
    },
    mounted() {
      // データの初期化
      this.updateComputedData();
    },
    watch: {
      searchQuery() {
        this.updateFilteredProjects();
      },
      selectedCategory() {
        this.updateFilteredProjects();
      },
      selectedYear() {
        this.updateFilteredProjects();
      }
    },
    methods: {
      updateComputedData() {
        // プロジェクトデータの更新
        this.totalProjects = this.projects ? this.projects.length : 0;
        
        // クライアント数の計算
        if (this.projects && Array.isArray(this.projects)) {
          const clients = new Set(this.projects.map(p => p.client).filter(c => c));
          this.totalClients = clients.size;
        } else {
          this.totalClients = 0;
        }
        
        // 技術数の計算
        if (this.projects && Array.isArray(this.projects)) {
          const technologies = new Set();
          this.projects.forEach(project => {
            if (project.technologies && Array.isArray(project.technologies)) {
              project.technologies.forEach(tech => technologies.add(tech));
            }
          });
          this.totalTechnologies = technologies.size;
        } else {
          this.totalTechnologies = 0;
        }
        
        // 年度データの生成
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let year = 2018; year <= currentYear; year++) {
          years.push(year);
        }
        this.years = years.reverse();
        
        // フィルタリング済みプロジェクトの初期化
        this.updateFilteredProjects();
      },
      
      updateFilteredProjects() {
        if (!this.projects || !Array.isArray(this.projects)) {
          this.filteredProjects = [];
          return;
        }
        
        let filtered = this.projects;
        
        // 検索クエリフィルタ
        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          filtered = filtered.filter(project => 
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query) ||
            project.technologies.some(tech => tech.toLowerCase().includes(query)) ||
            (project.client && project.client.toLowerCase().includes(query))
          );
        }
        
        // カテゴリフィルタ
        if (this.selectedCategory) {
          filtered = filtered.filter(project => project.category === this.selectedCategory);
        }
        
        // 年度フィルタ
        if (this.selectedYear) {
          filtered = filtered.filter(project => project.period.includes(this.selectedYear.toString()));
        }
        
        this.filteredProjects = filtered;
      },
      
      openProjectDetail(project) {
        this.selectedProject = project;
        this.projectDialog = true;
      },
      
      getCategoryColor(category) {
        const colors = {
          'Webアプリケーション': 'primary',
          'モバイルアプリ': 'success',
          'デスクトップアプリ': 'info',
          'システム開発': 'warning',
          'API開発': 'error',
          'インフラ構築': 'purple',
          'その他': 'grey'
        };
        return colors[category] || 'grey';
      }
    },
  }
];

const getTemplate = (name) => {
  return templates.find((template) => {
    return template.name == name;
  });
};

