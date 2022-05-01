const Intern = require('../lib/Intern')

test('Does this set Intern object?', () => {
    const intern = new Intern('name', 1, 'email', 'school');

    expect(intern.school).toBe('school')
    expect(intern.getRole()).toBe('Intern')
    expect(intern.getSchool()).toBe('school')
})