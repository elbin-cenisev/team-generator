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