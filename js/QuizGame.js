function QuizGame(questions) {
  this.questions = questions;
  this.questionNum = 0;
  this.numCorrect = 0;
  this.percentCorrect = 0;
}

QuizGame.prototype.start = function() {
  this.questionNum = 0;
  this.numCorrect = 0;
  this.percentCorrect = 0;
};

QuizGame.prototype.totalQuestions = function() {
  return this.questions.length;
}

QuizGame.prototype.getQuestion = function() {
  return this.questions[this.questionNum++];
}


QuizGame.prototype.checkAnswer = function(answer) {
  if (answer.includes(this.questions[this.questionNum - 1].correctAnswer)) {
    this.numCorrect++;
    this.calculateScore();
    return true;
  } else {
    this.calculateScore();
    return false;
  }
}

QuizGame.prototype.done = function() {
  return this.questionNum === this.questions.length;
}

QuizGame.prototype.getScore = function() {
  if (this.percentCorrect < 50) {
    return "You need to work on your knowledge.";
  } else if (this.percentCorrect > 70){
    return "Wow! You really know your olympic history!";
  } else {
    return "So/So Performance, not impressed.";
  };
}

QuizGame.prototype.calculateScore = function() {
  this.percentCorrect = ((this.numCorrect/this.questionNum)*100);
  return this.percentCorrect;
}
