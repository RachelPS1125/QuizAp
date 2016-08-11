$(document).ready(function(){
	var questionOne = {
		question: "What year was Fred Lorz awarded the gold medal for winning the marathon after riding 11 miles of the event in his trainers car?",
		wrongAnswers: ["1912", "1916", "1900", "1920"],
		correctAnswer: "1904",
		explain: "Fred Lorz was a long-distance runner best known for \"winning\" the marathon in the 1904 Summer Olympic Games. At mile 9, Lorz became so tired that he hitched a ride in his trainer's car for the next 11 miles. When the car broke down, Lorz returned to the stadium on foot, where he broke the tape and was considered the winner. Although he initially went along with the victory, he eventually admitted to the stunt, and Thomas Hicks was named the real winner."
	}
	var questionTwo = {
		question: "Which Olympic Athlete did Hitler refuse to shake hands with at the 1936 Olympics?",
		wrongAnswers: ["Major Dhyan Chand", "Carl Lewis", "Helen Stephens", "Tommie Smith"],
		correctAnswer: "Jesse Owens",
		explain: "The 1936 Olympic Games were held in Berlin, Germany, during a time when Adolf Hitler was determined to prove to the world the superiority of the German \"Aryan\" people. Jesse Owens, a black man from Cleveland, Ohio won four gold medals and beat out every single \"Aryan\" in his events. Hitler refused to shake his hand or hand him his medals. The 1936 games are now known to many as the \"Hitler Olympics.\""
	}
	var questionThree = {
		question: "In what sport did Borys Onyshchenko rig the quipment in such a way that he could influence the outcome of his events?",
		wrongAnswers: ["Weight Lifting", "Trap Shooting", "Steeple Chase", "100m Brest Stroke"],
		correctAnswer: "Fencing",
		explain: "One of the most famous, non-drug-related incidents of cheating took place during the fencing portion of the 1976 pentathlon. The judges became suspicious when hits were registering against Borys Onyshchenko's opponent, even when it was obvious he hadn't been hit. Onyshchenko was caught using a sword with a hidden push button circuit breaker. This allowed him to register a hit whenever he wanted."
	}
	var questionFour = {
		question: "THe 1900 olympics were the first to allow women.  What were the first sports women were allowed to compete in?",
		wrongAnswers: ["Track and Field", "Swimming and Cycling", "Gymnastics and Shooting", "Field Hockey and Softball"],
		correctAnswer: "Tennis and Golf",
		explain: "Women first competed at the 1900 Paris Games. Women were allowed to compete in lawn tennis and golf, though there were three French women competing in croquet and there was at least one woman sailor as part of mixed crews. It is commonly believed that first woman to win an Olympic event was England's Charlotte Cooper, who won the tennis singles title, however Swiss sailor Hélène de Pourtalès won a gold medal as part of a team in sailing earlier than this."
	}
	var questionFive = {
		question: "What was the first year the olympics were televised?",
		wrongAnswers: ["1956", "1958", "1962", "1964"],
		correctAnswer: "1960",
		explain: "As the first Olympics ever to be televised and include a brand endorsement by an athlete, the Rome Games ushered in a new era of commercialism and changed the way the world viewed its Olympians.  The Games also spotlighted a negative side of the competition with the first doping scandal, revealing how far some athletes would go to bring home the gold."
	}
	var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
	var questionNum, numCorrect, percentCorrect, currentObject, length;
	
	function startGame(){
		questionNum = 0;
		numCorrect = 0;
		percentCorrect = 0;
		length = questions.length;
		$('.restart').hide();
		$('.start-button').hide();
		$('.information').show();
		$('.number-correct').hide();
		$('.question').show();
		$('.answer-list').show();
		$('.reference').show();
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
		var randomInsert = Math.floor(Math.random()*(answers.length+1));
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
		if (questionNum == length){
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
		}else{
			$('.answer-list').show();
			displayQuestion(questions[questionNum]);
			questionNum++;
		};
	});
	$('.restart').click(function(){
		startGame();
		displayQuestion(questions[questionNum]);
		questionNum++;
	});

});