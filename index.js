// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    // Question to generate the title
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project',
    },
   // Question to generate the description 
    {
      type: 'input',
      name: 'description', 
      message: 'Breifly describe your application',
    },
    // Question to generate the installation 
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how to install the application'
    },
    // Question to generate usag of the app
    {
        type: 'input',
        name: 'usage',
        message: 'Provide examples how the application is used'        
    },
    // Multiple choice of which licence will be used, created using the inquirer 
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['mit', 'GPLv2', 'Apache', 'no license']
    },
    // Yes or no question if the user had contributions to his project, using the confirm type
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Will there be contributers to this application?',
        default: true
    },
    // Function of what happens if you put yes, or else, for contributions
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for contributing.',
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                message: 'No contributions';
                
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide instructions and examples of how the code is tested:',
    },

    // Input for email and github user 

    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username? (Required)',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
    },


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
