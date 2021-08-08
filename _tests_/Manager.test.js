const Manager = require('../lib/Manager');

describe('Manager class', () => {
  it('needs to have a name', () => {
    expect(new Manager("Tester", "1", "tester@test.com", "123").getName()).toBe("Tester");
  });
  it('needs to have an employee ID', () => {
    expect(new Manager("Tester", "1", "tester@test.com", "123").getId()).toBe("1");
  });
  it('needs to have an email', () => {
    expect(new Manager("Tester", "1", "tester@test.com", "123").getEmail()).toBe("tester@test.com");
  });
  it('needs to have an office number', () => {
    expect(new Manager("Tester", "1", "tester@test.com", "123").getOfficeNumber()).toBe("123");
  });
});
