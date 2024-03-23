#! /usr/bin/env node
import inquirer from "inquirer";
//1) Computer will generate a random number
//2) user input for guessing number
//3) to compare both user input with computer random number and show result
const randomNumber = Math.floor ( Math.random() * 6 + 1); // generate random value between 0 to 1 floor use to avoid decimal
                                                            // + 1 use to avoid gnerate 0
const answers = await inquirer.prompt ([
{
    name : "userGuessNumber",
    type : "number",
    message : "Please guess a number between 1-6: ",
},
]);
if (answers.userGuessNumber === randomNumber)
{
    console.log("Congratulations! You guessed right number");

}
else
{
    console.log ("You guessed wrong numer");
}