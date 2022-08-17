// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'username',
        message: 'Please enter GitHub username ',
    },
    {
        type:'input',
        name: 'project',
        message: 'Please enter email',
    },
    {
        type:'input',
        name: 'project',
        message: 'Please enter name of your project',
    },
    {
        type:'input',
        name: 'description',
        message: 'Please enter desscription',
    },
    {
        type:'input',
        name: 'license',
        message: 'Please enter kind of license',
    },
    {
        type:'input',
        name: 'dependenciesCommand',
        message: 'What command should be run to install dependencies?',
    },
    {
        type:'input',
        name: 'testCommand',
        message: 'What command should be run to run tests?',
    },
    {
        type:'input',
        name: 'usingRepo',
        message: 'What the user needs to know about using the repo?',
    },
    {
        type:'input',
        name: 'contribute',
        message: 'What the user needs to know about contributing?',
    },
];

// TODO: Create a function to write README file
const generateReadme = ({ project, description, dependenciesCommand, testCommand, usingRepo, username, contribute }) =>
    `# Project name : ${project}

    ## Description
     ${description}

    ## Installation
    
    * Run the following command for install dependencies: ${dependenciesCommand}
    
    ## Test
    * Run the following command for testing : ${testCommand}
    
    ## 💡 Usage
    ${usingRepo}
     
    ## Contributing

    ${contribute}
    ---
    
    © 2022 ${username}. All Rights Reserved.`;
 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateReadme(answers)))
    .then(() => console.log('Successfully README file generated.'))
    .catch((err) => console.error(err));

}

// Function call to initialize app
init();
