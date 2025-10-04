var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence(){
    randomNumber = Math.floor(Math.random()*buttonColors.length);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
}

document.getElementById(randomChosenColor);