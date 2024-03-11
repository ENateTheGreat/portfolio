import React from 'react'
import DragonControls from './0_DragonControls'
import DragonMonsterStats from './0_DragonMonsterStats'
import DragonStats from './0_DragonStats'
import NavP from '../../NavP'
import './style.css'

function DragonHome() {
    //functions for modifying, but lets see if I need to make functions to set the stats back to default (i.e. func health basic(change) = health: change) since you cant do that using the regular func that modifies the prev state
    const [xp, setXp] = React.useState({ xp: 0 });
    const [health, setHealth] = React.useState({ health: 100 });
    const [gold, setGold] = React.useState({ gold: 50 });
    const [currentWeapon, setCurrentWeapon] = React.useState({ currentWeapon: 0 });
    const [fighting, setFighting] = React.useState({ fighting: 0 });
    const [inventory, setInventory] = React.useState({ inventory: ['stick'] });
    const [power, setPower] = React.useState({ power: 5 });
    const [monsterName, setMonsterName] = React.useState({ monsterName: '' });
    const [monsterHealth, setMonsterHealth] = React.useState({ monsterHealth: 0 });
    const [text, setText] = React.useState({ text: 'Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.' });
    const [buttonText, setButtonText] = React.useState({ button1: 'Go To Store', button2: 'Go To Cave', button3: 'Fight Dragon' });
    const [buttonFunction, setButtonFunction] = React.useState({ button1: goStore, button2: goCave, button3: fightDragon });
    const [monsterStyle, setMonsterStyle] = React.useState({ style: 'none' }) 

    /*    const [state, setState] =  React.useState({
            xp: 0,
            health: 100,
            gold: 50,
            currentWeapon: 0,
            fighting: 0,
            inventory: ['stick'],
            power: 5,
            monsterName: '',
            monsterHealth: 0,
            monsterStyle: 'none',
            text: 'Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.',
            buttonText: {
                button1: 'Go To Store',
                button2: 'Go To Cave',
                button3: 'Fight Dragon',
            },
            buttonFunction: {
                button1: goStore,
                button2: goCave,
                button3: fightDragon,
            }
    } ) */
    //attempt at setting new state
    
    //let monsterStats = document.querySelector('#monsterStats'); //this might work if it was set to '#monsterStats instead of '#MonsterStats
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
        setButtonText({
                button1: location["button text"][0],
                button2: location["button text"][1],
                button3: location["button text"][2]
        });
        setButtonFunction({
                button1: location['button functions'][0],
                button2: location['button functions'][1],
                button3: location['button functions'][2]
        });
        setMonsterStyle({ style: 'none' });
        setText({ text: location.text });
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
            const newGold = gold.gold - 10;
            setGold({ gold: newGold })
            const newHealth = health.health + 10
            setHealth({ health: newHealth })
        } else {
            setText({ text: 'You do not have enough gold to buy health.'})
    }};
    function buyWeapon() {
        if (currentWeapon.currentWeapon < weapons.length) {
            if (gold.gold >= 30) {
                const newGold = gold.gold - 30;
                setGold({ gold: newGold });
                const newCurrentWeapon = currentWeapon.currentWeapon++;
                setCurrentWeapon(newCurrentWeapon);
                const newInventory = inventory.inventory.push(weapons[currentWeapon.currentWeapon].name);
                setInventory({ inventory: newInventory });
                const newPower = weapons[currentWeapon.currentWeapon].power;
                setPower({ power: newPower })
                const newText = 'You now have a '+ weapons[currentWeapon.currentWeapon].name +'. In your inventory you have: '+ inventory.inventory.join(', ') +'.';
                setText({ text: newText });
            } else {
                const newText = 'You do not have enough gold to buy a weapon.';
                setText({ text: newText })
            };
        } else {
            const newText = 'You already have the most powerful weapon!';
            setText({ text: newText });
            setButtonText({
                    button1: buttonText.button1,
                    button2: 'Sell weapon for 15 gold',
                    button3: buttonText.button3
            });
            setButtonFunction({
                button1: buttonFunction.button1,
                button2: sellWeapon,
                button3: buttonFunction.button3
            });
        };
    };
    function sellWeapon() {
        if (inventory.inventory.length > 1) {
            const newGold = gold.gold + 15;
            setGold({ gold: newGold });
            const newText = 'You sold a '+ inventory.inventory.shift() +'. In your inventory you have: '+ inventory.inventory.join(', ') +'.';
            setText({ text: newText });
        } else {
            const newText = 'Don\'t sell your only weapon!';
            setText({ text: newText });
        }
    };
    //battle functions
    function goFight() {
        update(locations[3]);
        const newMonsterHealth = monsters[fighting.fighting].health;
        setMonsterHealth({ monsterHealth: newMonsterHealth });
        const newMonsterName = monsters[fighting.fighting].name;
        setMonsterName({ monsterName: newMonsterName });
        setMonsterStyle({ style: 'block' })
    };
    function fightSlime() {
        const newFighting = 0;
        setFighting({ fighting: newFighting });
        goFight();
    };
    function fightBeast() {
        const newFighting = 1;
        setFighting({ fighting: newFighting });
        goFight();
    };
    function fightDragon() {
        const newFighting = 2;
        setFighting({ fighting: newFighting });
        goFight();
    };
    function getMonsterAttackValue(level) {
        const hit = (level * 5) - (Math.floor(Math.random() * xp.xp));
        return hit > 0 ? hit : 0;
    };
    function isMonsterHit() {
        return Math.random() > .2 || health.health < 20;
    };
    function attack() {
        const newText = 'The '+ monsterName.monsterName +' attacks. You attack it with your '+ inventory.inventory[inventory.inventory.length - 1] +'.';
        setText({ text: newText });
        const newHealth = health.health - getMonsterAttackValue(monsters[fighting.fighting].level);
        setHealth({ health: newHealth });
        if (isMonsterHit()) {
            const newMonsterHealth = monsterHealth.monsterHealth - (power.power + Math.floor(Math.random() * xp.xp) + 1);
            setMonsterHealth({ monsterHealth: newMonsterHealth });
        } else {
            const newText = 'The '+ monsterName.monsterName +' attacks. You attack it with your '+ inventory.inventory[inventory.inventory.length - 1] +'. You Miss...';
            setText({ text: newText})
        };
        if (health.health <= 0) {
            lose();
        } else if (monsterHealth.monsterHealth <= 0) {
            if (fighting.fighting === 2) {
                winGame()
            } else {
                defeatMonster()
            }
        };
        if (Math.random() <= .1 && inventory.inventory.length !== 1) {
            const newText = text.text + 'Your '+ inventory.inventory.pop() +' breaks.';
            setText({ text: newText });
            const newCurrentWeapon = currentWeapon.currentWeapon--;
            setCurrentWeapon(newCurrentWeapon);
        };
    };
    function dodge() {
        const newText = 'You dodge the attack from the '+ monsterName.monsterName +'.';
        setText({ text: newText });
    };
    function defeatMonster() {
        const newGold = gold.gold + Math.floor(monsters[fighting.fighting].level * 6.7);
        setGold({ gold: newGold });
        const newXp = xp.xp + monsters[fighting.fighting].level;
        setXp({ xp: newXp });
        update(locations[4]);
    };
    function lose() {
        update(locations[5]);
    };
    function winGame() {
        update(locations[6]);
    };
    function restart() {
        setXp({xp: 0});
        setHealth({health: 100});
        setGold({gold: 50});
        setCurrentWeapon({currentWeapon: 0});
        setInventory({inventory: ['stick']});
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
        const newText = 'You picked '+ guess +'. Here are the random numbers:\n';
        setText({ text: newText });
        for (let i=0; i<10; i++) {
            const newText = text.text + numbers[i] + '\n';
            setText({ text: newText });
        };
        if (numbers.includes(guess)) {
            const newText = text.text + 'Right! You win 20 gold!';
            setText({ text: newText });
            const newGold = gold.gold + 20;
            setGold({ gold: newGold });
        } else {
            const newText = text.text +'Wrong! You lose 10 health!';
            setText({ text: newText });
            const newHealth = health.health - 10;
            setHealth({ health: newHealth });
            if (health.health <= 0) {
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
        <div className='full-wrapper'>
            <NavP />
        <div id='game'>
            
            <div id="stats">
                <DragonStats xp={xp.xp} health={health.health} gold={gold.gold} />
            </div>
            <div id="controls">
                <DragonControls buttonFunction={buttonFunction} buttonText={buttonText} />
            </div>
            <div className="monsterStats">
                <DragonMonsterStats mStyle={monsterStyle.style} monsterHealth={monsterHealth.monsterHealth} monsterName={monsterName.monsterName}/>
            </div>
            <div id="text">
                {text.text}
            </div>
        </div>
        </div>
    )
}

export default DragonHome
