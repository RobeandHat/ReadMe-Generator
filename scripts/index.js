const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project's title?",
      name: "Title",
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
      message: "What credits do you want to include?",
      name: "credits",
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
      name: "questions",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "contact",
    },
  ])
  .then((response) => {};
    