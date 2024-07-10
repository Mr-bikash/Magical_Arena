const assert = require('assert');
const Player = require('./Player');

describe('Player Class Tests', () => {
    it('Player creation test', () => {
        const player = new Player('Player A', 50, 5, 10);
        assert.strictEqual(player.name, 'Player A');
        assert.strictEqual(player.health, 50);
        assert.strictEqual(player.strength, 5);
        assert.strictEqual(player.attack, 10);
    });

    it('Player attack test', () => {
        const player = new Player('Player A', 50, 5, 10);
        const damage = player.attackOpponent();
        assert.strictEqual(typeof damage, 'number');
    });

    it('Player defend test', () => {
        const player = new Player('Player A', 50, 5, 10);
        const initialHealth = player.health;
        const damage = player.defendAgainst(50);
        assert.strictEqual(typeof damage, 'number');
        assert(player.health <= initialHealth);
    });
});
