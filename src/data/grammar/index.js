// Mục lục ngữ pháp: 115 chủ điểm theo giáo trình Essential Grammar in Use (Raymond Murphy).
// Phần giải thích, ví dụ và bài tập trong thư mục này được biên soạn riêng cho app,
// không sao chép nội dung sách.

export const grammarCategories = [
  { id: 'present', title: 'Thì hiện tại', en: 'Present', icon: '⏱️' },
  { id: 'past', title: 'Thì quá khứ', en: 'Past', icon: '⏪' },
  { id: 'perfect', title: 'Hiện tại hoàn thành', en: 'Present perfect', icon: '✅' },
  { id: 'passive', title: 'Câu bị động', en: 'Passive', icon: '🔄' },
  { id: 'verbforms', title: 'Dạng động từ', en: 'Verb forms', icon: '🔤' },
  { id: 'future', title: 'Tương lai', en: 'Future', icon: '⏩' },
  { id: 'modals', title: 'Động từ khuyết thiếu & mệnh lệnh', en: 'Modals, imperative', icon: '🧭' },
  { id: 'thereit', title: 'There và It', en: 'There and it', icon: '📍' },
  { id: 'auxiliary', title: 'Trợ động từ', en: 'Auxiliary verbs', icon: '🧩' },
  { id: 'questions', title: 'Câu hỏi', en: 'Questions', icon: '❓' },
  { id: 'reported', title: 'Câu tường thuật', en: 'Reported speech', icon: '💬' },
  { id: 'ingto', title: 'V-ing và to V', en: '-ing and to...', icon: '➡️' },
  { id: 'goget', title: 'Go, get, do, make, have', en: 'Go, get, do, make and have', icon: '🛠️' },
  { id: 'pronouns', title: 'Đại từ & sở hữu', en: 'Pronouns and possessives', icon: '👤' },
  { id: 'articles', title: 'Mạo từ a/an/the', en: 'A and the', icon: '🅰️' },
  { id: 'determiners', title: 'Từ hạn định & đại từ', en: 'Determiners and pronouns', icon: '🔢' },
  { id: 'adjectives', title: 'Tính từ & trạng từ', en: 'Adjectives and adverbs', icon: '🎨' },
  { id: 'wordorder', title: 'Trật tự từ', en: 'Word order', icon: '🔀' },
  { id: 'clauses', title: 'Liên từ & mệnh đề', en: 'Conjunctions and clauses', icon: '🔗' },
  { id: 'prepositions', title: 'Giới từ', en: 'Prepositions', icon: '📦' },
  { id: 'phrasal', title: 'Cụm động từ', en: 'Phrasal verbs', icon: '🧗' },
];

// [id, category, title, summary]
const RAW = [
  [1, 'present', 'am / is / are', 'Động từ “to be” ở hiện tại'],
  [2, 'present', 'am / is / are (câu hỏi)', 'Câu hỏi và câu trả lời ngắn với “to be”'],
  [3, 'present', 'I am doing (hiện tại tiếp diễn)', 'Hành động đang diễn ra'],
  [4, 'present', 'Are you doing? (câu hỏi tiếp diễn)', 'Câu hỏi thì hiện tại tiếp diễn'],
  [5, 'present', 'I do / work / like (hiện tại đơn)', 'Thói quen và sự thật'],
  [6, 'present', "I don't… (phủ định hiện tại đơn)", "don't / doesn't + động từ"],
  [7, 'present', 'Do you…? (câu hỏi hiện tại đơn)', 'Câu hỏi với do / does'],
  [8, 'present', 'I am doing và I do', 'So sánh hiện tại tiếp diễn và hiện tại đơn'],
  [9, 'present', "I have… và I've got…", 'Diễn tả sở hữu với have / have got'],

  [10, 'past', 'was / were', 'Động từ “to be” ở quá khứ'],
  [11, 'past', 'worked / got / went (quá khứ đơn)', 'Hành động đã xong trong quá khứ'],
  [12, 'past', "I didn't… Did you…?", 'Phủ định và câu hỏi quá khứ đơn'],
  [13, 'past', 'I was doing (quá khứ tiếp diễn)', 'Hành động đang diễn ra tại một thời điểm quá khứ'],
  [14, 'past', 'I was doing và I did', 'Quá khứ tiếp diễn kết hợp quá khứ đơn'],

  [15, 'perfect', 'I have done (hiện tại hoàn thành 1)', 'Cấu trúc have / has + V3'],
  [16, 'perfect', "I've just… already… yet", 'just, already, yet với hiện tại hoàn thành'],
  [17, 'perfect', 'Have you ever…?', 'Kinh nghiệm: ever / never'],
  [18, 'perfect', 'How long have you…?', 'Hành động kéo dài tới hiện tại'],
  [19, 'perfect', 'for / since / ago', 'Diễn tả khoảng thời gian và mốc thời gian'],
  [20, 'perfect', 'I have done và I did', 'Hiện tại hoàn thành hay quá khứ đơn?'],

  [21, 'passive', 'is done / was done (bị động 1)', 'Bị động hiện tại đơn và quá khứ đơn'],
  [22, 'passive', 'is being done / has been done (bị động 2)', 'Bị động tiếp diễn và hoàn thành'],

  [23, 'verbforms', 'be / have / do trong các thì', 'Ba trợ động từ quan trọng nhất'],
  [24, 'verbforms', 'Động từ có quy tắc và bất quy tắc', 'Dạng quá khứ và quá khứ phân từ'],

  [25, 'future', 'What are you doing tomorrow?', 'Hiện tại tiếp diễn cho kế hoạch tương lai'],
  [26, 'future', "I'm going to…", 'Dự định và dự đoán có căn cứ'],
  [27, 'future', 'will / shall (1)', 'Dự đoán và sự việc tương lai'],
  [28, 'future', 'will / shall (2)', 'Quyết định tức thời, đề nghị, lời hứa'],

  [29, 'modals', 'might', 'Khả năng có thể xảy ra'],
  [30, 'modals', 'can và could', 'Khả năng, xin phép, đề nghị'],
  [31, 'modals', "must / mustn't / don't need to", 'Bắt buộc, cấm, không cần thiết'],
  [32, 'modals', 'should', 'Lời khuyên và ý kiến'],
  [33, 'modals', 'I have to…', 'Sự bắt buộc với have to'],
  [34, 'modals', "Would you like…? I'd like…", 'Mời mọc và yêu cầu lịch sự'],
  [35, 'modals', "Do this! Don't do that! Let's…", 'Câu mệnh lệnh và rủ rê'],
  [36, 'modals', 'I used to…', 'Thói quen / trạng thái trong quá khứ'],

  [37, 'thereit', 'there is / there are', 'Diễn tả sự tồn tại'],
  [38, 'thereit', 'there was / were / has been / will be', 'There ở các thì khác'],
  [39, 'thereit', 'it', 'It cho thời gian, thời tiết, khoảng cách…'],

  [40, 'auxiliary', "I am, I don't… (trợ động từ)", 'Dùng trợ động từ để tránh lặp lại'],
  [41, 'auxiliary', "Have you? Are you? Don't you?", 'Câu hỏi đáp lại và câu hỏi đuôi'],
  [42, 'auxiliary', 'too / either, so am I / neither do I', 'Đồng tình với người khác'],
  [43, 'auxiliary', "isn't / haven't / don't (phủ định)", 'Tổng hợp câu phủ định'],

  [44, 'questions', 'is it…? have you…? do they…?', 'Cách tạo câu hỏi (1)'],
  [45, 'questions', 'Who saw you? Who did you see?', 'Câu hỏi về chủ ngữ và tân ngữ'],
  [46, 'questions', 'Who is she talking to? What is it like?', 'Giới từ cuối câu hỏi'],
  [47, 'questions', 'What…? Which…? How…?', 'Chọn từ để hỏi phù hợp'],
  [48, 'questions', 'How long does it take…?', 'Hỏi về thời gian cần để làm việc gì'],
  [49, 'questions', "Do you know where…? I don't know what…", 'Câu hỏi gián tiếp'],

  [50, 'reported', 'She said that… He told me that…', 'Tường thuật lời nói'],

  [51, 'ingto', 'work / working, go / going', 'Dạng động từ sau trợ động từ và động từ khác'],
  [52, 'ingto', 'to… (I want to do) và -ing (I enjoy doing)', 'Động từ + to V hay V-ing'],
  [53, 'ingto', 'I want you to… I told you to…', 'Động từ + tân ngữ + to V'],
  [54, 'ingto', 'I went to the shop to…', 'to V chỉ mục đích'],

  [55, 'goget', 'go to / go on / go for / go -ing', 'Các cách dùng với go'],
  [56, 'goget', 'get', 'Các nghĩa thông dụng của get'],
  [57, 'goget', 'do và make', 'Phân biệt do và make'],
  [58, 'goget', 'have', 'have trong các cụm từ cố định'],

  [59, 'pronouns', 'I / me, he / him, they / them', 'Đại từ chủ ngữ và tân ngữ'],
  [60, 'pronouns', 'my / his / their', 'Tính từ sở hữu'],
  [61, 'pronouns', "Whose is this? It's mine / yours", 'Đại từ sở hữu'],
  [62, 'pronouns', 'I / me / my / mine', 'Tổng hợp đại từ'],
  [63, 'pronouns', 'myself / yourself / themselves', 'Đại từ phản thân'],
  [64, 'pronouns', "-'s (Kate's camera)", 'Sở hữu cách'],

  [65, 'articles', 'a / an', 'Mạo từ không xác định'],
  [66, 'articles', 'Số ít và số nhiều', 'Cách tạo danh từ số nhiều'],
  [67, 'articles', 'Đếm được / không đếm được (1)', 'a bottle / some water'],
  [68, 'articles', 'Đếm được / không đếm được (2)', 'a cake / some cake / some cakes'],
  [69, 'articles', 'a / an và the', 'Lần đầu nhắc tới và đã xác định'],
  [70, 'articles', 'the', 'Những trường hợp dùng the'],
  [71, 'articles', 'go to work / go home / go to the cinema', 'Có hay không có the với nơi chốn'],
  [72, 'articles', 'I like music / I hate exams', 'Không dùng the khi nói chung chung'],
  [73, 'articles', 'the… (tên địa danh)', 'Khi nào tên riêng có the'],

  [74, 'determiners', 'this / that / these / those', 'Từ chỉ định'],
  [75, 'determiners', 'one / ones', 'Thay thế danh từ đã nhắc'],
  [76, 'determiners', 'some và any', 'Một vài, một chút'],
  [77, 'determiners', 'not + any / no / none', 'Diễn tả “không có gì”'],
  [78, 'determiners', 'not + anybody… / nobody / nothing', 'Không ai, không gì'],
  [79, 'determiners', 'somebody / anything / nowhere', 'Đại từ bất định'],
  [80, 'determiners', 'every và all', 'Mọi, tất cả'],
  [81, 'determiners', 'all / most / some / any / no / none', 'Lượng từ + of'],
  [82, 'determiners', 'both / either / neither', 'Nói về hai người / hai vật'],
  [83, 'determiners', 'a lot / much / many', 'Nhiều'],
  [84, 'determiners', '(a) little / (a) few', 'Ít, một ít'],

  [85, 'adjectives', 'Tính từ (old / nice / interesting)', 'Vị trí và cách dùng tính từ'],
  [86, 'adjectives', 'Trạng từ (quickly / badly)', 'Trạng từ chỉ cách thức'],
  [87, 'adjectives', 'older / more expensive', 'So sánh hơn: cách tạo'],
  [88, 'adjectives', 'older than… / more expensive than…', 'So sánh hơn với than'],
  [89, 'adjectives', 'not as … as', 'So sánh bằng và không bằng'],
  [90, 'adjectives', 'the oldest / the most expensive', 'So sánh nhất'],
  [91, 'adjectives', 'enough', 'Đủ'],
  [92, 'adjectives', 'too', 'Quá'],

  [93, 'wordorder', 'Trật tự từ (1)', 'Động từ + tân ngữ, nơi chốn + thời gian'],
  [94, 'wordorder', 'always / usually / often (trật tự từ 2)', 'Vị trí trạng từ tần suất'],
  [95, 'wordorder', 'still / yet / already', 'Vẫn, chưa, đã'],
  [96, 'wordorder', 'Give me that book! Give it to me!', 'Động từ có hai tân ngữ'],

  [97, 'clauses', 'and / but / or / so / because', 'Liên từ cơ bản'],
  [98, 'clauses', 'when', 'Mệnh đề thời gian với when'],
  [99, 'clauses', 'If we go… If you see…', 'Câu điều kiện có thật (loại 1)'],
  [100, 'clauses', 'If I had… If we went…', 'Câu điều kiện không có thật (loại 2)'],
  [101, 'clauses', 'a person who… a thing that / which…', 'Mệnh đề quan hệ (1)'],
  [102, 'clauses', 'the people we met / the hotel you stayed at', 'Mệnh đề quan hệ (2)'],

  [103, 'prepositions', 'at 8 o’clock / on Monday / in April', 'Giới từ chỉ thời gian'],
  [104, 'prepositions', 'from… to / until / since / for', 'Khoảng thời gian'],
  [105, 'prepositions', 'before / after / during / while', 'Trước, sau, trong khi'],
  [106, 'prepositions', 'in / at / on (nơi chốn 1)', 'Vị trí cơ bản'],
  [107, 'prepositions', 'in / at / on (nơi chốn 2)', 'Các cụm cố định với nơi chốn'],
  [108, 'prepositions', 'to / in / at (nơi chốn 3)', 'Đi đến và ở tại'],
  [109, 'prepositions', 'under / behind / opposite…', 'Giới từ chỉ vị trí'],
  [110, 'prepositions', 'up / over / through…', 'Giới từ chỉ chuyển động'],
  [111, 'prepositions', 'on / at / by / with / about', 'Các cách dùng khác của giới từ'],
  [112, 'prepositions', 'afraid of… / good at… / giới từ + -ing', 'Tính từ + giới từ'],
  [113, 'prepositions', 'listen to… / look at…', 'Động từ + giới từ'],

  [114, 'phrasal', 'go in / fall off / run away', 'Cụm động từ (1)'],
  [115, 'phrasal', 'put on your shoes / put your shoes on', 'Cụm động từ có tân ngữ (2)'],
];

export const grammarUnits = RAW.map(([id, category, title, summary]) => ({ id, category, title, summary }));
export const totalGrammarUnits = grammarUnits.length;

export function getUnitMeta(id) {
  return grammarUnits.find((u) => u.id === id);
}

export function getCategory(id) {
  return grammarCategories.find((c) => c.id === id);
}

export function unitsOfCategory(catId) {
  return grammarUnits.filter((u) => u.category === catId);
}

// Nội dung từng chủ điểm được tách file và tải khi cần (code-splitting).
const loaders = {
  present: () => import('./present.js'),
  past: () => import('./past.js'),
  perfect: () => import('./perfect.js'),
  passive: () => import('./passive.js'),
  verbforms: () => import('./verbforms.js'),
  future: () => import('./future.js'),
  modals: () => import('./modals.js'),
  thereit: () => import('./thereit.js'),
  auxiliary: () => import('./auxiliary.js'),
  questions: () => import('./questions.js'),
  reported: () => import('./reported.js'),
  ingto: () => import('./ingto.js'),
  goget: () => import('./goget.js'),
  pronouns: () => import('./pronouns.js'),
  articles: () => import('./articles.js'),
  determiners: () => import('./determiners.js'),
  adjectives: () => import('./adjectives.js'),
  wordorder: () => import('./wordorder.js'),
  clauses: () => import('./clauses.js'),
  prepositions: () => import('./prepositions.js'),
  phrasal: () => import('./phrasal.js'),
};

const cache = new Map();

export async function loadCategory(catId) {
  if (!cache.has(catId)) {
    const promise = loaders[catId]()
      .then((m) => m.default.map((content) => ({ ...getUnitMeta(content.id), ...content })))
      .catch((err) => {
        cache.delete(catId); // cho phép thử tải lại nếu lỗi mạng
        throw err;
      });
    cache.set(catId, promise);
  }
  return cache.get(catId);
}

export async function loadUnit(id) {
  const meta = getUnitMeta(id);
  if (!meta) return null;
  const units = await loadCategory(meta.category);
  return units.find((u) => u.id === id) || null;
}
