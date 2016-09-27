
(function(){
  "use strict";

  var questions = [
    {
      question: "Who is Grace Hopper?",
      choices: ['Programmer', 'Doctor', 'Veggie Lover'],
      answer: 0
    },{
      question: "Who is Batman?",
      choices: ['Johnnie', 'I am', 'Ryan'],
      answer: 1
    },{
      question: "Fav TV Show",
      choices: ['A-Team', 'Knight Rider', 'McGyver'],
      answer: 0
    }
  ];

  var quiz = document.getElementById('quiz');
  var questionHtml = '';

  for(var i=0; i < questions.length; i++){
    var currentQuestion = questions[i];
    console.log(currentQuestion);

    questionHtml += '<div id="question-container-' + i + '" >';
    questionHtml += '<h3>' + currentQuestion.question + '</h3>';

    for(var j=0; j < currentQuestion.choices.length; j++){
      var thisChoice = currentQuestion.choices[j];
      questionHtml += '<input name="question-' + i + '" type="radio" id="'
                      + thisChoice + '" value="'
                      + thisChoice + '"> <label for="'
                      + thisChoice + '">' + thisChoice
                      + '</label>';
    }

    questionHtml += '</div>';
  }

  quiz.innerHTML = questionHtml;

  var gradeButton = document.getElementById('grade');
  gradeButton.addEventListener('click', gradeQuiz);

  function gradeQuiz(){
    // Loop over all of the questions and grade each one
    for(var i=0; i < questions.length; i++){
      // Get the question & answer
      var question = questions[i];
      var answer = getUserAnswer(i);
      var isCorrect = gradeQuestion(question, answer);

      console.log('isCorrect: ', isCorrect);
      console.log('!isCorrect: ', !isCorrect);

      // Show red if it's wrong
      if(!isCorrect){
        document.getElementById('question-container-' + i).style.backgroundColor = 'red';
      }else{
        document.getElementById('question-container-' + i).style.backgroundColor = 'green';
      }

      var questionContainer = document.getElementById('question-container-' + i);
      questionContainer.style.backgroundColor = isCorrect ? 'green' : 'red';
    }
  }

  function getUserAnswer(index){
    var formQuestions = document.getElementsByName("question-" + index);
    var selectedAnswer;

    for(var i=0; i < formQuestions.length; i++){
      if(formQuestions[i].checked){
        // return formQuestions[i];
        selectedAnswer = formQuestions[i];
      }
    }

    return selectedAnswer;
  }

  function gradeQuestion(question, selectedAnswer){
    // Look up what the user selected as the answer
    return selectedAnswer.value == question.choices[question.answer];
  }

}());

/*
Function Notes (Color Mixer)
*/
// var red = 'red';
// var green = 'green';
// var purple = 'purple';
//
// function colorMixer(color1, color2, color3){
//   var newColor = color1 + color2 + color3;
//
//   return newColor;
// }
//
// var myColor = colorMixer(green, red, purple);
// console.log(myColor);
// console.assert(myColor === 'greenredpurple');
// console.assert(colorMixer(2, 'blue', 'yellow') === '2blueyellow');
//
// var yellow = 'yellow';
// var white = 'white';
// var blue = 'blue';
//
// colorMixer(yellow, white, blue);
