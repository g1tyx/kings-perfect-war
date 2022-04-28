function startGame() {
    if (isFileSystem) {
    } else {
        window.doWork = new Worker('helpers/interval.js');
        window.doWork.onmessage = function (event) {
            if (event.data === 'interval.start') {
                tick();
            }
        };
    }
    displayBetaSaveNote();

    //debug
    // window.localStorage[saveName] = decode("eyJkYXRlIjoiMjAxOS0wMi0yN1QxNzo0OMSWMy45OTJaIiwidG90YWxPZmZsaW5lTXPEhjkwMzI4LjDEuMS5xLoxxKFlbXBvd2VyZWTEhnt9xKFsZXZlbFNhxY3EhlvEgMSteHRMaXN0xLA6xIBrxKxnxZMic8WLZXB8MTMiXcShY2HFm8WLxaPFpWXFp3wyNMSgImJlZ8Wpxbpzxa/FjW5nxYPFv8ShxbTFtjEwxbpiYXJyYWNrc8aHxaRwZcaPbWFuxpZzxpjGmsacxb/FrSJ1bmnFnMWjZMamxoVvbl8wxanGnsWmxagyMsW6aG9tZcayMcaAxrR8xJfGuGlkZW91dMawxrLFq13FicWkZWPFhMapOjDEocamaXF1ZUPFi8aPxYXEhnRyx5rEoWtuxYHFi2TGhcSGx5Uix6XHp8WFxoVDYXDHq8ShaGlnaGXFm1DFg3PGrsWTxIDGmHLHv27HtSJhbceHbnTEhjJ9xqRixYtzc8WhxZ3EgGVuY2jGnMiNOsWUIm51bciHyInIi8ieyI/GpGbGmcWbyIHIocijyKXIisamyKjIkMShZ3XHhMacY8SFyJ/Flciwx5TEocimyLPIjsi1IsagyLvIrsiiyKTJgMiIyLLIjMmEyJHIp3nJici/x6zJgsmPOsipx7bFg2/Hu8mUyYvJlsmOyLTHjcWJxZVlxZfFmcWbyJfHrcWhxZPGpMWvxbHIvFvGpMeXx5PJs8eOc8eQx5LFncesx5fHmcebx53FhMWGOmbEpsm5x6THpnfHqMeqyYzHrsqKx7DHm8ezyIfHt8e5x7t0x73IhMiAyJ/IkciTyJXGhMmryJnIm8idya7EocirxbDInsmzyLbIuMSCyJrJssakyYfKrsShYsmSyqQix7pyyZ3Fncm3yYXFoMaExYfFpMWRxYVExINhyr/ErMiex6x3xZrEhsS8Isqiy4zEoXLEqnhJxqd0acSmy4zHrMuSbHjHsse0OjEyxL14y6DGtjB9x47GpmxvxpPJqcqox6HHo8uxZSzLs8u1x6LLtMu2y7rLuMm0bsusxpNTxKNyyZPIn8qFbMqHy7vLssu4y7fMisyNZcakxZtvzINEy5jMg8q1zJHMg1BhyozHrGLIuGxkQXXGkVbEpseay4wuNcaIx4dsQ8erxLc2MTbEocSjxKVsVGnGu8uMMzk3M8esY8yjTMWMxY7LkMq2x7jHusWbzYPFjWzLjH0=");

    load();
}

let isFileSystem = !!location.href.match("file");
let isBeta = !!location.href.match(/beta/i);
let saveName = !isBeta ? "KPW1" :  "KPWBeta";

let stop = false;
let prevState = {};
let actionsList = {
    nextNames: ["king", "castle", "units"],
    next: {
        king:[],
        castle:[],
        units:[]
    },
    current: {
        king:[],
        castle:[],
        units:[]
    }
};
let created = {}; //keep track of the number of times an action has happened per restart
window.language = "eng";
window.addAmount = 1;

let curLevel = 0;
let highestLevel = 0;
let mana = 1200;
let maxMana = 1200;
let totalTime = 0;
let gold = 0;
let wood = 0;
let soulC = 0;
let buildAuraValue = 1.5;
let highestListsLength;

let curList = 0; //king
let currentlyHovering = 0;
let unitsSelectedForMove = { king:true, units:false, heroes:false };

let levelSave = [];
let curInfoBox = "extras";
let addButtons = document.getElementById("addButtons");
let curListNum = 1;
let unlockList = [];
let unlockStory = []; //undefined is locked, true is new, false is seen
let storyJournal = [];
let restartReason = "";
let storyPage = 0;
let empowered = {};
let initialUnlock = true;

let totalOfflineMs = 0;

function clearSave() { //Doesn't work atm
    window.localStorage[saveName] = "";
    load();
}

function loadDefaults() {
}

function load() {
    loadDefaults();
    let toLoad = {};
    if(window.localStorage[saveName]) { //has a save file
        toLoad = JSON.parse(window.localStorage[saveName]);
    }

    totalOfflineMs = toLoad.totalOfflineMs !== undefined ? toLoad.totalOfflineMs : 0;
    addOffline(Math.floor((new Date() - new Date(toLoad.date)) * .8));
    empowered = toLoad.empowered !== undefined ? toLoad.empowered : {};

    //defines defaults later
    if(toLoad.levelSave) {levelSave = toLoad.levelSave;}
    if(toLoad.king && toLoad.king.savedData) {king.savedData = toLoad.king.savedData;}
    king.recalcListLength();

    if(toLoad.unlockList) {unlockList = toLoad.unlockList; }
    if(toLoad.unlockStory) {unlockStory = toLoad.unlockStory;}
    if(toLoad.storyJournal) {storyJournal = toLoad.storyJournal;}
    if(toLoad.storyPage) {storyPage = toLoad.storyPage;}
    if(toLoad.buildAuraValue) {buildAuraValue = toLoad.buildAuraValue;}
    if(toLoad.soulC) {soulC = toLoad.soulC;}
    if(toLoad.totalTime) {totalTime = toLoad.totalTime;}
    if(toLoad.curLevel) {curLevel = toLoad.curLevel;}
    if(toLoad.highestLevel) {highestLevel = toLoad.highestLevel;}

    recalcInterval(50);
    pauseGame();

    click.init(); //attach onclick listeners
    view.initialize();
    adjustStoryDivs();
    restart();
    save();
}

function save() {
    let toSave = {};
    saveTimer = 60000;

    toSave.date = new Date();
    toSave.totalOfflineMs = totalOfflineMs;
    toSave.empowered = empowered;
    toSave.levelSave = levelSave;
    toSave.king = {savedData:king.savedData};
    toSave.unlockList = unlockList;
    toSave.unlockStory = unlockStory;
    toSave.storyDiary = storyJournal;
    toSave.storyPage = storyPage;
    toSave.buildAuraValue = buildAuraValue;
    toSave.soulC = soulC;
    toSave.totalTime = totalTime;
    toSave.curLevel = curLevel;
    toSave.highestLevel = highestLevel;

    window.localStorage[saveName] = JSON.stringify(toSave);
}

function exportMapList() {
    let str = "";
    for(let i = 0; i < actionsList.nextNames.length; i++) {
        let name = actionsList.nextNames[i];
        let arr = nextListSimplified(actionsList.next[name]);
        str += capitalizeFirst(name) + "=\n";
        if(arr.length > 0) {
            for(let i = 0; i < arr.length; i++) {
                str += '"'+arr[i]+'",\n';
            }
            str = str.substring(0, str.length - 2) + "\n";
        }
        str += "="
    }
    str = str.substring(0, str.length - 2);

    document.getElementById("exportImportList").value = str;
    document.getElementById("exportImportList").select();
    document.execCommand('copy');
}

function exportCurrentList() {
    let name = actionsList.nextNames[curList];
    let arr = nextListSimplified(actionsList.next[name]);
    let str = capitalizeFirst(name) + "=\n";
    if(arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            str += '"' + arr[i] + '",\n';
        }
        str = str.substring(0, str.length - 2);
    }

    document.getElementById("exportImportList").value = str;
    document.getElementById("exportImportList").select();
    document.execCommand('copy');
}

function importList() {
    let str = document.getElementById("exportImportList").value;
    restartReason = "Imported";
    restart();

    if(!str) {
        createActionListsFromSimplifiedList({king:[],castle:[],units:[]});
    }

    let parts = str.split("=");
    if(parts.length % 2 === 1) {
        return; //invalid
    }
    let simplifiedList = {};
    for(let i = 0; i < parts.length; i+=2) {
        let name = parts[i];
        let list = "["+parts[i+1]+"]";
        simplifiedList[name.toLowerCase()] = JSON.parse(list);
    }

    createActionListsFromSimplifiedList(simplifiedList);
}

function exportSave() {
    save();
    document.getElementById("exportImportSave").value = encode(window.localStorage[saveName]);
    document.getElementById("exportImportSave").select();
    document.execCommand('copy');
    document.getElementById("exportImportSave").value = "";
}

function importSave() {
    window.localStorage[saveName] = decode(document.getElementById("exportImportSave").value);
    restartReason = "Imported";

    load();
    pauseGame();
}

function displayBetaSaveNote() {
    // console.log(isBeta);
    if(!isBeta) return;
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("betaSave").style.display = "block";
    });
}

// function moveSaveToBeta() {
//     window.localStorage[saveName] = window.localStorage.idleLoops1;
//     location.reload();
// }

// function moveSaveFromBeta() {
//     save();
//     window.localStorage.idleLoops1 = window.localStorage[saveName];
// }


function createActionListsFromSimplifiedList(simplifiedList) {
    for (let property in actionsList.next) {
        if (actionsList.next.hasOwnProperty(property) && simplifiedList[property]) {
            actionsList.next[property] = [];
            actionsList.current[property] = [];
            actions.validActions = [0, 0, 0];
            let num = property === "king" ? 0 : (property === "castle" ? 1 : 2);
            actions.refresh(num);
            listToActions(simplifiedList[property], num);
        }
    }
}

function listToActions(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        let split = arr[i].split("|");
        let varName = split[0];
        let loops = split[1] - 0;
        let unitsToMove = {king:false, units:false, heroes:false};
        if(split[2]) { //unitsToMove
            let typeCount = split[2] - 0; //convert to int
            if(typeCount >= 4) {
                typeCount -= 4;
                unitsToMove.heroes = true;
            }
            if(typeCount >= 2) {
                typeCount -= 2;
                unitsToMove.units = true;
            }
            if(typeCount >= 1) {
                unitsToMove.king = true;
            }
        }
        addActionToList(varName, num, false, loops, unitsToMove)
    }
}

function listsToSimplified() {
    let simplifiedList = {};
    for (let property in actionsList.next) {
        if (actionsList.next.hasOwnProperty(property)) {
            simplifiedList[property] = nextListSimplified(actionsList.next[property]);
        }
    }
    return simplifiedList;
}

function nextListSimplified(nextList) {
    let arr = [];
    for(let i = 0; i < nextList.length; i++) {
        let unit = nextList[i];
        let unitsToMoveStr = !unit.unitsToMove ? "" : "|" + (unit.unitsToMove.king * 1 + unit.unitsToMove.units * 2 + unit.unitsToMove.heroes * 4);
        arr.push(unit.varName + "|" + unit.loops + unitsToMoveStr);
    }
    return arr;
}