// Function to generate markdown for README
function generateMarkdown(response) {
    // Template literal to create markdown based on user's input

    return `
# ${response.title}

![${response.license.name} license badge](${response.license.badge})

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

## Installation

${response.installation}

## Usage

![screenshot of ${response.title}](assets/images/screenshot.png)

${response.usage}

## License

This project is licensed under the ${response.license.name} license.

![${response.license.name} license badge](${response.license.badge})

## Contributing

${response.contributing}

## Tests

${response.tests}

## Questions

To visit my GitHub profile, please click here: https://github.com/${response.github}.

If you have any questions, please send them to ${response.questions} and I will get back to you as soon as I can.
`};

// Export the generateMarkdown function for other modules to use
module.exports = generateMarkdown;