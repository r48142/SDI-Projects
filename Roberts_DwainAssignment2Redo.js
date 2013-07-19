1  // Author: Dwain Roberts
  2  // SDI 1307
  3  // July 18, 2013
  4  // Project 2 Story about a day at the Fair. 
  5  
  6  //Start
  7  
  8  
  9  
 10  //Variables
 11  
 12  
 13  var carnivalName = "Louisiana State Fair";
 14  var carnivalGames = ["Darts", "BottleRings", "HammerDrop"];
 15  var cash = 200;
 16  
 17  console.log("The whole family went to the " + carnivalName + "today.");
 18  console.log("I wanted to play" + carnivalGames + "before we left.");
 19  console.log("I have about " + Money + "to spend.");
 20  
 21  
 22  //Procedure
 23  var prizesWon = function(getHighscore) {
 24      
 25      if  (getHighscore === true)
 26      {
 27       console.log("I just won a huge prize at the" + carnivalName + ".");
 28      }
 29       else
 30      {
 31         console.log("I didn't win this time.");
 32         }
 33  };       
 34      prizeswon(getHighscore);
 35         
 36  
 37  
 38  //Boolean Function
 39  var winStreak = function(scoreIshigh,playAgain) {
 40  if  (scoreIshigh === true || (scoreIshigh && playAgain === true) )
 41  {
 42  console.log("My score is high, so I will stay at this game.");
 43  } else {
 44    
 45    console.log ("I should try a different carnival game.");
 46    }
 47    return playAgain;
 48  };
 49  
 50  Winstreak(scoreIshigh,playAgain);
 51  
 52  
 53  
 54  //Number Function
 55  var ticketsWon = function(ticketsWontoday) {
 56  
 57    for (var tickets = 30; tickets <= ticketsWontoday; tickets = tickets + 10) {
 58  
 59        if (tickets < ticketsWontoday) {
 60          console.log("I just won" + tickets + " from playing games today.");
 61  
 62        } else {
 63          console.log("I am going to cash in the tickets I have left.");
 64  
 65        }
 66      }
 67      return ticketswontoday;
 68  
 69  };
 70  ticketsWon(ticketsWontoday);
 71  
 72  
 73  
 74  
 75  //String Function
 76   var newGame = function(payCash,getTickets) {
 77  
 78      var cashLeft = "I want to play a new game so I " + payCash + " and I " + getTickets + " so I can play another game!";
 79  
 80      return cashLeft; 
 81  
 82  
 83  };
 84  
 85  newGame(paycash,getTickets);
 86  
 87  //Array Function
 88  var gamesplayed = function(numberofgames,gametypes ) {
 89  
 90      var fairGames = numberofgames;
 91      var extraGame = gametype ("Water Gun Race.");
 92  
 93      while (numberofgames > gametype.length ) {
 94  
 95        console.log("I had " + fairgames + " left to play.");
 96  
 97        
 98      }
 99      return gametypes;
100  
101  };
102  
103  gamesplayed(numberOfgames,gameTypes);
104  
105  //Outputs
106  console.log(" I played the" +carnivalGames[1]+ "six times.");
107  console.log("I won the huge prizes at the" + carnivalName + "today.");
108  console.log("I left the fair with more than " + tickets + "tickets at The casino.");
109  console.log(" We almost played every game in the" + carnivalName + ".");
110  
111  
112  
113  
114  
115  //Finish
116  
117  
118  
119  
120  
