class Player {
    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    attackOpponent() {
        return this.attack * this.rollDice();
    }

    defendAgainst(damage) {
        const defense = this.strength * this.rollDice();
        const actualDamage = Math.max(0, damage - defense);
        this.health = Math.max(0, this.health - actualDamage);
        return actualDamage;
    }

    isAlive() {
        return this.health > 0;
    }
}

module.exports = Player;
