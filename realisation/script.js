var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber)
var attempts =10;
var attempsOutput;
var winMessage;
var itIsSmall;
var itIsBigger;

var lostMessage = "C'est raté !!";
var tentatives = document.getElementById("tentatives");
var message = document.getElementById("message")


function writeattempts () {
    tentatives.innerHTML = attempts;
    console.log(attempts)
}


function onSubmit (){
    --attempts;
    attempsOutput = 10 - attempts;

    if(attempts > 0){
        var userInput = document.getElementById("deviner-input").value;
        console.log(userInput)
        if(isNaN(userInput) || userInput=== undefined){
            alert("Please Enter a Number!")
        } else {
            isCorrect(userInput)
        }
        userInput.value = ""
    } else {
        message.innerHTML = lostMessage
        tentatives.innerHTML = 0;
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


