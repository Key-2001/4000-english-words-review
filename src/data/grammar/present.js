// Thì hiện tại — Units 1–9 (nội dung biên soạn riêng)
export default [
  {
    id: 1,
    intro:
      'Động từ **be** ở hiện tại có 3 dạng: **am, is, are**. Dùng để nói ai/cái gì **là** gì, **ở đâu**, **như thế nào** (tuổi, nghề nghiệp, quốc tịch, cảm xúc…).',
    sections: [
      {
        title: 'Khẳng định và phủ định',
        table: {
          head: ['Chủ ngữ', 'Khẳng định', 'Phủ định'],
          rows: [
            ['I', "am (I'm)", "am not (I'm not)"],
            ['he / she / it', "is (he's / she's / it's)", "is not (isn't)"],
            ['we / you / they', "are (we're / you're / they're)", "are not (aren't)"],
          ],
        },
        examples: [
          "I**'m** twenty years old.",
          'My brother **is** a doctor.',
          "We **aren't** at home. We**'re** at the beach.",
          "This film **isn't** very good.",
        ],
      },
      {
        title: 'Cách dùng thường gặp',
        text: '**be + tính từ** (cảm xúc, trạng thái) · **be + danh từ** (nghề nghiệp, quốc tịch) · **be + nơi chốn** · **be + tuổi / giờ / giá**.',
        examples: [
          "She**'s** tired.",
          "They**'re** students.",
          'The keys **are** on the table.',
          "It**'s** seven o'clock.",
        ],
      },
    ],
    tips: [
      "Không có dạng “I amn't”. Phủ định của **I am** là **I'm not**.",
      'Chủ ngữ số nhiều (my parents, the books, you and I…) đi với **are**.',
    ],
    exercises: [
      { type: 'choice', q: 'My parents ___ teachers.', options: ['is', 'am', 'are'], answer: 'are', explain: 'My parents = they → are.' },
      { type: 'choice', q: "I ___ hungry. Let's eat.", options: ['am', 'is', 'are'], answer: 'am', explain: 'I → am.' },
      { type: 'choice', q: 'This coffee ___ very hot.', options: ['are', 'is', 'am'], answer: 'is', explain: 'This coffee = it → is.' },
      { type: 'gap', q: 'Sorry, I ___ late.', hint: 'be', answers: ['am'], explain: 'I → am.' },
      { type: 'gap', q: "Tom and Anna ___ at work today. They're at home.", hint: 'be – phủ định', answers: ["aren't", 'are not'], explain: 'Tom and Anna = they → are not / aren’t.' },
      { type: 'gap', q: "The weather ___ nice today. Let's go out.", hint: 'be', answers: ['is'], explain: 'The weather = it → is.' },
      { type: 'gap', q: "I ___ interested in football. It's boring.", hint: 'be – phủ định', answers: ['am not', "'m not"], explain: 'Phủ định với I: am not.' },
      { type: 'choice', q: "It ___ my book. My book is red.", options: ["isn't", "aren't", 'am not'], answer: "isn't", explain: 'It → is not / isn’t.' },
    ],
  },
  {
    id: 2,
    intro: 'Để đặt câu hỏi với **be**, đảo **am / is / are** lên **trước** chủ ngữ.',
    sections: [
      {
        title: 'Câu hỏi Yes / No',
        table: {
          head: ['Câu khẳng định', 'Câu hỏi'],
          rows: [
            ['You are tired.', 'Are you tired?'],
            ['She is at home.', 'Is she at home?'],
            ['They are ready.', 'Are they ready?'],
          ],
        },
      },
      {
        title: 'Câu hỏi với từ để hỏi',
        text: '**Từ để hỏi + am / is / are + chủ ngữ?** — What, Where, Who, How, How old, How much, Why…',
        examples: [
          'Where **are** you from?',
          'How old **is** your brother?',
          'What **is** your phone number?',
          'How much **are** these shoes?',
          'Why **are** you angry?',
        ],
      },
      {
        title: 'Câu trả lời ngắn',
        table: {
          head: ['Câu hỏi', 'Có', 'Không'],
          rows: [
            ['Are you ready?', 'Yes, I am.', "No, I'm not."],
            ['Is he Japanese?', 'Yes, he is.', "No, he isn't."],
            ['Are they at school?', 'Yes, they are.', "No, they aren't."],
          ],
        },
        text: 'Trong câu trả lời ngắn khẳng định **không** dùng dạng rút gọn: Yes, I am. (không nói “Yes, I’m.”)',
      },
    ],
    tips: [
      "Yes, I am. ✔ — Yes, I'm. ✘",
      'Hỏi giá: How much **is** this? (1 vật) / How much **are** these? (nhiều vật)',
    ],
    exercises: [
      { type: 'choice', q: '___ your parents at home now?', options: ['Is', 'Are', 'Am'], answer: 'Are', explain: 'your parents = they → Are.' },
      { type: 'choice', q: 'Where ___ the bathroom, please?', options: ['is', 'are', 'am'], answer: 'is', explain: 'the bathroom = it → is.' },
      { type: 'choice', q: '“Are you a student?” “Yes, ___.”', options: ["I'm", 'I am', 'I are'], answer: 'I am', explain: 'Trả lời ngắn khẳng định không rút gọn.' },
      { type: 'gap', q: '“Is it cold outside?” “No, it ___.”', answers: ["isn't", 'is not'], explain: 'it → isn’t.' },
      { type: 'gap', q: 'How old ___ your children?', answers: ['are'], explain: 'your children = they → are.' },
      { type: 'gap', q: '___ this your bag?', answers: ['is'], explain: 'this → is.' },
      { type: 'choice', q: 'What colour ___ your new car?', options: ['is', 'are', 'does'], answer: 'is', explain: 'your new car = it → is.' },
      { type: 'gap', q: "“Are your friends Spanish?” “No, they ___. They're Italian.”", answers: ["aren't", 'are not'], explain: 'they → aren’t.' },
    ],
  },
  {
    id: 3,
    intro:
      'Thì hiện tại tiếp diễn (**am / is / are + V-ing**) dùng cho hành động **đang diễn ra** lúc nói, hoặc đang diễn ra trong giai đoạn hiện tại.',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['Chủ ngữ', 'Khẳng định', 'Phủ định'],
          rows: [
            ['I', 'am working', "'m not working"],
            ['he / she / it', 'is working', "isn't working"],
            ['we / you / they', 'are working', "aren't working"],
          ],
        },
      },
      {
        title: 'Cách dùng',
        text: 'Việc đang xảy ra **bây giờ** (now, at the moment, Look!, Listen!) hoặc đang diễn ra **quanh thời điểm hiện tại** (this week, these days), chưa kết thúc.',
        examples: [
          'Please be quiet. The baby **is sleeping**.',
          "Look! It**'s raining**.",
          "I**'m not watching** TV. You can turn it off.",
          'Sarah **is learning** Japanese this year.',
        ],
      },
      {
        title: 'Cách thêm -ing',
        text: 'Hầu hết: thêm **-ing** (read → reading). Tận cùng **-e** câm: bỏ e (come → coming, write → writing). **1 nguyên âm + 1 phụ âm** cuối: **gấp đôi phụ âm** (sit → sitting, run → running, swim → swimming). **-ie → -ying** (lie → lying, die → dying).',
      },
    ],
    tips: [
      'write → **writing** (không viết “writeing”), run → **running** (không viết “runing”).',
      'Một số động từ trạng thái (know, like, want, need…) thường **không** dùng ở dạng tiếp diễn.',
    ],
    exercises: [
      { type: 'choice', q: 'Be quiet! I ___ to the radio.', options: ['listen', 'am listening', 'listening'], answer: 'am listening', explain: 'Đang diễn ra lúc nói → am + V-ing.' },
      { type: 'gap', q: 'Look! The children ___ in the garden.', hint: 'play', answers: ['are playing', "'re playing"], explain: 'they → are playing.' },
      { type: 'gap', q: 'She ___ a letter at the moment.', hint: 'write', answers: ['is writing', "'s writing"], explain: 'write → writing (bỏ e).' },
      { type: 'choice', q: "We ___ TV now. You can turn it off.", options: ["aren't watching", "don't watch", "isn't watching"], answer: "aren't watching", explain: 'we → aren’t + V-ing.' },
      { type: 'gap', q: 'I ___ very hard this week.', hint: 'work', answers: ['am working', "'m working"], explain: 'Giai đoạn hiện tại (this week).' },
      { type: 'choice', q: 'The man is ___ in the sea.', options: ['swiming', 'swimming', 'swimmming'], answer: 'swimming', explain: 'swim → gấp đôi m → swimming.' },
      { type: 'gap', q: "It ___ now. You don't need an umbrella.", hint: 'not / rain', answers: ["isn't raining", 'is not raining', "'s not raining"], explain: 'it → isn’t raining.' },
      { type: 'choice', q: 'Listen! Somebody ___ the piano.', options: ['plays', 'is playing', 'are playing'], answer: 'is playing', explain: 'Listen! → đang xảy ra; somebody → is.' },
    ],
  },
  {
    id: 4,
    intro: 'Câu hỏi thì hiện tại tiếp diễn: đảo **am / is / are** lên trước chủ ngữ — **Are you working?**',
    sections: [
      {
        title: 'Cấu trúc câu hỏi',
        text: '**(Từ để hỏi) + am / is / are + chủ ngữ + V-ing?**',
        examples: [
          '**Are** you **listening** to me?',
          'What **is** Tom **doing**?',
          'Where **are** they **going**?',
          'Why **are** you **laughing**?',
        ],
      },
      {
        title: 'Câu trả lời ngắn',
        examples: ['“**Is** it **raining**?” “Yes, it is.” / “No, it isn’t.”', '“**Are** you **enjoying** the party?” “Yes, I am.”'],
      },
      {
        title: 'Giới từ ở cuối câu hỏi',
        text: 'Giới từ thường đứng **cuối** câu hỏi.',
        examples: ['Who **are** you **talking to**?', 'What **are** you **looking at**?'],
      },
    ],
    tips: ['Đừng quên **be**: Where are you going? ✔ — Where you going? ✘'],
    exercises: [
      { type: 'choice', q: '___ you waiting for the bus?', options: ['Are', 'Do', 'Is'], answer: 'Are', explain: 'you → Are + V-ing.' },
      { type: 'gap', q: 'What ___ Kate doing at the moment?', answers: ['is'], explain: 'Kate = she → is.' },
      { type: 'choice', q: 'Where ___?', options: ['are you going', 'you are going', 'do you going'], answer: 'are you going', explain: 'Đảo be lên trước chủ ngữ.' },
      { type: 'gap', q: '“Is your sister working today?” “No, she ___.”', answers: ["isn't", 'is not'], explain: 'she → isn’t.' },
      { type: 'gap', q: 'Why ___ the children crying?', answers: ['are'], explain: 'the children = they → are.' },
      { type: 'choice', q: 'Who ___ to on the phone?', options: ['is he talking', 'he is talking', 'does he talking'], answer: 'is he talking', explain: 'Từ hỏi + is + he + V-ing.' },
      { type: 'gap', q: '“Are you enjoying the film?” “Yes, I ___.”', answers: ['am'], explain: 'Trả lời ngắn: Yes, I am.' },
      { type: 'choice', q: '___ it raining now?', options: ['Is', 'Does', 'Are'], answer: 'Is', explain: 'it → Is + V-ing.' },
    ],
  },
  {
    id: 5,
    intro:
      'Thì hiện tại đơn dùng cho **thói quen, sự thật, việc lặp đi lặp lại**. Với **he / she / it**, động từ thêm **-s / -es**.',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['Chủ ngữ', 'Động từ'],
          rows: [
            ['I / we / you / they', 'work, like, go'],
            ['he / she / it', 'works, likes, goes'],
          ],
        },
      },
      {
        title: 'Thêm -s / -es',
        text: 'Thêm **-es** sau -s, -sh, -ch, -x, -o: pass → passes, finish → finishes, watch → watches, go → goes, do → does. **Phụ âm + y → -ies**: study → studies, fly → flies (nhưng play → plays). **have → has**.',
      },
      {
        title: 'Cách dùng',
        text: 'Hay đi với trạng từ tần suất: always, usually, often, sometimes, never, every day…',
        examples: [
          'I **drink** coffee every morning.',
          'Water **boils** at 100 degrees.',
          'My brother **lives** in Hanoi.',
          'She **always gets** up early.',
          "The shop **opens** at 9 o'clock.",
        ],
      },
    ],
    tips: [
      'Đừng quên -s với he/she/it: She work**s** in a bank.',
      'Trạng từ tần suất đứng **trước** động từ thường: I **often** go…',
    ],
    exercises: [
      { type: 'choice', q: 'My father ___ to work by bus.', options: ['go', 'goes', 'going'], answer: 'goes', explain: 'he → goes.' },
      { type: 'gap', q: 'She ___ English very well.', hint: 'speak', answers: ['speaks'], explain: 'she → speaks.' },
      { type: 'gap', q: 'Kevin ___ maths at university.', hint: 'study', answers: ['studies'], explain: 'phụ âm + y → ies.' },
      { type: 'choice', q: 'The sun ___ in the east.', options: ['rise', 'rises', 'is rise'], answer: 'rises', explain: 'Sự thật hiển nhiên; it → rises.' },
      { type: 'gap', q: 'Tom ___ his homework after dinner.', hint: 'do', answers: ['does'], explain: 'do → does.' },
      { type: 'gap', q: 'We usually ___ lunch at 12.', hint: 'have', answers: ['have'], explain: 'we → have (không thêm s).' },
      { type: 'choice', q: 'My cat ___ fish.', options: ['love', 'loves', 'lovees'], answer: 'loves', explain: 'it → loves.' },
      { type: 'gap', q: 'Anna ___ two brothers.', hint: 'have', answers: ['has'], explain: 'have → has với she.' },
    ],
  },
  {
    id: 6,
    intro: 'Phủ định thì hiện tại đơn: **don’t / doesn’t + động từ nguyên mẫu**.',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['Chủ ngữ', 'Phủ định'],
          rows: [
            ['I / we / you / they', "don't (do not) + V"],
            ['he / she / it', "doesn't (does not) + V"],
          ],
        },
        examples: [
          "I **don't like** horror films.",
          "She **doesn't eat** meat.",
          "We **don't live** near here.",
          "It **doesn't rain** much in summer.",
        ],
      },
      {
        title: 'Lưu ý',
        text: 'Sau **doesn’t** dùng động từ **nguyên mẫu** (không thêm -s): He doesn’t **work**. Với **be** không dùng don’t: I’m not hungry. ✔ — I don’t hungry. ✘',
      },
    ],
    tips: ['doesn’t + V nguyên mẫu: She doesn’t **play** tennis.', 'Không dùng don’t với be: They **aren’t** students.'],
    exercises: [
      { type: 'choice', q: 'He ___ coffee.', options: ["don't drink", "doesn't drink", "doesn't drinks"], answer: "doesn't drink", explain: 'he → doesn’t + V nguyên mẫu.' },
      { type: 'gap', q: 'I ___ TV very often.', hint: 'not / watch', answers: ["don't watch", 'do not watch'], explain: 'I → don’t watch.' },
      { type: 'gap', q: 'My sister ___ meat.', hint: 'not / eat', answers: ["doesn't eat", 'does not eat'], explain: 'she → doesn’t eat.' },
      { type: 'choice', q: 'They ___ English.', options: ["don't speak", "doesn't speak", 'not speak'], answer: "don't speak", explain: 'they → don’t.' },
      { type: 'choice', q: 'She ___ hungry.', options: ["doesn't", "isn't", "don't"], answer: "isn't", explain: 'Trước tính từ dùng be → isn’t.' },
      { type: 'gap', q: 'The bus ___ on Sundays.', hint: 'not / run', answers: ["doesn't run", 'does not run'], explain: 'it → doesn’t run.' },
      { type: 'gap', q: 'We ___ in a big city.', hint: 'not / live', answers: ["don't live", 'do not live'], explain: 'we → don’t live.' },
      { type: 'choice', q: 'Paul ___ his job.', options: ["doesn't like", "don't likes", "doesn't likes"], answer: "doesn't like", explain: 'he → doesn’t like.' },
    ],
  },
  {
    id: 7,
    intro: 'Câu hỏi thì hiện tại đơn: **Do / Does + chủ ngữ + động từ nguyên mẫu?**',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['Chủ ngữ', 'Câu hỏi'],
          rows: [
            ['I / we / you / they', 'Do you work…?'],
            ['he / she / it', 'Does she work…?'],
          ],
        },
        text: '**(Từ để hỏi) + do / does + chủ ngữ + V?**',
        examples: [
          '**Do** you **like** pizza?',
          'Where **does** your father **work**?',
          'What time **do** the shops **close**?',
          'How often **do** you **go** swimming?',
        ],
      },
      {
        title: 'Câu trả lời ngắn',
        examples: ['“Do you play the guitar?” “Yes, I **do**.” / “No, I **don’t**.”', '“Does it cost a lot?” “Yes, it **does**.” / “No, it **doesn’t**.”'],
      },
    ],
    tips: [
      'Does + V nguyên mẫu: Does he **live**…? (không viết “Does he lives?”)',
      'Câu hỏi với be không dùng do: **Are** you tired? (không nói “Do you tired?”)',
    ],
    exercises: [
      { type: 'choice', q: '___ you speak French?', options: ['Do', 'Does', 'Are'], answer: 'Do', explain: 'you → Do.' },
      { type: 'choice', q: 'Where ___?', options: ['does she live', 'does she lives', 'she lives'], answer: 'does she live', explain: 'does + chủ ngữ + V nguyên mẫu.' },
      { type: 'gap', q: 'What time ___ the film start?', answers: ['does'], explain: 'the film = it → does.' },
      { type: 'gap', q: '“Do you like cats?” “No, I ___.”', answers: ["don't", 'do not'], explain: 'Trả lời ngắn: No, I don’t.' },
      { type: 'gap', q: 'How often ___ your parents visit you?', answers: ['do'], explain: 'your parents = they → do.' },
      { type: 'choice', q: '“Does Tom drive?” “Yes, he ___.”', options: ['do', 'does', 'is'], answer: 'does', explain: 'he → does.' },
      { type: 'gap', q: 'What ___ this word mean?', answers: ['does'], explain: 'this word = it → does.' },
      { type: 'choice', q: '___ your brother tired?', options: ['Is', 'Does', 'Do'], answer: 'Is', explain: 'tired là tính từ → dùng be.' },
    ],
  },
  {
    id: 8,
    intro:
      '**Hiện tại tiếp diễn** cho việc **đang xảy ra bây giờ**; **hiện tại đơn** cho **thói quen, sự thật chung**.',
    sections: [
      {
        title: 'So sánh',
        table: {
          head: ['Hiện tại tiếp diễn', 'Hiện tại đơn'],
          rows: [
            ["I'm working now.", 'I work every day.'],
            ["She's playing tennis at the moment.", 'She plays tennis on Saturdays.'],
            ["Look! It's snowing.", 'It snows a lot in winter.'],
          ],
        },
      },
      {
        title: 'Động từ trạng thái',
        text: 'Các động từ này thường **không** dùng ở dạng tiếp diễn: **like, love, hate, want, need, know, understand, remember, believe, mean, prefer, belong**.',
        examples: ['I **want** a drink now. (không nói “I’m wanting”)', 'Do you **understand** me?', 'This bag **belongs** to Sam.'],
      },
    ],
    tips: ['Dấu hiệu tiếp diễn: now, at the moment, Look!, Listen!', 'Dấu hiệu hiện tại đơn: every day, usually, always, often, never'],
    exercises: [
      { type: 'choice', q: 'Please be quiet. I ___.', options: ['work', 'am working', 'works'], answer: 'am working', explain: 'Đang xảy ra lúc nói.' },
      { type: 'choice', q: 'Jenny ___ to the gym three times a week.', options: ['goes', 'is going', 'go'], answer: 'goes', explain: 'Thói quen → hiện tại đơn.' },
      { type: 'gap', q: 'Look! That man ___ a red hat.', hint: 'wear', answers: ['is wearing', "'s wearing"], explain: 'Look! → tiếp diễn.' },
      { type: 'gap', q: 'I ___ what you mean.', hint: 'not / understand', answers: ["don't understand", 'do not understand'], explain: 'understand là động từ trạng thái.' },
      { type: 'choice', q: 'Water ___ at 0°C.', options: ['freezes', 'is freezing', 'freeze'], answer: 'freezes', explain: 'Sự thật hiển nhiên.' },
      { type: 'gap', q: "Where's Dan? He ___ a shower.", hint: 'have', answers: ['is having', "'s having"], explain: 'have a shower là hành động → có thể tiếp diễn.' },
      { type: 'choice', q: 'I ___ a new phone. Mine is broken.', options: ['need', 'am needing', 'needs'], answer: 'need', explain: 'need là động từ trạng thái.' },
      { type: 'gap', q: 'We usually ___ dinner at 7.', hint: 'eat', answers: ['eat'], explain: 'usually → hiện tại đơn.' },
    ],
  },
  {
    id: 9,
    intro:
      '**have** và **have got** đều nghĩa là “có” (sở hữu, gia đình, bệnh tật, đặc điểm). Ở thì hiện tại, nghĩa giống nhau.',
    sections: [
      {
        title: 'Cấu trúc',
        table: {
          head: ['', 'have', 'have got'],
          rows: [
            ['Khẳng định', 'I have a car. / She has a car.', "I've got a car. / She's got a car."],
            ['Phủ định', "I don't have… / She doesn't have…", "I haven't got… / She hasn't got…"],
            ['Câu hỏi', 'Do you have…? / Does she have…?', 'Have you got…? / Has she got…?'],
          ],
        },
        examples: ["We**'ve got** two children.", '**Have** you **got** a pen?', "He **doesn't have** any brothers.", 'I **have** a headache.'],
      },
      {
        title: 'Lưu ý',
        text: 'Quá khứ chỉ dùng **had** (không dùng “had got”): I **had** a bike when I was a child. Với hành động (ăn, uống, tắm, vui chơi…) chỉ dùng **have**: have breakfast, have a shower, have a good time.',
      },
    ],
    tips: ['Has she got…? ✔ — Does she has…? ✘ (đúng: Does she **have**…?)', 'I **have** breakfast at 7. (không nói “I’ve got breakfast”)'],
    exercises: [
      { type: 'choice', q: 'She ___ blue eyes.', options: ['has got', 'have got', 'is got'], answer: 'has got', explain: 'she → has got.' },
      { type: 'gap', q: '___ you got a car?', answers: ['have'], explain: 'Câu hỏi: Have you got…?' },
      { type: 'gap', q: 'I ___ any money.', hint: 'not / have got', answers: ["haven't got", 'have not got'], explain: 'I → haven’t got.' },
      { type: 'choice', q: 'Does your brother ___ a job?', options: ['has', 'have', 'having'], answer: 'have', explain: 'does + V nguyên mẫu → have.' },
      { type: 'gap', q: 'We ___ a big house when I was young.', hint: 'have – quá khứ', answers: ['had'], explain: 'Quá khứ của have là had.' },
      { type: 'choice', q: 'I usually ___ a shower in the morning.', options: ['have', 'have got', 'has got'], answer: 'have', explain: 'Hành động → chỉ dùng have.' },
      { type: 'gap', q: "Tom ___ a cold. He's in bed.", hint: 'have got', answers: ['has got', "'s got"], explain: 'he → has got.' },
      { type: 'gap', q: '“Do you have a dog?” “No, I ___.”', answers: ["don't", 'do not'], explain: 'Do you have…? → No, I don’t.' },
    ],
  },
];
