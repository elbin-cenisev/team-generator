const Employee = require('../lib/Employee');

describe('Employee Class', () => {
  it('needs to have a name', () => {
    expect(new Employee("Tester", "1", "tester@test.com").getName()).toBe("Tester");
  });
  it('needs to have an employee ID', () => {
    expect(new Employee("Tester", "1", "tester@test.com").getId()).toBe("1");
  });
  it('needs to have an email', () => {
    expect(new Employee("Tester", "1", "tester@test.com").getEmail()).toBe("tester@test.com");
  });
});