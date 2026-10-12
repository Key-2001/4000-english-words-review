// Cụm động từ — Units 114–115 (nội dung biên soạn riêng)
export default [
  {
    id: 114,
    intro: '**Cụm động từ** = động từ + tiểu từ (in, out, on, off, up, down, away, back…). Nghĩa có thể **khác hẳn** động từ gốc.',
    sections: [
      {
        title: 'Cụm động từ không có tân ngữ',
        table: {
          head: ['Cụm động từ', 'Nghĩa', 'Ví dụ'],
          rows: [
            ['go in / come in', 'đi vào', 'Come in and sit down.'],
            ['get up', 'thức dậy', 'I get up at 6.'],
            ['sit down / stand up', 'ngồi xuống / đứng lên', 'Please sit down.'],
            ['go out', 'ra ngoài chơi', "Let's go out tonight."],
            ['come back / go back', 'quay lại', "I'll come back later."],
            ['run away', 'chạy trốn', 'The dog ran away.'],
            ['fall off / fall over', 'ngã khỏi / ngã', 'He fell off his bike.'],
            ['break down', 'hỏng (máy móc, xe)', 'Our car broke down.'],
            ['look out', 'cẩn thận', 'Look out! A car!'],
          ],
        },
      },
      {
        title: 'Với giới từ phía sau',
        text: 'Có thể thêm giới từ + danh từ: **get on** the bus, **look up** at the sky, **run away from** home.',
        examples: ['We **got on** the train.', 'She **looked up** at the stars.'],
      },
    ],
    tips: ['Chia động từ chính như bình thường: He **got** up / They **ran** away.'],
    exercises: [
      { type: 'choice', q: 'The car ___ on the way to the airport.', options: ['broke down', 'broke up', 'broke off'], answer: 'broke down', explain: 'break down = hỏng.' },
      { type: 'gap', q: 'What time do you usually get ___?', answers: ['up'], explain: 'get up = thức dậy.' },
      { type: 'choice', q: 'Please come ___ and close the door.', options: ['in', 'out', 'off'], answer: 'in', explain: 'come in = vào.' },
      { type: 'gap', q: 'The thief ran ___ when he saw the police.', answers: ['away'], explain: 'run away = chạy trốn.' },
      { type: 'choice', q: '___ out! There’s a car coming!', options: ['Look', 'See', 'Watch at'], answer: 'Look', explain: 'Look out = cẩn thận.' },
      { type: 'gap', q: 'He fell ___ his horse and hurt his arm.', answers: ['off'], explain: 'fall off = ngã khỏi.' },
      { type: 'choice', q: 'I’m going ___ for a minute. I’ll be back soon.', options: ['out', 'off', 'down'], answer: 'out', explain: 'go out = ra ngoài.' },
      { type: 'gap', q: 'Please sit ___. The doctor will see you soon.', answers: ['down'], explain: 'sit down.' },
    ],
  },
  {
    id: 115,
    intro: 'Cụm động từ **có tân ngữ**: put on, take off, turn on/off, pick up… Tân ngữ là **danh từ** có thể đứng giữa hoặc sau; là **đại từ** (it, them) thì **phải đứng giữa**.',
    sections: [
      {
        title: 'Vị trí tân ngữ',
        table: {
          head: ['Tân ngữ là danh từ', 'Tân ngữ là đại từ'],
          rows: [
            ['put on your shoes / put your shoes on', 'put them on (không nói “put on them”)'],
            ['turn off the TV / turn the TV off', 'turn it off'],
            ['pick up the phone / pick the phone up', 'pick it up'],
          ],
        },
      },
      {
        title: 'Cụm động từ thường gặp',
        table: {
          head: ['Cụm', 'Nghĩa'],
          rows: [
            ['put on / take off', 'mặc vào / cởi ra'],
            ['turn on / turn off', 'bật / tắt'],
            ['pick up', 'nhặt lên, đón'],
            ['fill in', 'điền (mẫu đơn)'],
            ['give back', 'trả lại'],
            ['throw away', 'vứt đi'],
            ['try on', 'mặc thử'],
            ['wake up (somebody)', 'đánh thức'],
          ],
        },
        examples: ["It's cold. **Put** your coat **on**.", "Can I **try** this jacket **on**?", "That's my book. **Give it back**!"],
      },
    ],
    tips: ['turn it off ✔ — turn off it ✘', 'take your shoes off = take off your shoes (cả hai đều đúng)'],
    exercises: [
      { type: 'choice', q: 'The TV is too loud. Please turn ___.', options: ['off it', 'it off', 'it'], answer: 'it off', explain: 'Đại từ đứng giữa.' },
      { type: 'choice', q: 'It’s cold outside. Put ___.', options: ['on your jacket', 'your on jacket', 'jacket on your'], answer: 'on your jacket', explain: 'Danh từ có thể đứng sau.' },
      { type: 'gap', q: 'Can I try these shoes ___?', answers: ['on'], explain: 'try on = mặc thử.' },
      { type: 'choice', q: 'Those are my keys. Can you give ___?', options: ['back them', 'them back', 'back'], answer: 'them back', explain: 'Đại từ đứng giữa.' },
      { type: 'gap', q: 'Please fill ___ this form.', answers: ['in'], explain: 'fill in = điền.' },
      { type: 'choice', q: 'Don’t throw ___. I need that paper.', options: ['it away', 'away it', 'it'], answer: 'it away', explain: 'Đại từ đứng giữa.' },
      { type: 'gap', q: 'Take your shoes ___ before you come in.', answers: ['off'], explain: 'take off = cởi.' },
      { type: 'choice', q: 'Can you pick ___ at the station?', options: ['me up', 'up me', 'me'], answer: 'me up', explain: 'pick somebody up; đại từ ở giữa.' },
    ],
  },
];
