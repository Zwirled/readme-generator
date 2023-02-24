const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./markdown');

// array of questions for user
inquirer.prompt([
    {
        type: 'input',
        message: 'Please enter the title of your project:',
        name: 'title',
    }
])
    .then((response) => {
        console.log(response);
    });

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
