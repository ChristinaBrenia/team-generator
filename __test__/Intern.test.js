const Intern = require("../lib/Intern");

test ('getRole() should return \"Intern\"', () => {
    const testValue = "Intern"
    const intern = new Intern ("Skylar",143,"test@email.com", 'St.Leo University')
    expect(intern.getRole()).toBe(testValue)
})


