$(document).ready(){
	var totalQuestions = 0;
	var questionNum, percentCorrec; 
	var questionsAndAnswers[0] = questionOne{
		question: 
	}
	function addQuestion(question, ans1, ans2, ans3, ans4, correctAns, ){
		var qAndA={
			questionContent: question, 
			answer1: ans1,
			answer2: ans2,
			answer3: ans3,
			answer4: ans4,
			correctAnswer: correctAns;
		}
		questionsAndAnswers[totalQuestions] = qAndA;
		totalQuestions++;
	}
	function startGame(){
		$('.start-button').click(){

		}
	}	
}