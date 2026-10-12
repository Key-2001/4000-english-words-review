// There và It — Units 37–39 (nội dung biên soạn riêng)
export default [
  {
    id: 37,
    intro: '**there is / there are** = **có** (diễn tả sự tồn tại của người/vật ở đâu đó).',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['', 'Số ít / không đếm được', 'Số nhiều'],
          rows: [
            ['Khẳng định', "there is (there's)", 'there are'],
            ['Phủ định', "there isn't", "there aren't"],
            ['Câu hỏi', 'Is there…?', 'Are there…?'],
          ],
        },
        examples: [
          "**There's** a bank near my house.",
          '**There are** twenty students in my class.',
          "**There isn't** any milk in the fridge.",
          '**Is there** a hotel near here?',
          'How many people **are there** in your family?',
        ],
      },
      {
        title: 'there is và it is',
        text: 'Dùng **there is** khi nói **có** cái gì lần đầu; dùng **it** để nói **về** chính cái đó sau đó.',
        examples: ["**There's** a new restaurant in town. **It's** very good."],
      },
    ],
    tips: ['Có một cái bàn → There **is** a table (không nói “It has a table”).', 'How many + danh từ số nhiều + **are there**?'],
    exercises: [
      { type: 'choice', q: '___ a supermarket near here?', options: ['Is there', 'Are there', 'Has it'], answer: 'Is there', explain: 'a supermarket (số ít) → Is there.' },
      { type: 'choice', q: '___ three bedrooms in our flat.', options: ['There is', 'There are', 'It is'], answer: 'There are', explain: 'Số nhiều → There are.' },
      { type: 'gap', q: "There ___ any eggs. We need to buy some.", answers: ["aren't", 'are not'], explain: 'eggs số nhiều → aren’t.' },
      { type: 'gap', q: 'How many students ___ there in your class?', answers: ['are'], explain: 'How many + are there.' },
      { type: 'choice', q: "There's a new café on our street. ___ very nice.", options: ["It's", "There's", "They're"], answer: "It's", explain: 'Nói về cái đã nhắc → it.' },
      { type: 'gap', q: '___ is a problem with my computer.', answers: ['there'], explain: 'Có một vấn đề → There is.' },
      { type: 'choice', q: '“Are there any good films on TV tonight?” “No, there ___.”', options: ["isn't", "aren't", "don't"], answer: "aren't", explain: 'Trả lời ngắn số nhiều.' },
      { type: 'gap', q: 'There ___ a lot of traffic this morning.', answers: ['is', "'s"], explain: 'traffic không đếm được → is.' },
    ],
  },
  {
    id: 38,
    intro: '**there** dùng được ở mọi thì: **there was / were** (quá khứ), **there has / have been** (hoàn thành), **there will be** (tương lai).',
    sections: [
      {
        title: 'Các thì với there',
        table: {
          head: ['Thì', 'Số ít', 'Số nhiều'],
          rows: [
            ['Quá khứ', 'there was', 'there were'],
            ['Hiện tại hoàn thành', 'there has been', 'there have been'],
            ['Tương lai', 'there will be', 'there will be'],
          ],
        },
        examples: [
          '**There was** a big storm last night.',
          '**There were** a lot of people at the concert.',
          "**There's been** an accident on the motorway.",
          '**There will be** rain tomorrow.',
          '**Was there** a TV in your hotel room?',
        ],
      },
    ],
    tips: ['there will be dùng chung cho số ít và số nhiều.', "Câu hỏi: **Was there**…? / **Were there**…? / **Will there be**…?"],
    exercises: [
      { type: 'choice', q: '___ a lot of people at the party yesterday.', options: ['There was', 'There were', 'There is'], answer: 'There were', explain: 'Quá khứ, số nhiều.' },
      { type: 'gap', q: "There ___ an accident. Call an ambulance!", answers: ['has been', "'s been"], explain: 'Vừa xảy ra → has been.' },
      { type: 'choice', q: 'I think there ___ a lot of snow tomorrow.', options: ['will be', 'will', 'was'], answer: 'will be', explain: 'Tương lai → there will be.' },
      { type: 'gap', q: '___ there a park near your old house?', answers: ['was'], explain: 'Quá khứ số ít → Was there.' },
      { type: 'gap', q: "There ___ any taxis, so we walked home.", answers: ["weren't", 'were not'], explain: 'Quá khứ số nhiều phủ định.' },
      { type: 'choice', q: '___ many changes in our town since 2010.', options: ['There have been', 'There has been', 'There was'], answer: 'There have been', explain: 'many changes (số nhiều) + since.' },
      { type: 'gap', q: '___ there be a meeting tomorrow?', answers: ['will'], explain: 'Câu hỏi tương lai.' },
      { type: 'choice', q: 'There ___ nobody at home when I called.', options: ['was', 'were', 'is'], answer: 'was', explain: 'nobody → số ít.' },
    ],
  },
  {
    id: 39,
    intro: 'Dùng **it** làm chủ ngữ “giả” để nói về **thời gian, ngày tháng, thời tiết, khoảng cách** và trong cấu trúc **It’s + tính từ + to V**.',
    sections: [
      {
        title: 'Thời gian, ngày tháng, thời tiết',
        examples: ["**It's** half past seven.", "**It's** Monday today.", "**It's** raining again.", '**It was** very hot yesterday.', "**It's** dark. Turn on the light."],
      },
      {
        title: 'Khoảng cách',
        examples: ["**It's** two kilometres from my house to school.", 'How far **is it** to the station?'],
      },
      {
        title: "It's + tính từ + to V",
        examples: ["**It's** easy **to** learn this game.", "**It's** nice **to** meet you.", "**It was** difficult **to** find a parking space."],
      },
    ],
    tips: ['Không bỏ it: **It’s** raining. ✔ — Is raining. ✘', 'How far is **it** from A to B?'],
    exercises: [
      { type: 'gap', q: "___ cold today. Wear a jacket.", answers: ["it's", 'it is'], explain: 'Thời tiết → It’s.' },
      { type: 'choice', q: 'How far ___ from here to the airport?', options: ['is it', 'is there', 'it is'], answer: 'is it', explain: 'Khoảng cách → How far is it…?' },
      { type: 'choice', q: '___ difficult to understand him.', options: ["It's", "There's", 'Is'], answer: "It's", explain: "It's + adj + to V." },
      { type: 'gap', q: "What time is ___? — It's ten o'clock.", answers: ['it'], explain: 'Giờ → it.' },
      { type: 'choice', q: '___ a long way to the beach.', options: ["It's", "There's", 'Is'], answer: "It's", explain: 'Khoảng cách → It’s.' },
      { type: 'gap', q: "It ___ very windy yesterday.", answers: ['was'], explain: 'Quá khứ → It was.' },
      { type: 'choice', q: "It's nice ___ you again.", options: ['to see', 'see', 'seeing'], answer: 'to see', explain: "It's + adj + to V." },
      { type: 'gap', q: '___ my birthday today!', answers: ["it's", 'it is'], explain: 'Ngày → It’s.' },
    ],
  },
];
