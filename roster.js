const Employee = require('./library/employee');
const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");
// const Script = require('./script');

// const team = [
//     {        
//       name: 'Moira', 
//       id: '1',       
//       email: 'email@email',
//       office: '100'
//     },
//     {
//       name: 'Roland',
//       id: '2',
//       email: 'emailENG',
//       github: 'ENG'
//     }
//   ]

const teamMapArr = team.map(team => {
    const pObj = { ...team };
    if (pObj.office != null) {
        pObj.mgr = true;
    }
    if (pObj.github != null) {
        pObj.eng = true;
    }
    if (pObj.school != null) {
        pObj.intern = true;
    }
    return pObj;
});

console.log(teamMapArr);
