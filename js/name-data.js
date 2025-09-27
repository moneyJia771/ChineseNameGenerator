// 名字数据库
const nameData = {
    // 男孩名字字库
    male: {
        traditional: [
            { char: "宇", meaning: "宇指天地之间的空间，取名寓意胸怀宽广，志向远大", source: "《说文解字》" },
            { char: "浩", meaning: "浩指广大、众多，取名寓意胸怀博大、前途广阔", source: "《诗经》" },
            { char: "瑞", meaning: "瑞指吉祥、好预兆，取名寓意吉祥如意、前程似锦", source: "《尔雅》" },
            { char: "轩", meaning: "轩指高大、气度不凡，取名寓意气宇轩昂、风度翩翩", source: "《诗经》" },
            { char: "铭", meaning: "铭指铭记、牢记，取名寓意不忘初心、砥砺前行", source: "《说文解字》" },
            { char: "鸿", meaning: "鸿指大雁，取名寓意志向高远、前程远大", source: "《诗经》" },
            { char: "泽", meaning: "泽指恩惠、润泽，取名寓意恩泽万物、心怀善良", source: "《尔雅》" },
            { char: "峰", meaning: "峰指山峰，取名寓意卓越、出类拔萃", source: "《说文解字》" },
            { char: "睿", meaning: "睿指明智、聪慧，取名寓意聪明睿智、见解独到", source: "《尔雅》" },
            { char: "嘉", meaning: "嘉指美好、赞美，取名寓意品德高尚、生活美好", source: "《诗经》" }
        ],
        modern: [
            { char: "辰", meaning: "辰指时日、星辰，取名寓意前途光明、如星辰般闪耀", source: "现代常用字" },
            { char: "皓", meaning: "皓指洁白、光明，取名寓意光明磊落、纯洁无瑕", source: "现代常用字" },
            { char: "旭", meaning: "旭指初升的太阳，取名寓意朝气蓬勃、充满活力", source: "现代常用字" },
            { char: "航", meaning: "航指航行、飞行，取名寓意勇往直前、志在四方", source: "现代常用字" },
            { char: "瑾", meaning: "瑾指美玉，取名寓意品质高洁、珍贵稀有", source: "现代常用字" },
            { char: "晨", meaning: "晨指早晨，取名寓意朝气蓬勃、充满希望", source: "现代常用字" },
            { char: "乐", meaning: "乐指快乐、音乐，取名寓意生活愉快、心情舒畅", source: "现代常用字" },
            { char: "洋", meaning: "洋指海洋，取名寓意胸怀宽广、包容万物", source: "现代常用字" },
            { char: "铭", meaning: "铭指铭记、牢记，取名寓意不忘初心、砥砺前行", source: "现代常用字" },
            { char: "鑫", meaning: "鑫指财富兴盛，取名寓意财源广进、兴旺发达", source: "现代常用字" }
        ],
        literary: [
            { char: "书", meaning: "书指书籍、学问，取名寓意博学多才、学富五车", source: "文学典故" },
            { char: "墨", meaning: "墨指墨水、文采，取名寓意才华横溢、文采斐然", source: "文学典故" },
            { char: "琴", meaning: "琴指乐器，取名寓意才艺双全、温文尔雅", source: "文学典故" },
            { char: "风", meaning: "风指风度、风采，取名寓意风度翩翩、气宇轩昂", source: "文学典故" },
            { char: "雨", meaning: "雨指雨水、恩泽，取名寓意恩泽万物、滋养生命", source: "文学典故" },
            { char: "云", meaning: "云指云彩、高远，取名寓意志向高远、自由洒脱", source: "文学典故" },
            { char: "松", meaning: "松指松树，取名寓意坚韧不拔、傲然挺立", source: "文学典故" },
            { char: "竹", meaning: "竹指竹子，取名寓意虚心有节、品格高尚", source: "文学典故" },
            { char: "梅", meaning: "梅指梅花，取名寓意坚强不屈、品格高洁", source: "文学典故" },
            { char: "兰", meaning: "兰指兰花，取名寓意高雅脱俗、品德高尚", source: "文学典故" }
        ],
        unique: [
            { char: "澄", meaning: "澄指清澈、明净，取名寓意心灵纯净、明辨是非", source: "少见字" },
            { char: "骁", meaning: "骁指勇猛、英勇，取名寓意勇敢无畏、英勇善战", source: "少见字" },
            { char: "珩", meaning: "珩指古代的一种玉器，取名寓意品德高尚、珍贵稀有", source: "少见字" },
            { char: "玥", meaning: "玥指古代传说中的一种神珠，取名寓意珍贵独特、光明美好", source: "少见字" },
            { char: "昊", meaning: "昊指广大、无边际，取名寓意胸怀宽广、志向远大", source: "少见字" },
            { char: "璟", meaning: "璟指美玉、光彩，取名寓意光彩照人、品质高洁", source: "少见字" },
            { char: "翊", meaning: "翊指辅佐、帮助，取名寓意扶持正义、辅佐他人", source: "少见字" },
            { char: "熠", meaning: "熠指光彩、闪耀，取名寓意光彩夺目、前途光明", source: "少见字" },
            { char: "煜", meaning: "煜指照耀、光明，取名寓意光明磊落、前途光明", source: "少见字" },
            { char: "锦", meaning: "锦指华丽的丝织品，取名寓意前程似锦、华丽美好", source: "少见字" }
        ]
    },
    
    // 女孩名字字库
    female: {
        traditional: [
            { char: "婷", meaning: "婷指美好、优雅，取名寓意亭亭玉立、优雅大方", source: "《说文解字》" },
            { char: "雅", meaning: "雅指高雅、文雅，取名寓意举止文雅、品德高尚", source: "《诗经》" },
            { char: "静", meaning: "静指安静、平和，取名寓意安静淡雅、心如止水", source: "《尔雅》" },
            { char: "怡", meaning: "怡指愉快、和悦，取名寓意心情愉悦、性格温和", source: "《说文解字》" },
            { char: "梦", meaning: "梦指梦想、憧憬，取名寓意心怀梦想、追求美好", source: "《诗经》" },
            { char: "琳", meaning: "琳指美玉，取名寓意品质高洁、珍贵美好", source: "《尔雅》" },
            { char: "娜", meaning: "娜指婀娜、柔美，取名寓意婀娜多姿、温柔美丽", source: "《说文解字》" },
            { char: "颖", meaning: "颖指聪明、杰出，取名寓意聪明伶俐、出类拔萃", source: "《诗经》" },
            { char: "玲", meaning: "玲指玉石声，取名寓意玲珑剔透、聪明伶俐", source: "《尔雅》" },
            { char: "芳", meaning: "芳指香气、美好，取名寓意品德高尚、美好如花", source: "《说文解字》" }
        ],
        modern: [
            { char: "欣", meaning: "欣指喜悦、高兴，取名寓意欣欣向荣、喜悦美好", source: "现代常用字" },
            { char: "悦", meaning: "悦指愉悦、喜悦，取名寓意心情愉悦、性格开朗", source: "现代常用字" },
            { char: "晴", meaning: "晴指晴朗、明媚，取名寓意心情愉快、阳光明媚", source: "现代常用字" },
            { char: "雪", meaning: "雪指雪花，取名寓意纯洁无瑕、品质高洁", source: "现代常用字" },
            { char: "茹", meaning: "茹指包容、接受，取名寓意包容宽厚、温柔善良", source: "现代常用字" },
            { char: "彤", meaning: "彤指红色，取名寓意热情活泼、光明美好", source: "现代常用字" },
            { char: "萱", meaning: "萱指萱草，取名寓意忘忧草、带来快乐", source: "现代常用字" },
            { char: "妍", meaning: "妍指美丽、美好，取名寓意容貌美丽、品德高尚", source: "现代常用字" },
            { char: "莉", meaning: "莉指茉莉花，取名寓意纯洁美丽、芬芳怡人", source: "现代常用字" },
            { char: "娅", meaning: "娅指优雅、美丽，取名寓意优雅大方、美丽动人", source: "现代常用字" }
        ],
        literary: [
            { char: "诗", meaning: "诗指诗歌、文学，取名寓意才华横溢、文采斐然", source: "文学典故" },
            { char: "词", meaning: "词指词语、词牌，取名寓意文采飞扬、才华出众", source: "文学典故" },
            { char: "画", meaning: "画指绘画、艺术，取名寓意艺术才华、审美高雅", source: "文学典故" },
            { char: "霜", meaning: "霜指霜雪，取名寓意品格高洁、坚强不屈", source: "文学典故" },
            { char: "竹", meaning: "竹指竹子，取名寓意虚心有节、品格高尚", source: "文学典故" },
            { char: "梅", meaning: "梅指梅花，取名寓意坚强不屈、品格高洁", source: "文学典故" },
            { char: "兰", meaning: "兰指兰花，取名寓意高雅脱俗、品德高尚", source: "文学典故" },
            { char: "菊", meaning: "菊指菊花，取名寓意坚贞不渝、傲霜斗雪", source: "文学典故" },
            { char: "荷", meaning: "荷指荷花，取名寓意出淤泥而不染、清新高洁", source: "文学典故" },
            { char: "柳", meaning: "柳指柳树，取名寓意柔美多姿、婀娜多姿", source: "文学典故" }
        ],
        unique: [
            { char: "瑜", meaning: "瑜指美玉、美好，取名寓意品德高尚、才华出众", source: "少见字" },
            { char: "璇", meaning: "璇指美玉，取名寓意珍贵美好、光彩照人", source: "少见字" },
            { char: "珺", meaning: "珺指美玉，取名寓意品质高洁、珍贵稀有", source: "少见字" },
            { char: "琪", meaning: "琪指美玉，取名寓意珍贵美好、吉祥如意", source: "少见字" },
            { char: "瑾", meaning: "瑾指美玉，取名寓意品质高洁、珍贵稀有", source: "少见字" },
            { char: "玥", meaning: "玥指古代传说中的一种神珠，取名寓意珍贵独特、光明美好", source: "少见字" },
            { char: "熹", meaning: "熹指光明、明亮，取名寓意光明美好、前途光明", source: "少见字" },
            { char: "颜", meaning: "颜指容颜、美丽，取名寓意容貌美丽、品德高尚", source: "少见字" },
            { char: "菲", meaning: "菲指香气、芬芳，取名寓意芬芳馥郁、优雅脱俗", source: "少见字" },
            { char: "蕊", meaning: "蕊指花蕊，取名寓意美好纯洁、娇嫩可爱", source: "少见字" }
        ]
    }
};

// 双字名组合库
const twoCharCombinations = {
    male: {
        traditional: [
            { first: "子", second: "轩", meaning: "子指儿子、智者，轩指高大，取名寓意才华出众、气宇轩昂", source: "传统经典" },
            { first: "浩", second: "然", meaning: "浩指广大，然指如此，取名寓意胸怀博大、气度不凡", source: "传统经典" },
            { first: "俊", second: "杰", meaning: "俊指英俊，杰指杰出，取名寓意相貌堂堂、才华出众", source: "传统经典" },
            { first: "志", second: "远", meaning: "志指志向，远指远大，取名寓意志向远大、前程似锦", source: "传统经典" },
            { first: "明", second: "辉", meaning: "明指明亮，辉指光辉，取名寓意光明磊落、前途光明", source: "传统经典" },
            { first: "泽", second: "宇", meaning: "泽指恩泽，宇指宇宙，取名寓意恩泽万物、胸怀宽广", source: "传统经典" },
            { first: "鸿", second: "志", meaning: "鸿指大雁，志指志向，取名寓意志向高远、前程远大", source: "传统经典" },
            { first: "伟", second: "栋", meaning: "伟指伟大，栋指栋梁，取名寓意栋梁之才、成就伟业", source: "传统经典" },
            { first: "嘉", second: "懿", meaning: "嘉指美好，懿指美德，取名寓意品德高尚、美好贤德", source: "传统经典" },
            { first: "宏", second: "伟", meaning: "宏指宏大，伟指伟大，取名寓意志向远大、成就伟业", source: "传统经典" }
        ],
        modern: [
            { first: "皓", second: "轩", meaning: "皓指明亮，轩指高大，取名寓意光明磊落、气宇轩昂", source: "现代时尚" },
            { first: "瑞", second: "辰", meaning: "瑞指吉祥，辰指时日，取名寓意吉祥如意、前途光明", source: "现代时尚" },
            { first: "昊", second: "天", meaning: "昊指广大，天指天空，取名寓意胸怀宽广、志向远大", source: "现代时尚" },
            { first: "思", second: "远", meaning: "思指思考，远指远大，取名寓意思维深远、志向高远", source: "现代时尚" },
            { first: "博", second: "文", meaning: "博指博学，文指文采，取名寓意博学多才、文采斐然", source: "现代时尚" },
            { first: "梓", second: "晨", meaning: "梓指梓树，晨指早晨，取名寓意朝气蓬勃、充满希望", source: "现代时尚" },
            { first: "雨", second: "泽", meaning: "雨指雨水，泽指恩泽，取名寓意恩泽万物、滋养生命", source: "现代时尚" },
            { first: "智", second: "宸", meaning: "智指智慧，宸指帝王居所，取名寓意聪明睿智、尊贵非凡", source: "现代时尚" },
            { first: "弘", second: "毅", meaning: "弘指弘扬，毅指毅力，取名寓意意志坚定、弘扬正气", source: "现代时尚" },
            { first: "哲", second: "瀚", meaning: "哲指哲学、智慧，瀚指广大，取名寓意智慧广博、学识渊博", source: "现代时尚" }
        ],
        literary: [
            { first: "书", second: "墨", meaning: "书指书籍，墨指墨水，取名寓意学富五车、才华横溢", source: "文艺诗意" },
            { first: "诗", second: "云", meaning: "诗指诗歌，云指云彩，取名寓意才华横溢、志向高远", source: "文艺诗意" },
            { first: "风", second: "华", meaning: "风指风度，华指华丽，取名寓意风度翩翩、才华出众", source: "文艺诗意" },
            { first: "雨", second: "泽", meaning: "雨指雨水，泽指恩泽，取名寓意恩泽万物、滋养生命", source: "文艺诗意" },
            { first: "云", second: "天", meaning: "云指云彩，天指天空，取名寓意志向高远、胸怀宽广", source: "文艺诗意" },
            { first: "松", second: "竹", meaning: "松指松树，竹指竹子，取名寓意坚韧不拔、虚心有节", source: "文艺诗意" },
            { first: "山", second: "水", meaning: "山指山峰，水指江河，取名寓意胸怀山水、志向远大", source: "文艺诗意" },
            { first: "星", second: "辰", meaning: "星指星星，辰指时日，取名寓意光芒四射、前途光明", source: "文艺诗意" },
            { first: "清", second: "风", meaning: "清指清澈，风指风度，取名寓意清新脱俗、风度翩翩", source: "文艺诗意" },
            { first: "明", second: "月", meaning: "明指明亮，月指月亮，取名寓意光明磊落、温润如玉", source: "文艺诗意" }
        ],
        unique: [
            { first: "澄", second: "邈", meaning: "澄指清澈，邈指深远，取名寓意心灵纯净、志向远大", source: "独特少见" },
            { first: "熠", second: "彤", meaning: "熠指光彩，彤指红色，取名寓意光彩夺目、前途光明", source: "独特少见" },
            { first: "锦", second: "程", meaning: "锦指华丽，程指旅程，取名寓意前程似锦、未来美好", source: "独特少见" },
            { first: "翊", second: "然", meaning: "翊指辅佐，然指如此，取名寓意辅佐他人、气度不凡", source: "独特少见" },
            { first: "玥", second: "辰", meaning: "玥指美玉，辰指时日，取名寓意珍贵独特、前途光明", source: "独特少见" },
            { first: "昊", second: "苍", meaning: "昊指广大，苍指苍穹，取名寓意胸怀宽广、志向远大", source: "独特少见" },
            { first: "璟", second: "玥", meaning: "璟指美玉，玥指美玉，取名寓意珍贵独特、光彩照人", source: "独特少见" },
            { first: "珩", second: "瑜", meaning: "珩指美玉，瑜指美玉，取名寓意品质高洁、珍贵稀有", source: "独特少见" },
            { first: "煜", second: "祺", meaning: "煜指照耀，祺指吉祥，取名寓意前途光明、吉祥如意", source: "独特少见" },
            { first: "骁", second: "骏", meaning: "骁指勇猛，骏指骏马，取名寓意勇猛无畏、才华出众", source: "独特少见" }
        ]
    },
    female: {
        traditional: [
            { first: "婷", second: "婷", meaning: "婷指美好、优雅，婷婷指亭亭玉立，取名寓意亭亭玉立、优雅大方", source: "传统经典" },
            { first: "雅", second: "静", meaning: "雅指高雅，静指安静，取名寓意举止文雅、安静淡雅", source: "传统经典" },
            { first: "梦", second: "洁", meaning: "梦指梦想，洁指洁净，取名寓意心怀梦想、品质高洁", source: "传统经典" },
            { first: "欣", second: "怡", meaning: "欣指喜悦，怡指愉快，取名寓意心情愉悦、性格开朗", source: "传统经典" },
            { first: "佳", second: "琪", meaning: "佳指美好，琪指美玉，取名寓意美好如玉、品质高洁", source: "传统经典" },
            { first: "雨", second: "婷", meaning: "雨指雨水，婷指美好，取名寓意温润如玉、亭亭玉立", source: "传统经典" },
            { first: "美", second: "琳", meaning: "美指美丽，琳指美玉，取名寓意美丽如玉、品质高洁", source: "传统经典" },
            { first: "思", second: "颖", meaning: "思指思考，颖指聪明，取名寓意聪明伶俐、思维敏捷", source: "传统经典" },
            { first: "雅", second: "芳", meaning: "雅指高雅，芳指芬芳，取名寓意举止文雅、芬芳怡人", source: "传统经典" },
            { first: "雨", second: "欣", meaning: "雨指雨水，欣指喜悦，取名寓意温润如玉、心情愉悦", source: "传统经典" }
        ],
        modern: [
            { first: "梦", second: "瑶", meaning: "梦指梦想，瑶指美玉，取名寓意心怀梦想、美好如玉", source: "现代时尚" },
            { first: "欣", second: "悦", meaning: "欣指喜悦，悦指愉悦，取名寓意心情愉悦、性格开朗", source: "现代时尚" },
            { first: "雨", second: "晴", meaning: "雨指雨水，晴指晴朗，取名寓意雨过天晴、阳光明媚", source: "现代时尚" },
            { first: "思", second: "雨", meaning: "思指思考，雨指雨水，取名寓意思维敏捷、温润如玉", source: "现代时尚" },
            { first: "佳", second: "怡", meaning: "佳指美好，怡指愉快，取名寓意美好愉悦、性格温和", source: "现代时尚" },
            { first: "雪", second: "怡", meaning: "雪指雪花，怡指愉快，取名寓意纯洁无瑕、心情愉悦", source: "现代时尚" },
            { first: "梓", second: "萱", meaning: "梓指梓树，萱指萱草，取名寓意茁壮成长、忘忧草", source: "现代时尚" },
            { first: "雅", second: "妍", meaning: "雅指高雅，妍指美丽，取名寓意举止文雅、容貌美丽", source: "现代时尚" },
            { first: "雨", second: "彤", meaning: "雨指雨水，彤指红色，取名寓意温润如玉、热情活泼", source: "现代时尚" },
            { first: "思", second: "彤", meaning: "思指思考，彤指红色，取名寓意思维敏捷、热情活泼", source: "现代时尚" }
        ],
        literary: [
            { first: "诗", second: "雨", meaning: "诗指诗歌，雨指雨水，取名寓意才华横溢、温润如玉", source: "文艺诗意" },
            { first: "雨", second: "霜", meaning: "雨指雨水，霜指霜雪，取名寓意温润如玉、品格高洁", source: "文艺诗意" },
            { first: "梦", second: "竹", meaning: "梦指梦想，竹指竹子，取名寓意心怀梦想、虚心有节", source: "文艺诗意" },
            { first: "诗", second: "画", meaning: "诗指诗歌，画指绘画，取名寓意才华横溢、艺术才华", source: "文艺诗意" },
            { first: "雨", second: "荷", meaning: "雨指雨水，荷指荷花，取名寓意温润如玉、出淤泥而不染", source: "文艺诗意" },
            { first: "梦", second: "兰", meaning: "梦指梦想，兰指兰花，取名寓意心怀梦想、高雅脱俗", source: "文艺诗意" },
            { first: "诗", second: "蕊", meaning: "诗指诗歌，蕊指花蕊，取名寓意才华横溢、美好纯洁", source: "文艺诗意" },
            { first: "雨", second: "柳", meaning: "雨指雨水，柳指柳树，取名寓意温润如玉、柔美多姿", source: "文艺诗意" },
            { first: "梦", second: "菊", meaning: "梦指梦想，菊指菊花，取名寓意心怀梦想、坚贞不渝", source: "文艺诗意" },
            { first: "诗", second: "梅", meaning: "诗指诗歌，梅指梅花，取名寓意才华横溢、坚强不屈", source: "文艺诗意" }
        ],
        unique: [
            { first: "瑜", second: "璇", meaning: "瑜指美玉，璇指美玉，取名寓意品德高尚、珍贵美好", source: "独特少见" },
            { first: "珺", second: "瑶", meaning: "珺指美玉，瑶指美玉，取名寓意品质高洁、珍贵稀有", source: "独特少见" },
            { first: "熹", second: "微", meaning: "熹指光明，微指微小，取名寓意光明美好、温婉可人", source: "独特少见" },
            { first: "颜", second: "悦", meaning: "颜指容颜，悦指愉悦，取名寓意容貌美丽、心情愉悦", source: "独特少见" },
            { first: "玥", second: "婷", meaning: "玥指美玉，婷指美好，取名寓意珍贵独特、亭亭玉立", source: "独特少见" },
            { first: "瑾", second: "萱", meaning: "瑾指美玉，萱指萱草，取名寓意品质高洁、忘忧草", source: "独特少见" },
            { first: "璇", second: "玥", meaning: "璇指美玉，玥指美玉，取名寓意珍贵美好、光彩照人", source: "独特少见" },
            { first: "珺", second: "琪", meaning: "珺指美玉，琪指美玉，取名寓意品质高洁、珍贵稀有", source: "独特少见" },
            { first: "菲", second: "蕊", meaning: "菲指香气，蕊指花蕊，取名寓意芬芳馥郁、美好纯洁", source: "独特少见" },
            { first: "熹", second: "颜", meaning: "熹指光明，颜指容颜，取名寓意光明美好、容貌美丽", source: "独特少见" }
        ]
    }
};