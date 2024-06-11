import inquirer from "inquirer";
let c_value = {
    PKR: 278.62,
    UAE: 3.67,
    USD: 1
};
let ans = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "Converting from..",
        choices: ["USD", "PKR", "UAE"]
    },
    {
        type: "list",
        name: "to",
        message: "Converting to..",
        choices: ["USD", "PKR", "UAE"]
    },
    {
        type: "number",
        name: "amount",
        message: "Your amount to convert"
    },
]);
console.log(c_value[ans.to] / c_value[ans.from] * ans.amount);
