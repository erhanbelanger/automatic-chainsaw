function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
This application is covered under the [${data.license} License](${renderLicenseLink(data.license)}).

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions or additional information, contact [${data.github}](https://github.com/${data.github}) via email at ${data.email}.
`;
}

function renderLicenseBadge(license) {
  // Implement this function to return the appropriate badge based on the license
}

function renderLicenseLink(license) {
  // Implement this function to return the license link
}

module.exports = generateMarkdown;

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project title: ",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions: ",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information: ",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application: ",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "No License"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines: ",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions: ",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address: ",
  },
];

module.exports = questions;







