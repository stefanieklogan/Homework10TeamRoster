const Employee = require('../library/employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an obj containing a 'job' property of 'employee' when called with the 'new' keyword", () => {
            const employeeObj = new Employee("Bob", 5, "email@email");

            expect(employeeObj.name).toEqual("Bob");
            expect(employeeObj.id).toEqual(5);
            expect(employeeObj.email).toEqual("email@email");
        })
    })
})
