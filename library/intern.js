const Employee = require('../library/employee');

let Intern = class extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    printInfo() {
        console.log(`Name: ${this.name} :: Email: ${this.email} :: ID: ${this.id}:: School: ${this.school}`);
    }
    
    getName() {return this.name};
    getId() {return this.id};
    getEmail() {return this.email};
    getSchool() {return this.school};
    getRole() {return "Intern"};
}

module.exports = Intern