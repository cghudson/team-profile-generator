const Engineer = require('../lib/Engineer')

test('Does this set Engineer object?', () => {
    const engineer = new Engineer('name', 1, 'email', 'github');

    expect(engineer.github).toBe('github')
    expect(engineer.getRole()).toBe('Engineer')
    expect(engineer.getGithub()).toBe('github')
})