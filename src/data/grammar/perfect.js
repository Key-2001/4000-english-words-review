// Hiện tại hoàn thành — Units 15–20 (nội dung biên soạn riêng)
export default [
  {
    id: 15,
    intro: 'Hiện tại hoàn thành (**have / has + V3**) nối **quá khứ với hiện tại**: một việc đã xảy ra và **kết quả còn ở hiện tại**.',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['Chủ ngữ', 'Khẳng định', 'Phủ định', 'Câu hỏi'],
          rows: [
            ['I / we / you / they', "have ('ve) + V3", "haven't + V3", 'Have you + V3?'],
            ['he / she / it', "has ('s) + V3", "hasn't + V3", 'Has she + V3?'],
          ],
        },
        text: '**V3** (quá khứ phân từ): có quy tắc thêm -ed (finished, opened); bất quy tắc phải học thuộc (go → gone, see → seen, lose → lost, break → broken).',
      },
      {
        title: 'Cách dùng',
        text: 'Việc vừa xảy ra/đã xảy ra **không nói rõ thời gian**, và quan trọng là kết quả bây giờ.',
        examples: [
          "I**'ve lost** my keys. (bây giờ tôi không có chìa khoá)",
          "She **has broken** her arm.",
          "They**'ve gone** home. (họ không còn ở đây)",
          "**Has** the film **started**?",
        ],
      },
      {
        title: 'gone và been',
        text: '**has gone to** = đã đi và **chưa về**; **has been to** = đã từng đến và **đã quay về**.',
        examples: ['Anna **has gone** to Paris. (cô ấy đang ở Paris)', 'Anna **has been** to Paris twice. (đã đi và đã về)'],
      },
    ],
    tips: ['he / she / it → **has** + V3; dạng rút gọn **’s** (She’s finished).', 'Không dùng hiện tại hoàn thành với thời gian xác định trong quá khứ (yesterday, last week).'],
    exercises: [
      { type: 'choice', q: 'I ___ my homework. Can I go out now?', options: ['have finished', 'has finished', 'finish'], answer: 'have finished', explain: 'I → have + V3.' },
      { type: 'gap', q: 'She ___ her passport. She can’t find it.', hint: 'lose', answers: ['has lost', "'s lost"], explain: 'lose → lost.' },
      { type: 'gap', q: '___ you seen my phone?', answers: ['have'], explain: 'Câu hỏi: Have you + V3?' },
      { type: 'choice', q: "Look! Somebody ___ the window.", options: ['has broken', 'have broken', 'has broke'], answer: 'has broken', explain: 'break → broken.' },
      { type: 'gap', q: 'The taxi ___ yet.', hint: 'not / arrive', answers: ["hasn't arrived", 'has not arrived'], explain: 'it → hasn’t arrived.' },
      { type: 'choice', q: 'Tom isn’t here. He ___ to the bank.', options: ['has been', 'has gone', 'have gone'], answer: 'has gone', explain: 'Đi và chưa về → gone.' },
      { type: 'gap', q: 'We ___ a new car.', hint: 'buy', answers: ['have bought', "'ve bought"], explain: 'buy → bought.' },
      { type: 'choice', q: 'They ___ their dinner.', options: ['have eaten', 'have ate', 'has eaten'], answer: 'have eaten', explain: 'eat → eaten; they → have.' },
    ],
  },
  {
    id: 16,
    intro: '**just, already, yet** thường đi với hiện tại hoàn thành để nói việc **vừa mới**, **đã rồi** hoặc **chưa** xảy ra.',
    sections: [
      {
        title: 'just = vừa mới',
        text: 'Đứng giữa **have/has** và **V3**.',
        examples: ["I**'ve just had** lunch.", 'The train **has just left**.'],
      },
      {
        title: 'already = đã… rồi (sớm hơn mong đợi)',
        text: 'Đứng giữa **have/has** và **V3**.',
        examples: ["“Don't forget to call Sam.” “I**'ve already called** him.”", 'She **has already finished** the book.'],
      },
      {
        title: 'yet = chưa (phủ định) / … chưa? (câu hỏi)',
        text: 'Dùng trong **câu phủ định** và **câu hỏi**, thường đứng **cuối câu**.',
        examples: ["I **haven't** decided **yet**.", '**Has** the bus come **yet**?', "“Where's Kate?” “She **hasn't** arrived **yet**.”"],
      },
    ],
    tips: ['just / already: **have + just/already + V3**.', 'yet: cuối câu phủ định hoặc câu hỏi.'],
    exercises: [
      { type: 'choice', q: 'I’m not hungry. I’ve ___ eaten.', options: ['yet', 'just', 'still'], answer: 'just', explain: 'Vừa mới ăn → just.' },
      { type: 'choice', q: 'Have you finished your work ___?', options: ['already', 'just', 'yet'], answer: 'yet', explain: 'Câu hỏi → yet ở cuối câu.' },
      { type: 'choice', q: "“Read this book!” “I've ___ read it.”", options: ['already', 'yet', 'ever'], answer: 'already', explain: 'Đã đọc rồi → already.' },
      { type: 'gap', q: "The film hasn't started ___.", answers: ['yet'], explain: 'Phủ định → yet.' },
      { type: 'choice', q: 'Where are the cakes? — Sorry, we’ve ___ eaten them all.', options: ['already', 'yet', 'never'], answer: 'already', explain: 'Đã ăn hết rồi.' },
      { type: 'gap', q: 'She ___ just left. You can still catch her.', answers: ['has', "'s"], explain: 'she → has + just + V3.' },
      { type: 'choice', q: 'I haven’t ___ my emails yet.', options: ['checked', 'check', 'checking'], answer: 'checked', explain: 'have + V3.' },
      { type: 'gap', q: '“Is Dan here?” “No, he hasn’t come ___.”', answers: ['yet'], explain: 'Phủ định → yet.' },
    ],
  },
  {
    id: 17,
    intro: 'Dùng **Have you ever…?** để hỏi về **kinh nghiệm** trong đời (từ trước tới nay). **never** = chưa bao giờ.',
    sections: [
      {
        title: 'Hỏi và trả lời về kinh nghiệm',
        examples: [
          '**Have** you **ever been** to Japan?',
          "“**Has** she **ever ridden** a horse?” “No, she **hasn't**.”",
          "I**'ve never eaten** sushi.",
          "We**'ve been** to Hue three times.",
        ],
      },
      {
        title: 'never / ever / how many times',
        text: '**never** đứng giữa have và V3 (I’ve never…). **ever** dùng trong câu hỏi. Hỏi số lần: **How many times have you…?**',
        examples: ['It’s the best film I**’ve ever seen**.', '**How many times have** you **seen** that film?'],
      },
      {
        title: 'Hoàn thành hay quá khứ đơn?',
        text: 'Hỏi kinh nghiệm → hiện tại hoàn thành; nói **khi nào** cụ thể → quá khứ đơn.',
        examples: ["“**Have** you **ever been** to Korea?” “Yes, I **went** there in 2019.”"],
      },
    ],
    tips: ["I've **never** been… ✔ — I haven't never been… ✘ (không dùng hai phủ định)"],
    exercises: [
      { type: 'choice', q: 'Have you ever ___ to London?', options: ['be', 'been', 'was'], answer: 'been', explain: 'have + V3 (been).' },
      { type: 'gap', q: "I've ___ seen snow. I'd love to see it.", answers: ['never'], explain: 'Chưa bao giờ → never.' },
      { type: 'gap', q: '___ your brother ever played golf?', answers: ['has'], explain: 'your brother → Has.' },
      { type: 'choice', q: 'This is the best meal I’ve ___ had.', options: ['ever', 'never', 'yet'], answer: 'ever', explain: 'the best … I’ve ever had.' },
      { type: 'choice', q: '“Have you been to Hanoi?” “Yes, I ___ there last year.”', options: ['have gone', 'went', 'have been'], answer: 'went', explain: 'Có thời gian cụ thể (last year) → quá khứ đơn.' },
      { type: 'gap', q: 'How many times ___ you read this book?', answers: ['have'], explain: 'How many times have you…?' },
      { type: 'choice', q: 'She has never ___ a plane.', options: ['flew', 'flown', 'fly'], answer: 'flown', explain: 'fly → flown.' },
      { type: 'gap', q: 'We ___ never met before.', answers: ['have', "'ve"], explain: 'we → have + never + V3.' },
    ],
  },
  {
    id: 18,
    intro: 'Dùng hiện tại hoàn thành cho tình huống **bắt đầu trong quá khứ và vẫn tiếp diễn đến bây giờ**: **How long have you…?**',
    sections: [
      {
        title: 'Hiện tại hoàn thành',
        text: '**have / has + V3** (thường với động từ trạng thái: be, know, live, have…).',
        examples: ["I**'ve known** Lisa for ten years.", "They**'ve lived** here since 2018.", '**How long have** you **been** a teacher?'],
      },
      {
        title: 'Hiện tại hoàn thành tiếp diễn',
        text: '**have / has been + V-ing** cho hành động kéo dài tới hiện tại.',
        examples: ["It**'s been raining** all day.", "**How long have** you **been learning** English?", "She**'s been waiting** for an hour."],
      },
      {
        title: 'Không dùng hiện tại đơn',
        text: 'Khi có **for / since / how long** nói về khoảng thời gian tới nay, không dùng hiện tại đơn: I’ve lived here for 5 years. ✔ — I live here for 5 years. ✘',
      },
    ],
    tips: ['How long **have you been** here? ✔ — How long are you here? ✘'],
    exercises: [
      { type: 'choice', q: 'I ___ in this city since 2015.', options: ['live', 'have lived', 'am living'], answer: 'have lived', explain: 'since + mốc → hiện tại hoàn thành.' },
      { type: 'gap', q: 'How long ___ you known each other?', answers: ['have'], explain: 'How long have you + V3?' },
      { type: 'gap', q: "She ___ ill for three days.", hint: 'be', answers: ['has been', "'s been"], explain: 'be → been; she → has.' },
      { type: 'choice', q: 'It ___ raining since this morning.', options: ['is', 'has been', 'was'], answer: 'has been', explain: 'Kéo dài tới hiện tại.' },
      { type: 'gap', q: 'We ___ waiting for twenty minutes.', hint: 'be', answers: ['have been', "'ve been"], explain: 'have been + V-ing.' },
      { type: 'choice', q: 'How long ___ English?', options: ['are you learning', 'have you been learning', 'do you learn'], answer: 'have you been learning', explain: 'Hành động kéo dài tới nay.' },
      { type: 'gap', q: 'My parents ___ married for 30 years.', hint: 'be', answers: ['have been', "'ve been"], explain: 'they → have been.' },
      { type: 'choice', q: 'Tom ___ this car since he was 20.', options: ['has had', 'has', 'had had'], answer: 'has had', explain: 'have → had; he → has had.' },
    ],
  },
  {
    id: 19,
    intro: '**for** + khoảng thời gian, **since** + mốc thời gian (dùng với hiện tại hoàn thành); **ago** = cách đây (dùng với quá khứ đơn).',
    sections: [
      {
        title: 'for và since',
        table: {
          head: ['for + khoảng thời gian', 'since + mốc bắt đầu'],
          rows: [
            ['for three days', 'since Monday'],
            ['for ten minutes', "since 9 o'clock"],
            ['for a long time', 'since 2010'],
            ['for two years', 'since I was a child'],
          ],
        },
        examples: ["I've lived here **for** six months.", "I've lived here **since** January."],
      },
      {
        title: 'ago',
        text: '**khoảng thời gian + ago** = cách đây bao lâu; đi với **quá khứ đơn**.',
        examples: ['I started this job two years **ago**.', 'She left ten minutes **ago**.', 'How long **ago** did you move here?'],
      },
    ],
    tips: ['since Monday ✔ — for Monday ✘', 'two years ago + **quá khứ đơn** (I met him two years ago.)'],
    exercises: [
      { type: 'choice', q: "I've worked here ___ 2019.", options: ['for', 'since', 'ago'], answer: 'since', explain: '2019 là mốc → since.' },
      { type: 'choice', q: "She's been in Vietnam ___ six months.", options: ['for', 'since', 'ago'], answer: 'for', explain: 'six months là khoảng → for.' },
      { type: 'choice', q: 'We met three years ___.', options: ['for', 'since', 'ago'], answer: 'ago', explain: 'cách đây → ago.' },
      { type: 'gap', q: "I haven't seen him ___ last summer.", answers: ['since'], explain: 'last summer là mốc.' },
      { type: 'gap', q: 'They have been married ___ ten years.', answers: ['for'], explain: 'ten years là khoảng.' },
      { type: 'gap', q: 'The film started twenty minutes ___.', answers: ['ago'], explain: 'Quá khứ đơn + ago.' },
      { type: 'choice', q: "It's been raining ___ we arrived.", options: ['for', 'since', 'ago'], answer: 'since', explain: 'since + mệnh đề mốc thời gian.' },
      { type: 'gap', q: "I've known Mai ___ a long time.", answers: ['for'], explain: 'a long time là khoảng.' },
    ],
  },
  {
    id: 20,
    intro: '**Hiện tại hoàn thành**: không rõ thời gian / còn liên quan đến hiện tại. **Quá khứ đơn**: thời gian **đã kết thúc**, xác định.',
    sections: [
      {
        title: 'So sánh',
        table: {
          head: ['Hiện tại hoàn thành', 'Quá khứ đơn'],
          rows: [
            ["I've lost my key. (bây giờ vẫn mất)", 'I lost my key last week. (thời gian xác định)'],
            ["Have you seen Tom today? (hôm nay chưa hết)", 'Did you see Tom yesterday?'],
            ["She's lived here for 5 years. (vẫn sống)", 'She lived here for 5 years. (giờ không sống nữa)'],
          ],
        },
      },
      {
        title: 'Từ chỉ thời gian',
        text: '**Quá khứ đơn**: yesterday, last…, … ago, in 2010, when…? **Hiện tại hoàn thành**: just, already, yet, ever, never, today, this week (chưa kết thúc), for / since (tới nay).',
        examples: ['**When did** you **arrive**? (không hỏi “When have you arrived?”)', "I **haven't seen** her this week."],
      },
    ],
    tips: ['Câu hỏi **When…?** luôn dùng quá khứ đơn.', 'yesterday / last … / ago → quá khứ đơn.'],
    exercises: [
      { type: 'choice', q: 'I ___ Anna yesterday.', options: ['have seen', 'saw', 'see'], answer: 'saw', explain: 'yesterday → quá khứ đơn.' },
      { type: 'choice', q: "I ___ my glasses. I can't find them anywhere.", options: ['lost', 'have lost', 'lose'], answer: 'have lost', explain: 'Kết quả hiện tại.' },
      { type: 'choice', q: 'When ___ to this school?', options: ['have you come', 'did you come', 'you came'], answer: 'did you come', explain: 'When…? → quá khứ đơn.' },
      { type: 'gap', q: 'We ___ to Thailand in 2018.', hint: 'go', answers: ['went'], explain: 'in 2018 → quá khứ đơn.' },
      { type: 'gap', q: '___ you ever eaten durian?', answers: ['have'], explain: 'ever → hiện tại hoàn thành.' },
      { type: 'choice', q: 'Shakespeare ___ many plays.', options: ['has written', 'wrote', 'writes'], answer: 'wrote', explain: 'Người đã mất → thời gian đã kết thúc.' },
      { type: 'gap', q: 'The plane ___ an hour ago.', hint: 'land', answers: ['landed'], explain: 'ago → quá khứ đơn.' },
      { type: 'choice', q: "I'm tired. I ___ a lot this week.", options: ['worked', 'have worked', 'work'], answer: 'have worked', explain: 'this week chưa kết thúc.' },
    ],
  },
];
