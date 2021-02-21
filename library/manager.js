const Employee = require('../library/employee');

let Manager = class extends Employee {
    constructor (name, id, email, office) {
        super (name, id, email);
        this.office = office;
    }
    printInfo() {
        console.log(`Name: ${this.name} :: Email: ${this.email} :: ID: ${this.id}:: Office: ${this.office}`);
    }
    
    get Name() {return this.name};
    get Id() {return this.id};
    get Email() {return this.email};
    get Office() {return this.office};
}

module.exports = Manager