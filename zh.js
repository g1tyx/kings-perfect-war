//汉化杂项

/*********
 * 20190306.11@JAR:调整控制台采集英文字串的方法、关闭打印
 *********
 * 20190304.Night@JAR:开启控制台采集需汉化的字符串
 *********/

var cnItems = {
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
    _other/*未验证单词*/: [],
    //下面这个是文本模板
    '': '',
};

/***（1）尝试优化函数***/
function cnItem(text) {
    //遍历尝试匹配
    for ( var i in cnItems ) {
        if (text == i) return cnItems[i];
    }
    //未能匹配打印
    //console.log("需汉化的英文items：" + text);
    //遍历是否收录
    for (var i=0; i<cnItems._other.length; i++ ) {
        //已收录则退出不保存
        if (text == cnItems._other[i]) return;
    }
    //未收录则保存
    cnItems._other.push(text);
    //未收录则打印
    //console.log('有需要汉化的英文items', cnItems);
    return text;
}
/********************/



//汉化标题
var cntit = {
    _other/*未验证单词*/: [],
    //下面这个是文本模板
    '': '',
};

/***（2）尝试优化函数***/
function cntitle(text) {
    //遍历尝试匹配
    for ( var i in cntit ) {
        if (text == i) return cntit[i];
    }
    //未能匹配打印
    //console.log("需汉化的英文title：" + text);
    //遍历是否收录
    for (var i=0; i<cntit._other.length; i++ ) {
        //已收录则退出不保存
        if (text == cntit._other[i]) return;
    }
    //未收录则保存
    cntit._other.push(text);
    //未收录则打印
    //console.log('有需要汉化的英文title', cntit);
    return text;
}
/********************/
