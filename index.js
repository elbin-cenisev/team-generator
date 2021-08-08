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
    // Creates the manager for the team based on input
    const createManager = () => {
        console.log("Enter the following information about the Manager: ")
        let answers = inquirer.prompt(managerQuestions);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        return manager;
    }

    const teamManager = createManager();

    // Array for all employees on the team
    const team = [teamManager];

    // Creates employee cards for each employee
    const employeeCards = (team) => {
        const cards = team.map(employee => employee.card).join('')
        return cards;
    }

    // String that holds HTML code for all employee cards
    const cardCode = employeeCards(team);

    console.log(cardCode);
}

init();