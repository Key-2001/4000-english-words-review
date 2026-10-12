// Trật tự từ — Units 93–96 (nội dung biên soạn riêng)
export default [
  {
    id: 93,
    intro: 'Trật tự cơ bản: **chủ ngữ + động từ + tân ngữ**. Không đặt từ khác **giữa động từ và tân ngữ**. **Nơi chốn** đứng trước **thời gian**.',
    sections: [
      {
        title: 'Động từ + tân ngữ đi liền nhau',
        table: {
          head: ['Đúng', 'Sai'],
          rows: [
            ['He speaks English very well.', 'He speaks very well English.'],
            ['I like Vietnamese food very much.', 'I like very much Vietnamese food.'],
            ['Did you watch TV all evening?', 'Did you watch all evening TV?'],
          ],
        },
      },
      {
        title: 'Nơi chốn + thời gian',
        text: '**Đi đâu / ở đâu (nơi chốn)** trước, **khi nào (thời gian)** sau.',
        examples: ['I go **to work every day**.', 'We arrived **at the hotel at midnight**.', 'She was **in Hanoi last week**.'],
      },
    ],
    tips: ['S + V + O + nơi chốn + thời gian.'],
    exercises: [
      { type: 'choice', q: 'Chọn câu đúng:', options: ['She speaks very well French.', 'She speaks French very well.', 'She very well speaks French.'], answer: 'She speaks French very well.', explain: 'V + O đi liền nhau.' },
      { type: 'choice', q: 'Chọn câu đúng:', options: ['I go every day to school.', 'I go to school every day.', 'Every day I to school go.'], answer: 'I go to school every day.', explain: 'Nơi chốn trước thời gian.' },
      { type: 'choice', q: 'Chọn câu đúng:', options: ['We arrived at the airport early.', 'We at the airport arrived early.', 'We arrived early the airport at.'], answer: 'We arrived at the airport early.', explain: 'Nơi chốn + thời gian.' },
      { type: 'choice', q: 'Chọn câu đúng:', options: ['I like very much chocolate.', 'I like chocolate very much.', 'I very much chocolate like.'], answer: 'I like chocolate very much.', explain: 'V + O + very much.' },
      { type: 'choice', q: 'Chọn câu đúng:', options: ['She was at home yesterday.', 'She was yesterday at home.', 'Yesterday she at home was.'], answer: 'She was at home yesterday.', explain: 'Nơi chốn + thời gian.' },
      { type: 'choice', q: 'Chọn câu đúng:', options: ['Did you lock the door last night?', 'Did you lock last night the door?', 'Did you last night lock the door?'], answer: 'Did you lock the door last night?', explain: 'V + O liền nhau.' },
      { type: 'choice', q: 'Chọn câu đúng:', options: ['He goes to the gym three times a week.', 'He goes three times a week to the gym.', 'He three times goes a week to the gym.'], answer: 'He goes to the gym three times a week.', explain: 'Nơi chốn trước tần suất/thời gian.' },
      { type: 'choice', q: 'Chọn câu đúng:', options: ['I read every night a book.', 'I read a book every night.', 'Every night I a book read.'], answer: 'I read a book every night.', explain: 'V + O + thời gian.' },
    ],
  },
  {
    id: 94,
    intro: 'Trạng từ tần suất (**always, usually, often, sometimes, never**…) đứng **trước động từ thường** và **sau be / trợ động từ**.',
    sections: [
      {
        title: 'Vị trí',
        table: {
          head: ['Trường hợp', 'Vị trí', 'Ví dụ'],
          rows: [
            ['Động từ thường', 'trước động từ', 'I often go swimming.'],
            ['am / is / are / was / were', 'sau be', 'She is always late.'],
            ['Trợ động từ (have, can, will…)', 'sau trợ động từ đầu tiên', "I've never been there. / I can always help."],
          ],
        },
        examples: ['We **usually have** dinner at 7.', 'He **is never** angry.', "I **don't often** eat out.", '**Do** you **always** walk to work?'],
      },
      {
        title: 'Các trạng từ khác',
        text: '**also, just, already, all, both** cũng theo quy tắc trên: I **also** like jazz. We **are all** happy.',
      },
    ],
    tips: ['She always is late ✘ → She **is always** late ✔', 'I go always ✘ → I **always go** ✔'],
    exercises: [
      { type: 'choice', q: 'Chọn câu đúng:', options: ['I always get up at 6.', 'I get always up at 6.', 'Always I get up at 6 always.'], answer: 'I always get up at 6.', explain: 'Trước động từ thường.' },
      { type: 'choice', q: 'Chọn câu đúng:', options: ['She never is late.', 'She is never late.', 'She is late never.'], answer: 'She is never late.', explain: 'Sau be.' },
      { type: 'choice', q: 'Chọn câu đúng:', options: ['I have never seen snow.', 'I never have seen snow.', 'I have seen never snow.'], answer: 'I have never seen snow.', explain: 'Sau trợ động từ.' },
      { type: 'choice', q: 'Chọn câu đúng:', options: ['We usually are busy on Monday.', 'We are usually busy on Monday.', 'We are busy usually on Monday.'], answer: 'We are usually busy on Monday.', explain: 'Sau be.' },
      { type: 'choice', q: 'Chọn câu đúng:', options: ['Do you often go to the cinema?', 'Do often you go to the cinema?', 'Often do you go to the cinema?'], answer: 'Do you often go to the cinema?', explain: 'Trước động từ chính.' },
      { type: 'choice', q: 'Chọn câu đúng:', options: ['I can always help you.', 'I always can help you.', 'I can help always you.'], answer: 'I can always help you.', explain: 'Sau trợ động từ can.' },
      { type: 'choice', q: 'Chọn câu đúng:', options: ['They also like tea.', 'They like also tea.', 'Also they like tea also.'], answer: 'They also like tea.', explain: 'also trước động từ thường.' },
      { type: 'choice', q: 'Chọn câu đúng:', options: ["He doesn't usually eat breakfast.", "He usually doesn't eats breakfast.", "He doesn't eat usually breakfast."], answer: "He doesn't usually eat breakfast.", explain: 'Sau trợ động từ doesn’t.' },
    ],
  },
  {
    id: 95,
    intro: '**still** = vẫn (chưa thay đổi); **yet** = chưa (phủ định) / … chưa? (câu hỏi); **already** = đã… rồi (sớm hơn dự kiến).',
    sections: [
      {
        title: 'still',
        text: 'Đứng **trước động từ thường**, **sau be**; trong phủ định đứng **trước** trợ động từ phủ định.',
        examples: ['It’s 10 am and he’s **still** in bed.', 'Do you **still** live in Hue?', "I **still** don't understand."],
      },
      {
        title: 'yet',
        text: 'Thường đứng **cuối câu** phủ định / câu hỏi.',
        examples: ["The bus hasn't come **yet**.", 'Have you finished **yet**?'],
      },
      {
        title: 'already',
        text: 'Đứng **trước động từ thường**, **sau be / trợ động từ**.',
        examples: ["“Don't forget to pay.” “I've **already** paid.”", 'She is **already** here.'],
      },
    ],
    tips: ['still: việc cũ vẫn tiếp tục · yet: việc mong đợi chưa xảy ra · already: việc xảy ra sớm.'],
    exercises: [
      { type: 'choice', q: 'Is it ___ raining? I want to go out.', options: ['still', 'yet', 'already'], answer: 'still', explain: 'Vẫn còn mưa?' },
      { type: 'choice', q: "Hurry up! The film has ___ started.", options: ['still', 'yet', 'already'], answer: 'already', explain: 'Đã bắt đầu rồi.' },
      { type: 'gap', q: "I haven't decided ___.", answers: ['yet'], explain: 'Phủ định, cuối câu → yet.' },
      { type: 'gap', q: "She ___ doesn't know the answer.", answers: ['still'], explain: 'still trước trợ động từ phủ định.' },
      { type: 'choice', q: 'Have you done your homework ___?', options: ['still', 'yet', 'already'], answer: 'yet', explain: 'Câu hỏi → yet.' },
      { type: 'gap', q: '“Shall I book a table?” “No, I’ve ___ booked one.”', answers: ['already'], explain: 'Đã đặt rồi.' },
      { type: 'choice', q: 'He’s 30 but he ___ lives with his parents.', options: ['still', 'yet', 'already'], answer: 'still', explain: 'Vẫn sống.' },
      { type: 'gap', q: "Is Lan here ___? — No, she hasn't arrived.", answers: ['yet'], explain: 'Câu hỏi → yet.' },
    ],
  },
  {
    id: 96,
    intro: 'Một số động từ có **hai tân ngữ** (người + vật): **give, send, show, lend, buy, bring, tell…**',
    sections: [
      {
        title: 'Hai cách nói',
        table: {
          head: ['V + người + vật', 'V + vật + to / for + người'],
          rows: [
            ['Give me that book.', 'Give that book to me.'],
            ['I sent Anna a letter.', 'I sent a letter to Anna.'],
            ['He bought his mum some flowers.', 'He bought some flowers for his mum.'],
          ],
        },
        text: 'Hầu hết dùng **to**; **buy, make, get, cook** dùng **for**.',
      },
      {
        title: 'Khi vật là đại từ (it / them)',
        text: 'Nếu vật là **it / them**, dùng cấu trúc **V + it/them + to + người**.',
        examples: ['Give **it to me**. (không nói “Give me it”)', 'I lent **them to Tom**.'],
      },
    ],
    tips: ['Give it to me ✔ — Give me it (ít dùng) ✘', 'buy something **for** somebody'],
    exercises: [
      { type: 'choice', q: 'Can you pass ___?', options: ['me the salt', 'the salt me', 'to me the salt'], answer: 'me the salt', explain: 'V + người + vật.' },
      { type: 'choice', q: 'Where is my pen? Please give ___.', options: ['me it', 'it to me', 'it me'], answer: 'it to me', explain: 'Vật là it → it to me.' },
      { type: 'gap', q: 'I sent a postcard ___ my grandparents.', answers: ['to'], explain: 'send … to.' },
      { type: 'gap', q: 'He bought a present ___ his girlfriend.', answers: ['for'], explain: 'buy … for.' },
      { type: 'choice', q: 'Show ___ your photos!', options: ['us', 'to us', 'for us'], answer: 'us', explain: 'V + người + vật.' },
      { type: 'choice', q: 'I lent my bike ___ Nam.', options: ['for', 'to', '–'], answer: 'to', explain: 'lend … to.' },
      { type: 'gap', q: 'These are my old books. I want to give ___ to the library.', answers: ['them'], explain: 'Vật số nhiều → them.' },
      { type: 'gap', q: 'My mother cooked dinner ___ us.', answers: ['for'], explain: 'cook … for.' },
    ],
  },
];
