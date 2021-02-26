// const Employee = require('./library/employee');
const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');

const createMgrCard = require('./templates/mgrTemplate');
const createEngCard = require('./templates/engTemplate');
const createInternCard = require('./templates/internTemplate');

const inquirer = require('inquirer');
// const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

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

//Empty arr to hold prompt responses by team members
// const teamArr = [];

//Empty arr to html card for each team member
const rosterArr = [];

//Remove spaces and commas between arr obj
const rosterArrJoin = rosterArr.join('');

function roster(rosterArrJoin) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection" />
        <script src="https://kit.fontawesome.com/9834d6982e.js" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <link rel="stylesheet" href="./assets/style.css" />
    
        <title>Team Roster</title>
    
    </head>
    
    <body>
        <div class="container center">
            <h1>Welcome, team!</h1>
            <div class="row">
                <div class="col s4 m4 center">
                    <i class="fas fa-bolt fa-2x leader"></i><span>Leader</span>
                </div>
    
                <div class="col s4 m4 center">
                    <i class="fas fa-cog fa-2x eng"></i><span>Engineer</span>
                </div>
    
                <div class="col s4 m4 center">
                    <i class="fas fa-graduation-cap fa-2x intern"></i><span>Intern</span>
                </div>
            </div>
        </div>
    
        <!-- ROSTER STARTS HERE -->
        <div class="row mgr">${rosterArrJoin}</div>

        <script type="text/javascript" src="js/materialize.min.js"></script>
    </body>
    
    </html>`
}

function addEng() {
    promptEng().then(function (response) {
        const eng = new Engineer(response.name, response.id, response.email, response.github)
        if (response.next === "Engineer") {
            // teamArr.push(eng);
            // console.log(teamArr);
            rosterArr.push(createEngCard(eng));
            console.log(rosterArr);
            addEng();
        }
        else if (response.next === "Intern") {
            // teamArr.push(eng);
            // console.log(teamArr);
            rosterArr.push(createEngCard(eng));
            addIntern();
        }
        else if (response.next === "Manager") {
            // teamArr.push(eng);
            // console.log(teamArr);
            rosterArr.push(createEngCard(eng));
            addMgr();
        }
        else {
            // teamArr.push(eng);
            // console.log(teamArr);
            rosterArr.push(createEngCard(eng));
            console.log('\nroster arr: ' + rosterArr);
            createFile();
        }
    })
}

function addIntern() {
    promptIntern().then(function (response) {
        const intern = new Intern(response.name, response.id, response.email, response.school)
        if (response.next === "Engineer") {
            // teamArr.push(intern);
            // console.log(teamArr);
            rosterArr.push(createInternCard(intern));
            addEng();
        }
        else if (response.next === "Intern") {
            // teamArr.push(intern);
            // console.log(teamArr);
            rosterArr.push(createInternCard(intern));
            addIntern();
        }
        else if (response.next === "Manager") {
            // teamArr.push(intern);
            // console.log(teamArr);
            rosterArr.push(createInternCard(intern));
            addMgr();
        }
        else {
            // teamArr.push(intern);
            // console.log(teamArr);
            rosterArr.push(createInternCard(intern));
            console.log('\nroster arr: ' + rosterArr);
            createFile();
        }
    })
}

function addMgr() {
    promptMgr().then(function (response) {
        const manager = new Manager(response.name, response.id, response.email, response.office)
        if (response.next === "Engineer") {
           // teamArr.push(manager);
            // console.log(teamArr);
            rosterArr.push(createMgrCard(manager));
            addEng();
        }
        else if (response.next === "Intern") {
            // teamArr.push(manager);
            // console.log(teamArr);
            rosterArr.push(createMgrCard(manager));
            addIntern();
        }
        else if (response.next === "Manager") {
            // teamArr.push(Manager);
            rosterArr.push(createMgrCard(manager));
            // console.log('\nroster arr: ' + rosterArr);
            addMgr();
        }
        else {
            // teamArr.push(manager);
            // console.log(teamArr);
            rosterArr.push(createMgrCard(manager));
            console.log('\nroster arr: ' + rosterArr);
            console.log('\nJOIN ROSTER: ' + rosterArrJoin);
            createFile();
        }

    })
}
function createFile() {
    fs.writeFile('team.html', roster, (err) =>
        err ? console.log(err) : console.log('200; your file is ready ---> ./output.')
    )
};


addMgr();
