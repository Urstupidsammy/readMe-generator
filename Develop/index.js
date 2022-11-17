// TODO: Include packages needed for this application
const { default: inquirer } = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices:['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
        validate: licenseInput = () => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose one of the four options');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps for installing your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter the necessary steps for installing your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the utility of your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide a use for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What guidelines must others follow in order to contribute to your project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide contribution guidelines');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can users test your project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please let users know how to test your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contact',
        message: 'What is your GitHub username, so other users may contact you with questions?',
        validate: contactInput => {
            if (contactInput) {
                return true;
            } else {
                console.log('Please provide a username, so others can reach out to you with questions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email, so there is another way of contacting you',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide your email for users to contact you');
                return false;
            }
        }
    },
];



// TODO: Create a function to write README file
function writeToFile = fileContent => {
    return new Promise((resolve,reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    

    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
        
    });
}

// Function call to initialize app
init();

//exports
module.exports = questions;