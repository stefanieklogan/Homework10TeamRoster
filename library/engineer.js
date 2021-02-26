const Employee = require('../library/employee');

let Engineer = class extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    printInfo() {
        console.log(`Name: ${this.name} :: Email: ${this.email} :: ID: ${this.id}:: Github: ${this.github}`);
    }
    
    getName() {return this.name};
    getId() {return this.id};
    getEmail() {return this.email};
    getGithub() {return this.github};
    getRole() {return "Engineer"};
}

module.exports = Engineer