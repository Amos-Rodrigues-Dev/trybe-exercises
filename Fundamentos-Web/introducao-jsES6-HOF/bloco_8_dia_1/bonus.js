const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

function dragonAttack() {
  const min = Math.ceil(15)
  const max = Math.floor(dragon.strength)
  const danoDamage =  Math.floor(Math.random() * (max - min + 1)) + min;
  return danoDamage;
}

function warriorAttack() {
  const min = Math.ceil(warrior.strength);
  const max = Math.floor(warrior.strength * warrior.weaponDmg);
  const danoWarrior = Math.floor(Math.random() * (max - min + 1)) + min;
  return danoWarrior;
}

function mageAttack() {
  const min = Math.ceil(mage.intelligence);
  const max = Math.floor(mage.intelligence * 2);
  const danoMage = Math.floor(Math.random() * (max - min + 1)) + min;
  const lifePoint = {
    damage: danoMage,
    mana: mage.mana - 15
  }
  
  if (mage.mana < 15) {
    danoMage = "Não possui mana suficiente";
    lifePoint.mana = 0;
  }
  return lifePoint;
}

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack();
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack();
    const mageDamage = mageTurnStats.damageDealt;
    const { manaSpent } = mageTurnStats;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  monsterTurn: (monsterAttack) => {
    const dragonDamage = monsterAttack();
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.monsterTurn(dragonAttack);
console.log(gameActions.turnResults());