const { readFileSync } = require('fs');

const data = readFileSync('file.txt', 'utf8');

console.log(data);
