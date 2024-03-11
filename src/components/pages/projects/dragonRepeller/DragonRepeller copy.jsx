import React, { useState} from 'react'
import './style.css'
import NavP from '../../NavP'


export default function DragonRepeller() {
    //stats state
    const  [xp, setXp] = useState({ xp: 0 });
    const [health, setHealth] = useState({ health: 100 });
    const [gold, setGold] = useState({ gold: 50 }); 
    //inventory state
    const [currentWeapon, setCurrentWeapon] = useState({ currentWeapon: 0 });
    const [fighting, setFighting] = useState();
    const [inventory, setInventory] = useState({ inventory: ['stick']});
    const [power, setPower] = useState({ power: 5 });
    //monster state
    const [monsterName, setMonsterName] = useState();
    const [monsterHealth, setMonsterHealth] = useState({ health: 0});
    //const [monsterLevel, useMonsterLevel] = useState();
    //UI State
    const [text, setText] = useState({ text: 'Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.'});
   // const [locationName, setLocationName] = useState({ name: 'town square'});
    const [buttonText, setButtonText] = useState({ button1: "Go To Store", button2: 'Go to Cave', button3: 'Fight Dragon'});
    const button1Text = buttonText.button1
    const button2Text = buttonText.button2
    const button3Text = buttonText.button3
    const [buttonFunction, setButtonFunction] = useState({button1: goStore, button2: goCave, button3: fightDragon});
    const button1Function = buttonFunction.button1
    const button2Function = buttonFunction.button2
    const button3Function = buttonFunction.button3
    //initializing components
    /*const button1 = document.querySelector('#button1');
    const button2 = document.querySelector('#button2');
    const button3 = document.querySelector('#button3');
    const textBox = document.querySelector('#text');
    const xpText = document.querySelector('#xpText');
    const healthText = document.querySelector('#healthText');
    const goldText = document.querySelector('#goldText'); */
    const monsterStats = document.querySelector('#MonsterStats');
    //const monsterNameText = document.querySelector('#monsterName');
    //const monsterHealthText = document.querySelector('#monsterHealth');
    //objects
    const weapons = [
        { name: 'stick', power: 5},
        { name: 'dagger', power: 30 },
        { name: 'claw hammer', power: 50 },
        { name: 'sword', power: 100 }
    ];
    const monsters = [
        {
            name: "slime",
            level: 2,
            health: 15
        },
        {
            name: "fanged beast",
            level: 8,
            health: 60
        },
        {
            name: "dragon",
            level: 20,
            health: 300
        }
    ];
    const locations = [
        {
            name: "town square",
            "button text": ["Go to store", "Go to cave", "Fight dragon"],
            "button functions": [goStore, goCave, fightDragon],
            text: "You are in the town square. You see a sign that says \"Store\"."
        },
        {
            name: "store",
            "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
            "button functions": [buyHealth, buyWeapon, goTown],
            text: "You enter the store."
        },
        {
            name: "cave",
            "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
            "button functions": [fightSlime, fightBeast, goTown],
            text: "You enter the cave. You see some monsters."
        },
        {
            name: "fight",
            "button text": ["Attack", "Dodge", "Run"],
            "button functions": [attack, dodge, goTown],
            text: "You are fighting a monster."
        },
        {
            name: "kill monster",
            "button text": ["Go to town square", "Go to town square", "Go to town square"],
            "button functions": [goTown, goTown, easterEgg],
            text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
        },
        {
            name: "lose",
            "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
            "button functions": [restart, restart, restart],
            text: "You died. ☠️"
        },
        { 
            name: "win", 
            "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
            "button functions": [restart, restart, restart], 
            text: "You defeat the dragon! YOU WIN THE GAME! 🎉" 
        },
        {
            name: "easter egg",
            "button text": ["2", "8", "Go to town square?"],
            "button functions": [pickTwo, pickEight, goTown],
            text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
        }
    ];
    //location functions
    function update(location) {
        document.querySelector('#monsterStats').computedStyleMap.display = 'none';
        setButtonText(() => {
            return {
                button1: location['buttonText'[0]],
                button2: location['buttonText'[1]],
                button3: location['buttonText'[2]]
            }
        });
        setButtonFunction(() => {
            return {
                button1: location['button functions'][0],
                button2: location['button functions'][1],
                button3: location['button functions'][2]
            }
        });
        setText(() => {
            return { text: location.text}
        });
        };
    function goTown() {
        update(locations[0]);
    };
    function goStore() {
        update(locations[1]);
    };
    function goCave() {
        update(locations[2]);
    };


    //store functions
    function buyHealth() {
        if (gold.gold >= 10) {
            setGold((prevGold) => { return { gold: prevGold.gold - 10 }});
            setHealth((prevHealth) => {return { health: prevHealth.health + 10 }});
        } else {
            setText(() => { return { text: 'You do not have enough gold to buy health.' }});
    }};
    function buyWeapon() {
        if (currentWeapon.currentWeapon < weapons.length) {
            if (gold.gold >= 30) {
                setGold((prevGold) => { return { gold: prevGold.gold - 30 }});
                setCurrentWeapon((prevWeap) => { return { currentWeapon: prevWeap.currentWeapon++ }});
                setInventory((prevInventory) => { return {inventory: prevInventory.inventory.push(weapons[currentWeapon.currentWeapon].name)}})
                setPower(() => { return { power: weapons[currentWeapon.currentWeapon].power}})
                let newWeapon = weapons[currentWeapon.currentWeapon].name;
                setText(() => { return { text: 'You now have a ' + newWeapon + '. In your inventory you have: '+ inventory.inventory.join(', ') +'.'}});
            } else {
                setText(() => { return {text: 'You do not have enough gold to buy a weapon.'}});
            };
        } else {
            setText(() => { return {text: 'You already have the most powerful weapon!'}});
            setButtonText((prevText) => {return {...prevText, button2: 'Sell weapon for 15 gold'}});
            setButtonFunction((prevFunc) => { return { ...prevFunc, button2: sellWeapon}});
        };
    };
    function sellWeapon() {
        if (inventory.inventory.length > 1) {
            setGold((prevGold) => { return { gold: prevGold.gold + 15 }});
            let currentWeaponN = inventory.inventory.shift();
            setText(() => { return { text: 'You sold a ' + currentWeaponN +'. In your inventory you have: ' + inventory.inventory.join(', ') +'.'}});
        } else {
            setText(() => { return { text: `Don't sell your only weapon!` }});
        }
    };
    //battle functions
    function goFight() {
        update(locations[3]);
        setMonsterHealth(() => { return { health: monsters[fighting].health}});
        monsterStats.style.display = 'block';
        setMonsterName(monsters[fighting].name);
    };
    function fightSlime() {
        setMonsterName(monsters[0].name)
        setFighting(0);
        goFight();
    };
    function fightBeast() {
        setMonsterName(monsters[1].name)
        setFighting(1);
        goFight();
    };
    function fightDragon() {
        setMonsterName(monsters[2].name)
        setFighting(2);
        goFight();
    };
    function getMonsterAttackValue(level) {
        const hit = (level * 5) - (Math.floor(Math.random() * xp));
        return hit > 0 ? hit : 0;
    };
    function isMonsterHit() {
        return Math.random() > .2 || health.health < 20;
    };
    function attack() {
        setText(() => { return { text: 'The ' + monsterName +' attacks. You attack it with your '+ inventory.inventory[inventory.inventory.length - 1] +'.'}});
        setHealth((prevHealth) => { return { health: prevHealth.health - getMonsterAttackValue(monsters[fighting].level)}});
        if (isMonsterHit()) {
            setMonsterHealth((prevHealth) => {return { health: prevHealth.health - (power.power + Math.floor(Math.random() * xp) + 1) }});
        } else {
            setText((prevText) => { return { text: prevText.text +' You miss.'}});
        };
        if (health.health <= 0) {
            lose();
        } else if (monsterHealth.health <= 0) {
            if (fighting === 2) {
                winGame()
            } else {
                defeatMonster()
            }
        };
        if (Math.random() <= .1 && inventory.inventory.length !== 1) {
            setText((prevText) => { return { text: prevText.text +' Your '+ inventory.inventory.pop() +' breaks.'}});
            setCurrentWeapon((prevWeapon) => { return { currentWeapon: prevWeapon.currentWeapon--}});
        };
    };
    function dodge() {
        setText(() => { return { text: 'You dodge the attack from the '+ monsterName +'.'}})
    };
    function defeatMonster() {
        setGold((prevGold) => { return { gold: prevGold.gold + (Math.floor(monsters[fighting].level * 6.7))}});
        setXp((prevXp) => { return { xp: prevXp.xp + monsters[fighting].level}});
        update(locations[4]);
    };
    function lose() {
        update(locations[5]);
    };
    function winGame() {
        update(locations[6]);
    };
    function restart() {
        setXp(() => { return { xp: 0 }});
        setHealth(() => { return { health: 100 }});
        setGold(() => { return { gold: 50 }});
        setCurrentWeapon(() => { return { currentWeapon: 0 }});
        setInventory(() => { return { inventory: ['stick'] }});
        goTown();
    };
    function easterEgg() {
        update(locations[7]);
    };
    function pick(guess) {
        const numbers = [];
        while (numbers.length < 10) {
            numbers.push(Math.floor(Math.random() * 11));
        };
        setText(() => { return { text: 'You picked '+ guess +'. Here are the random numbers:\n'}});
        for (let i=0; i<10; i++) {
            setText((prevText) => { return { text: prevText.text + numbers[i] + '\n'}});
        };
        if (numbers.includes(guess)) {
            setText((prevText) => { return { text: prevText.text +'Right! You win 20 gold!'}});
            setGold((prevGold) => { return { gold: prevGold.gold + 20}});
        } else {
            setText((prevText) => { return { text: prevText.text +'Wrong! You lose 10 health!'}});
            setHealth((prevHealth) => { return { health: prevHealth.health - 10 }});
            if (health <= 0) {
                lose();
            };
        };
    };
    function pickTwo() {
        pick(2);
    };
    function pickEight() {
        pick(8);
    };
    return (
        <div className="game-wrapper">
            <NavP />
        <div id='game'>
        <div id="stats">
            <span className="stat">XP: <strong><span id="xpText">0</span></strong></span>
            <span className="stat">Health: <strong><span id="healthText">{health.health}</span></strong></span>
            <span className="stat">Gold: <strong><span id="goldText">{gold.gold}</span></strong></span>
        </div>
        <div id="controls">
            <button id="button1" className='gButton' onClick={button1Function}>{button1Text}</button>
            <button id="button2" className='gButton' onClick={button2Function}>{button2Text}]</button>
            <button id="button3" className='gButton' onClick={button3Function}>{button3Text}</button>
        </div>
        <div id="monsterStats">
            <span className="stat">Monster Name: {monsterName}<strong><span id="monsterName"></span></strong></span>
            <span className="stat">Health: {monsterHealth}<strong><span id="monsterHealth"></span></strong></span>
        </div>
        <div id="text">
            {text.text}
        </div>
        </div>
        </div>
    )
}
