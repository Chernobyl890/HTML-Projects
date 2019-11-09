// Shane Irons - November 8, 2019 - Saint Leo University

// Global variables for wins and draw
var UserWins = 0;
var ComputerWins = 0;
var Draws = 0;

//============================================================================
// Reset button that resets the score and reloads the page
//============================================================================
function resetGame() {
  UserWins = 0;
  ComputerWins = 0;
  Draws = 0;
  document.getElementById("usertxt").value = "No Games So Far";
  window.location.reload();

}

//============================================================================
// PlayerClick function that gets user click input on a picture
// rock, paper, or scissor and calculates a Computer move to play
// against the player.
//============================================================================
function playerClick() {
console.log(this.src);
var playerMoveNumber = 0;
document.getElementById("playermove").src = this.src;
if (this.id== "rockpic") playerMoveNumber=1;
if (this.id== "paperpic") playerMoveNumber=2;
if (this.id== "scissorspic") playerMoveNumber=3;


let computerMoveNumber = Math.floor(Math.random() * 3) + 1;
let computerMoveSource = "";
if (computerMoveNumber<2){
  computerMoveSource = document.getElementById("rockpic").src;
}else if (computerMoveNumber==2){
  computerMoveSource = document.getElementById("paperpic").src;
}else{
  computerMoveSource = document.getElementById("scissorspic").src;
}
console.log(computerMoveNumber);

document.getElementById("computermove").src = computerMoveSource

// Winner Determined and Draw Determined and User/Computer win stored

if (playerMoveNumber == computerMoveNumber) {
  window.alert("It's a tie!");
  Draws++;
} else {
  if (playerMoveNumber==1) {
    // User choose rock

    if (computerMoveNumber==3) {
      //comp scissor
      window.alert("player win!")
      UserWins++;
    }
    else  {
      //comp paper
      window.alert("Computer wins!")
      ComputerWins++;
    }


  }
  else if (playerMoveNumber==2) {
    // User choose paper

    if (computerMoveNumber==1) {
      //comp rock
      window.alert("Player Wins!")
      UserWins++;
    }
    else  {
      //comp scissors
      window.alert("Computer wins!")
      ComputerWins++;
    }

}
else{
// user scissor
  if (computerMoveNumber==1) {

    window.alert("Computer Win!")
    ComputerWins++;
  } else {
    window.alert("Player Wins!")
    UserWins++;
  }

}

}

// Display score in box on right side of window
let outText = document.getElementById("usertxt");
outText.value = "User: "+UserWins+" / Computer: "+ComputerWins+
" / Draws: "+Draws;


}

//============================================================================
// init() function adding event listeners for each picture and running the
// reset button that resets score and reloads window. 
//============================================================================
function init() {
  console.log("connected");
  let myPicture = document.getElementById("rockpic");
  myPicture.addEventListener('click', playerClick);

  myPicture = document.getElementById("paperpic");
  myPicture.addEventListener('click', playerClick);

  myPicture = document.getElementById("scissorspic");
  myPicture.addEventListener('click', playerClick);

  document.getElementById("usertxt").value = "No Games So Far";

let myButton = document.getElementById("rst");
  myButton.addEventListener('click', resetGame);

}
