const functions = require('./functions');

// beforeEach(() => initDatabase() );
// afterEach(() => closeDatabase() );

// beforeAll(() => initDatabase() );
// afterAll(() => closeDatabase() );


// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const gypsyCheck = () => console.log('Checking gypsies ....');

describe('Checking gypsies', () => {
    beforeEach(() => gypsyCheck());

    test('Gypsy is Candace', () => {
        const gypsy = 'Candace';
        expect(gypsy).toBe('Candace');
    });
    test('Gypsy is Jenny', () => {
        const gypsy = 'Jenny';
        expect(gypsy).toBe('Jenny');
    });
});
test('add 3 + 6 to equal 9', () => {
    expect(functions.add(3, 6)).toBe(9);
});
// not equal
test('add 3 + 6 NOT equal to 8', () => {
    expect(functions.add(3, 6)).not.toBe(8);
});
//to be null
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});
//to be falsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});
//to equal
test('gypsy should be titan Joca', () => {
    expect(functions.createUser(undefined)).toEqual({
        firstName: 'titan', 
        lastName: 'Joca'
    });
});

//less than and greater than

test('Should be less than 900',() =>{
    const load1 = 400;
    const load2 = 450;
    expect(load1 + load2).toBeLessThan(900);
});

//regular expressions
test('there is no e in titan', () =>{
    expect('titan').not.toMatch(/e/);
});

//arrays
test('joca should be in the username', () => {
    username = ['titan','owes','louis','joca'];
    expect(username).not.toContain('leo');
});

// working with async data
//Promise
// test('the fetched name is Ervin Howell',()=> {
//     expect.assertions(1);
//     return functions.fetchTitan()
//     .then(data => {
//         expect(data.name).toEqual('Ervin Howell');
//     });
// });

//Async Await

// test('the fetched name is Ervin Howell', async ()=> {
//     expect.assertions();
//     const data = await functions.fetchTitan();
//     expect(data.name).toEqual('Ervin Howell');
// });
