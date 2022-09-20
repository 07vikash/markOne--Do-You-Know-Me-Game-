var rs = require("readline-sync");
var score=0
var userName= rs.question("What's your name? ");
console.log("Welcom "+ userName)
console.log("==========================")

function quiz(question, answer){
  var userAnswer =rs.question(question);
  if (userAnswer == answer){
    console.log("You are right")
    score= score+1
    console.log("current score:",score)
    console.log("======================")
  }else{
    console.log("You are wrong")
    score = score-1
    console.log("current score:",score)
    console.log("======================")
  }
  
}
quiz("Where do i live? ", "Hyderabad")
quiz("My Favorite Web-Series would be? ", "Peaky Blinders")
quiz("Who is my Favorite cricket's Player? ", "Virat Kohli")
quiz("Who is my favorite actor? ", "Cillian Murphy")
quiz("Who is my favorite cricket's captain? ", "MS Dhoni")


console.log("Thanks "+ userName + " For playing Do you Know me Game")