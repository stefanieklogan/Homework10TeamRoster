const Employee = require('../library/employee');

let Intern = class extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    printInfo() {
        console.log(`Name: ${this.name} :: Email: ${this.email} :: ID: ${this.id}:: School: ${this.school}`);
    }
    
    get Name() {return this.name};
    get Id() {return this.id};
    get Email() {return this.email};
    get School() {return this.school};
}

module.exports = Intern