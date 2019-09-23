console.log("javascript is loaded")

// Create all my variables for game logic
// computer guess variable
var compGuess = "";

//wins (number)
var wins = 0;

//losses (number)
var losses = 0;

// guesses that are left (number)
var userGuesses = 10;


//letters already guessed (array)
var alreadyGuessed = [];

//computer choices bank (array of the alphebet)

var alphaArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//create a function to start/reset the game
function newGame() {

  //reset important game variables
  // How many guessesLeft back to 10
  userGuesses = 10;
  // reset the lettersAlreadyGuessed array
  alreadyGuessed = [];
  $("#alreadyGuessed").empty();
  //  created a random pick for alphabet
  var randomCompGuess = [Math.floor(Math.random() * alphaArray.length)];
  // setting our compGuess = to the random alphabArray letter
  compGuess = alphaArray[randomCompGuess]
  console.log(compGuess)
}


//   Create onkeyup event 
document.onkeyup = function (event) {
  //on every key press you want to push the user guess into the letters guessed array
  var userGuess = event.key;
  // push every leter from the even into our alreadyGuessed array
  alreadyGuessed.push(userGuess);
  //grab element to update page
  //to pass the value of userGuess use the method.text and include the parameter that is passed
  $("#alreadyGuessed").append(userGuess);

  //THIS IS YOUR WIN CONDITION!!!
  // Start if statements for your win;if the user's letter
  if (userGuess === compGuess.toLowerCase()) {
    // increase wins by 1
    wins++;
    // run reset function you wrote above
    newGame();
    // update your HTML here / wins section
    $("#wins").text(wins);
  }
  // else!
  //you also want to decrement your guessesLeft variable and update HTML
  else {
    userGuesses--;
    // update html with userGuessess
    $("#userGuesses").text(userGuesses);
  }

  //THIS IS YOUR LOSS CONDITION
  if (userGuesses === 0) {
    losses++;

    newGame();

    // update our page with lossess using Jquery
  }
  //since you are decrementing the guessesLeft on every keypress your loss condition is here

  //increment losses

  // start a new game using the function you wrote above

  // update your HTML here / wins section
  $("#losses").text(losses);

}

newGame();

   //run new game function,  you start your newgame function or restart whatever you called it here should be the last thing on the page so every time a user logs in it will start a new game.  Let me know if you need help we can always do a zoom session and i can walk you through if you get stuck
