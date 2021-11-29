var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber)
var winMessage = "Félicitations, vous avez gagné!";
var itIsSmall;
var itIsBigger;
var userInput;

var message = document.getElementById("message")



function onSubmit (){
    userInput = document.getElementById("deviner-input").value;
    itIsSmall = "C'est plus petit que " + userInput + ", essayez plus"
    itIsBigger = "C'est plus grand que " + userInput + ", essayez plus"

    if (userInput == randomNumber){
        message.innerHTML = winMessage;

    } else if (userInput > randomNumber){
        message.innerHTML = itIsSmall

    } else if (userInput < randomNumber){
        message.innerHTML = itIsBigger

        }
        
    userInput.value = "" 
}




