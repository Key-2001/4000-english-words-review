// Liên từ và mệnh đề — Units 97–102 (nội dung biên soạn riêng)
export default [
  {
    id: 97,
    intro: 'Liên từ nối hai ý: **and** (và), **but** (nhưng), **or** (hoặc), **so** (vì vậy — kết quả), **because** (vì — lý do).',
    sections: [
      {
        title: 'Ý nghĩa',
        table: {
          head: ['Liên từ', 'Dùng để', 'Ví dụ'],
          rows: [
            ['and', 'thêm thông tin', 'I had a shower and went to bed.'],
            ['but', 'đối lập', "It's cheap but it's good."],
            ['or', 'lựa chọn', 'Do you want tea or coffee?'],
            ['so', 'kết quả', 'It was raining, so we stayed home.'],
            ['because', 'lý do', 'We stayed home because it was raining.'],
          ],
        },
      },
      {
        title: 'so và because',
        text: '**so** đứng trước **kết quả**; **because** đứng trước **nguyên nhân**. Có thể đặt because ở đầu câu: **Because** it was late, we took a taxi.',
      },
    ],
    tips: ['Không dùng cả because và so trong một câu: Because I was tired, so I slept ✘'],
    exercises: [
      { type: 'choice', q: "I was hungry, ___ I made a sandwich.", options: ['because', 'so', 'but'], answer: 'so', explain: 'Kết quả → so.' },
      { type: 'choice', q: "I made a sandwich ___ I was hungry.", options: ['because', 'so', 'or'], answer: 'because', explain: 'Lý do → because.' },
      { type: 'gap', q: 'The hotel was nice, ___ it was very expensive.', answers: ['but'], explain: 'Đối lập → but.' },
      { type: 'gap', q: 'Would you like rice ___ noodles?', answers: ['or'], explain: 'Lựa chọn → or.' },
      { type: 'choice', q: 'She opened the door ___ walked in.', options: ['and', 'but', 'so'], answer: 'and', explain: 'Hành động nối tiếp → and.' },
      { type: 'gap', q: "I didn't go to work ___ I was ill.", answers: ['because'], explain: 'Lý do.' },
      { type: 'choice', q: 'The shop was closed, ___ we went home.', options: ['so', 'because', 'or'], answer: 'so', explain: 'Kết quả.' },
      { type: 'gap', q: "He studied hard, ___ he didn't pass the exam.", answers: ['but'], explain: 'Đối lập.' },
    ],
  },
  {
    id: 98,
    intro: '**when** nối hai hành động theo thời gian. Mệnh đề **when** có thể đứng đầu (có dấu phẩy) hoặc cuối câu.',
    sections: [
      {
        title: 'Vị trí',
        examples: ['**When** I got home, I had dinner.', 'I had dinner **when** I got home.', 'They were surprised **when** they saw me.'],
      },
      {
        title: 'when + hiện tại đơn cho tương lai',
        text: 'Nói về tương lai, mệnh đề **when** dùng **hiện tại đơn** (không dùng will).',
        examples: ["**When** I **finish** work, I'll call you. (không nói “When I will finish”)", "I'll tell him **when** I **see** him."],
      },
      {
        title: 'Tương tự với before / after / while / until',
        examples: ["I'll wait here **until** you **come** back.", "Call me **before** you **leave**."],
      },
    ],
    tips: ['When I **get** there, I’ll text you. ✔ — When I will get there ✘'],
    exercises: [
      { type: 'choice', q: "I'll call you when I ___ home.", options: ['get', 'will get', 'got'], answer: 'get', explain: 'when + hiện tại đơn cho tương lai.' },
      { type: 'choice', q: 'When she ___ the news, she cried.', options: ['hears', 'heard', 'will hear'], answer: 'heard', explain: 'Quá khứ → heard.' },
      { type: 'gap', q: "We'll start the meeting when everyone ___ here.", hint: 'be', answers: ['is'], explain: 'Hiện tại đơn.' },
      { type: 'gap', q: "When I ___ a child, I lived in the countryside.", hint: 'be', answers: ['was'], explain: 'Quá khứ.' },
      { type: 'choice', q: "Don't forget to lock the door when you ___.", options: ['leave', 'will leave', 'left'], answer: 'leave', explain: 'Hiện tại đơn.' },
      { type: 'gap', q: "I'll wait until you ___ ready.", hint: 'be', answers: ['are'], explain: 'until + hiện tại đơn.' },
      { type: 'choice', q: 'When I finish this book, I ___ it to you.', options: ['give', 'will give', 'gave'], answer: 'will give', explain: 'Mệnh đề chính dùng will.' },
      { type: 'gap', q: 'Please turn off the lights before you ___ to bed.', hint: 'go', answers: ['go'], explain: 'before + hiện tại đơn.' },
    ],
  },
  {
    id: 99,
    intro: 'Câu điều kiện **có thật** (loại 1): **If + hiện tại đơn, will + V** — điều có thể xảy ra trong tương lai.',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['Mệnh đề if', 'Mệnh đề chính'],
          rows: [
            ['If it rains,', "we'll stay at home."],
            ['If you see Tom,', 'tell him to call me.'],
            ["If you don't hurry,", "you'll miss the bus."],
          ],
        },
        examples: ["**If** I **have** time, I**'ll help** you.", "We**'ll be** late **if** we **don't leave** now.", "**If** you're hungry, have a sandwich."],
      },
      {
        title: 'Lưu ý',
        text: 'Trong mệnh đề **if** dùng **hiện tại đơn**, không dùng will. Mệnh đề if đứng đầu thì có **dấu phẩy**.',
      },
      {
        title: 'if và when',
        text: '**if** = không chắc sẽ xảy ra; **when** = chắc chắn sẽ xảy ra.',
        examples: ['**If** I see Lan, I’ll tell her. (có thể gặp)', '**When** I get up, I’ll make coffee. (chắc chắn sẽ dậy)'],
      },
    ],
    tips: ['If it **rains** ✔ — If it will rain ✘'],
    exercises: [
      { type: 'choice', q: 'If it ___ tomorrow, we will go to the beach.', options: ['is sunny', 'will be sunny', 'was sunny'], answer: 'is sunny', explain: 'if + hiện tại đơn.' },
      { type: 'choice', q: 'If you study hard, you ___ the exam.', options: ['pass', 'will pass', 'passed'], answer: 'will pass', explain: 'Mệnh đề chính → will.' },
      { type: 'gap', q: "If I ___ the bus, I'll take a taxi.", hint: 'miss', answers: ['miss'], explain: 'if + hiện tại đơn.' },
      { type: 'gap', q: "If you don't eat, you ___ hungry later.", answers: ['will be', "'ll be"], explain: 'will + be.' },
      { type: 'choice', q: '___ I wake up, I’ll make breakfast. (chắc chắn)', options: ['If', 'When', 'Because'], answer: 'When', explain: 'Chắc chắn xảy ra → when.' },
      { type: 'gap', q: "What will you do if you ___ the job?", hint: 'not / get', answers: ["don't get", 'do not get'], explain: 'Hiện tại đơn phủ định.' },
      { type: 'choice', q: 'If she calls, ___ her I’m busy.', options: ['tell', 'will tell', 'told'], answer: 'tell', explain: 'Mệnh đề chính có thể là mệnh lệnh.' },
      { type: 'gap', q: "If it ___ , we'll stay inside.", hint: 'rain', answers: ['rains'], explain: 'it → rains.' },
    ],
  },
  {
    id: 100,
    intro: 'Câu điều kiện **không có thật** (loại 2): **If + quá khứ đơn, would + V** — tình huống tưởng tượng ở hiện tại/tương lai.',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['Mệnh đề if', 'Mệnh đề chính'],
          rows: [
            ['If I had a car,', 'I would drive to work.'],
            ['If I won the lottery,', "I'd travel around the world."],
            ['If she knew the answer,', 'she would tell us.'],
          ],
        },
        examples: ["If I **had** more time, I **would learn** Japanese. (thực tế: tôi không có thời gian)", "What **would** you **do** if you **saw** a ghost?"],
      },
      {
        title: 'If I were…',
        text: 'Với **be**, có thể dùng **were** cho mọi chủ ngữ: If I **were** you, I’d take the job. (lời khuyên)',
      },
      {
        title: 'So sánh loại 1 và loại 2',
        table: {
          head: ['Loại 1 (có thể xảy ra)', 'Loại 2 (khó / không xảy ra)'],
          rows: [["If I have time, I'll come.", "If I had time, I'd come. (nhưng tôi không có)"]],
        },
      },
    ],
    tips: ['If I **would have** ✘ → If I **had** ✔', "I'd = I would"],
    exercises: [
      { type: 'choice', q: 'If I ___ rich, I would buy a big house.', options: ['am', 'were', 'will be'], answer: 'were', explain: 'Không có thật → were.' },
      { type: 'choice', q: 'If she had a car, she ___ to work.', options: ['will drive', 'would drive', 'drives'], answer: 'would drive', explain: 'would + V.' },
      { type: 'gap', q: "If I ___ you, I'd see a doctor.", hint: 'be', answers: ['were', 'was'], explain: 'If I were you.' },
      { type: 'gap', q: 'What ___ you do if you lost your phone?', answers: ['would'], explain: 'would + V.' },
      { type: 'choice', q: 'If we ___ more money, we could travel more.', options: ['have', 'had', 'would have'], answer: 'had', explain: 'if + quá khứ đơn.' },
      { type: 'gap', q: "If I knew her number, I ___ call her.", answers: ['would', "'d", 'could'], explain: 'would / could + V.' },
      { type: 'choice', q: "I don't have a dog. If I ___ a dog, I'd walk it every day.", options: ['have', 'had', 'will have'], answer: 'had', explain: 'Tình huống tưởng tượng.' },
      { type: 'gap', q: 'If it ___ warmer, we would go swimming.', hint: 'be', answers: ['were', 'was'], explain: 'Quá khứ của be.' },
    ],
  },
  {
    id: 101,
    intro: '**Mệnh đề quan hệ** bổ sung thông tin cho danh từ: **who** (người), **which** (vật), **that** (người hoặc vật).',
    sections: [
      {
        title: 'who / which / that',
        table: {
          head: ['Đại từ quan hệ', 'Dùng cho', 'Ví dụ'],
          rows: [
            ['who', 'người', 'A doctor is a person who helps sick people.'],
            ['which', 'vật', 'This is the bus which goes to the airport.'],
            ['that', 'người hoặc vật', 'The man that lives next door is a teacher.'],
          ],
        },
        examples: ['I have a friend **who** speaks five languages.', 'Where is the cake **that** was on the table?', 'A dictionary is a book **which** gives meanings of words.'],
      },
      {
        title: 'Lưu ý',
        text: 'Đại từ quan hệ thay cho he / she / it / they — **không lặp lại** chủ ngữ: the woman who **lives** here (không nói “who she lives”).',
      },
    ],
    tips: ['Không dùng which cho người: the man which ✘ → the man **who / that** ✔'],
    exercises: [
      { type: 'choice', q: 'A pilot is a person ___ flies planes.', options: ['who', 'which', 'where'], answer: 'who', explain: 'Người → who.' },
      { type: 'choice', q: 'This is the phone ___ I bought yesterday.', options: ['who', 'which', 'what'], answer: 'which', explain: 'Vật → which.' },
      { type: 'gap', q: 'I met a girl ___ lives in Singapore.', answers: ['who', 'that'], explain: 'Người → who / that.' },
      { type: 'gap', q: 'The book ___ is on the table is mine.', answers: ['which', 'that'], explain: 'Vật → which / that.' },
      { type: 'choice', q: 'The woman who ___ next door is a doctor.', options: ['lives', 'she lives', 'live'], answer: 'lives', explain: 'Không lặp chủ ngữ.' },
      { type: 'choice', q: 'Do you know the man ___ is talking to Lan?', options: ['which', 'that', 'what'], answer: 'that', explain: 'Người → that / who.' },
      { type: 'gap', q: 'A fridge is a machine ___ keeps food cold.', answers: ['which', 'that'], explain: 'Vật → which / that.' },
      { type: 'choice', q: 'Where are the photos ___ were on the wall?', options: ['who', 'that', 'what'], answer: 'that', explain: 'Vật → that / which.' },
    ],
  },
  {
    id: 102,
    intro: 'Khi đại từ quan hệ là **tân ngữ**, có thể **bỏ** who / which / that: the people **(who)** we met.',
    sections: [
      {
        title: 'Chủ ngữ hay tân ngữ?',
        table: {
          head: ['Làm chủ ngữ (không bỏ được)', 'Làm tân ngữ (bỏ được)'],
          rows: [
            ['The man who lives here… (who = he)', 'The man (who) I met… (I met him)'],
            ['The car that hit me… (that = it)', 'The car (that) I bought… (I bought it)'],
          ],
        },
        examples: ['The people **we met** were very friendly.', 'Did you like the film **you watched**?', 'The food **(that)** she cooked was delicious.'],
      },
      {
        title: 'Giới từ ở cuối',
        text: 'Giới từ thường đứng **cuối** mệnh đề quan hệ.',
        examples: ['The hotel **we stayed at** was lovely.', 'Is this the key **you were looking for**?', 'The girl **I was talking to** is my cousin.'],
      },
    ],
    tips: ['Không lặp tân ngữ: the book I read **it** ✘ → the book I read ✔'],
    exercises: [
      { type: 'choice', q: 'The cake ___ was delicious.', options: ['you made', 'you made it', 'which you made it'], answer: 'you made', explain: 'Bỏ đại từ quan hệ, không lặp it.' },
      { type: 'choice', q: 'Is this the bag you were looking ___?', options: ['for', 'at it', '–'], answer: 'for', explain: 'look for → giới từ cuối.' },
      { type: 'gap', q: 'The hotel we stayed ___ was near the beach.', answers: ['at', 'in'], explain: 'stay at / in.' },
      { type: 'choice', q: 'The man ___ lives next door is a pilot.', options: ['–', 'who', 'he'], answer: 'who', explain: 'Làm chủ ngữ → không bỏ được.' },
      { type: 'choice', q: 'I lost the book ___ you lent me.', options: ['–', 'what', 'who'], answer: '–', explain: 'Làm tân ngữ → có thể bỏ.' },
      { type: 'gap', q: 'The music we listened ___ was great.', answers: ['to'], explain: 'listen to.' },
      { type: 'choice', q: 'The people I work ___ are very nice.', options: ['with', 'with them', 'them'], answer: 'with', explain: 'work with → giới từ cuối.' },
      { type: 'gap', q: 'That’s the girl ___ I told you about.', answers: ['who', 'that', 'whom'], explain: 'who / that (hoặc có thể bỏ hẳn).' },
    ],
  },
];
