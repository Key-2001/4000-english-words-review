// Giới từ — Units 103–113 (nội dung biên soạn riêng)
export default [
  {
    id: 103,
    intro: 'Giới từ chỉ thời gian: **at** + giờ, **on** + ngày, **in** + tháng / năm / mùa / buổi.',
    sections: [
      {
        title: 'at / on / in',
        table: {
          head: ['at', 'on', 'in'],
          rows: [
            ["at 8 o'clock, at 6.30", 'on Monday, on Sundays', 'in April, in 2024'],
            ['at night, at noon, at midnight', 'on 5 May, on my birthday', 'in summer, in the 1990s'],
            ['at the weekend, at Christmas', 'on Monday morning', 'in the morning / afternoon / evening'],
          ],
        },
        examples: ['The class starts **at** 9.', 'I was born **on** 12 March.', "We're going to Japan **in** October.", 'I usually read **in** the evening.'],
      },
      {
        title: 'Không dùng giới từ',
        text: 'Trước **this, next, last, every**: this morning, next week, last year, every day (không nói “in next week”).',
      },
    ],
    tips: ['in the morning nhưng **on** Monday morning', 'at night nhưng **in** the night (ít dùng)'],
    exercises: [
      { type: 'choice', q: 'The film starts ___ 8 pm.', options: ['at', 'on', 'in'], answer: 'at', explain: 'Giờ → at.' },
      { type: 'choice', q: 'My birthday is ___ July.', options: ['at', 'on', 'in'], answer: 'in', explain: 'Tháng → in.' },
      { type: 'gap', q: "I don't work ___ Saturdays.", answers: ['on'], explain: 'Ngày trong tuần → on.' },
      { type: 'gap', q: 'I like to go for a walk ___ the evening.', answers: ['in'], explain: 'in the evening.' },
      { type: 'choice', q: "We met ___ 2015.", options: ['at', 'on', 'in'], answer: 'in', explain: 'Năm → in.' },
      { type: 'choice', q: 'I’ll see you ___ next week.', options: ['in', 'on', '–'], answer: '–', explain: 'next week không có giới từ.' },
      { type: 'gap', q: 'It’s dangerous to walk alone ___ night.', answers: ['at'], explain: 'at night.' },
      { type: 'choice', q: "The party is ___ Friday evening.", options: ['at', 'on', 'in'], answer: 'on', explain: 'on + ngày + buổi.' },
    ],
  },
  {
    id: 104,
    intro: '**from … to / until** (từ … đến), **until** (cho đến khi), **since** (kể từ mốc), **for** (trong khoảng).',
    sections: [
      {
        title: 'Ý nghĩa',
        table: {
          head: ['Giới từ', 'Nghĩa', 'Ví dụ'],
          rows: [
            ['from … to / until', 'từ … đến', 'The shop is open from 9 to 5.'],
            ['until (till)', 'cho đến khi', 'I waited until midnight.'],
            ['since', 'kể từ (mốc)', "I've lived here since 2020."],
            ['for', 'trong (khoảng)', 'I stayed there for two weeks.'],
          ],
        },
      },
      {
        title: 'Lưu ý',
        text: '**since** dùng với thì **hoàn thành**; **for** dùng với mọi thì: I’m going away **for** a week.',
        examples: ["We've known each other **since** school.", 'Let’s wait **until** the rain stops.'],
      },
    ],
    tips: ['since 3 o’clock ✔ — for 3 o’clock ✘', 'for three hours ✔ — since three hours ✘'],
    exercises: [
      { type: 'choice', q: 'I work ___ Monday to Friday.', options: ['since', 'from', 'for'], answer: 'from', explain: 'from … to.' },
      { type: 'gap', q: 'The museum is open from 9 ___ 6.', answers: ['to', 'until', 'till'], explain: 'from … to / until.' },
      { type: 'choice', q: 'Wait here ___ I come back.', options: ['until', 'since', 'for'], answer: 'until', explain: 'Cho đến khi.' },
      { type: 'choice', q: "She's been ill ___ Sunday.", options: ['for', 'since', 'from'], answer: 'since', explain: 'Mốc + hoàn thành.' },
      { type: 'gap', q: "We lived in Hue ___ five years.", answers: ['for'], explain: 'Khoảng thời gian.' },
      { type: 'choice', q: "I'm going to Bangkok ___ a week.", options: ['for', 'since', 'until'], answer: 'for', explain: 'Trong khoảng một tuần.' },
      { type: 'gap', q: "I haven't eaten ___ breakfast.", answers: ['since'], explain: 'Mốc thời gian.' },
      { type: 'choice', q: 'The meeting lasted ___ 2 until 5.', options: ['since', 'from', 'for'], answer: 'from', explain: 'from … until.' },
    ],
  },
  {
    id: 105,
    intro: '**before / after** (trước / sau), **during** + danh từ (trong suốt), **while** + mệnh đề (trong khi).',
    sections: [
      {
        title: 'during và while',
        table: {
          head: ['during + danh từ', 'while + chủ ngữ + động từ'],
          rows: [
            ['during the film', 'while we were watching the film'],
            ['during the night', 'while I was sleeping'],
          ],
        },
        examples: ['I fell asleep **during** the lesson.', 'Somebody called **while** you were out.'],
      },
      {
        title: 'before / after + danh từ / V-ing / mệnh đề',
        examples: ['Wash your hands **before** eating. / **before** you eat.', '**After** the concert, we went home.', '**After** finishing work, I went to the gym.'],
      },
    ],
    tips: ['during the holiday ✔ — while the holiday ✘', 'before **eating** ✔ — before to eat ✘'],
    exercises: [
      { type: 'choice', q: 'Nobody spoke ___ the meeting.', options: ['during', 'while', 'for'], answer: 'during', explain: 'during + danh từ.' },
      { type: 'choice', q: 'I hurt my leg ___ I was playing football.', options: ['during', 'while', 'after'], answer: 'while', explain: 'while + mệnh đề.' },
      { type: 'gap', q: 'Brush your teeth ___ you go to bed.', answers: ['before'], explain: 'Trước khi đi ngủ.' },
      { type: 'gap', q: 'We went for a walk ___ lunch.', answers: ['after', 'before'], explain: 'Sau / trước bữa trưa.' },
      { type: 'choice', q: 'Turn off your phone ___ the exam.', options: ['during', 'while', 'since'], answer: 'during', explain: 'during + danh từ.' },
      { type: 'choice', q: 'After ___ dinner, we watched TV.', options: ['have', 'having', 'to have'], answer: 'having', explain: 'after + V-ing.' },
      { type: 'gap', q: 'The lights went out ___ we were having dinner.', answers: ['while'], explain: 'while + mệnh đề.' },
      { type: 'choice', q: 'It rained a lot ___ the night.', options: ['during', 'while', 'when'], answer: 'during', explain: 'during the night.' },
    ],
  },
  {
    id: 106,
    intro: 'Giới từ nơi chốn cơ bản: **in** (bên trong), **at** (tại một điểm), **on** (trên bề mặt).',
    sections: [
      {
        title: 'in / at / on',
        table: {
          head: ['in (bên trong)', 'at (tại điểm)', 'on (trên bề mặt)'],
          rows: [
            ['in a room, in a box', 'at the door, at the bus stop', 'on the table, on the floor'],
            ['in the garden, in the water', 'at the window, at the traffic lights', 'on the wall, on a page'],
            ['in a car, in the sky', 'at the end of the street', 'on the ceiling, on the door'],
          ],
        },
        examples: ['There’s some milk **in** the fridge.', 'Someone is **at** the door.', 'Your keys are **on** the table.', 'There’s a picture **on** the wall.'],
      },
    ],
    tips: ['in a car / in a taxi nhưng **on** a bus / a train / a plane / a bike'],
    exercises: [
      { type: 'choice', q: 'The cat is sleeping ___ the sofa.', options: ['in', 'at', 'on'], answer: 'on', explain: 'Trên bề mặt → on.' },
      { type: 'choice', q: 'There’s nobody ___ the room.', options: ['in', 'at', 'on'], answer: 'in', explain: 'Bên trong → in.' },
      { type: 'gap', q: "Wait for me ___ the bus stop.", answers: ['at'], explain: 'Một điểm → at.' },
      { type: 'gap', q: 'There are some nice pictures ___ the wall.', answers: ['on'], explain: 'Trên bề mặt tường → on.' },
      { type: 'choice', q: 'The children are playing ___ the garden.', options: ['in', 'at', 'on'], answer: 'in', explain: 'in the garden.' },
      { type: 'choice', q: 'I met her ___ the bus.', options: ['in', 'on', 'at'], answer: 'on', explain: 'on a bus.' },
      { type: 'gap', q: 'Turn left ___ the traffic lights.', answers: ['at'], explain: 'at the traffic lights.' },
      { type: 'gap', q: 'Put the milk back ___ the fridge.', answers: ['in'], explain: 'Bên trong tủ lạnh.' },
    ],
  },
  {
    id: 107,
    intro: 'Một số **cụm cố định** với **in / at / on** chỉ nơi chốn cần ghi nhớ.',
    sections: [
      {
        title: 'Cụm cố định',
        table: {
          head: ['in', 'at', 'on'],
          rows: [
            ['in bed, in hospital', 'at home, at work, at school', 'on the left / right'],
            ['in the sky, in the world', 'at the station, at the airport', 'on the first floor'],
            ['in a newspaper / a book', 'at a party, at a concert', 'on TV, on the radio'],
            ['in a city / country', 'at the top / bottom', 'on a map, on a menu'],
          ],
        },
        examples: ["She's **in** bed. She's ill.", "I'll be **at** home tonight.", 'The bank is **on** the left.', 'I saw it **on** TV.', 'We live **on** the third floor.'],
      },
      {
        title: 'Địa chỉ',
        text: '**in** + thành phố/quốc gia; **on** + tên đường (Anh-Mỹ); **at** + số nhà cụ thể: at 15 Hang Bai Street.',
      },
    ],
    tips: ['at home ✔ — in home ✘', 'on the second floor ✔ — in the second floor ✘'],
    exercises: [
      { type: 'choice', q: "Is Linh ___ home?", options: ['in', 'at', 'on'], answer: 'at', explain: 'at home.' },
      { type: 'choice', q: 'Our office is ___ the fifth floor.', options: ['in', 'at', 'on'], answer: 'on', explain: 'on + tầng.' },
      { type: 'gap', q: 'I read about it ___ a magazine.', answers: ['in'], explain: 'in a magazine.' },
      { type: 'gap', q: 'What’s ___ TV tonight?', answers: ['on'], explain: 'on TV.' },
      { type: 'choice', q: 'We had a great time ___ the party.', options: ['in', 'at', 'on'], answer: 'at', explain: 'at a party.' },
      { type: 'choice', q: 'He lives ___ Da Nang.', options: ['in', 'at', 'on'], answer: 'in', explain: 'Thành phố → in.' },
      { type: 'gap', q: 'The post office is ___ the right.', answers: ['on'], explain: 'on the right.' },
      { type: 'choice', q: 'My grandfather is ___ hospital.', options: ['in', 'at', 'on'], answer: 'in', explain: 'in hospital.' },
    ],
  },
  {
    id: 108,
    intro: '**to** chỉ **hướng đi đến**; **in / at** chỉ **vị trí đang ở**. Sau **arrive** dùng **in / at** (không dùng to).',
    sections: [
      {
        title: 'to và in/at',
        table: {
          head: ['Chuyển động (to)', 'Vị trí (in / at)'],
          rows: [
            ['go to school', 'be at school'],
            ['go to Japan', 'live in Japan'],
            ['come to the party', 'be at the party'],
          ],
        },
        examples: ["I'm going **to** the bank.", 'She is **at** the bank.', 'We flew **to** Paris.', 'We stayed **in** Paris for a week.'],
      },
      {
        title: 'arrive in / at, get to, go home',
        text: '**arrive in** + thành phố/quốc gia; **arrive at** + địa điểm nhỏ (station, airport, hotel). **get to** = đến. **home** không có to.',
        examples: ['We **arrived in** Hanoi at 6.', 'We **arrived at** the hotel late.', 'What time did you **get to** work?', "Let's **go home**."],
      },
    ],
    tips: ['arrive to ✘ → **arrive in / at** ✔', 'go to home ✘ → **go home** ✔'],
    exercises: [
      { type: 'choice', q: 'I want to go ___ Italy next year.', options: ['to', 'in', 'at'], answer: 'to', explain: 'Chuyển động → to.' },
      { type: 'choice', q: 'My sister lives ___ Canada.', options: ['to', 'in', 'at'], answer: 'in', explain: 'Vị trí → in.' },
      { type: 'gap', q: 'What time did you arrive ___ the airport?', answers: ['at'], explain: 'arrive at + địa điểm.' },
      { type: 'gap', q: 'We arrived ___ Tokyo in the evening.', answers: ['in'], explain: 'arrive in + thành phố.' },
      { type: 'choice', q: 'I’m tired. Let’s go ___.', options: ['to home', 'home', 'at home'], answer: 'home', explain: 'go home.' },
      { type: 'choice', q: 'Were you ___ the concert last night?', options: ['to', 'at', 'in'], answer: 'at', explain: 'Vị trí → at.' },
      { type: 'gap', q: 'How do you get ___ the city centre from here?', answers: ['to'], explain: 'get to.' },
      { type: 'choice', q: 'She went ___ the doctor yesterday.', options: ['to', 'at', 'in'], answer: 'to', explain: 'Chuyển động → to.' },
    ],
  },
  {
    id: 109,
    intro: 'Giới từ chỉ **vị trí**: **under, behind, in front of, next to, between, opposite, above, below, near**…',
    sections: [
      {
        title: 'Bảng giới từ vị trí',
        table: {
          head: ['Giới từ', 'Nghĩa', 'Ví dụ'],
          rows: [
            ['under', 'ở dưới', 'The cat is under the table.'],
            ['above / below', 'phía trên / phía dưới (không chạm)', 'There’s a light above the door.'],
            ['behind', 'phía sau', 'The garden is behind the house.'],
            ['in front of', 'phía trước', 'There’s a tree in front of my house.'],
            ['next to / beside', 'bên cạnh', 'Lan is sitting next to Mai.'],
            ['between', 'ở giữa (hai vật)', 'The bank is between the café and the shop.'],
            ['opposite', 'đối diện', 'The school is opposite the park.'],
            ['near', 'gần', 'Is there a hotel near here?'],
          ],
        },
      },
    ],
    tips: ['in front of ✔ — in front ✘ (cần of)', 'next to ✔ — next of ✘', 'opposite + danh từ (không có of)'],
    exercises: [
      { type: 'choice', q: 'The ball is ___ the bed. I can see it under there.', options: ['under', 'above', 'opposite'], answer: 'under', explain: 'Ở dưới giường.' },
      { type: 'gap', q: 'There’s a car parked in front ___ my house.', answers: ['of'], explain: 'in front of.' },
      { type: 'choice', q: 'The pharmacy is ___ the bank and the bakery.', options: ['between', 'next', 'among'], answer: 'between', explain: 'Giữa hai vật → between.' },
      { type: 'gap', q: 'Come and sit next ___ me.', answers: ['to'], explain: 'next to.' },
      { type: 'choice', q: 'The cinema is ___ the hotel, on the other side of the road.', options: ['opposite', 'behind', 'under'], answer: 'opposite', explain: 'Đối diện.' },
      { type: 'choice', q: "The garden is ___ the house, so you can't see it from the street.", options: ['behind', 'in front of', 'opposite'], answer: 'behind', explain: 'Phía sau nhà.' },
      { type: 'gap', q: 'Is there a bus stop ___ here?', answers: ['near'], explain: 'Gần đây.' },
      { type: 'choice', q: 'The plane flew ___ the clouds.', options: ['above', 'under', 'between'], answer: 'above', explain: 'Phía trên.' },
    ],
  },
  {
    id: 110,
    intro: 'Giới từ chỉ **chuyển động**: **up / down, into / out of, over, under, through, across, along, round, past, from … to**.',
    sections: [
      {
        title: 'Bảng giới từ chuyển động',
        table: {
          head: ['Giới từ', 'Nghĩa', 'Ví dụ'],
          rows: [
            ['up / down', 'lên / xuống', 'We walked up the hill.'],
            ['into / out of', 'vào trong / ra khỏi', 'She got into the car.'],
            ['over', 'qua phía trên', 'The cat jumped over the wall.'],
            ['through', 'xuyên qua (bên trong)', 'We drove through the tunnel.'],
            ['across', 'băng qua (từ bên này sang bên kia)', 'Walk across the bridge.'],
            ['along', 'dọc theo', 'They walked along the beach.'],
            ['round / around', 'vòng quanh', 'The earth goes round the sun.'],
            ['past', 'đi ngang qua', 'Go past the bank and turn left.'],
          ],
        },
      },
    ],
    tips: ['through (đi bên trong: tunnel, forest) ≠ across (bề mặt: road, river, bridge)'],
    exercises: [
      { type: 'choice', q: 'The train went ___ a long tunnel.', options: ['across', 'through', 'over'], answer: 'through', explain: 'Xuyên qua bên trong.' },
      { type: 'choice', q: 'Be careful when you walk ___ the road.', options: ['across', 'through', 'along'], answer: 'across', explain: 'Băng qua đường.' },
      { type: 'gap', q: 'She climbed ___ the stairs to the top floor.', answers: ['up'], explain: 'Đi lên.' },
      { type: 'gap', q: 'He jumped ___ the swimming pool.', answers: ['into'], explain: 'Vào trong.' },
      { type: 'choice', q: 'We walked ___ the river for an hour.', options: ['along', 'through', 'into'], answer: 'along', explain: 'Dọc theo.' },
      { type: 'gap', q: 'Get ___ of the car, please.', answers: ['out'], explain: 'out of.' },
      { type: 'choice', q: 'The horse jumped ___ the fence.', options: ['over', 'through', 'along'], answer: 'over', explain: 'Qua phía trên.' },
      { type: 'gap', q: 'Go ___ the post office and turn right.', answers: ['past'], explain: 'Đi ngang qua.' },
    ],
  },
  {
    id: 111,
    intro: 'Các cách dùng khác của giới từ: **on** holiday, **by** car, **with** (cùng / bằng), **about** (về).',
    sections: [
      {
        title: 'on',
        examples: ['**on** holiday, **on** a trip, **on** business', '**on** foot (đi bộ)', '**on** time (đúng giờ)'],
      },
      {
        title: 'by',
        text: '**by** + phương tiện (không có a/the): by car, by bus, by train, by plane, by bike. Nhưng **on foot**.',
        examples: ['I go to work **by** bus.', 'a book **by** Nguyen Nhat Anh (tác giả)'],
      },
      {
        title: 'with / without / about',
        examples: ['I went to the cinema **with** my friends.', 'Cut it **with** a knife. (dụng cụ)', 'Do you want coffee **with** or **without** sugar?', 'a girl **with** long hair', 'a book **about** history', 'What are you talking **about**?'],
      },
    ],
    tips: ['by car ✔ — by the car ✘ · in my car ✔', 'on foot ✔ — by foot ✘'],
    exercises: [
      { type: 'choice', q: 'I usually go to school ___ bike.', options: ['by', 'on', 'with'], answer: 'by', explain: 'by + phương tiện.' },
      { type: 'choice', q: 'We went there ___ foot.', options: ['by', 'on', 'in'], answer: 'on', explain: 'on foot.' },
      { type: 'gap', q: 'They are ___ holiday in Phu Quoc.', answers: ['on'], explain: 'on holiday.' },
      { type: 'gap', q: 'This is a film ___ the Second World War.', answers: ['about'], explain: 'Về chủ đề → about.' },
      { type: 'choice', q: 'Who is the woman ___ the red dress?', options: ['with', 'in', 'by'], answer: 'in', explain: 'Mặc → in.' },
      { type: 'gap', q: 'I’d like a coffee ___ milk, please.', answers: ['with'], explain: 'with milk.' },
      { type: 'choice', q: 'The train arrived ___ time.', options: ['on', 'in', 'at'], answer: 'on', explain: 'on time.' },
      { type: 'gap', q: '“Hamlet” is a play ___ Shakespeare.', answers: ['by'], explain: 'Tác giả → by.' },
    ],
  },
  {
    id: 112,
    intro: 'Nhiều **tính từ** đi với giới từ cố định: **afraid of, good at, interested in**… Sau giới từ, động từ ở dạng **V-ing**.',
    sections: [
      {
        title: 'Tính từ + giới từ',
        table: {
          head: ['of', 'at', 'in', 'with / to / for / about'],
          rows: [
            ['afraid of', 'good at', 'interested in', 'angry with (ai)'],
            ['proud of', 'bad at', '', 'married to'],
            ['tired of', 'surprised at / by', '', 'famous for'],
            ['full of', '', '', 'worried about / excited about'],
          ],
        },
        examples: ["I'm **afraid of** dogs.", "She's **good at** maths.", "Are you **interested in** art?", 'Hoi An is **famous for** its lanterns.', "I'm **worried about** the exam."],
      },
      {
        title: 'Giới từ + V-ing',
        examples: ["I'm **good at cooking**.", "She's **tired of waiting**.", 'Thank you **for helping** me.', 'He left **without saying** goodbye.'],
      },
    ],
    tips: ['good at **swimming** ✔ — good at swim ✘', 'interested **in** ✔ — interested about ✘'],
    exercises: [
      { type: 'choice', q: "I'm not very good ___ singing.", options: ['in', 'at', 'on'], answer: 'at', explain: 'good at.' },
      { type: 'choice', q: 'My little brother is afraid ___ the dark.', options: ['of', 'from', 'at'], answer: 'of', explain: 'afraid of.' },
      { type: 'gap', q: 'Are you interested ___ photography?', answers: ['in'], explain: 'interested in.' },
      { type: 'choice', q: 'Thank you for ___ me.', options: ['help', 'helping', 'to help'], answer: 'helping', explain: 'Giới từ + V-ing.' },
      { type: 'gap', q: 'Da Lat is famous ___ its flowers.', answers: ['for'], explain: 'famous for.' },
      { type: 'gap', q: "She's worried ___ her exams.", answers: ['about'], explain: 'worried about.' },
      { type: 'choice', q: 'I’m tired of ___ the same food every day.', options: ['eat', 'eating', 'to eat'], answer: 'eating', explain: 'of + V-ing.' },
      { type: 'gap', q: "Don't be angry ___ me. It wasn't my fault.", answers: ['with'], explain: 'angry with somebody.' },
    ],
  },
  {
    id: 113,
    intro: 'Nhiều **động từ** đi với giới từ cố định: **listen to, look at, wait for, talk to, belong to**…',
    sections: [
      {
        title: 'Động từ + giới từ',
        table: {
          head: ['Động từ', 'Ví dụ'],
          rows: [
            ['listen to', 'I like listening to music.'],
            ['look at / look for', 'Look at this! / I’m looking for my keys.'],
            ['wait for', 'Wait for me!'],
            ['talk / speak to', 'Can I talk to you?'],
            ['ask for', 'He asked for a glass of water.'],
            ['belong to', 'This bag belongs to Lan.'],
            ['depend on', 'It depends on the weather.'],
            ['think about / of', "What are you thinking about?"],
          ],
        },
      },
      {
        title: 'Không có giới từ',
        text: 'Một số động từ **không** có giới từ: **phone / call** somebody, **answer** a question, **discuss** something, **enter** a room.',
        examples: ['I **called** my mum. (không nói “called to my mum”)', 'We **discussed** the problem. (không nói “discussed about”)'],
      },
    ],
    tips: ['listen **to** music ✔ — listen music ✘', 'discuss the plan ✔ — discuss about the plan ✘'],
    exercises: [
      { type: 'choice', q: 'I’m listening ___ the radio.', options: ['to', 'at', '–'], answer: 'to', explain: 'listen to.' },
      { type: 'choice', q: 'What are you looking ___? — My glasses. I can’t find them.', options: ['at', 'for', 'to'], answer: 'for', explain: 'look for = tìm.' },
      { type: 'gap', q: 'Wait ___ me! I’m coming.', answers: ['for'], explain: 'wait for.' },
      { type: 'gap', q: 'Who does this car belong ___?', answers: ['to'], explain: 'belong to.' },
      { type: 'choice', q: 'We discussed ___ the plan.', options: ['about', 'on', '–'], answer: '–', explain: 'discuss không có giới từ.' },
      { type: 'gap', q: 'It depends ___ the price.', answers: ['on'], explain: 'depend on.' },
      { type: 'choice', q: 'Look ___ that beautiful sunset!', options: ['at', 'for', 'to'], answer: 'at', explain: 'look at = nhìn.' },
      { type: 'choice', q: 'I’ll call ___ tomorrow.', options: ['to you', 'you', 'for you'], answer: 'you', explain: 'call somebody.' },
    ],
  },
];
