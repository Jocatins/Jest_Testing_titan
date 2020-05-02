const reverseString = require('./reverseString');

test('to see if reverseString exists', () => {
    expect(reverseString).toBeDefined();
});

test('to see if string reverses', () => {
    expect(reverseString('joca')).toEqual('a,c,o,j');
});
test('to see if string reverses with uppercase', () => {
    expect(reverseString('Joca')).toEqual('a,c,o,j');
});