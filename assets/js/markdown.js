// Function to generate markdown for README
function generateMarkdown(response) {
    // Template literal to create markdown based on user's input

    let licenseBadge = '';
    if (response.license !== 'None') {
        licenseBadge = `![License](https://img.shields.io/badge/license-${response.license}-brightgreen)`;
    }
    return `
# ${response.title}

${licenseBadge}

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

${response.usage}

## License

This project is licensed under the ${response.license} license.

## Contributing

${response.contributing}

## Tests

${response.tests}

## Questions

Please send any questions you have to ${response.questions} and I will get back to you as soon as I can.
`};

// Export the generateMarkdown function for other modules to use
module.exports = generateMarkdown;