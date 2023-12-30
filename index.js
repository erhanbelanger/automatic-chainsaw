const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

const questions = require("./questions");

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("README.md successfully generated!");
    }
  });
}

function init() {
  inquirer.prompt(questions).then((userInput) => {
    const markdown = generateMarkdown(userInput);
    writeToFile("README.md", markdown);
  });
}

init();
