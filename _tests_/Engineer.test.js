const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
  it('needs to have a name', () => {
    expect(new Engineer("Tester", "1", "tester@test.com", "xXtestXx").getName()).toBe("Tester");
  });
  it('needs to have an employee ID', () => {
    expect(new Engineer("Tester", "1", "tester@test.com", "xXtestXx").getId()).toBe("1");
  });
  it('needs to have an email', () => {
    expect(new Engineer("Tester", "1", "tester@test.com", "xXtestXx").getEmail()).toBe("tester@test.com");
  });
  it('needs to have a github username', () => {
    expect(new Engineer("Tester", "1", "tester@test.com", "xXtestXx").getGithub()).toBe("xXtestXx");
  });
});
