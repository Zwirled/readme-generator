const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./markdown');

// Check to make sure email address is a valid structure
const validateEmail = function (email) {
    const emailExists = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (emailExists) {
        return true;
    } else {
        console.log("\nPlease enter a valid email");
        return false;
    }
};

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title for your project:',
    }, {
        type: 'input',
        name: 'description',
        message: 'Enter a short description of your project:',
    }, {
        type: 'input',
        name: 'installation',
        message: 'Enter details on the installation process:',
    }, {
        type: 'input',
        name: 'usage',
        message: 'Enter details on the usage of the project:',
    }, {
        type: 'list',
        name: 'license',
        message: 'Please select a license type for the project:',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC', 'None'],
    }, {
        type: 'input',
        name: 'contributing',
        message: 'Enter details on guidelines for contributing to the project:',
    }, {
        type: 'input',
        name: 'tests',
        message: 'Enter instructions for running tests on the project:',
    }, {
        type: 'input',
        name: 'questions',
        message: 'Enter an email address for questions to be sent to regarding the project:',
        validate: validateEmail,
    }
];

//function to initialise programme
function init() {
    // Prompt the user to answer all of the questions
    inquirer.prompt(questions)
        .then((response) => {
            const markdown = generateMarkdown(response);
            writeToFile('../generated/README.md', markdown, (error) => {
                error ? console.error(error) : console.log('Your README file has been generated!');
            });
        });
}

// function to write README file
function writeToFile(fileName, data, callback) {
    fs.writeFile(fileName, data, callback);
}

// call the init function to initialise the program
init();