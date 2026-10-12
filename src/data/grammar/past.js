// Thì quá khứ — Units 10–14 (nội dung biên soạn riêng)
export default [
  {
    id: 10,
    intro: '**was / were** là quá khứ của **am / is / are**. Dùng để nói về trạng thái, vị trí, cảm xúc… trong quá khứ.',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['Chủ ngữ', 'Khẳng định', 'Phủ định', 'Câu hỏi'],
          rows: [
            ['I / he / she / it', 'was', "wasn't (was not)", 'Was I / he…?'],
            ['we / you / they', 'were', "weren't (were not)", 'Were you / they…?'],
          ],
        },
        examples: [
          'I **was** tired yesterday.',
          'The shops **were** closed on Sunday.',
          "She **wasn't** at school last week.",
          '**Were** you at home last night?',
          'Where **was** your phone?',
        ],
      },
      {
        title: 'Câu trả lời ngắn',
        examples: ['“Was the film good?” “Yes, it **was**.” / “No, it **wasn’t**.”', '“Were they late?” “Yes, they **were**.” / “No, they **weren’t**.”'],
      },
    ],
    tips: ['am / is → **was**; are → **were**.', 'you luôn đi với **were** (kể cả khi chỉ một người).'],
    exercises: [
      { type: 'choice', q: 'I ___ very busy yesterday.', options: ['was', 'were', 'am'], answer: 'was', explain: 'I + quá khứ → was.' },
      { type: 'choice', q: 'My friends ___ at the party last night.', options: ['was', 'were', 'are'], answer: 'were', explain: 'my friends = they → were.' },
      { type: 'gap', q: 'The weather ___ good last weekend. It rained all the time.', hint: 'be – phủ định', answers: ["wasn't", 'was not'], explain: 'it → wasn’t.' },
      { type: 'gap', q: '___ you at work yesterday?', answers: ['were'], explain: 'you → Were.' },
      { type: 'gap', q: 'Where ___ Paul last night?', answers: ['was'], explain: 'Paul = he → was.' },
      { type: 'choice', q: '“Were the questions difficult?” “No, they ___.”', options: ["wasn't", "weren't", "didn't"], answer: "weren't", explain: 'they → weren’t.' },
      { type: 'gap', q: 'We ___ hungry, so we didn’t eat anything.', hint: 'be – phủ định', answers: ["weren't", 'were not'], explain: 'we → weren’t.' },
      { type: 'choice', q: 'Why ___ you late this morning?', options: ['was', 'were', 'did'], answer: 'were', explain: 'you → were.' },
    ],
  },
  {
    id: 11,
    intro: 'Thì quá khứ đơn dùng cho hành động **đã xảy ra và kết thúc** trong quá khứ (yesterday, last week, in 2010, … ago).',
    sections: [
      {
        title: 'Động từ có quy tắc: thêm -ed',
        text: 'work → worked, play → played. Tận cùng **-e**: thêm **-d** (live → lived). **Phụ âm + y → -ied** (study → studied, try → tried). **1 nguyên âm + 1 phụ âm**: gấp đôi (stop → stopped, plan → planned).',
        examples: ['I **watched** a film last night.', 'She **studied** in London for two years.', 'The bus **stopped** outside the school.'],
      },
      {
        title: 'Động từ bất quy tắc',
        table: {
          head: ['Nguyên mẫu', 'Quá khứ', 'Nguyên mẫu', 'Quá khứ'],
          rows: [
            ['go', 'went', 'buy', 'bought'],
            ['get', 'got', 'see', 'saw'],
            ['have', 'had', 'make', 'made'],
            ['do', 'did', 'take', 'took'],
            ['come', 'came', 'write', 'wrote'],
          ],
        },
        examples: ['We **went** to the beach yesterday.', 'I **bought** a new jacket.', 'They **had** a great time.'],
      },
      {
        title: 'Cách dùng',
        text: 'Quá khứ đơn dùng **cùng một dạng** cho mọi chủ ngữ (I / he / they worked). Hay đi với: yesterday, last night/week/year, … ago, in 2015, when I was a child.',
      },
    ],
    tips: ['go → **went** (không phải “goed”), buy → **bought**.', 'stop → stop**ped**, study → stud**ied**.'],
    exercises: [
      { type: 'gap', q: 'I ___ my grandparents last weekend.', hint: 'visit', answers: ['visited'], explain: 'Có quy tắc: + ed.' },
      { type: 'choice', q: 'We ___ to Da Nang last summer.', options: ['go', 'goed', 'went'], answer: 'went', explain: 'go → went (bất quy tắc).' },
      { type: 'gap', q: 'She ___ a lot of photos on holiday.', hint: 'take', answers: ['took'], explain: 'take → took.' },
      { type: 'gap', q: 'The film ___ at 8 and finished at 10.', hint: 'start', answers: ['started'], explain: 'start → started.' },
      { type: 'choice', q: 'He ___ English at university.', options: ['studyed', 'studied', 'studed'], answer: 'studied', explain: 'phụ âm + y → ied.' },
      { type: 'gap', q: 'I ___ a strange noise last night.', hint: 'hear', answers: ['heard'], explain: 'hear → heard.' },
      { type: 'gap', q: 'The car ___ at the red light.', hint: 'stop', answers: ['stopped'], explain: 'stop → gấp đôi p → stopped.' },
      { type: 'choice', q: 'They ___ a new house two years ago.', options: ['buyed', 'bought', 'buy'], answer: 'bought', explain: 'buy → bought.' },
    ],
  },
  {
    id: 12,
    intro: 'Phủ định và câu hỏi thì quá khứ đơn dùng **did**: **didn’t + V** và **Did + chủ ngữ + V?** (động từ ở dạng nguyên mẫu).',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['', 'Cấu trúc', 'Ví dụ'],
          rows: [
            ['Phủ định', "didn't (did not) + V", "I didn't go out."],
            ['Câu hỏi', 'Did + chủ ngữ + V?', 'Did you go out?'],
            ['Từ để hỏi', 'Wh- + did + chủ ngữ + V?', 'Where did you go?'],
          ],
        },
        examples: ["She **didn't call** me yesterday.", '**Did** you **enjoy** the party?', 'What **did** they **buy**?', "We **didn't have** time."],
      },
      {
        title: 'Câu trả lời ngắn',
        examples: ['“Did you see Anna?” “Yes, I **did**.” / “No, I **didn’t**.”'],
      },
      {
        title: 'Lưu ý',
        text: 'Sau **did / didn’t** luôn dùng động từ **nguyên mẫu**: Did you **go**? (không phải “Did you went?”). Với **be** dùng was/were: Were you tired? (không phải “Did you tired?”).',
      },
    ],
    tips: ['I didn’t **see** him. ✔ — I didn’t saw him. ✘', 'did cũng là động từ chính: What **did** you **do**?'],
    exercises: [
      { type: 'choice', q: 'I ___ the answer.', options: ["didn't knew", "didn't know", "don't knew"], answer: "didn't know", explain: 'didn’t + V nguyên mẫu.' },
      { type: 'gap', q: '___ you watch the match last night?', answers: ['did'], explain: 'Câu hỏi quá khứ: Did…?' },
      { type: 'gap', q: 'Where ___ you go on holiday?', answers: ['did'], explain: 'Wh- + did + chủ ngữ + V.' },
      { type: 'gap', q: 'She ___ to the party. She was ill.', hint: 'not / come', answers: ["didn't come", 'did not come'], explain: 'didn’t + come.' },
      { type: 'choice', q: 'What time ___ up this morning?', options: ['did you get', 'did you got', 'you got'], answer: 'did you get', explain: 'did + you + V nguyên mẫu.' },
      { type: 'gap', q: '“Did they win?” “No, they ___.”', answers: ["didn't", 'did not'], explain: 'Trả lời ngắn: No, they didn’t.' },
      { type: 'choice', q: '___ you tired after the trip?', options: ['Did', 'Were', 'Was'], answer: 'Were', explain: 'tired là tính từ → dùng were.' },
      { type: 'gap', q: 'We ___ anything because the shop was closed.', hint: 'not / buy', answers: ["didn't buy", 'did not buy'], explain: 'didn’t + buy.' },
    ],
  },
  {
    id: 13,
    intro: 'Quá khứ tiếp diễn (**was / were + V-ing**) diễn tả hành động **đang diễn ra** tại một thời điểm trong quá khứ.',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['Chủ ngữ', 'Khẳng định', 'Phủ định', 'Câu hỏi'],
          rows: [
            ['I / he / she / it', 'was working', "wasn't working", 'Was he working?'],
            ['we / you / they', 'were working', "weren't working", 'Were you working?'],
          ],
        },
      },
      {
        title: 'Cách dùng',
        text: 'Hành động **đã bắt đầu trước** và **chưa kết thúc** tại thời điểm được nói tới (at 9 o’clock yesterday, this time last week…).',
        examples: [
          'At 8 o’clock last night I **was having** dinner.',
          'It **was raining** when I got up.',
          'What **were** you **doing** at this time yesterday?',
          "She **wasn't listening** to the teacher.",
        ],
      },
    ],
    tips: ['I / he / she / it → **was** + V-ing; we / you / they → **were** + V-ing.'],
    exercises: [
      { type: 'choice', q: 'At 10 o’clock last night I ___ TV.', options: ['watched', 'was watching', 'were watching'], answer: 'was watching', explain: 'Đang diễn ra tại thời điểm quá khứ.' },
      { type: 'gap', q: 'The children ___ in the park at 4 pm.', hint: 'play', answers: ['were playing'], explain: 'they → were playing.' },
      { type: 'gap', q: 'What ___ you doing when I called?', answers: ['were'], explain: 'you → were.' },
      { type: 'gap', q: 'It ___ when we left the house.', hint: 'snow', answers: ['was snowing'], explain: 'it → was snowing.' },
      { type: 'choice', q: 'Sorry, I ___ attention.', options: ["wasn't paying", "didn't paying", "weren't paying"], answer: "wasn't paying", explain: 'I → wasn’t + V-ing.' },
      { type: 'gap', q: 'This time last year we ___ in Japan.', hint: 'live', answers: ['were living'], explain: 'we → were living.' },
      { type: 'choice', q: '___ she sleeping when you arrived?', options: ['Did', 'Was', 'Were'], answer: 'Was', explain: 'she → Was + V-ing.' },
      { type: 'gap', q: 'Tom ___ a book at midnight. He was asleep.', hint: 'not / read', answers: ["wasn't reading", 'was not reading'], explain: 'he → wasn’t reading.' },
    ],
  },
  {
    id: 14,
    intro: '**Quá khứ tiếp diễn** = hành động đang diễn ra (nền); **quá khứ đơn** = hành động ngắn xen vào hoặc đã hoàn tất.',
    sections: [
      {
        title: 'Hành động đang diễn ra bị xen ngang',
        text: '**was / were + V-ing** (hành động dài) + **when** + **quá khứ đơn** (hành động ngắn xen vào).',
        examples: [
          'I **was walking** home **when** I **saw** an accident.',
          'The phone **rang** while she **was cooking**.',
          'We **were watching** a film when the lights **went** out.',
        ],
      },
      {
        title: 'So sánh',
        table: {
          head: ['Quá khứ tiếp diễn', 'Quá khứ đơn'],
          rows: [
            ['I was cooking at 7. (đang nấu lúc 7h)', 'I cooked dinner at 7. (bắt đầu nấu lúc 7h, nấu xong)'],
            ['He was reading a book. (chưa đọc xong)', 'He read a book. (đọc xong)'],
          ],
        },
      },
    ],
    tips: ['Dùng **while** + quá khứ tiếp diễn, **when** + quá khứ đơn cho hành động ngắn.', 'Các hành động nối tiếp nhau → đều dùng quá khứ đơn: I got up, had a shower and left.'],
    exercises: [
      { type: 'choice', q: 'I ___ my friend while I was shopping.', options: ['met', 'was meeting', 'meet'], answer: 'met', explain: 'Hành động ngắn xen vào → quá khứ đơn.' },
      { type: 'choice', q: 'She was driving when the accident ___.', options: ['was happening', 'happened', 'happens'], answer: 'happened', explain: 'Hành động ngắn → quá khứ đơn.' },
      { type: 'gap', q: 'When I arrived, they ___ dinner.', hint: 'have', answers: ['were having'], explain: 'Đang diễn ra khi tôi tới.' },
      { type: 'gap', q: 'He ___ his leg while he was playing football.', hint: 'break', answers: ['broke'], explain: 'break → broke (hành động ngắn).' },
      { type: 'gap', q: 'It ___ when we went out, so we took umbrellas.', hint: 'rain', answers: ['was raining'], explain: 'Hành động nền → tiếp diễn.' },
      { type: 'choice', q: 'I got up, ___ a shower and went to work.', options: ['was having', 'had', 'have'], answer: 'had', explain: 'Hành động nối tiếp → quá khứ đơn.' },
      { type: 'gap', q: 'What were you doing when the phone ___?', hint: 'ring', answers: ['rang'], explain: 'ring → rang.' },
      { type: 'choice', q: 'While I ___ TV, I fell asleep.', options: ['watched', 'was watching', 'am watching'], answer: 'was watching', explain: 'while + quá khứ tiếp diễn.' },
    ],
  },
];
