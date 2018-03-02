const fs = require('fs');

const result = new Promise((resolve, reject) => {
  fs.readFile('./Day2Input.txt', (err, d) => {
    if (err) {
      throw new Error(err);
    }
    
    resolve(d.toString().split('\n'));
  })
})
  .then(d => d.map((element) => {
    const innerArray = element.split('\t');
    const max = innerArray.reduce((a, b) => Math.max(+a, +b));
    const min = innerArray.reduce((a, b) => Math.min(+a, +b));
    return max - min;
  }))
  .then(d => console.log(d.reduce((a,b) => a + b, 0)));