#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var computer_number = Math.floor(Math.random() * 10 + 1);
var result = await inquirer_1.default.prompt([
    {
        name: "guessing_game",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);
//condition
if (result.guessing_game === computer_number) {
    console.log("Congratulation! you guess a right number");
}
else {
    console.log("Wrong number, Try Again");
}
