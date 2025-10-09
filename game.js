var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

// Start game when any key is pressed
var gameStart = false;
document.addEventListener("keydown", function() {
  if(!gameStart){
    gameStart = true;
    nextSequence();
  }
});


function nextSequence() {
  userClickedPattern.length = 0;
  level++;
  document.getElementById('level-title').textContent = 'level '+ level;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Flash animation
  var button = document.getElementById(randomChosenColour);
  button.style.opacity = "0";
  setTimeout(() => { button.style.opacity = "1"; }, 100);
  setTimeout(() => { button.style.opacity = "0"; }, 200);
  setTimeout(() => { button.style.opacity = "1"; }, 300);
  playSound(randomChosenColour);
}

// Attach listener to all buttons once
var buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  });
});

//Funtion to play sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//Function for wrong sound
function wrongSound() {
  var wrongAudio = new Audio("sounds/wrong.mp3");
  wrongAudio.play();
}

//Function for losing
function lostGame() {
    document.body.classList.add('game-over');
    setTimeout(() => {
      document.body.classList.remove('game-over');
    }, 200);
    wrongSound();
    document.getElementById('level-title').textContent = "Game Over, Press Any Key to Restart"; 
}

// Function to animate press
function animatePress(currentColor){
    var pressedButton = document.getElementById(currentColor);
    pressedButton.classList.add('pressed');
    setTimeout(()=> {pressedButton.classList.remove('pressed');},100);
}

//Function to check if the answer is correct
function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("Success");    
    if(gamePattern.length=== userClickedPattern.length){
      setTimeout(() => {
        nextSequence();
      }, 1000);
      
      // if (level < 5) {
      //   document.body.style.backgroundColor = '#011F3F'; // deep blue
      // } else if (level < 10) {
      //   document.body.style.backgroundColor = '#1F1F7F'; // indigo
      // } else if (level < 15) {
      //   document.body.style.backgroundColor = '#4B0082'; // purple
      // } else if (level < 20) {
      //   document.body.style.backgroundColor = '#8B008B'; // magenta
      // } else if (level < 25) {
      //   document.body.style.backgroundColor = '#B22222'; // firebrick red
      // } else if (level < 30) {
      //   document.body.style.backgroundColor = '#FF4500'; // orange-red
      // } else {
      //   document.body.style.backgroundColor = '#FF0000'; // final intense red
      // }

    }
  }else{
    console.log("Wrong");
    lostGame();
    startOver();
  }
}

//Function to restart the game
function startOver(){
  gamePattern.length = 0;
  userClickedPattern.length = 0;
  level = 0;
  gameStart = false;
}

