# Speedgame

## speedgame_react

Speedgame is a refactored version of the [speedgame](https://github.com/JerryUusis/speedgame) project that was written in vanilla JS. The goal of the project is to refactor it using React.

## Technologies used

- React
- JavaScript
- CSS

## Features

### New Game Setup

- Start a new game by entering the player's name and selecting the difficulty level.

### Alert System

- Display alerts for user interactions, such as providing a warning when the player attempts to start the game without entering their name.

### Gameplay

- Click on circles that appear on the screen during the game to earn points.
- The game dynamically adjusts difficulty by changing the pace of circle appearances after each succesful click by 5 milliseconds.

### Scoring

The player's score is continuously updated during the game.
Different score messages based on the player's performance (e.g., "Yritä uudelleen," "Nopea," "Ällistyttävä").

### Game Over Modal

- Display a modal with game statistics and a score message when the game ends.

- Modal includes the player's name, difficulty level, final score, and a personalized score message.

### Results Table

- View a table of previous game results, including the player's name, score, and difficulty level.

### Game logic
- Circles are generated randomly during the game, providing a dynamic and unpredictable experience.
- Rounds are limited, and the game stops after three missed clicks of rounds or after clicking a wrong circle.
- A timer controls the pace of circle appearances.
- Easy, Medium, and Hard Difficulty Levels:
Choose from three difficulty levels: 
- "Helppo" (Easy) 3 circles
- "Keskivaikea" (Medium) 5 circles
- "Vaikea" (Hard) 7 circles

## How to Install and Use
### Prerequisites
Node.js installed on your machine. You can download it [here](https://nodejs.org/en).

### Installation:
Clone the repository

Copy code
```bash
git clone https://github.com/your-username/speedgame_react.git
```
Navigate to the project directory:

```bash
cd speedgame_react
```
Install dependencies

```bash
npm install
```
Usage:
Start the application:

```bash
run npm dev
```

Open your browser and visit http://localhost:3000 to use the Speedgame React application.