# Magical Arena

## Overview
This project is a simulation of a magical arena where two players fight until one of them dies. Each player has attributes for health, strength, and attack, and they take turns attacking and defending.

## Running the Project
1. Ensure you have Node.js installed.
2. Clone the repository.
3. Navigate to the project directory.
4. Run `npm install` to install necessary dependencies.
5. Run `node index.js` to start the game.

## Running Tests
1. Ensure you have Node.js installed.
2. Navigate to the project directory.
3. Run `npm install` to install necessary dependencies.
4. Run `npm test` to execute unit tests.

## Project Structure
- `Player.js`: Defines the Player class.
- `Dice.js`: Defines the Dice class.
- `Game.js`: Defines the Game class.
- `index.js`: Entry point to start the game.
- `TestPlayer.js`: Unit tests for the Player class.

## How to Play
- Two players are created with predefined attributes.
- Players take turns attacking and defending.
- The game continues until one player's health reaches 0.
- The player with health remaining wins the game.
