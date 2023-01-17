// Create a code quiz that contains the following requirements:
// A start button that when clicked a timer starts and the first question appears.
// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.
// When the game ends, it should display their score and give the user the ability to save their initials and their score

// Prepare the questions in question.js file
// var questions = ...
var score = 0;
var currentQuestion = 0;
var counter;
var timer;

//prepare all selector that we might need to point to the html element
var startButton = document.querySelector('#start');
//questionContainer
//questionTitle
//choiceContainer
//...

function populateQuestion(question) {
  var question = question.title;
  var choice = question.choices;

  choicesContainer.innerHTML = '';
  //questionsTitle.textContent = question;
  var choicesList = document.createElement('ul');
  for (let i =0; i < choices.length; i++) {
    var choice = document.createElement('li');
    choice.textContent = choices[i];
    choicesList.appendChild(choice);
  }
  //choiceContainer.appendchild(choicesList)
}

function endGame() {
  // when the game ends, it should display their score and give the user the ability to save their intials and their score

  //hide questions container
  //show endScreen container
  //assign score to finalScore container
  //
}

function nextQuestions() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    populateQuestion(questions[currentQuestion]);
  } else {
    endGame();
  }
 }

//questions.forEach(function(question) {
//  populateQuestion(question); });

startButton.addEventListener('click', function() {
  startScreenElement.setAttribute('class', 'hide');
  questionContainer.setAttribute('class', 'visible');

  //show the firsst question
  currentQuestion = 0;
  populateQuestion(questions[currentQuestion]);

  counter = 100;
  timer = setInterval(funcation() => {
    counter--;
    //set timerContainer text to counter
    if (counter <= 0) {
      //endGame()   
      clearInterval(timer);    
    }
  }, 1000);
});

function saveHighscore(inital){
  //get the current highscores from local storage 
  //json parse highscores from localstorage, this will be an array of object
  //push inital + score to the array
  //order the array from highest to lowest
  //json.stringify

}



//another click event listener for choice
//check answers
// if correct add 1 to score, move to next question
// if wrong minus 10secs from interval, move to next question

//click event listner to submit button
//... var inital = initialInput.value.trim()
//...save initial + score to local storage (object/var)
//..redirect to highscore page