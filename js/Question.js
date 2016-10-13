function Question(text, wrongAnswers, rightAnswer, explain) {
  this.question = text;
  this.wrongAnswers = wrongAnswers;
  this.correctAnswer = rightAnswer;
  this.explain = explain;
}

Question.prototype.randomizeAnswers = function() {
  var answers = this.wrongAnswers.concat([]);
  answers = this._randomize(answers);
  var randomInsert = Math.floor(Math.random()*(answers.length+1));
  answers.splice(randomInsert, 0, this.correctAnswer);
  return answers; 
}

Question.prototype._randomize = function(array){
  for (var count = array.length-1; count>=0; count--){
    var randomPosition = Math.floor(Math.random()*count);
    var randomAnswer = array[randomPosition];

    array[randomPosition] = array[count];
    array[count] = randomAnswer;
  };
  return array;
}
