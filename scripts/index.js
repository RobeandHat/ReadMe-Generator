const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project's title?",
      name: "title",
    },
    {
      type: "input",
      message: "Describe your project",
      name: "description",
    },

    {
      type: "input",
      message: "How should your project be installed?",
      name: "install",
    },
    {
      type: "input",
      message: "How should your project be used?",
      name: "usage",
    },
    {
      type: "input",
      message: "List any contributors you would like to credit",
      name: "contributors",
    },
    {
      type: "input",
      message: "How can users test your project?",
      name: "tests",
    },
    {
      type: "list",
      message: "Which type of license should your project have?",
      name: "license",
      choices: ["MIT", "GPLv2", "Apache", "GPLv3"],
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])
  .then((response) => {
    const content = `
# ${response.title}
![badge](https://img.shields.io/badge/License-${response.license}-brightgreen)
## Table of Contents
* [Description](#project-description)
* [Installation](#installation)
* [Usage](#usage-information)
* [Contributors](#contributors)
* [Testing](#test-instructions)
* [Contact Information](#questions)
* * *
## Project Description
${response.description}
* * *
## Installation
${response.install}
* * *
## Usage information
${response.usage}
* * *
## Contributors
${response.contributors}
* * *
## Test Instructions

${response.tests}
* * *
## Questions
If you have any questions about this project, feel free to reach me through email or on Github!

Email: ${response.email}

[Link to Github!](https://github.com/${response.github})
* * *

## Licensing 
This project is protected under the ${response.license} license.
`;

    fs.writeFile("readMe.md", content, (error) => {
      if (error) console.log(error);
      else console.log("ReadMe written!");
    });
  });
