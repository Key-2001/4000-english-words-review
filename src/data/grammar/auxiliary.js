// Trợ động từ — Units 40–43 (nội dung biên soạn riêng)
export default [
  {
    id: 40,
    intro: 'Để **tránh lặp lại** cả câu, ta chỉ dùng **trợ động từ** (am, is, do, does, did, have, can, will…).',
    sections: [
      {
        title: 'Câu trả lời ngắn và tránh lặp',
        examples: [
          '“Are you tired?” “Yes, I **am**.” (= I am tired)',
          '“Do you like tea?” “No, I **don’t**.”',
          "I can't swim, but my sister **can**.",
          "I don't have a car, but my brother **does**.",
          'He said he would come, and he **did**.',
        ],
      },
      {
        title: 'Chọn trợ động từ nào?',
        table: {
          head: ['Câu gốc dùng', 'Trợ động từ thay thế'],
          rows: [
            ['be (am / is / was…)', 'am / is / are / was / were'],
            ['hiện tại đơn (like, works…)', 'do / does'],
            ['quá khứ đơn (went, saw…)', 'did'],
            ['hiện tại hoàn thành', 'have / has'],
            ['can / will / should…', 'can / will / should…'],
          ],
        },
      },
    ],
    tips: ['“Do you like coffee?” “Yes, I **do**.” (không nói “Yes, I like.”)'],
    exercises: [
      { type: 'choice', q: "I don't like fish, but my wife ___.", options: ['does', 'do', 'is'], answer: 'does', explain: 'Hiện tại đơn, she → does.' },
      { type: 'choice', q: "“Are you a student?” “Yes, I ___.”", options: ['do', 'am', 'are'], answer: 'am', explain: 'Câu hỏi với be → am.' },
      { type: 'gap', q: "I can't speak Chinese, but Lan ___.", answers: ['can'], explain: 'Lặp lại can.' },
      { type: 'gap', q: "“Did you see the match?” “Yes, I ___.”", answers: ['did'], explain: 'Quá khứ đơn → did.' },
      { type: 'gap', q: "He isn't hungry, but I ___.", answers: ['am'], explain: 'be → am.' },
      { type: 'choice', q: "“Have you finished?” “No, I ___.”", options: ["haven't", "don't", "didn't"], answer: "haven't", explain: 'Hiện tại hoàn thành → haven’t.' },
      { type: 'gap', q: "I wasn't tired, but the children ___.", answers: ['were'], explain: 'Quá khứ của be, số nhiều.' },
      { type: 'choice', q: "“Will you be there?” “Yes, I ___.”", options: ['will', 'am', 'do'], answer: 'will', explain: 'Lặp lại will.' },
    ],
  },
  {
    id: 41,
    intro: '**Câu hỏi đáp lại** (Have you? Are you?) để tỏ ra quan tâm/ngạc nhiên, và **câu hỏi đuôi** (…, isn’t it?) để xác nhận.',
    sections: [
      {
        title: 'Câu hỏi đáp lại (reply questions)',
        text: 'Dùng **trợ động từ + chủ ngữ?**, thể hiện “Thế à? / Vậy sao?”.',
        examples: ['“I’m getting married.” “**Are you**? Congratulations!”', '“I’ve been to Iceland.” “**Have you**? Wow!”', '“Tom doesn’t eat meat.” “**Doesn’t he**?”'],
      },
      {
        title: 'Câu hỏi đuôi (question tags)',
        text: 'Câu **khẳng định → đuôi phủ định**; câu **phủ định → đuôi khẳng định**.',
        table: {
          head: ['Câu', 'Đuôi'],
          rows: [
            ["It's a nice day,", "isn't it?"],
            ['You live here,', "don't you?"],
            ["She didn't call,", 'did she?'],
            ["You haven't seen Tom,", 'have you?'],
          ],
        },
      },
    ],
    tips: ['Đuôi của **I am** là **aren’t I?** (I’m late, aren’t I?)', 'Chủ ngữ trong đuôi luôn là đại từ: Anna is here, isn’t **she**?'],
    exercises: [
      { type: 'choice', q: "It's very hot today, ___?", options: ["isn't it", 'is it', "doesn't it"], answer: "isn't it", explain: 'Khẳng định → đuôi phủ định.' },
      { type: 'choice', q: "You don't eat meat, ___?", options: ["don't you", 'do you', 'are you'], answer: 'do you', explain: 'Phủ định → đuôi khẳng định.' },
      { type: 'gap', q: 'Anna lives in Hanoi, ___ she?', answers: ["doesn't", 'does not'], explain: 'Hiện tại đơn khẳng định → doesn’t she.' },
      { type: 'gap', q: '“I’ve lost my wallet.” “___ you? Oh no!”', answers: ['have'], explain: 'Reply question: Have you?' },
      { type: 'choice', q: 'They went to Japan, ___?', options: ["didn't they", "don't they", 'did they'], answer: "didn't they", explain: 'Quá khứ khẳng định.' },
      { type: 'gap', q: "You can swim, ___ you?", answers: ["can't", 'cannot'], explain: 'can → can’t.' },
      { type: 'choice', q: '“Mai isn’t coming.” “___? Why not?”', options: ["Isn't she", 'Is she', "Doesn't she"], answer: "Isn't she", explain: 'Reply question giữ phủ định của câu gốc.' },
      { type: 'gap', q: "You haven't met my brother, ___ you?", answers: ['have'], explain: 'Phủ định → đuôi khẳng định.' },
    ],
  },
  {
    id: 42,
    intro: 'Đồng tình với người khác: **too / so** (khẳng định) và **either / neither** (phủ định).',
    sections: [
      {
        title: 'too và either',
        table: {
          head: ['Câu khẳng định', 'Câu phủ định'],
          rows: [
            ["I'm hungry. — I am too.", "I'm not hungry. — I'm not either."],
            ['I like tea. — I do too.', "I don't like tea. — I don't either."],
          ],
        },
      },
      {
        title: 'so và neither (đảo trợ động từ)',
        text: '**So + trợ động từ + chủ ngữ** (cũng vậy) · **Neither + trợ động từ + chủ ngữ** (cũng không).',
        examples: ['“I’m tired.” “**So am I**.”', '“I love this song.” “**So do I**.”', "“I can't swim.” “**Neither can I**.”", "“I didn't go out.” “**Neither did I**.”"],
      },
    ],
    tips: ['So **am I** ✔ — So I am ✘ (phải đảo).', 'Neither đã mang nghĩa phủ định: Neither **do** I (không nói “Neither don’t I”).'],
    exercises: [
      { type: 'choice', q: '“I love pizza.” “So ___ I.”', options: ['am', 'do', 'love'], answer: 'do', explain: 'love (hiện tại đơn) → So do I.' },
      { type: 'choice', q: '“I’m not hungry.” “Neither ___ I.”', options: ['am', 'do', "am not"], answer: 'am', explain: 'be → Neither am I.' },
      { type: 'gap', q: "“I can't drive.” “Neither ___ I.”", answers: ['can'], explain: 'can → Neither can I.' },
      { type: 'gap', q: '“I went to bed late.” “So ___ I.”', answers: ['did'], explain: 'Quá khứ → So did I.' },
      { type: 'choice', q: "“I don't like horror films.” “I don't ___.”", options: ['too', 'either', 'neither'], answer: 'either', explain: 'Phủ định → either.' },
      { type: 'choice', q: '“I’m from Vietnam.” “I am ___.”', options: ['too', 'either', 'so'], answer: 'too', explain: 'Khẳng định → too.' },
      { type: 'gap', q: '“I have never been to Paris.” “Neither ___ I.”', answers: ['have'], explain: 'Hoàn thành → Neither have I.' },
      { type: 'gap', q: '“I will be there.” “So ___ we.”', answers: ['will'], explain: 'will → So will we.' },
    ],
  },
  {
    id: 43,
    intro: 'Tổng hợp cách tạo **câu phủ định**: thêm **not / n’t** sau trợ động từ; thì đơn dùng **don’t / doesn’t / didn’t**.',
    sections: [
      {
        title: 'Bảng tổng hợp',
        table: {
          head: ['Khẳng định', 'Phủ định'],
          rows: [
            ['I am / is / are', "I'm not / isn't / aren't"],
            ['was / were', "wasn't / weren't"],
            ['have / has (done)', "haven't / hasn't (done)"],
            ['can / will / should', "can't / won't / shouldn't"],
            ['I work / he works', "I don't work / he doesn't work"],
            ['I worked', "I didn't work"],
          ],
        },
      },
      {
        title: 'Phủ định của câu mệnh lệnh',
        text: '**Don’t + V**: Don’t go! Don’t be silly!',
        examples: ["She **doesn't** know the answer.", "We **haven't** seen it.", "They **won't** come.", "I **can't** hear you."],
      },
    ],
    tips: ['will not → **won’t**; can not → **can’t / cannot**.', 'Không dùng hai trợ động từ: I don’t can ✘ → I **can’t** ✔'],
    exercises: [
      { type: 'gap', q: 'He works on Sunday. → He ___ on Sunday.', hint: 'phủ định', answers: ["doesn't work", 'does not work'], explain: 'doesn’t + V.' },
      { type: 'gap', q: 'They were at home. → They ___ at home.', hint: 'phủ định', answers: ["weren't", 'were not'], explain: 'were → weren’t.' },
      { type: 'gap', q: "She has finished. → She ___ finished.", hint: 'phủ định', answers: ["hasn't", 'has not'], explain: 'has → hasn’t.' },
      { type: 'choice', q: 'I will tell him. → I ___ tell him.', options: ["won't", "willn't", "don't will"], answer: "won't", explain: 'will not = won’t.' },
      { type: 'gap', q: 'We saw the film. → We ___ the film.', hint: 'phủ định', answers: ["didn't see", 'did not see'], explain: 'didn’t + V nguyên mẫu.' },
      { type: 'choice', q: 'I can swim. → I ___ swim.', options: ["can't", "don't can", "can't to"], answer: "can't", explain: 'can → can’t.' },
      { type: 'gap', q: "It's cold. → It ___ cold.", hint: 'phủ định', answers: ["isn't", 'is not', "'s not"], explain: 'is → isn’t.' },
      { type: 'choice', q: '___ shout! People are sleeping.', options: ["Don't", "Not", "Doesn't"], answer: "Don't", explain: 'Mệnh lệnh phủ định.' },
    ],
  },
];
