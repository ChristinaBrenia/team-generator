const Manager = require("../lib/Manager");

test ('getRole() should return \"Manager\"', () => {
    const testValue = "Manager"
    const manager = new Manager("Dave",1,"test@email.com", 100)
    expect(manager.getRole()).toBe(testValue)
})