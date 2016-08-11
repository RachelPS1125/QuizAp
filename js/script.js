$(document).ready(function(){
	var questionOne = {
		question: "Question1",
		wrongAnswers: ["wrong1", "wrong2", "wrong3", "wrong4"],
		correctAnswer: "correct",
		explain: "explain 1"
	}
	var questionTwo = {
		question: "Question2",
		wrongAnswers: ["wrong1", "wrong2", "wrong3", "wrong4"],
		correctAnswer: "correct",
		explain: "explain 2"
	}
	var questionThree = {
		question: "Question3",
		wrongAnswers: ["wrong1", "wrong2", "wrong3", "wrong4"],
		correctAnswer: "correct",
		explain: "explain 3"
	}
	var questionFour = {
		question: "Question4",
		wrongAnswers: ["wrong1", "wrong2", "wrong3", "wrong4"],
		correctAnswer: "correct",
		explain: "explain 2"
	}
	var questionFive = {
		question: "Question5",
		wrongAnswers: ["wrong1", "wrong2", "wrong3", "wrong4"],
		correctAnswer: "correct",
		explain: "explain 2"
	}
	var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
	var questionNum, numCorrect, percentCorrect, currentObject, length;
	
	function startGame(){
		questionNum = 0;
		numCorrect = 0;
		percentCorrect = 0;
		length = questions.length;
		$('.restart').hide();
		$('.button').hide();
		$('.information').show();
		$('.number-correct').hide();
		$('.question').show();
		$('.answer-list').show();
		$('.total-questions').text(length);
	}
	function randomize(array){
		for (var count = array.length-1; count>=0; count--){
			var randomPosition = Math.floor(Math.random()*count);
			var randomAnswer = array[randomPosition];

			array[randomPosition] = array[count];
			array[count] = randomAnswer;
		};
		return array;
	}
	function randomizeAnswers(currentQuestion){
		var answers = currentQuestion.wrongAnswers;
		answers = randomize(answers);
		var randomInsert = Math.floor(Math.random()*answers.length);
		answers.splice(randomInsert, 0, currentQuestion.correctAnswer);
		return answers; 
	}
	function displayQuestion(currentQuestion){
		var displayAnswers = randomizeAnswers(currentQuestion);
		currentObject = currentQuestion;

		$('.question-num').text(questionNum+1);
		$('.question').text(currentQuestion.question);
		$('.explanation').text(currentQuestion.explain);
		$('.answer-one').text(displayAnswers[0]);
		$('.answer-two').text(displayAnswers[1]);
		$('.answer-three').text(displayAnswers[2]);
		$('.answer-four').text(displayAnswers[3]);
		$('.answer-five').text(displayAnswers[4]);
	}
	function calcPercent(questionNum, numCorrect){
		percentCorrect = ((numCorrect/questionNum)*100);
		$('.number-correct').show();
		$('.percent-correct').text(percentCorrect.toFixed(1));
	}

	$('.start-button').click(function(){
		startGame();
		displayQuestion(questions[questionNum]);
		questionNum++;
	});
	$('.answer-list').children().click(function(event){
		var clickedOn = (event.target).innerHTML
		if (clickedOn.includes(currentObject.correctAnswer) == true){
			numCorrect++;
			$('.question').text("Correct!")
		}else{
			$('.question').text("Wrong!")
		};
		calcPercent(questionNum, numCorrect);
		$('.answer-list').hide();
		$('.next').show();
		$('.explanation').show();
	});
	$('.next').click(function(){
		$('.next').hide();
		$('.explanation').hide();
		$('.answer-list').show();
		displayQuestion(questions[questionNum]);
		questionNum++;
		console.log(questionNum);
		if (questionNum == 5){
			$('.answer-list').hide();
			$('.restart').show();
			if (percentCorrect < 50){
				$('.question').text("You need to work on your knowledge.")
			}
			else if (percentCorrect > 70){
				$('.question').text("Wow! You really know your olympic history!")
			}else{
				$('.question').text("So/So Performance, not impressed.")
			};
		}
	});
	$('.restart').click(function(){
		startGame();
		displayQuestion(questions[questionNum]);
		questionNum++;
	});

});