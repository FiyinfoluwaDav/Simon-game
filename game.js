var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Flash animation (simulate fadeIn/fadeOut)
  var button = document.getElementById(randomChosenColour);

  button.style.opacity = "0";
  setTimeout(function () {
    button.style.opacity = "1";
  }, 100);
  setTimeout(function () {
    button.style.opacity = "0";
  }, 200);
  setTimeout(function () {
    button.style.opacity = "1";
  }, 300);

  // Play corresponding sound
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

  //Check when button is pressed
  button.addEventListener('click',function(){
    userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
  })
}

// Start game when any key is pressed
document.addEventListener("keydown", function() {
  nextSequence();
});
