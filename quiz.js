var readlineSync=require("readline-sync");
var userName=readlineSync.question("May I nkow your name? ");
console.log("** Welcome "+userName+' **');
console.log("Let's check how much you know me...")
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
quiz("Q-1 which is my favourite song? ", "Beh chala");
quiz("Q-2 which is my favourite colour? ", "Black");
quiz("Q-3 What i like the most among Coffee and Tee? ", "Tea");
quiz("Q-4 What I prefer to travel among Flight and Train?", "Train");
quiz("Q-5 Which is my favourite movie?", "Uri");
console.log("yay!!! Your total score is : "+ score);
