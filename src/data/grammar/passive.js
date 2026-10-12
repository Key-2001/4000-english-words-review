// Câu bị động — Units 21–22 (nội dung biên soạn riêng)
export default [
  {
    id: 21,
    intro: 'Câu bị động (**be + V3**) dùng khi muốn nói **điều gì xảy ra với** người/vật, hơn là **ai** làm việc đó.',
    sections: [
      {
        title: 'Chủ động và bị động',
        table: {
          head: ['Chủ động', 'Bị động'],
          rows: [
            ['Somebody cleans the room every day.', 'The room is cleaned every day.'],
            ['Somebody built this bridge in 1990.', 'This bridge was built in 1990.'],
          ],
        },
      },
      {
        title: 'Hiện tại đơn và quá khứ đơn',
        table: {
          head: ['Thì', 'Cấu trúc', 'Ví dụ'],
          rows: [
            ['Hiện tại đơn', 'am / is / are + V3', 'English is spoken here.'],
            ['Quá khứ đơn', 'was / were + V3', 'The letters were sent yesterday.'],
          ],
        },
        examples: ['Rice **is grown** in many Asian countries.', 'My bike **was stolen** last night.', '**Were** you **invited** to the party?', "The windows **aren't cleaned** very often."],
      },
      {
        title: 'by + người thực hiện',
        text: 'Muốn nói ai làm, dùng **by**.',
        examples: ['This picture **was painted by** my grandfather.', 'The book **was written by** a famous writer.'],
      },
    ],
    tips: ['Bị động luôn có **be**: The car **was** repaired. ✔ — The car repaired. ✘', 'Động từ chính ở dạng **V3** (made, built, sold…).'],
    exercises: [
      { type: 'choice', q: 'This house ___ in 1950.', options: ['built', 'was built', 'is building'], answer: 'was built', explain: 'Quá khứ bị động: was + V3.' },
      { type: 'gap', q: 'Coffee ___ in Vietnam.', hint: 'grow – bị động', answers: ['is grown'], explain: 'Hiện tại bị động: is + grown.' },
      { type: 'gap', q: 'My wallet ___ yesterday.', hint: 'steal – bị động', answers: ['was stolen'], explain: 'steal → stolen.' },
      { type: 'choice', q: 'These cars ___ in Japan.', options: ['are made', 'is made', 'make'], answer: 'are made', explain: 'Chủ ngữ số nhiều → are + V3.' },
      { type: 'gap', q: 'The film was directed ___ Steven Spielberg.', answers: ['by'], explain: 'Người thực hiện → by.' },
      { type: 'choice', q: 'When ___ the telephone invented?', options: ['did', 'was', 'is'], answer: 'was', explain: 'Câu hỏi bị động quá khứ: was + V3.' },
      { type: 'gap', q: 'The rooms ___ every morning.', hint: 'clean – bị động', answers: ['are cleaned'], explain: 'Hiện tại bị động.' },
      { type: 'gap', q: 'We ___ to the wedding. We weren’t on the list.', hint: 'not / invite – bị động', answers: ["weren't invited", 'were not invited'], explain: 'Quá khứ bị động phủ định.' },
    ],
  },
  {
    id: 22,
    intro: 'Bị động ở thì **tiếp diễn** (**being + V3**) và **hoàn thành** (**been + V3**).',
    sections: [
      {
        title: 'Bị động tiếp diễn: is / are / was / were being + V3',
        text: 'Việc **đang được làm** (lúc nói hoặc tại một thời điểm quá khứ).',
        examples: ['The road **is being repaired** at the moment.', 'My car **is being washed**.', 'The museum **was being painted** when we visited.'],
      },
      {
        title: 'Bị động hoàn thành: has / have been + V3',
        text: 'Việc **đã được làm** (kết quả ở hiện tại).',
        examples: ['My phone **has been stolen**!', 'The tickets **have been sold** out.', "The letter **hasn't been sent** yet."],
      },
      {
        title: 'Tổng hợp',
        table: {
          head: ['Chủ động', 'Bị động'],
          rows: [
            ['They are building a hotel.', 'A hotel is being built.'],
            ['Somebody has opened the door.', 'The door has been opened.'],
          ],
        },
      },
    ],
    tips: ['đang được làm → **being** + V3; đã được làm → **been** + V3.'],
    exercises: [
      { type: 'choice', q: 'A new school ___ in our town now.', options: ['is building', 'is being built', 'has built'], answer: 'is being built', explain: 'Đang được xây → being + V3.' },
      { type: 'choice', q: 'Look! The room ___.', options: ['has been painted', 'has painted', 'is painting'], answer: 'has been painted', explain: 'Đã được sơn (kết quả bây giờ).' },
      { type: 'gap', q: 'My computer is at the shop. It ___ repaired.', answers: ['is being'], explain: 'Đang được sửa.' },
      { type: 'gap', q: 'All the cakes ___ eaten. There are none left.', answers: ['have been'], explain: 'Đã được ăn hết.' },
      { type: 'choice', q: 'The bridge ___ when we drove past.', options: ['was being repaired', 'has been repaired', 'is repaired'], answer: 'was being repaired', explain: 'Đang được sửa tại thời điểm quá khứ.' },
      { type: 'gap', q: "The email ___ been sent yet.", answers: ["hasn't", 'has not'], explain: 'Phủ định: hasn’t been + V3.' },
      { type: 'choice', q: 'Has the problem ___?', options: ['been solved', 'being solved', 'solved'], answer: 'been solved', explain: 'Has + been + V3.' },
      { type: 'gap', q: "We can't use the lift. It ___ checked at the moment.", answers: ['is being'], explain: 'at the moment → being + V3.' },
    ],
  },
];
