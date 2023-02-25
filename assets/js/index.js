// Import the necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./markdown');

// Check to make sure email address is a valid structure
const validateEmail = function (email) {
    // Use (regular expression) regex to check if email is in a valid format
    const emailExists = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    // If email is valid, return true. Otherwise, log an error message and return false
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
        message: 'Please select a license type for the project:',
        name: 'license',
        choices: [
            {
                name: 'MIT',
                value: {
                    name: 'MIT',
                    badge: 'https://img.shields.io/badge/license-MIT-brightgreen'
                }
            },
            {
                name: 'GNU GPLv3',
                value: {
                    name: 'GNU GPLv3',
                    badge: 'https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen'
                }
            },
            {
                name: 'Apache License 2.0',
                value: {
                    name: 'Apache License 2.0',
                    badge: 'https://img.shields.io/badge/license-Apache%20License%202.0-brightgreen'
                }
            },
            {
                name: 'ISC',
                value: {
                    name: 'ISC',
                    badge: 'https://img.shields.io/badge/license-ISC-brightgreen'
                }
            },
            {
                name: 'None',
                value: {
                    name: 'None',
                    badge: 'https://img.shields.io/badge/license-None-brightgreen'
                }
            }
        ]
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
        name: 'github',
        message: 'Enter your GitHub username:',
    }, {
        type: 'input',
        name: 'questions',
        message: 'Enter an email address for questions to be sent to regarding the project:',
        validate: validateEmail,
    }
];

// Function to initialise programme
function init() {
    // Prompt the user to answer all of the questions
    inquirer.prompt(questions)
        .then((response) => {
            // Copy the response object to a new object so that the original is not mutated
            const newResponse = { ...response };

            // For each key in the newResponse object, if the value is falsy (empty, undefined, etc.), replace it with "N/A"
            Object.keys(newResponse).forEach(key => {
                if (!newResponse[key]) {
                    newResponse[key] = 'N/A';
                }
            });
            // Generate markdown text using the modified response object
            const markdown = generateMarkdown(newResponse);
            // Write the markdown text to a file
            writeToFile('../generated/README.md', markdown, (error) => {
                // If an error occurs, log the error message. Otherwise, log a success message
                error ? console.error(error) : console.log('Your README file has been generated!');
            });
        });
}

// function to write README file
function writeToFile(fileName, data, callback) {
    // Write data to the file specified by fileName
    fs.writeFile(fileName, data, callback);
}

// Call the init function to initialise the program
init();