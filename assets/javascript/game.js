var wins = 0, losses = 0;
var alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

function newGame() {
    var guessList = [];
    var compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    left = 10;
    document.getElementById("left").innerHTML = left;
    document.getElementById("user-list").innerHTML = guessList;
    document.getElementById("win").innerHTML = wins;
    document.getElementById("loss").innerHTML = losses;

    document.onkeyup = function (event) {
        var userInput = event.key.toLowerCase();
        if (userInput == compChoice) {
            wins++;
            console.log(wins);
            console.log("you are right! wins: " + wins);
            newGame();
        } else {
            if (!guessList.includes(userInput)) {
                guessList.push(userInput);
                left = left - 1;
                document.getElementById("user-list").innerHTML = guessList;
                document.getElementById("left").innerHTML = left;
                if (left == 0) {
                    losses++;
                    newGame();
                }
            }
        }
    }
}
