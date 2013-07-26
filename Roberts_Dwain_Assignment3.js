// Author: Dwain Roberts
// SDI 1307
// July 25, 2013
// Project 3 The Company Basketball Tournament



//Start


//JSON Data
var teamNames = {
    "Teams":   [
      {
        "Teamname": "Sharks",
        "wonGame": true,
        "rosterAmount":13
     
      },
      {
        "Teamname": "Patriots",
        "wonGame": true,
        "rosterAmount": 10
     
      },
      {
        "Teamname": "Bears",
        "wonGame": false,
        "rosterAmount": 8
      }
    ]
};

//Global Variables
var court = "Ehret Gym";
var gameTime = "Morning";
var fullGym = true;


//Defined Objects
var headCoachInfo = {

// Number Property
    numOfInjuries : 4,
// Array Property
    playersHurt : [" Ron Harris", " Jamal Collins", " Chris Thomas", " Johnathan Span"],
// String Property
    TrainerFirstName : "Carl",
    TrainerLastName : "Woolard",
    Coach : "Coach Terrance",



//Mutator Method
concessions : ["pizza", "french fries"]};
concessions.push("chips", "soda");




//Function Method
    
var addPlayersToRoster = function(myCoach, rosterSpace){
var myCoach = headCoachInfo.coach;
var rosterSpace = rosterAmount - numOfInjuries;

if(mycoach == "Coach Terrance"){
console.log("We have space on our team.");
}else if(mycoach != "Coach Terrance"){
console.log("There is no space on this team.");


}


};



//Boolean Method
var areWinningGame = function(scoreIsGood,holdTheball) {
if  (scoreIsGood === true || (scoreIsGood && holdTheball === true) )
{
console.log("We are winning the game at" + court + ", so don't rush to score.");
}
else
{
  console.log ("We are losing the game, so lets push the tempo.");
  }
  return holdTheBall;
};



//Accessor Method 
//Get our team trainers first and last name.

	getheadCoachInfo = function(){
return headCoachInfo.trainerFirstName + " " + headCoachInfo.trainerLastName;


};


//Procedure Method
	var recentScorer = function(minutesSinceScore){

if(minutesSinceScore >= 5){
console.log("You have to sit on the bench for a few minutes!");
}else{

console.log("Stay in the game because you just scored in the within the last 5 minutes!");
return minutesSinceScore;
	
}

//Return Number
	playerToSub = function(subAtDesk){
var playersToSit = 3;

while(subAtDesk > 0){
console.log("There is a " + subAtDesk +" waiting to come in. We have "+ playersToSit +" players that need to come to the bench.");
custInLine--;

for( x = 0; x < playersToSit ; x++ ){
subAtDesk--;

}

}
return subAtDesk;
};


//Object Method

player = new Object();
firstName=["Dwain"];
lastname=["Roberts"];
Age=25;
jerseyColor=["red"]; 

getplayer = function(){
return player.firstName;




//Output
//Players Injured
console.log("We have " + headcoachInfo.numOfInjuries + "injured players for this tournament.");
//Food
console.log("The staff at" + court + "now have" +concessions+ "on the menu.");
//Rosters
console.log("We have" + rosterSpace + "on our team due to injuries.");
//Trainer 
Console.log("Our trainers name is Carl Woolard.");
//Finish
}
};


//Finish

//Finish
  }

}
