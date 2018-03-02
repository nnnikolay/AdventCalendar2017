const fs = require('fs');

const normalize = str => str.toLowerCase().split('').sort().join('').trim();

const isAnagram = (str1, str2) => normalize(str1) === normalize(str2);

const text = new Promise((resolve, reject) => fs.readFile("./Day4Input.txt", (err, t) => resolve(t.toString().split('\n'))));

text.then(input => 
  input.map(line => {
    const lineArr = line.split(' ');

    for (let i = 0; i < lineArr.length; i++) {
      for(let j = 0; j < lineArr.length; j++) {
        if (i === j) continue;
        if (isAnagram(lineArr[i], lineArr[j])) {
          return 0;
        }
      }
    }
  
    return 1;
  })
)
.then(result => console.log(result.reduce((a, b) => a + b)))
.catch(e => console.log(e));
