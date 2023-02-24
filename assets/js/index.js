const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./markdown');

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
        message: 'Please provide guidelines for contributing to the project:',
    }, {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions for running tests on the project:',
    },

];

// Prompt the user to answer all of the questions
inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        fs.writeFile('../generated/readme.md', JSON.stringify(response), (error) => {
            error ? console.error(error) : console.log('Success!');
        });
    });

// function to write README file
function writeToFile(fileName, data) {

}


// function to initialise program
function init() {

};

// call the init function to initialise the program
init();