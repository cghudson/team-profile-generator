const Employee = require('../lib/Employee')

test('Doees this set Employee object?', () => {
    const employee = new Employee('name', 1, 'email')

    expect(employee.name).toBe('name');
    expect(employee.id).toBe(1)
    expect(employee.email).toBe('email')
    expect(employee.getName()).toBe('name')
    expect(employee.getId()).toBe(1)
    expect(employee.getEmail()).toBe('email')
    expect(employee.getRole()).toBe('Employee')
})