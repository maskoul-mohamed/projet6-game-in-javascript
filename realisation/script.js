// variables
var randomNumber;
var attempts;
var attempsOutput;
var winMessage;
var itIsSmall;
var itIsBigger;
var lostMessage;
var attemptsMessage;
var message;

// Saiser : Enter
lostMessage = "C'est raté !!";
message = document.getElementById("message");
attemptsMessage = document.getElementById("attemptsMessage");
randomNumber = Math.floor(Math.random() * 100);
attempts =10;




function onSubmit (){
    --attempts;
    attempsOutput = 10 - attempts;

    if(attempts > 0){
        var userInput = document.getElementById("userInput").value;
        // Controle de saiser
        if(isNaN(userInput) || userInput=== undefined){
            alert("Please Enter a Number!")
        } else {
            // Traitment
            itIsSmall = "C'est plus petit que " + userInput + ", essayez plus"
            itIsBigger = "C'est plus grand que " + userInput + ", essayez plus"
               if (userInput == randomNumber){
                   if(attempts >= 8){
                       winMessage = 'Bravo, vous etes un Génie !!!'
                   } else {
                       winMessage = "Félicitations, vous avez gagné apres " + attempsOutput ;
                   }
                   message.innerHTML = winMessage
       
               } else 
                    if (userInput > randomNumber){
                        message.innerHTML = itIsSmall
                        attemptsMessage.innerHTML = attempts;
                    }
                    else  {
                    message.innerHTML = itIsBigger
                    attemptsMessage.innerHTML = attempts;
                    }
            
                }
        userInput.value = ""
    } else {
        message.innerHTML = lostMessage
        attemptsMessage.innerHTML = 0;
    }
}






function isCorrect(userInput) {
        
    
 
}


