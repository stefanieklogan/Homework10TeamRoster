const Intern = require('../library/intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an obj containing a 'job' property of 'intern' when called with the 'new' keyword", () => {
            const internObj = new Intern("StefanieIntern", 4, "intern@email.com", "Winthrop U");

            expect(internObj.name).toEqual("StefanieIntern");
            expect(internObj.id).toEqual(4);
            expect(internObj.email).toEqual("intern@email.com");
            expect(internObj.school).toEqual("Winthrop U");
        })
    })
})