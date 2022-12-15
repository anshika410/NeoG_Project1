var readlineSync=require("readline-sync");
var userName=readlineSync.question("May I nkow your name? ");
console.log("** Welcome "+userName+' **');
console.log("Let's start the quiz...")
var score=0;
function quiz(question, answer){
  var userAnswer=readlineSync.question(question)
  if (userAnswer=== answer){
    console.log("Right answer:)")
    score=score+1;
    if (score >= 1){
      console.log("You scored: 1")
    }
  } else {
    console.log("You are wrong:(");
    if (score >= 1){
      console.log("You scored: 0")
    }
    console.log("--------------")
  }
}
quiz("Q-1 who is the prime minister of India? ", "Narendra Modi");
quiz("Q-2 What is the capital of India? ", "New Delhi");
quiz("Q-3 How many states are in India? ", "29");
quiz("Q-4 What is the national anthem of India?", "Jan Gan Man");
quiz("Q-5 What is the national song of India?", "Vande Mataram");
console.log("yay!!! Your total score is : "+ score);