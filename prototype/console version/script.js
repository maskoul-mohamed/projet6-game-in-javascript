var randomNumber = Math.floor(Math.random() * 100);

var userInput = prompt("deviner en un nombre entre 1 et 100:");
var winMessage = "Félicitations, vous avez gagné après " ;
var lostMessage = "C'est raté !!";

var itIsSmall = "C'est plus petit que " + userInput + ", essayez plus"
var itIsBigger = "C'est plus grand que " + userInput + ", essayez plus"
var reuslt;

function isCorrect() {
        if (userInput == randomNumber){
            reuslt = winMessage;
        } else if (userInput > randomNumber){
            reuslt = itIsSmall
        } else if (userInput < randomNumber){
            reuslt = itIsBigger
        }

        alert(reuslt)
}

isCorrect() 