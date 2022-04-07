// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

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
        message: 'Lience',
        name:'license',
        choices: ['MIT', 'GPLv3', 'GPL'],
    },
])
    .then((data) => {
        fs.writeFile('README.md', generateMarkdown(data), (err) => {
            if(err) {
                return console.log(err);
            }
        
        });
    
    });


    // {
    //     type: "list",
    //     message: ''
    //     name: ''
    // },