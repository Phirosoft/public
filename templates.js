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
          // {
          //   title: 'Note',
          //   text: `経営に関する内容`,
          //   href: 'https://note.com/phiro1021'
          // },
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
  }
];

const getTemplate = (name) => {
  return templates.find((template) => {
    return template.name == name;
  });
};

