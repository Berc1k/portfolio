const fighterOne = "fighterOne";
const fighterTwo = "fighterTwo";
const spriteAnimationLength = 800;
oopClassList = {
  attack: "attack",
  fighterHit: "fighterHit",
  miss: "miss",
};

const restrictValue = (id) => {
  const fields = ["fOneAtk", "fOneDef", "fOneSpd"].includes(id)
    ? ["fOneAtk", "fOneDef", "fOneSpd"]
    : ["fTwoAtk", "fTwoDef", "fTwoSpd"];
  const max = 100;
  const a = parseFloat(getById(fields[0]).value) || 0;
  const b = parseFloat(getById(fields[1]).value) || 0;
  const c = parseFloat(getById(fields[2]).value) || 0;
  if (a + b + c > max || a < 0) {
    getById(id).value = 0;
  }
};

const getSpriteDelay = (i, shifts) => {
  const shift = (spriteAnimationLength / shifts) * (i + 1);
  return shift;
};
const getFighterStats = (isPlyOne) => {
  const [atk, def, spd] = isPlyOne
    ? ["fOneAtk", "fOneDef", "fOneSpd"]
    : ["fTwoAtk", "fTwoDef", "fTwoSpd"];

  return {
    atk: parseFloat(getById(atk).value || 0),
    def: parseFloat(getById(def).value || 0),
    spd: parseFloat(getById(spd).value || 0),
  };
};

const startBattle = () => {
  const fighterOneStats = getFighterStats(true);
  const fighterTwoStats = getFighterStats(false);

  const fighter = new Fighter(
    fighterOne,
    "fighterOneHp",
    fighterOneStats.atk,
    fighterOneStats.def,
    fighterOneStats.spd,
    "palyer one"
  );

  const fighter2 = new Fighter(
    fighterTwo,
    "fighterTwoHp",
    fighterTwoStats.atk,
    fighterTwoStats.def,
    fighterTwoStats.spd,
    "player two"
  );

  const battle = new BattleFiled(fighter, fighter2);
  battle.fight(fighter, fighter2);
};

class Fighter {
  hp = 100;
  spriteWidth = 5.82;
  spriteImagesShifts = 17;
  constructor(id, hpId, atk, def, speed, name) {
    this.id = id;
    this.hpId = hpId;
    this.atk = atk;
    this.def = def;
    this.speed = speed;
    this.name = name;
  }
  positionSprite(accShift) {
    getById(this.id).style.backgroundPosition = `${accShift}%`;
  }
  positionFighterToAttack() {
    getById(this.id).classList.add(oopClassList.attack);
  }
  directHit() {
    getById(this.id === fighterOne ? fighterTwo : fighterOne).classList.add(
      oopClassList.fighterHit
    );
  }
  animateHitMiss() {
    getById(this.id === fighterOne ? fighterTwo : fighterOne).classList.add(
      oopClassList.miss
    );
  }
  retreatFighter() {
    setTimeout(() => {
      getById(this.id).classList.remove(oopClassList.attack);
      getById(
        this.id === fighterOne ? fighterTwo : fighterOne
      ).classList.remove(oopClassList.fighterHit);
      getById(
        this.id === fighterOne ? fighterTwo : fighterOne
      ).classList.remove(oopClassList.miss);
    }, 1000);
  }
  animateAtk() {
    this.positionFighterToAttack();
    let accShift = this.spriteWidth;
    for (let i = 0; i < this.spriteImagesShifts; i++) {
      setTimeout(() => {
        this.positionSprite(accShift);
        accShift += this.spriteWidth;
      }, getSpriteDelay(i, this.spriteImagesShifts));
    }
    setTimeout(() => {
      this.directHit();
    }, 300);
  }
  animateMiss() {
    this.positionFighterToAttack();
    let accShift = this.spriteWidth;
    for (let i = 0; i < this.spriteImagesShifts; i++) {
      setTimeout(() => {
        this.positionSprite(accShift);
        accShift += this.spriteWidth;
      }, getSpriteDelay(i, this.spriteImagesShifts));
    }
    setTimeout(() => {
      this.animateHitMiss();
    }, 300);
  }
}

class BattleFiled {
  constructor(fighterOne, fighterTwo) {
    this.fighterOne = fighterOne;
    this.fighterTwo = fighterTwo;
  }
  wasHit(defendingFighter) {
    return Math.random() > defendingFighter.speed / 100;
  }

  decreaseHitPoint(attackingFighter, defendingFighter) {
    let differnce = attackingFighter.atk - defendingFighter.def;
    if (differnce <= 0) {
      differnce = 5;
    }
    defendingFighter.hp -= differnce;
    setTimeout(() => {
      getById(defendingFighter.hpId).innerText = defendingFighter.hp;
    }, 300);
  }

  fight(attackingFighter, defendingFighter) {
    let complete = false;
    const wasHit = this.wasHit(defendingFighter);
    if (wasHit) {
      attackingFighter.animateAtk();
      this.decreaseHitPoint(attackingFighter, defendingFighter);
      if (defendingFighter.hp <= 0) {
        this.resetGame(attackingFighter, defendingFighter);
        complete = true;
      }
    } else {
      attackingFighter.animateMiss();
    }
    attackingFighter.retreatFighter();
    if (!complete) {
      setTimeout(() => {
        this.fight(defendingFighter, attackingFighter);
      }, 1500);
    }
  }
  resetGame(attackingFighter, defendingFighter) {
    setTimeout(() => {
      alert(`The winning player is ${attackingFighter.name}`);
      attackingFighter.hp = 100;
      defendingFighter.hp = 100;
      getById(defendingFighter.hpId).innerText = defendingFighter.hp;
      getById(attackingFighter.hpId).innerText = attackingFighter.hp;
    }, 1000);
  }
}
