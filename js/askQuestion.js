const callApi = require("./callApi");
const inquirer = require("inquirer");

function askQuestion() {
        const question = [
            {
                type: "input",
                message: "What is your Github username?",
                name: "username"
            },
            {
                type: "list",
                message: "Choose your profile color:",
                name: "color",
                choices: [
                    "red",
                    "blue",
                    "yellow",
                    "green",
                    "orange",
                    "violet",
                    "grey"
               ]
            }
        ]
    inquirer.prompt(question)
    
    .then(function({username,color}) {
        callApi(username,color);
        });
    };    


module.exports = askQuestion;
    