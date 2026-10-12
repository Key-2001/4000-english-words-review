// V-ing và to V — Units 51–54 (nội dung biên soạn riêng)
export default [
  {
    id: 51,
    intro: 'Sau mỗi loại từ, động từ có dạng cố định: **V nguyên mẫu**, **to + V** hoặc **V-ing**.',
    sections: [
      {
        title: 'V nguyên mẫu (không to)',
        text: 'Sau **will, can, must, should, might, could, would** và **do / does / did**.',
        examples: ['I can **swim**.', 'You should **go**.', "She doesn't **work** here.", 'Did you **see** it?'],
      },
      {
        title: 'to + V',
        text: 'Sau **want, need, decide, hope, plan, try, learn, would like, have to, be going to, used to**…',
        examples: ['I want **to go** home.', 'We need **to talk**.', "I'm going **to buy** a phone."],
      },
      {
        title: 'V-ing',
        text: 'Trong thì tiếp diễn (**be + V-ing**) và sau **enjoy, finish, stop, mind, like, love, hate**…',
        examples: ['They are **working**.', 'I enjoy **reading**.', 'Have you finished **eating**?'],
      },
    ],
    tips: ['can **to** swim ✘ → can swim ✔', 'want go ✘ → want **to** go ✔'],
    exercises: [
      { type: 'choice', q: 'You must ___ your passport.', options: ['bring', 'to bring', 'bringing'], answer: 'bring', explain: 'must + V nguyên mẫu.' },
      { type: 'choice', q: 'I want ___ a new language.', options: ['learn', 'to learn', 'learning'], answer: 'to learn', explain: 'want + to V.' },
      { type: 'choice', q: 'She is ___ dinner now.', options: ['cook', 'to cook', 'cooking'], answer: 'cooking', explain: 'be + V-ing.' },
      { type: 'gap', q: "Do you enjoy ___ to music?", hint: 'listen', answers: ['listening'], explain: 'enjoy + V-ing.' },
      { type: 'gap', q: 'We decided ___ a taxi.', hint: 'take', answers: ['to take'], explain: 'decide + to V.' },
      { type: 'gap', q: "Did you ___ the news?", hint: 'hear', answers: ['hear'], explain: 'did + V nguyên mẫu.' },
      { type: 'choice', q: 'I might ___ late tonight.', options: ['be', 'to be', 'being'], answer: 'be', explain: 'might + V nguyên mẫu.' },
      { type: 'gap', q: "Have you finished ___ the letter?", hint: 'write', answers: ['writing'], explain: 'finish + V-ing.' },
    ],
  },
  {
    id: 52,
    intro: 'Một số động từ theo sau bởi **to + V**, một số theo sau bởi **V-ing**, một số dùng được **cả hai**.',
    sections: [
      {
        title: 'Phân loại',
        table: {
          head: ['+ to V', '+ V-ing', '+ to V hoặc V-ing'],
          rows: [
            ['want, need, decide', 'enjoy, finish, stop', 'like, love'],
            ['hope, expect, plan', 'mind, suggest, keep', 'hate, prefer'],
            ['promise, offer, forget', 'imagine, avoid, practise', 'start, begin, continue'],
            ['learn, try, agree', 'give up, go on', ''],
          ],
        },
        examples: ['I **hope to see** you soon.', 'She **enjoys cooking**.', 'It started **to rain** / It started **raining**.', "Would you **mind opening** the window?"],
      },
      {
        title: "would like + to V",
        text: '**would like / would love / would prefer + to V** (dù like/love bình thường có thể đi với V-ing).',
        examples: ['I **like swimming**. (sở thích nói chung)', "I**'d like to swim** now. (mong muốn cụ thể)"],
      },
    ],
    tips: ['enjoy **doing** ✔ — enjoy to do ✘', 'Would you mind **helping** me? (mind + V-ing)'],
    exercises: [
      { type: 'choice', q: 'I enjoy ___ in the sea.', options: ['swim', 'to swim', 'swimming'], answer: 'swimming', explain: 'enjoy + V-ing.' },
      { type: 'choice', q: "We've decided ___ a new car.", options: ['buying', 'to buy', 'buy'], answer: 'to buy', explain: 'decide + to V.' },
      { type: 'gap', q: 'Please stop ___ so much noise!', hint: 'make', answers: ['making'], explain: 'stop + V-ing.' },
      { type: 'gap', q: 'I hope ___ you again soon.', hint: 'see', answers: ['to see'], explain: 'hope + to V.' },
      { type: 'choice', q: 'Would you mind ___ the door?', options: ['to close', 'closing', 'close'], answer: 'closing', explain: 'mind + V-ing.' },
      { type: 'gap', q: "I'd like ___ to the cinema tonight.", hint: 'go', answers: ['to go'], explain: "would like + to V." },
      { type: 'choice', q: "Don't forget ___ the lights.", options: ['to turn off', 'turning off', 'turn off'], answer: 'to turn off', explain: 'forget + to V (nhớ làm việc gì).' },
      { type: 'gap', q: 'He has finished ___ the report.', hint: 'write', answers: ['writing'], explain: 'finish + V-ing.' },
    ],
  },
  {
    id: 53,
    intro: 'Cấu trúc **động từ + tân ngữ + to V**: I want **you to** help me. She told **me to** wait.',
    sections: [
      {
        title: 'want / would like / ask / tell / help / expect … + người + to V',
        examples: ['I **want you to** listen.', 'Would you **like me to** open the window?', 'The teacher **told us to** be quiet.', 'She **asked him to** call her later.', 'My parents **expect me to** study hard.'],
      },
      {
        title: 'Phủ định: not to V',
        examples: ['He **told me not to** worry.', 'I asked them **not to** make noise.'],
      },
      {
        title: 'make / let + người + V nguyên mẫu',
        text: '**make** (bắt) và **let** (cho phép) đi với **V nguyên mẫu, không có to**.',
        examples: ['My mum **made me clean** my room.', 'They **let us use** their car.'],
      },
    ],
    tips: ['I want **you to** go. ✔ — I want that you go. ✘', 'let me **go** ✔ — let me to go ✘'],
    exercises: [
      { type: 'choice', q: 'I want ___ with me.', options: ['you come', 'you to come', 'that you come'], answer: 'you to come', explain: 'want + O + to V.' },
      { type: 'gap', q: 'The doctor told me ___ more water.', hint: 'drink', answers: ['to drink'], explain: 'tell + O + to V.' },
      { type: 'choice', q: 'Would you like ___ you?', options: ['me help', 'me to help', 'I help'], answer: 'me to help', explain: 'would like + O + to V.' },
      { type: 'gap', q: 'She asked me ___ tell anyone.', answers: ['not to'], explain: 'Phủ định: not to V.' },
      { type: 'choice', q: 'My parents let me ___ out late.', options: ['stay', 'to stay', 'staying'], answer: 'stay', explain: 'let + O + V nguyên mẫu.' },
      { type: 'choice', q: 'The film made me ___.', options: ['cry', 'to cry', 'crying'], answer: 'cry', explain: 'make + O + V nguyên mẫu.' },
      { type: 'gap', q: 'Can you help me ___ this box?', hint: 'carry', answers: ['carry', 'to carry'], explain: 'help + O + (to) V.' },
      { type: 'gap', q: 'I expected him ___ earlier.', hint: 'arrive', answers: ['to arrive'], explain: 'expect + O + to V.' },
    ],
  },
  {
    id: 54,
    intro: 'Dùng **to + V** để nói **mục đích** (để làm gì): I went to the shop **to buy** bread.',
    sections: [
      {
        title: 'to V chỉ mục đích',
        examples: ['I went to the post office **to send** a parcel.', 'She is saving money **to buy** a car.', '“Why did you call?” “**To say** thank you.”'],
      },
      {
        title: 'to V và for + danh từ',
        text: '**to + V** (để làm gì) · **for + danh từ** (để lấy / cho cái gì).',
        table: {
          head: ['to + V', 'for + danh từ'],
          rows: [
            ['I went out to get some food.', 'I went out for some food.'],
            ['We stopped to have a rest.', 'We stopped for a rest.'],
          ],
        },
      },
    ],
    tips: ['I came here **to study**. ✔ — I came here for study / for to study. ✘'],
    exercises: [
      { type: 'choice', q: 'I went to the bank ___ some money.', options: ['for get', 'to get', 'for getting'], answer: 'to get', explain: 'Mục đích → to V.' },
      { type: 'choice', q: "Let's go out ___ a drink.", options: ['to', 'for', 'for to'], answer: 'for', explain: 'for + danh từ.' },
      { type: 'gap', q: 'She studies hard ___ pass the exam.', answers: ['to'], explain: 'Mục đích → to.' },
      { type: 'gap', q: 'We went to the café ___ a coffee.', answers: ['for'], explain: 'for + danh từ.' },
      { type: 'choice', q: 'He came to Vietnam ___ Vietnamese.', options: ['to learn', 'for learn', 'for learning'], answer: 'to learn', explain: 'to + V.' },
      { type: 'gap', q: 'I called you ___ ask about the meeting.', answers: ['to'], explain: 'Mục đích → to.' },
      { type: 'choice', q: 'We stopped ___ a break.', options: ['to', 'for', 'for to'], answer: 'for', explain: 'for a break.' },
      { type: 'gap', q: '“Why are you going to the market?” “___ buy some fruit.”', answers: ['to'], explain: 'Trả lời mục đích: To buy…' },
    ],
  },
];
