const inquirer = require('inquirer');
const fs = require('fs');

const createRoster = ({name}) =>
`${name}`

inquirer
  .prompt([
    {type: 'input',
        name: 'name',
        message: "What is the manager's name?",
    },
    // {type: 'input',
    // name: 'idMgr',
    // message: 'What is the manager\'s ID number?',
    // },
    // {type: 'input',
    // name: 'emailMgr',
    // message: 'What is the manager\'s email address?',
    // },
    // {type: 'input',
    // name: 'officeMgr',
    // message: 'What is the manager\'s office suite number?',
    // },
    {type: 'list',
        name: 'next',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'Exit']
    },
    // {
    //     when: input => {
    //         return input.next == "Intern"
    //     },
    //     type: "input",
    //     name: "school",
    //     message: "What school do they attend?",
    // },
    // {
    //     when: input => {
    //         return input.next == "Engineer"
    //     },
    //     type: "input",
    //     name: "github",
    //     message: "Enter your github username:",
    // }
])

.then((input) => {
   
    if (input.next === "Engineer") {
    console.log("Eng");
    }
    else if (input.next === "Intern") {
    console.log("Intern");
    }
    else {
    console.log("exit");
    }
})

.then((answer) => {

    const newFile = createRoster(answer);

    fs.writeFile('indexTEST.html', newFile, (err) =>
      err ? console.log(err) : console.log('200; roster is ready.')
    );
});