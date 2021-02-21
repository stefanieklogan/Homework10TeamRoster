const Engineer = require('../library/engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an obj containing a 'job' property of 'engineer' when called with the 'new' keyword", () => {
            const engineerObj = new Engineer("Bob", 5, "email@email", "gitMe");

            expect(engineerObj.name).toEqual("Bob");
            expect(engineerObj.id).toEqual(5);
            expect(engineerObj.email).toEqual("email");
            expect(engineerObj.github).toEqual("gitMe");
        })
    })
})

console.log(engineerObj);