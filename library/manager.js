const Employee = require('../library/employee');

let Manager = class extends Employee {
    constructor (name, id, email, office) {
        super (name, id, email);
        this.office = office;
    }
    printInfo() {
        console.log(`Name: ${this.name} :: Email: ${this.email} :: ID: ${this.id}:: Office: ${this.office}`);
    }
    
    getName() {return this.name};
    getId() {return this.id};
    getEmail() {return this.email};
    getOffice() {return this.office};
    getRole() {return "Manager"};
}

module.exports = Manager