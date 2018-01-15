## Constructor-Hangman

### Description
This is a Hangman command-line game using constructor functions as well as leveraging npm packages to interact with user.  

* Three constructor functions were created:
	* **RandomWord**:  Used to generate a random word from a word array.
	* **Word**: Used to create an object representing the current word the user is attempting to guess.
	* **Letter**: Used for each letter in the current word.  Each letter either displays an underlying character or a blank underscore, depending on whether or not the user has guessed the letter.
* **Inquirer npm** was used for user's input.
* **Chalk npm** was used to prettify displays.


### Game Overview
* A random word will be automatically generated at the start of the game.
* Player will have X guesses to guess the word based on the length of the word.
* If player guesses correctly, the letter will show on the terminal.  Otherwise, it will continue to be hidden and player will lose one live.
* If player runs out of lives and not completed the word or player completed the word correctly, the round will be over.
* Player will have a chance to play again or leave the game.