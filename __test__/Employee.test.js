const Employee = require("../lib/Employee");

test("Can set name via constructor arguments", () => {
    const name = "Robert";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});