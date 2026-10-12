// Go, get, do, make, have — Units 55–58 (nội dung biên soạn riêng)
export default [
  {
    id: 55,
    intro: '**go** đi với nhiều cấu trúc: **go to** + nơi chốn, **go on** + chuyến đi, **go for** + hoạt động, **go + V-ing** (hoạt động giải trí).',
    sections: [
      {
        title: 'Các cấu trúc với go',
        table: {
          head: ['Cấu trúc', 'Ví dụ'],
          rows: [
            ['go to + nơi chốn / sự kiện', 'go to school, go to a party, go to the doctor'],
            ['go on + chuyến đi', 'go on holiday, go on a trip, go on a tour'],
            ['go for + hoạt động', 'go for a walk, go for a swim, go for a drink'],
            ['go + V-ing', 'go shopping, go swimming, go fishing, go camping'],
          ],
        },
        examples: ['We **went to** the beach on Sunday.', "They're **going on** holiday next week.", "Let's **go for** a walk.", 'I **go swimming** every morning.'],
      },
      {
        title: 'go home',
        text: 'Không dùng to trước **home**: I **went home** early. (không nói “went to home”)',
      },
    ],
    tips: ['go shopping ✔ — go to shopping ✘', 'go home ✔ — go to home ✘'],
    exercises: [
      { type: 'choice', q: "Let's go ___ a swim.", options: ['to', 'for', 'on'], answer: 'for', explain: 'go for a swim.' },
      { type: 'choice', q: 'We are going ___ holiday in July.', options: ['to', 'for', 'on'], answer: 'on', explain: 'go on holiday.' },
      { type: 'gap', q: 'Do you often go ___? — Yes, I love buying clothes.', hint: 'shop', answers: ['shopping'], explain: 'go + V-ing.' },
      { type: 'gap', q: "I'm tired. I want to go ___.", answers: ['home'], explain: 'go home (không có to).' },
      { type: 'choice', q: 'She went ___ the dentist yesterday.', options: ['to', 'for', 'on'], answer: 'to', explain: 'go to + nơi chốn.' },
      { type: 'gap', q: 'Last summer we went ___ in the mountains.', hint: 'camp', answers: ['camping'], explain: 'go camping.' },
      { type: 'choice', q: 'Would you like to go ___ a drink after work?', options: ['for', 'to', 'on'], answer: 'for', explain: 'go for a drink.' },
      { type: 'gap', q: 'The children went ___ a school trip to the museum.', answers: ['on'], explain: 'go on a trip.' },
    ],
  },
  {
    id: 56,
    intro: '**get** là động từ đa nghĩa: **nhận / mua / lấy**, **trở nên**, **đến / về tới**.',
    sections: [
      {
        title: 'get + danh từ = nhận, mua, lấy',
        examples: ['I **got** a letter from my friend. (nhận)', 'Where can I **get** a ticket? (mua)', 'Can you **get** me some water? (lấy)'],
      },
      {
        title: 'get + tính từ = trở nên',
        examples: ["It's **getting dark**.", "I'm **getting hungry**.", 'They **got married** last year.', "Don't **get angry**."],
      },
      {
        title: 'get to / get home = đến, về tới',
        examples: ['How do you **get to** work?', 'What time did you **get home**?', 'We **got to** the airport at 6.'],
      },
      {
        title: 'Một số cụm khác',
        text: '**get up** (thức dậy), **get on / off** (lên / xuống xe buýt, tàu), **get in / out of** (lên / ra khỏi xe hơi).',
      },
    ],
    tips: ['get home ✔ — get to home ✘', 'get married (cưới) · get dressed (mặc đồ)'],
    exercises: [
      { type: 'choice', q: 'It’s ___ cold. Close the window.', options: ['getting', 'going', 'doing'], answer: 'getting', explain: 'get + tính từ = trở nên.' },
      { type: 'gap', q: 'What time do you usually ___ up?', answers: ['get'], explain: 'get up = thức dậy.' },
      { type: 'gap', q: 'How do you ___ to school? — By bike.', answers: ['get'], explain: 'get to = đến.' },
      { type: 'choice', q: 'They got ___ in 2020.', options: ['marry', 'married', 'marriage'], answer: 'married', explain: 'get married.' },
      { type: 'choice', q: 'I got ___ the bus at the wrong stop.', options: ['off', 'out', 'down'], answer: 'off', explain: 'get off a bus.' },
      { type: 'gap', q: 'We ___ home very late last night.', answers: ['got'], explain: 'Quá khứ của get → got.' },
      { type: 'choice', q: 'Where did you ___ that jacket? It’s nice.', options: ['get', 'go', 'make'], answer: 'get', explain: 'get = mua.' },
      { type: 'gap', q: 'Hurry up and get ___ the car!', answers: ['in', 'into'], explain: 'get in(to) a car.' },
    ],
  },
  {
    id: 57,
    intro: '**do** thường dùng cho **công việc, hoạt động chung**; **make** dùng cho việc **tạo ra / làm ra** một thứ.',
    sections: [
      {
        title: 'Cụm thường gặp',
        table: {
          head: ['do', 'make'],
          rows: [
            ['do homework / do the housework', 'make a cake / make dinner'],
            ['do exercise / do a course', 'make a mistake / make a decision'],
            ['do the shopping / do the washing', 'make a phone call / make a noise'],
            ['do a job / do your best', 'make friends / make money / make a plan'],
          ],
        },
        examples: ['I **did** my homework after dinner.', 'She **made** a cake for my birthday.', "Don't **make** so much noise!", 'What do you **do**? (bạn làm nghề gì?)'],
      },
      {
        title: 'Hỏi chung chung',
        text: 'Hỏi về hành động không xác định dùng **do**: What are you **doing**? / What did you **do** at the weekend?',
      },
    ],
    tips: ['make a mistake ✔ — do a mistake ✘', 'do homework ✔ — make homework ✘'],
    exercises: [
      { type: 'choice', q: "I'm sorry, I ___ a mistake.", options: ['did', 'made', 'had'], answer: 'made', explain: 'make a mistake.' },
      { type: 'choice', q: 'Have you ___ your homework?', options: ['done', 'made', 'got'], answer: 'done', explain: 'do homework.' },
      { type: 'gap', q: 'Who ___ this beautiful dress?', hint: 'quá khứ', answers: ['made'], explain: 'Tạo ra → make.' },
      { type: 'gap', q: 'I ___ yoga every morning.', answers: ['do'], explain: 'do yoga / exercise.' },
      { type: 'choice', q: 'We need to ___ a decision soon.', options: ['do', 'make', 'have'], answer: 'make', explain: 'make a decision.' },
      { type: 'choice', q: 'Who usually ___ the shopping in your family?', options: ['does', 'makes', 'has'], answer: 'does', explain: 'do the shopping.' },
      { type: 'gap', q: 'Could I ___ a phone call?', answers: ['make'], explain: 'make a phone call.' },
      { type: 'gap', q: '“What does your father ___?” “He’s an engineer.”', answers: ['do'], explain: 'Hỏi nghề nghiệp: What does he do?' },
    ],
  },
  {
    id: 58,
    intro: '**have** ngoài nghĩa “có” còn dùng trong nhiều cụm diễn tả **hành động**: have breakfast, have a shower, have a good time…',
    sections: [
      {
        title: 'have + danh từ (hành động)',
        table: {
          head: ['Chủ đề', 'Ví dụ'],
          rows: [
            ['Ăn uống', 'have breakfast / lunch / dinner, have a coffee'],
            ['Chăm sóc', 'have a shower / a bath / a rest / a sleep'],
            ['Trải nghiệm', 'have a good time / a party / a holiday / a problem'],
            ['Khác', 'have a look / a chat / a try / a baby'],
          ],
        },
        examples: ['We **had** a great time at the party.', "I'm **having** a shower. Can you call back?", '**Have** a look at this!'],
      },
      {
        title: 'Dạng tiếp diễn và câu hỏi',
        text: 'Với nghĩa hành động, **have** dùng được ở dạng tiếp diễn và câu hỏi với **do**: Did you **have** a good holiday? She’s **having** lunch.',
      },
    ],
    tips: ['Không dùng have got trong các cụm này: I **have** breakfast at 7. (không nói “I’ve got breakfast”)'],
    exercises: [
      { type: 'choice', q: 'What time do you usually ___ lunch?', options: ['have', 'make', 'do'], answer: 'have', explain: 'have lunch.' },
      { type: 'gap', q: 'Did you ___ a good holiday?', answers: ['have'], explain: 'have a holiday.' },
      { type: 'gap', q: "Don't call him now. He's ___ a shower.", answers: ['having'], explain: 'have a shower → tiếp diễn.' },
      { type: 'choice', q: 'Can I ___ a look at your photos?', options: ['have', 'make', 'get on'], answer: 'have', explain: 'have a look.' },
      { type: 'gap', q: 'We ___ a party last Saturday.', answers: ['had'], explain: 'Quá khứ → had.' },
      { type: 'choice', q: 'I’m tired. I need to ___ a rest.', options: ['have', 'do', 'go'], answer: 'have', explain: 'have a rest.' },
      { type: 'choice', q: 'Enjoy the trip. ___ a good time!', options: ['Have', 'Make', 'Do'], answer: 'Have', explain: 'have a good time.' },
      { type: 'gap', q: "I'm ___ a problem with my computer.", answers: ['having'], explain: 'have a problem.' },
    ],
  },
];
