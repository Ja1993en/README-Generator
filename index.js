// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];


// questions the innput.value will be sent to the Markdown
inquirer.prompt([
    {
        type: "input",
        message: 'README Heading',
        name: 'heading',
    },
    {
        type: 'input',
        message: 'Project description',
        name: 'description'
    },
    {
        type: "input",
        message: 'Does your project require installing dependicies?',
        name: 'installation',
    },
    {
        type: "input",
        message: 'How to use it?',
        name: 'usage',
        default: 'https://github.com/Ja1993en/README-Generator/issues/1#issue-1195934438'
    },
    {
        type:'input',
        message: 'Your Full Name?',
        name: 'author',
        default: 'Jalen Mcneal',
    },
    {
        type:'input',
        message: 'Your Email',
        name: 'email',
        default: 'mcneal.jalen@yahoo.com'
    },
    {
        type: 'input',
        message: 'Github account',
        name: 'github',
        default:'Ja1993en',
    },

    {
        type: "input",
        message: 'Any guidlines for contributing to your project?',
        name: 'Contributors',
    },
    {
        type: "input",
        message: 'What tests will you be using',
        name: 'testingInfo'
    },
    {
        type: 'list',
        message: 'Please choose a license for your Project',
        name:'license',
        choices: ['MIT', 'GPLv3', 'GPL'],
    },
])// write the files to the README
    .then((data) => {
        fs.writeFile('README.md', generateMarkdown(data), (err) => {
            if(err) {
                return console.log(err);
            }
        
        });
    
    });


    