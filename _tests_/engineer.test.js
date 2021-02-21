const Engineer = require('../library/engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an obj containing a 'job' property of 'engineer' when called with the 'new' keyword", () => {
            const engineerObj = new Engineer("EngDavid", 2, "ENG@email.com", "gitENG");

            expect(engineerObj.name).toEqual("EngDavid");
            expect(engineerObj.id).toEqual(2);
            expect(engineerObj.email).toEqual("ENG@email.com");
            expect(engineerObj.github).toEqual("gitENG");
        })
    })
})