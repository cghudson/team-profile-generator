const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const MAIN_DIR = path.resolve(__dirname, "dist");
const filePath = path.join(MAIN_DIR, "teamProfile.html");

const renderHTML = require("./src/generateHTML");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const { create } = require("domain");

const teamArray = [];

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the Manager's name?",
      },
      {
        type: "input",
        name: "managerID",
        message: "What is the Manager's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
      },
    ])
    .then(res => {
      const manager = new Manager(
        res.managerName,
        res.managerID,
        res.email,
        res.officeNumber
      );
      teamArray.push(manager);
      menu();
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is the Engineer's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Engineer's GitHub Username?",
      },
    ])
    .then(res => {
      const engineer = new Engineer(
        res.engineerName,
        res.engineerID,
        res.email,
        res.officeNumber
      );
      teamArray.push(engineer);
      menu();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the Intern's name?",
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is the Intern's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Intern's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Intern school?",
      },
    ])
    .then(res => {
      const intern = new Intern(
        res.internName,
        res.internID,
        res.email,
        res.school
      );
      teamArray.push(intern);
      menu();
    });
}

function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userChoice",
        message: "What would you like to do next?",
        choices: [
          "Add an Engineer",
          "Add an Intern",
          "Finish creating my team!",
        ],
      },
    ])
    .then(res => {
        if(res.userChoice === "Add an Engineer") {
            createEngineer()
        } else if (res.userChoice === "Add an Intern") {
            createIntern()
        } else if (res.userChoice === "Finish creating my team!") {
            console.log('Your team is complete!')
            createTeam()
        }
    });
}

createManager();

function createTeam() {
  if (!fs.existsSync(MAIN_DIR)) {
    fs.mkdirSync(MAIN_DIR);
  }
  fs.writeFileSync(filePath, renderHTML(teamArray), function(err) {
      if (err) {
          throw err;
      }
  });
}
