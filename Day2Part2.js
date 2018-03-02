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
    for(let i = 0; i < innerArray.length; i++) {
      for(let y = 0; y < innerArray.length; y++) {
        if (i === y) continue;
        
        if ((innerArray[i] % innerArray[y]) === 0) {
          return innerArray[i] / innerArray[y];
        }
      }
    }
  }))
  .then(d => console.log(d.reduce((a,b) => a + b, 0)));
