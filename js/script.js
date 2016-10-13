$(document).ready(function(){

  var questionOne = new Question(
    "What year was Fred Lorz awarded the gold medal for winning the marathon after riding 11 miles of the event in his trainers car?",
    ["1912", "1916", "1900", "1920"],
    "1904",
    "Fred Lorz was a long-distance runner best known for \"winning\" the marathon in the 1904 Summer Olympic Games. At mile 9, Lorz became so tired that he hitched a ride in his trainer's car for the next 11 miles. When the car broke down, Lorz returned to the stadium on foot, where he broke the tape and was considered the winner. Although he initially went along with the victory, he eventually admitted to the stunt, and Thomas Hicks was named the real winner."
  );

  var questionTwo = new Question(
    "Which Olympic Athlete did Hitler refuse to shake hands with at the 1936 Olympics?",
    ["Major Dhyan Chand", "Carl Lewis", "Helen Stephens", "Tommie Smith"],
    "Jesse Owens",
    "The 1936 Olympic Games were held in Berlin, Germany, during a time when Adolf Hitler was determined to prove to the world the superiority of the German \"Aryan\" people. Jesse Owens, a black man from Cleveland, Ohio won four gold medals and beat out every single \"Aryan\" in his events. Hitler refused to shake his hand or hand him his medals. The 1936 games are now known to many as the \"Hitler Olympics.\"");

  var questionThree = new Question(
    "In what sport did Borys Onyshchenko rig the quipment in such a way that he could influence the outcome of his events?",
    ["Weight Lifting", "Trap Shooting", "Steeple Chase", "100m Brest Stroke"],
    "Fencing",
    "One of the most famous, non-drug-related incidents of cheating took place during the fencing portion of the 1976 pentathlon. The judges became suspicious when hits were registering against Borys Onyshchenko's opponent, even when it was obvious he hadn't been hit. Onyshchenko was caught using a sword with a hidden push button circuit breaker. This allowed him to register a hit whenever he wanted.");

  var questionFour = new Question(
    "THe 1900 olympics were the first to allow women.  What were the first sports women were allowed to compete in?",
    ["Track and Field", "Swimming and Cycling", "Gymnastics and Shooting", "Field Hockey and Softball"],
    "Tennis and Golf",
    "Women first competed at the 1900 Paris Games. Women were allowed to compete in lawn tennis and golf, though there were three French women competing in croquet and there was at least one woman sailor as part of mixed crews. It is commonly believed that first woman to win an Olympic event was England's Charlotte Cooper, who won the tennis singles title, however Swiss sailor Hélène de Pourtalès won a gold medal as part of a team in sailing earlier than this.");

  var questionFive = new Question(
    "What was the first year the olympics were televised?",
    ["1956", "1958", "1962", "1964"],
    "1960",
    "As the first Olympics ever to be televised and include a brand endorsement by an athlete, the Rome Games ushered in a new era of commercialism and changed the way the world viewed its Olympians.  The Games also spotlighted a negative side of the competition with the first doping scandal, revealing how far some athletes would go to bring home the gold.");

  var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

  var game = new QuizGame(questions);
  
  function startGame(){

    game.start();
    $('.restart').hide();
    $('.start-button').hide();
    $('.information').show();
    $('.number-correct').hide();
    $('.question').show();
    $('.answer-list').show();
    $('.reference').show();
    $('.total-questions').text(game.totalQuestions());
  }

  function displayQuestion(currentQuestion){
    var displayAnswers = currentQuestion.randomizeAnswers();
    $('.question-num').text(game.questionNum);
    $('.question').text(currentQuestion.question);
    $('.explanation').text(currentQuestion.explain);
    $('.answer-one').text(displayAnswers[0]);
    $('.answer-two').text(displayAnswers[1]);
    $('.answer-three').text(displayAnswers[2]);
    $('.answer-four').text(displayAnswers[3]);
    $('.answer-five').text(displayAnswers[4]);
  }
  
  function showPercent(percentCorrect){
    $('.number-correct').show();
    $('.percent-correct').text(percentCorrect.toFixed(1));
  }

  $('.start-button, .restart').click(function(){
    startGame();
    displayQuestion(game.getQuestion());
  });
  
  $('.answer-list').children().click(function(event){
    var clickedOn = (event.target).innerHTML;
    if (game.checkAnswer(clickedOn)) {
      $('.question').text("Correct!");
    }else{
      $('.question').text("Wrong!");
    };
    showPercent(game.calculateScore());
    $('.answer-list').hide();
    $('.next').show();
    $('.explanation').show();
  });
  $('.next').click(function(){
    $('.next').hide();
    $('.explanation').hide();
    if (game.done()){
      $('.answer-list').hide();
      $('.restart').show();
      var score = game.getScore();
      $('.question').text(score);
    }else{
      $('.answer-list').show();
      displayQuestion(game.getQuestion());
    };
  });

});
