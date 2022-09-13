//const fs = require('fs');

//fs.writeFileSync('notes.txt','.My content');

//fs.appendFileSync('notes.txt','.My content');
const add = require('./utils');
const sum = add(4,-2);
//const name = "Anshu";
console.log(sum);


const note = require('./notes');
const noteMsg = note();
console.log(noteMsg);