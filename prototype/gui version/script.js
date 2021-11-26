var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber)
var attempts =10;
var lostMessage = "C'est raté !!";



var tentatives = document.getElementById("tentatives");
var message = document.getElementById("message")


function writeattempts () {
    tentatives.innerHTML = attempts;
    console.log(attempts)
}


function onSubmit (){
    --attempts;
    if(attempts > 0){
        var userInput = document.getElementById("deviner-input").value;
        if(isNaN(userInput) ){
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
    
var itIsSmall = "C'est plus petit que " + userInput + ", essayez plus"
var itIsBigger = "C'est plus grand que " + userInput + ", essayez plus"

        if (userInput == randomNumber){
            var winMessage = "Félicitations, vous avez gagné après " + attempts + " tentatives";

            alert(winMessage);
        } else if (userInput > randomNumber){
            message.innerHTML = itIsSmall
            writeattempts() 

        } else if (userInput < randomNumber){
            message.innerHTML = itIsBigger
            writeattempts() 

        }
     
 
}


