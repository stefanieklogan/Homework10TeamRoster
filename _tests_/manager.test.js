const Manager = require('../library/manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an obj containing a 'job' property of 'manager' when called with the 'new' keyword", () => {
            const managerObj = new Manager("ManagerBob", 1, "Mgremail@email.com", "Suite 101");

            expect(managerObj.name).toEqual("ManagerBob");
            expect(managerObj.id).toEqual(1);
            expect(managerObj.email).toEqual("Mgremail@email.com");
            expect(managerObj.office).toEqual("Suite 101");
        })
    })
})