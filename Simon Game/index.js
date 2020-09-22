var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;


$(document).keypress(function (){
      if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence()
        started = true;
      }
    });


    $(".btn").click(function () {

      var userChosenColor = $(this).attr("id");
      userClickedPattern.push(userChosenColor);

      makeSound(userChosenColor);
      animatePress(userChosenColor);
      checkAnswer(userClickedPattern.length-1);
    });

    function nextSequence() {
      userClickedPattern=[];
      level++;
      $("#level-title").text("Level " + level);
      var randomNumber = Math.floor(Math.random() * 3) + 1;

      var randomChosenColor = buttonColors[randomNumber];
      gamePattern.push(randomChosenColor);

      $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
      makeSound(randomChosenColor);

    }

    function checkAnswer(currentLevel){
        if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
        {
          console.log("success");
          if(gamePattern.length===userClickedPattern.length)
          {
            setTimeout(function(){
              nextSequence();
            },1000);
          }
        }
        else
        {
          console.log("wrong");
          makeSound("wrong");
          $("body").addClass("game-over");
          setTimeout(function(){
            $("body").removeClass("game-over");
          },200);
          $("#level-title").text("Game Over,Press Any Key To Restart");
          startOver();
        }
    }

    function startOver() {
      level=0;
      gamePattern=[];

      started=false;
    }


    function makeSound(name) {
      var audio = new Audio("sounds/" + name + ".mp3");
      audio.play();
    }

    function animatePress(currentColour) {
      $("#" + currentColour).addClass("pressed");
      setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
    }
