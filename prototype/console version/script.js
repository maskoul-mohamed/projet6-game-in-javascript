var randomNumber = Math.floor(Math.random() * 100);

var userInput = prompt("deviner en un nombre entre 0 et 100:");
var attempts = 9;
var winMessage = "Félicitations, vous avez gagné après " + attempts + "tentatives";
var lostMessage = "C'est raté !!";

var itIsSmall = "C'est plus petit que " + userInput + ", essayez plus"
var itIsBigger = "C'est plus grand que " + userInput + ", essayez plus"

function isCorrect() {
    while (attempts > 0){
        if (userInput == randomNumber){
            alert(winMessage);
            break;
        } else if (userInput > randomNumber){
            userInput = prompt("C'est plus petit que " + userInput + ", essayez plus\n" + "tentatives: " +attempts);
            attempts--;
        } else if (userInput < randomNumber){
            userInput = prompt("C'est plus grand que " + userInput + ", essayez plus\n" + "tentatives: " +attempts)
            attempts--;
        }
    }

    if(attempts == 0){
        alert(lostMessage)
    }
}

isCorrect()