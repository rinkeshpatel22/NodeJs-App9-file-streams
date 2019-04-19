// import fs module
const fs = require('fs');

// read file method
let readFile = (req, res) => {
    let readStream = fs.createReadStream('app/files/read.txt');
    let fileData;
    readStream.on('data',(chunk)=>{
        fileData = chunk;
        console.log(chunk);
    })
    readStream.on('end',()=>{
        res.send('File Read Operation Successful, File data: ' + fileData);
    })
}

// wrute file method
let writeFile = (req, res) => {
    let writeStream = fs.createWriteStream('app/files/write.txt');
    writeStream.write(req.params.data );
    writeStream.end( ()=> {
        res.send('File Written Successfully at app.files/write.txt');
    });
}

// copy file method
let copyFile = (req, res) => {
    let readStream = fs.createReadStream('app/files/read.txt');
    let writeStream = fs.createWriteStream('app/files/copy.txt');
    readStream.on('data',(chunk)=>{
        writeStream.write(chunk)
    })
    readStream.on('end',()=>{
        writeStream.end( ()=>{
           res.send('File copied from "app/files/read.txt" to "app/files/copy.txt"')
        })
    })
}

// export controller
module.exports = {
    readFile: readFile,
    writeFile: writeFile,
    copyFile: copyFile
}