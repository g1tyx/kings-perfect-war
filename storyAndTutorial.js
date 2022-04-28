/***
 *
 * STORY & TUTORIAL
 *
 * FILE: '/KingsPerfectWar/storyAndTutorial.js'
 * CHAR: 'UTF-8';
 * 
 * Shared modification - LANGU.
 * @JARODGER：
 * 汉化步骤#1，
 *** 熟悉基本操作、
 *** 定义基本概念。
 *
 * CONS.:
 *** 1.教程；2.剧本；3.页面。
 *
 * DOCU:
 *** <div id='pageNum'>
 *** <div id='storyContainer'>
 *
 */

//1.教程
let tutorial = [
  [ //1.0
    /***
     * bas.：地图、地点、国王、法力、行程、资源、级别、地牢、信息框、添加操作、行动。
     * src.:
        "Welcome to King's Perfect War! Please follow the tutorial exactly to understand the base mechanics.<br>" +
        "Your goal is to beat all hideouts in the map in order to unlock the next map.<br>" +
        "The map resets if your king dies or you run out of mana.<br>" +
        "When the map resets, all lists will start over and your resources will be set to the level's default values.",
        "Click on the dungeon (closer to your castle) and press Add Action in the Info Box. An action to move your king to the first hideout is created and added to the Units list.<br>" +
        "You can also right click an action to select it AND add it to the list. Save a click!<br>" +
        "Press Play to start the timer running!"
     ***/
    '欢迎进入【国王奋战】的游戏世界！请跟随本教程来理解基本规则。<br/>'
    + '你的目标是完成【地图】中所有【地点】（包括隐藏地点），以便解锁下一张地图。<br/>'
    + '如果你的【国王】死了、或者你的【法力】耗尽，地图就会重置。<br/>'
    + '当地图重置时，所有【行程】将重新开始，你的【资源】将被设置为相应【级别】的默认值。'
    ,
    '请单击【地牢】（就在城堡附近）、然后在【信息框】中点击【添加操作】，这将创建一个将你的国王移动到第一个地点的操作，并将其添加到行程中。<br/>'
    + '你也可以右键点击某个操作来选择它并将其添加到行程中。<br/>'
    + '点击【行动】来启动计时器运行！'
  ],
  [ //1.1
    /***
     * bas.：暂停、行动。
     * src.:
        "The game has paused automatically because the Units list has finished, sending the King to the enemy dungeon.<br/>" +
        "Press Play again until the king has slain the troll, and the game will pause again."
     ***/
    '因为行程已经完成，游戏自动【暂停】，国王正前往地牢。<br/>'
    + '再次点击【行动】，直至国王杀死巨魔、游戏将再次暂停。'
  ],
  [ //1.2
    /***
     * bas.：金子、木材、法力、设施、雇佣乞丐、雇佣柴夫、城堡行程。
     * src.:
        "The reward for clearing the dungeon is gold, wood, and mana, which has unlocked some buildings. Use your gold on Hire Beggar once and then Scavenger's Den once.<br/>" +
        "Then Play until they're built (and the game pauses because Castle list is complete)."
     ***/
    '清除地牢的奖励是【金子】、【木材】和【法力】，它们解锁了一些【设施】；【雇佣乞丐】会消耗金子，然后使用【雇佣柴夫】一次。<br/>'
    + '然后继续游戏、直到设施完成，游戏会暂停、因为【城堡行程】执行完毕。'
  ],
  [ //1.3
    /***
     * bas.：部队、建筑、矛兵、兵营、木材、休眠、城堡。
     * src.:
        "Great! That's the basics of income. Now that you have some resources flowing, it's time to get units.",
        "Each unit has a production facility, which is required to build the unit.<br/>" +
        "Having one barracks when you build a spearman means you build one spearman for 200 wood in one action.<br/>" +
        "Having two barracks when you build a spearman means you build two spearman for 400 wood in one action.",
        "Add the sleep action 10 times to let resources build, then build one barracks and two spearman.<br/>" +
        "Be careful, as the the game won't pause if the last action on a list is sleeping.",
        "In addition, you'll want your king to fight with your units, so send him back to your castle."
     ***/
    '太好了！这是最初的收入。现在你有了一些资源可用，是时候获得【部队】了。'
    ,
    '任何单位都需要对应的【建筑】，这是创建部队所必需的。<br/>'
    + '当你创建一个【矛兵】时需要一个【兵营】、也意味着你在一次操作中会消耗200【木材】创建一个矛兵。<br/>'
    + '当你创建一次矛兵时，有两个兵营意味着你可以一次创建价值400木材的两个矛兵。'
    ,
    '增加 10 次【休眠】操作，让资源积累起来，然后创建一个兵营和两个矛兵。<br/>'
    + '注意，如果行程上的最后一个操作正在“休眠”，游戏将不会暂停。'
    ,
    '此外，你还想让你的国王和你的部队系统作战，请把他送回你的【城堡】。'
  ],
  [ //1.4
    /***
     * bas.：部队、标记、敌巢。
     * src.:
        "Now that you have the units, it's time to send them off!<br/>" +
        "Change which units get selected for a move order by ensuring they're highlighted in the bottom right corner of War Map when you add the action. All units of those types will immediately head toward the destination when the action finishes.",
        "Select both King and Units and send them all to the hideout, to clear out the thugs."
     ***/
    '现在你有了【部队】，是时候发动他们了！<br/>'
    + '添加操作时，请确保在地图右下角选定了部队的【标记】。当操作完成时，所有这些类型的部队都将立即朝目标地点移动。'
    ,
    '选择国王和单位，把他们全部送到【敌巢】，以清除敌人。'
  ],
  [ //1.5
    /***
     * bas.：下一个。
     * src.:
        "Great! You've cleared the map. Move on to the next one to continue."
     ***/
    '太好了！你已经清洗了地图。继续往【下一个】吧。<br/>'
    + '（地图顶部名称右侧有一个方向箭头）'
  ],
  [ //1.6
    /***
     * bas.：光环、巡查市场、乞丐、柴夫。
     * src.:
        "As King, you can inspire workers to work harder... as long as you're there. Use the unlocked Auras to give the extra boost needed to win this level!",
        "There are many ways to win the levels from here on out, but to start you should" +
        "<ul><li>Enable the Oversee Market Aura</li>" +
        "<li>Hire a first Beggar</li>" +
        "<li>Sleep 5 seconds</li>" +
        "<li>Hire a second Beggar</li>" +
        "<li>Get two Scavengers</li>" +
        "</ul>"
     ***/
    '作为国王，你可以激励雇员更加努力地工作……但你必须在现场。使用未锁定的【光环】获得额外资源来完成这一关！<br/>'
    + '（光环可在国王操作框中找到）'
    ,
    + '从现在开始，有很多种策略可以通过以后的关卡，但首先你应该<ul>'
    + '<li>启用“巡查市场”光环</li>'
    + '<li>雇用第一个“乞丐”</li>'
    + '<li>休眠 5 次</li>'
    + '<li>雇佣第二个乞丐</li>'
    + '<li>雇佣 2 个“柴夫”</li>'
    + '</ul>'
  ]
  //教程结束
];

//2.剧本
let story = [
  [ //2.0
    /***
     * bas.：笔记、武器、法力耗尽。
     * src.:
        "Day 4<br/><br/>" +
        "I'm starting a journal, using the royal magic of taking magical notes and storing them in my soul. This might the first time I've used it. Anyways...<br/><br/>" +
        "I'm trapped; this is hell. \"This weapon can save everyone!\" they said, \"Only the king can use it!\" Next time I come back I think I might stab my advisor in the face when he berates me for not personally slaying the monsters. I am King! I have others to get their hands dirty in my place. No matter how I tell him, the fool doesn't accept the reality in front of his face.<br/><br/>"+
        "Death by mana exhaustion is painful. I need to find a better way."
     ***/
    '第4天<br/><br/>'
    + '我正在写一本日记，用皇家魔力记下神奇的【笔记】，并把它们储存在我的灵魂里。这可能是我第一次使用它。总之……<br/><br/>'
    + '我被困在地狱里了。“这个【武器】可以拯救所有人！”他们说，“只有国王才能使用它！”如果我能回去，我要掌他的嘴，那个指责我没有亲手杀死怪物的顾问。我是国王！手下人完全可以替我弄脏他们的手。可是不管我怎么说，那傻瓜都不接受眼前的现实。<br/><br/>'
    + '因【法力耗尽】而死亡是痛苦的。我需要找到更好的策略。'
  ],
  [ //2.1
    /***
     * bas.：杀死、轮回。
     * src.:
        "Day 5<br/><br/>" +
        "Death by stabbing is painful. Will my advisor whimper as much as I, when I hand him an equal sentence?<br/><br/>" +
        "... Am I being corrupted by the resets? Is that the purpose of all this - creating a demon king? Why won't anyone give me clear direction!"
     ***/
    '第5天<br/><br/>'
    + '被【杀死】真是痛苦。当我判他死刑，我的顾问会像我一样呜咽吗？<br/><br/>'
    + '……我被【轮回】搞晕了吗？这就是魔王存在的目的吗？为什么没有人给我明确的方向呢！'
  ],
  [ //2.2
    /***
     * bas.：死亡、休眠。
     * src.:
        "Day 6<br/><br/>" +
        "When I jump to my death, I should remember to land head first. Well, I doubt I'll forget; death by Mana Exhaustion AND broken legs was a bit much<br/><br/>" +
        "I think I'll rest for these precious few painless hours."
     ***/
    '第6天<br/><br/>'
    + '当我跃向【死亡】之时，我应该先找到着陆点。好吧，我大概会忘记这点；因为法力耗尽或者摔断腿而造成的死亡实在有点多了。<br/><br/>'
    + '我想我会在这宝贵的健康的几个小时里好好【休眠】一下。'
  ],
  [ //2.3
    /***
     * bas.：边界、信号。
     * src.:
        "Day 10<br/><br/>" +
        "Hrongar. Hrongar! The edge of the world! Well, the edge that no one cares about at least. This town can offer me nothing. No men capable of fighting, no women worth seducing, no conversation worth having. These savages can't even find me a poison to painlessly die.<br/><br/>" +
        "If this place didn't hold the sigil to initiate these... repetitions... I would have never come here."
     ***/
    '第10天<br/><br/>' +
    '容格！世界的【边界】！嗯，至少没人会关心这个边界。这个小镇什么也不能给我。没有哪个男人有战斗力，没有哪个女人值得诱惑，没有哪一份友谊值得拥有。这些蛮子甚至找不到一种安乐死的毒药。<br/><br/>'
    + '如果这个地方没有【信号】来启动这些……轮回……我就永远不会来到这里。'
  ],
  [ //2.4
    /***
     * bas.：喝醉、体力。
     * src.:
        "Day... 15?<br/><br/>" +
        "Mana Exhaustion ishn't sho bad when I'm drunk. The wine here sucks."
     ***/
    '第……15天？<br/><br/>'
    + '当我【喝醉】的时候，【体力】消耗也不算太严重。这里的酒很烂。'
  ],
  [ //2.5
    /***
     * bas.：酒。
     * src.:
        "Day I don't care anymore<br/><br/>" +
        "I've figured out how to send my advisor away with only a short conversation. It's a welcome relief. I've taken to picking up all the liquor I can hold and wandering the wilderness."
     ***/
    '第几天，我已经不在乎了。<br/><br/>'
    + '我已经想到了如何用只言片语就让我的顾问离开。这是一种令人欢欣的解脱。我已经带上了所有能喝的【酒】、游荡在荒原里。'
  ],
  [ //2.6
    /***
     * bas.：魔王。
     * src.:
        "Come to think of it, the magical note royal magic probably only exists for this purpose. Maybe I've been raised for it since birth in other ways, but if so I'm not sure how all the parties and fancy duels helped. Maybe time will tell, and I'll have to seduce the final boss to get out of this endless nightmare.<br/><br/>" +
        "Ah, I am so brilliant! The blood of royalty is truly outstanding. I should ask my advisor what he knows of this phenomenon."
     ***/
    '想想看，皇室魔法的神奇音符可能只是为了这个目的才存在。也许我从出生起就一直在以其他方式被抚养，但如果是这样的话，我不知道所有的派对和花式决斗是如何起作用的。也许时间会证明，而我必须搞定最后一个【魔王】才能摆脱这无尽的噩梦。<br/><br/>'
    + '啊，我真聪明！皇室的血统确实无与伦比。我应该问问我的顾问看他对这种现象有多少了解。'
  ],
  [ //2.7
    /***
     * bas.：能量。
     * src.:
        "The sniveling idiot! He knew this whole time! My goal is simple: Activate the nearby power sigil, and according to texts it stays activated even as the rest of the world resets. This is it! My nightmare is nearly ended"
     ***/
    '鬼哭狼嚎的白痴！他一直都知道的！我的目标很简单：激活身周的【能量】，即使轮回也有符文保持着它的活跃。就这样！我的噩梦快要结束了……'
  ],
  [ //2.8
    /***
     * bas.：命令。
     * src.:
        "... Unfortunately, convincing the population to attack the bandit hideout to save the kingdom doesn't work. Ungrateful peasants...<br/><br/>" +
        "Addendum: ordering the bandits to leave in the name of the King is just as ineffective. Who do they think mowns this land? It is a shame killing doesn't stick."
     ***/
    '……真是不幸，说服民众攻击匪穴来拯救王国是行不通的。忘恩负义的农民……<br/><br/>'
    + '附录：以国王的名义【命令】强盗离开是同样无效的。他们以为是谁在掌管这片土地？这是一场不可姑息的杀戮。'
  ],
  [ //2.9
    /***
     * bas.：暴徒。
     * src.:
        "Day 100<br/><br/>" +
        "Today is the day. I have scouted 10 thugs, and have learned their patrol routes. Today I will kill them all, and end this nightmare!"
     ***/
    '第100天<br/><br/>'
    + '就是今天。我已经摸透了10个【暴徒】的巡逻路线。今天我要把他们都干掉，结束这场噩梦！'
  ]
  //剧本结束
];

//3.页面
let divText = "";
//3.1.剧情拼合
for(let i = 0; i < story.length; i++) {
  divText += (
    "<div id='pageNum" +
    i +
    "' style='display:none'>" +
    story[i] +
    "</div>"
  );
}
//3.2.剧情上演
document.getElementById(
  "storyContainer"
).innerHTML = divText;
