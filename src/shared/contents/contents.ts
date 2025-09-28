const profileContents = {
  title: 'Profile',
  user: {
    name: 'SAITO SHINJI',
    face: '/images/bouzu.png',
  },
  about: {
    title: 'わたしについて',
    contents: [
      '私の名前は斎藤晋志です。',
      'エンジニア未経験です。',
      '得意な言語はjavascriptとpythonです。',
      'わからないことは検索やAIと格闘しならがら書いています。',
      'たまにpythonで自分用のスクリプトを書いています。',
    ],
  },
  skill: {
    title: 'スキル',
    contents: ['javascript: vanira, react', 'python: 基礎', 'php: 基礎'],
  },
  work: {
    title: '実績',
    contents: ['とくになし'],
  },
};

const thingsContents = {
  title: 'Things',
  thinking: {
    title: '大事にしていること',
    contents: {
      文字にする:
        '言葉にしずらい印象や感覚といった抽象的なものをできるだけ文字化し、自己理解を深める共に他人に説明しやすくします。',
      列挙する:
        '人が何かをするときは必ず理由がありますが、与える影響の大小はあれどたった1つの理由で何かすることは稀であると思っています。物事を考えるときは必ず複数の理由を考えるえるように心がけています',
      単純にする:
        '法律のような精密で複雑な文章よりも、アイコンやキャッチコピーのような単純化されたイメージや文章ほうが忘れにくいしミスしづらいので、そうしています。',
    },
  },
  growthTarget: {
    title: '成長目標',
    contents: {
      現在: '慣れない・わからないことが非常に多く調べながら制作していため時間が掛かるしごちゃごちゃした書き方になってしまっています',
      将来: 'エラーを出さずにとまでいかなくと、調べものなしで制作できるようになりたいです。',
    },
  },
};

const contactContents = {
  title: 'Contact',
  subtitle: 'お問い合わせ',
  confirmBtn: '確認',
  submitBtn: '送信',
  cancelBtn: '戻る',
  submittedMsg: `\
お問い合わせありがとうございます。\n
メッセージが正常に送信された場合は\n
自動返信メールが届きますので\n
ご確認のほどよろしくお願いいたします。
`,
};
/** omake */
const omakeContents = {
  title: 'Omake',
  subtitle: 'このサイトを作るにあたって',
  contents: {
    ReactとNextjsを選んだ理由:
      'フレームワークというものを使ってことがなかったのでほぼフレームワークと言われる\
      Reactを使ってWEBを制作してみたいと思ったためです。\
      バックエンドもするならNext.jsがいいと聞いたので、使ってればそのうち理由も\
      理解できるかな？と、使ってみることにしました。',
    VercelとGASを選んだ理由:
      'ホスティングはVercelはNext.jsと相性のいい聞くし記事が多かったからで、\
      メールサーバーはCORSエラーのでないものを前提に登録先を増やさず管理の手間を減らしたかったので、\
      GASのWEBアプリになりました。',
    typescriptを選んだ理由:
      'JavaScriptには型ヒントがなく、reactが推奨するファイルをたくさん作るやり方から、\
      関数やコンポーネントの戻り値・引数に型ヒントはないと困るだろうと思ったためです。',
    良かった点:
      'ReactでHTMLの記述を後からquerySelectorなどであとから直すことがないのが\
      少なくなったこと。useStateを使わずにちょっと長いコードを書いたときは、\
      依存性や引数・戻り値が面倒になることが多かったのですが、useStateのおかげで\
      わかりやすくまとまったこと。\
      公開先のVercelはサーバーレスなのと、Git Hubを更新したら自動的にredeployしてくれるので楽ですね。',
    苦労した点:
      '大体全て苦労しました。事前に知識不足であることは理解できていたため、\
      その時その時で調べて仕様をコロコロ変える方向性で行くことにしたのです。\
      これは大枠においてうまくいきましたが、細部においては小さな失敗を繰り返しておりました。\
      具体的にはCSSプロパティ、型宣言などあるのですが、\
      スムーズスクロールとCORSエラーが特に苦労しました。スムーズスクロールはrefの仕様をreactは仮想DOMだから現在のページで\
      表示されていいないDOM要素にもrefを使えると勘違いしていたことと、\
      DOMが遅れて段階的に反映される仕様でasync/awaitでは失敗すると\
      理解できるまでかなり時間が掛かりました。最終的にはsetIntervalを使っています。\
      CORSエラーは、静的なサイトしか作れないGithubPagesにフォームのような\
      動的なコンテンツを作ることができないためGoogleFormのapiを埋め込むことで対応しようとしたのすが、\
      GoogleFormの仕様でCORSエラーに対応してないのがわかっていなかったのです。\
      最終的にはVercel + GASのWEBアプリ + 自動返信メールを使うことで対応しました。\
      ',
    改善目標:
      '一つ目は命名。適当に命名したりすることが多いのでコメントがなければ、\
      自分でもすぐに理解できないことがよくありました。 \
      二つ目はディレクトリ構造。reactやnextjsは勉強しましたが、\
      ディレクトリ構造までちゃんと勉強できたわけじゃないのでどうにもしっくりこない感じがします。\
      三つ目は用意された関数や文の書き方を把握しきれていないこと。\
      とりあえず書いても、把握してなかった書き方を知ったりした後、あと書き直すことがよくありました。\
      四つ目はデザイン。デザイナーそのものを目指さなくても、\
      UIに関するものは勉強する必要があるとは思うのですが、\
      何から手を付けるべきなのか見当がつきません。\
      ',
  },
};

/** formの項目の初期データ一覧*/
const formContents = [
  {
    subject: '名前',
    id: 'user',
    placeholder: '山田 太郎',
    name: 'user',
  },
  {
    subject: 'フリガナ',
    id: 'furigana',
    placeholder: 'ヤマダ タロウ',
    name: 'furigana',
  },
  {
    subject: 'メール',
    id: 'email',
    placeholder: 'sample@email.co.jp',
    name: 'email',
  },
  {
    subject: '問い合わせ内容',
    id: 'inquiry',
    placeholder: 'ここに詳しい問い合わせ内容を記載して下さい。',
    name: 'inquiry',
  },
];

/** copyright */
const copyright = '© 2025 saito';

/** headerのbaseMenu */
const headerBaseMenu = ['profile', 'things', 'contact'];
const headerMenu = [...headerBaseMenu, 'omake'];

export {
  copyright,
  headerBaseMenu,
  headerMenu,
  profileContents,
  thingsContents,
  contactContents,
  omakeContents,
  formContents,
};
