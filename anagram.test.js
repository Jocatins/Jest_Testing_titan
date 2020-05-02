const isAnagram = require('./anagram');

test('testing if isAnagram is a function', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('"is elbow an anagram of below"', () => {
    expect(isAnagram('elbow', 'below')).toBeTruthy();
});
test('"is cinema an anagram of iceman$$"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});
test('"is gypsy NOT an anagram of titan"', () => {
    expect(isAnagram('gypsy', 'titan')).toBeFalsy();
});