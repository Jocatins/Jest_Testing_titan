const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: h => h,
    createUser: () => {
        const gypsy = {firstName: 'titan'};
        gypsy['lastName']= 'Joca';
        return gypsy;
    },
    fetchTitan: () => axios.get('http://jsonplaceholder.typicode.com/users/2')
    .then(res => res.data)
    .catch(err => 'error')
};

module.exports = functions;