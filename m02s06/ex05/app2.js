const { writeFileSync } = require('fs');

const { readFileSync } = require('fs');

let data = readFileSync('my-file.txt', 'utf8');

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = dd + '.' + mm + '.' + yyyy;

let response = `${data},azi,${today}!`;

writeFileSync('./file-response.txt', response);
