const Employee = require('./library/employee');
const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");
// const render = require("./lib/htmlRender");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//hello
const helloMessage = "Greetings, build your team by answering the questions below. Your finished file will be stored in the output folder."
console.log(helloMessage);

function createMgr() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Manager name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Manager ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Manager email:",
        },
        {
            type: 'input',
            name: 'office',
            message: "Manager office suite #:",
        },
        {
            type: 'list',
            name: 'next',
            message: 'Add next:',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit']
        },
    ])
}

function createEng() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Engineer name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Engineer ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Engineer email:",
        },
        {
            type: 'input',
            name: 'github',
            message: "Engineer Github username:",
        },
        {
            type: 'list',
            name: 'next',
            message: 'Add next:',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit']
        },
    ])
}

function createIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Intern name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Intern ID#:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Intern email:",
        },
        {
            type: 'input',
            name: 'school',
            message: "Intern school/university:",
        },
        {
            type: 'list',
            name: 'next',
            message: 'Add next:',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit']
        },
    ])
    addMgr();
}

const team = [];

function addMgr() {
    promptManager().then(function(response) {
        const manager = new Manager(response.name, response.id, response.email, response.office)
        if (response.next === "Engineer") {
            team.push(manager);
            console.log(team);
            createEng();
        }
        else if (response.next === "Intern") {
            team.push(manager);
            console.log(team);
            createIntern();
        }
        else if (response.next === "Manager") {
            team.push(manager);
            console.log(team);
            createMgr();
        }
        else {
            team.push(manager);
            console.log(team);

            fs.writeFile("./output/team.html", render(team), function(err) {
                if (err) throw err;
                console.log("200: Generating file.")
            }); 
            return;
        }
    })
}

createMgr();
