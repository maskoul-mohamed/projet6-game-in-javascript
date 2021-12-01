// variables
var randomNumber;
var attempts;
var winMessage;
var showMessage;
var lostMessage;
var attemptsMessage;
var message;

// Saiser : Enter
lostMessage = "C'est raté !!";
showMessage = document.getElementById("message");
attemptsMessage = document.getElementById("attemptsMessage");
randomNumber = Math.floor(Math.random() * 100);
attempts =10;

console.log(randomNumber)


function handleGuess (){

    if(attempts > 1){
        --attempts
        var userInput = document.getElementById("userInput").value;
        // Controle de saiser
        if(isNaN(userInput) || userInput=== undefined){
            alert("Please Enter a Number!")
        } else {
            // Traitment

               if (userInput == randomNumber){
                   if(attempts >= 8){
                       winMessage = 'Bravo, vous etes un Génie !!!'
                   } else {
                       winMessage = "Félicitations, vous avez gagné apres " + (10 - attempts) ;
                   }
                   showMessage.innerHTML = winMessage

               } else 
                    if (userInput > randomNumber){
                        showMessage.innerHTML = "C'est plus petit que " + userInput + ", essayez plus"
                        attemptsMessage.innerHTML = attempts;
                    }
                    else  {
                        showMessage.innerHTML =  "C'est plus grand  que " + userInput + ", essayez plus"
                        attemptsMessage.innerHTML = attempts;
                    }
                    attemptsMessage.innerHTML = attempts;
                    
                }

        userInput.value = ""
    } else {    
        showMessage.innerHTML = lostMessage
        attemptsMessage.innerHTML = 0;
    }
}






