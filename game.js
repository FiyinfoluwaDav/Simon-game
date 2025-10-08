var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

// Start game when any key is pressed
document.addEventListener("keydown", function() {
  nextSequence();
});

function nextSequence() {
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
  });
});

//Funtion to play sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
    var pressedButton = document.getElementById(currentColor);
    pressedButton.classList.add('pressed');
    setTimeout(()=> {pressedButton.classList.remove('pressed');},100);
}

