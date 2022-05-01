const Employee = require('../lib/Employee')

test('create employee object', () => {
    const employee = new Employee('Carolyn', 1, 'cghudson@uwalumni.com')

    expect(employee.name).toBe('Carolyn');
    expect(employee.id).toBe(1)
    expect(employee.email).toBe('cghudson@uwalumni.com')
    expect(employee.getName()).toBe('Carolyn')
    expect(employee.getId()).toBe(1)
    expect(employee.getEmail()).toBe('cghudson@uwalumni.com')
    expect(employee.getRole()).toBe('Employee')
})