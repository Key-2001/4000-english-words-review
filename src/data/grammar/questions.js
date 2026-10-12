// Câu hỏi — Units 44–49 (nội dung biên soạn riêng)
export default [
  {
    id: 44,
    intro: 'Cách tạo câu hỏi: **đảo trợ động từ** lên trước chủ ngữ; thì đơn thêm **do / does / did**.',
    sections: [
      {
        title: 'Đảo trợ động từ',
        table: {
          head: ['Câu khẳng định', 'Câu hỏi'],
          rows: [
            ['You are tired.', 'Are you tired?'],
            ['Tom has gone.', 'Has Tom gone?'],
            ['She can drive.', 'Can she drive?'],
            ['They will come.', 'Will they come?'],
          ],
        },
      },
      {
        title: 'Thì đơn: do / does / did',
        table: {
          head: ['Câu khẳng định', 'Câu hỏi'],
          rows: [
            ['You like music.', 'Do you like music?'],
            ['He works here.', 'Does he work here?'],
            ['They went out.', 'Did they go out?'],
          ],
        },
        text: 'Với từ để hỏi: **Wh- + trợ động từ + chủ ngữ + V**: Where **do** you live? What **did** she say?',
      },
      {
        title: 'Câu hỏi phủ định',
        text: 'Dùng để thể hiện ngạc nhiên hoặc mong đợi câu trả lời “có”.',
        examples: ["**Don't** you like it?", "**Why didn't** you call me?", "**Isn't** she coming?"],
      },
    ],
    tips: ['Does he **work**? ✔ — Does he works? ✘', 'Where **is** he going? ✔ — Where he is going? ✘'],
    exercises: [
      { type: 'choice', q: '___ your sister speak English?', options: ['Does', 'Is', 'Do'], answer: 'Does', explain: 'Hiện tại đơn, she → Does.' },
      { type: 'choice', q: 'Where ___ last night?', options: ['did you go', 'you went', 'did you went'], answer: 'did you go', explain: 'Wh- + did + S + V.' },
      { type: 'gap', q: '___ they finished the project yet?', answers: ['have'], explain: 'Hoàn thành → Have.' },
      { type: 'gap', q: '___ you help me, please?', answers: ['can', 'could', 'will', 'would'], explain: 'Đảo can/could lên đầu.' },
      { type: 'choice', q: 'What time ___ the bank open?', options: ['does', 'is', 'do'], answer: 'does', explain: 'the bank = it → does.' },
      { type: 'gap', q: 'Why ___ you come to class yesterday?', hint: 'phủ định', answers: ["didn't", 'did not'], explain: 'Why didn’t you…?' },
      { type: 'choice', q: '___ Tom and Anna coming to the party?', options: ['Are', 'Is', 'Do'], answer: 'Are', explain: 'Tiếp diễn, số nhiều → Are.' },
      { type: 'gap', q: 'How often ___ you play tennis?', answers: ['do'], explain: 'you → do.' },
    ],
  },
  {
    id: 45,
    intro: '**Who / What** có thể hỏi về **chủ ngữ** (không dùng do/does/did) hoặc **tân ngữ** (dùng do/does/did).',
    sections: [
      {
        title: 'Hỏi tân ngữ: who/what + did/does + S + V',
        text: 'Người hỏi muốn biết **đối tượng** của hành động.',
        examples: ['Sam saw **Anna**. → **Who did** Sam **see**? (Anna)', 'She bought **a dress**. → **What did** she **buy**?'],
      },
      {
        title: 'Hỏi chủ ngữ: who/what + V',
        text: 'Người hỏi muốn biết **ai/cái gì làm** hành động → **không** dùng do/does/did, động từ chia như câu khẳng định.',
        examples: ['**Sam** saw Anna. → **Who saw** Anna? (Sam)', '**Who lives** in that house?', '**What happened**?', '**Who broke** the window?'],
      },
      {
        title: 'So sánh',
        table: {
          head: ['Hỏi chủ ngữ', 'Hỏi tân ngữ'],
          rows: [
            ['Who phoned you? (ai gọi bạn)', 'Who did you phone? (bạn gọi ai)'],
            ['What made that noise?', 'What did you make?'],
          ],
        },
      },
    ],
    tips: ['What **happened**? ✔ — What did happen? ✘', 'Who **wants** coffee? (động từ chia với he/she)'],
    exercises: [
      { type: 'choice', q: 'Somebody called you. — Who ___ you?', options: ['called', 'did call', 'did you call'], answer: 'called', explain: 'Hỏi chủ ngữ → không dùng did.' },
      { type: 'choice', q: 'You called somebody. — Who ___?', options: ['called you', 'did you call', 'you called'], answer: 'did you call', explain: 'Hỏi tân ngữ → did you call.' },
      { type: 'gap', q: 'What ___ last night? Why are the police here?', hint: 'happen', answers: ['happened'], explain: 'Hỏi chủ ngữ → happened.' },
      { type: 'choice', q: 'Who ___ this cake? It’s delicious!', options: ['made', 'did make', 'did you made'], answer: 'made', explain: 'Ai làm → hỏi chủ ngữ.' },
      { type: 'gap', q: 'What ___ you buy at the market?', answers: ['did'], explain: 'Hỏi tân ngữ, quá khứ.' },
      { type: 'choice', q: 'Who ___ in that big house?', options: ['lives', 'does live', 'do live'], answer: 'lives', explain: 'Hỏi chủ ngữ, hiện tại đơn → lives.' },
      { type: 'gap', q: 'Who ___ you meet at the party?', answers: ['did'], explain: 'Bạn gặp ai → hỏi tân ngữ.' },
      { type: 'choice', q: 'Which team ___ the match?', options: ['won', 'did win', 'did won'], answer: 'won', explain: 'Hỏi chủ ngữ.' },
    ],
  },
  {
    id: 46,
    intro: 'Trong câu hỏi, **giới từ** thường đứng **cuối câu**. **What is it like?** = Nó như thế nào?',
    sections: [
      {
        title: 'Giới từ cuối câu hỏi',
        examples: ['**Who** is she talking **to**?', '**What** are you looking **at**?', '**Where** are you **from**?', '**Who** did you go **with**?', '**What** is this book **about**?'],
      },
      {
        title: 'What … like?',
        text: '**What is / was … like?** hỏi về **đặc điểm, tính chất** (không phải sở thích). Không dùng like ở câu trả lời.',
        examples: ['“**What’s** your new teacher **like**?” “She’s very friendly.”', '“**What was** the weather **like**?” “It was sunny.”'],
      },
    ],
    tips: ['What is it like? ≠ Do you like it?', 'Trả lời “What’s he like?” → He’s nice. (không nói “He likes…”)'],
    exercises: [
      { type: 'gap', q: 'Who are you waiting ___?', answers: ['for'], explain: 'wait for → Who … waiting for?' },
      { type: 'gap', q: 'Where is your friend ___? — He’s from Korea.', answers: ['from'], explain: 'Where … from?' },
      { type: 'choice', q: '“What’s your hometown ___?” “It’s quiet and beautiful.”', options: ['like', 'likes', 'liking'], answer: 'like', explain: 'Hỏi đặc điểm: What … like?' },
      { type: 'gap', q: 'What are you talking ___?', answers: ['about'], explain: 'talk about.' },
      { type: 'choice', q: '“What was the film like?” “___”', options: ['It was boring.', 'I liked.', 'Yes, I like it.'], answer: 'It was boring.', explain: 'Trả lời bằng đặc điểm.' },
      { type: 'gap', q: 'Who did you have dinner ___?', answers: ['with'], explain: 'have dinner with somebody.' },
      { type: 'gap', q: 'What are you looking ___?', answers: ['at'], explain: 'look at.' },
      { type: 'choice', q: 'Which flat do you live ___?', options: ['in', 'at', 'to'], answer: 'in', explain: 'live in a flat.' },
    ],
  },
  {
    id: 47,
    intro: '**What** (cái gì / gì — không giới hạn lựa chọn), **Which** (cái nào — chọn trong số ít), **How** (như thế nào / bao nhiêu).',
    sections: [
      {
        title: 'What và Which',
        table: {
          head: ['What', 'Which'],
          rows: [
            ['Nhiều khả năng, không rõ lựa chọn', 'Chọn trong số lựa chọn có hạn'],
            ['What colour is your car?', 'Which colour do you want — red or blue?'],
            ['What sports do you play?', 'Which is your bag — this one or that one?'],
          ],
        },
        examples: ['**What** time is it?', '**Which** way is the station — left or right?', '**Which** of these shirts do you like?'],
      },
      {
        title: 'How + tính từ / trạng từ',
        examples: ['**How old** are you?', '**How far** is it?', '**How often** do you go?', '**How tall** is your brother?', '**How much** is it? / **How many** people?'],
      },
    ],
    tips: ['Which **of** + danh từ xác định: Which of the books…? (không nói “What of”)'],
    exercises: [
      { type: 'choice', q: '___ is your favourite food?', options: ['What', 'Which', 'How'], answer: 'What', explain: 'Không giới hạn lựa chọn.' },
      { type: 'choice', q: '___ do you prefer — tea or coffee?', options: ['What', 'Which', 'How'], answer: 'Which', explain: 'Chọn giữa 2 → Which.' },
      { type: 'gap', q: 'How ___ is your sister? — She’s 15.', answers: ['old'], explain: 'Hỏi tuổi → How old.' },
      { type: 'gap', q: 'How ___ do you go to the cinema? — About once a month.', answers: ['often'], explain: 'Tần suất → How often.' },
      { type: 'choice', q: '___ of these two jackets is cheaper?', options: ['What', 'Which', 'Who'], answer: 'Which', explain: 'Which of…' },
      { type: 'gap', q: 'How ___ is it from Hanoi to Hai Phong? — About 120 km.', answers: ['far'], explain: 'Khoảng cách → How far.' },
      { type: 'choice', q: 'How ___ people came to the meeting?', options: ['much', 'many', 'often'], answer: 'many', explain: 'people đếm được → many.' },
      { type: 'gap', q: '___ kind of music do you like?', answers: ['what'], explain: 'What kind of…?' },
    ],
  },
  {
    id: 48,
    intro: '**How long does it take (to + V)?** = Mất bao lâu để làm việc gì?',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['Câu hỏi', 'Trả lời'],
          rows: [
            ['How long does it take to get there?', 'It takes 20 minutes.'],
            ['How long did it take (you) to do it?', 'It took (me) two hours.'],
            ['How long will it take?', 'It will take a week.'],
          ],
        },
        examples: ['**How long does it take** to fly from Hanoi to Saigon?', "**It took** me three days **to** read this book.", "**It doesn't take** long to cook rice."],
      },
    ],
    tips: ['take → **took** → taken.', 'It takes + **người** + thời gian + to V: It takes **me** 10 minutes to walk to school.'],
    exercises: [
      { type: 'choice', q: 'How long does it ___ to walk to the station?', options: ['take', 'takes', 'took'], answer: 'take', explain: 'does + V nguyên mẫu.' },
      { type: 'gap', q: 'It ___ me an hour to do my homework yesterday.', answers: ['took'], explain: 'Quá khứ → took.' },
      { type: 'gap', q: 'How long ___ it take you to get to work every day?', answers: ['does'], explain: 'Hiện tại đơn → does.' },
      { type: 'choice', q: 'It takes about ten minutes ___ there by car.', options: ['to get', 'getting', 'get'], answer: 'to get', explain: 'take + time + to V.' },
      { type: 'gap', q: 'How long ___ it take to build the bridge?', hint: 'quá khứ', answers: ['did'], explain: 'Quá khứ → did.' },
      { type: 'choice', q: 'The journey ___ five hours.', options: ['takes', 'take', 'is taking to'], answer: 'takes', explain: 'it/the journey → takes.' },
      { type: 'gap', q: "It ___ take long to learn the rules. They're easy.", answers: ["doesn't", 'does not', "won't", 'will not'], explain: 'Không mất nhiều thời gian.' },
      { type: 'choice', q: '___ does it take to cook this dish?', options: ['How long', 'How much', 'How often'], answer: 'How long', explain: 'Hỏi thời gian cần.' },
    ],
  },
  {
    id: 49,
    intro: '**Câu hỏi gián tiếp** (Do you know where…? / I don’t know what…): phần câu hỏi được viết theo **trật tự câu khẳng định**.',
    sections: [
      {
        title: 'Trật tự từ',
        table: {
          head: ['Câu hỏi trực tiếp', 'Câu hỏi gián tiếp'],
          rows: [
            ['Where is the station?', 'Do you know where the station is?'],
            ['What time does it start?', 'Do you know what time it starts?'],
            ['Where did she go?', "I don't know where she went."],
          ],
        },
        text: 'Không dùng do/does/did và không đảo trợ động từ trong phần gián tiếp.',
      },
      {
        title: 'Câu hỏi Yes/No → if / whether',
        examples: ['Is Tom at home? → Do you know **if** Tom is at home?', 'Did she pass? → I don’t know **whether** she passed.'],
      },
    ],
    tips: ['Do you know where **he lives**? ✔ — Do you know where does he live? ✘'],
    exercises: [
      { type: 'choice', q: 'Do you know where ___?', options: ['the bank is', 'is the bank', 'does the bank'], answer: 'the bank is', explain: 'Trật tự khẳng định.' },
      { type: 'choice', q: "I don't know what time ___.", options: ['the film starts', 'does the film start', 'starts the film'], answer: 'the film starts', explain: 'Không dùng does.' },
      { type: 'gap', q: 'Can you tell me ___ the museum is open today?', answers: ['if', 'whether'], explain: 'Câu hỏi Yes/No → if / whether.' },
      { type: 'choice', q: 'Do you know how old ___?', options: ['she is', 'is she', 'does she'], answer: 'she is', explain: 'S + V.' },
      { type: 'choice', q: "I don't know where ___ my keys.", options: ['I put', 'did I put', 'put I'], answer: 'I put', explain: 'Không dùng did.' },
      { type: 'gap', q: "Do you know ___ Anna is coming? — I think she's coming.", answers: ['if', 'whether'], explain: 'Yes/No → if.' },
      { type: 'choice', q: 'Can you tell me how much ___?', options: ['this costs', 'does this cost', 'costs this'], answer: 'this costs', explain: 'S + V.' },
      { type: 'gap', q: 'I wonder what ___ doing now.', hint: 'he / be', answers: ['he is', "he's"], explain: 'Trật tự khẳng định: he is.' },
    ],
  },
];
