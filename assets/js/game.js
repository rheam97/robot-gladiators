//Game States
//"WIN" player robot has defeated all of enemy robots 
// * fight all enemy robots
// * defeat all enemy robots
//"LOSE" player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
// you can also log multiple values like this 
console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;

var fight = function (enemyName) {
    //fight function statements
    //Alert players that they are starting the round
    window.alert("Welcome ot the Robot Gladiators!");
    // fight prompt
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //log a resulting message
    console.log(promptFight);
    //  if player chooses to fight, then fight
    if (promptFight=== "fight" || promptFight === "FIGHT") {
       // remove ememy Health by subtracting playerAttack
        enemyHealth = enemyHealth - playerAttack;
        console.log (playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining. ");
    // check enemy health
    if (enemyHealth<=0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.};
    console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " remaining."
    );
    //check player health
    if (playerHealth<=0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    }     // if player chooses skip
    else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you would like to quit?");

    //if yes (true) leave fight
    if (confirmSkip) {
        window.alert(playerName + " has chosen to leave the fight. Goodbye!");
        //subtract money for quitting
        playerMoney = playerMoney -2;
    }
    // if no, (false), ask question again by running fight()
    else {
        fight();
    }
}
    else {
        window.alert("You need to choose a valid option. Try again!");
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
};