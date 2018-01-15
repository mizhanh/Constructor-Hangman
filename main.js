var chosenWord = require("./randomword.js");
var Word = require("./word.js");
var inquirer = require("inquirer");
var chalk = require("chalk");
var randomWord = chosenWord();
var myWord = new Word(randomWord);


console.log(chalk.blue("==========================================================="));
console.log(chalk.blue.bold("H A N G M A N  T I M E!"));
console.log(chalk.blue("Rule: You have ") + chalk.red.bold(myWord.remainLives) + chalk.blue(" guesses before the game is over."));
console.log(chalk.blue("Let's Play!"));
console.log(chalk.blue("==========================================================="));

function startGame() {
    console.log("Play Word Is : " + myWord + "\n");
    if (myWord.remainLives <= 0) {
        console.log(chalk.blue.bold('Oops! You have no lives left!'));
        console.log('The correct word is: ' + chalk.blue.bold(randomWord) + '\n');
        playAgain();
    } else {
        playGame();
    }
}

function playGame() {
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Enter a letter:',
    }]).then(function(letterInput) {
        var letter = letterInput.letter;
        myWord.guessLetter(letter);
        if (myWord.isComplete()) {
            console.log('Yahoo! You Got It! : ' + chalk.blue.bold(myWord.toString()) + '\n');
            playAgain();
        } else {
            console.log('Lives Left: ' + chalk.red.bold(myWord.remainLives) + '\n');
            startGame();
        }

    });
}

function playAgain() {
    inquirer.prompt([{
        name: "confirm",
        type: "confirm",
        message: "Do you want to play again?"

    }]).then(function(answer) {
        if (answer.confirm === true) {
            newWord();
            console.log('\n');
            console.log('You have ' + chalk.red.bold(myWord.remainLives) + ' guesses for this word.\n');
            startGame();
        } else {
            console.log("OK. Thanks for playing!\n");
        }
    });
}

function newWord() {
    randomWord = chosenWord();
    myWord = new Word(randomWord);
}

//Start game:
startGame();