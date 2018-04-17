var player1button = document.querySelector("#p1");
var player2button = document.getElementById("p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var player1score = 0;
var player2score = 0;
var gameOver = false;
var winningScore = 5;
var resetButton = document.getElementById("resetButton");
var roundsOption = document.querySelector("input");
var winScoreDisplay = document.querySelector("p span");

//WHEN CLICKING ON PLAYERS' BUTTON.addEventListener(event, function, useCapture)
player1button.addEventListener("click", function(){
  if(!gameOver){
    player1score++;
    if(player1score === winningScore){
      p1display.classList.add("winner");
      gameOver = true;
      }
    p1display.textContent = player1score;
    }
  });
player2button.addEventListener("click", function(){
  if(!gameOver){
    player2score++;
    if(player2score === winningScore){
      p2display.classList.add("winner");
      gameOver = true;
      }
    p2display.textContent = player2score;
    }
  });
resetButton.addEventListener("click", function(){
  // CALLING reset FUNCTION BELOW
  reset();
});
function reset(){
  gameOver = false;
  player1score = 0;
  player2score = 0;
  p1display.textContent = 0;
  p2display.textContent = 0;
  p1display.classList.remove("winner");
  p2display.classList.remove("winner");
}
// "CHANGE" WILL RUN ANYTIME AN EVENT CHANGES REGARDLESS OF A "CLICK" OR NAH
roundsOption.addEventListener("change", function(){
  winScoreDisplay.textContent = roundsOption.value;
  // TURNING roundsOption INTO A STRING
  winningScore = Number(roundsOption.value);
  reset();
});