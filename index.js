const Employee = require('./library/employee');
const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//hello
const helloMessage = "Greetings! Build your team by answering the questions below. \nYour finished file will be stored in the output folder."
console.log(helloMessage);

function promptMgr() {
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
            message: "Manager suite #:",
        },
        {
            type: 'list',
            name: 'next',
            message: 'Add next:',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit']
        },
    ])
}

function promptEng() {
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

function promptIntern() {
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
}

//Empty arr to hold team member info from prompt responses
const team = [];

function addMgr() {
        promptMgr().then(function(response) {
        const manager = new Manager(response.name, response.id, response.email, response.office)
        if (response.next === "Engineer") {
            team.push(manager);
            console.log(team);
            addEng();
        }
        else if (response.next === "Intern") {
            team.push(manager);
            console.log(team);
            addIntern();
        }
        else if (response.next === "Manager") {
            team.push(manager);
            console.log(team);
            addMgr();
        }
        else {
            team.push(manager);
            console.log(team);
            writeFile();
        }
            
        })}

function addEng() {
        promptEng().then(function(response) {
        const eng = new Engineer(response.name, response.id, response.email, response.github)
        if (response.next === "Engineer") {
                team.push(eng);
                console.log(team);
                addEng();
        }
        else if (response.next === "Intern") {
                team.push(eng);
                console.log(team);
                addIntern();
        }
        else if (response.next === "Manager") {
                team.push(eng);
                console.log(team);
                addMgr();
        }
        else {
                team.push(eng);
                console.log(team);
        }
                fs.writeFile("./output/team.html", render(team), function(err) {
                    if (err) throw err;
                    console.log("200: Generating file.")
                }); 
                return;
        })}

function addIntern() {
        promptIntern().then(function(response) {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        if (response.next === "Engineer") {
                    team.push(intern);
                    console.log(team);
                    addEng();
        }
        else if (response.next === "Intern") {
                    team.push(intern);
                    console.log(team);
                    addIntern();
        }
        else if (response.next === "Manager") {
                    team.push(intern);
                    console.log(team);
                    addMgr();
        }
        else {
                    team.push(intern);
                    console.log(team);
                    console.log("Your file will be ready in the output folder momentarily.")
        }
                    fs.writeFile("./output/team.html", render(team), function(err) {
                        if (err) throw err;
                        console.log("200: Generating file.")
                    }); 
                    return;
        })}

function writeFile() {
    fs.writeFile("./output/team.html", render(team), (err) =>
    err ? console.log(err) : console.log('200; Team roster is ready in output folder.')
    );
}
addMgr();