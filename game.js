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
    checkAnswer(userClickedPattern.length - 1);//Can I also use checkAnswer(userClickedPattern[-1]); 
  });
});

//Funtion to play sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Function to animate press
function animatePress(currentColor){
    var pressedButton = document.getElementById(currentColor);
    pressedButton.classList.add('pressed');
    setTimeout(()=> {pressedButton.classList.remove('pressed');},100);
}

function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("Success");    
    if(gamePattern.length=== userClickedPattern.length){
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  }else{
    console.log("Wrong");
  }
}

