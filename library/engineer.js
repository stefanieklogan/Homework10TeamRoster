const Employee = require('../library/employee');

let Engineer = class extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    printInfo() {
        console.log(`Name: ${this.name} :: Email: ${this.email} :: ID: ${this.id}:: Github: ${this.github}`);
    }
    
    get Name() {return this.name};
    get Id() {return this.id};
    get Email() {return this.email};
    get Github() {return this.github};
}

module.exports = Engineer