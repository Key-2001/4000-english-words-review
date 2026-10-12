// Tương lai — Units 25–28 (nội dung biên soạn riêng)
export default [
  {
    id: 25,
    intro: 'Dùng **hiện tại tiếp diễn** để nói về **kế hoạch đã sắp xếp** trong tương lai (đã hẹn, đã đặt chỗ…).',
    sections: [
      {
        title: 'Kế hoạch đã sắp xếp',
        text: '**am / is / are + V-ing** + thời gian tương lai (tomorrow, tonight, next week…).',
        examples: [
          "I**'m meeting** Anna tomorrow evening.",
          "We**'re flying** to Bangkok on Friday.",
          'What **are** you **doing** this weekend?',
          "He **isn't coming** to the party tonight.",
        ],
      },
      {
        title: 'Lịch trình cố định: hiện tại đơn',
        text: 'Với **giờ tàu xe, lịch chiếu phim, thời khoá biểu** dùng hiện tại đơn.',
        examples: ['The train **leaves** at 7.30 tomorrow.', 'What time **does** the concert **start**?'],
      },
    ],
    tips: ['Kế hoạch cá nhân → I’m doing; lịch trình chung → it starts / leaves.', 'Không dùng hiện tại đơn cho kế hoạch cá nhân: I play tennis tomorrow. ✘'],
    exercises: [
      { type: 'choice', q: 'I ___ my grandmother on Sunday.', options: ['visit', 'am visiting', 'visited'], answer: 'am visiting', explain: 'Kế hoạch đã sắp xếp.' },
      { type: 'choice', q: 'The film ___ at 8 pm tonight.', options: ['starts', 'is starting', 'start'], answer: 'starts', explain: 'Lịch chiếu → hiện tại đơn.' },
      { type: 'gap', q: 'What ___ you doing tomorrow evening?', answers: ['are'], explain: 'are + you + V-ing.' },
      { type: 'gap', q: "We ___ dinner with friends on Saturday.", hint: 'have', answers: ['are having', "'re having"], explain: 'Kế hoạch đã hẹn.' },
      { type: 'gap', q: "Sorry, I can't come. I ___ late tonight.", hint: 'work', answers: ['am working', "'m working"], explain: 'Kế hoạch.' },
      { type: 'choice', q: 'What time ___ your flight leave?', options: ['does', 'is', 'do'], answer: 'does', explain: 'Lịch bay → hiện tại đơn.' },
      { type: 'gap', q: 'Tom ___ to the meeting tomorrow. He’s ill.', hint: 'not / come', answers: ["isn't coming", 'is not coming', "'s not coming"], explain: 'Phủ định tiếp diễn.' },
      { type: 'choice', q: 'The museum ___ at 9 every day.', options: ['opens', 'is opening', 'open'], answer: 'opens', explain: 'Giờ mở cửa cố định.' },
    ],
  },
  {
    id: 26,
    intro: '**be going to + V** dùng cho **dự định** (đã quyết định từ trước) và **dự đoán** dựa trên dấu hiệu hiện tại.',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['', 'Cấu trúc', 'Ví dụ'],
          rows: [
            ['Khẳng định', 'am / is / are going to + V', "I'm going to buy a car."],
            ['Phủ định', "'m not / isn't / aren't going to + V", "She isn't going to come."],
            ['Câu hỏi', 'Am / Is / Are + S + going to + V?', 'Are you going to call him?'],
          ],
        },
      },
      {
        title: 'Dự định',
        examples: ["I**'m going to** learn to drive next year.", 'What **are** you **going to** wear tonight?'],
      },
      {
        title: 'Dự đoán có căn cứ',
        text: 'Thấy dấu hiệu ở hiện tại → nói điều sắp xảy ra.',
        examples: ["Look at those black clouds. It**'s going to** rain.", 'Be careful! You**’re going to** fall!'],
      },
    ],
    tips: ['Với “go” có thể nói: I’m going to go… hoặc ngắn gọn I’m going to the cinema tonight.'],
    exercises: [
      { type: 'choice', q: "I've decided. I ___ study medicine.", options: ['will', 'am going to', 'going to'], answer: 'am going to', explain: 'Dự định đã quyết từ trước.' },
      { type: 'choice', q: "Look at the sky! It ___ rain.", options: ['is going to', 'goes to', 'will going to'], answer: 'is going to', explain: 'Dự đoán dựa vào dấu hiệu.' },
      { type: 'gap', q: 'What ___ you going to do after school?', answers: ['are'], explain: 'are you going to…?' },
      { type: 'gap', q: 'She ___ going to buy that dress. It’s too expensive.', answers: ["isn't", 'is not'], explain: 'Phủ định: isn’t going to.' },
      { type: 'gap', q: 'We are going ___ paint the kitchen.', answers: ['to'], explain: 'going to + V.' },
      { type: 'choice', q: 'Careful! That glass ___ fall.', options: ['is going to', 'goes to', 'is go to'], answer: 'is going to', explain: 'Dấu hiệu rõ ràng.' },
      { type: 'gap', q: '“Are they going to sell the house?” “Yes, they ___.”', answers: ['are'], explain: 'Trả lời ngắn: Yes, they are.' },
      { type: 'choice', q: 'I ___ to call him tonight.', options: ['am going', 'going', 'go'], answer: 'am going', explain: 'am going to + V.' },
    ],
  },
  {
    id: 27,
    intro: '**will + V** dùng để **dự đoán** hoặc nói về sự việc tương lai (thường kèm I think, probably, I’m sure…).',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['', 'Cấu trúc', 'Ví dụ'],
          rows: [
            ['Khẳng định', "will ('ll) + V", "It'll be cold tomorrow."],
            ['Phủ định', "won't (will not) + V", "I won't be late."],
            ['Câu hỏi', 'Will + S + V?', 'Will you be at home?'],
          ],
        },
      },
      {
        title: 'Dự đoán',
        examples: ['I think Vietnam **will win** the match.', "She **'ll** probably **be** here at 8.", "Don't worry. The test **won't be** difficult.", 'Where **will** you **be** this time next year?'],
      },
      {
        title: 'shall',
        text: '**shall** chỉ dùng với **I / we**, chủ yếu trong câu hỏi đề nghị/gợi ý (xem Unit 28).',
      },
    ],
    tips: ['will + V nguyên mẫu: It will **rain**. (không nói “will rains”)', "Dự định đã quyết từ trước → dùng **going to**, không dùng will."],
    exercises: [
      { type: 'choice', q: 'I think it ___ sunny tomorrow.', options: ['is', 'will be', 'will is'], answer: 'will be', explain: 'Dự đoán với I think → will.' },
      { type: 'gap', q: "Don't worry. I ___ forget.", hint: 'not', answers: ["won't", 'will not'], explain: 'won’t = will not.' },
      { type: 'gap', q: '___ you be at home this evening?', answers: ['will'], explain: 'Câu hỏi: Will + S + V?' },
      { type: 'choice', q: 'People ___ live on Mars one day.', options: ['will', 'are', 'going'], answer: 'will', explain: 'Dự đoán tương lai.' },
      { type: 'choice', q: 'She will ___ 30 next month.', options: ['is', 'be', 'being'], answer: 'be', explain: 'will + V nguyên mẫu.' },
      { type: 'gap', q: "I'm sure you ___ pass the exam.", answers: ['will', "'ll"], explain: 'I’m sure + will.' },
      { type: 'choice', q: 'Ask Lan. She ___ probably know the answer.', options: ['will', 'is', 'does'], answer: 'will', explain: 'probably + will.' },
      { type: 'gap', q: "The shop ___ be open tomorrow. It's a holiday.", answers: ["won't", 'will not'], explain: 'Phủ định: won’t.' },
    ],
  },
  {
    id: 28,
    intro: 'Dùng **will** cho **quyết định ngay lúc nói**, **lời đề nghị, lời hứa**; **Shall I / we…?** để đề nghị hoặc gợi ý.',
    sections: [
      {
        title: 'Quyết định tức thời',
        examples: ["“The phone's ringing.” “I**'ll** answer it.”", "“I'm thirsty.” “I**'ll get** you some water.”", "I think I**'ll have** the chicken. (khi gọi món)"],
      },
      {
        title: 'Đề nghị, lời hứa, từ chối',
        examples: ['I**’ll help** you with your bags.', "I promise I **won't tell** anybody.", "The car **won't start**. (từ chối hoạt động)"],
      },
      {
        title: 'Shall I…? / Shall we…?',
        text: 'Hỏi ý kiến người khác: **Shall I…?** (tôi làm… nhé?) / **Shall we…?** (chúng ta… nhé?).',
        examples: ["It's hot. **Shall I** open the window?", '**Shall we** go out for dinner?', 'What time **shall we** meet?'],
      },
    ],
    tips: ['Quyết định lúc nói → **will**; đã quyết định trước → **going to**.', 'Không nói “Will I open the window?” để đề nghị → **Shall I**…?'],
    exercises: [
      { type: 'choice', q: '“There’s no milk.” “Oh, I ___ buy some.”', options: ['will', 'am going to', 'shall'], answer: 'will', explain: 'Quyết định ngay lúc nói.' },
      { type: 'choice', q: '___ I carry your bag?', options: ['Will', 'Shall', 'Do'], answer: 'Shall', explain: 'Đề nghị giúp → Shall I…?' },
      { type: 'gap', q: '___ we go to the cinema tonight?', answers: ['shall'], explain: 'Gợi ý → Shall we…?' },
      { type: 'gap', q: "I promise I ___ be late again.", answers: ["won't", 'will not'], explain: 'Lời hứa phủ định.' },
      { type: 'choice', q: '“It’s cold in here.” “I ___ close the window.”', options: ['will', 'am', 'shall to'], answer: 'will', explain: 'Quyết định tức thời.' },
      { type: 'gap', q: "This door ___ open. I think it's locked.", answers: ["won't", 'will not'], explain: 'Vật “không chịu” hoạt động.' },
      { type: 'choice', q: 'What time ___ we meet?', options: ['shall', 'do', 'are'], answer: 'shall', explain: 'Hỏi ý kiến → shall we.' },
      { type: 'gap', q: "“Can someone help me?” “I ___ help you.”", answers: ['will', "'ll"], explain: 'Đề nghị ngay lúc nói.' },
    ],
  },
];
