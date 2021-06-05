const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const firsttest = readFileSync('./content/subfolder/test.txt','utf8');

console.log(first,firsttest);

writeFileSync('./content/results.txt','this is my first result :'+first + ", "+ firsttest,{flag:'a'})
