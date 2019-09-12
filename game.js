// function functionName(parameter1, parameter2, parameter3..){
// function statements
// closing the function }


//random generation of a letter - when I get it to link then have to hide generated letter from user
var alphaChoice = ["ABCDEFGHIJKLMNOPSTUWXYZ"];

function alphaGen(len) {

  for (var i = 0; i < computerChoice.length; i++)
    $(".random-letter") = alphaChoice[Math.floor(Math.random()* alphaChoice.length)];

  return random-letter;
}

// Step 1B - Guesses left - counter down from 9 with each keyboard entry

function userGuesses(events) {
  var userguesses = event.key;

  var numGuessLeft = ["9,8,7,6,5,4,3,2,1"];

  for (var i = 9; i > guessLeft.length; i--)
    $("event.key") = "numGuessLeft"[i];

  return userguesses[i];

}

// Step 2 - list out users entries, need to figure out how to record it and list each entry out

function showEntries() {
  var user_guess_array = [];
  var keyPress;
  keyPress = event.keyCode;

  user_guess_array.push(String.fromalphaChoice(keyPress));

  return user_guess_array;
}

// Step 3  - win or loss counts; still figuring out how to refresh
var user_wins = 0;
var user_loss = 0;

if (user_guess_array === "random-letter") {
  function drawScore() {
    user_win++;

    return sum;
  }
} else {
  function drawScore() {
    user_loss++
  }
}
