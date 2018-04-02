//Create the timer for the game for 60 seconds
//Create a varible called timer to how clock.
//Create a variable that will how a boolean false value in order to stop the clock.

var intervalID;

var clockRunning = false;

$(document).ready(function () {

    var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

    

    // function start() {
    //     if (!clockRunning) {
    //         intervalID = setInterval(count, 1000);
    //         clockRunning = true;
    //         $("#Timer").append(intervalID);
    //     }
    // }

    var q1 = {
        question : 'Who won the NBA Title in 2016?',
        possibleAnswers : ['A. Cleveland Cavaliers',
                     'B. Miami Heat',
                     'C. Golden State Warriors',
                     'D. Boston Celtics'],
        flags : [true, false, false, false],
        answer : 'A. Cleveland Cavaliers'
    };
    
    var q2 = {
        question: 'Who is the all time leader in TD passes?',
        possibleAnswers: ['A. Tom Brady',
                     'B. Brett Favre',
                     'C. Peyton Manning',
                     'D. John Elway'],
        flags : [false, false, true, false],
        answer : 'C. Peyton Manning'
    };
    
    var q3 = {
        question : 'Which team has the most NBA titles in History?',
        possibleAnswers : ['A. Los Angeles Lakers',
                     'B. Boston Celtics',
                     'C. Chicago Bulls',
                     'D. San Antanio Spurs'],
        flags : [false, true, false, false],
        answer : 'B. Boston Celtics'
    };
    
    var q4 = {
        question : 'Who led the NFL in rushing yards in 2017?',
        possibleAnswers : ['A. Ezelieh Elliot',
                     'B. David Johnson',
                     'C. Leveon Bell',
                     'D. Todd Gurley'],
        flags : [true, false, false, false],
        answer : 'A. Ezelieh Elliot'
    };
    
    var questionArray = [q1, q2, q3, q4,];

    // var count = 60, time = setInterval(function() {
    //     $("#startTimer").html(count--);
    //     if(count == 1) clearInterval(time);
    // }, 1000);
    // $("#startTimer").text("Time Remaining: ");

    function loadQuestion(questionSelection) {
        console.log(questionSelection);
        countdownTimer.reset();
      $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
      $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
      $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
      $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
      $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
    //  getAnswer();  
    //  nextQuestion(index);
    }
    
    //function nextQuestion() {
    //	index = index++;
    //	console.log(index);
    //}
    
    function setup() {
        index = 0;
        $('.question').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function() {
            $(this).hide();
            countdownTimer.start();
             loadQuestion(index);
        });
    }		
    
    function getAnswer() {
    
    //  nextQuestion();
        $('.answerchoice').on('click', function() {
          console.log('alert', index);
            index++;
            console.log('click', index);
            $(".question").text('');
            $("#buttonA").text('');
            $("#buttonB").text('');
            $("#buttonC").text('');
            $("#buttonD").text('');
            loadQuestion();
        })
    }
    
    function answerCorrect() {
        correct++;
        alert("Correct!");
        console.log("correct");
    }
    
    function answerWrong() {
        wrong++;
        alert("Incorrect!");
        console.log("wrong");
    }
    
    function showScore() {
        $('.question').empty();
        $('.question').append("<h2><p>" + correct + " correct</p></h2>");
        $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();
    
    }

    setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

})