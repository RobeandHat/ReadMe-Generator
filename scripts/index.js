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
      choices: [
        "Apache License 2.0",
        "ISC License",
        "MIT License",
        "GNU GPLv3",
      ],
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
## Table of Contents
* [Description](#project-description)
* [Installation](#installation)
* [Usage](#usage-information)
* [Contributors](#contributors)
* [Testing](#test-instructions)
* [Contact Information](#contact)
## Project Description
${response.description}
## Installation
${response.install}
## Usage information
${response.usage}
## Contributors
${response.contributors}
## Test Instructions
${response.tests}
## Contact
If you have any questions about this project, feel free to reach me through email or on Github!

Email: ${response.email}

[Github Link](https://github.com/${response.github})`;

    fs.writeFile("readMe.md", content, (error) => {
      if (error) console.log(error);
      else console.log("ReadMe written!");
    });
  });
