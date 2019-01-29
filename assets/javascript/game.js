// // My list of words
var cosmicWords = ['andromeda', 'aquarius', 'aquila', 'aries', 'cancer', 'capricornus', 'cassiopeia', 'cygnus', 'gemini', 
'leo', 'lyra', 'orion', 'pisces', 'sagittarius', 'scorpius', 'taurus', 'virgo', 'bootes', 'centauras', 'eridanus'];

// // The word picked from the list
var pWord = "";

// The array of the picked word
var pWordLetters = [];

// Number of blanks to show for the word
var blankNum = 0;
var numBlanks = 0;


// Number of blanks and letters guessed correctly
var blanksAndLetters = [];

// Wrong guess array
var wrongGuess = [];

// Game Counters
var wins = 0;
var losses = 0;
var guessLeft = 10;

// Functions
function beginGame (){
guessLeft = 10;
pWord = cosmicWords[Math.floor(Math.random()*cosmicWords.length)];
pWordLetters = pWord.split("");
blankNum = pWordLetters.length;
console.log(blankNum);
console.log('The word picked', pWord);
blanksAndLetters = [];
wrongGuess = [];
for (var i=0; i < blankNum; i++){
    blanksAndLetters.push("_");
    }
    console.log(blanksAndLetters);    

document.getElementById("guesses-left").innerHTML = guessLeft;
document.getElementById("word-blanks").innerHTML = blanksAndLetters.join(" ");
document.getElementById("wrong-guesses").innerHTML = wrongGuess.join(" ");
}
// Check the letters for a match
function letterCheck(letter){
let letterExist = false;
// Check to see if the letter is in the word
for ( let i=0; i < blankNum; i++){
    if(pWordLetters[i]===letter){
    letterExist = true;
    }    
}
// If the letter exists then we want to see where it is in the word
if (letterExist){
    for ( let i=0; i < blankNum; i++){
        if (letter === pWordLetters[i]){
            blanksAndLetters[i]=letter;
        }
    }
}
else {
    wrongGuess.push(letter);
    guessLeft--;
}
}

// End Game
function endRound(){
  console.log("Wins: " + wins + " | Losses: " + losses + " | Guesses: " + guessLeft);

  // Update the HTML to new number of guesses. 
  document.getElementById("guesses-left").innerHTML = guessLeft;
  // print the array of letters and blanks on the page.
  document.getElementById("word-blanks").innerHTML = blanksAndLetters.join(" ");
  // print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuess.join(" ");

    if (blanksAndLetters.toString() === pWordLetters.toString()){
        wins++;
        alert("YOU WIN!");
        document.getElementById("wins").innerHTML = wins;
        beginGame();    
    }
    else if (guessLeft == 0){
        losses++;
        alert ("You Loser")
        beginGame();
    }
 
}

// Run the functions

beginGame();

document.onkeyup = function (event){
    console.log(event.key);
    let letterPAny = event.keyCode;
    console.log(letterPAny);
    if (letterPAny > 64 && letterPAny < 91 || letterPAny > 96 && letterPAny < 123){
        let letterPressed = String.fromCharCode(letterPAny).toLowerCase();
        letterCheck(letterPressed);
        endRound();
    }
    else
    alert('Please press a letter');
}

