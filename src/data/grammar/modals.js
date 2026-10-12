// Động từ khuyết thiếu, câu mệnh lệnh — Units 29–36 (nội dung biên soạn riêng)
export default [
  {
    id: 29,
    intro: '**might + V** = **có thể** (không chắc chắn). Dùng để nói về khả năng ở hiện tại hoặc tương lai.',
    sections: [
      {
        title: 'Cấu trúc',
        text: '**might + V nguyên mẫu** · phủ định **might not (mightn’t)**. Dùng như nhau cho mọi chủ ngữ.',
        examples: [
          'It **might rain** this afternoon. Take an umbrella.',
          "I **might go** to the beach this weekend. I'm not sure.",
          "She **might not come** to the party. She's very busy.",
          "Call Tom. He **might know** the answer.",
        ],
      },
      {
        title: 'might và will',
        text: '**will** = chắc chắn hơn; **might** = khoảng 50%.',
        examples: ["I'll be at home tonight. (chắc chắn)", 'I **might** be at home tonight. (có thể)'],
      },
      {
        title: 'may',
        text: '**may** có nghĩa gần giống might: It **may** rain. Ngoài ra **May I…?** là cách xin phép lịch sự.',
      },
    ],
    tips: ['might + V nguyên mẫu: He might **be** late. (không nói “might is”, “might to be”)'],
    exercises: [
      { type: 'choice', q: "Take a coat. It ___ be cold later.", options: ['might', 'might to', 'mights'], answer: 'might', explain: 'might + V nguyên mẫu.' },
      { type: 'choice', q: "I'm not sure, but I ___ go to Hanoi next month.", options: ['will', 'might', 'must'], answer: 'might', explain: 'Không chắc chắn → might.' },
      { type: 'gap', q: "She ___ not be at home. Her car isn't outside.", answers: ['might', 'may'], explain: 'Có thể không ở nhà.' },
      { type: 'choice', q: 'Tom might ___ the answer.', options: ['knows', 'know', 'to know'], answer: 'know', explain: 'might + V nguyên mẫu.' },
      { type: 'gap', q: "Don't wait for me. I ___ be late.", answers: ['might', 'may'], explain: 'Khả năng → might.' },
      { type: 'choice', q: '“Are you coming tomorrow?” “I don’t know. I ___.”', options: ['might', 'might to', 'might do'], answer: 'might', explain: 'Trả lời ngắn: I might.' },
      { type: 'gap', q: "Ask Mai. She ___ have a pen.", answers: ['might', 'may'], explain: 'Có thể có.' },
      { type: 'choice', q: 'The shop ___ be open on Sunday. Call them first.', options: ['might not', "doesn't might", 'not might'], answer: 'might not', explain: 'Phủ định: might not.' },
    ],
  },
  {
    id: 30,
    intro: '**can** = có thể (khả năng, được phép); **could** = quá khứ của can, hoặc cách hỏi lịch sự.',
    sections: [
      {
        title: 'Khả năng',
        text: '**can / can’t + V** ở hiện tại; **could / couldn’t + V** ở quá khứ.',
        examples: ['I **can** swim, but I **can’t** dive.', '**Can** you speak Korean?', 'When I was five, I **could** read.', "We **couldn't** find a taxi last night."],
      },
      {
        title: 'Xin phép và yêu cầu',
        text: '**Can I…?** xin phép; **Can you…? / Could you…?** nhờ ai làm gì (**could** lịch sự hơn).',
        examples: ['**Can I** use your phone?', '**Could you** open the door, please?', '**Could I** have some water?'],
      },
    ],
    tips: ['can + V nguyên mẫu: She can **swim**. (không nói “can swims”, “can to swim”)', 'Quá khứ của can là **could**: I couldn’t sleep last night.'],
    exercises: [
      { type: 'choice', q: 'My grandfather ___ speak French when he was young.', options: ['can', 'could', 'cans'], answer: 'could', explain: 'Quá khứ → could.' },
      { type: 'choice', q: '___ you help me with this box, please?', options: ['Could', 'Must', 'Might'], answer: 'Could', explain: 'Nhờ lịch sự → Could you…?' },
      { type: 'gap', q: "I'm sorry, I ___ come tomorrow. I'm busy.", answers: ["can't", 'cannot', 'can not'], explain: 'Không thể → can’t.' },
      { type: 'choice', q: 'She can ___ the guitar very well.', options: ['plays', 'play', 'to play'], answer: 'play', explain: 'can + V nguyên mẫu.' },
      { type: 'gap', q: 'I looked everywhere but I ___ find my keys.', answers: ["couldn't", 'could not'], explain: 'Quá khứ phủ định → couldn’t.' },
      { type: 'gap', q: '___ I sit here?', answers: ['can', 'could', 'may'], explain: 'Xin phép → Can / Could I…?' },
      { type: 'choice', q: '“Can you drive?” “Yes, I ___.”', options: ['can', 'do', 'could'], answer: 'can', explain: 'Trả lời ngắn: Yes, I can.' },
      { type: 'gap', q: "It was so noisy that we ___ hear anything.", answers: ["couldn't", 'could not'], explain: 'Quá khứ → couldn’t.' },
    ],
  },
  {
    id: 31,
    intro: '**must** = phải (cần thiết); **mustn’t** = không được (cấm); **don’t need to** = không cần.',
    sections: [
      {
        title: 'must',
        text: '**must + V**: việc cần thiết, bắt buộc (thường do người nói thấy cần). Quá khứ dùng **had to**.',
        examples: ['I **must** go to the bank today.', 'You **must** wear a seat belt.', 'We **had to** walk home last night. (quá khứ)'],
      },
      {
        title: "mustn't và don't need to",
        table: {
          head: ['', 'Nghĩa', 'Ví dụ'],
          rows: [
            ["mustn't", 'cấm, không được làm', "You mustn't smoke here."],
            ["don't need to", 'không cần thiết (làm cũng được)', "You don't need to come early."],
          ],
        },
        examples: ["You **mustn't** tell anybody. It's a secret.", "We **don't need to** hurry. We have plenty of time.", "She **doesn't need to** work tomorrow."],
      },
    ],
    tips: ["mustn't ≠ don't need to: “You mustn't go” = cấm đi; “You don't need to go” = không cần đi.", 'must + V nguyên mẫu (không có to).'],
    exercises: [
      { type: 'choice', q: "You ___ park here. It's not allowed.", options: ["mustn't", "don't need to", 'must'], answer: "mustn't", explain: 'Bị cấm → mustn’t.' },
      { type: 'choice', q: "You ___ bring food. We have lots.", options: ["mustn't", "don't need to", 'must'], answer: "don't need to", explain: 'Không cần thiết.' },
      { type: 'gap', q: 'I ___ remember to call my mum tonight.', answers: ['must'], explain: 'Việc cần nhớ → must.' },
      { type: 'choice', q: 'Students must ___ their phones off in the exam.', options: ['turn', 'to turn', 'turning'], answer: 'turn', explain: 'must + V nguyên mẫu.' },
      { type: 'gap', q: "The bus didn't come, so we ___ to walk.", answers: ['had'], explain: 'Quá khứ của must → had to.' },
      { type: 'gap', q: "Tom ___ need to work tomorrow. It's Sunday.", answers: ["doesn't", 'does not'], explain: 'he → doesn’t need to.' },
      { type: 'choice', q: "Be careful! You ___ touch that. It's hot.", options: ["mustn't", "don't need to", "needn't to"], answer: "mustn't", explain: 'Cấm vì nguy hiểm.' },
      { type: 'gap', q: "It's a secret. You ___ tell anyone.", answers: ["mustn't", 'must not'], explain: 'Không được kể.' },
    ],
  },
  {
    id: 32,
    intro: '**should + V** = **nên**. Dùng để **khuyên** hoặc nói điều gì là **đúng, tốt** nên làm.',
    sections: [
      {
        title: 'Cấu trúc',
        text: '**should / shouldn’t + V nguyên mẫu** cho mọi chủ ngữ. Câu hỏi: **Should I…?**',
        examples: ['You look tired. You **should** go to bed.', "You **shouldn't** eat so much sugar.", '**Should** I take a taxi or a bus?', 'What **should** we do?'],
      },
      {
        title: 'I think / I don’t think … should',
        text: 'Đưa ra ý kiến nhẹ nhàng.',
        examples: ['I think you **should** apologise.', "I **don't think** you **should** go out tonight. (không nói “I think you shouldn't…”)"],
      },
    ],
    tips: ['should + V nguyên mẫu (không có to): You should **see** a doctor.', 'should nhẹ hơn must.'],
    exercises: [
      { type: 'choice', q: "You've got a bad cough. You ___ see a doctor.", options: ['should', 'shouldn’t', 'should to'], answer: 'should', explain: 'Lời khuyên → should.' },
      { type: 'gap', q: "You ___ drive so fast. It's dangerous.", answers: ["shouldn't", 'should not'], explain: 'Khuyên không nên.' },
      { type: 'choice', q: 'What time ___ we leave?', options: ['should', 'do should', 'should to'], answer: 'should', explain: 'Hỏi ý kiến: What time should we…?' },
      { type: 'choice', q: 'I think you should ___ to her.', options: ['apologise', 'to apologise', 'apologising'], answer: 'apologise', explain: 'should + V nguyên mẫu.' },
      { type: 'gap', q: 'I don’t think you ___ buy that car. It’s too expensive.', answers: ['should'], explain: 'I don’t think + should.' },
      { type: 'gap', q: "Children ___ watch TV all day.", answers: ["shouldn't", 'should not'], explain: 'Không nên.' },
      { type: 'choice', q: 'It’s a great film. You ___ see it.', options: ['should', 'shouldn’t', 'should not to'], answer: 'should', explain: 'Khuyên nên xem.' },
      { type: 'gap', q: '___ I tell her the truth?', answers: ['should'], explain: 'Hỏi lời khuyên: Should I…?' },
    ],
  },
  {
    id: 33,
    intro: '**have to + V** = **phải** (thường do quy định, hoàn cảnh bắt buộc). Có đủ các thì.',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['', 'Hiện tại', 'Quá khứ'],
          rows: [
            ['Khẳng định', 'I / you have to · he / she has to', 'had to'],
            ['Phủ định', "don't / doesn't have to", "didn't have to"],
            ['Câu hỏi', 'Do / Does … have to?', 'Did … have to?'],
          ],
        },
        examples: ['I **have to** get up at 6 for work.', 'She **has to** wear a uniform at school.', '**Did** you **have to** wait long?', "We **don't have to** pay. It's free."],
      },
      {
        title: "don't have to = không cần",
        text: '**don’t have to** = không bắt buộc (khác với **mustn’t** = cấm).',
        examples: ["You **don't have to** come. (không cần đến)", "You **mustn't** come. (không được đến)"],
      },
    ],
    tips: ['he / she / it → **has to**.', 'Câu hỏi/phủ định dùng **do/does/did**: Does he have to…? (không nói “Has he to…?”)'],
    exercises: [
      { type: 'choice', q: 'My brother ___ work on Saturdays.', options: ['have to', 'has to', 'haves to'], answer: 'has to', explain: 'he → has to.' },
      { type: 'gap', q: 'We ___ to wear a tie at work. It’s a rule.', answers: ['have'], explain: 'we → have to.' },
      { type: 'gap', q: '___ you have to work late yesterday?', answers: ['did'], explain: 'Quá khứ: Did … have to?' },
      { type: 'choice', q: "Tomorrow's a holiday, so I ___ get up early.", options: ["don't have to", "mustn't", "haven't to"], answer: "don't have to", explain: 'Không cần dậy sớm.' },
      { type: 'gap', q: 'I missed the bus, so I ___ to walk.', answers: ['had'], explain: 'Quá khứ → had to.' },
      { type: 'choice', q: '___ she have to take the exam again?', options: ['Does', 'Has', 'Do'], answer: 'Does', explain: 'she → Does … have to?' },
      { type: 'gap', q: "You ___ have to pay for the drinks. They're free.", answers: ["don't", 'do not'], explain: 'Không cần trả tiền.' },
      { type: 'choice', q: 'What time do you ___ leave?', options: ['have to', 'has to', 'must to'], answer: 'have to', explain: 'do you + have to.' },
    ],
  },
  {
    id: 34,
    intro: '**Would you like…?** để **mời / đề nghị**; **I’d like…** = I would like (tôi muốn) — cách nói lịch sự.',
    sections: [
      {
        title: 'Would you like + danh từ / to V',
        examples: ['**Would you like** some tea?', '**Would you like to** come to dinner on Friday?', "“Would you like a sandwich?” “Yes, please.” / “No, thank you.”"],
      },
      {
        title: "I'd like… = tôi muốn (lịch sự)",
        text: "**I'd like + danh từ** hoặc **I'd like to + V**.",
        examples: ["I**'d like** a coffee, please.", "I**'d like to** book a table for two.", "What **would** you **like to** do this evening?"],
      },
      {
        title: 'Would you like…? và Do you like…?',
        table: {
          head: ['Would you like…?', 'Do you like…?'],
          rows: [
            ['Bạn có muốn… không? (lời mời bây giờ)', 'Bạn có thích… không? (sở thích chung)'],
            ['Would you like a coffee?', 'Do you like coffee?'],
          ],
        },
      },
    ],
    tips: ["I'd like **to go**. ✔ — I'd like going. ✘", 'Mời ai đó → **Would you like**…? (không nói “Do you like a drink?”)'],
    exercises: [
      { type: 'choice', q: '___ some cake?', options: ['Would you like', 'Do you like', 'Are you like'], answer: 'Would you like', explain: 'Mời → Would you like…?' },
      { type: 'choice', q: "I'd like ___ a room for tonight.", options: ['book', 'to book', 'booking'], answer: 'to book', explain: "I'd like + to V." },
      { type: 'choice', q: '___ chocolate? — Yes, I love it.', options: ['Do you like', 'Would you like', 'Like you'], answer: 'Do you like', explain: 'Hỏi sở thích chung.' },
      { type: 'gap', q: 'Would you like ___ come with us?', answers: ['to'], explain: 'Would you like + to V.' },
      { type: 'gap', q: 'I ___ like a glass of water, please.', answers: ['would', "'d"], explain: "I'd like = I would like." },
      { type: 'choice', q: 'What would you like ___ for dinner?', options: ['to eat', 'eating', 'eat'], answer: 'to eat', explain: 'would like + to V.' },
      { type: 'gap', q: '“Would you like some more rice?” “No, thank ___.”', answers: ['you'], explain: 'Từ chối lịch sự: No, thank you.' },
      { type: 'choice', q: "Where ___ to go on holiday?", options: ['would you like', 'do you like', 'you would like'], answer: 'would you like', explain: 'Hỏi mong muốn: Where would you like to…?' },
    ],
  },
  {
    id: 35,
    intro: '**Câu mệnh lệnh** dùng động từ nguyên mẫu để ra lệnh, hướng dẫn, khuyên. **Let’s + V** để rủ cùng làm.',
    sections: [
      {
        title: 'Mệnh lệnh khẳng định và phủ định',
        text: '**V nguyên mẫu …!** / **Don’t + V …!** (không có chủ ngữ).',
        examples: ['**Open** your books, please.', '**Be** careful!', "**Don't** touch that!", "**Don't be** late."],
      },
      {
        title: "Let's = Let us",
        text: "**Let's + V** (rủ: chúng ta hãy…). Phủ định: **Let's not + V**.",
        examples: ["It's hot. **Let's go** for a swim.", "**Let's** take a taxi.", "**Let's not** go out tonight. I'm tired."],
      },
    ],
    tips: ["Let's **go**. ✔ — Let's to go. / Let's going. ✘", "Don't **be** noisy. ✔ — Don't noisy. ✘"],
    exercises: [
      { type: 'choice', q: '___ the door, please. It’s cold.', options: ['Close', 'Closing', 'You closing'], answer: 'Close', explain: 'Mệnh lệnh: V nguyên mẫu.' },
      { type: 'choice', q: "___ late for the meeting!", options: ["Don't be", "Don't", 'Not be'], answer: "Don't be", explain: "Don't + be + tính từ." },
      { type: 'gap', q: "I'm hungry. ___ have lunch.", answers: ["let's", 'let us'], explain: "Rủ → Let's." },
      { type: 'choice', q: "Let's ___ a film tonight.", options: ['watch', 'to watch', 'watching'], answer: 'watch', explain: "Let's + V nguyên mẫu." },
      { type: 'gap', q: '___ worry. Everything will be fine.', answers: ["don't", 'do not'], explain: 'Mệnh lệnh phủ định.' },
      { type: 'gap', q: "It's raining. Let's ___ go out.", answers: ['not'], explain: "Let's not + V." },
      { type: 'choice', q: '___ quiet! The baby is sleeping.', options: ['Be', 'Are', 'Being'], answer: 'Be', explain: 'Mệnh lệnh với tính từ: Be…!' },
      { type: 'gap', q: '___ forget your passport!', answers: ["don't", 'do not'], explain: 'Đừng quên.' },
    ],
  },
  {
    id: 36,
    intro: '**used to + V** diễn tả **thói quen hoặc trạng thái trong quá khứ** mà **bây giờ không còn nữa**.',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['', 'Cấu trúc', 'Ví dụ'],
          rows: [
            ['Khẳng định', 'used to + V', 'I used to play football.'],
            ['Phủ định', "didn't use to + V", "She didn't use to like coffee."],
            ['Câu hỏi', 'Did + S + use to + V?', 'Did you use to live here?'],
          ],
        },
        examples: ['I **used to** have long hair. (bây giờ tóc ngắn)', 'We **used to** live in the countryside.', 'There **used to** be a cinema here.'],
      },
      {
        title: 'Lưu ý',
        text: 'Trong phủ định và câu hỏi viết **use to** (không có d) vì đã có **did**. **used to** chỉ dùng cho quá khứ; thói quen hiện tại dùng hiện tại đơn.',
      },
    ],
    tips: ["Did you **use** to…? ✔ — Did you used to…? ✘", 'Hiện tại: I usually play tennis. (không nói “I use to play tennis”)'],
    exercises: [
      { type: 'choice', q: 'I ___ play the piano when I was a child.', options: ['used to', 'use to', 'was used to'], answer: 'used to', explain: 'Thói quen quá khứ → used to.' },
      { type: 'gap', q: 'Did you ___ to walk to school?', answers: ['use'], explain: 'Câu hỏi: Did … use to?' },
      { type: 'gap', q: "She didn't ___ to eat vegetables, but now she loves them.", answers: ['use'], explain: "didn't use to." },
      { type: 'choice', q: 'There used to ___ a park here.', options: ['be', 'being', 'is'], answer: 'be', explain: 'used to + V nguyên mẫu.' },
      { type: 'choice', q: 'My dad ___ smoke, but he stopped ten years ago.', options: ['used to', 'uses to', 'is used'], answer: 'used to', explain: 'Bây giờ không còn → used to.' },
      { type: 'gap', q: 'We ___ to live in Da Lat. Now we live in Saigon.', answers: ['used'], explain: 'Khẳng định: used to.' },
      { type: 'choice', q: 'Nowadays I ___ to work by bike.', options: ['go', 'used to go', 'use to go'], answer: 'go', explain: 'Thói quen hiện tại → hiện tại đơn.' },
      { type: 'gap', q: '“Did you use to have a dog?” “Yes, I ___.”', answers: ['did'], explain: 'Trả lời ngắn: Yes, I did.' },
    ],
  },
];
