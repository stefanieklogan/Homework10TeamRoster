class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    printInfo() {
        console.log(`Name: ${this.name} :: Email: ${this.email} :: ID: ${this.id}`);
    }
    
    getName() {return this.name};
    getId() {return this.id};
    getEmail() {return this.email};
}

module.exports = Employee