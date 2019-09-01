const fs = require('fs');
const readFile = require('../script.js');

readFile('index.html')
    .then(data=> console.log(data))
    .catch(err=>console.log(new Error(err)));