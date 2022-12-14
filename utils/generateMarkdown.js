const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index');


// Returns a license badge based on what license is given
// If there is no license, it will return an empty string
function renderLicenseBadge(license) {
  let = '';
  if(license === 'MIT'){
    badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
    badge = '![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  }  else if (license === 'GPL v3.0') {
    badge = '![license](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    
    } else {
      badge = ""
    }
    return badge;
  }

// 
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0'){
  licenseLink = 'https://www.gnu.org/licenses'
  } else {
    licenseLink = ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None'){
    licenseSection = ''
  } else {
    licenseSection =
    'License: ${license}'
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}
  ## ${renderLicenseBadge(answer.license)} ## ${renderLicenseLink(answer.license)} 
  ## ${renderLicenseSection(answer.license)}

  ## Table of Contents
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [License](#License)
  ### * [Contributors](#contributors)
  ### * [Tests](#tests)
  ### * [Questions](#questions)

  ## Installation
  ### You must install the following for this app to run
  ### ${answer.installation}

  ## Usage
  ### ${answer.usage}

  ## Contributors
  ### ${answer.contribution}

  ## Tests
  ### Run the following commands in your terminal to test this app
  ### ${answer.test}

  ## Questions
  ### If you have any questions you may contact me at either
  ### GitHub: [${answer.contact}](https//github.com/${answer.contact})
  ### or
  ### Email: ${answer.email}

  
  
`;
}

module.exports = generateMarkdown;
