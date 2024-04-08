import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgMagentaBright.bold("\n \t WELL COME TO CURRENCY CONVERSION APP \n"))

// define the list of currencies and thier exchange rates.
let exchange_rate: any = {

    "USD" : 1,     // Base currency
    "EUR" : 0.9,   //European Currency (EURO)
    "JYP" : 113,   //Japenese Currency (YEN)
    "CAD" : 1.3,   //Canadian Dollar (CAD)
    "AUD" : 1.65,  //Australian Dollar (AUD)
    "PKR" : 270,   //Pakistani Rupees  (PKR)
    // We can select more currencies and their exchange rates in this object.
}

//Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.blueBright.bold("Select the currency to convert from :"),
        choices: ["USD", "EUR",  "JYP",  "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.magentaBright.bold("Select the currency to convert into :"),
        choices: ["USD", "EUR",  "JYP",  "CAD", "AUD", "PKR"] 
    },
    {
        name: "amount",
        type:  "input",
        message: chalk.blueBright.bold("Enter the amount to convert :")
    }
]);
//perform currency coversion by using a mathematcal formula

let from_amount = exchange_rate[user_answer.from_currency]
let to_amount = exchange_rate[user_answer.to_currency]
let amount = user_answer.amount

//formulas using for currency conversion

let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount
console.log (chalk.yellowBright.bold(`Converted Amount = ${converted_amount.toFixed()}`));