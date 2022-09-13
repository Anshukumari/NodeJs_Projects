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

// importing validator libraray
const validator = require('validator');
console.log(validator.isEmail('Example@gmail.com'));
console.log(validator.isEmail('Examplegmail.com'));
console.log(validator.isURL('http://Examplegmail.com'));

// importing chalk libraray
const chalk = require('chalk');
console.log(chalk.green.inverse.bold('Success!'));
