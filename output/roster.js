const Employee = require('../library/employee');
const Manager = require('../library/manager');
const Engineer = require('../library/engineer');
const Intern = require('../library/intern');
const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");

//empty arr to hold employees
let team = [];

//hello
const helloMessage = "Greetings, build your team by answering the questions below. Your finished file will be stored in the output folder."
console.log(helloMessage);
