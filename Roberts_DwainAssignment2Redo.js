// Author: Dwain Roberts
// SDI 1307
// July 18, 2013
// Project 2 Story about a day at the Fair. 

//Start



//Variables


var carnivalName = "Louisiana State Fair";
var carnivalGames = ["Darts", "BottleRings", "HammerDrop"];
var cash = 200;

console.log("The whole family went to the " + carnivalName + "today.");
console.log("I wanted to play" + carnivalGames + "before we left.");
console.log("I have about " + cash + "to spend.");


//Procedure
var prizesWon = function(getHighscore) {
    
    if  (getHighscore === true)
    {
     console.log("I just won a huge prize at the" + carnivalName + ".");
    }
     else
    {
       console.log("I didn't win this time.");
       }
};       
    prizeswon(getHighscore);
       


//Boolean Function
var winStreak = function(scoreIshigh,playAgain) {
if  (scoreIshigh === true || (scoreIshigh && playAgain === true) )
{
console.log("My score is high, so I will stay at this game.");
} else {
  
  console.log ("I should try a different carnival game.");
  }
  return playAgain;
};

Winstreak(scoreIshigh,playAgain);



//Number Function
var ticketsWon = function(ticketsWontoday) {

  for (var tickets = 30; tickets <= ticketsWontoday; tickets = tickets + 10) {

      if (tickets < ticketsWontoday) {
        console.log("I just won" + tickets + " from playing games today.");

      } else {
        console.log("I am going to cash in the tickets I have left.");

      }
    }
    return ticketswontoday;

};
ticketsWon(ticketsWontoday);




//String Function
 var newGame = function(payCash,getTickets) {

    var cashLeft = "I want to play a new game so I " + payCash + " and I " + getTickets + " so I can play another game!";

    return cashLeft; 


};

newGame(paycash,getTickets);

//Array Function
var gamesplayed = function(numberofgames,gametypes ) {

    var fairGames = numberofgames;
    var extraGame = gametype ("Water Gun Race.");

    while (numberofgames > gametype.length ) {

      console.log("I had " + fairgames + " left to play.");

      
    }
    return gametypes;

};

gamesplayed(numberOfgames,gameTypes);

//Outputs
console.log(" I played the" +carnivalGames[1]+ "six times.");
console.log("I won the huge prizes at the" + carnivalName + "today.");
console.log("I left the fair with more than " + tickets + "tickets at The casino.");
console.log(" We almost played every game in the" + carnivalName + ".");





//Finish
  
