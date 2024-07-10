const Player = require('./Player');
const Dice = require('./Dice');

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.dice = new Dice();
    }

    start() {
        let attacker, defender;
        while (this.player1.isAlive() && this.player2.isAlive()) {
            if (this.player1.health < this.player2.health) {
                attacker = this.player1;
                defender = this.player2;
            } else {
                attacker = this.player2;
                defender = this.player1;
            }
            this.playTurn(attacker, defender);
        }

        const winner = this.player1.isAlive() ? this.player1 : this.player2;
        console.log(`Game Over! The winner is ${winner.name}`);
    }

    playTurn(attacker, defender) {
        const attackDamage = attacker.attackOpponent();
        const actualDamage = defender.defendAgainst(attackDamage);

        console.log(`${attacker.name} attacks ${defender.name} for ${attackDamage} damage.`);
        console.log(`${defender.name} defends and takes ${actualDamage} damage.`);
        console.log(`${defender.name}'s health is now ${defender.health}.`);
    }
}

module.exports = Game;
