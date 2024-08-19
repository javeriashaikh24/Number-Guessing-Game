#! /usr/bin/env node

import inquirer from "inquirer";
const computer_number = Math.floor(Math.random()* 10+1);
const result = await inquirer.prompt([
    {
 name: "guessing_game",
 type: "number",
 message: "please guess a number between 1-10:",       
    },
]);
//condition
if(result.guessing_game === computer_number){
    console.log ("Congratulation! you guess a right number");
}
else{
    console.log ("Wrong number, Try Again");
}