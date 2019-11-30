const askQuestion = require("./askQuestion") // import function from askQuestions.js file

// Initialize function to start the application 
// calling askQuestions function from askQuestions.js file

function init(){
    askQuestion();
}

init();

module.exports = init;