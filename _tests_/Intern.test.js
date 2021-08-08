const Intern = require('../lib/Intern');

describe('Intern class', () => {
  it('needs to have a name', () => {
    expect(new Intern("Tester", "1", "tester@test.com", "University of Test").getName()).toBe("Tester");
  });
  it('needs to have an employee ID', () => {
    expect(new Intern("Tester", "1", "tester@test.com", "University of Test").getId()).toBe("1");
  });
  it('needs to have an email', () => {
    expect(new Intern("Tester", "1", "tester@test.com", "University of Test").getEmail()).toBe("tester@test.com");
  });
  it('needs to have a school associated with it', () => {
    expect(new Intern("Tester", "1", "tester@test.com", "University of Test").getSchool()).toBe("University of Test");
  });
});
