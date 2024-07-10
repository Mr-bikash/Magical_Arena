const Player = require('./Player');
const Game = require('./Game');

const player1 = new Player('Player A', 50, 5, 10);
const player2 = new Player('Player B', 100, 10, 5);

const game = new Game(player1, player2);
game.start();
