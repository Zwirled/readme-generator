// function to generate markdown for README
function generateMarkdown(response) {
    return `
# ${response.title}

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

## Contributing

${response.contributing}

## Tests

${response.tests}

## License

This project is licensed under the ${response.license} license.

`};

module.exports = generateMarkdown;