var randomNumber;
var attempts;
var attempsOutput;
var winMessage;
var itIsSmall;
var itIsBigger;

var lostMessage;
var attemptsMessage;
var message;


lostMessage = "C'est raté !!";
message = document.getElementById("message");
attemptsMessage = document.getElementById("attemptsMessage");
randomNumber = Math.floor(Math.random() * 100);
attempts =10;

function writeattempts () {
    attemptsMessage.innerHTML = attempts;
    console.log(attempts)
}


function onSubmit (){
    --attempts;
    attempsOutput = 10 - attempts;

    if(attempts > 0){
        var userInput = document.getElementById("userInput").value;
        console.log(userInput)
        if(isNaN(userInput) || userInput=== undefined){
            alert("Please Enter a Number!")
        } else {
            isCorrect(userInput)
        }
        userInput.value = ""
    } else {
        message.innerHTML = lostMessage
        attemptsMessage.innerHTML = 0;
    }
}






function isCorrect(userInput) {
        
     itIsSmall = "C'est plus petit que " + userInput + ", essayez plus"
     itIsBigger = "C'est plus grand que " + userInput + ", essayez plus"
        if (userInput == randomNumber){
            if(attempts >= 8){
                winMessage = 'Bravo, vous etes un Génie !!!'
            } else {
                winMessage = "Félicitations, vous avez gagné apres " + attempsOutput ;
            }
            message.innerHTML = winMessage

        } else if (userInput > randomNumber){
            message.innerHTML = itIsSmall
            writeattempts() 

        } else if (userInput < randomNumber){
            message.innerHTML = itIsBigger
            writeattempts() 

        }
     
 
}


