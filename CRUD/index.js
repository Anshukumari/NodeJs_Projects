const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

// To write into tje file
//fs.writeFileSync(filePath,'This is a simple text file!');

// To read the file
/* fs.readFile(filePath,'utf8',(err,item)=>{
    console.log(item);
});

// To append the text
fs.appendFile(filePath,' and file name is apple.txt',(err) =>{
    if(!err) console.log("file is updated");6
}) 

// To rename the file
fs.rename(filePath,`${dirPath}/mango.txt`,(err)=>{
    if(!err) console.log("file name is updated");
}); */

// To delete the file 
fs.unlink(`${dirPath}/mango.txt`, (err) => {
    if (err) throw err;
    console.log('apple.txt was deleted');
});
