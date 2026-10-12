// Mạo từ a/an/the và danh từ — Units 65–73 (nội dung biên soạn riêng)
export default [
  {
    id: 65,
    intro: '**a / an** = một (không xác định), dùng trước **danh từ số ít đếm được**. **an** đứng trước **âm** nguyên âm.',
    sections: [
      {
        title: 'a hay an?',
        text: 'Chọn theo **âm đầu** khi đọc, không theo chữ cái.',
        table: {
          head: ['a + phụ âm', 'an + nguyên âm'],
          rows: [
            ['a book, a car', 'an apple, an egg'],
            ['a university (/juː/)', 'an hour (h câm)'],
            ['a European country (/jʊə/)', 'an umbrella, an old man'],
          ],
        },
      },
      {
        title: 'Cách dùng',
        text: 'Nói **nghề nghiệp**, giới thiệu thứ gì **lần đầu**, hoặc nói “**một cái** trong số nhiều”.',
        examples: ["She's **a** nurse. (không nói “She's nurse”)", 'I bought **an** umbrella yesterday.', 'Is there **a** bank near here?', 'He is **an** honest man.'],
      },
    ],
    tips: ['an hour ✔ (h câm) — a hour ✘', 'a uniform ✔ (đọc /juː/) — an uniform ✘', 'Không dùng a/an với danh từ số nhiều hoặc không đếm được: a water ✘'],
    exercises: [
      { type: 'choice', q: 'I eat ___ apple every day.', options: ['a', 'an', '–'], answer: 'an', explain: 'apple bắt đầu bằng âm nguyên âm.' },
      { type: 'choice', q: 'My father is ___ engineer.', options: ['a', 'an', '–'], answer: 'an', explain: 'engineer bắt đầu bằng âm /e/.' },
      { type: 'choice', q: 'We waited for ___ hour.', options: ['a', 'an', '–'], answer: 'an', explain: 'h câm → an hour.' },
      { type: 'choice', q: 'She studies at ___ university in Hanoi.', options: ['a', 'an', '–'], answer: 'a', explain: 'university đọc /juː/ → a.' },
      { type: 'gap', q: "He's ___ doctor.", answers: ['a'], explain: 'Nghề nghiệp → a.' },
      { type: 'gap', q: "It's ___ interesting book.", answers: ['an'], explain: 'interesting → an.' },
      { type: 'choice', q: 'I need ___ new shoes.', options: ['a', 'an', '–'], answer: '–', explain: 'shoes số nhiều → không dùng a.' },
      { type: 'gap', q: 'Can I have ___ orange juice, please?', answers: ['an'], explain: 'Một cốc nước cam → an orange juice.' },
    ],
  },
  {
    id: 66,
    intro: '**Danh từ số nhiều** thường thêm **-s / -es**; một số danh từ có dạng **bất quy tắc**.',
    sections: [
      {
        title: 'Quy tắc thêm -s / -es',
        table: {
          head: ['Quy tắc', 'Ví dụ'],
          rows: [
            ['Thêm -s', 'book → books, car → cars'],
            ['-s, -sh, -ch, -x → -es', 'bus → buses, dish → dishes, watch → watches, box → boxes'],
            ['phụ âm + y → -ies', 'city → cities, baby → babies (nhưng day → days)'],
            ['-f / -fe → -ves', 'knife → knives, leaf → leaves, wife → wives'],
            ['-o → -es (một số từ)', 'potato → potatoes, tomato → tomatoes'],
          ],
        },
      },
      {
        title: 'Số nhiều bất quy tắc',
        table: {
          head: ['Số ít', 'Số nhiều', 'Số ít', 'Số nhiều'],
          rows: [
            ['man', 'men', 'child', 'children'],
            ['woman', 'women', 'person', 'people'],
            ['foot', 'feet', 'tooth', 'teeth'],
            ['mouse', 'mice', 'fish', 'fish'],
          ],
        },
      },
      {
        title: 'Danh từ luôn ở số nhiều',
        text: '**trousers, jeans, shorts, glasses, scissors** luôn số nhiều: My jeans **are** new. **people** cũng là số nhiều: People **are** friendly here.',
      },
    ],
    tips: ['people **are** ✔ — people is ✘', 'a pair of jeans / glasses (một chiếc quần jean / một cặp kính)'],
    exercises: [
      { type: 'gap', q: 'There are three ___ in the bus. (box)', answers: ['boxes'], explain: 'x → es.' },
      { type: 'gap', q: 'How many ___ are there in your class? (child)', answers: ['children'], explain: 'child → children.' },
      { type: 'choice', q: 'I visited two ___ in Japan.', options: ['citys', 'cities', 'cityes'], answer: 'cities', explain: 'phụ âm + y → ies.' },
      { type: 'gap', q: 'Brush your ___ before bed. (tooth)', answers: ['teeth'], explain: 'tooth → teeth.' },
      { type: 'choice', q: 'My new jeans ___ too long.', options: ['is', 'are', 'am'], answer: 'are', explain: 'jeans luôn số nhiều.' },
      { type: 'gap', q: 'We need some ___ for the salad. (tomato)', answers: ['tomatoes'], explain: 'tomato → tomatoes.' },
      { type: 'choice', q: 'Many ___ were waiting outside.', options: ['person', 'people', 'peoples'], answer: 'people', explain: 'person → people.' },
      { type: 'gap', q: 'Put the forks and ___ on the table. (knife)', answers: ['knives'], explain: '-fe → -ves.' },
    ],
  },
  {
    id: 67,
    intro: '**Danh từ đếm được** (a bottle, two bottles) và **không đếm được** (water, rice, money) — không đếm được thì **không có số nhiều, không dùng a/an**.',
    sections: [
      {
        title: 'Phân biệt',
        table: {
          head: ['Đếm được', 'Không đếm được'],
          rows: [
            ['a bottle / two bottles', 'water (không có “a water”, “waters”)'],
            ['a car / cars', 'money, rice, bread, music'],
            ['a job', 'work'],
            ['a suggestion', 'advice, information, news'],
          ],
        },
      },
      {
        title: 'Đo lường danh từ không đếm được',
        text: 'Dùng **some** hoặc **đơn vị**: a glass of water, a piece of cake, a bottle of milk, a bowl of rice, a piece of advice.',
        examples: ['I need **some money**.', 'Can I have **a glass of** water?', 'He gave me **some** good **advice**.', 'The **news is** good. (news số ít)'],
      },
    ],
    tips: ['an advice ✘ → **some advice / a piece of advice** ✔', 'informations ✘ → **information** ✔'],
    exercises: [
      { type: 'choice', q: 'Can you give me some ___?', options: ['advice', 'advices', 'an advice'], answer: 'advice', explain: 'advice không đếm được.' },
      { type: 'choice', q: 'I would like ___ water, please.', options: ['a', 'some', 'an'], answer: 'some', explain: 'water không đếm được → some.' },
      { type: 'gap', q: 'Could I have a ___ of cake?', answers: ['piece', 'slice'], explain: 'a piece of cake.' },
      { type: 'choice', q: 'The ___ on TV was terrible.', options: ['news', 'new', 'a news'], answer: 'news', explain: 'news không đếm được.' },
      { type: 'gap', q: "I'm looking for ___ job.", answers: ['a'], explain: 'job đếm được → a job.' },
      { type: 'choice', q: 'We need more ___ about the trip.', options: ['informations', 'information', 'an information'], answer: 'information', explain: 'information không đếm được.' },
      { type: 'gap', q: 'Would you like a ___ of tea?', answers: ['cup'], explain: 'a cup of tea.' },
      { type: 'choice', q: 'Money ___ everything.', options: ["isn't", "aren't", "don't"], answer: "isn't", explain: 'Không đếm được → động từ số ít.' },
    ],
  },
  {
    id: 68,
    intro: 'Một số danh từ vừa **đếm được** vừa **không đếm được**, nghĩa hơi khác: **a cake** (cả cái bánh) / **some cake** (một ít bánh).',
    sections: [
      {
        title: 'Một cái hay một phần?',
        table: {
          head: ['Đếm được (cả cái)', 'Không đếm được (chất liệu / một phần)'],
          rows: [
            ['a cake / two cakes', 'some cake (một miếng / ít bánh)'],
            ['a chicken (con gà)', 'some chicken (thịt gà)'],
            ['a paper (tờ báo)', 'some paper (giấy)'],
            ['a coffee (một cốc cà phê)', 'coffee (cà phê nói chung)'],
          ],
        },
        examples: ['She made **a cake** for the party.', 'Would you like **some cake**?', 'I bought **a paper** to read on the train.', 'I need **some paper** to write on.'],
      },
      {
        title: 'a/an, some và số nhiều',
        text: '**a/an** + số ít đếm được · **some** + số nhiều hoặc không đếm được.',
        examples: ['I ate **an** apple / **some** apples / **some** bread.'],
      },
    ],
    tips: ['Trong quán: “Two **coffees**, please.” (= two cups of coffee) là cách nói tự nhiên.'],
    exercises: [
      { type: 'choice', q: 'I bought ___ bread at the bakery.', options: ['a', 'some', 'an'], answer: 'some', explain: 'bread không đếm được.' },
      { type: 'choice', q: 'Would you like ___ chicken? — Yes, just a little.', options: ['a', 'some', 'an'], answer: 'some', explain: 'Thịt gà → không đếm được.' },
      { type: 'choice', q: 'There’s ___ cat in the garden.', options: ['a', 'some', '–'], answer: 'a', explain: 'cat đếm được, số ít.' },
      { type: 'gap', q: 'I need ___ paper for the printer.', answers: ['some'], explain: 'paper (giấy) không đếm được.' },
      { type: 'gap', q: 'She bought ___ new dress.', answers: ['a'], explain: 'dress đếm được.' },
      { type: 'choice', q: 'We ate ___ delicious cake. It was a whole chocolate cake!', options: ['a', 'some', '–'], answer: 'a', explain: 'Cả cái bánh → a cake.' },
      { type: 'gap', q: 'Can I have ___ cheese on my pizza?', answers: ['some'], explain: 'cheese không đếm được.' },
      { type: 'choice', q: 'There are ___ eggs in the fridge.', options: ['a', 'some', 'an'], answer: 'some', explain: 'Số nhiều → some.' },
    ],
  },
  {
    id: 69,
    intro: '**a / an** khi nhắc tới **lần đầu** hoặc không xác định; **the** khi người nghe **đã biết** đó là cái nào.',
    sections: [
      {
        title: 'Lần đầu và lần sau',
        examples: ['I saw **a** dog and **a** cat. **The** dog was black and **the** cat was white.', 'We stayed at **a** hotel. **The** hotel was near the beach.'],
      },
      {
        title: 'Rõ ràng là cái nào',
        text: 'Dùng **the** khi chỉ có một cái trong tình huống: **the** door, **the** kitchen, **the** station (ở thị trấn này), **the** teacher (của lớp mình).',
        examples: ['Can you close **the** window, please?', "Where's **the** bathroom?", 'I’m going to **the** bank. (ngân hàng quen thuộc)'],
      },
      {
        title: 'So sánh',
        table: {
          head: ['a / an', 'the'],
          rows: [
            ['I have a car. (một chiếc nào đó)', 'The car is outside. (chiếc xe của tôi)'],
            ['Is there a bank near here?', 'The bank opens at 8.'],
          ],
        },
      },
    ],
    tips: ['Lần đầu → a/an; đã biết → the.'],
    exercises: [
      { type: 'choice', q: 'I bought ___ shirt and a hat. The shirt was cheap.', options: ['a', 'the', '–'], answer: 'a', explain: 'Lần đầu nhắc tới.' },
      { type: 'choice', q: 'I bought a shirt and a hat. ___ shirt was cheap.', options: ['A', 'The', '–'], answer: 'The', explain: 'Đã nhắc tới → the.' },
      { type: 'gap', q: 'Can you turn off ___ light, please?', answers: ['the'], explain: 'Cái đèn trong phòng này → the.' },
      { type: 'gap', q: 'My sister has ___ new job.', answers: ['a'], explain: 'Không xác định.' },
      { type: 'choice', q: 'Excuse me, where is ___ station?', options: ['a', 'the', 'an'], answer: 'the', explain: 'Ga duy nhất ở thị trấn.' },
      { type: 'gap', q: 'We have ___ dog. The dog is called Max.', answers: ['a'], explain: 'Lần đầu nhắc tới.' },
      { type: 'choice', q: 'Is there ___ post office near here?', options: ['a', 'the', '–'], answer: 'a', explain: 'Hỏi có một cái nào đó.' },
      { type: 'gap', q: 'I left my keys on ___ kitchen table.', answers: ['the'], explain: 'Cái bàn bếp nhà mình.' },
    ],
  },
  {
    id: 70,
    intro: 'Một số trường hợp **luôn dùng the**: vật duy nhất, so sánh nhất, số thứ tự, và một số cụm cố định.',
    sections: [
      {
        title: 'Vật duy nhất',
        examples: ['**The** sun is very hot today.', '**The** moon goes round **the** earth.', '**The** sky is blue.'],
      },
      {
        title: 'Các cụm cố định với the',
        text: '**the** same, **the** first / second / last, **the** best / biggest…, **the** top / bottom / middle / end, **the** sea, **the** cinema, **the** radio, **the** weather, **the** world.',
        examples: ['We go to **the** same school.', 'It’s **the** best film I’ve ever seen.', 'I live on **the** third floor.', 'I listen to **the** radio every morning.'],
      },
      {
        title: 'Không dùng the',
        text: 'Không dùng **the** với: **TV** (watch TV), bữa ăn (have **breakfast**), **next / last** + thời gian (next week, last year).',
        examples: ['I watched **TV** last night.', 'What did you have for **lunch**?'],
      },
    ],
    tips: ['watch TV ✔ — watch the TV (ý chỉ việc xem tivi) ✘', 'the same ✔ — same ✘'],
    exercises: [
      { type: 'choice', q: '___ moon is beautiful tonight.', options: ['A', 'The', '–'], answer: 'The', explain: 'Vật duy nhất.' },
      { type: 'gap', q: 'We are in ___ same class.', answers: ['the'], explain: 'the same.' },
      { type: 'choice', q: 'I usually watch ___ TV in the evening.', options: ['the', 'a', '–'], answer: '–', explain: 'watch TV (không có the).' },
      { type: 'gap', q: 'This is ___ biggest city in the country.', answers: ['the'], explain: 'So sánh nhất → the.' },
      { type: 'choice', q: 'What did you have for ___ breakfast?', options: ['the', 'a', '–'], answer: '–', explain: 'Bữa ăn không dùng the.' },
      { type: 'gap', q: 'She lives on ___ fifth floor.', answers: ['the'], explain: 'Số thứ tự → the.' },
      { type: 'choice', q: 'Let’s go to ___ cinema tonight.', options: ['the', 'a', '–'], answer: 'the', explain: 'go to the cinema.' },
      { type: 'gap', q: "I'm going on holiday ___ week.", hint: 'tuần tới', answers: ['next'], explain: 'next week (không có the).' },
    ],
  },
  {
    id: 71,
    intro: 'Một số nơi chốn **không dùng the** khi nói về **mục đích chính** của nơi đó: go to **work**, go to **school**, go **home**, go to **bed**…',
    sections: [
      {
        title: 'Không dùng the',
        table: {
          head: ['Cụm từ', 'Nghĩa'],
          rows: [
            ['go to work / be at work', 'đi làm / ở chỗ làm'],
            ['go to school / university', 'đi học'],
            ['go home / be at home', 'về nhà / ở nhà'],
            ['go to bed / be in bed', 'đi ngủ / nằm trên giường'],
            ['go to hospital / be in hospital', 'nhập viện (là bệnh nhân)'],
            ['go to prison / church', 'vào tù / đi lễ nhà thờ'],
          ],
        },
        examples: ['I go to **work** by bus.', 'The children are at **school**.', "I'm tired. I'm going to **bed**."],
      },
      {
        title: 'Dùng the',
        text: '**the cinema, the theatre, the bank, the post office, the station, the airport, the doctor, the dentist**.',
        examples: ['I went to **the** cinema last night.', 'She’s at **the** dentist.'],
      },
    ],
    tips: ['go home ✔ — go to home ✘', 'go to the hospital = đến bệnh viện (để thăm, làm việc…)'],
    exercises: [
      { type: 'choice', q: 'What time do you usually go to ___?', options: ['bed', 'the bed', 'a bed'], answer: 'bed', explain: 'go to bed.' },
      { type: 'choice', q: 'We went to ___ last night. The film was great.', options: ['cinema', 'the cinema', 'a cinema'], answer: 'the cinema', explain: 'go to the cinema.' },
      { type: 'gap', q: "My mother isn't at home. She's at ___.", answers: ['work'], explain: 'at work.' },
      { type: 'choice', q: 'I left my phone at ___.', options: ['home', 'the home', 'a home'], answer: 'home', explain: 'at home.' },
      { type: 'choice', q: 'I need to go to ___. I have a toothache.', options: ['dentist', 'the dentist', 'a dentist'], answer: 'the dentist', explain: 'go to the dentist.' },
      { type: 'gap', q: 'The children go to ___ at 7 every morning.', answers: ['school'], explain: 'go to school.' },
      { type: 'choice', q: 'He was in ___ for two weeks after the accident.', options: ['hospital', 'the hospital', 'a hospital'], answer: 'hospital', explain: 'in hospital (là bệnh nhân).' },
      { type: 'gap', q: 'Can you take me to ___ airport?', answers: ['the'], explain: 'the airport.' },
    ],
  },
  {
    id: 72,
    intro: 'Khi nói về sự vật **nói chung** (không xác định cụ thể), **không dùng the**: I like **music**. **Exams** are stressful.',
    sections: [
      {
        title: 'Nói chung → không có the',
        examples: ['I love **music**.', '**Dogs** are friendly animals.', "I don't like **exams**.", '**Life** is short.', 'Do you like **coffee**?'],
      },
      {
        title: 'Cụ thể → có the',
        table: {
          head: ['Nói chung', 'Cụ thể'],
          rows: [
            ['I like music.', 'I like the music in this film.'],
            ['Flowers are beautiful.', 'The flowers in your garden are beautiful.'],
            ['Children need love.', 'The children are in the garden.'],
          ],
        },
      },
      {
        title: 'Môn học, thể thao, ngôn ngữ',
        text: 'Không dùng the: **maths, history, football, tennis, English, Vietnamese**.',
        examples: ['She is good at **maths**.', 'They play **football** on Sundays.'],
      },
    ],
    tips: ['I like **the** music ✘ (khi nói âm nhạc nói chung) → I like music ✔'],
    exercises: [
      { type: 'choice', q: 'I really like ___.', options: ['the animals', 'animals', 'an animals'], answer: 'animals', explain: 'Nói chung → không the.' },
      { type: 'choice', q: '___ in this shop are very expensive.', options: ['Clothes', 'The clothes', 'A clothes'], answer: 'The clothes', explain: 'Cụ thể (in this shop) → the.' },
      { type: 'choice', q: 'Do you play ___ tennis? — Yes, every week.', options: ['the', '–', 'a'], answer: '–', explain: 'Thể thao không dùng the.' },
      { type: 'choice', q: '___ is very important for children.', options: ['Education', 'The education', 'An education'], answer: 'Education', explain: 'Nói chung.' },
      { type: 'choice', q: 'Can you pass me ___ salt, please?', options: ['salt', 'the salt', 'a salt'], answer: 'the salt', explain: 'Lọ muối cụ thể trên bàn.' },
      { type: 'choice', q: 'My favourite subject is ___.', options: ['the history', 'history', 'a history'], answer: 'history', explain: 'Môn học không dùng the.' },
      { type: 'choice', q: '___ people in my town are very friendly.', options: ['The', '–', 'A'], answer: 'The', explain: 'Cụ thể (in my town).' },
      { type: 'choice', q: 'I hate ___ cold weather.', options: ['the', '–', 'a'], answer: '–', explain: 'Nói chung.' },
    ],
  },
  {
    id: 73,
    intro: 'Tên **địa danh**: phần lớn **không có the** (Vietnam, Hanoi, Mount Fuji), nhưng một số loại **có the** (sông, biển, đại dương, tên nước có “States/Kingdom/Republic”…).',
    sections: [
      {
        title: 'Không dùng the',
        text: 'Châu lục, đa số **quốc gia**, **thành phố**, **đường phố**, **núi đơn lẻ**, **hồ**.',
        examples: ['Asia, Vietnam, Japan, Paris, Oxford Street, Mount Everest, Hoan Kiem Lake'],
      },
      {
        title: 'Dùng the',
        table: {
          head: ['Loại', 'Ví dụ'],
          rows: [
            ['Sông, biển, đại dương', 'the Red River, the Mekong, the Pacific (Ocean)'],
            ['Tên nước có States / Kingdom / Republic', 'the United States, the UK, the Czech Republic'],
            ['Số nhiều: dãy núi, quần đảo', 'the Alps, the Philippines, the Netherlands'],
            ['Khách sạn, bảo tàng, rạp, nhà hát', 'the Hilton, the British Museum, the Opera House'],
            ['the … of …', 'the Bank of England, the Great Wall of China'],
          ],
        },
      },
    ],
    tips: ['the USA ✔ — USA (trong câu) ✘', 'Lake Victoria (không the) nhưng the Mekong River (có the)'],
    exercises: [
      { type: 'choice', q: 'I would love to visit ___ Japan.', options: ['the', '–', 'a'], answer: '–', explain: 'Tên nước thông thường → không the.' },
      { type: 'choice', q: '___ Mekong River flows through six countries.', options: ['The', '–', 'A'], answer: 'The', explain: 'Sông → the.' },
      { type: 'choice', q: 'They live in ___ United States.', options: ['the', '–', 'a'], answer: 'the', explain: 'States → the.' },
      { type: 'choice', q: 'Have you climbed ___ Mount Fansipan?', options: ['the', '–', 'a'], answer: '–', explain: 'Núi đơn lẻ → không the.' },
      { type: 'gap', q: '___ Pacific is the largest ocean.', answers: ['the'], explain: 'Đại dương → the.' },
      { type: 'choice', q: 'We stayed at ___ Sheraton Hotel.', options: ['the', '–', 'a'], answer: 'the', explain: 'Tên khách sạn → the.' },
      { type: 'choice', q: 'Manila is the capital of ___ Philippines.', options: ['the', '–', 'a'], answer: 'the', explain: 'Quần đảo (số nhiều) → the.' },
      { type: 'choice', q: 'She was born in ___ Hanoi.', options: ['the', '–', 'a'], answer: '–', explain: 'Thành phố → không the.' },
    ],
  },
];
