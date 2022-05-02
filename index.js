const inquirer =  require('inquirer');
const path = require('path');
const fs = require('fs');

const MAIN_DIR = path.resolve(__dirname, 'dist');
const filePath = path.join(MAIN_DIR, 'teamProfile.html');

const renderHtml = require('./src/generateHTML');
const Manager = require('./lib/Manager');

const teamArray = [];

function start(){
    function createManager(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the Manager's name?"
            }
        ]).then((res)=> {
            const manager = new Manager(
                res.managerName
            )
            teamArray.push(manager)
            menu()
        })
    }

    function menu(){
        inquirer.prompt([
        {
            type: 'list',
            name: 'userChoice',
            message: 'What would you like to do?', 
            choices: ['Add an Engineer', 'Add an Intern', 'Create my HTML']
        }
    ]).then(res  => {

    })
    }



    // inquirer.prompt([
    //     {
    //         type: 'input',
    //         name: 'fullName',
    //         message: 'what is your full name?'
    //     }
    // ]).then(res =>{
    //     if(!fs.existsSync(MAIN_DIR)){
    //         fs.mkdirSync(MAIN_DIR)
    //     }
    //     fs.writeFileSync(filePath, renderHtml(), 'utf-8')
    // })
}
start()