// Câu tường thuật — Unit 50 (nội dung biên soạn riêng)
export default [
  {
    id: 50,
    intro: '**Câu tường thuật** kể lại lời người khác: **said (that)…** / **told + người + (that)…**. Động từ thường **lùi một thì**.',
    sections: [
      {
        title: 'Lùi thì',
        table: {
          head: ['Lời nói trực tiếp', 'Tường thuật'],
          rows: [
            ['am / is / are', 'was / were'],
            ['do / like (hiện tại đơn)', 'did / liked (quá khứ đơn)'],
            ['will', 'would'],
            ['can', 'could'],
            ['have / has done', 'had done'],
          ],
        },
        examples: ['“I’m tired.” → She **said** (that) she **was** tired.', '“I can swim.” → He **said** he **could** swim.', '“We will call you.” → They **said** they **would** call me.'],
      },
      {
        title: 'say và tell',
        text: '**say** + (that)… (không có người nghe ngay sau). **tell** + **người** + (that)…',
        examples: ['He **said** that he was busy.', 'He **told me** that he was busy.', "She **told us** she didn't like it."],
      },
      {
        title: 'Đổi đại từ',
        text: 'Đổi I / my / we… cho phù hợp người kể: “**I** love **my** job.” → She said **she** loved **her** job.',
      },
    ],
    tips: ['He told **me**… ✔ — He said me… ✘', 'He said **to** me… cũng đúng nhưng ít dùng hơn.'],
    exercises: [
      { type: 'choice', q: '“I am hungry.” → Tom said he ___ hungry.', options: ['is', 'was', 'were'], answer: 'was', explain: 'am → was.' },
      { type: 'choice', q: 'She ___ me that she was leaving.', options: ['said', 'told', 'say'], answer: 'told', explain: 'tell + người.' },
      { type: 'gap', q: '“I will help you.” → He said he ___ help me.', answers: ['would'], explain: 'will → would.' },
      { type: 'gap', q: '“I can’t come.” → Mai said she ___ come.', answers: ["couldn't", 'could not'], explain: "can't → couldn't." },
      { type: 'choice', q: 'They ___ that the hotel was very nice.', options: ['told', 'said', 'tell'], answer: 'said', explain: 'Không có người nghe → said.' },
      { type: 'gap', q: '“I live in Hue.” → He said he ___ in Hue.', hint: 'live', answers: ['lived'], explain: 'Hiện tại đơn → quá khứ đơn.' },
      { type: 'gap', q: '“I like your dress.” → She ___ me she liked my dress.', answers: ['told'], explain: 'told + me.' },
      { type: 'choice', q: '“We have finished.” → They said they ___ finished.', options: ['have', 'had', 'has'], answer: 'had', explain: 'have done → had done.' },
    ],
  },
];
