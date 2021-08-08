// NPM packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// Module imports
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Question arrays
const commonQuestions = [
    {
        name: 'name',
        message: 'What is their name?'
    },
    {
        name: 'id',
        message: 'What is their employee ID number?'
    },
    {
        name: 'email',
        message: 'What is their email address?'
    }
];
const managerQuestions = commonQuestions.concat({
    name: 'officeNumber',
    message: 'What is their office number?'
});
const internQuestions = commonQuestions.concat({
    name: 'school',
    message: 'What school do they attend?'
});
const engineerQuestions = commonQuestions.concat({
    name: 'github',
    message: 'What is their github username?'
});
const addEmployeeQuestion = [
    {
        name: 'addEmployee',
        type: 'list',
        message: 'Who would you like to add to the team?',
        choices: ["Engineer", "Intern", "Nobody"]
    }
];

function init() {
    console.log("Hello World");
}

init();