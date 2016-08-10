$(document).ready(function(){
	
	var questionOne = {
		question: "Question1",
		wrongAnswers: ["wrong1", "wrong2", "wrong3", "wrong4"],
		correctAnswer: "correct"
	}
	var questionTwo = {
		question: "Question2",
		wrongAnswers: ["wrong1", "wrong2", "wrong3", "wrong4"],
		correctAnswer: "correct"
	}
	var questionThree = {
		question: "Question3",
		wrongAnswers: ["wrong1", "wrong2", "wrong3", "wrong4"],
		correctAnswer: "correct"
	}
	var questionFour = {
		question: "Question4",
		wrongAnswers: ["wrong1", "wrong2", "wrong3", "wrong4"],
		correctAnswer: "correct"
	}
	var questionFive = {
		question: "Question5",
		wrongAnswers: ["wrong1", "wrong2", "wrong3", "wrong4"],
		correctAnswer: "correct"
	}

	function startGame(){
		$('.button').hide();
		$('.count').show();
		$('.question').show();
		$('.answer-list').show();
		$('.correct').show();
	}

	function randomizeAnswers(currentQuestion){
		var answers = currentQuestion.wrongAnswers;
		var randomInsert = Math.floor(Math.random()*answers.length);

		for (var count = answers.length-1; count>=0; count--){
			var randomPosition = Math.floor(Math.random()*count);
			var randomAnswer = answers[randomPosition];

			answers[randomPosition] = answers[count];
			answers[count] = randomAnswer;
		}

		answers.splice(randomInsert, 0, currentQuestion.correctAnswer);

		return answers; 
	}

	function displayQuestion(currentQuestion){
		var questionContent = currentQuestion.question;
		var displayAnswers = randomizeAnswers(currentQuestion);
		$('.answer-one').text(displayAnswers[0]);
		$('.answer-two').text(displayAnswers[1]);
		$('.answer-three').text(displayAnswers[2]);
		$('.answer-four').text(displayAnswers[3]);
		$('.answer-five').text(displayAnswers[4]);
	}

	$('.start-button').click(function(){
		startGame();
		displayQuestion(questionOne);
	});

});