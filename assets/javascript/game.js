
// Array of words to choose from
var words = ["orange", "teal", "potted fern", "purple", "branches", "leaves", "flower", "bloom", "nature"];

//Variables
var chosenWord = "";
var numLetters = [];
var blank = 0;
var blanksWcorrect = [];
var wrongG = [];

//Counts
var wins = 0;
var loses = 0;
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



// document.onkeyup= function(event) {

// //
// var letterClicked = event.key.toLowerCase();



};

