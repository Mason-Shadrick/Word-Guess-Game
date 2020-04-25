
// Array of words to choose from
var words = ["orange", "teal", "pottedfern", "purple", "branches", "leaves", "flower", "bloom", "nature"];

//Variables
var chosenWord = "";
var numLetters = [];
var blank = 0;
var blanksWcorrect = [];
var wrongG = [];

//Counts
var wins = 0;
var losses = 0;
var guessLeft = 12;


//Functions
function Game(){

//Chooses random word
chosenWord = words[Math.floor(Math.random() * words.length)];

//storing chosen word into new array
numLetters = chosenWord.split("");

//find length of word in blanks
blank = numLetters.length;

//loop displaying "_" for each letter
for (var i = 0; i < blank; i++){
    blanksWcorrect.push("_");
}

//display blanks with corect guesses in html
document.getElementById("wordTog").innerHTML = " " + blanksWcorrect.join(" ");

// console
console.log(chosenWord);
console.log(numLetters);
console.log(blank);
console.log(blanksWcorrect);
}

// reset function
function reset(){
    guessLeft = 12
    wrongG = [];
    blanksWcorrect = [];
    Game()
}


//comparing guesses

//checking for letter matches
function letterCheck(letter){
    var letterGuess = false;

    //if letter is in word change to true
    for (var i = 0; i < blank; i++){
        if(chosenWord[i] == letter){
            letterGuess = true;
        }
    }

    //if false
    if(letterGuess){
        for (var i = 0; i < blank; i++){
            if (chosenWord[i] == letter){
                blanksWcorrect[i] = letter;
            }
        }
    }

    //put wrong guess in correct place and subtract from guesses
    else {
        wrongG.push(letter);
        guessLeft--;
    }
    console.log(blanksWcorrect);
}

//did you win???
function winCheck(){
    
    //if win add to win score and reset
    if (numLetters.toString() == blanksWcorrect.toString()){
        wins++;
        reset();
        document.getElementById("wins").innerHTML = " " + wins;
    }

    //if loss add to loss score and reset
    else if (guessLeft === 0){
        loses++;
        reset();
        document.getElementById("losses").innerHTML = " " + losses;
    }

    //show word with blanks filled in and guesses left CD
    document.getElementById("wordTog").innerHTML = " " + blanksWcorrect.join(" ");
    document.getElementById("guessLeft").innerHTML = " " + guessLeft;
}

//run game
Game()

//onkeyup check
document.onkeyup = function(event){
    var guesses = event.key.toLowerCase();

    //runing fuctions
    letterCheck(guesses);
    winCheck();
    //making sure it works right
    console.log(guesses);

    //show wrong letters guessed on screen
    document.getElementById("guessedLet").innerHTML = " " + wrongG.join(" ");
}


