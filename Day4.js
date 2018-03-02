const unique = require('unique-words');
const fs = require('fs');

const factorial = (n) => !(n > 1) ? 1 : factorial(n - 1) * n;

const text = new Promise((resolve, reject) => fs.readFile("./Day4Input.txt", (err, t) => resolve(t.toString().split('\n'))));

let validPh = 0;

text
  .then((text) => text.map((line) => line.split(' ').length === unique(line).length ? 1 : 0))
  .then(result => console.log(result.reduce((a, b) => a + b)))




