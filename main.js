#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgRed("\n\t ATM Machine by Hashir Raees \n\t"));
let mybankbalance = 10000; //dollars
let mypin = 1158;
let pinanswer = await inquirer.prompt([
    { name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinanswer.pin === mypin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select one option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let cashAns = await inquirer.prompt([
            {
                name: "cash",
                message: "Enter your amount",
                type: "number",
            }
        ]);
        if (cashAns.cash > mybankbalance)
            console.log("Insufficient balance");
        else
            (mybankbalance -= cashAns.cash);
        console.log("Your remaining balance is:" + mybankbalance);
    }
    if (operationAns.operation === "check balance") {
        console.log("your balance is: " + mybankbalance);
    }
    if (operationAns.operation === "fast cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Please select how much money you want to transact",
                type: "list",
                choices: ["500", "1000", "5000", "10000"]
            }
        ]);
        mybankbalance -= amountAns.amount;
        console.log("your remaining balacnce is:" + mybankbalance);
    }
}
else {
    console.log("Incorrect pin number");
}
