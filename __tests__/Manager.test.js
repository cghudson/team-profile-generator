const Manager = require('../lib/Manager')

test('Does this set Manager object?', () => {
    const manager = new Manager('name', 1, 'email', 'officeNumber');

    expect(manager.officeNumber).toBe('officeNumber')
    expect(manager.getRole()).toBe('Manager')
    expect(manager.getOfficeNumber()).toBe('officeNumber')
})