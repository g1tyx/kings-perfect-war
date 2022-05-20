/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    'Oversee Market': '巡查市场',
    'Empower Forest Champion': '森林授勋',
    'Peaceful Aura': '和平光环',
    'Hire Beggar': '雇佣乞丐',
    'Hire Merchant': '雇佣商人',
    'Hire Tax Collector': '雇佣税吏',
    'Hire Designer': '雇佣导师',
    'Sleep': '睡眠',
    'Pause': '暂停',
    'Restart': '重新开始',
    'Build Shrine': '建立神殿',
    'Build Altar': '建造祭坛',
    'Build Catapult': '建造石弩',
    'Build Barracks': '建造兵营',
    'Build Archery Range': '建造靶场',
    'Equip Spearman': '装备矛兵',
    'Study': '学习',
    'Train': '训练',
    'Direct Workers': '指导工人',
    'Chat with Citizens': '微服私访',
    'Train Archer': '训练射手',
    "Logger's Hut": '伐木小屋',
    "Forester's Cabin": '守林小屋',
    'Perform Ritual': '表演仪式',
    "Scavenger's Den": '雇佣柴夫',
    "Nature's Bounty": '自然恩赐',
    'Faerie Guidance': '精灵指引',
    'Blessed Feasts': '祝福盛典',
    'Faerie Enchantments': '精灵魔法',
    'Commune with Forest': '感受森林',
    "wood,": "木头，",
    "Your Units": "你的单位",
    "You remember the conversations, and you get better at speaking to people you've already spoken to. Everyone with less difficulty than your highest reached difficulty is 25% easier to talk to. Your highest reached is saved 4 separate times per map.": "你记住了对话，并且更擅长与已经交谈过的人交谈。 每个难度低于您达到的最高难度的人都更容易交谈 25%。 您的最高到达率在每张地图上分别保存 4 次。",
    "You gain 200 max knowledge for the first secret, and -2 for each subsequent secret.": "第一个秘密获得 200 最大知识，随后每个秘密获得的知识都递减 -2。",
    "Each map has a max number of people to talk to. You gain rapport equal to your CHA until you've filled the rapport bar and the person shares their secrets. Secrets increase increases your knowledge cap by 200 for the first, dropping -2 for each one from there. You can only get secrets from a person once, but you need to talk to people in the right order.": "每张地图都有最大数量的可以交谈的人。 你获得的关系等于你的 CHA，直到你填满了关系栏并且这个人分享了他们的秘密。 秘密增加第一次增加你的知识上限 200，从那里每减少一个 -2。 你只能从一个人那里得到一次秘密，但你需要以正确的顺序与人交谈。",
    "Each person has a difficulty, and the next person has +0.1 difficulty. You need (10 * difficulty) rapport per person. Additionally, if their difficulty is higher than your CHA, you need an additional ((difficulty - CHA)^2)*5 rapport.": "每个人都有一个难度，下一个人有+0.1的难度。 您需要（10 * 难度）每人融洽关系。 此外，如果他们的难度高于您的 CHA，您需要额外的 ((difficulty - CHA)^2)*5 关系。",
    "Add an action that restarts the map when it's run. Takes 5 seconds to finish.": "添加一个在地图运行时重新启动地图的操作。需要 5 秒才能完成。",
    "Add an action to the current list that pauses when it's run. Does not interfere with the game otherwise.": "向当前列表添加一个在运行时暂停的操作。否则不干扰游戏。",
    "Add an action to the current list that waits for one second. Auto-added if no other action is available.": "在等待一秒钟的当前列表中添加一个动作。如果没有其他操作可用，则自动添加。",
    "Archer": "射手",
    "Atk:": "攻击：",
    "Blessing not yet received.": "尚未收到祝福。",
    "Buy": "买",
    "Castle": "城堡",
    "Catapult": "弹射",
    "Costs 1 seconds.": "花费1秒。",
    "Costs 1000 wood. Also takes 10 seconds.": "花费 1000 木材。也需要10秒。",
    "Costs 10000 wood to start, and 10000 more each time after that. Also takes 20 seconds.": "开始花费 10000 木材，之后每次花费 10000。也需要20秒。",
    "Costs 1500 gold to start, and 1500 more each time after that. Also takes 10 seconds.": "开始花费 1500 金币，之后每次花费 1500 金币。也需要10秒。",
    "Costs 200 wood. Also takes 5 seconds.": "花费200木材。也需要5秒。",
    "Costs 2000 wood. Also takes 1000 gold. Also takes 10 seconds.": "花费 2000 木材。还需要1000金币。也需要10秒。",
    "Costs 20000 wood. Also takes 10000 gold. Also takes 20 seconds.": "花费 20000 木材。还需要10000金币。也需要20秒。",
    "Costs 4500 gold to start, and 4500 more each time after that. Also takes 10 seconds.": "开始花费 4500 金币，之后每次花费 4500 金币。也需要10秒。",
    "Costs 5 seconds.": "花费5秒。",
    "Costs 5 seconds. Can receive bonus up to 15 times.": "花费5秒。最多可领取15次红利。",
    "Costs 5 seconds. Can receive bonus up to 3 times.": "花费5秒。最多可获得3次红利。",
    "Costs 5 seconds. Can receive bonus up to 5 times.": "花费5秒。最多可获得5次红利。",
    "Costs 50 gold to start, and 50 more each time after that. Also takes 10 seconds.": "开始花费 50 金币，之后每次花费 50 金币。也需要10秒。",
    "Costs 500 gold to start, and 500 more each time after that. Also takes 10 seconds.": "开始花费 500 金币，之后每次花费 500 金币。也需要10秒。",
    "Costs 500 gold to start, and 500 more each time after that. Also takes 40 seconds.": "开始花费 500 金币，之后每次花费 500 金币。也需要40秒。",
    "Costs 5000 gold to start, and 5000 more each time after that. Also takes 160 seconds.": "开始花费5000金币，之后每次花费5000金币。也需要160秒。",
    "Costs 5000 wood. Also takes 20 seconds.": "花费 5000 木材。也需要20秒。",
    "Current max is 250": "当前最大值为 250",
    "Designers know the ins and outs of mass production. Each designer increases catapults built by 1, and increases the cost accordingly..": "设计师了解大规模生产的来龙去脉。每个设计者将建造的弹射器增加1，并相应增加成本。",
    "Dungeon 1": "地牢 1",
    "Elite archers capable of dealing death to your enemies. Cost is multiplied by number of archery ranges.": "精锐的弓箭手能够对你的敌人造成死亡。成本乘以射箭范围的数量。",
    "Empower Menu": "授权菜单",
    "Enemy Units": "敌方单位",
    "Every 1000 knowledge gained gives the king 1 INT": "每获得 1000 个知识，国王就会获得 1 个 INT",
    "exp": "经验",
    "Exp:": "经验：",
    "exp] when cleared.": "exp] 清除时。",
    "For when you have a lot of enemies to kill and a lot of resoures to throw at the problem. Cost is multiplied by number of designers.": "因为当你有很多敌人要杀死并且有很多资源要解决这个问题时。成本乘以设计师数量。",
    "Gain  a one-time reward of [": "获得一次性奖励[",
    "Gain [": "获得 [",
    "Give wood back to the forest in ever-larger effigies. Doubles favor.": "以更大的雕像将木材还给森林。双倍青睐。",
    "Gives +1 Favor. The Blessing gains Tribute equal to Favor, plus 10% more for each time you've completed that level's Blessing.": "给予 +1 好感。祝福获得等同于恩惠的贡品，每次完成该等级的祝福时额外增加 10%。",
    "Gives +5 Favor. The Blessing gains Tribute equal to Favor, plus 10% more for each time you've completed that level's Blessing.": "给予 +5 好感。祝福获得等同于恩惠的贡品，每次完成该等级的祝福时额外增加 10%。",
    "Go to the market and use your kingly charisma to get the gold flowing. Doubles gold gain. Lasts until the King starts another action or leaves the castle.": "去市场，用你的王者魅力让黄金流动。金币收益翻倍。持续到国王开始另一个行动或离开城堡。",
    "gold,": "金子，",
    "Hideout 1": "藏身处 1",
    "HP:": "生命值：",
    "Hrongar": "赫龙加尔",
    "If the difficulty is higher than your CHA, upon completion you gain CHA equal to (difficulty - CHA)/10, rounded up to the nearest hundredth.": "如果难度高于你的 CHA，完成后你获得的 CHA 等于（难度 - CHA）/10，四舍五入到最接近的百分之一。",
    "Invest in a Merchant. They'll make it back eventually. Gives 5 gold per tick.": "投资商户。他们最终会回来的。每刻给予 5 金币。",
    "King": "国王",
    "Knowledge:": "知识：",
    "Learn how to internalize the knowledge that you've gained from others. Gain Knowledge equal to your WIS up to your Knowledge Cap. Get .001 permanent INT per Knowledge.": "学习如何内化你从他人那里获得的知识。获得等于你的 WIS 的知识，直到你的知识上限。每项知识获得 0.001 永久 INT。",
    "Learn to talk to your citizens, and when you have enough rapport, learn about interesting family secrets to further study. Hover the (?) for the info on numbers.": "学会与你的公民交谈，当你有足够的融洽关系时，了解有趣的家庭秘密以进一步研究。将 (?) 悬停在数字信息上。",
    "mana] when cleared.": "法力] 清除时。",
    "Most Blessings Received": "收到最多的祝福",
    "Most People Met": "大多数人遇见",
    "Nobody met before.": "以前没有人见过面。",
    "people total on this map": "这张地图上的总人数",
    "Person": "人",
    "Play": "开始",
    "Recruit some spearmen here to take the hits. Each barracks increases spearman equipped by 1, and increases the cost accordingly.": "在这里招募一些长矛兵来接受打击。每个兵营增加1个长矛兵装备，并相应增加成本。",
    "Scavengers are weak, but know where the dead trees are to find branches that would otherwise need special tools. Gives 1 wood per tick.": "清道夫很弱，但知道死树在哪里找到否则需要特殊工具的树枝。每刻提供 1 个木材。",
    "Secrets Learned:": "学到的秘密：",
    "Speak with the spirits of your forest, convincing them to guide your wood gathering efforts. Doubles wood gain. Lasts until the King starts another action or leaves the castle.": "与您的森林精灵交谈，说服他们指导您的木材采集工作。木材增益加倍。持续到国王开始另一个行动或离开城堡。",
    "Spearman": "斯皮尔曼",
    "Start with 250": "从 250 开始",
    "Strategically placed begging gets a steady pittance. What nice citizens you have. Gives 1 gold per tick.": "战略性地乞讨得到稳定的微薄收益。你有多么好的公民。每刻给予 1 金币。",
    "Take a critical role in organizing your workers using your ever-increasing knowledge. Lasts until the King starts another action or leaves the castle.": "利用您不断增长的知识，在组织员工方面发挥关键作用。持续到国王开始另一个行动或离开城堡。",
    "The forest is magical, and some of the trees are tougher than iron. Woodcutters can take all but the toughest trees. Gives 5 wood per tick.": "森林是神奇的，有些树比铁还坚韧。除了最坚硬的树外，伐木工可以砍伐所有树木。每刻提供 5 个木材。",
    "The forester knows the best trees to cut down without hurting the forest, and has the tools to take them down. Gives 25 wood per tick.": "林务员知道在不伤害森林的情况下砍伐最好的树木，并且拥有将它们砍倒的工具。每刻提供 25 个木材。",
    "The meat of your army, they'll take damage before your other units. Cost is multiplied by number of barracks.": "你军队的肉，他们会在你的其他单位之前受到伤害。成本乘以营房数量。",
    "The more you ask, the more they have! Isn't economics amazing? Gives 25 gold per tick.": "你问的越多，他们得到的就越多！经济学是不是很神奇？每刻提供 25 金币。",
    "Thug": "暴徒",
    "Total": "全部的",
    "Train archers here to take enemies down from behind the front line. Each archery range increases archers trained by 1, and increases the cost accordingly..": "在这里训练弓箭手从前线后面击落敌人。每个射箭范围增加1训练的弓箭手，并相应增加成本。",
    "Train to recover the reflexes you've had in past lives. Add (Reflex Cap - Current Reflex)/50 to your Current Reflex.": "训练恢复你在前世的反应。将 (Reflex Cap - Current Reflex)/50 添加到您的当前反射。",
    "tribute": "贡",
    "Troll": "巨魔",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) \/ (.+) elves$/, '成本：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);