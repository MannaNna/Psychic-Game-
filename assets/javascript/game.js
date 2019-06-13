// Variables
var secretLetterValue = null;
var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 0;
var lossCounterElement =null;
var winCounterElement = null;
var letterGuessedElement = null;
var guessesLeftElement = null;
var secretLetterElement = null;

window.addEventListener('keydown', function (e) {
    keyPress(e);
   });

// Secret letter function
function generateSecretLetter(){
// Rewrites the HTML with updated values
    winCounterElement = document.getElementById("winCounter");
    lossCounterElement = document.getElementById("lossCounter");
    letterGuessedElement = document.getElementById("letterGuesses");
    guessesLeftElement = document.getElementById("guessesLeft");
    secretLetterElement = document.getElementById("secretLetter");

// Computer randomly chooses a letter
    secretLetterValue = Math.floor( Math.random() * 26) + 65;
    secretLetterElement.innerHTML += String.fromCharCode(secretLetterValue);
    lossCounterElement.innerHTML = lossCounter;
    winCounterElement.innerHTML = winCounter;
    guessesLeftElement.innerHTML = guessesLeft;

    guessesLeft = 9;
    
    console.log("secret letter value is: " + secretLetterValue + " Secret letter is: " + String.fromCharCode(secretLetterValue));
  
}

// Guesses left function executes on every key press
function keyPress(e){
   
    letterGuessedElement.innerHTML += String.fromCharCode(e.keyCode) + " ";
    guessesLeftElement.innerHTML = guessesLeft;

    // If the user and the computer choose the same letter:
    // wins adds 1, guessesLeft is reset to 9
    if(e.keyCode == secretLetterValue){
        winCounter++ ;
        winCounterElement.innerHTML = winCounter;

        console.log("You Win");

        generateSecretLetter();

    } 
    // If user and computer choice are different:
    //guessesLeft decreases 1
    else{
        
        guessesLeft --;
        if(guessesLeft == 0) {

            lossCounter ++;
            guessesLeft = 9;
        
            lossCounterElement.innerHTML = lossCounter;
            letterGuessedElement.innerHTML = " ";

            console.log("You Lose");

            generateSecretLetter();
        }
        
    }

    console.log("key press value is: " + e.keyCode + " The letter value is: " + String.fromCharCode(e.keyCode));

}