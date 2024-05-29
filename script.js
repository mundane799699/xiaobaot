// 当文档内容加载完成时执行
document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      columnid: "shengcaiyoushu",
      image_url:
        "https://static.xiaobot.net/paper/2022-11-22/11873/cd3e807a29b791027131bd0ed1783bce.png",
      num: { 读者: 27944, 内容: 71 },
      title: "生财有术项目精选",
      owner: "@亦仁",
      description:
        "66个赚到钱的人，分享他们已经跑通的项目。【重要】添加服务官鱼丸微信(yuwan831)，领取配套的10张项目步骤拆解图；<br><br> 【阅读建议】先看拆解图，定位自己擅长的领域，便于找到更适合自己的项目。<br><br> 更多权益和规则，请看置顶帖。",
      type: "搞钱、热门",
    },
    {
      columnid: "mediabuy",
      image_url:
        "https://static.xiaobot.net/paper/2024-04-28/115347/6ba0b154f27e595bb25b89d6a101a43e.png",
      num: { 读者: 12976, 内容: 64 },
      title: "AI海外赚钱",
      owner: "@静水流深（惰惰）",
      description:
        "静水流深，国外赚美元的奠基人，上个世纪就开始出海赚美元，雷军的师弟，如今投入AI领域，帮助大家利用AI技术，个体出海赚美元。<br><br>1，原价9999元，现在限时只需要10元终身买断。<br><br>2，纯新手从零开始，任何基础可以学会利用AI赚美元。<br><br>3，做到你看任何一篇文章即可回本，长期持续更新到至少过百篇，超值。<br><br>4，订阅加微信：4005508 领取跨境出海相关秘籍资料包，提供微信群终身陪伴成长。<br><br>5，每增加一百人涨价10元，抓紧订阅。<br><br>郑重承诺，如果订阅此专栏觉得不值，提交相关证据，我们审核通过后，任何时候享受全额退款。",
      type: "搞钱、热门、AI、出海",
    },
    {
      columnid: "ziyouzhiye",
      image_url:
        "https://static.xiaobot.net/paper/2024-02-25/16551/a9164530d620ff76b80be5ab871d74cc.png",
      num: { 读者: 8352, 内容: 166 },
      title: "自由职业0-100w指南大全",
      owner: "@赵立心",
      description:
        "作者赵立心：前大厂产品经理，裸辞自由职业2年。辞职半年打平原收入，毕业4年实现月入六位数。擅长帮助职场人实现职场转型、IP打造，完成自由职业起步0-100w。<br><br>小册共10个专栏：自由职业基本问题、商业模式篇、辞职转型篇、心力篇、定位及常见方式篇、流量自媒体篇、产品篇、转化篇、时间管理篇、常见问答。<br><br>原价2000元，现价14元买断，每千人涨价。买完看置顶帖，进专属知识星球，分享自由职业0-100w日常。<br><br>加微信「aijun20230504」，领自由职业资料一份。",
      type: "搞钱、IP、热门",
    },
    {
      columnid: "pmdogs",
      image_url:
        "https://static.xiaobot.net/paper/2022-10-28/8632/2cc29b335bcde737bfa5271aa9a789a9.jpeg",
      num: { 读者: 6927, 内容: 60 },
      title: "纯银的 60 篇产品分析 · 第二季",
      owner: "@纯银",
      description:
        "系列总销量超过 10000 份，《纯银的 60 篇产品分析 · 第七季》 5 月底打折促销。<br><br>🎉 正价 99 元，促销 68 元<br><br>🎉 打折至 5 月 31 日截止<br><br>🎉 赠送 99 元的第六季<br><br>第七季已更新 35 篇，以 99 元正价销售了上百份。更新中途打折 10 天，之后恢复正价。<br><br>接下来两个月完成全部 60 篇更新，七月完结。<br><br>有些重磅内容，比如酝酿了一年多的 《低增长时代的产品经营逻辑》，是我对三年半顾问所见所闻的总结，打算放在第七季的后半部分更新。<br><br>作为十七年的产品经理，这个专栏代表了我对产品与互联网行业的见解。大道相通，无论我们是不是同一赛道或职业，未尝不能触类旁通。<br><br>知识有价，认知无价。认知的启发与迭代是金钱买不到的东西。<br><br>促销期间购买第七季的朋友，可以用 0.99 元的低价，购买正价 99 元的第六季，赠品价格甚至高于正品价格。<br><br>相当于 68.99 元 120 篇「收费版」专业产品分析。<br><br>0.99 元购买第六季的赠品优惠券，在第七季专栏置顶。购买第七季后可见。",
      type: "互联网",
    },
    {
      columnid: "pmdogs3",
      image_url:
        "https://static.xiaobot.net/paper/2022-10-28/8632/3dfbb194bfe1571ca2cf2ac41e2940b9.jpeg",
      num: { 读者: 6780, 内容: 60 },
      title: "纯银的 60 篇产品分析 · 第三季",
      owner: "@纯银",
      description:
        "系列总销量超过 10000 份，《纯银的 60 篇产品分析 · 第七季》 5 月底打折促销。<br><br>🎉 正价 99 元，促销 68 元<br><br>🎉 打折至 5 月 31 日截止<br><br>🎉 赠送 99 元的第六季<br><br>第七季已更新 35 篇，以 99 元正价销售了上百份。更新中途打折 10 天，之后恢复正价。<br><br>接下来两个月完成全部 60 篇更新，七月完结。<br><br>有些重磅内容，比如酝酿了一年多的 《低增长时代的产品经营逻辑》，是我对三年半顾问所见所闻的总结，打算放在第七季的后半部分更新。<br><br>作为十七年的产品经理，这个专栏代表了我对产品与互联网行业的见解。大道相通，无论我们是不是同一赛道或职业，未尝不能触类旁通。<br><br>知识有价，认知无价。认知的启发与迭代是金钱买不到的东西。<br><br>促销期间购买第七季的朋友，可以用 0.99 元的低价，购买正价 99 元的第六季，赠品价格甚至高于正品价格。<br><br>相当于 68.99 元 120 篇「收费版」专业产品分析。<br><br>0.99 元购买第六季的赠品优惠券，在第七季专栏置顶。购买第七季后可见。",
      type: "互联网",
    },
    {
      columnid: "pmthinking2023",
      image_url:
        "https://static.xiaobot.net/paper/2022-12-31/5/82c8c49f1004d4c44fd6e1edc62a707a.png",
      num: { 读者: 5711, 内容: 50 },
      title: "产品沉思录 | 第七季",
      owner: "@少楠×fonter",
      description:
        "产品沉思录™ 是一个关于产品的知识库，也是一个 Newsletter （邮件组），始于 2017 年，累计发布近 200+ 期，涵盖几十个人物/产品/公司专题研究，累计近百万字内容。<br><br>本年度内容正在连载中……",
      type: "互联网、热门",
    },
    {
      columnid: "fly100",
      image_url:
        "https://static.xiaobot.net/paper/2023-11-02/77736/7ca4b1a9173aa4e2dc2c38a1773c2f2f.jpeg",
      num: { 读者: 5330, 内容: 31 },
      title: "100种互联网热门赚钱方法",
      owner: "@纯洁的微笑",
      description:
        "1、赚钱没有什么特殊的，你了解的足够多、理解的足够多、实践的足够多，你就会掌握这门技能。<br><br>2、我和就聊挣钱圈友，6年深耕互联网众多热门项目，有一些目前仍然还在实操赚钱，首次分享到此专栏。<br><br>3、内含公众号赚钱、AI爆文写作、咸鱼无货源、知乎引流、小红书无货源电商、小说推文项目等等。<br><br>4、持续更新，每周一篇，直到100篇，",
      type: "搞钱、热门、公众号",
    },
    {
      columnid: "pmdogs1",
      image_url:
        "https://static.xiaobot.net/paper/2022-10-27/8632/f062ec49d788c9429bfd5c76271eebb4.jpeg",
      num: { 读者: 5322, 内容: 60 },
      title: "纯银的 60 篇产品分析 · 第一季",
      owner: "@纯银",
      description:
        "系列总销量超过 10000 份，《纯银的 60 篇产品分析 · 第七季》 5 月底打折促销。<br><br>🎉 正价 99 元，促销 68 元<br><br>🎉 打折至 5 月 31 日截止<br><br>🎉 赠送 99 元的第六季<br><br>第七季已更新 35 篇，以 99 元正价销售了上百份。更新中途打折 10 天，之后恢复正价。<br><br>接下来两个月完成全部 60 篇更新，七月完结。<br><br>有些重磅内容，比如酝酿了一年多的 《低增长时代的产品经营逻辑》，是我对三年半顾问所见所闻的总结，打算放在第七季的后半部分更新。<br><br>作为十七年的产品经理，这个专栏代表了我对产品与互联网行业的见解。大道相通，无论我们是不是同一赛道或职业，未尝不能触类旁通。<br><br>知识有价，认知无价。认知的启发与迭代是金钱买不到的东西。<br><br>促销期间购买第七季的朋友，可以用 0.99 元的低价，购买正价 99 元的第六季，赠品价格甚至高于正品价格。<br><br>相当于 68.99 元 120 篇「收费版」专业产品分析。<br><br>0.99 元购买第六季的赠品优惠券，在第七季专栏置顶。购买第七季后可见。",
      type: "互联网",
    },
    {
      columnid: "pmthinking2022",
      image_url:
        "https://static.xiaobot.net/paper/2022-12-31/5/76e64a7a4daa5b97e5643aef08e7e35f.jpeg",
      num: { 读者: 4738, 内容: 52 },
      title: "产品沉思录 | 第六季",
      owner: "@少楠×fonter",
      description:
        "产品沉思录™ 是一个关于产品的知识库，也是一个 Newsletter （邮件组），始于 2017 年，累计发布近 200+ 期，涵盖几十个人物/产品/公司专题研究，累计近百万字内容。<br><br>本年度内容已经连载完毕",
      type: "互联网",
    },
    {
      columnid: "juexing01",
      image_url:
        "https://static.xiaobot.net/paper/2023-10-13/364979/664fcd61fdf26db588de9dc3f3e31969.jpeg",
      num: { 读者: 4724, 内容: 65 },
      title: "自媒体百万粉丝指南",
      owner: "@阿猫",
      description:
        "7年觉醒合伙人共创产品。<br><br>阿猫全平台粉丝有100万，主营公众号。<br><br>觉醒合伙人领域有头条、小红书、知乎等领域。<br><br>分享我们的自媒体底层心法，帮你少走3年弯路。<br><br>每周更新最少2篇，一共更新100篇。<br><br>原价199元，早鸟价只要69 元，一顿饭钱。<br><br>购买后看置顶帖加醒醒好友<br><br>送阿猫直播课《0基础做公众号》《如何做个人IP》和小报童交流群（限量赠送）。",
      type: "搞钱、自媒体、公众号、热门",
    },
    {
      columnid: "xb499299",
      image_url:
        "https://static.xiaobot.net/paper/2024-03-06/119920/b3c64adfceb0443c87af6ded8e6d82ab.jpeg",
      num: { 读者: 4611, 内容: 32 },
      title: "AI代写",
      owner: "@饭饭",
      description:
        "作者饭饭：国内最大的AI社群—AI破局初创合伙人，AI破局俱乐部航海教练。担任过生财、淘金等社群实战嘉宾，通过AI代写变现百万。<br><br>订阅添加微信：F49091，进专栏交流群,解锁【定向朋友圈】<br><br>小册注重方法论，包括了AI代写变现方法与AI代写各类文稿。探索无止境，在未来会持续更新。<br><br>价值699，特惠10元，即将涨价，拍过后【置顶帖】即可领取【AI代写实操手册】并且进入【饭友专属陪伴星球】",
      type: "搞钱、AI、热门",
    },
    {
      columnid: "aiyanjiu",
      image_url:
        "https://static.xiaobot.net/paper/2023-02-02/910/22380333939d26c59874ac499b90e119.jpeg",
      num: { 读者: 4573, 内容: 89 },
      title: "AI项目商业解析",
      owner: "@王凯",
      description:
        "1、AI改变世界，让我们一起入场AI<br><br>国外的AI应用层项目已经看到近千款，有文本（辅助写作、营销文案、品牌介绍文案）、图片（头像、商务图像、人像精修）、音频（催眠类的、播客）、视频（AI视频）等等。<br><br>国内AI应用层项目很少，所以我会挑出来体验过的AI商业项目写总结、分析到本专栏。<br><br>如果你对AI商业变现项目感兴趣，需要持续有案例、思路启发可以订阅；<br><br>2、另外我会以周纬度总结国内利用AI赚钱的水下生意，比如微信内的ChatGPT、Y色、付费培训等一些列的水下案例；",
      type: "搞钱、AI、热门",
    },
    {
      columnid: "pmthinking2020",
      image_url:
        "https://static.xiaobot.net/paper/2022-12-31/5/90088875701113485473f525dbe0d1d2.jpeg",
      num: { 读者: 4176, 内容: 42 },
      title: "产品沉思录 | 第四季",
      owner: "@少楠×fonter",
      description:
        "产品沉思录™ 是一个关于产品的知识库，也是一个 Newsletter （邮件组），始于 2017 年，累计发布近 200+ 期，涵盖几十个人物/产品/公司专题研究，累计近百万字内容。<br><br>本年度内容已经连载完毕",
      type: "互联网",
    },
    {
      columnid: "77prompt",
      image_url:
        "https://static.xiaobot.net/paper/2023-09-24/273931/726c9f5632bb21bfe48953ef24edfe55.png",
      num: { 读者: 4162, 内容: 41 },
      title: "小七姐的 AI 提示词",
      owner: "@小七姐",
      description:
        "专栏作者：小七姐， 13 年产品经理，微软 / ZelinAI 企业服务合作提示词工程师，AI 开源社区《 通往AGI之路 》共创作者。<br><br>小册共分四小专栏：提示词学习地图、提示词编写误区、ChatGPT 最佳实践、国产大模型提示词。<br><br>限时 39 元买断制，满 5000 订阅涨为 49 元。<br><br>订阅后查看置顶文章知识星球（免费社群，可一对一向我提问）",
      type: "AI、热门",
    },
    {
      columnid: "pmthinking2021",
      image_url:
        "https://static.xiaobot.net/paper/2022-12-31/5/670b34eecd655e441f7e583aede63198.jpeg",
      num: { 读者: 4161, 内容: 51 },
      title: "产品沉思录 | 第五季",
      owner: "@少楠×fonter",
      description:
        "产品沉思录™ 是一个关于产品的知识库，也是一个 Newsletter （邮件组），始于 2017 年，累计发布近 200+ 期，涵盖几十个人物/产品/公司专题研究，累计近百万字内容。<br><br>本年度内容已经连载完毕",
      type: "互联网",
    },
    {
      columnid: "pmdogs4",
      image_url:
        "https://static.xiaobot.net/paper/2023-02-27/8632/2f43fa26ee2a0af0b282761724d58cb7.jpeg",
      num: { 读者: 4002, 内容: 60 },
      title: "纯银的 60 篇产品分析 · 第四季",
      owner: "@纯银",
      description:
        "系列总销量超过 10000 份，《纯银的 60 篇产品分析 · 第七季》 5 月底打折促销。<br><br>🎉 正价 99 元，促销 68 元<br><br>🎉 打折至 5 月 31 日截止<br><br>🎉 赠送 99 元的第六季<br><br>第七季已更新 35 篇，以 99 元正价销售了上百份。更新中途打折 10 天，之后恢复正价。<br><br>接下来两个月完成全部 60 篇更新，七月完结。<br><br>有些重磅内容，比如酝酿了一年多的 《低增长时代的产品经营逻辑》，是我对三年半顾问所见所闻的总结，打算放在第七季的后半部分更新。<br><br>作为十七年的产品经理，这个专栏代表了我对产品与互联网行业的见解。大道相通，无论我们是不是同一赛道或职业，未尝不能触类旁通。<br><br>知识有价，认知无价。认知的启发与迭代是金钱买不到的东西。<br><br>促销期间购买第七季的朋友，可以用 0.99 元的低价，购买正价 99 元的第六季，赠品价格甚至高于正品价格。<br><br>相当于 68.99 元 120 篇「收费版」专业产品分析。<br><br>0.99 元购买第六季的赠品优惠券，在第七季专栏置顶。购买第七季后可见。",
      type: "互联网",
    },
    {
      columnid: "1234569",
      image_url:
        "https://static.xiaobot.net/paper/2024-01-17/284144/1e66a7386ab79e8ae322b38d2ef1c4c4.png",
      num: { 读者: 3924, 内容: 31 },
      title: "AI数字人从制作到变现",
      owner: "@findyi",
      description:
        "作者 findyi，江湖人称洋哥，全国最大的 AI 付费星球--AI 破局俱乐部主理人，已经汇集了超过 2.9万+ 名 AI 极客，共同致力于探索和推动人工智能技术的前沿。<br><br>本手册会全面介绍 AI 数字人的基础、技术原理、实操案例、应用场景、变现方法，帮助读者了解和掌握数字人技术的核心内容和实际应用。共计四大专栏。<br><br>购买后加微信:poju2323 ，添加后备注【数字人】，我会送你一份全网副业操盘SOP，包含抖音、知乎、小红书各个平台。<br><br>原价599，现价 10 元永久买断。",
      type: "搞钱、AI、热门",
    },
    {
      columnid: "finfyi321",
      image_url:
        "https://static.xiaobot.net/paper/2023-11-01/284144/b3905d4473492c45f4d2c7ed3849ac72.jpeg",
      num: { 读者: 3913, 内容: 200 },
      title: "编程与 AI 编程",
      owner: "@findyi",
      description:
        "2.8 万付费社群 AI 破局俱乐部共创小册：作者有架构师、技术负责人、大厂程序员等，旨在帮助程序员快速掌握编程。<br><br>共 15 个小专栏：AI 辅助编程高质量科普、C/C++、Java、Python、Go、Rust、k8s、前端、数据库、操作系统、网络安全、机器学习、运维、测试。<br><br>原价 365 元，特惠 18.8 元，订阅后置顶帖进专属【编程】星球。<br><br>加微信：poju2323，送你一份编程学习资料",
      type: "编程、热门",
    },
    {
      columnid: "yang",
      image_url:
        "https://static.xiaobot.net/paper/2023-07-11/61324/996487c8eaeebfca71b89d7836e9c5cc.jpeg",
      num: { 读者: 3846, 内容: 190 },
      title: "写作与 AI 写作变现",
      owner: "@闫小林",
      description:
        "作者闫小林： 双非医学院毕业，大二边自学编程边写作，毕业后进入某上市公司做了两年开发，写过上千篇原创，靠写作变现百万，有 40 万读者。<br><br>专栏共 11 个模块：必看内容、AI 写作、记叙文、议论文、说明文、应用文、公众号写作变现、问一问写作变现、知乎写作变现、小红书笔记写作、常见写作答疑。<br><br>限时一折 18.8 元，即将涨价至 188 元，拍过后置顶帖进专属写作知识星球。",
      type: "AI、写作、搞钱、公众号",
    },
    {
      columnid: "yibentong",
      image_url:
        "https://static.xiaobot.net/paper/2023-08-31/23049/18e55aabdb07f7d7b4b9bf9960536327.jpeg",
      num: { 读者: 3811, 内容: 219 },
      title: "AI 绘画一本通（365个AI绘画案例）",
      owner: "@Sky",
      description:
        "AI 绘画师日记（365个案例精选）由100多位创作者花费100多天时间共创而来。而这些创作者都是来自20000人星球「AI绘画师日记」的AI绘画师。在这个专栏里面包含365个落地案例，涉及变现案例、周边定制、海报设计、logo设计等13个栏目，加入AI绘画一本通，获得海量设计案例。365个案例首批公开100个案例，剩下的逐步更新，敬请期待。",
      type: "搞钱、AI",
    },
    {
      columnid: "XF888",
      image_url:
        "https://static.xiaobot.net/paper/2024-02-02/119929/06ced6ef2f6b51c20ce9b82d3a196464.png",
      num: { 读者: 3811, 内容: 43 },
      title: "水龙手把手带你做自媒体",
      owner: "@水龙",
      description:
        "我是水龙，一个热爱创业，热爱写作的96后。<br><br>开始做自媒体，4个月稳定月赚10万，这份自媒体干货指南，我至少更新100篇，希望能真正帮助到每个想做好自媒体的小伙伴。<br><br>主要内容如下：<br><br>1、引流技巧：人人都可以复制去的一些自媒体引流方法<br><br>2、运营干货：私域、小红书，公众号等平台<br><br>3、成长笔记：我做自媒体不同阶段的一些赚钱感悟和人生感悟。<br><br>4、案例拆解：对一些自媒体赚钱案例的拆解。<br><br>价格：目前定价19.9元，满 5000 人涨价至 29.9元。",
      type: "自媒体、搞钱、公众号",
    },
    {
      columnid: "xhs",
      image_url:
        "https://static.xiaobot.net/paper/2022-06-24/7466/c9e301d3dfd32a076c06f9c517a59e2b.png",
      num: { 读者: 3688, 内容: 244 },
      title: "小红书可复制案例库",
      owner: "@IDO老徐",
      description:
        "别人笔记几千几万赞，商业化收入不断，你的笔记没人看<br><br>我是IDO老徐，帮你手工精选了 220 个小红书可复制案例（全网独一份）<br><br>原价 199， 限时 99.88 元买断（一次订阅，永久查阅）<br><br>快速刷一遍 220 个案例，找到你能模仿的，对标、死磕执行、快速出结果。玩流量，玩 IP，首选小红书。低门槛，低成本，反馈快。<br><br>订阅后，截图支付记录，加微信 957863300 有专属惊喜",
      type: "搞钱、小红书、自媒体、IP",
    },
    {
      columnid: "xbt",
      image_url:
        "https://static.xiaobot.net/paper/2023-06-11/7466/dbfbda247a7ccf7c32f3a6914b6946c4.jpeg",
      num: { 读者: 3669, 内容: 105 },
      title: "小报童商业化·赚钱案例库",
      owner: "@IDO老徐",
      description:
        "玩 个人IP，副业，自媒体，内容付费，轻创业，私域 等。所有想玩「付费专栏/社群」的玩家，绕不开这个专栏。没订阅的，大概率会走很多我们趟过的弯路 。<br><br>1、由 IDO老徐 手工精选 108 个「付费专栏赚钱案例库」，总结亮点和问题，快速学习 or 精准模仿<br><br>2、如何做好小报童付费专栏？写了 14 个维度的问题诊断。搞定 14 条，你的付费专栏大概率可成<br><br>3、为了有对比，写了十几个反面案例。专栏付费人太少，不满意？也许就是这些方面案例之一<br><br>原价 168 ，限时最低价 19.99（一次订阅，永久可查阅）；** 满 5000 人订阅，涨价至 29.99<br><br>订阅后微信 957863300 找我，截图支付记录，领取「资料包+定向朋友圈」（专栏没有微信群）",
      type: "搞钱、IP",
    },
    {
      columnid: "321456",
      image_url:
        "https://static.xiaobot.net/paper/2023-11-08/284144/cb552823acbd64c1cc5fb6d503ce4ae6.jpeg",
      num: { 读者: 3614, 内容: 68 },
      title: "AI赚钱的100种思路（含指令）",
      owner: "@findyi",
      description:
        "3.9 万付费社群 AI 破局俱乐部精选 100 种 AI 赚钱方法。<br><br>小册包含 AI 绘画赚钱方法，AI 写作赚钱方法，AI 数字人赚钱方法，AI 工具赚钱方法，共计四大专栏。<br><br>购买后加微信 poju2324 ，添加后备注【副业】，我会送你一份全网副业操盘SOP，包含抖音、知乎、小红书各个平台。<br><br>原价 799，现价 29.9 元永久买断，每涨500人，涨价10元。承诺更新 100 篇！",
      type: "AI、搞钱",
    },
    {
      columnid: "chatai666",
      image_url:
        "https://static.xiaobot.net/paper/2023-06-28/271179/d932b3bac5895487347ef7a81afdfc9c.png",
      num: { 读者: 3601, 内容: 35 },
      title: "小白的AI编程提效课",
      owner: "@峰兄",
      description:
        "本专栏由小米、百度、阿里等互联网大厂的AI业务相关高管共创，专注于普通人的AI提效，提高程序员群体的开发效率。<br><br>v：hehan2048<br><br>小册包括六个专栏：AI编程实战、AI编程工具、AI高效办公、AI副业赚钱、AI提示词工程、AI私人助手<br><br>小册是永久买断制，原价 199 元，限时特惠 16.6 元买断制，满 3500 订阅涨为 28.8 元<br><br>承诺一年内更新50篇以上，一周至更新一篇内容。<br><br>买过后，从置顶帖【必看合集】，加入 AI 陪伴社群，限时领取超值福利。",
      type: "AI、编程、搞钱",
    },
    {
      columnid: "chat",
      image_url:
        "https://static.xiaobot.net/paper/2023-06-14/7466/ac0b6f30cf9a044f0bc804013ba58fc5.jpeg",
      num: { 读者: 3537, 内容: 160 },
      title: "AIGC大模型零成本赚钱",
      owner: "@IDO老徐",
      description:
        "1. 独家更新 200 篇思考，带着你从 0 到 1 玩赚 AI 及「国内AI模型」，并零成本赚点小钱（信息差 + 时间差）<br><br>2. 内容板块：AI 基础普及，动态，案例，风险，应用，AI 赚小钱<br><br>3. 原价 199 元，限时最低价 66.66（专栏一次订阅，永久有效。如不满意 24 小时内可退款）<br><br>4. 订阅福利：文档 + 资料包 。订阅后，加微信 957863300 发支付截图，领「资料包」",
      type: "搞钱、AI",
    },
    {
      columnid: "pmdogs5",
      image_url:
        "https://static.xiaobot.net/paper/2023-06-24/8632/e25ffeae0bb4fa81f7679d829088d453.jpeg",
      num: { 读者: 3364, 内容: 59 },
      title: "纯银的 60 篇产品分析 · 第五季",
      owner: "@纯银",
      description:
        "系列总销量超过 10000 份，《纯银的 60 篇产品分析 · 第七季》 5 月底打折促销。<br><br>🎉 正价 99 元，促销 68 元<br><br>🎉 打折至 5 月 31 日截止<br><br>🎉 赠送 99 元的第六季<br><br>第七季已更新 35 篇，以 99 元正价销售了上百份。更新中途打折 10 天，之后恢复正价。<br><br>接下来两个月完成全部 60 篇更新，七月完结。<br><br>有些重磅内容，比如酝酿了一年多的 《低增长时代的产品经营逻辑》，是我对三年半顾问所见所闻的总结，打算放在第七季的后半部分更新。<br><br>作为十七年的产品经理，这个专栏代表了我对产品与互联网行业的见解。大道相通，无论我们是不是同一赛道或职业，未尝不能触类旁通。<br><br>知识有价，认知无价。认知的启发与迭代是金钱买不到的东西。<br><br>促销期间购买第七季的朋友，可以用 0.99 元的低价，购买正价 99 元的第六季，赠品价格甚至高于正品价格。<br><br>相当于 68.99 元 120 篇「收费版」专业产品分析。<br><br>0.99 元购买第六季的赠品优惠券，在第七季专栏置顶。购买第七季后可见。",
      type: "互联网",
    },
    {
      columnid: "paoye365",
      image_url:
        "https://static.xiaobot.net/paper/2023-12-25/61382/5199feea075aed7c1a8e00bebe3ee4a5.jpeg",
      num: { 读者: 3318, 内容: 24 },
      title: "百万千万级项目操盘指南",
      owner: "@炮爷&傅超人",
      description:
        "本专栏作者为「创富合伙人」和「海外高端旅游实战营」两位主理人炮爷和傅超人。<br><br>旨在帮助你快速从0到1，并根据0到1的实操经验，优化到10。同时会把一个百万千万级项目的底层逻辑给大家说透，帮助你更好地去操盘一个年入百万千万级的项目。<br><br>专栏价值999元，现为内测，限时特惠19.9元买断。计划内测满3000人，涨价至199元。<br><br>另，本专栏配套了一年的「专属搞钱陪伴群」和一份「万字搞钱SOP大礼包」，订阅后，请看【置顶帖】联系炮爷和傅超人。",
      type: "搞钱",
    },
    {
      columnid: "rpa2024",
      image_url:
        "https://static.xiaobot.net/paper/2024-01-15/244788/804b2ef7cdf284bfa88132c281f19df1.jpeg",
      num: { 读者: 3150, 内容: 38 },
      title: "自媒体自动化提效RPA实战指南",
      owner: "@伟豪",
      description:
        "本小册为伟豪、明鉴、福哥共创，AI破局初创合伙人，AI破局俱乐部RPA教练，服务2000+学员，帮助RPA新手快速入门。擅长自动化技术与矩阵运营，带领了100+人做副业矩阵。<br><br>小册定位：自媒体自动化提效RPA实战指南，通过演练实用案例的方式帮助自媒体新人快速入门影刀RPA，实现自媒体提效，为超级个体赋能。<br><br>原价199，现价12.9元永久买断，满3000人，涨价。承诺持续更新每一个平台的使用案例。<br><br>购买后加微信：dreaming311，发支付截图，拉你进群，进群送RPA入门指南与实战演练，不定时直播分享。",
      type: "RPA、AI、搞钱",
    },
    {
      columnid: "juexingguihua",
      image_url:
        "https://static.xiaobot.net/paper/2024-02-06/67777/ac9cef6369fbbfb5ba632998943e7f71.jpeg",
      num: { 读者: 3090, 内容: 50 },
      title: "100本百万财富书单",
      owner: "@鱼堂主",
      description:
        "觉醒合伙人共创专栏，每人推荐3本最“赚钱”的书籍，2024年推荐100本，读完少走3年弯路。<br><br>包括纳瓦尔宝典、影响力、反脆弱等新个体必读书。<br><br>每周更新最少3篇，一共更新100篇。<br><br>原价199元，早鸟价只要39元，1本书不到4毛钱。<br><br>购买后看置顶帖，加入交流群领取：<br><br>《职场裸辞创业，多赚30倍心法》<br><br>《影响我一生的五大原则》<br><br>作者：阿猫、鱼堂主、觉醒合伙人：老马、婷子、蓝蓝、勋妈、小米、桃子、小她、钰儿、大东等",
      type: "搞钱、读书",
    },
    {
      columnid: "podcast001",
      image_url:
        "https://static.xiaobot.net/paper/2022-12-17/30378/1c15182b170783938b3cc1706f6ec135.png",
      num: { 读者: 3013, 内容: 23 },
      title: "你的第一本播客制作指南",
      owner: "@旺仔珂珂糖",
      description:
        "hi，我是《末日狂花》、《消费圈内人》和前《温柔一刀》的制作人旺仔珂珂糖。<br><br>我对本册子的定位是：最简单、最容易上手、不讲大道理，看完就能自己上手做的播客制作手册。<br><br>- 限时258元（永久买断）<br><br>- 满 3000 人涨价至 299 元<br><br>付费之后，你将获得：<br><br>- 20 篇播客制作步骤的详细拆解+播客创作者社群精华系列+主播锦囊系列，保姆级教程帮助你上手播客制作，少走弯路；<br><br>- 独家播客创作者社群，可在群内认识其他的播客创作者伙伴；<br><br>- 永久买断制，可以随时观看已发布的内容。",
      type: "自媒体",
    },
    {
      columnid: "ying520323",
      image_url:
        "https://static.xiaobot.net/paper/2024-01-01/178383/df51bb7bf159866660a1aa77501eed71.jpeg",
      num: { 读者: 2891, 内容: 40 },
      title: "朋友圈与 AI 朋友圈变现",
      owner: "@坏脾气小可爱",
      description:
        "作者：坏脾气的小可爱，2022 年入不到 10 万，2023 通过朋友圈年入 50 万，极其擅长私域运营。<br><br>专栏分为：朋友圈变现、发圈时间、朋友圈设置、朋友圈构成、朋友圈类型、AI 朋友圈提效。<br><br>原价 2000 元，限时 10 元，每三千人涨价 10 元，置顶帖进专属陪伴群。",
      type: "AI、自媒体、搞钱、私域、IP",
    },
    {
      columnid: "findyi123",
      image_url:
        "https://static.xiaobot.net/paper/2023-11-03/284144/a5b08da698d6ea05754fbaa6c5ea8024.jpeg",
      num: { 读者: 2850, 内容: 52 },
      title: "个人IP从入门到变现",
      owner: "@findyi",
      description:
        "作者 findyi，江湖人称洋哥，AI破局俱乐部主理人，互联网从业15年。<br><br>公众号、知乎积累读者50万+，职场期间实现副业年收入超200万。<br><br>小册包含商业IP打造，拆解对标账号，平台和展示人设，公域平台玩法四部分，全方位解答做 IP 过程中的各种问题。<br><br>购买后加微信18010062983，添加后，我会送你一份全网副业操盘SOP，近50份，包含抖音、知乎、小红书各个平台。<br><br>原价799，现价39.9元永久买断，每涨500人，涨价10元。",
      type: "搞钱、IP、公众号",
    },
    {
      columnid: "baowen",
      image_url:
        "https://static.xiaobot.net/paper/2023-11-06/225628/68e89d9c0f9604c412515a6ac9982e14.png",
      num: { 读者: 2694, 内容: 38 },
      title: "AI 公众号爆文创作变现(含指令）",
      owner: "@台风-AI魔法师",
      description:
        "公众号推荐流量红利！0粉也有推荐！AI创作爆文只需10分钟，优秀玩家月入1万、甚至年入百万。同步操作头条、百家号，一鱼多吃。<br><br>作者：台风(AI魔法师)，GPT任务指令“BRTR原则”作者。AI破局公众号爆文总教练、生财航海GPT教练。AI公众号矩阵粉丝3万+，AI爆文培训营学员累计近400。<br><br>小册包含爆文项目玩法拆解 、爆文AI创作方法等，内含高价值提示指令Prompt。<br><br>原价299元，限时29.9买断。<br><br>福利：AI爆文读者群，订阅后，加我微信 34662239，发支付截图，拉你进群",
      type: "搞钱、AI、自媒体、公众号",
    },
    {
      columnid: "IPcat",
      image_url:
        "https://static.xiaobot.net/paper/2023-11-22/72922/2fc1c3048bfde675388332e1a447ae54.jpeg",
      num: { 读者: 2542, 内容: 61 },
      title: "阿猫的自媒体底层心法",
      owner: "@阿猫",
      description:
        "专栏包括4大板块：<br><br>1/认知篇：重构认知，精准避坑，少走弯路<br><br>2/内容篇：把握内容关键，扎牢自媒体基础<br><br>3/流量篇：持续获取流量，放大自媒体势能<br><br>4/变现篇：讲明白产品、广告，搞定变现闭环<br><br>首次公开，阿猫从0做到100万粉的底层心法，帮你快速跑通变现闭环，赚到自媒体第一桶金。<br><br>一共更新60篇，4月29日更新完毕。<br><br>原价199元，早鸟价49元，一次订阅，永久有效。<br><br>订阅满2600人，涨价到59元。<br><br>购买后，加置顶帖微信，备注【心法】，送「阿猫精选自媒体书籍」「公众号运营思维导图（详尽版）」",
      type: "搞钱、自媒体",
    },
    {
      columnid: "xuyansuitan",
      image_url:
        "https://static.xiaobot.net/paper/2024-01-20/125742/a68f2e9c962271066487e1874700cf99.jpeg",
      num: { 读者: 2415, 内容: 68 },
      title: "玩赚今日头条",
      owner: "@徐言",
      description:
        "作者徐言随谈: 今日头条微头条专栏销量全平台第一，微头条千万加爆文十几篇，百万加爆文300多篇，带货出单一万单。<br><br>小册包含微头条爆款写作，微头条带货文写作，今日头条引流，爆款素材100天，四大专栏<br><br>原价499，现价10 元永久买断，满3000人，涨价10元。承诺更新 保底40篇!<br><br>购买后到置顶帖加我，发支付截图，拉你进微头条写作交流群",
      type: "搞钱、自媒体、IP",
    },
    {
      columnid: "notworking",
      image_url:
        "https://static.xiaobot.net/paper/2022-12-31/147626/fe4547f617073a94d60490e5af0dfb0f.jpeg",
      num: { 读者: 2409, 内容: 74 },
      title: "不是办法",
      owner: "@中二怪",
      description:
        "微博@中二怪。<br><br>你好呀，如果你也底层乐观，相信虽然也许没有正确答案，但是在某些瞬间，可以非常接近，那我想，也许你会喜欢读我写的东西。<br><br>让我先介绍一下我自己吧：<br><br>2011-2017 在美国读书和工作，本科读新闻和国际政治，毕业做国际新闻记者。<br><br>2017-2022 做脱口秀节目的导演、制片人。《吐槽大会》、《脱口秀大会》各做过两季的导演，后来在新节目做总导演、制片人，顺便做了一个在剧场聊天的播客叫《车间访谈》，也经常用个人身份在朋友的播客里串串台。<br><br>2022 开始做自由人，四处云游，研究灵性，发NFT和买卖NFT，做Web 2.5的区块链中间件应用，做博主，做B站up主，接小活，给朋友的二手商店收银，卖咖啡。<br><br>023 开始写小报童。这是我的周记本，也是我希望完成对你有价值和美的输出的管道。我想进行有尊严的写作，也相信你值得有尊严的阅读时间。谢谢你来，让我们尽快开始这段关系吧。",
      type: "成长",
    },
    {
      columnid: "laoma",
      image_url:
        "https://static.xiaobot.net/paper/2023-11-14/114300/8bf42e83611a8c2211adf94e68450005.jpeg",
      num: { 读者: 2297, 内容: 27 },
      title: "手把手教你建社群赚钱",
      owner: "@老马",
      description:
        "专栏一句话介绍：老马生财陪伴群最全最细SOP，拿了就能用的实操手册。<br><br>老马今年做陪伴群，门票变现10万+，带货和合伙人变现100万+。<br><br>普通人，一年时间，陪伴群如何快速做起来？为何我的陪伴群转化率那么猛 ？<br><br>这个专栏围绕建群、运营、文案、成交话术、实操变现等方向，写100篇，手把手教你建社群赚钱。<br><br>*限时最低价39.9元，一次付费，终身买断。<br><br>付费后加V：laoma0345 送《副业变现10万的保姆级手册》，邀请你进交流群。",
      type: "搞钱、IP、社群、私域",
    },
    {
      columnid: "qq13401616",
      image_url:
        "https://static.xiaobot.net/paper/2024-01-18/8959/094b6d00fb327f24560800b783e3a503.jpeg",
      num: { 读者: 2264, 内容: 185 },
      title: "100个100万+公众号爆文案例",
      owner: "赵半仙",
      description:
        "公众号爆文，八仙过海，各有不同。失败爆文，读者无感。成功案例，最有说服力！<br><br>1.由爆文最高月入5位数实战派、1000万个人网站流量操盘手，从价值666元100万+素材库中精选100多篇公众号爆文案例，按职场、情感、鸡汤、热点、娱乐、生活、时政、社会等 8 大类，总结亮点特色，快速学习精准模仿！<br><br>2.刷完100个案例，你的爆文功力也大概率可提升。<br><br>3.原价199元，限时12元。满 2500人涨价。<br><br>4.订阅长期可看，再送【10万+爆文福利包】和【爆文陪伴群】，加微信 13401616 发支付截图领取。",
      type: "搞钱、自媒体、公众号",
    },
    {
      columnid: "MJ2023",
      image_url:
        "https://static.xiaobot.net/paper/2023-01-31/14/79f8b151b903112edee4b4dbb89eda2f.jpeg",
      num: { 读者: 2224, 内容: 51 },
      title: "Midjourney进阶创意库｜2023",
      owner: "@刘飞",
      description:
        "先简单把专栏的读者权益写在前面，有想详细了解的朋友，可以往后接着看：<br><br>我会每篇提供同一个主题的绘图经验分享；<br><br>每个主题，会分享风格、艺术家和各类好用的符合主题的有效咒语（prompts）；<br><br>prompt 之外，更重要的是分享这个主题的创意思路；<br><br>专栏更新周期大概是一年，不少于 50 篇，每篇是不同的主题；<br><br>提供高清的图片，并放弃版权，可以非商用前提下随意使用；<br><br>加入读者专属的微信群，讨论 Midjourney 的使用，和 AIGC 的动向。",
      type: "AI",
    },
    {
      columnid: "richcat",
      image_url:
        "https://static.xiaobot.net/paper/2023-07-19/72922/6f5b34868b7b5d3c7d6a35d061d6026e.png",
      num: { 读者: 2223, 内容: 89 },
      title: "阿猫的百万财富指南",
      owner: "@阿猫",
      description:
        "阿猫25岁赚到100万，28岁赚到500万，在上海有车有房，分享我的财富经验，一共更新88篇，2月29号全部更新完毕。<br><br>原价199元，早鸟价99元。（一次订阅，永久有效，无需续费）<br><br>购买后加置顶帖微信，送你「阿猫精选的50本理财书籍」和「55页理财能力PPT」和小报童交流群。<br><br>作者：公众号阿猫读书创始人，全网70万读者。",
      type: "搞钱",
    },
    {
      columnid: "1000009",
      image_url:
        "https://static.xiaobot.net/paper/2023-11-14/284144/215671fc0833061f913d422dc1c10854.jpeg",
      num: { 读者: 2190, 内容: 54 },
      title: "玩赚私域从0到变现",
      owner: "@findyi",
      description:
        "作者 findyi，江湖人称洋哥，AI 破局俱乐部主理人，通过私域积累用户扩大势能实现年营收超千万。<br><br>小册共有 4 个专栏：我们为什么要做私域，如何从0开始做私域，做私域的5力模型，私域实操课拆解。<br><br>购买后加微信poju2324，添加后备注【私域】，我会送你一份全网平台操盘SOP，近50份，包含抖音、知乎、小红书各个平台，并建有陪伴领读群。<br><br>原价799，现价19.9元永久买断，每涨500人，涨价10元。承诺更新100篇以上！",
      type: "搞钱、私域、IP",
    },
    {
      columnid: "jghbd",
      image_url:
        "https://static.xiaobot.net/paper/2022-06-27/3755/0983fc129b0650bbbf24576077b762bd.jpeg",
      num: { 读者: 2185, 内容: 44 },
      title: "如何提升结构化表达能力",
      owner: "@曹将",
      description:
        "🤓作者曹将，《高效学习：曹将的公开课》《PPT炼成记》作者。<br><br>🚀 一共30个真实案例，解读常见的结构化表达。<br><br>👔适合工作五年内的职场人购买。<br><br>💰更新满30个后涨价。一次付费，永久阅读。",
      type: "沟通",
    },
    {
      columnid: "idoxu",
      image_url:
        "https://static.xiaobot.net/paper/2023-08-23/7466/80b9e95b20aeb5df9daa5a521b8ff846.jpeg",
      num: { 读者: 2158, 内容: 133 },
      title: "公众号入门·自媒体写作赚钱",
      owner: "@IDO老徐",
      description:
        "我是 IDO老徐。程序员/技术管理者，10w公号读者，3w付费用户，过往七年的公众号玩法经验都在这个专栏<br><br>专栏定位：老手查漏补缺，新手掌握知识体系并实战入门（彻底搞懂公众号入门到赚钱及实战建议）。完整内容，见「置顶帖」大纲<br><br>* 限时最低价 69.41（一次订阅，永久查阅），满 3000 人，涨价至 79.89<br><br>尽可能少的字，把公众号必备知识体系讲清楚：玩法，价值，步骤，赚钱<br><br>不提供微信群。订阅后微信 957863300 找我，截图支付记录，领取「资料包+定向朋友圈」",
      type: "搞钱、自媒体、公众号",
    },
    {
      columnid: "KarlHeinz99",
      image_url:
        "https://static.xiaobot.net/paper/2023-10-15/283909/ee934af9c9a99d7ab711be42c5828f2c.jpeg",
      num: { 读者: 2156, 内容: 31 },
      title: "AI 小红书爆款变现",
      owner: "@卡尔",
      description:
        "作者卡尔：小红书教练，AI 领域 SCI、EI作者，4万人付费社群AI小红书总教练，21w粉小红书博主商业顾问，6个月通过AI小红书IP变现6位数。<br><br>v：KarlHeinz99<br><br>小册暂包含四个专栏：AI 辅助小红书起号、AI辅助小红书创作、AI 小红书变现案例、AI 文字表达优化，一年内计划更新 30 篇以上。<br><br>原价 299 元，限时 28.8 元买断。",
      type: "搞钱、小红书、自媒体、IP",
    },
    {
      columnid: "xiaohongshuku",
      image_url:
        "https://static.xiaobot.net/paper/2023-07-23/24925/4deca77d62f3be18a50573c3f6c12453.png",
      num: { 读者: 2097, 内容: 31 },
      title: "小红书运营手册｜全本连载中",
      owner: "@后厂女工小王",
      description:
        "这里是小报童获知产品专家背书最多的小红书主题专栏，连载至今，口碑极佳。<br><br>海量案例，各大品牌方和小红书产品经理亲自坐镇的高质量陪伴社群，让你在小红书快速拿到结果。订阅后务必加作者微信备注「小报童」加群，微信号订阅后在第一章可见。<br><br>做号，是这个时代成本最低的创业。<br><br>小红书，是今年，最适合开辟的平台。<br><br>如果你的本职工作就是内容、流量、表达，那么来小红书吧，这里有远超其他平台的用户质量和付费能力；<br><br>如果你有另外的行当，那更应该做小红书——你的专业能力，找对方法运营，在小红书，如入无人之境。<br><br>这里是以内容平台产品经理和7年副业博主的双重视角讲给你听的整体逻辑和实战经验——小红书运营手册全本。<br><br>【订阅后你可以】<br><br> 1️获得做小红书的核心技能｜工作方法<br><br>2️进入小红书博主新星群，日常打卡交流<br><br>3️小红书内部运营学习资料，群内不定期掉落<br><br>一次买断，终身阅读。<br><br>让账号成为你的资产，用好小红书这个红利工具。<br><br>欢迎你加入学习。<br><br>（作者全网ID同名：@后厂女工小王）",
      type: "搞钱、小红书、自媒体、IP",
    },
    {
      columnid: "pmdogs6",
      image_url:
        "https://static.xiaobot.net/paper/2023-10-25/8632/4a9180963aae98c6d70c3784f2963a2e.jpeg",
      num: { 读者: 1833, 内容: 60 },
      title: "纯银的 60 篇产品分析 · 第六季",
      owner: "@纯银",
      description:
        "系列总销量超过 10000 份，《纯银的 60 篇产品分析 · 第七季》 5 月底打折促销。<br><br>🎉 正价 99 元，促销 68 元<br><br>🎉 打折至 5 月 31 日截止<br><br>🎉 赠送 99 元的第六季<br><br>第七季已更新 35 篇，以 99 元正价销售了上百份。更新中途打折 10 天，之后恢复正价。<br><br>接下来两个月完成全部 60 篇更新，七月完结。<br><br>有些重磅内容，比如酝酿了一年多的 《低增长时代的产品经营逻辑》，是我对三年半顾问所见所闻的总结，打算放在第七季的后半部分更新。<br><br>作为十七年的产品经理，这个专栏代表了我对产品与互联网行业的见解。大道相通，无论我们是不是同一赛道或职业，未尝不能触类旁通。<br><br>知识有价，认知无价。认知的启发与迭代是金钱买不到的东西。<br><br>促销期间购买第七季的朋友，可以用 0.99 元的低价，购买正价 99 元的第六季，赠品价格甚至高于正品价格。<br><br>相当于 68.99 元 120 篇「收费版」专业产品分析。<br><br>0.99 元购买第六季的赠品优惠券，在第七季专栏置顶。购买第七季后可见。",
      type: "互联网",
    },
    {
      columnid: "zhihuX",
      image_url:
        "https://static.xiaobot.net/paper/2022-08-29/17710/abbdd4a2dbe91bc9eb839d1f770653c3.png",
      num: { 读者: 1832, 内容: 113 },
      title: "知乎可复制案例库",
      owner: "@徐宿 · 家蒙",
      description:
        "别人的知乎变现不断，你的发文没赞，钱也没赚。<br><br>这里是徐宿和家蒙的小场，精选101个知乎可复制案例成册，帮你快速上手知乎商业化，找到正确的变现模式。<br><br>小册定价49元(永久买断)，看完对标执行，你也能快速上手。每满百人订阅涨价10元，先定先赚。<br><br>更多权益和规则请看置顶帖，每天更新2条案例。",
      type: "搞钱、自媒体、知乎",
    },
    {
      columnid: "course",
      image_url:
        "https://static.xiaobot.net/paper/2022-11-23/49017/cf289cf416383fb943f677a277a71f20.jpeg",
      num: { 读者: 1780, 内容: 47 },
      title: "小红书冷启动SOP",
      owner: "@乌素淖尔",
      description:
        "🙋‍♀️目标用户<br><br>①没有做号，有好奇，但没有耐心自己研究<br><br>②已经做了号，但不得要领，一个人有点坚持不下去<br><br>🎁你将获得<br><br>① 从0起步所需的基础知识、步骤<br><br>② 搭建一个可以互相交流的小圈子<br><br>💖已完更，不定期加餐中（已订阅用户无需额外付费）<br><br>📢限时158元买断，满1800人涨价至188元",
      type: "搞钱、小红书、自媒体、IP",
    },
    {
      columnid: "wsvictoria",
      image_url:
        "https://static.xiaobot.net/paper/2023-12-29/429574/179b3f35bdc5e14da116d0882be4b665.png",
      num: { 读者: 1704, 内容: 46 },
      title: "50个零代码AI应用制作案例",
      owner: "@爽姐",
      description:
        "致力于让零编程经验的人，也可以高效制作自己的 AI 应用、AI 智能体( 50 个实操案例精选 )，由两位 AI 领域深度玩家共创而来。<br><br>本专栏含有众多落地案例，涉及 GPTs 应用制作、ZelinAI 应用制作、科大讯飞 AI 助手、360 智脑、AI 编程助手、项目实战篇等众多案例。剩下的逐步更新，敬请期待。<br><br>订阅后关注【小册目录】扫码，或加微信CJ77_881，备注【666】，进专属陪伴群，并送你上千组 AI 资料包。<br><br>小册原价599，满 1000 人已涨价，限时 16.6 元买断。",
      type: "AI",
    },
    {
      columnid: "wenwen",
      image_url:
        "https://static.xiaobot.net/paper/2023-07-27/7466/b3480bfacb5fc2f359921f3b1508e6c1.jpeg",
      num: { 读者: 1673, 内容: 104 },
      title: "微信问一问·流量赚钱专栏",
      owner: "@IDO老徐",
      description:
        "1. 看专栏解百惑，赚到钱。问一问免费涨粉利器<br><br>独家更新 100 篇「问一问」经验贴。带你入门，解惑，提效，涨粉，赚小钱<br><br>2. 零成本单日公众号涨粉 1000+ ，专栏成员累计给公众号涨粉 20w+<br><br>3. 限时最低价 79.9 元（一次订阅，永久有效）<br><br>** 满 2500 人，涨价至 89.99 元<br><br>4. 订阅福利：定向朋友圈 + 资料包 。订阅后，微信 957863300 找我，发支付截图，领资料包",
      type: "搞钱、自媒体",
    },
    {
      columnid: "Portrait",
      image_url:
        "https://static.xiaobot.net/paper/2024-04-13/97698/26ec4c2fdc132a94b1def0568fbcdc1c.png",
      num: { 读者: 1400, 内容: 33 },
      title: "AI写真变现（爆款案例拆解）",
      owner: "@行者",
      description:
        "作者行者，产品经理，AI破局俱乐部初创合伙人，专注于AI绘画，AI视频领域。公众号日更百天，3个月粉丝破万。<br><br>小册包括4个专栏：AI爆款写真案例拆解、AI创意写真、AI写真必须教程、AI绘画工具箱。<br><br>小册的目标：<br><br>通过拆解爆款案例，帮助用户学会AI写真绘画，在AI写真这个赛道实现变现。<br><br>原价 299元，当下19.9 元买断制，每满500人涨价10元。<br><br>阅后加我微信（joshes）进群，领取AI写真资料库（备注小报童）",
      type: "搞钱、AI",
    },
    {
      columnid: "xhsal",
      image_url:
        "https://static.xiaobot.net/paper/2023-05-16/17710/d27b0fce1cc6ef65376502dd9f60c2e3.png",
      num: { 读者: 1374, 内容: 202 },
      title: "小红书带货案例库",
      owner: "@徐宿",
      description:
        "小红书带货玩家必备手册，站在巨人的肩膀上卖货赚钱。<br><br>本小册手动精选 200 个小红书电商带货可复制案例，涉及商品累计GMV超5亿，可以帮你快速获得小红书带货灵感。<br><br>限时 59 元买断（永久有效）<br><br>每满 100 人订阅，涨价10元，早买早赚<br><br>订阅后，截图支付记录，加微信 9908134 有专属惊喜",
      type: "搞钱、小红书、自媒体、IP",
    },
    {
      columnid: "tb108",
      image_url:
        "https://static.xiaobot.net/paper/2023-11-23/98198/93c4026671b82d957899a099789f78a7.png",
      num: { 读者: 1165, 内容: 152 },
      title: "淘宝蓝海虚拟产品108式",
      owner: "@阿拉丁@叁心笔记",
      description:
        "玩转淘宝虚拟产品开店，低成本创业，轻资产创业，如果你想靠淘宝开店卖虚拟产品赚到钱，那么这个专栏可以帮助你快速起步。<br><br>本专栏不仅教大家如何开通淘宝店铺，如何上架和自动发货等并会提供108个淘宝虚拟蓝海产品供大家上架出售，都是精挑细选不违规的产品，部分产品也是我自己一直在操作的产品。<br><br>快速学习，精准复制。<br><br>原价598，限时特价49.9（一次订阅，永久查看）<br><br>每满300人涨价10元（已从19.9涨至49.9）<br><br>满1000人继续翻倍涨价<br><br>订阅后加我微信发支付截图，提供微信群（群仅做交流，不提供任何培训指导）",
      type: "搞钱、电商",
    },
    {
      columnid: "pmdogs7",
      image_url:
        "https://static.xiaobot.net/paper/2024-03-07/8632/b766a34bbeb37999ad49e7b2e6d4ce6e.jpeg",
      num: { 读者: 899, 内容: 40 },
      title: "纯银的 60 篇产品分析 · 第七季",
      owner: "@纯银",
      description:
        "系列总销量超过 10000 份，《纯银的 60 篇产品分析 · 第七季》 5 月底打折促销。<br><br>🎉 正价 99 元，促销 68 元<br><br>🎉 打折至 5 月 31 日截止<br><br>🎉 赠送 99 元的第六季<br><br>第七季已更新 35 篇，以 99 元正价销售了上百份。更新中途打折 10 天，之后恢复正价。<br><br>接下来两个月完成全部 60 篇更新，七月完结。<br><br>有些重磅内容，比如酝酿了一年多的 《低增长时代的产品经营逻辑》，是我对三年半顾问所见所闻的总结，打算放在第七季的后半部分更新。<br><br>作为十七年的产品经理，这个专栏代表了我对产品与互联网行业的见解。大道相通，无论我们是不是同一赛道或职业，未尝不能触类旁通。<br><br>知识有价，认知无价。认知的启发与迭代是金钱买不到的东西。<br><br>促销期间购买第七季的朋友，可以用 0.99 元的低价，购买正价 99 元的第六季，赠品价格甚至高于正品价格。<br><br>相当于 68.99 元 120 篇「收费版」专业产品分析。<br><br>0.99 元购买第六季的赠品优惠券，在第七季专栏置顶。购买第七季后可见。",
      type: "互联网",
    },
    {
      columnid: "Chuangduhui",
      image_url:
        "https://static.xiaobot.net/paper/2024-04-17/452095/ed51e2a41ee156e104e48d0a1c965422.jpeg",
      num: { 读者: 616, 内容: 83 },
      title: "李鲆：创业读书（2024）",
      owner: "@李鲆",
      description:
        "📝读书万卷，日进斗金。<br><br>创业读书2024，一年分享365篇创业读书笔记。可永久阅读。<br><br>让创业者少走弯路，让创业更容易成功。<br><br>⭐李鲆是谁？<br><br>资深跳槽犯，白手起家的创业者。<br><br>微博百万大V。知识付费头部从业者。百万畅销书作者，代表作《多赚一倍》系列。<br><br>策划出版过百余部创业图书。做过1000多个商业个案咨询。付费学员累积10万＋。<br><br>💰专栏定价365元，早鸟价199元。<br><br>不割韭菜，24小时内不满意可全额退款。",
      type: "搞钱、商业、读书",
    },
    {
      columnid: "devgrowth",
      image_url:
        "https://static.xiaobot.net/paper/2024-05-15/45150/057f26f82da92e1f473bcfbf4a00d0ba.png",
      num: { 读者: 527, 内容: 17 },
      title: "独立开发营销获客增长手册",
      owner: "@Yangyi",
      description:
        "期望帮助独立开发个体完成初期增长和商业验证<br><br>掌握市场营销，流量获取，获客增长的入门方法<br><br>收获1000位狂热用户<br><br>15节小课，帮助大家突破只会开发不会运营的增长困境<br><br>我的微信和推特：Yangyi_xxxx",
      type: "搞钱、独立开发、热门",
    },
    {
      columnid: "along",
      image_url:
        "https://static.xiaobot.net/paper/2022-08-22/66780/d3b073c65dd390b560e08d27324c8ab2.jpeg",
      num: { 读者: 453, 内容: 101 },
      title: "去码头整点恶龙",
      owner: "@提刀少年斩恶龙",
      description:
        "LI道长在躺平的自留地，不方便在社交媒体上露出来的狐狸尾巴：<br><br>1、一页一生：我了解的真 老板和真 大佬<br><br>2、行业观察：做视频没流量的行业观察，<br><br>3、职场恶人：直播大佬们在职场踩过的屎<br><br>4、电子榨菜：我的躺平日常<br><br>5、随手哔哔：全是暴论，全是偏见。<br><br>6、其它：避免视频不能过审，不得不删除的暴论<br><br>另有一个搞钱群，方便各行各业的同学互通有无。探讨行业发展问题，挖掘商业合作的机会。",
      type: "互联网、职场",
    },
    {
      columnid: "LoveGuides",
      image_url:
        "https://static.xiaobot.net/paper/2024-02-06/15694/a097c9a524a92aa25461d65a0ce1114d.png",
      num: { 读者: 238, 内容: 19 },
      title: "高效脱单经验书",
      owner: "@正记录Beta",
      description:
        "脱单找对象就像参加考试，不学就容易考不及格，补考代价高到令人心碎。<br><br>本专栏提供 14 个高效脱单的步骤，<br><br>帮你掌握高效脱单的方法，助力你提升恋商，拥有持久幸福的亲密关系。<br><br>专栏原价 99.99 元 ，限时特价 13.14 元，后续阶梯涨价，终身买断，一次付费终身阅读。<br><br>订阅后，截图支付记录，加微信 562713456 进专栏交流群，祝你早日享受甜甜的💘恋爱。",
      type: "沟通",
    },
    {
      columnid: "python_weekly",
      image_url:
        "https://static.xiaobot.net/paper/2023-06-06/270980/e877e35dd62c49bfca2c0d7cd7d1067b.jpeg",
      num: { 读者: 171, 内容: 53 },
      title: "Python潮流周刊 | 每周连载中",
      owner: "@豌豆花下猫",
      description:
        "🐱这里是中文读者最多的 Python 技术周刊，也是全世界知识密度最高、知识广度最大的 Python 技术周刊，没有之一！<br><br>🐼自2023年5月连载至今，口碑极佳，好评如潮。<br><br>🐱技术周刊是聪明人在信息过载时代中筛选优质知识的聪明手段。<br><br>🐼我从全网挑选最值得分享的文章、教程、开源项目、软件工具、播客和视频、热门话题等丰富内容，第一时间汇聚给你阅读。<br><br>🐱周刊适合于你紧跟技术最前沿，也适合于发现合适的学习资料。<br><br>🐼周刊愿景：帮助所有读者精进 Python 技术，并增长职业和副业的收入。",
      type: "编程",
    },
    {
      columnid: "siyuwiki",
      image_url:
        "https://static.xiaobot.net/paper/2023-11-03/22414/908316b2b8e63cfa627e8437a3c09d7d.png",
      num: { 读者: 67, 内容: 30 },
      title: "私域知识体系白皮书2.0",
      owner: "@张佳的流量常识",
      description:
        "🎉售出1000+份的私域运营白皮书更新2.0！！<br><br>新版本增加：<br><br>🚀 解放64%重复性生产工作的AI提示词；<br><br>🌅 约50张重构/新增的可视化配图，助你更快理解；<br><br>🧬 100+处描述/表达重构，引入了更多理论和心得；<br><br>🤖 增加了已背诵全书的机器人，你可以跟它聊天学习。<br><br>- - -<br><br>给新伙伴介绍白皮书1.0：<br><br>1️⃣约10W字，包含私域的几乎一切；<br><br> 2️⃣指导性定义、3大核心价值、4 个基本打法、4 个基建和 3 个关键节点策略全链路内容；<br><br> 3️⃣直接抄作业的 SOP 文档表格。",
      type: "搞钱、AI、私域",
    },
    {
      columnid: "card",
      image_url:
        "https://static.xiaobot.net/paper/2023-10-31/5843/a09cc35c4c886f1ee0d9b15ce06c02c2.png",
      num: { 读者: 0, 内容: 40 },
      title: "笔记的方法（原知识资产 · 已完结）",
      owner: "@flomo Team",
      description:
        "由 flomo 团队出品，感谢大家支持，实体书已经上市，在当当网、得到 App 内搜索《笔记的方法》即可购买。<br><br>为保证创始读者的权益能有效履约（如致谢名单、实体书快递）等工作，故本专栏从 2023 年 8 月 6 日后关闭购买，如有问题请联系微信 plidezus",
      type: "",
    },
    // {
    //     columnid: "",
    //     image_url: "",
    //     num: { 读者: , 内容:  },
    //     title: "",
    //     owner: "",
    //     description: "",
    //     type: "搞钱"
    // },
    // {
    //     columnid: "",
    //     image_url: "",
    //     num: { 读者: , 内容:  },
    //     title: "",
    //     owner: "",
    //     description: "",
    //     type: "搞钱"
    // },

    // ... other items
  ];

  // 定义网站链接和推荐码
  const siteurl = "https://xiaobot.net/p/";
  const refercode = "?refer=533724d2-273f-443f-bed1-7fa9cae0fdd9";

  // 获取页面元素
  const content = document.getElementById("content");
  const searchBar = document.getElementById("search-bar");
  const tags = document.querySelectorAll(".tag");

  // Function to update card count
  const updateCardCount = (count) => {
    const cardCountElement = document.getElementById("card-count");
    cardCountElement.textContent = `当前展示 ${count} 个专栏`;
  };

  // 渲染卡片内容
  const renderCards = (filteredData) => {
    content.innerHTML = ""; // 清空内容区域

    // 按照读者数量进行排序
    filteredData.sort((a, b) => b.num.读者 - a.num.读者);

    // Update card count
    updateCardCount(filteredData.length);

    // 遍历过滤后的数据
    filteredData.forEach((item) => {
      // 创建卡片元素
      const card = document.createElement("div");
      card.className = "card";
      // 设置卡片内部HTML内容
      card.innerHTML = `
                <div class="card-content">
                    
                        <a href="${siteurl}${item.columnid}${refercode}" target="_blank">
                            <div class="uppart">
                                <img src="${item.image_url}" alt="${item.title}">
                                <div class="data">
                                    <div class="datacell">
                                        ${item.num.读者} <span class="word">读者</span> 
                                    </div>
                                    <div class="datacell">
                                        ${item.num.内容} <span class="word">文章</span> 
                                    </div>
                                </div>

                                <div class="maincontent">
                                    <h1>${item.title}${item.owner}</h2>
                                    <p>${item.description}</p>
                                </div>
                                
                            </div>
                            
                            <h3>详情</h3>
                        </a> 
                </div>
            `;
      content.appendChild(card); // 将卡片添加到内容区域
    });
  };

  // 根据搜索和标签过滤内容
  const filterContent = () => {
    const query = searchBar.value.toLowerCase(); // 获取搜索关键词并转换为小写
    const selectedTag = document.querySelector(".tag.selected"); // 获取选定的标签

    // 过滤数据
    const filteredData = data.filter((item) => {
      // 检查标题、描述和所有者是否包含搜索关键词
      const matchesSearch =
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.owner.toLowerCase().includes(query);

      // 检查是否与选定的标签匹配
      const matchesTag = selectedTag
        ? item.type
            .toLowerCase()
            .includes(selectedTag.dataset.type.toLowerCase()) ||
          selectedTag.dataset.type === "全部"
        : true;

      return matchesSearch && matchesTag; // 返回是否匹配搜索和标签条件
    });
    renderCards(filteredData); // 渲染过滤后的内容
  };

  // 监听搜索框输入事件
  searchBar.addEventListener("input", filterContent);

  // 监听标签点击事件
  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      // 移除先前选定的标签的选定状态，为当前标签添加选定状态
      document.querySelector(".tag.selected")?.classList.remove("selected");
      tag.classList.add("selected");
      filterContent(); // 过滤内容
    });
  });

  renderCards(data); // 初始化页面内容
});
