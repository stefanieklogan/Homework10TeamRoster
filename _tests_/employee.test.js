const Employee = require('../library/employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an obj containing a 'job' property of 'employee' when called with the 'new' keyword", () => {
            const employeeObj = new Employee("EmployeeSam", 0, "employee@email.com");

            expect(employeeObj.name).toEqual("EmployeeSam");
            expect(employeeObj.id).toEqual(0);
            expect(employeeObj.email).toEqual("employee@email.com");
        })
    })
})