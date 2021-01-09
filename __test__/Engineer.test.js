const Engineer = require("../lib/Engineer");

test ('getRole() should return \"Engineer\"', () => {
    const testValue = "Engineer"
    const engineer = new Engineer ("Raff",167,"test@email.com", 'raffhub')
    expect(engineer.getRole()).toBe(testValue)
})

