// alert('Welcome');
// console.log(alert);
var buttonColor = [
    "Red",
    "Blue",
    "Yellow",
    "Green"
]

var gamePattern = [];
var userClickedPattern = [];



// eventlisterner effect
$('#').click(function(){
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
})

function nextSequence(){
    // random button colour
    var randomNumber = Math.floor(Math.random() * 3) + 1; 
    var randomChosenColor = buttonColor(randomNumber);
    gamePattern.push(randomChosenColor);

    // animation effect
    $("#colorbtn" + randomChosenColor).fadeIn(100).fadeOut().fadeIn('slow');

    playSound(randomChosenColor);
}

function playSound(name){

    // sound effect
    var audio = new Audio('sounds/' + name + '.mp3'); // audio_file.mp3
    audio.play();
}

function animatePress(currentColour){

}