// Intro of the Quiz
console.log("Lets do a fun activity!");
console.log("Its just a Quiz that I have made to know how well do you know me!");
console.log("Note : Answer in one word with the CAPITAL initial." + "\n");
console.log("So, lets play!" + "\n");

var readlineSync = require('readline-sync');
var name = "First, May I know your name please? ";
var score = 0;


// Welcome the player
var ans = readlineSync.question(name);
console.log("");
console.log("Welcome " + ans + "!" + "\n");

function play(question, answer) {
  var userAns = readlineSync.question(question);

  if (userAns === answer) {
    console.log("You are right!");
    score += 1;
    console.log("Your score is: " + score + "\n");
  } else {
    console.log("You are wrong!");
    score += 0;
    console.log("Your score is: " + score + "\n");
  }
}

// Array of Object (Quiz Questions)
var questions = [q1 = {
  question: "Am I older than 23? ",
  answer: "Yes"
},
q2 = {
  question: "Am I from Aurangabad? ",
  answer: "Yes"
},
q3 = {
  question: "Am I a graduate? ",
  answer: "Yes"
},
q4 = {
  question: "Do I like traveling? ",
  answer: "Yes"
},
q5 = {
  question: "Do I like Dancing? ",
  answer: "No"
},
q6 = {
  question: "Is my favorite color Navy Blue? ",
  answer: "Yes"
},
q7 = {
  question: "Do I like sports? ",
  answer: "Yes"
},
q8 = {
  question: "Do I like coding? ",
  answer: "Yes"
},
q9 = {
  question: "Do I like Marvel movies? ",
  answer: "Yes"
},
q10 = {
  question: "Is my favorite superhero Thor? ",
  answer: "Yes"
}]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Your final score is: " + score + "\n");

if (score > 5) {
  console.log("Wohh! It looks like you know me very well!" + "\n");
} else {
  console.log("Ohh! It looks like we have to meed some day to know eachother better!")
}

console.log("Thanks for playing, See You Again!!!");