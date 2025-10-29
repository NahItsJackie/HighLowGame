let gameModeChoice;
let targetNumber;
let playerGuess;
let success = false;
let cnt = 0;

function initHighLowGame(gameMode) {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    gameModeChoice = gameMode;
    success = false;
    cnt = 0;

    window.alert("🎮 Welcome to the High-Low Number Guessing Game!");
    window.alert("I'm thinking of a number between 1 and 100...");
    
    playHighLowGame();
}

function playHighLowGame() {
    while (!success) {
        if (gameModeChoice == 'hard' && cnt == 10) {
            window.alert("Whomp whomp. You lose. Too many failed attempts.");
            success = true;
        }
        else {
            playerGuess = parseInt(window.prompt("Guess a number between 1 and 100"));

            if (playerGuess > 0 && playerGuess <= 100) {
                console.log("The entered value is a number:", playerGuess);
                // Proceed with using the numerical value.
                if (playerGuess == targetNumber) {
                    window.alert("You won!");
                    success = true;
                }
                else if (playerGuess > targetNumber) {
                    cnt++;
                    if (playerGuess <= targetNumber + 5) {
                        window.alert("🔥 Very close! But a little too high.")
                    } else {
                        window.alert("Your guess is too high");
                    }
                }
                else if (playerGuess < targetNumber) {
                    cnt++;
                    if (playerGuess >= targetNumber - 5) {
                        window.alert("🔥 Very close! But a little low.")
                    } else {
                        window.alert("Your guess is too low");
                    }
                }
            } else {
                window.alert("The entered value is not a valid number.");
            }
        }
    }
    playAgain(gameModeChoice);
}

function playAgain(gameMode) {
    let playAgainPrompt = window.confirm("Would you like to play again?");
    if (playAgainPrompt == true) {
        initHighLowGame(gameMode);
    }
    else {
        window.alert("Thanks for playing.");
        return;
    }
}