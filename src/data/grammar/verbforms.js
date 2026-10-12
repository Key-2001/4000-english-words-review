// Dạng động từ — Units 23–24 (nội dung biên soạn riêng)
export default [
  {
    id: 23,
    intro: '**be, have, do** vừa là động từ chính, vừa là **trợ động từ** giúp tạo các thì, câu hỏi và câu phủ định.',
    sections: [
      {
        title: 'be + V-ing (thì tiếp diễn) và be + V3 (bị động)',
        examples: ['I **am** study**ing**.', 'They **were** watch**ing** TV.', 'The room **is** clean**ed** every day.'],
      },
      {
        title: 'have + V3 (thì hoàn thành)',
        examples: ['I **have** finish**ed**.', 'She **has** gone out.', '**Have** you seen my bag?'],
      },
      {
        title: 'do / does / did (hiện tại đơn, quá khứ đơn)',
        text: 'Dùng trong câu hỏi và phủ định của thì đơn, động từ chính ở dạng **nguyên mẫu**.',
        examples: ["I **don't** like it.", '**Does** he work here?', "We **didn't** go out.", '**Did** you see it?'],
      },
      {
        title: 'Tổng hợp',
        table: {
          head: ['Trợ động từ', 'Đi với', 'Thì / cấu trúc'],
          rows: [
            ['am / is / are / was / were', 'V-ing', 'tiếp diễn'],
            ['am / is / are / was / were', 'V3', 'bị động'],
            ['have / has / had', 'V3', 'hoàn thành'],
            ['do / does / did', 'V nguyên mẫu', 'câu hỏi / phủ định thì đơn'],
          ],
        },
      },
    ],
    tips: ['Đừng trộn: Do you working? ✘ → **Are** you working? ✔', 'Did she went? ✘ → Did she **go**? ✔'],
    exercises: [
      { type: 'choice', q: '___ you working at the moment?', options: ['Do', 'Are', 'Have'], answer: 'Are', explain: 'V-ing → be.' },
      { type: 'choice', q: '___ you ever been to Hue?', options: ['Did', 'Have', 'Are'], answer: 'Have', explain: 'been (V3) → have.' },
      { type: 'choice', q: '___ she like chocolate?', options: ['Does', 'Is', 'Has'], answer: 'Does', explain: 'like (nguyên mẫu) → does.' },
      { type: 'gap', q: 'Where ___ you go yesterday?', answers: ['did'], explain: 'Quá khứ đơn → did.' },
      { type: 'gap', q: 'The car ___ washed every week.', answers: ['is'], explain: 'Bị động hiện tại: is + V3.' },
      { type: 'gap', q: 'What ___ Tom doing now?', answers: ['is'], explain: 'Tiếp diễn: is + V-ing.' },
      { type: 'choice', q: 'I ___ finished my report yet.', options: ["don't", "haven't", "didn't"], answer: "haven't", explain: 'finished + yet → haven’t.' },
      { type: 'gap', q: "They ___ live here. They live in the next street.", answers: ["don't", 'do not'], explain: 'Phủ định hiện tại đơn.' },
    ],
  },
  {
    id: 24,
    intro: 'Động từ có **3 dạng**: nguyên mẫu (V1), quá khứ (V2), quá khứ phân từ (V3). Động từ **có quy tắc** thêm -ed; **bất quy tắc** phải học thuộc.',
    sections: [
      {
        title: 'Động từ có quy tắc',
        text: 'V2 và V3 giống nhau, thêm **-ed**: clean → cleaned → cleaned; stop → stopped; study → studied.',
      },
      {
        title: 'Động từ bất quy tắc thường gặp',
        table: {
          head: ['V1', 'V2 (quá khứ)', 'V3 (phân từ)'],
          rows: [
            ['be', 'was / were', 'been'],
            ['go', 'went', 'gone'],
            ['see', 'saw', 'seen'],
            ['eat', 'ate', 'eaten'],
            ['write', 'wrote', 'written'],
            ['take', 'took', 'taken'],
            ['buy', 'bought', 'bought'],
            ['make', 'made', 'made'],
            ['put', 'put', 'put'],
            ['know', 'knew', 'known'],
          ],
        },
      },
      {
        title: 'Khi nào dùng V2, khi nào dùng V3?',
        text: '**V2** cho quá khứ đơn khẳng định. **V3** sau **have** (hoàn thành) và **be** (bị động).',
        examples: ['I **saw** him yesterday. (V2)', "I've **seen** this film before. (V3)", 'The window was **broken**. (V3)'],
      },
    ],
    tips: ['Một số động từ có V1 = V2 = V3: put, cut, hit, let, cost, shut.'],
    exercises: [
      { type: 'gap', q: 'I ___ a lot of water yesterday.', hint: 'drink', answers: ['drank'], explain: 'drink → drank → drunk.' },
      { type: 'gap', q: 'Have you ___ your homework?', hint: 'do', answers: ['done'], explain: 'have + V3 (done).' },
      { type: 'choice', q: 'She ___ me a long letter last month.', options: ['wrote', 'written', 'writed'], answer: 'wrote', explain: 'Quá khứ đơn → V2.' },
      { type: 'choice', q: 'This book was ___ in 1990.', options: ['wrote', 'written', 'write'], answer: 'written', explain: 'Bị động → V3.' },
      { type: 'gap', q: 'He ___ his finger while he was cooking.', hint: 'cut', answers: ['cut'], explain: 'cut → cut → cut.' },
      { type: 'gap', q: "We've ___ each other for years.", hint: 'know', answers: ['known'], explain: 'know → knew → known.' },
      { type: 'choice', q: 'They ___ a new car last week.', options: ['buyed', 'bought', 'brought'], answer: 'bought', explain: 'buy → bought.' },
      { type: 'gap', q: 'Has anybody ___ my glasses?', hint: 'see', answers: ['seen'], explain: 'see → saw → seen.' },
    ],
  },
];
