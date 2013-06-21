alert("JavaScript works!");
// Author: Dwain Roberts
// SDI 1306
// June 20, 2013
// Project 3 Extension of Casino Games Story

//Start


// JSON
var GameNames = {
    "Games":   [
      {
        "Gamename": "Poker",
        "CardGame": true,
        "minimumbetindollars":20 
     
      }
      {
        "Gamename": "BlackJack",
        "CardGame": true,
        "minbetindollars": 10
     
      }
      {
        "Gamename": "Roulette",
        "CardGame": false,
        "minimumbetindollars": 5
      }
    ]
};
// Global Variables
var Play = "If the current hand is good I will play.";
var casinos = ["Mirage", " Maryland Live", " Harrahs"];
var DollarstoBet = 500

};



// Object (Did I Win any money) 
var didIwin = {

    bet: "If the last hand was good.",
    lookatchips: true,
    Dollarsbet: 10,
    Dollarswon: 100,
    Casinos: [
            "Mirage",
            " Maryland Live",
            " Harrahs"
            ],
    objectProperty: {
            bet: "Im on a roll.",
            game: "BlackJack"
            },
// Method Procedure  (Project 2 Code)          
            
            
var didIwin = function(lookatchips) {
    
    if  (lookatchips === true)
    {
     console.log("I just won," +casino name);
    }
     else
    {
       console.log("I have to try another game.");
       }
};       
       
// Method Function   (Project 2 code)

var haveWinningHand = function(cards are good,play hand) {
if  (cardsAregood === true || (cards are good && playhand === true) );
{
console.log("Keep playing the game.");
}
else
{
  console.log ("Move to a different game.");
  }
  return playhand;
};

    },
// Method Accessor
    HaveWinninghand: function(){ 
      var totalWon = this.dollarswon + this.dollarsWonYesterday;
      return totalwinnings;
    },


// Method: Mutator
    losegame:function(lostbet){ // Method: Mutator
      this.foldedhand = lostbet;
    }
}

// Object howmuchDidIwin 
var howmuchdidIwin = {

 var moneywon = function(dollarswontoday) {

    for (var dollars = 500; dollars <= dollarswontoday; dollars = dollars + 1) {

      if (dollars < dollarswontoday) {
        console.log("I just won another" + dollars + "playing blackJack.")

      } else {
        console.log("Go and cashOut.")

      }
    }
    return dollarswontoday;

};


 var Tryagain = function(spendmoney, getchips) {

    var moneyleft = "I want to play again so I " + spendmoney + " and I " + getchips + " so I can continue to play roulette!";

    return Moneyleft; 

var gamesplayed = function(numberofgames,gametypes ) {

    var games = numberofgames;
    var addgame = gametype ("SlotMachines.")

    while (numberofgames > gamestypes.length ) {

      console.log("I have " + games + " left to try and play.");

      runs--;
    }
    return gametypes left;

};


  

//Finish
  }

}