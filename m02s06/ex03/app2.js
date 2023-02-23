const { readFileSync } = require('fs');

let data = readFileSync('file.txt', 'utf8');

data += ` This is our node script!`;

console.log(data);
