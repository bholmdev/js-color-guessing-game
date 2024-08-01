const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];

function runGame() {
    const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
    const target = COLORS_ARRAY[targetIndex]
    console.log(COLORS_ARRAY[targetIndex]);

    let guess = "";
    let correct = false;
    let numTries = 0;

    do {
        guess = prompt("I am thinking of one of these colors:\n\n" + COLORS_ARRAY + "\n\nWhat color am I thinking of?\n");

        ++numTries;

        if (guess === null) {
            alert("Giving up already?");
            return
        }

        correct = checkGuess(guess, target)
    } while (!correct)

    alert("Congratulations! You guessed the correct color of " + target  + ".\n\nYou guessed it in " + numTries + " tries!");
}

function checkGuess(guess, target) {
    let correct = false;

    if (!COLORS_ARRAY.includes(guess)) {
        alert("Please choose one of the following colors:\n\n" + COLORS_ARRAY + "...");
    } else if (guess > target) {
        alert("Your color is alphabetically lower than the target color.");
    } else if (guess < target) {
        alert("Your color is alphabetically higher than the target color.");
    } else {
        correct = true
    }
    return correct
}