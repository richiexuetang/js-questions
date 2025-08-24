const numOfArgs = require('./solution');

describe('numberOfArguments', () => {
    test('no arguments', () => {
        expect(numOfArgs()).toBe(0);
    });

    test('one argument', () => {
        expect(numOfArgs(0)).toBe(1);
    });

    test('two arguments', () => {
        expect(numOfArgs(0, 1)).toBe(2);
    });
});
