import React, {useState} from 'react'
import './dragonStyle.css'
import NavP from '../../NavP'

// locate maps
const LOCATION = {
    TOWN: 'TOWN',
    STORE: 'STORE',
    CAVE: 'CAVE',
    FIGHT: 'FIGHT',
    KILL: 'KILL',
    LOSE: 'LOSE',
    WIN: 'WIN',
    EGG: 'EGG',
    SELL: 'SELL',
    POST: 'POST'
}
const MONSTER = {
    SLIME: 'SLIME',
    BEAST: 'BEAST',
    DRAGON: 'DRAGON'
}
let INVENTORY = ['stick']

export default function DragonRepeller() {
    //stats state
    const  [xp, setXp] = useState(0);
    const [health, setHealth] = useState(100);
    const [gold, setGold] = useState(50); 
    //inventory state
    const [currentWeapon, setCurrentWeapon] = useState(0);
    const [inventory, setInventory] = useState(INVENTORY);
    const [power, setPower] = useState(5);
    //monster state
    const [monster, setMonster] = useState(MONSTER.SLIME)
    const [monsterName, setMonsterName] = useState(''); 
    const [monsterHealth, setMonsterHealth] = useState(0); 
    const [display, setDisplay] = useState('none');
    const [fighting, setFighting] = useState(0); 
    //location state
    const [location, setLocation] = useState(LOCATION.TOWN);
    //text State
    const [text, setText] = useState('Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.');
    //objects
    const weapons = [
        { name: 'stick', power: 5},
        { name: 'dagger', power: 30 },
        { name: 'claw hammer', power: 50 },
        { name: 'sword', power: 100 }
    ];
    const monsters = {
        [MONSTER.SLIME]: {
            name: 'slime',
            level: 2,
            health: 15
        },
        [MONSTER.BEAST]: {
            name: 'fanged beast',
            level: 8,
            health: 60
        },
        [MONSTER.DRAGON]: {
            name: 'dragon',
            level: 20,
            health: 300
        }
    };
    const locations = {
        [LOCATION.TOWN]: {
            name: 'town square',
            buttons: [
                { text: 'Go to store', handler: goStore },
                { text: 'Go to cave', handler: goCave },
                { text: 'Fight dragon', handler: fightDragon }
            ],
            text: "You are in the town square. You see a sign that says \"Store\"."
        },
        [LOCATION.STORE]: {
            name: 'store',
            buttons: [
                { text: 'Buy 10 health (10 gold)', handler: buyHealth },
                { text: 'Buy weapon (30 gold)', handler: buyWeapon},
                { text: 'Go to town square', handler: goTown }
            ],
            text: 'You enter the store.'
        },
        [LOCATION.CAVE]: {
            name: 'cave',
            buttons: [
                { text: 'Fight slime', handler: fightSlime },
                { text: 'Fight beast', handler: fightBeast },
                { text: 'Go to town square', handler: goTown }
            ],
            text: "You enter the cave. You see some monsters."
        },
        [LOCATION.FIGHT]: {
            name: 'fight',
            buttons: [
                { text: 'Attack', handler: attack },
                { text: 'Dodge', handler: dodge },
                { text: 'Run', handler: goTown }
            ],
            text: 'You are fighting a monster'
        },
        [LOCATION.KILL]: {
            name: 'kill monster',
            buttons: [
                { text: 'Go to town square', handler: goTown },
                { text: 'Go to town square', handler: goTown },
                { text: 'Go to town square', handler: easterEgg }
            ],
            text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
        },
        [LOCATION.LOSE]: {
            name: 'lose',
            buttons: [
                { text: 'REPLAY?', handler: restart },
                { text: 'REPLAY?', handler: restart },
                { text: 'REPLAY?', handler: restart }
            ],
            text: "You died. ☠️"
        },
        [LOCATION.WIN]: {
            name: 'win',
            buttons: [
                { text: 'REPLAY?', handler: restart },
                { text: 'REPLAY?', handler: restart },
                { text: 'REPLAY?', handler: restart }
            ],
            text: "You defeat the dragon! YOU WIN THE GAME! 🎉"
        },
        [LOCATION.EGG]: {
            name: 'easter egg',
            buttons: [
                { text: '2', handler: pickTwo },
                { text: '8', handler: pickEight },
                { text: 'Go to town square?', handler: goTown },
            ],
            text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
        },
        [LOCATION.SELL]: {
            name: 'sell',
            buttons: [
                { text: 'Buy 10 health (10 gold)', handler: buyHealth },
                { text: 'Sell weapon for 15 gold', handler: sellWeapon },
                { text: 'Go to town square', handler: goTown }
            ],
            text: 'You already have the most powerful weapon.'
        },
        [LOCATION.POST]: {
            name: 'post',
            buttons: [
                { text: '', handler: empty},
                { text: '', handler: empty},
                { text: '', handler: empty},
            ],
        },
    };
    //empty function for speedy clickers
    function empty() {
        console.log('You click too fast dawg... take your time and read the script. Also if ur reading this pls hire me lmao')
    }
    //location functions
    function goTown() {
        setLocation(LOCATION.TOWN);
        setText(locations[LOCATION.TOWN].text);
        setDisplay('none');
    };
    function goStore() {
        setLocation(LOCATION.STORE);
        setText(locations[LOCATION.STORE].text);
        setDisplay('none');
    };
    function goCave() {
        setLocation(LOCATION.CAVE);
        setText(locations[LOCATION.CAVE].text);
        setDisplay('none');
    };
    function sell() {
        setLocation(LOCATION.SELL);
        setText('You already have the most powerful weapon!');
    }
    //store functions
    function buyHealth() {
        if (gold >= 10) {
            setGold(gold => gold - 10);
            setHealth(health => health + 10);
            setText('You bought health.')
        } else {
            setText('You do not have enough gold to buy health.');
    }};
    function buyWeapon() {
        if (currentWeapon < Object.keys(weapons).length - 1) {
            if (gold >= 30) {
                setGold(gold => gold - 30);
                setCurrentWeapon(weap => weap + 1);
                INVENTORY.push(weapons[currentWeapon + 1].name);
                setInventory(INVENTORY);
                setPower(weapons[currentWeapon + 1].power);
                let newWeapon = weapons[currentWeapon + 1].name;
                setText('You now have a ' + newWeapon + '. In your inventory you have: '+ inventory.join(', ') +`.`); //////DONT FORGET TO DELET ME 
                console.log(`inventory: ${inventory}`) 
                console.log(`INVENTORY: ${INVENTORY}`)
                console.log(INVENTORY)
                console.log(`currentWeapon: ${currentWeapon}`)
                console.log(`power: ${power}`)
            } else {
                setText('You do not have enough gold to buy a weapon.');
            };
        } else {
            sell()
        };
    };
    function sellWeapon() {
        if (inventory.length > 2) {
            setGold(gold => gold + 15 );
            let currentWeaponN = INVENTORY[1];
            INVENTORY.splice(1, 1)
            console.log(INVENTORY)
            setText('You sold a ' + currentWeaponN +'. In your inventory you have: ' + inventory.join(', ') +'.');
        } else {
            setText(`Don't sell your only weapon!`);
        }
    };
    //battle functions
    function goFight(monst) {
        setLocation(LOCATION.FIGHT);
        setMonsterHealth(monsters[monst].health);
        setMonsterName(monsters[monst].name);
        setDisplay('block');
    };
    function fightSlime() {
        setMonster(MONSTER.SLIME)
        setMonsterName(monsters[MONSTER.SLIME].name)
        setFighting(0);
        goFight(MONSTER.SLIME);
    };
    function fightBeast() {
        setMonster(MONSTER.BEAST)
        setMonsterName(monsters[MONSTER.BEAST].name)
        setFighting(1);
        goFight(MONSTER.BEAST);
    };
    function fightDragon() {
        setMonster(MONSTER.DRAGON)
        setMonsterName(monsters[MONSTER.DRAGON].name)
        setFighting(2);
        goFight(MONSTER.DRAGON);
    };
    function getMonsterAttackValue(level) {
        const hit = (level * 5) - (Math.floor(Math.random() * xp));
        return hit > 0 ? hit : 0;
    };
    function isMonsterHit() {
        return Math.random() > .2 || health < 20;
    };
    function attack() {
        setText('The ' + monsterName +' attacks. You attack it with your '+ inventory[inventory.length - 1] +'.');
        let charHealth = health - getMonsterAttackValue(monsters[monster].level);
        setHealth(charHealth);
        
        if (isMonsterHit()) {
            var monstHealth = monsterHealth - (power + Math.floor(Math.random() * xp) + 1); // has to be set to var so the scope can extend to the rest 
        if (monstHealth <= 0 ) {                                                            // of the parent function it is in without triggering the effect
            monstHealth = 0                                                                 // causing the monster to always be hit.
        }
            setMonsterHealth(monstHealth);
        } else {
            setText(text => text +' You miss.');
        };
        if (charHealth <= 0) {
            lose();
        } else if (monstHealth <= 0) {
            if (fighting === 2) {
                setLocation(LOCATION.POST)
                setTimeout(() => {
                    setDisplay('none');
                    winGame();
                }, 2000);
            } else {
                setLocation(LOCATION.POST)
                setTimeout(() => {
                    setDisplay('none');
                    defeatMonster()
                }, 2000);
            }
        };
        if (Math.random() <= .1 && INVENTORY.length !== 1) {
            setText(text => text +' Your '+ INVENTORY[INVENTORY.length - 1] +' breaks.');
            INVENTORY.pop()
            setInventory(INVENTORY)
            switch (INVENTORY[inventory.length - 1]) {
                case 'stick':
                    setCurrentWeapon(0);
                    setPower(5);
                    break;
                case 'dagger':
                    setCurrentWeapon(1);
                    setPower(30);
                    break;
                case 'claw hammer':
                    setCurrentWeapon(2);
                    setPower(50);
                    break;
                default:
                    setCurrentWeapon(-1);
                    setPower(0);
            }
        };
    };
    console.log(inventory)
    function dodge() {
        setText('You dodge the attack from the '+ monsterName +'.')
    };
    function defeatMonster() {
        setGold(gold => gold + (Math.floor(monsters[monster].level * 6.7)));
        setXp(xp => xp + monsters[monster].level);
        setLocation(LOCATION.KILL);
        setText(locations[LOCATION.KILL].text);
    };
    //game over functions
    function lose() {
        setLocation(LOCATION.LOSE);
        setText(locations[LOCATION.LOSE].text);
    };
    function winGame() {
        setLocation(LOCATION.WIN);
        setText(locations[LOCATION.WIN].text);
    };
    function restart() {
        setXp(0);
        setHealth(100);
        setGold(50);
        setCurrentWeapon(0);
        INVENTORY = ['stick']
        setInventory(INVENTORY)
        goTown();
    };
    //easter egg function
    function easterEgg() {
        setLocation(LOCATION.EGG);
        setText(locations[LOCATION.EGG].text);
    };
    function pick(guess) {
        setLocation(LOCATION.TOWN)
        const numbers = [];
        while (numbers.length < 10) {
            numbers.push(Math.floor(Math.random() * 11));
        };
        setText('You picked '+ guess +'. Here are the random numbers:\n');
        for (let i=0; i<10; i++) {
            setText(text => text + numbers[i] + '\n');
        };
        if (numbers.includes(guess)) {
            setText(text => text +'Right! You win 20 gold! Welcome back to town square.');
            setGold(gold => gold + 20);
        } else {
            setText(text => text +'Wrong! You lose 10 health! Welcome back to town square.');
            setHealth(health => health - 10 );
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
            <span className="stat">XP: <strong><span id="xpText">{xp}</span></strong></span>
            <span className="stat">Health: <strong><span id="healthText">{health}</span></strong></span>
            <span className="stat">Gold: <strong><span id="goldText">{gold}</span></strong></span>
        </div>
        <div id="controls">
            {locations[location].buttons.map((button, i) => (
                <button
                key={`${button.text} ${i}`}
                id={`button${i + 1}`}
                className='gButton'
                onClick={button.handler}
                >
                    {button.text}
                </button>
            ))}
        </div>
        <div id="monsterStats" style={{display: display}}>
            <span className="stat">Monster Name: {monsterName}<strong><span id="monsterName"></span></strong></span>
            <span className="stat">Health: {monsterHealth}<strong><span id="monsterHealth"></span></strong></span>
        </div>
        <div id="text">
            {text}
        </div>
        </div>
        </div>
    )
}
