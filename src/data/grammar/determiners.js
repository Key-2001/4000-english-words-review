// Từ hạn định và đại từ — Units 74–84 (nội dung biên soạn riêng)
export default [
  {
    id: 74,
    intro: '**this / these** = cái này / những cái này (**gần**); **that / those** = cái kia / những cái kia (**xa**).',
    sections: [
      {
        title: 'Bảng tổng hợp',
        table: {
          head: ['', 'Gần', 'Xa'],
          rows: [
            ['Số ít', 'this', 'that'],
            ['Số nhiều', 'these', 'those'],
          ],
        },
        examples: ['**This** bag is mine. (cầm trong tay)', 'Look at **that** house over there.', '**These** shoes are too small.', 'Who are **those** people?'],
      },
      {
        title: 'Dùng như đại từ',
        examples: ['**This** is my friend, Lan. (giới thiệu)', 'Is **that** your car?', "“I'm sorry I'm late.” “**That's** OK.”", 'Hello, **this is** Nam. (trên điện thoại)'],
      },
    ],
    tips: ['these / those + danh từ **số nhiều**: these books (không nói “this books”).'],
    exercises: [
      { type: 'choice', q: '___ shoes are very comfortable. (đang mang)', options: ['This', 'These', 'Those'], answer: 'These', explain: 'Gần, số nhiều → these.' },
      { type: 'choice', q: 'Can you see ___ bird in the tree over there?', options: ['this', 'that', 'these'], answer: 'that', explain: 'Xa, số ít → that.' },
      { type: 'gap', q: 'Who are ___ children over there?', answers: ['those'], explain: 'Xa, số nhiều → those.' },
      { type: 'gap', q: 'Mum, ___ is my friend, Hoa.', answers: ['this'], explain: 'Giới thiệu → this is.' },
      { type: 'choice', q: '“Thank you!” “___ all right.”', options: ["That's", "This's", "Those are"], answer: "That's", explain: 'Đáp lại → That’s all right.' },
      { type: 'choice', q: 'How much are ___ apples here?', options: ['this', 'these', 'that'], answer: 'these', explain: 'Gần, số nhiều.' },
      { type: 'gap', q: 'I love ___ song! Turn it up! (đang phát)', answers: ['this'], explain: 'Đang nghe → this.' },
      { type: 'choice', q: 'Are ___ your keys on the table over there?', options: ['these', 'those', 'that'], answer: 'those', explain: 'Xa, số nhiều.' },
    ],
  },
  {
    id: 75,
    intro: 'Dùng **one** (số ít) / **ones** (số nhiều) để **không lặp lại danh từ** đã nhắc.',
    sections: [
      {
        title: 'one / ones',
        examples: ["“Which bag do you want?” “The red **one**.”", "These shoes are too small. I need bigger **ones**.", "I don't have a pen. Can you lend me **one**?", "Which **one** do you prefer?"],
      },
      {
        title: 'Không dùng one với danh từ không đếm được',
        text: 'I like white wine better than red. (không nói “red one” với wine nói chung). Với không đếm được thường bỏ danh từ hoặc lặp lại.',
      },
    ],
    tips: ['a + tính từ + **one**: a new one, a big one.', 'the + tính từ + **ones**: the blue ones.'],
    exercises: [
      { type: 'choice', q: 'I don’t like the black jacket. I prefer the blue ___.', options: ['one', 'ones', 'it'], answer: 'one', explain: 'Số ít → one.' },
      { type: 'choice', q: 'These apples are bad. Let’s buy some fresh ___.', options: ['one', 'ones', 'them'], answer: 'ones', explain: 'Số nhiều → ones.' },
      { type: 'gap', q: 'My phone is old. I want a new ___.', answers: ['one'], explain: 'a new one.' },
      { type: 'gap', q: '“Which shoes are yours?” “The white ___.”', answers: ['ones'], explain: 'shoes số nhiều → ones.' },
      { type: 'choice', q: 'Do you need a pencil? I have ___.', options: ['one', 'ones', 'it'], answer: 'one', explain: 'một cái → one.' },
      { type: 'gap', q: '“Which ___ is your house?” “The one with the green door.”', answers: ['one'], explain: 'Which one…?' },
      { type: 'choice', q: 'These glasses are dirty. Can I have clean ___?', options: ['one', 'ones', 'it'], answer: 'ones', explain: 'Số nhiều.' },
      { type: 'gap', q: 'This room is too small. Do you have a bigger ___?', answers: ['one'], explain: 'a bigger one.' },
    ],
  },
  {
    id: 76,
    intro: '**some** thường dùng trong **câu khẳng định**; **any** dùng trong **câu phủ định và câu hỏi**.',
    sections: [
      {
        title: 'Cách dùng cơ bản',
        table: {
          head: ['some', 'any'],
          rows: [
            ['Khẳng định: I have some money.', "Phủ định: I don't have any money."],
            ['Lời mời / yêu cầu: Would you like some tea?', 'Câu hỏi: Have you got any questions?'],
            ['Can I have some water?', 'Is there any milk?'],
          ],
        },
        text: 'Dùng với danh từ **số nhiều** hoặc **không đếm được**.',
      },
      {
        title: 'some / any đứng một mình',
        examples: ["“Do you have any coffee?” “Yes, I have **some**.” / “No, I don't have **any**.”"],
      },
    ],
    tips: ['Lời mời dùng **some** dù là câu hỏi: Would you like **some** cake?', 'any + danh từ số nhiều/không đếm được.'],
    exercises: [
      { type: 'choice', q: 'There are ___ letters for you.', options: ['some', 'any', 'a'], answer: 'some', explain: 'Khẳng định → some.' },
      { type: 'choice', q: "I don't have ___ brothers or sisters.", options: ['some', 'any', 'a'], answer: 'any', explain: 'Phủ định → any.' },
      { type: 'gap', q: 'Are there ___ shops near your house?', answers: ['any'], explain: 'Câu hỏi → any.' },
      { type: 'gap', q: 'Would you like ___ more rice?', answers: ['some'], explain: 'Lời mời → some.' },
      { type: 'choice', q: 'Can I have ___ water, please?', options: ['some', 'any', 'a'], answer: 'some', explain: 'Yêu cầu → some.' },
      { type: 'gap', q: "We didn't buy ___ bread.", answers: ['any'], explain: 'Phủ định → any.' },
      { type: 'choice', q: '“Have you got any money?” “Yes, I have ___.”', options: ['some', 'any', 'one'], answer: 'some', explain: 'Khẳng định → some.' },
      { type: 'gap', q: 'Have you got ___ questions?', answers: ['any'], explain: 'Câu hỏi → any.' },
    ],
  },
  {
    id: 77,
    intro: '**not … any** = **no** (không có). **none** dùng **một mình** (không có danh từ theo sau).',
    sections: [
      {
        title: 'not + any = no',
        table: {
          head: ['not … any', 'no'],
          rows: [
            ["There aren't any chairs.", 'There are no chairs.'],
            ["I haven't got any money.", "I've got no money."],
          ],
        },
        text: 'Sau **no** dùng động từ **khẳng định**: There are **no** buses. (không nói “There aren’t no buses”).',
      },
      {
        title: 'none',
        text: '**none** = không cái nào / không chút nào, dùng một mình. **none of** + danh từ xác định.',
        examples: ['“How much money do you have?” “**None**.”', '**None of** my friends came.'],
      },
    ],
    tips: ["Không dùng 2 phủ định: I don't have no time ✘ → I **don't** have **any** time / I have **no** time ✔"],
    exercises: [
      { type: 'choice', q: 'There are ___ eggs in the fridge. We need to buy some.', options: ['any', 'no', 'none'], answer: 'no', explain: 'Khẳng định + no.' },
      { type: 'choice', q: "We don't have ___ milk.", options: ['no', 'any', 'none'], answer: 'any', explain: "not + any." },
      { type: 'gap', q: '“How many people came?” “___. Nobody came.”', answers: ['none'], explain: 'Đứng một mình → none.' },
      { type: 'choice', q: 'I have ___ time today. Sorry!', options: ['no', 'any', 'none'], answer: 'no', explain: 'no + danh từ.' },
      { type: 'gap', q: "There aren't ___ buses after midnight.", answers: ['any'], explain: "aren't + any." },
      { type: 'choice', q: '___ of the students passed the test. It was very hard.', options: ['No', 'None', 'Any'], answer: 'None', explain: 'none of + danh từ.' },
      { type: 'gap', q: 'There is ___ sugar in my coffee. I don’t like it sweet.', answers: ['no'], explain: 'is + no.' },
      { type: 'choice', q: 'She has ___ friends in this city. She’s new here.', options: ['no', 'any', 'none'], answer: 'no', explain: 'has + no.' },
    ],
  },
  {
    id: 78,
    intro: '**not + anybody / anything** = **nobody / nothing** (không ai / không gì).',
    sections: [
      {
        title: 'Bảng tương đương',
        table: {
          head: ['not + …', '= no…'],
          rows: [
            ["I didn't see anybody / anyone.", 'I saw nobody / no one.'],
            ["She doesn't know anything.", 'She knows nothing.'],
          ],
        },
      },
      {
        title: 'nobody / nothing làm chủ ngữ',
        text: 'Đứng đầu câu dùng **nobody / nothing** + động từ **khẳng định**, chia số ít.',
        examples: ['**Nobody** lives in that house.', '**Nothing** happened.', '“Who called?” “**No one**.”'],
      },
    ],
    tips: ["Nobody **knows** ✔ — Nobody doesn't know ✘", 'anybody = anyone; nobody = no one'],
    exercises: [
      { type: 'choice', q: "I didn't say ___.", options: ['nothing', 'anything', 'something'], answer: 'anything', explain: 'not + anything.' },
      { type: 'choice', q: '___ called while you were out.', options: ['Anybody', 'Nobody', 'Nothing'], answer: 'Nobody', explain: 'Đầu câu → nobody.' },
      { type: 'gap', q: "There isn't ___ in the room. It's empty. (người)", answers: ['anybody', 'anyone'], explain: "isn't + anybody." },
      { type: 'gap', q: "“What did you buy?” “___. The shop was closed.”", answers: ['nothing'], explain: 'Không gì → nothing.' },
      { type: 'choice', q: 'I know ___ about cars.', options: ['nothing', 'anything', 'nobody'], answer: 'nothing', explain: 'Khẳng định + nothing.' },
      { type: 'choice', q: 'Nobody ___ the answer.', options: ['knows', "doesn't know", 'know'], answer: 'knows', explain: 'nobody + động từ khẳng định, số ít.' },
      { type: 'gap', q: "We didn't meet ___ interesting at the party.", answers: ['anybody', 'anyone'], explain: "didn't + anybody." },
      { type: 'choice', q: 'Is ___ wrong? You look worried.', options: ['anything', 'nothing', 'nobody'], answer: 'anything', explain: 'Câu hỏi → anything.' },
    ],
  },
  {
    id: 79,
    intro: '**some- / any- / no- / every-** kết hợp với **-body / -one** (người), **-thing** (vật), **-where** (nơi chốn).',
    sections: [
      {
        title: 'Bảng tổng hợp',
        table: {
          head: ['', 'người', 'vật', 'nơi chốn'],
          rows: [
            ['some-', 'somebody / someone', 'something', 'somewhere'],
            ['any-', 'anybody / anyone', 'anything', 'anywhere'],
            ['no-', 'nobody / no one', 'nothing', 'nowhere'],
            ['every-', 'everybody / everyone', 'everything', 'everywhere'],
          ],
        },
        examples: ['**Someone** is at the door.', "I can't find my keys **anywhere**.", 'Let’s go **somewhere** quiet.', '**Everyone** loves him.'],
      },
      {
        title: '+ tính từ / to V',
        text: 'Tính từ đứng **sau**: something **nice**, somewhere **warm**. Có thể thêm **to V**: something **to eat**, nowhere **to sit**.',
        examples: ['I want **something cold to drink**.', 'There is **nothing to do** here.'],
      },
    ],
    tips: ['something new ✔ — new something ✘', 'everybody **is** (số ít)'],
    exercises: [
      { type: 'choice', q: "I'm hungry. I want ___ to eat.", options: ['something', 'anything', 'somewhere'], answer: 'something', explain: 'Khẳng định, vật → something.' },
      { type: 'choice', q: 'Did you go ___ last weekend?', options: ['somewhere', 'anywhere', 'nowhere'], answer: 'anywhere', explain: 'Câu hỏi, nơi chốn → anywhere.' },
      { type: 'gap', q: '___ is knocking at the door. Can you open it?', answers: ['somebody', 'someone'], explain: 'Ai đó → somebody.' },
      { type: 'choice', q: 'I looked for my glasses ___, but I couldn’t find them.', options: ['everywhere', 'nowhere', 'anything'], answer: 'everywhere', explain: 'Khắp nơi → everywhere.' },
      { type: 'gap', q: '___ in my family likes football. All of us!', answers: ['everybody', 'everyone'], explain: 'Mọi người → everybody.' },
      { type: 'choice', q: 'Let’s go somewhere ___.', options: ['quiet', 'quietly', 'quietness'], answer: 'quiet', explain: 'somewhere + tính từ.' },
      { type: 'gap', q: 'There’s ___ to sit. All the chairs are taken.', answers: ['nowhere'], explain: 'Không chỗ nào → nowhere.' },
      { type: 'choice', q: 'Everyone ___ here on time.', options: ['is', 'are', 'were be'], answer: 'is', explain: 'everyone → số ít.' },
    ],
  },
  {
    id: 80,
    intro: '**every** + danh từ **số ít** (mỗi, mọi); **all** + danh từ **số nhiều / không đếm được** (tất cả).',
    sections: [
      {
        title: 'every',
        text: '**every + danh từ số ít + động từ số ít**.',
        examples: ['**Every** student **has** a book.', 'I go swimming **every** day.', '**Every** room in the hotel has a TV.'],
      },
      {
        title: 'all',
        text: '**all + danh từ số nhiều / không đếm được** · **all the / all my** + danh từ xác định.',
        examples: ['**All** students need a book.', '**All the** rooms have a TV.', 'I spent **all my** money.'],
      },
      {
        title: 'every day và all day',
        table: {
          head: ['every day', 'all day'],
          rows: [['mỗi ngày (thói quen)', 'cả ngày (từ sáng tới tối)']],
        },
        examples: ['I work **every day**.', 'It rained **all day** yesterday.'],
      },
    ],
    tips: ['Every student **is** ✔ — Every students are ✘', 'everything ✔ (mọi thứ) — all (đứng một mình với nghĩa mọi thứ) ít dùng'],
    exercises: [
      { type: 'choice', q: '___ child in the class got a prize.', options: ['Every', 'All', 'All of'], answer: 'Every', explain: 'every + số ít.' },
      { type: 'choice', q: '___ the shops were closed on Tet.', options: ['Every', 'All', 'Each'], answer: 'All', explain: 'all the + số nhiều.' },
      { type: 'gap', q: 'I read the newspaper ___ morning.', answers: ['every'], explain: 'Mỗi sáng → every morning.' },
      { type: 'choice', q: 'I was so tired that I slept ___ day.', options: ['every', 'all', 'each'], answer: 'all', explain: 'Cả ngày → all day.' },
      { type: 'choice', q: 'Every house in this street ___ a garden.', options: ['has', 'have', 'having'], answer: 'has', explain: 'every + động từ số ít.' },
      { type: 'gap', q: 'She ate ___ the cake. There’s nothing left.', answers: ['all'], explain: 'Tất cả → all.' },
      { type: 'choice', q: '___ is ready. Let’s start.', options: ['Everything', 'All', 'Every'], answer: 'Everything', explain: 'Mọi thứ → everything.' },
      { type: 'gap', q: 'We go to the beach ___ summer.', answers: ['every'], explain: 'Mỗi mùa hè.' },
    ],
  },
  {
    id: 81,
    intro: '**all / most / some / any / no / none** có thể đi trực tiếp với danh từ (nói chung) hoặc **+ of the / my…** (nhóm xác định).',
    sections: [
      {
        title: 'Không có of (nói chung)',
        examples: ['**Most** people like music.', '**Some** cars are electric.', '**All** children love games.'],
      },
      {
        title: '+ of + the / my / these… (nhóm xác định)',
        examples: ['**Most of the** students passed.', '**Some of my** friends live abroad.', '**None of these** books are mine.', '**All (of) the** food was delicious.'],
      },
      {
        title: '+ of + đại từ tân ngữ',
        text: 'Với đại từ phải có **of**: all **of us**, some **of them**, none **of it**.',
        examples: ['**Most of them** were tired.', '**All of us** agreed.'],
      },
    ],
    tips: ['Most people ✔ — Most of people ✘ (people nói chung không có the)', 'all of them ✔ — all them ✘'],
    exercises: [
      { type: 'choice', q: '___ people like holidays.', options: ['Most', 'Most of', 'The most'], answer: 'Most', explain: 'Nói chung → Most + danh từ.' },
      { type: 'choice', q: '___ my friends are students.', options: ['Most', 'Most of', 'Most the'], answer: 'Most of', explain: 'Nhóm xác định → most of my.' },
      { type: 'gap', q: '___ of the questions were easy, but one was difficult.', answers: ['most', 'some'], explain: 'Phần lớn / một số câu.' },
      { type: 'choice', q: 'I invited ten people, but ___ them came.', options: ['none of', 'no', 'none'], answer: 'none of', explain: 'none of + đại từ.' },
      { type: 'gap', q: 'All ___ us were very happy.', answers: ['of'], explain: 'all of + đại từ.' },
      { type: 'choice', q: 'Some ___ cheese has gone bad.', options: ['of the', 'the', 'of'], answer: 'of the', explain: 'some of the + danh từ.' },
      { type: 'choice', q: 'Have you read ___ of these books?', options: ['any', 'no', 'none'], answer: 'any', explain: 'Câu hỏi → any of.' },
      { type: 'gap', q: '___ of my money is in the bank. I keep only a little at home.', answers: ['most'], explain: 'Phần lớn.' },
    ],
  },
  {
    id: 82,
    intro: 'Nói về **hai** người/vật: **both** (cả hai), **either** (một trong hai), **neither** (không cái nào trong hai).',
    sections: [
      {
        title: 'Cách dùng',
        table: {
          head: ['Từ', 'Nghĩa', 'Ví dụ'],
          rows: [
            ['both + số nhiều', 'cả hai', 'Both restaurants are good.'],
            ['either + số ít', 'cái nào trong hai cũng được', 'You can sit at either table.'],
            ['neither + số ít', 'không cái nào trong hai', 'Neither answer is correct.'],
          ],
        },
      },
      {
        title: '+ of + the / đại từ',
        examples: ['**Both of** my parents are teachers.', "I don't like **either of** them.", '**Neither of** us could swim.'],
      },
      {
        title: 'both … and / either … or / neither … nor',
        examples: ['**Both** Tom **and** Anna came.', 'You can have **either** tea **or** coffee.', '**Neither** Lan **nor** Mai was there.'],
      },
    ],
    tips: ['Neither đã mang nghĩa phủ định: Neither of them **is** here. (không dùng thêm not)'],
    exercises: [
      { type: 'choice', q: '___ my sisters are married.', options: ['Both', 'Both of', 'Either'], answer: 'Both of', explain: 'both of + my + số nhiều.' },
      { type: 'choice', q: 'I like ___ films. They’re both great.', options: ['both', 'either', 'neither'], answer: 'both', explain: 'Cả hai.' },
      { type: 'gap', q: '“Tea or coffee?” “___ — I don’t mind.”', answers: ['either'], explain: 'Cái nào cũng được → either.' },
      { type: 'choice', q: '___ of the two answers is right. Both are wrong.', options: ['Both', 'Either', 'Neither'], answer: 'Neither', explain: 'Không cái nào.' },
      { type: 'gap', q: 'You can pay ___ by cash or by card.', answers: ['either'], explain: 'either … or.' },
      { type: 'gap', q: '___ Nam nor Hoa came to class today.', answers: ['neither'], explain: 'neither … nor.' },
      { type: 'choice', q: "I didn't like ___ of the two hotels.", options: ['either', 'neither', 'both'], answer: 'either', explain: "not + either." },
      { type: 'gap', q: '___ my mother and my father work in a hospital.', answers: ['both'], explain: 'both … and.' },
    ],
  },
  {
    id: 83,
    intro: '**a lot of / lots of** (nhiều) dùng với mọi loại danh từ; **much** + không đếm được, **many** + đếm được số nhiều (chủ yếu trong **câu hỏi, phủ định**).',
    sections: [
      {
        title: 'much và many',
        table: {
          head: ['much + không đếm được', 'many + số nhiều'],
          rows: [
            ['much money, much time', 'many friends, many books'],
            ['How much water…?', 'How many people…?'],
            ["I don't have much time.", "There aren't many shops here."],
          ],
        },
      },
      {
        title: 'a lot of trong câu khẳng định',
        text: 'Trong câu **khẳng định** thường dùng **a lot of** (tự nhiên hơn much).',
        examples: ['We spent **a lot of** money. (không nói “much money” trong câu khẳng định)', 'She has **a lot of** friends.', 'I like it **a lot**.'],
      },
    ],
    tips: ['How **much** money? / How **many** apples?', 'I drink a lot of water. ✔ — I drink much water. (ít tự nhiên)'],
    exercises: [
      { type: 'choice', q: 'How ___ sugar do you take in your coffee?', options: ['much', 'many', 'a lot'], answer: 'much', explain: 'sugar không đếm được.' },
      { type: 'choice', q: 'How ___ brothers do you have?', options: ['much', 'many', 'lot'], answer: 'many', explain: 'brothers đếm được.' },
      { type: 'gap', q: "I don't have ___ free time this week.", answers: ['much'], explain: 'time không đếm được + phủ định.' },
      { type: 'gap', q: "There weren't ___ people at the meeting.", answers: ['many'], explain: 'people đếm được.' },
      { type: 'choice', q: 'She drinks ___ water every day.', options: ['a lot of', 'many', 'much of'], answer: 'a lot of', explain: 'Câu khẳng định → a lot of.' },
      { type: 'choice', q: 'We saw ___ beautiful places in Vietnam.', options: ['much', 'a lot of', 'a lot'], answer: 'a lot of', explain: 'a lot of + danh từ.' },
      { type: 'gap', q: 'Thank you very ___!', answers: ['much'], explain: 'Thank you very much.' },
      { type: 'choice', q: 'I like this song ___.', options: ['a lot', 'a lot of', 'many'], answer: 'a lot', explain: 'Đứng cuối câu → a lot.' },
    ],
  },
  {
    id: 84,
    intro: '**little / a little** + không đếm được; **few / a few** + số nhiều. Có **a** = “một ít (đủ dùng)”; không có **a** = “rất ít (gần như không)”.',
    sections: [
      {
        title: 'a little / a few = một ít (tích cực)',
        examples: ['I have **a little** money. I can buy a coffee.', 'I have **a few** friends here. I’m not lonely.'],
      },
      {
        title: 'little / few = rất ít (tiêu cực)',
        examples: ['I have **little** money. I can’t buy anything.', 'He has **few** friends. He’s often lonely.'],
      },
      {
        title: 'Tổng hợp',
        table: {
          head: ['', 'Không đếm được', 'Đếm được số nhiều'],
          rows: [
            ['Một ít (đủ)', 'a little water', 'a few eggs'],
            ['Rất ít (không đủ)', 'little water', 'few eggs'],
          ],
        },
      },
    ],
    tips: ['a few **days** ✔ — a little days ✘', 'Trong văn nói thường dùng “not much / not many” thay cho little / few.'],
    exercises: [
      { type: 'choice', q: 'Can I have ___ milk in my tea?', options: ['a little', 'a few', 'few'], answer: 'a little', explain: 'milk không đếm được.' },
      { type: 'choice', q: 'I’m going away for ___ days.', options: ['a little', 'a few', 'little'], answer: 'a few', explain: 'days đếm được.' },
      { type: 'choice', q: 'Hurry up! We have very ___ time.', options: ['little', 'few', 'a few'], answer: 'little', explain: 'Rất ít thời gian (tiêu cực).' },
      { type: 'gap', q: 'There are a ___ apples left. Do you want one?', answers: ['few'], explain: 'apples → a few.' },
      { type: 'choice', q: 'The town is boring. There are ___ things to do.', options: ['few', 'little', 'a little'], answer: 'few', explain: 'Rất ít (tiêu cực), đếm được.' },
      { type: 'gap', q: 'I speak a ___ French — enough to order food.', answers: ['little'], explain: 'French không đếm được.' },
      { type: 'choice', q: 'I invited ___ friends to dinner.', options: ['a little', 'a few', 'little'], answer: 'a few', explain: 'friends đếm được, ý tích cực.' },
      { type: 'gap', q: "Add a ___ salt. Not too much!", answers: ['little'], explain: 'salt không đếm được.' },
    ],
  },
];
