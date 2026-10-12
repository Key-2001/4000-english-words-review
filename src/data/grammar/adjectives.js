// Tính từ và trạng từ — Units 85–92 (nội dung biên soạn riêng)
export default [
  {
    id: 85,
    intro: '**Tính từ** mô tả danh từ. Đứng **trước danh từ** hoặc **sau be / look / feel / seem / taste…**. Tính từ **không có dạng số nhiều**.',
    sections: [
      {
        title: 'Vị trí của tính từ',
        examples: ['It’s a **beautiful** day. (trước danh từ)', 'The weather is **beautiful**. (sau be)', 'You look **tired**.', 'This soup tastes **good**.', 'I feel **happy** today.'],
      },
      {
        title: 'Không thêm -s',
        text: 'Tính từ giữ nguyên với danh từ số nhiều: **big** houses (không nói “bigs houses”).',
      },
      {
        title: 'Tính từ đuôi -ed và -ing',
        table: {
          head: ['-ed (cảm xúc của người)', '-ing (tính chất của vật/việc)'],
          rows: [
            ["I'm bored.", 'The film is boring.'],
            ["She's interested in art.", 'Art is interesting.'],
            ['We were tired.', 'The trip was tiring.'],
          ],
        },
      },
    ],
    tips: ['look **happy** ✔ — look happily ✘ (sau look dùng tính từ)', "I'm boring = tôi là người nhàm chán (!) — muốn nói chán thì: I'm **bored**."],
    exercises: [
      { type: 'choice', q: 'They live in a ___ house.', options: ['big', 'bigs', 'bigly'], answer: 'big', explain: 'Tính từ không có số nhiều.' },
      { type: 'choice', q: 'You look ___. Are you OK?', options: ['sad', 'sadly', 'sadness'], answer: 'sad', explain: 'look + tính từ.' },
      { type: 'choice', q: 'The lesson was very ___. I almost fell asleep.', options: ['bored', 'boring', 'bore'], answer: 'boring', explain: 'Tính chất của bài học → -ing.' },
      { type: 'choice', q: "I'm ___ in history.", options: ['interested', 'interesting', 'interest'], answer: 'interested', explain: 'Cảm xúc của người → -ed.' },
      { type: 'gap', q: 'This cake tastes ___.', hint: 'delicious / deliciously', answers: ['delicious'], explain: 'taste + tính từ.' },
      { type: 'choice', q: 'She has two ___ cats.', options: ['blacks', 'black', 'blackly'], answer: 'black', explain: 'Không thêm s.' },
      { type: 'gap', q: 'After the long walk, we were very ___.', hint: 'tired / tiring', answers: ['tired'], explain: 'Cảm giác của người → tired.' },
      { type: 'choice', q: 'What an ___ idea!', options: ['excited', 'exciting', 'excite'], answer: 'exciting', explain: 'Tính chất của ý tưởng.' },
    ],
  },
  {
    id: 86,
    intro: '**Trạng từ** (quickly, badly…) mô tả **cách** một hành động diễn ra. Đa số tạo bằng **tính từ + -ly**.',
    sections: [
      {
        title: 'Cách tạo',
        table: {
          head: ['Tính từ', 'Trạng từ'],
          rows: [
            ['quick, slow, careful', 'quickly, slowly, carefully'],
            ['easy, happy (y → ily)', 'easily, happily'],
            ['good', 'well'],
            ['fast, hard, late, early', 'fast, hard, late, early (giữ nguyên)'],
          ],
        },
      },
      {
        title: 'Tính từ hay trạng từ?',
        table: {
          head: ['Tính từ (mô tả danh từ)', 'Trạng từ (mô tả động từ)'],
          rows: [
            ['She is a careful driver.', 'She drives carefully.'],
            ['He is a good singer.', 'He sings well.'],
            ['The test was easy.', 'I passed the test easily.'],
          ],
        },
        examples: ['Please speak **slowly**.', 'He works very **hard**.', 'You did that **well**!'],
      },
    ],
    tips: ['good → **well** (không nói “goodly”)', 'hard (chăm chỉ) ≠ hardly (hầu như không)'],
    exercises: [
      { type: 'choice', q: 'Please drive ___. The road is wet.', options: ['careful', 'carefully', 'care'], answer: 'carefully', explain: 'Mô tả cách lái → trạng từ.' },
      { type: 'choice', q: 'She speaks English very ___.', options: ['good', 'well', 'goodly'], answer: 'well', explain: 'good → well.' },
      { type: 'gap', q: 'He ran ___ and caught the bus.', hint: 'quick', answers: ['quickly'], explain: 'quick → quickly.' },
      { type: 'choice', q: 'Tom is a ___ worker.', options: ['hard', 'hardly', 'hardy'], answer: 'hard', explain: 'Mô tả danh từ worker → tính từ.' },
      { type: 'gap', q: 'The children were playing ___ in the garden.', hint: 'happy', answers: ['happily'], explain: 'y → ily.' },
      { type: 'choice', q: 'I got up ___ this morning — at 5 am!', options: ['earlily', 'early', 'earliest'], answer: 'early', explain: 'early giữ nguyên.' },
      { type: 'gap', q: 'Please listen ___.', hint: 'careful', answers: ['carefully'], explain: 'careful → carefully.' },
      { type: 'choice', q: 'The exam was ___. Everyone passed.', options: ['easy', 'easily', 'ease'], answer: 'easy', explain: 'Sau be → tính từ.' },
    ],
  },
  {
    id: 87,
    intro: '**So sánh hơn**: tính từ **ngắn** thêm **-er** (older), tính từ **dài** dùng **more** (more expensive).',
    sections: [
      {
        title: 'Cách tạo',
        table: {
          head: ['Loại tính từ', 'So sánh hơn'],
          rows: [
            ['1 âm tiết', 'old → older, cheap → cheaper'],
            ['tận cùng -e', 'nice → nicer, large → larger'],
            ['1 nguyên âm + 1 phụ âm', 'big → bigger, hot → hotter'],
            ['tận cùng -y', 'easy → easier, happy → happier'],
            ['2+ âm tiết', 'expensive → more expensive, beautiful → more beautiful'],
          ],
        },
      },
      {
        title: 'Bất quy tắc',
        table: {
          head: ['Tính từ', 'So sánh hơn'],
          rows: [
            ['good / well', 'better'],
            ['bad / badly', 'worse'],
            ['far', 'further / farther'],
          ],
        },
        examples: ["Today is **hotter** than yesterday.", 'This phone is **more expensive**.', 'I feel **better** today.'],
      },
    ],
    tips: ['more bigger ✘ → **bigger** ✔', 'gooder ✘ → **better** ✔'],
    exercises: [
      { type: 'gap', q: 'My brother is ___ than me.', hint: 'tall', answers: ['taller'], explain: 'tall → taller.' },
      { type: 'choice', q: 'This book is ___ than that one.', options: ['interestinger', 'more interesting', 'most interesting'], answer: 'more interesting', explain: 'Tính từ dài → more.' },
      { type: 'gap', q: 'Your house is ___ than mine.', hint: 'big', answers: ['bigger'], explain: 'Gấp đôi g → bigger.' },
      { type: 'choice', q: 'I feel ___ today than yesterday.', options: ['gooder', 'better', 'more good'], answer: 'better', explain: 'good → better.' },
      { type: 'gap', q: 'This exercise is ___ than the last one.', hint: 'easy', answers: ['easier'], explain: 'y → ier.' },
      { type: 'choice', q: 'The weather is ___ than last week.', options: ['worse', 'badder', 'more bad'], answer: 'worse', explain: 'bad → worse.' },
      { type: 'gap', q: 'Hanoi is ___ than Hue in winter.', hint: 'cold', answers: ['colder'], explain: 'cold → colder.' },
      { type: 'choice', q: 'Can you speak ___? I can’t hear you.', options: ['louder', 'more loud', 'loudlier'], answer: 'louder', explain: 'loud → louder.' },
    ],
  },
  {
    id: 88,
    intro: 'So sánh hai người/vật: **so sánh hơn + than**. Có thể nhấn mạnh bằng **much / a lot / a bit / far**.',
    sections: [
      {
        title: 'Cấu trúc',
        text: '**A + be + adj-er / more adj + than + B**',
        examples: ['Lan is **taller than** Mai.', 'A taxi is **more expensive than** a bus.', 'He runs **faster than** me.', 'Gold is **heavier than** silver.'],
      },
      {
        title: 'than + đại từ',
        text: 'Sau **than** có thể dùng tân ngữ (than **me**) hoặc chủ ngữ + trợ động từ (than **I am**).',
        examples: ["She's older **than me**. = She's older **than I am**."],
      },
      {
        title: 'Mức độ',
        examples: ['This one is **much** cheaper.', "It's **a bit** colder today.", 'Trains are **far** faster than buses.'],
      },
    ],
    tips: ['than ✔ — then ✘ (then = sau đó)', 'very bigger ✘ → **much** bigger ✔'],
    exercises: [
      { type: 'choice', q: 'Elephants are bigger ___ horses.', options: ['then', 'than', 'that'], answer: 'than', explain: 'So sánh → than.' },
      { type: 'gap', q: 'My new job is ___ than my old one.', hint: 'good', answers: ['better'], explain: 'good → better.' },
      { type: 'choice', q: 'This test is ___ easier than the last one.', options: ['very', 'much', 'more'], answer: 'much', explain: 'Nhấn mạnh → much.' },
      { type: 'gap', q: 'She is two years older ___ her brother.', answers: ['than'], explain: '… than …' },
      { type: 'choice', q: 'He plays tennis better than ___.', options: ['I', 'me', 'my'], answer: 'me', explain: 'than + tân ngữ.' },
      { type: 'gap', q: 'Planes are ___ than trains.', hint: 'fast', answers: ['faster'], explain: 'fast → faster.' },
      { type: 'choice', q: 'Living in the city is ___ than in the countryside.', options: ['more expensive', 'expensiver', 'most expensive'], answer: 'more expensive', explain: 'Tính từ dài → more.' },
      { type: 'gap', q: "It's a ___ warmer today.", answers: ['bit', 'little'], explain: 'a bit / a little + so sánh hơn.' },
    ],
  },
  {
    id: 89,
    intro: '**as + adj + as** = bằng; **not as + adj + as** = không bằng.',
    sections: [
      {
        title: 'not as … as',
        examples: ["Mai isn't **as tall as** Lan. (= Lan is taller than Mai)", "The film wasn't **as good as** the book.", "I don't work **as hard as** you."],
      },
      {
        title: 'as … as (bằng nhau)',
        examples: ['He is **as old as** me. (cùng tuổi)', 'Come **as soon as** you can.'],
      },
      {
        title: 'the same as',
        text: '**the same as** = giống như: Your phone is **the same as** mine.',
      },
    ],
    tips: ['as tall **as** ✔ — as tall than ✘', 'the same **as** ✔ — the same like ✘'],
    exercises: [
      { type: 'choice', q: "This hotel isn't as expensive ___ that one.", options: ['than', 'as', 'like'], answer: 'as', explain: 'not as … as.' },
      { type: 'gap', q: "Tom isn't ___ tall as his father.", answers: ['as'], explain: 'not as … as.' },
      { type: 'choice', q: 'Her bag is the same ___ mine.', options: ['as', 'like', 'than'], answer: 'as', explain: 'the same as.' },
      { type: 'gap', q: 'I can’t run as ___ as you. You’re very fast.', hint: 'fast', answers: ['fast'], explain: 'as + adj/adv + as.' },
      { type: 'choice', q: 'The weather today is as ___ as yesterday.', options: ['hot', 'hotter', 'hottest'], answer: 'hot', explain: 'as + tính từ nguyên dạng + as.' },
      { type: 'gap', q: 'Please call me as soon ___ possible.', answers: ['as'], explain: 'as soon as possible.' },
      { type: 'choice', q: 'Bikes aren’t as fast as cars. = Cars are ___ than bikes.', options: ['faster', 'as fast', 'fast'], answer: 'faster', explain: 'Diễn đạt lại bằng so sánh hơn.' },
      { type: 'gap', q: 'My English isn’t as ___ as yours.', hint: 'good', answers: ['good'], explain: 'as good as.' },
    ],
  },
  {
    id: 90,
    intro: '**So sánh nhất**: **the + adj-est** (tính từ ngắn) hoặc **the most + adj** (tính từ dài).',
    sections: [
      {
        title: 'Cách tạo',
        table: {
          head: ['Tính từ', 'So sánh nhất'],
          rows: [
            ['old, cheap', 'the oldest, the cheapest'],
            ['big, hot', 'the biggest, the hottest'],
            ['easy, happy', 'the easiest, the happiest'],
            ['expensive, beautiful', 'the most expensive, the most beautiful'],
            ['good / bad / far', 'the best / the worst / the furthest'],
          ],
        },
      },
      {
        title: 'Cách dùng',
        text: 'Thường đi với **in** + nơi chốn/nhóm, hoặc **of** + nhóm, hoặc **I’ve ever…**',
        examples: ['It’s **the tallest** building **in** the city.', 'She’s **the youngest of** the three sisters.', 'This is **the best** film **I’ve ever** seen.'],
      },
    ],
    tips: ['Luôn có **the**: the biggest ✔ — biggest (trước danh từ) ✘', 'the most big ✘ → the biggest ✔'],
    exercises: [
      { type: 'gap', q: 'Mount Everest is the ___ mountain in the world.', hint: 'high', answers: ['highest'], explain: 'high → highest.' },
      { type: 'choice', q: 'This is the ___ restaurant in town.', options: ['most expensive', 'expensivest', 'more expensive'], answer: 'most expensive', explain: 'Tính từ dài → the most.' },
      { type: 'choice', q: 'It was the ___ day of my life.', options: ['happyest', 'happiest', 'most happy'], answer: 'happiest', explain: 'y → iest.' },
      { type: 'gap', q: "He's the ___ player in the team.", hint: 'good', answers: ['best'], explain: 'good → best.' },
      { type: 'choice', q: 'August is the ___ month of the year here.', options: ['hotest', 'hottest', 'most hot'], answer: 'hottest', explain: 'hot → hottest (gấp đôi t).' },
      { type: 'gap', q: "That was the ___ meal I've ever eaten. Terrible!", hint: 'bad', answers: ['worst'], explain: 'bad → worst.' },
      { type: 'choice', q: 'Who is the oldest ___ your family?', options: ['of', 'in', 'than'], answer: 'in', explain: 'in + nhóm/nơi chốn.' },
      { type: 'gap', q: 'This is ___ most interesting book I have.', answers: ['the'], explain: 'Luôn có the.' },
    ],
  },
  {
    id: 91,
    intro: '**enough** = đủ. Đứng **trước danh từ** (enough money) nhưng **sau tính từ/trạng từ** (old enough).',
    sections: [
      {
        title: 'Vị trí',
        table: {
          head: ['enough + danh từ', 'tính từ / trạng từ + enough'],
          rows: [
            ['enough money', 'big enough'],
            ['enough time', 'fast enough'],
            ['enough chairs', 'warm enough'],
          ],
        },
        examples: ["We don't have **enough time**.", "Is the water **warm enough** for swimming?", "He didn't run **fast enough**."],
      },
      {
        title: 'enough + for / to V',
        examples: ['There isn’t enough food **for** everyone.', "She's old enough **to** drive.", "I don't have enough money **to** buy a car."],
      },
    ],
    tips: ['old enough ✔ — enough old ✘', 'enough money ✔ — money enough (ít dùng)'],
    exercises: [
      { type: 'choice', q: 'This room isn’t ___ for five people.', options: ['enough big', 'big enough', 'enough'], answer: 'big enough', explain: 'Tính từ + enough.' },
      { type: 'choice', q: 'Do we have ___ to finish the work?', options: ['time enough', 'enough time', 'enough of time'], answer: 'enough time', explain: 'enough + danh từ.' },
      { type: 'gap', q: "She's not old ___ to vote. She's only 16.", answers: ['enough'], explain: 'old enough.' },
      { type: 'gap', q: "There aren't ___ chairs for everybody.", answers: ['enough'], explain: 'enough + danh từ.' },
      { type: 'choice', q: 'He didn’t study ___ to pass the exam.', options: ['enough hard', 'hard enough', 'enough'], answer: 'hard enough', explain: 'Trạng từ + enough.' },
      { type: 'gap', q: 'Is the soup hot ___?', answers: ['enough'], explain: 'hot enough.' },
      { type: 'choice', q: 'I have enough money ___ a new phone.', options: ['to buy', 'buying', 'for buy'], answer: 'to buy', explain: 'enough + N + to V.' },
      { type: 'gap', q: "We don't have enough milk ___ breakfast.", answers: ['for'], explain: 'enough + N + for + N.' },
    ],
  },
  {
    id: 92,
    intro: '**too** = **quá** (nhiều hơn mức cần, thường mang nghĩa tiêu cực). **too much / too many** + danh từ.',
    sections: [
      {
        title: 'too + tính từ / trạng từ',
        examples: ["This coffee is **too hot**. I can't drink it.", 'You’re driving **too fast**!', "I'm **too tired** to go out."],
      },
      {
        title: 'too much / too many',
        table: {
          head: ['too much + không đếm được', 'too many + số nhiều'],
          rows: [
            ['too much sugar', 'too many people'],
            ['too much noise', 'too many cars'],
          ],
        },
      },
      {
        title: 'too và enough',
        table: {
          head: ['too', 'not … enough'],
          rows: [["The box is too heavy.", "I'm not strong enough to lift it."]],
        },
        examples: ["The shoes are **too small** for me. = They aren't **big enough**."],
      },
    ],
    tips: ['very (rất) ≠ too (quá — có vấn đề): It’s **very** hot (nóng thật) / It’s **too** hot (nóng quá, không chịu nổi).'],
    exercises: [
      { type: 'choice', q: "I can't carry this bag. It's ___ heavy.", options: ['very', 'too', 'enough'], answer: 'too', explain: 'Quá nặng (không mang được).' },
      { type: 'choice', q: 'There are ___ people here. Let’s go somewhere else.', options: ['too much', 'too many', 'too'], answer: 'too many', explain: 'people đếm được.' },
      { type: 'gap', q: "Don't put too ___ salt in the soup.", answers: ['much'], explain: 'salt không đếm được.' },
      { type: 'choice', q: 'This shirt is too small. = It isn’t ___.', options: ['big enough', 'enough big', 'too big'], answer: 'big enough', explain: 'too small = not big enough.' },
      { type: 'gap', q: "She's ___ young to drive. She's 14.", answers: ['too'], explain: 'too young.' },
      { type: 'choice', q: 'The music is ___ loud. Please turn it down.', options: ['too', 'too much', 'enough'], answer: 'too', explain: 'too + tính từ.' },
      { type: 'gap', q: 'I ate too ___ cakes. Now I feel sick.', answers: ['many'], explain: 'cakes đếm được.' },
      { type: 'choice', q: "It's a ___ beautiful day! Let's go out.", options: ['too', 'very', 'enough'], answer: 'very', explain: 'Tích cực → very.' },
    ],
  },
];
