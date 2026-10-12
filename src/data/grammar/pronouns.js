// Đại từ và sở hữu — Units 59–64 (nội dung biên soạn riêng)
export default [
  {
    id: 59,
    intro: '**Đại từ chủ ngữ** (I, he, they…) đứng **trước** động từ; **đại từ tân ngữ** (me, him, them…) đứng **sau** động từ hoặc giới từ.',
    sections: [
      {
        title: 'Bảng đại từ',
        table: {
          head: ['Chủ ngữ', 'I', 'you', 'he', 'she', 'it', 'we', 'they'],
          rows: [['Tân ngữ', 'me', 'you', 'him', 'her', 'it', 'us', 'them']],
        },
        examples: ['**I** know **her**. **She** knows **me**.', "Where's Tom? I can't see **him**.", 'These are my friends. I play football with **them**.', 'Can you help **us**?'],
      },
    ],
    tips: ['Sau giới từ dùng tân ngữ: with **me**, for **him**, to **them**.', 'They gave it to **us**. ✔ — to we ✘'],
    exercises: [
      { type: 'choice', q: 'I love my grandmother. I visit ___ every week.', options: ['she', 'her', 'hers'], answer: 'her', explain: 'Sau động từ → tân ngữ.' },
      { type: 'choice', q: '___ are my best friends.', options: ['Them', 'They', 'Their'], answer: 'They', explain: 'Chủ ngữ → They.' },
      { type: 'gap', q: "Where are my keys? I can't find ___.", answers: ['them'], explain: 'keys số nhiều → them.' },
      { type: 'gap', q: 'Can you come with ___? We need help.', answers: ['us'], explain: 'Sau giới từ, “chúng tôi” → us.' },
      { type: 'choice', q: 'This letter is for ___.', options: ['he', 'him', 'his'], answer: 'him', explain: 'Sau for → him.' },
      { type: 'gap', q: "Tom likes Anna, but she doesn't like ___.", answers: ['him'], explain: 'Tom → him.' },
      { type: 'choice', q: 'Where is the book? — ___ is on the table.', options: ['It', 'Its', 'He'], answer: 'It', explain: 'Vật → it.' },
      { type: 'gap', q: 'Please call ___ when you arrive. I’ll be waiting.', answers: ['me'], explain: 'Tân ngữ của I → me.' },
    ],
  },
  {
    id: 60,
    intro: '**Tính từ sở hữu** (my, your, his…) luôn đứng **trước danh từ** để chỉ ai sở hữu.',
    sections: [
      {
        title: 'Bảng tính từ sở hữu',
        table: {
          head: ['Đại từ', 'I', 'you', 'he', 'she', 'it', 'we', 'they'],
          rows: [['Sở hữu', 'my', 'your', 'his', 'her', 'its', 'our', 'their']],
        },
        examples: ['I like **my** job.', 'She lives with **her** parents.', 'The dog is eating **its** food.', 'They sold **their** house.'],
      },
      {
        title: "its và it's",
        text: "**its** = của nó (sở hữu). **it's** = it is / it has.",
        examples: ['The company changed **its** name.', "**It's** a beautiful day."],
      },
    ],
    tips: ['his (của anh ấy) / her (của cô ấy) — chọn theo **người sở hữu**, không theo vật.', "its ≠ it's"],
    exercises: [
      { type: 'choice', q: 'Mr Nam is with ___ wife.', options: ['her', 'his', 'its'], answer: 'his', explain: 'Người sở hữu là Mr Nam → his.' },
      { type: 'choice', q: 'The cat is playing with ___ tail.', options: ["it's", 'its', 'his'], answer: 'its', explain: 'Của nó → its.' },
      { type: 'gap', q: 'We love ___ new apartment.', answers: ['our'], explain: 'we → our.' },
      { type: 'gap', q: 'Lan and Minh are visiting ___ grandparents.', answers: ['their'], explain: 'they → their.' },
      { type: 'choice', q: 'Is this ___ phone? — Yes, thanks!', options: ['you', 'your', 'yours'], answer: 'your', explain: 'Trước danh từ → your.' },
      { type: 'gap', q: 'Mai lost ___ bag yesterday.', answers: ['her'], explain: 'Mai → her.' },
      { type: 'choice', q: 'I forgot ___ umbrella at home.', options: ['me', 'my', 'mine'], answer: 'my', explain: 'Trước danh từ → my.' },
      { type: 'gap', q: "___ raining. Take an umbrella.", answers: ["it's", 'it is'], explain: "it's = it is." },
    ],
  },
  {
    id: 61,
    intro: '**Đại từ sở hữu** (mine, yours, hers…) đứng **một mình**, thay cho “tính từ sở hữu + danh từ”. Hỏi chủ sở hữu bằng **Whose?**',
    sections: [
      {
        title: 'Bảng đại từ sở hữu',
        table: {
          head: ['Tính từ sở hữu', 'my', 'your', 'his', 'her', 'our', 'their'],
          rows: [['Đại từ sở hữu', 'mine', 'yours', 'his', 'hers', 'ours', 'theirs']],
        },
        examples: ["This is **my** bag. → This bag is **mine**.", 'Is this pen **yours**?', "That isn't our car. **Ours** is blue."],
      },
      {
        title: 'Whose…?',
        examples: ['**Whose** is this jacket? — It’s **Tom’s**.', '**Whose** keys are these? — They’re **mine**.'],
      },
      {
        title: 'a friend of mine',
        text: '**a friend of mine / yours / his…** = một người bạn của tôi / của bạn…',
        examples: ['She’s **a friend of mine**.'],
      },
    ],
    tips: ["yours ✔ — your's ✘ (không có dấu nháy)", 'Không đặt danh từ sau mine/yours: It’s mine. (không nói “mine book”)'],
    exercises: [
      { type: 'choice', q: 'This book is ___.', options: ['my', 'mine', 'me'], answer: 'mine', explain: 'Đứng một mình → mine.' },
      { type: 'choice', q: '___ is this umbrella? — It’s Lan’s.', options: ['Who', 'Whose', "Who's"], answer: 'Whose', explain: 'Hỏi chủ sở hữu → Whose.' },
      { type: 'gap', q: "That's not my coat. Is it ___? (you)", answers: ['yours'], explain: 'you → yours.' },
      { type: 'gap', q: 'Their house is bigger than ___. (we)', answers: ['ours'], explain: 'we → ours.' },
      { type: 'choice', q: 'Mai lost her pen, so I lent her ___.', options: ['my', 'mine', 'me'], answer: 'mine', explain: '= my pen.' },
      { type: 'gap', q: 'Those aren’t Tom’s shoes. ___ are black. (he)', answers: ['his'], explain: 'he → his.' },
      { type: 'choice', q: 'He’s a good friend of ___.', options: ['me', 'my', 'mine'], answer: 'mine', explain: 'a friend of mine.' },
      { type: 'gap', q: 'Is this bag ___? (she)', answers: ['hers'], explain: 'she → hers.' },
    ],
  },
  {
    id: 62,
    intro: 'Tổng hợp: **I / me / my / mine** — đại từ chủ ngữ, tân ngữ, tính từ sở hữu và đại từ sở hữu.',
    sections: [
      {
        title: 'Bảng tổng hợp',
        table: {
          head: ['Chủ ngữ', 'Tân ngữ', 'Tính từ sở hữu', 'Đại từ sở hữu'],
          rows: [
            ['I', 'me', 'my', 'mine'],
            ['you', 'you', 'your', 'yours'],
            ['he', 'him', 'his', 'his'],
            ['she', 'her', 'her', 'hers'],
            ['it', 'it', 'its', '–'],
            ['we', 'us', 'our', 'ours'],
            ['they', 'them', 'their', 'theirs'],
          ],
        },
        examples: ['**I** gave **him** **my** number, and he gave me **his**.', '**They** invited **us** to **their** house.'],
      },
    ],
    tips: ['Trước động từ → chủ ngữ; sau động từ/giới từ → tân ngữ; trước danh từ → tính từ sở hữu; đứng một mình → đại từ sở hữu.'],
    exercises: [
      { type: 'choice', q: 'Do you know ___? He’s my teacher.', options: ['he', 'him', 'his'], answer: 'him', explain: 'Sau động từ → him.' },
      { type: 'choice', q: '___ car is red, and ___ is white.', options: ['My / her', 'Mine / hers', 'My / hers'], answer: 'My / hers', explain: 'Trước danh từ: my; đứng một mình: hers.' },
      { type: 'gap', q: '___ live in Da Nang. Our house is near the sea. (we)', answers: ['we'], explain: 'Chủ ngữ → we.' },
      { type: 'gap', q: "This isn't your key. It's ___. (I)", answers: ['mine'], explain: 'Đứng một mình → mine.' },
      { type: 'choice', q: 'Tell ___ about your trip!', options: ['we', 'us', 'our'], answer: 'us', explain: 'Sau động từ → us.' },
      { type: 'gap', q: "The children are playing with ___ toys. (they)", answers: ['their'], explain: 'Trước danh từ → their.' },
      { type: 'choice', q: '___ is my sister. ___ name is Hoa.', options: ['She / Her', 'Her / She', 'She / Hers'], answer: 'She / Her', explain: 'Chủ ngữ: She; trước danh từ: Her.' },
      { type: 'gap', q: 'I saw Linh yesterday, but she didn’t see ___. (I)', answers: ['me'], explain: 'Tân ngữ → me.' },
    ],
  },
  {
    id: 63,
    intro: '**Đại từ phản thân** (myself, yourself…) dùng khi **chủ ngữ và tân ngữ là cùng một người**, hoặc để nhấn mạnh “tự mình”.',
    sections: [
      {
        title: 'Bảng đại từ phản thân',
        table: {
          head: ['I', 'you', 'he', 'she', 'it', 'we', 'you (số nhiều)', 'they'],
          rows: [['myself', 'yourself', 'himself', 'herself', 'itself', 'ourselves', 'yourselves', 'themselves']],
        },
        examples: ['I cut **myself** while cooking.', 'Enjoy **yourselves**!', 'She taught **herself** to play the guitar.'],
      },
      {
        title: 'by myself = một mình',
        examples: ['I live **by myself**. (= alone)', 'Did you make this **by yourself**?'],
      },
      {
        title: 'each other ≠ themselves',
        text: '**each other** = lẫn nhau; **themselves** = chính họ.',
        examples: ['Tom and Anna looked at **each other**. (Tom nhìn Anna, Anna nhìn Tom)', 'They looked at **themselves** in the mirror.'],
      },
    ],
    tips: ['themselves ✔ — theirselves ✘', 'himself ✔ — hisself ✘'],
    exercises: [
      { type: 'choice', q: 'Be careful! Don’t hurt ___.', options: ['you', 'yourself', 'yours'], answer: 'yourself', explain: 'Chủ ngữ = tân ngữ → yourself.' },
      { type: 'gap', q: 'He made the cake by ___.', answers: ['himself'], explain: 'he → himself.' },
      { type: 'choice', q: 'We enjoyed ___ at the party.', options: ['us', 'ourselves', 'ourself'], answer: 'ourselves', explain: 'we → ourselves.' },
      { type: 'choice', q: 'Lan and Mai often help ___ with homework.', options: ['themselves', 'each other', 'theirselves'], answer: 'each other', explain: 'Giúp lẫn nhau.' },
      { type: 'gap', q: 'She looked at ___ in the mirror.', answers: ['herself'], explain: 'she → herself.' },
      { type: 'gap', q: 'I live by ___ in a small flat.', answers: ['myself'], explain: 'by myself = một mình.' },
      { type: 'choice', q: 'The children made dinner ___.', options: ['themself', 'themselves', 'theirselves'], answer: 'themselves', explain: 'they → themselves.' },
      { type: 'gap', q: 'The machine turns ___ off automatically.', answers: ['itself'], explain: 'it → itself.' },
    ],
  },
  {
    id: 64,
    intro: "**Sở hữu cách 's** để nói **của ai**: Kate**'s** camera = máy ảnh của Kate.",
    sections: [
      {
        title: 'Cách thêm ’s',
        table: {
          head: ['Danh từ', 'Sở hữu cách', 'Ví dụ'],
          rows: [
            ['Số ít', "+ 's", "my brother's car"],
            ['Số nhiều có -s', "+ '", "my parents' house"],
            ['Số nhiều bất quy tắc', "+ 's", "the children's toys"],
          ],
        },
        examples: ["This is **Kate's** camera.", "**My sister's** husband is a doctor.", "The **students'** books are on the desk.", "Where is the **men's** toilet?"],
      },
      {
        title: "Không có danh từ sau 's",
        text: "Có thể bỏ danh từ khi đã rõ, đặc biệt với nhà/cửa hàng: I'm staying at my **aunt's** (house). I went to the **doctor's**.",
      },
      {
        title: 'Với đồ vật: of',
        text: 'Với vật thường dùng **of**: the end **of** the film, the door **of** the room (không nói “the film’s end”).',
      },
    ],
    tips: ["Ann and Tom's house = nhà chung của cả hai.", "it's ≠ its: sở hữu của it là **its**, không có ’s."],
    exercises: [
      { type: 'choice', q: 'This is ___ bike.', options: ['my brother', "my brother's", "my brothers'"], answer: "my brother's", explain: "Số ít + 's." },
      { type: 'choice', q: 'My ___ house is very big. (2 người)', options: ["parent's", "parents'", "parents's"], answer: "parents'", explain: "Số nhiều có -s → '." },
      { type: 'gap', q: 'The ___ toys are everywhere. (children)', answers: ["children's"], explain: "Số nhiều bất quy tắc + 's." },
      { type: 'choice', q: 'I like the ___.', options: ["film's end", 'end of the film', "end's film"], answer: 'end of the film', explain: 'Với vật → of.' },
      { type: 'gap', q: 'Is this ___ phone? (Mai)', answers: ["mai's"], explain: "Mai's phone." },
      { type: 'choice', q: 'I stayed at my ___ last weekend.', options: ['grandmother', "grandmother's", 'grandmothers'], answer: "grandmother's", explain: "at my grandmother's (house)." },
      { type: 'gap', q: "The ___ names are on the list. (students – nhiều người)", answers: ["students'"], explain: "Số nhiều có -s → '." },
      { type: 'choice', q: '___ is that red car? — It’s Nam’s.', options: ['Who', 'Whose', "Who's"], answer: 'Whose', explain: 'Hỏi chủ sở hữu.' },
    ],
  },
];
