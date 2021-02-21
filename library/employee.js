class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    printInfo() {
        console.log(`Name: ${this.name} :: Email: ${this.email} :: ID: ${this.id}`);
    }
    
    get Name() {return this.name};
    get Id() {return this.id};
    get Email() {return this.email};
}

module.exports = Employee